
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    

      describe('Encoding', () => {
        
    describe('GetEnc', () => {
      it('should get encoding configuration', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetEnc`, {
          method: 'POST',
          body: requestBody,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mock-token'
          }
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
      });

      it('should handle errors appropriately', async () => {
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetEnc`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetEnc', () => {
      it('should set encoding configuration', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetEnc`, {
          method: 'POST',
          body: requestBody,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mock-token'
          }
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
      });

      it('should handle errors appropriately', async () => {
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetEnc`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });
      });
      