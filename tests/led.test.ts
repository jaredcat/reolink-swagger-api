
    import { describe, it, expect, beforeAll, afterAll } from 'vitest';
    import fetch from 'node-fetch';

    const baseUrl = process.env.API_BASE_URL || 'https://mock-camera-ip';

    beforeAll(() => {
      // Setup - e.g., login to get token
    });

    afterAll(() => {
      // Cleanup
    });
    

      describe('LED', () => {
        
    describe('GetIrLights', () => {
      it('should get ir light settings', async () => {
        

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetIrLights`, {
          method: 'POST',
          
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetIrLights`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetIrLights', () => {
      it('should set ir light settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetIrLights`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetIrLights`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetPowerLed', () => {
      it('should get power led status', async () => {
        

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetPowerLed`, {
          method: 'POST',
          
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetPowerLed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetPowerLed', () => {
      it('should set power led status', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetPowerLed`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetPowerLed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('GetWhiteLed', () => {
      it('should get white led settings', async () => {
        

        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWhiteLed`, {
          method: 'POST',
          
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=GetWhiteLed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


    describe('SetWhiteLed', () => {
      it('should set white led settings', async () => {
        const requestBody = [
  null
];

        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetWhiteLed`, {
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
        const response = await fetch(`${baseUrl}/api.cgi?cmd=SetWhiteLed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        expect(response.status).toBe(401);
      });
    });


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
      });
      