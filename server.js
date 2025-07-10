const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const geometriaController = require('./controllers/geometria.controller');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

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

// Rutas de áreas
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
app.get('/api/Geometria/area/cuadrado', validarParametro('lado'), geometriaController.areaCuadrado);

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
app.get('/api/Geometria/area/rectangulo', validarParametro('base'), validarParametro('altura'), geometriaController.areaRectangulo);

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
app.get('/api/Geometria/area/circulo', validarParametro('radio'), geometriaController.areaCirculo);

// Rutas de perímetros
app.get('/api/Geometria/perimetro/cuadrado', validarParametro('lado'), geometriaController.perimetroCuadrado);
app.get('/api/Geometria/perimetro/rectangulo', validarParametro('base'), validarParametro('altura'), geometriaController.perimetroRectangulo);
app.get('/api/Geometria/perimetro/circulo', validarParametro('radio'), geometriaController.perimetroCirculo);

// Rutas de volúmenes
app.get('/api/Geometria/volumen/cubo', validarParametro('lado'), geometriaController.volumenCubo);
app.get('/api/Geometria/volumen/esfera', validarParametro('radio'), geometriaController.volumenEsfera);
app.get('/api/Geometria/volumen/cilindro', validarParametro('radio'), validarParametro('altura'), geometriaController.volumenCilindro);

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