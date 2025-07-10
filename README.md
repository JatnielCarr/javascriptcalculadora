# API de Cálculo de Áreas y Volúmenes

Esta API proporciona endpoints para calcular áreas, perímetros y volúmenes de diferentes figuras geométricas usando JavaScript/Node.js.

## 🚀 Características

### Cálculo de áreas:
- ✅ Cuadrado
- ✅ Rectángulo  
- ✅ Círculo

### Cálculo de perímetros:
- ✅ Cuadrado
- ✅ Rectángulo
- ✅ Círculo

### Cálculo de volúmenes:
- ✅ Cubo
- ✅ Esfera
- ✅ Cilindro

## 📋 Requisitos

- Node.js 18.0.0 o superior
- npm o yarn

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd calculadora-geometrica-api
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto:**
   ```bash
   # Modo desarrollo (con recarga automática)
   npm run dev
   
   # Modo producción
   npm start
   ```

## 🌐 Uso

La API estará disponible en `http://localhost:3000`

### Documentación Swagger
La documentación interactiva de la API está disponible en:
- **Swagger UI**: `http://localhost:3000/swagger`
- **Especificación OpenAPI**: `http://localhost:3000/swagger.json`

## 📡 Endpoints

### Áreas

#### Cuadrado
```
GET /api/Geometria/area/cuadrado?lado={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/area/cuadrado?lado=5"
```
**Respuesta:**
```json
{
  "figura": "Cuadrado",
  "lado": 5,
  "area": 25,
  "formula": "A = lado²"
}
```

#### Rectángulo
```
GET /api/Geometria/area/rectangulo?base={valor}&altura={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/area/rectangulo?base=4&altura=6"
```
**Respuesta:**
```json
{
  "figura": "Rectángulo",
  "base": 4,
  "altura": 6,
  "area": 24,
  "formula": "A = base × altura"
}
```

#### Círculo
```
GET /api/Geometria/area/circulo?radio={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/area/circulo?radio=3"
```
**Respuesta:**
```json
{
  "figura": "Círculo",
  "radio": 3,
  "area": 28.274333882308138,
  "formula": "A = π × r²"
}
```

### Perímetros

#### Cuadrado
```
GET /api/Geometria/perimetro/cuadrado?lado={valor}
```

#### Rectángulo
```
GET /api/Geometria/perimetro/rectangulo?base={valor}&altura={valor}
```

#### Círculo
```
GET /api/Geometria/perimetro/circulo?radio={valor}
```

### Volúmenes

#### Cubo
```
GET /api/Geometria/volumen/cubo?lado={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/volumen/cubo?lado=3"
```
**Respuesta:**
```json
{
  "figura": "Cubo",
  "lado": 3,
  "volumen": 27,
  "formula": "V = lado³"
}
```

#### Esfera
```
GET /api/Geometria/volumen/esfera?radio={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/volumen/esfera?radio=2"
```
**Respuesta:**
```json
{
  "figura": "Esfera",
  "radio": 2,
  "volumen": 33.510321638291124,
  "formula": "V = (4/3) × π × r³"
}
```

#### Cilindro
```
GET /api/Geometria/volumen/cilindro?radio={valor}&altura={valor}
```
**Ejemplo:**
```bash
curl "http://localhost:3000/api/Geometria/volumen/cilindro?radio=2&altura=5"
```
**Respuesta:**
```json
{
  "figura": "Cilindro",
  "radio": 2,
  "altura": 5,
  "volumen": 62.83185307179586,
  "formula": "V = π × r² × h"
}
```

## 🧪 Pruebas

Para ejecutar las pruebas:
```bash
npm test
```

## 📁 Estructura del Proyecto

```
calculadora-geometrica-api/
├── server.js          # Servidor principal y endpoints
├── package.json       # Dependencias y scripts
├── README.md          # Documentación
└── .gitignore         # Archivos a ignorar
```

## 🔧 Configuración

### Variables de Entorno

Puedes configurar el puerto usando la variable de entorno `PORT`:

```bash
PORT=8080 npm start
```

### Middleware de Seguridad

La API incluye:
- **Helmet**: Headers de seguridad
- **CORS**: Soporte para peticiones cross-origin
- **Validación de parámetros**: Verificación de tipos de datos

## 🚀 Despliegue

### Railway
1. Conecta tu repositorio a Railway
2. Railway detectará automáticamente que es una aplicación Node.js
3. La aplicación se desplegará automáticamente

### Heroku
1. Crea una aplicación en Heroku
2. Conecta tu repositorio
3. Heroku detectará automáticamente el `package.json`

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura el comando de build: `npm start`
3. Despliega

## 🤝 Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🐛 Reportar Errores

Si encuentras algún error o tienes una sugerencia, por favor:
1. Revisa si ya existe un issue similar
2. Crea un nuevo issue con una descripción detallada
3. Incluye ejemplos de reproducción si es posible

## 📞 Soporte

- **Email**: soporte@calculadora-geometrica.com
- **Documentación**: `/swagger`
- **Issues**: GitHub Issues

---

**¡Disfruta calculando áreas y volúmenes! 🎉** 