import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Create sendMock in a hoisted scope so it's available to the mock factory
const { sendMock } = vi.hoisted(() => {
  return {
    sendMock: vi.fn().mockResolvedValue({ data: { id: 'mock-id' }, error: null })
  };
});

// Mock the resend package before importing the route handler
vi.mock('resend', () => {
  return {
    Resend: vi.fn().mockImplementation(() => {
      return {
        emails: {
          send: sendMock
        }
      };
    })
  };
});

import { POST } from '../app/api/contact/route';

function makeReq(body: any, headers: Record<string,string> = {}) {
  return {
    json: async () => body,
    headers: {
      get: (key: string) => headers[key.toLowerCase()] || null
    }
  } as any;
}

describe('API /api/contact route', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    vi.clearAllMocks(); // clear call history but keep mock implementations
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('returns 503 when RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY;
    const req = makeReq({});
    const res: any = await POST(req);
    expect(res.status).toBe(503);
  });

  it('returns 400 when required fields are missing even if API key present', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    const req = makeReq({ name: '', email: '', message: '' });
    const res: any = await POST(req);
    expect(res.status).toBe(400);
  });

  it('sends email and returns 200 when payload is valid', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    process.env.CONTACT_EMAIL = 'owner@example.com';

    const payload = { 
      name: 'Alice', 
      email: 'alice@example.com', 
      message: 'Hello', 
      phone: '123',
      projectType: 'website' 
    };
    const req = makeReq(payload, { 'x-forwarded-for': '1.2.3.4' });
    const res: any = await POST(req);

    expect(sendMock).toHaveBeenCalled();
    expect(res.status).toBe(200);
  });
});
