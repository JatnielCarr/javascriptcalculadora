const swaggerJsdoc = require('swagger-jsdoc');
const PORT = process.env.PORT || 3000;

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
  apis: ['./server.js', './controllers/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec; 