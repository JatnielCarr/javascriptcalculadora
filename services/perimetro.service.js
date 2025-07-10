class PerimetroService {
  static perimetroCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return 4 * lado;
  }
  static perimetroRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return 2 * (base + altura);
  }
  static perimetroCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return 2 * Math.PI * radio;
  }
}

module.exports = PerimetroService; 