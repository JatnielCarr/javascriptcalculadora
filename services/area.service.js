class AreaService {
  static areaCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return lado * lado;
  }
  static areaRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return base * altura;
  }
  static areaCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return Math.PI * radio * radio;
  }
}

module.exports = AreaService; 