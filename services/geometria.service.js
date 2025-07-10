// Servicio de lógica geométrica
class CalculadoraGeometrica {
  static areaCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return lado * lado;
  }
  static perimetroCuadrado(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return 4 * lado;
  }
  static areaRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return base * altura;
  }
  static perimetroRectangulo(base, altura) {
    if (base <= 0 || altura <= 0) throw new Error('La base y altura deben ser números positivos');
    return 2 * (base + altura);
  }
  static areaCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return Math.PI * radio * radio;
  }
  static perimetroCirculo(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return 2 * Math.PI * radio;
  }
  static volumenCubo(lado) {
    if (lado <= 0) throw new Error('El lado debe ser un número positivo');
    return lado * lado * lado;
  }
  static volumenEsfera(radio) {
    if (radio <= 0) throw new Error('El radio debe ser un número positivo');
    return (4/3) * Math.PI * radio * radio * radio;
  }
  static volumenCilindro(radio, altura) {
    if (radio <= 0 || altura <= 0) throw new Error('El radio y altura deben ser números positivos');
    return Math.PI * radio * radio * altura;
  }
}

module.exports = CalculadoraGeometrica; 