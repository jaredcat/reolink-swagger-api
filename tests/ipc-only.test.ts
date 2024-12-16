
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    

      describe('IPC-only', () => {
        
    describe('GetWifi', () => {
      it('should get wifi settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWifi`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWifi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetWifi', () => {
      it('should set wifi settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetWifi`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetWifi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('TestWifi', () => {
      it('should test wifi connection', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=TestWifi`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=TestWifi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('ScanWifi', () => {
      it('should scan for wifi networks', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=ScanWifi`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=ScanWifi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetWifiSignal', () => {
      it('should get wifi signal strength', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWifiSignal`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWifiSignal`, {
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
      