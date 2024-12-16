
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    

      describe('Video Input', () => {
        
    describe('GetImage', () => {
      it('should get image settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetImage`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetImage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetImage', () => {
      it('should set image settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetImage`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetImage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetOsd', () => {
      it('should get osd settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetOsd`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetOsd`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetOsd', () => {
      it('should set osd settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetOsd`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetOsd`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetIsp', () => {
      it('should get isp settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetIsp`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetIsp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetIsp', () => {
      it('should set isp settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetIsp`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetIsp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetMask', () => {
      it('should get privacy mask settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetMask`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetMask`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetMask', () => {
      it('should set privacy mask settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetMask`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetMask`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetCrop', () => {
      it('should get video crop settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetCrop`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetCrop`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetCrop', () => {
      it('should set video crop settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetCrop`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetCrop`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetStitch', () => {
      it('should get image stitch settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetStitch`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetStitch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetStitch', () => {
      it('should set image stitch settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetStitch`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetStitch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });
      });
      