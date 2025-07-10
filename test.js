const request = require('supertest');
const app = require('./server');

describe('API de Cálculo de Áreas y Volúmenes', () => {
  describe('GET /', () => {
    it('debería devolver información de la API', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('nombre');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('endpoints');
    });
  });

  describe('Cálculos de Áreas', () => {
    it('debería calcular el área de un cuadrado', async () => {
      const response = await request(app).get('/api/Geometria/area/cuadrado?lado=5');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        figura: 'Cuadrado',
        lado: 5,
        area: 25,
        formula: 'A = lado²'
      });
    });

    it('debería calcular el área de un rectángulo', async () => {
      const response = await request(app).get('/api/Geometria/area/rectangulo?base=4&altura=6');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        figura: 'Rectángulo',
        base: 4,
        altura: 6,
        area: 24,
        formula: 'A = base × altura'
      });
    });

    it('debería calcular el área de un círculo', async () => {
      const response = await request(app).get('/api/Geometria/area/circulo?radio=3');
      expect(response.status).toBe(200);
      expect(response.body.figura).toBe('Círculo');
      expect(response.body.radio).toBe(3);
      expect(response.body.area).toBeCloseTo(28.27, 2);
      expect(response.body.formula).toBe('A = π × r²');
    });
  });

  describe('Cálculos de Perímetros', () => {
    it('debería calcular el perímetro de un cuadrado', async () => {
      const response = await request(app).get('/api/Geometria/perimetro/cuadrado?lado=5');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        figura: 'Cuadrado',
        lado: 5,
        perimetro: 20,
        formula: 'P = 4 × lado'
      });
    });

    it('debería calcular el perímetro de un rectángulo', async () => {
      const response = await request(app).get('/api/Geometria/perimetro/rectangulo?base=4&altura=6');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        figura: 'Rectángulo',
        base: 4,
        altura: 6,
        perimetro: 20,
        formula: 'P = 2 × (base + altura)'
      });
    });

    it('debería calcular el perímetro de un círculo', async () => {
      const response = await request(app).get('/api/Geometria/perimetro/circulo?radio=3');
      expect(response.status).toBe(200);
      expect(response.body.figura).toBe('Círculo');
      expect(response.body.radio).toBe(3);
      expect(response.body.perimetro).toBeCloseTo(18.85, 2);
      expect(response.body.formula).toBe('P = 2 × π × r');
    });
  });

  describe('Cálculos de Volúmenes', () => {
    it('debería calcular el volumen de un cubo', async () => {
      const response = await request(app).get('/api/Geometria/volumen/cubo?lado=3');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        figura: 'Cubo',
        lado: 3,
        volumen: 27,
        formula: 'V = lado³'
      });
    });

    it('debería calcular el volumen de una esfera', async () => {
      const response = await request(app).get('/api/Geometria/volumen/esfera?radio=2');
      expect(response.status).toBe(200);
      expect(response.body.figura).toBe('Esfera');
      expect(response.body.radio).toBe(2);
      expect(response.body.volumen).toBeCloseTo(33.51, 2);
      expect(response.body.formula).toBe('V = (4/3) × π × r³');
    });

    it('debería calcular el volumen de un cilindro', async () => {
      const response = await request(app).get('/api/Geometria/volumen/cilindro?radio=2&altura=5');
      expect(response.status).toBe(200);
      expect(response.body.figura).toBe('Cilindro');
      expect(response.body.radio).toBe(2);
      expect(response.body.altura).toBe(5);
      expect(response.body.volumen).toBeCloseTo(62.83, 2);
      expect(response.body.formula).toBe('V = π × r² × h');
    });
  });

  describe('Validación de Errores', () => {
    it('debería devolver error para parámetros inválidos', async () => {
      const response = await request(app).get('/api/Geometria/area/cuadrado?lado=abc');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('debería devolver error para valores negativos', async () => {
      const response = await request(app).get('/api/Geometria/area/cuadrado?lado=-5');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('debería devolver error para parámetros faltantes', async () => {
      const response = await request(app).get('/api/Geometria/area/cuadrado');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Rutas no encontradas', () => {
    it('debería devolver 404 para rutas inexistentes', async () => {
      const response = await request(app).get('/api/ruta/inexistente');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Endpoint no encontrado');
    });
  });
}); 