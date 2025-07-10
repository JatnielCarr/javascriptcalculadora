// Ejemplos de uso de la API de Cálculo de Áreas y Volúmenes
// Este archivo muestra cómo consumir la API desde JavaScript

const BASE_URL = 'http://localhost:3000';

// Función auxiliar para hacer peticiones GET
async function hacerPeticion(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${data.error || data.mensaje}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error en la petición:', error.message);
    throw error;
  }
}

// Ejemplos de cálculos de áreas
async function ejemplosAreas() {
  console.log('=== EJEMPLOS DE CÁLCULOS DE ÁREAS ===\n');
  
  try {
    // Área de un cuadrado
    const areaCuadrado = await hacerPeticion('/api/Geometria/area/cuadrado?lado=5');
    console.log('Área del cuadrado:', areaCuadrado);
    
    // Área de un rectángulo
    const areaRectangulo = await hacerPeticion('/api/Geometria/area/rectangulo?base=4&altura=6');
    console.log('Área del rectángulo:', areaRectangulo);
    
    // Área de un círculo
    const areaCirculo = await hacerPeticion('/api/Geometria/area/circulo?radio=3');
    console.log('Área del círculo:', areaCirculo);
    
  } catch (error) {
    console.error('Error en ejemplos de áreas:', error.message);
  }
}

// Ejemplos de cálculos de perímetros
async function ejemplosPerimetros() {
  console.log('\n=== EJEMPLOS DE CÁLCULOS DE PERÍMETROS ===\n');
  
  try {
    // Perímetro de un cuadrado
    const perimetroCuadrado = await hacerPeticion('/api/Geometria/perimetro/cuadrado?lado=5');
    console.log('Perímetro del cuadrado:', perimetroCuadrado);
    
    // Perímetro de un rectángulo
    const perimetroRectangulo = await hacerPeticion('/api/Geometria/perimetro/rectangulo?base=4&altura=6');
    console.log('Perímetro del rectángulo:', perimetroRectangulo);
    
    // Perímetro de un círculo
    const perimetroCirculo = await hacerPeticion('/api/Geometria/perimetro/circulo?radio=3');
    console.log('Perímetro del círculo:', perimetroCirculo);
    
  } catch (error) {
    console.error('Error en ejemplos de perímetros:', error.message);
  }
}

// Ejemplos de cálculos de volúmenes
async function ejemplosVolumenes() {
  console.log('\n=== EJEMPLOS DE CÁLCULOS DE VOLÚMENES ===\n');
  
  try {
    // Volumen de un cubo
    const volumenCubo = await hacerPeticion('/api/Geometria/volumen/cubo?lado=3');
    console.log('Volumen del cubo:', volumenCubo);
    
    // Volumen de una esfera
    const volumenEsfera = await hacerPeticion('/api/Geometria/volumen/esfera?radio=2');
    console.log('Volumen de la esfera:', volumenEsfera);
    
    // Volumen de un cilindro
    const volumenCilindro = await hacerPeticion('/api/Geometria/volumen/cilindro?radio=2&altura=5');
    console.log('Volumen del cilindro:', volumenCilindro);
    
  } catch (error) {
    console.error('Error en ejemplos de volúmenes:', error.message);
  }
}

// Ejemplos de manejo de errores
async function ejemplosErrores() {
  console.log('\n=== EJEMPLOS DE MANEJO DE ERRORES ===\n');
  
  try {
    // Error: parámetro inválido
    await hacerPeticion('/api/Geometria/area/cuadrado?lado=abc');
  } catch (error) {
    console.log('Error con parámetro inválido:', error.message);
  }
  
  try {
    // Error: valor negativo
    await hacerPeticion('/api/Geometria/area/cuadrado?lado=-5');
  } catch (error) {
    console.log('Error con valor negativo:', error.message);
  }
  
  try {
    // Error: parámetro faltante
    await hacerPeticion('/api/Geometria/area/cuadrado');
  } catch (error) {
    console.log('Error con parámetro faltante:', error.message);
  }
  
  try {
    // Error: ruta no encontrada
    await hacerPeticion('/api/ruta/inexistente');
  } catch (error) {
    console.log('Error con ruta no encontrada:', error.message);
  }
}

// Función principal que ejecuta todos los ejemplos
async function ejecutarEjemplos() {
  console.log('🚀 Iniciando ejemplos de uso de la API de Cálculo Geométrico\n');
  
  // Verificar que el servidor esté funcionando
  try {
    const info = await hacerPeticion('/');
    console.log('✅ Servidor funcionando correctamente');
    console.log('📋 Información de la API:', info);
  } catch (error) {
    console.error('❌ No se pudo conectar al servidor. Asegúrate de que esté ejecutándose en http://localhost:3000');
    return;
  }
  
  // Ejecutar ejemplos
  await ejemplosAreas();
  await ejemplosPerimetros();
  await ejemplosVolumenes();
  await ejemplosErrores();
  
  console.log('\n✅ Todos los ejemplos han sido ejecutados');
}

// Ejecutar ejemplos si este archivo se ejecuta directamente
if (typeof window === 'undefined') {
  // En Node.js
  ejecutarEjemplos().catch(console.error);
} else {
  // En el navegador
  window.ejecutarEjemplos = ejecutarEjemplos;
  console.log('Para ejecutar los ejemplos, llama a: ejecutarEjemplos()');
}

module.exports = {
  hacerPeticion,
  ejemplosAreas,
  ejemplosPerimetros,
  ejemplosVolumenes,
  ejemplosErrores,
  ejecutarEjemplos
}; 