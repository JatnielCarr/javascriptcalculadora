const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Cálculo de Áreas y Volúmenes',
      version: '1.0.0',
      description: 'API para calcular áreas, perímetros y volúmenes de figuras geométricas',
      contact: {
        name: 'Soporte API',
        email: 'soporte@calculadora-geometrica.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor de desarrollo'
      }
    ]
  },
  apis: ['./server.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Clase para cálculos geométricos
class CalculadoraGeometrica {
  /**
   * Calcula el área de un cuadrado
   * @param {number} lado - Longitud del lado del cuadrado
   * @returns {number} Área del cuadrado
   */
  static areaCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return lado * lado;
  }

  /**
   * Calcula el perímetro de un cuadrado
   * @param {number} lado - Longitud del lado del cuadrado
   * @returns {number} Perímetro del cuadrado
   */
  static perimetroCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return 4 * lado;
  }

  /**
   * Calcula el área de un rectángulo
   * @param {number} base - Base del rectángulo
   * @param {number} altura - Altura del rectángulo
   * @returns {number} Área del rectángulo
   */
  static areaRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return base * altura;
  }

  /**
   * Calcula el perímetro de un rectángulo
   * @param {number} base - Base del rectángulo
   * @param {number} altura - Altura del rectángulo
   * @returns {number} Perímetro del rectángulo
   */
  static perimetroRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return 2 * (base + altura);
  }

  /**
   * Calcula el área de un círculo
   * @param {number} radio - Radio del círculo
   * @returns {number} Área del círculo
   */
  static areaCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return Math.PI * radio * radio;
  }

  /**
   * Calcula el perímetro de un círculo
   * @param {number} radio - Radio del círculo
   * @returns {number} Perímetro del círculo
   */
  static perimetroCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return 2 * Math.PI * radio;
  }

  /**
   * Calcula el volumen de un cubo
   * @param {number} lado - Longitud del lado del cubo
   * @returns {number} Volumen del cubo
   */
  static volumenCubo(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return lado * lado * lado;
  }

  /**
   * Calcula el volumen de una esfera
   * @param {number} radio - Radio de la esfera
   * @returns {number} Volumen de la esfera
   */
  static volumenEsfera(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return (4/3) * Math.PI * radio * radio * radio;
  }

  /**
   * Calcula el volumen de un cilindro
   * @param {number} radio - Radio de la base del cilindro
   * @param {number} altura - Altura del cilindro
   * @returns {number} Volumen del cilindro
   */
  static volumenCilindro(radio, altura) {
    if (radio <= 0 || altura <= 0) throw new Error('El radio y altura deben ser números positivos');
    return Math.PI * radio * radio * altura;
  }
}

// Middleware para validar parámetros numéricos
const validarParametro = (paramName) => {
  return (req, res, next) => {
    const valor = parseFloat(req.query[paramName] || req.params[paramName]);
    if (isNaN(valor)) {
      return res.status(400).json({
        error: `El parámetro '${paramName}' debe ser un número válido`
      });
    }
    req[paramName] = valor;
    next();
  };
};

// Endpoints para áreas
/**
 * @swagger
 * /api/Geometria/area/cuadrado:
 *   get:
 *     summary: Calcula el área de un cuadrado
 *     parameters:
 *       - in: query
 *         name: lado
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitud del lado del cuadrado
 *     responses:
 *       200:
 *         description: Área calculada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 figura:
 *                   type: string
 *                 lado:
 *                   type: number
 *                 area:
 *                   type: number
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/area/cuadrado', validarParametro('lado'), (req, res) => {
  try {
    const lado = req.lado;
    const area = CalculadoraGeometrica.areaCuadrado(lado);
    res.json({
      figura: 'Cuadrado',
      lado: lado,
      area: area,
      formula: 'A = lado²'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/Geometria/area/rectangulo:
 *   get:
 *     summary: Calcula el área de un rectángulo
 *     parameters:
 *       - in: query
 *         name: base
 *         required: true
 *         schema:
 *           type: number
 *         description: Base del rectángulo
 *       - in: query
 *         name: altura
 *         required: true
 *         schema:
 *           type: number
 *         description: Altura del rectángulo
 *     responses:
 *       200:
 *         description: Área calculada exitosamente
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/area/rectangulo', validarParametro('base'), validarParametro('altura'), (req, res) => {
  try {
    const base = req.base;
    const altura = req.altura;
    const area = CalculadoraGeometrica.areaRectangulo(base, altura);
    res.json({
      figura: 'Rectángulo',
      base: base,
      altura: altura,
      area: area,
      formula: 'A = base × altura'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/Geometria/area/circulo:
 *   get:
 *     summary: Calcula el área de un círculo
 *     parameters:
 *       - in: query
 *         name: radio
 *         required: true
 *         schema:
 *           type: number
 *         description: Radio del círculo
 *     responses:
 *       200:
 *         description: Área calculada exitosamente
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/area/circulo', validarParametro('radio'), (req, res) => {
  try {
    const radio = req.radio;
    const area = CalculadoraGeometrica.areaCirculo(radio);
    res.json({
      figura: 'Círculo',
      radio: radio,
      area: area,
      formula: 'A = π × r²'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoints para volúmenes
/**
 * @swagger
 * /api/Geometria/volumen/cubo:
 *   get:
 *     summary: Calcula el volumen de un cubo
 *     parameters:
 *       - in: query
 *         name: lado
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitud del lado del cubo
 *     responses:
 *       200:
 *         description: Volumen calculado exitosamente
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/volumen/cubo', validarParametro('lado'), (req, res) => {
  try {
    const lado = req.lado;
    const volumen = CalculadoraGeometrica.volumenCubo(lado);
    res.json({
      figura: 'Cubo',
      lado: lado,
      volumen: volumen,
      formula: 'V = lado³'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/Geometria/volumen/esfera:
 *   get:
 *     summary: Calcula el volumen de una esfera
 *     parameters:
 *       - in: query
 *         name: radio
 *         required: true
 *         schema:
 *           type: number
 *         description: Radio de la esfera
 *     responses:
 *       200:
 *         description: Volumen calculado exitosamente
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/volumen/esfera', validarParametro('radio'), (req, res) => {
  try {
    const radio = req.radio;
    const volumen = CalculadoraGeometrica.volumenEsfera(radio);
    res.json({
      figura: 'Esfera',
      radio: radio,
      volumen: volumen,
      formula: 'V = (4/3) × π × r³'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/Geometria/volumen/cilindro:
 *   get:
 *     summary: Calcula el volumen de un cilindro
 *     parameters:
 *       - in: query
 *         name: radio
 *         required: true
 *         schema:
 *           type: number
 *         description: Radio de la base del cilindro
 *       - in: query
 *         name: altura
 *         required: true
 *         schema:
 *           type: number
 *         description: Altura del cilindro
 *     responses:
 *       200:
 *         description: Volumen calculado exitosamente
 *       400:
 *         description: Parámetros inválidos
 */
app.get('/api/Geometria/volumen/cilindro', validarParametro('radio'), validarParametro('altura'), (req, res) => {
  try {
    const radio = req.radio;
    const altura = req.altura;
    const volumen = CalculadoraGeometrica.volumenCilindro(radio, altura);
    res.json({
      figura: 'Cilindro',
      radio: radio,
      altura: altura,
      volumen: volumen,
      formula: 'V = π × r² × h'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoints adicionales para perímetros
app.get('/api/Geometria/perimetro/cuadrado', validarParametro('lado'), (req, res) => {
  try {
    const lado = req.lado;
    const perimetro = CalculadoraGeometrica.perimetroCuadrado(lado);
    res.json({
      figura: 'Cuadrado',
      lado: lado,
      perimetro: perimetro,
      formula: 'P = 4 × lado'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/Geometria/perimetro/rectangulo', validarParametro('base'), validarParametro('altura'), (req, res) => {
  try {
    const base = req.base;
    const altura = req.altura;
    const perimetro = CalculadoraGeometrica.perimetroRectangulo(base, altura);
    res.json({
      figura: 'Rectángulo',
      base: base,
      altura: altura,
      perimetro: perimetro,
      formula: 'P = 2 × (base + altura)'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/Geometria/perimetro/circulo', validarParametro('radio'), (req, res) => {
  try {
    const radio = req.radio;
    const perimetro = CalculadoraGeometrica.perimetroCirculo(radio);
    res.json({
      figura: 'Círculo',
      radio: radio,
      perimetro: perimetro,
      formula: 'P = 2 × π × r'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint de información de la API
app.get('/', (req, res) => {
  res.json({
    nombre: 'API de Cálculo de Áreas y Volúmenes',
    version: '1.0.0',
    descripcion: 'API para calcular áreas, perímetros y volúmenes de figuras geométricas',
    documentacion: '/swagger',
    endpoints: {
      areas: [
        'GET /api/Geometria/area/cuadrado?lado={valor}',
        'GET /api/Geometria/area/rectangulo?base={valor}&altura={valor}',
        'GET /api/Geometria/area/circulo?radio={valor}'
      ],
      perimetros: [
        'GET /api/Geometria/perimetro/cuadrado?lado={valor}',
        'GET /api/Geometria/perimetro/rectangulo?base={valor}&altura={valor}',
        'GET /api/Geometria/perimetro/circulo?radio={valor}'
      ],
      volumenes: [
        'GET /api/Geometria/volumen/cubo?lado={valor}',
        'GET /api/Geometria/volumen/esfera?radio={valor}',
        'GET /api/Geometria/volumen/cilindro?radio={valor}&altura={valor}'
      ]
    }
  });
});

// Middleware para manejar rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    mensaje: 'La ruta solicitada no existe en esta API',
    documentacion: '/swagger'
  });
});

// Middleware para manejar errores
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    error: 'Error interno del servidor',
    mensaje: error.message
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger disponible en http://localhost:${PORT}/swagger`);
  console.log(`📋 Especificación OpenAPI en http://localhost:${PORT}/swagger.json`);
});

module.exports = app; 