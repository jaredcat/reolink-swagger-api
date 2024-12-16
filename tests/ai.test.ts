
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    

      describe('AI', () => {
        
    describe('GetAiAlarm', () => {
      it('should get ai alarm led settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiAlarm`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiAlarm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetAiAlarm', () => {
      it('should set ai alarm led settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAiAlarm`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAiAlarm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetAlarmArea', () => {
      it('should set alarm detection area', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAlarmArea`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAlarmArea`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetAiCfg', () => {
      it('should get ai configuration', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiCfg`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiCfg`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetAiCfg', () => {
      it('should set ai configuration', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAiCfg`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetAiCfg`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetAiState', () => {
      it('should get ai detection states', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiState`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetAiState`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });
      });
      