const request = require('supertest');
const app = require('./app');

describe('API CRUD de Sensores IoT', () => {

  test('GET /health debe retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/sensors debe retornar la lista inicial de sensores', async () => {
    const res = await request(app).get('/api/sensors');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });

  test('GET /api/sensors/:id debe retornar un sensor existente', async () => {
    const res = await request(app).get('/api/sensors/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.device).toBe('ESP32 Devkit V1 Type C');
  });

  test('GET /api/sensors/:id debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/api/sensors/999');
    expect(res.statusCode).toBe(404);
  });

  test('POST /api/sensors debe crear un nuevo sensor', async () => {
    const newSensor = {
      name: 'Sensor Proximidad',
      device: 'NodeMCU',
      value: 12.5
    };
    const res = await request(app).post('/api/sensors').send(newSensor);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Sensor Proximidad');
    expect(res.body.id).toBeDefined();
  });

  test('DELETE /api/sensors/:id debe eliminar un sensor', async () => {
    const res = await request(app).delete('/api/sensors/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);

    const resCheck = await request(app).get('/api/sensors/1');
    expect(resCheck.statusCode).toBe(404);
  });
});