const CalculadoraGeometrica = require('../services/geometria.service');

// Controladores para áreas
exports.areaCuadrado = (req, res) => {
  try {
    const lado = req.lado;
    const area = CalculadoraGeometrica.areaCuadrado(lado);
    res.json({ figura: 'Cuadrado', lado, area, formula: 'A = lado²' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.areaRectangulo = (req, res) => {
  try {
    const base = req.base;
    const altura = req.altura;
    const area = CalculadoraGeometrica.areaRectangulo(base, altura);
    res.json({ figura: 'Rectángulo', base, altura, area, formula: 'A = base × altura' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.areaCirculo = (req, res) => {
  try {
    const radio = req.radio;
    const area = CalculadoraGeometrica.areaCirculo(radio);
    res.json({ figura: 'Círculo', radio, area, formula: 'A = π × r²' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controladores para perímetros
exports.perimetroCuadrado = (req, res) => {
  try {
    const lado = req.lado;
    const perimetro = CalculadoraGeometrica.perimetroCuadrado(lado);
    res.json({ figura: 'Cuadrado', lado, perimetro, formula: 'P = 4 × lado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.perimetroRectangulo = (req, res) => {
  try {
    const base = req.base;
    const altura = req.altura;
    const perimetro = CalculadoraGeometrica.perimetroRectangulo(base, altura);
    res.json({ figura: 'Rectángulo', base, altura, perimetro, formula: 'P = 2 × (base + altura)' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.perimetroCirculo = (req, res) => {
  try {
    const radio = req.radio;
    const perimetro = CalculadoraGeometrica.perimetroCirculo(radio);
    res.json({ figura: 'Círculo', radio, perimetro, formula: 'P = 2 × π × r' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controladores para volúmenes
exports.volumenCubo = (req, res) => {
  try {
    const lado = req.lado;
    const volumen = CalculadoraGeometrica.volumenCubo(lado);
    res.json({ figura: 'Cubo', lado, volumen, formula: 'V = lado³' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.volumenEsfera = (req, res) => {
  try {
    const radio = req.radio;
    const volumen = CalculadoraGeometrica.volumenEsfera(radio);
    res.json({ figura: 'Esfera', radio, volumen, formula: 'V = (4/3) × π × r³' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.volumenCilindro = (req, res) => {
  try {
    const radio = req.radio;
    const altura = req.altura;
    const volumen = CalculadoraGeometrica.volumenCilindro(radio, altura);
    res.json({ figura: 'Cilindro', radio, altura, volumen, formula: 'V = π × r² × h' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 