class VolumenService {
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

module.exports = VolumenService; 