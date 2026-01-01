# Eco-Store 🌱

<div align="center">

![Eco-Store Banner](./assets/img/main-2.jpg)

**Una tienda en línea moderna y elegante para productos ecológicos y sostenibles**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

[Demo en Vivo](#) · [Reportar Bug](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/issues) · [Solicitar Feature](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Demo](#-demo)
- [Tecnologías](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación-y-uso)
- [Uso](#-guía-de-uso)
- [API y Funcionalidades](#-api-y-funcionalidades)
- [Arquitectura del Código](#-arquitectura-del-código)
- [Responsive Design](#-responsive-design)
- [Contribuir](#-cómo-contribuir)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)
- [Contacto](#-contacto)
- [Agradecimientos](#-agradecimientos)

---

## 🌿 Descripción

**Eco-Store** es una aplicación web de comercio electrónico diseñada específicamente para la venta de productos ecológicos y sostenibles. El proyecto demuestra el uso avanzado de **Sass/SCSS** como preprocesador CSS, junto con JavaScript vanilla para crear una experiencia de usuario rica e interactiva.

### ¿Por qué Eco-Store?

- **Compromiso ambiental**: Promovemos productos 100% ecológicos y artesanales
- **Diseño moderno**: Interfaz limpia, elegante y fácil de usar
- **Educativo**: Proyecto ideal para aprender Sass y desarrollo web moderno
- **Código limpio**: Arquitectura bien organizada y documentada
- **Performance**: Optimizado para carga rápida y experiencia fluida

## ✨ Características

### 🎨 Diseño e Interfaz

- **Interfaz moderna y atractiva**
  - Diseño minimalista con enfoque en la experiencia del usuario
  - Paleta de colores eco-friendly cuidadosamente seleccionada
  - Tipografía IBM Plex Sans para máxima legibilidad
  
- **Animaciones y Transiciones**
  - Animaciones suaves al scroll con Intersection Observer API
  - Efectos hover interactivos en todos los elementos clickeables
  - Transiciones CSS optimizadas para rendimiento
  - Animaciones de entrada escalonadas para tarjetas de productos

- **Diseño Responsive**
  - Mobile-first approach con CSS Grid
  - Breakpoints optimizados: 480px, 768px, 1024px, 1200px, 1400px
  - Grid automático responsive con `auto-fill` y `minmax()`
  - Touch-optimized para dispositivos móviles
  - Viewport height fix para navegadores móviles
  - Hardware acceleration para animaciones suaves
  - Gestos táctiles (swipe, touch feedback)
  - Ver [MOBILE-GUIDE.md](./MOBILE-GUIDE.md) para más detalles

- **Navegación Sticky**
  - Barra de navegación fija con efecto glassmorphism
  - Backdrop-filter para efecto de desenfoque
  - Scroll suave entre secciones

### 🛠️ Funcionalidades Principales

#### 🔍 Búsqueda Inteligente en Tiempo Real
- Motor de búsqueda instantáneo con debounce
- Búsqueda por nombre y descripción de productos
- Resaltado de texto coincidente
- Preview de resultados con scroll automático
- Atajos de teclado (Ctrl/Cmd + K)
- Sugerencias visuales con imágenes

#### 🎯 Filtros Dinámicos por Categoría
- Filtrado instantáneo por categorías
- Animaciones suaves al filtrar
- Combinación con búsqueda
- Botones con estados activos visuales
- Categorías: Todos, Salud, Hogar

#### 📱 Toggle Vista Grid/List
- Cambio entre vista de cuadrícula y lista
- Transiciones suaves entre vistas
- Persistencia de preferencia
- Optimizado para diferentes dispositivos
- Interfaz adaptativa según el modo

#### 🌓 Modo Oscuro/Claro
- Toggle de tema con animación suave
- Persistencia de preferencia en localStorage
- Paleta de colores optimizada para cada modo
- Contraste mejorado para accesibilidad
- Iconos adaptativos (sol/luna)
- Atajo de teclado (Ctrl/Cmd + B)

#### ⬆️ Botón "Volver Arriba"
- Aparece automáticamente al hacer scroll
- Animación de entrada/salida suave
- Scroll animado al inicio
- Diseño flotante con sombra
- Siempre accesible

#### 👁️ Vista Rápida de Productos
- Modal de vista rápida con información detallada
- Agregar a carrito desde el modal
- Agregar a favoritos desde el modal
- Características del producto destacadas
- Imágenes ampliadas
- Botón hover sobre productos

#### ⌨️ Atajos de Teclado
- **Ctrl/Cmd + K**: Abrir búsqueda
- **Ctrl/Cmd + B**: Toggle tema oscuro/claro
- **Ctrl/Cmd + H**: Ver favoritos
- **Ctrl/Cmd + C**: Ver carrito
- **ESC**: Cerrar modales
- Feedback visual de acciones

#### ❤️ Sistema de Favoritos (Wishlist)
- Agregar/remover productos con un click
- Persistencia de datos con localStorage API
- Indicadores visuales en tarjetas de productos
- Modal elegante para visualizar favoritos
- Contador dinámico en el icono de navegación

#### 🛒 Carrito de Compras
- Agregar productos al carrito
- Control de cantidades (incrementar/decrementar)
- Remover items individuales
- Cálculo automático de totales
- Modal interactivo con vista detallada
- Persistencia entre sesiones

#### 🔔 Sistema de Notificaciones
- Notificaciones toast no intrusivas
- Múltiples tipos: success, info, error, warning
- Animaciones suaves de entrada/salida
- Auto-dismiss configurable
- Stack de notificaciones

#### 💾 Persistencia de Datos
- LocalStorage API para guardar estado
- Recuperación automática al recargar página
- Sincronización en tiempo real
- Gestión de errores robusta

#### 📊 Analytics y Tracking
- Seguimiento de tiempo en página
- Conteo de visitas
- Registro de interacciones
- Estadísticas almacenadas localmente
- Datos de comportamiento del usuario

## 🚀 Demo

### Capturas de Pantalla

| Vista Principal | Productos | Carrito |
|----------------|-----------|---------|
| ![Home](./assets/img/main-2.jpg) | ![Products](./assets/img/products/toothbrush.jpg) | ![Cart](./assets/img/furniture/wood-chair.jpg) |

### Video Demo
[🎥 Ver Demo en Video](#) *(Próximamente)*

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**: Estructura semántica y accesible
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white) **SCSS/Sass**: Preprocesador CSS con variables, mixins y funciones
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript ES6+**: Funcionalidades interactivas modernas
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS Grid & Flexbox**: Layouts responsive y flexibles

### APIs y Librerías
- **LocalStorage API**: Persistencia de datos del lado del cliente
- **Intersection Observer API**: Animaciones al scroll optimizadas
- **Google Fonts**: Tipografía IBM Plex Sans

### Herramientas de Desarrollo
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) **Node.js**: Entorno de ejecución
- ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat&logo=npm&logoColor=white) **NPM**: Gestor de paquetes
- **Sass CLI**: Compilador de Sass
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) **Git**: Control de versiones

## 📦 Estructura del Proyecto
## 🚀 Instalación y Uso

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v14.0.0 o superior) - [Descargar aquí](https://nodejs.org/)
- **NPM** (v6.0.0 o superior) - Incluido con Node.js
- **Git** - [Descargar aquí](https://git-scm.com/)
- Un editor de código (recomendado: VS Code)

### Instalación Paso a Paso

#### 1️⃣ Clonar el Repositorio

```bash
# HTTPS
git clone https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io.git

# SSH (recomendado si tienes configurado SSH)
git clone git@github.com:omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io.git

# Navegar al directorio del proyecto
cd 35-Curso-de-Fundamentos-de-Sass.io
```

#### 2️⃣ Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias, incluyendo Sass.

#### 3️⃣ Compilar Sass

Para compilar los archivos SCSS a CSS una sola vez:

```bash
npm run sass
```

#### 4️⃣ Modo Desarrollo (Recomendado)

Para compilar automáticamente cada vez que guardes cambios en archivos SCSS:

```bash
npm run sass:watch
# o simplemente
npm start
```

Deja esta terminal abierta mientras desarrollas.

#### 5️⃣ Abrir el Proyecto

**Opción A - Archivo directo:**
## 📝 Scripts Disponibles

### Comandos NPM

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm run sass` | Compila SCSS a CSS una vez | Para producción o compilación manual |
| `npm run sass:watch` | Compila SCSS automáticamente al guardar | Para desarrollo activo |
| `npm start` | Alias de `sass:watch` | Forma rápida de iniciar desarrollo |

### Ejemplos de Uso

```bash
# Desarrollo - compila automáticamente
npm start

# Producción - compila una vez
npm run sass

# Ver versión de Sass instalada
sass --version
```

---

## 📖 Guía de Uso

### Interactuando con la Aplicación

#### 🔍 Búsqueda de Productos
1. Haz clic en la barra de búsqueda o presiona **Ctrl+K** (Cmd+K en Mac)
2. Escribe el nombre o descripción del producto
3. Los resultados aparecen instantáneamente
4. Haz clic en cualquier resultado para ir al producto
5. Usa el botón × para limpiar la búsqueda

#### 🎯 Filtrar por Categoría
1. Usa los botones de filtro: "Todos", "Salud", "Hogar"
2. Los productos se filtran instantáneamente
3. Combina filtros con búsqueda para resultados precisos

#### 📱 Cambiar Vista Grid/List
1. Haz clic en los iconos de cuadrícula o lista en el navbar
2. La vista cambia instantáneamente
3. En vista lista: información más detallada
4. En vista cuadrícula: más productos visibles

#### 🌓 Modo Oscuro/Claro
1. Haz clic en el icono sol/luna en el navbar
2. O presiona **Ctrl+B** (Cmd+B en Mac)
3. El tema cambia instantáneamente
4. Tu preferencia se guarda automáticamente

#### 👁️ Vista Rápida de Producto
1. Pasa el mouse sobre cualquier producto
2. Aparece el botón "Vista Rápida"
3. Haz clic para ver detalles completos
4. Agrega al carrito o favoritos desde el modal

#### ❤️ Agregar Productos a Favoritos
1. Navega por las tarjetas de productos
2. Haz clic en el icono ❤️ en la esquina superior derecha
3. El producto se agrega a tu lista de favoritos
4. Presiona **Ctrl+H** para ver todos tus favoritos

#### 🛒 Gestionar el Carrito de Compras
1. Haz clic en cualquier tarjeta de producto para agregarlo
2. O usa el botón en la vista rápida
3. Presiona **Ctrl+C** para ver tu carrito
4. Ajusta cantidades con los botones + y -
5. Elimina productos con el botón 🗑️

#### ⬆️ Volver Arriba
1. Haz scroll hacia abajo
2. Aparece el botón flotante automáticamente
3. Haz clic para volver al inicio suavemente

#### ⌨️ Atajos de Teclado
- **Ctrl/Cmd + K**: Abrir búsqueda
- **Ctrl/Cmd + B**: Cambiar tema
- **Ctrl/Cmd + H**: Ver favoritos
- **Ctrl/Cmd + C**: Ver carrito
- **ESC**: Cerrar modales

### Características de la Interfaz

- **Scroll Suave**: Navega entre secciones con scroll suave automático
- **Animaciones**: Los elementos aparecen con animaciones al hacer scroll
- **Hover Effects**: Todos los elementos interactivos tienen efectos hover
- **Responsive**: Prueba redimensionando tu navegador
- **Scrollbar Personalizada**: Diseño coherente con la paleta de coloresrt index.html
```

**Opción B - Servidor Local (Recomendado):**

Si usas VS Code, instala la extensión "Live Server" y haz clic derecho en `index.html` > "Open with Live Server"
## 🏗️ Arquitectura del Código

### Sass/SCSS

#### Sistema de Variables
```scss
// Colores principales
$primary-color: #FFEFE7;      // Fondo principal
$secondary-color: #FFDAC6;    // Acentos y tarjetas
$tertiary-color: #BABD8D;     // Detalles decorativos
$primary-text-color: #7C6A0A; // Texto principal
$quaternary-color: #FA9500;   // Botones y CTAs

// Tipografía
$font-stack: 'IBM Plex Sans', sans-serif;
$paragraph-size: 1.5em;

// Efectos
$box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
$transition: all 0.3s ease;
```

#### Mixins Reutilizables
```scss
// Mixin para centrado flexible
@mixin flexCenter($direction, $content, $align) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
  align-items: $align;
}

// Mixin para botones sin estilo
@mixin buttonStyle {
  button {
    background: none;
    border-style: none;
    cursor: pointer;
    transition: $transition;
## 📱 Responsive Design

### Breakpoints

El diseño es totalmente responsive utilizando un enfoque mobile-first con los siguientes breakpoints:

| Dispositivo | Breakpoint | Cambios Principales |
|-------------|------------|---------------------|
| 📱 **Móviles** | < 480px | - Tarjetas al 100% de ancho<br>- Navegación simplificada<br>- Fuentes reducidas |
| 📱 **Móviles Grandes** | 481px - 768px | - Tarjetas en 2 columnas<br>- Padding reducido<br>- Imágenes optimizadas |
| 📱 **Tablets** | 769px - 1024px | - Tarjetas en 3 columnas<br>- Hero section en columna<br>- Grid adaptativo |
| 💻 **Desktop** | > 1024px | - Diseño completo<br>- 4 columnas de productos<br>- Efectos hover completos |

### Técnicas Responsive

```scss
// Mobile First Approach
.product-card {
  width: 100%; // Por defecto móvil
  
  @media (min-width: 768px) {
    width: calc(50% - 15px); // Tablets
  }
  
  @media (min-width: 1024px) {
    width: calc(25% - 23px); // Desktop
  }
}
## 🤝 Cómo Contribuir

¡Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear! Cualquier contribución que hagas será **muy apreciada**.

### Proceso de Contribución

1. **Fork el Proyecto**
   ```bash
   # Haz fork desde GitHub o usa:
   gh repo fork omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io
   ```

2. **Crea tu Rama de Feature**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Realiza tus Cambios**
   - Escribe código limpio y documentado
   - Sigue las convenciones de estilo existentes
   - Asegúrate de que tu código compile sin errores

4. **Compila Sass antes de Commitear**
   ```bash
   npm run sass
   ```

5. **Commit tus Cambios**
   ```bash
   git add .
   git commit -m 'Add: AmazingFeature - descripción detallada'
   ```
   
   **Convenciones de Commit:**
   - `Add:` para nuevas características
   - `Fix:` para correcciones de bugs
   - `Update:` para actualizaciones
   - `Remove:` para eliminar código/features
   - `Docs:` para documentación

6. **Push a la Rama**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Abre un Pull Request**
   - Ve a GitHub y abre un PR
   - Describe detalladamente tus cambios
   - Referencia issues relacionados si aplica

### Guías de Contribución

#### Código
- Usa 2 espacios para indentación
- Comenta código complejo
- Sigue el patrón de nomenclatura existente
## 🗺️ Roadmap

### Versión Actual: 1.0.0

- [x] Diseño responsive completo
- [x] Sistema de favoritos funcional
- [x] Carrito de compras
- [x] Persistencia con localStorage
- [x] Sistema de notificaciones
- [x] Animaciones y transiciones

### Próximas Versiones

#### v1.1.0 - Q1 2026
- [x] **Búsqueda en tiempo real** ✨
- [x] **Filtros por categoría** ✨
- [x] **Vista Grid/List toggle** ✨
- [x] **Modo oscuro/claro** ✨
- [x] **Botón volver arriba** ✨
- [x] **Vista rápida de productos** ✨
- [x] **Atajos de teclado** ✨
- [x] **Analytics básico** ✨
- [ ] Integración con backend (API REST)
- [ ] Sistema de autenticación de usuarios
- [ ] Ordenamiento (precio, nombre, popularidad)

#### v1.2.0 - Q2 2026
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Proceso de checkout completo
- [ ] Historial de pedidos
- [ ] Panel de administración
- [ ] Comparador de productos
- [ ] Filtros avanzados (precio, rating)

#### v1.3.0 - Q3 2026
- [ ] Reseñas y calificaciones de productos
- [ ] Sistema de recomendaciones AI
- [ ] Wishlist compartida
- [ ] Compartir en redes sociales
- [ ] Zoom de imágenes
- [ ] Galería de imágenes múltiples

#### v2.0.0 - Q4 2026
- [ ] Migración a React/Vue
- [ ] PWA (Progressive Web App)
- [ ] Soporte multiidioma
- [ ] Integración con redes sociales

### Ideas para el Futuro
- 🤖 Chat bot para atención al cliente
- 🎁 Sistema de cupones y descuentos
- 📧 Newsletter y email marketing
- 📊 Dashboard de analytics
- 🔔 Notificaciones push

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2026 Omar Hernández Rey

Por la presente se concede permiso, libre de cargos, a cualquier persona
que obtenga una copia de este software y de los archivos de documentación
asociados (el "Software"), a utilizar el Software sin restricción,
incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar,
publicar, distribuir, sublicenciar, y/o vender copias del Software, y a
permitir a las personas a las que se les proporcione el Software a hacer
lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en
todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO,
EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE
COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO.
EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN
RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA
SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS
DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE
ACCIONES EN EL SOFTWARE.
```

Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

<div align="center">

### Omar Hernández Rey

**Full Stack Developer | Sass Enthusiast | Open Source Contributor**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/omarhernandezrey)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/omarhernandezrey)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://omarhernandezrey.com)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:omar.hernandez.rey@gmail.com)

</div>

---

## 📞 Contacto

¿Tienes preguntas, sugerencias o simplemente quieres charlar sobre el proyecto?

- **Email**: omar.hernandez.rey@gmail.com
- **GitHub Issues**: [Crear un issue](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/issues)
- **Discussions**: [Únete a la conversación](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/discussions)

---

## 🙏 Agradecimientos

Este proyecto no habría sido posible sin:

- **[Sass Team](https://sass-lang.com/)** - Por crear un preprocesador CSS increíble
- **[Google Fonts](https://fonts.google.com/)** - Por la tipografía IBM Plex Sans
- **Comunidad Open Source** - Por los recursos e inspiración
- **Platzi/Educación IT** - Por el Curso de Fundamentos de Sass
- **Todos los contribuidores** - Por hacer este proyecto mejor

### Recursos Utilizados

- Iconos SVG creados manualmente
- Paleta de colores inspirada en tendencias eco-friendly
- Imágenes de productos (sustituir por imágenes reales en producción)
- Fuente: [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) por IBM

---

## ⭐ Apoya el Proyecto

Si este proyecto te ha sido útil o te ha gustado:

- ⭐ Dale una estrella en GitHub
- 🐛 Reporta bugs o sugiere features
- 🔀 Fork el proyecto y contribuye
- 📢 Compártelo con otros desarrolladores
- ☕ [Invítame un café](https://www.buymeacoffee.com/omarhernandezrey)

---

<div align="center">

### 🌱 Eco-Store - Comprometidos con un futuro más verde

**Hecho con ❤️ y mucho ☕ por [Omar Hernández Rey](https://github.com/omarhernandezrey)**

[![GitHub stars](https://img.shields.io/github/stars/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io?style=social)](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io?style=social)](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io?style=social)](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/watchers)

[⬆ Volver arriba](#eco-store-)

</div>
3. Usa el template de bug report
4. Incluye:
   - Descripción clara del bug
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Información del navegador/sistema

### Solicitar Features

¿Tienes una idea genial? Compártela:

1. Abre un [nuevo issue](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/issues/new)
2. Usa el label "enhancement"
3. Describe detalladamente tu propuesta
4. Explica por qué sería útil

### Código de Conducta

Este proyecto se adhiere al [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). Al participar, se espera que mantengas este código.reas de toque optimizadas para móviles
scss/
└── main.scss
    ├── Variables
    ├── Mixins
    ├── Reset/Base
    ├── Navegación
    ├── Hero/Article
    ├── Secciones de Productos
    ├── Info Section
    ├── Footer
    └── Media Queries
```

### JavaScript

#### Arquitectura Modular

```javascript
// Estructura principal
├── Variables Globales (wishlist, cart)
├── Inicialización (DOMContentLoaded)
├── Configuración de Eventos
│   ├── setupNavButtons()
│   ├── setupProductCards()
│   ├── setupSmoothScroll()
│   └── setupScrollAnimations()
├── Gestión de Wishlist
│   ├── toggleWishlist()
│   ├── toggleWishlistView()
│   └── removeFromWishlist()
├── Gestión de Carrito
│   ├── addToCart()
│   ├── toggleCartView()
│   ├── updateQuantity()
│   └── removeFromCart()
├── Sistema de Modales
│   ├── showModal()
│   └── closeModal()
├── Sistema de Notificaciones
│   └── showNotification()
└── Persistencia
    ├── saveToStorage()
    └── loadFromStorage()
```

#### Patrones de Diseño Utilizados

- **Module Pattern**: Encapsulación de funcionalidades
- **Observer Pattern**: Eventos del DOM
- **Singleton Pattern**: LocalStorage manager
- **Factory Pattern**: Creación de modales y notificaciones

### Optimizaciones

- **CSS**: Uso de `will-change` para animaciones
- **JS**: Event delegation donde es aplicable
- **Images**: Lazy loading implícito con Intersection Observer
- **Storage**: Debouncing en operaciones de escrituraatch)**
```bash
npm run sass:watch
```

5. **Abrir el proyecto**
- Simplemente abre `index.html` en tu navegador preferido
- O usa un servidor local como Live Server

## 📝 Scripts Disponibles

```json
{
  "sass": "Compila SCSS a CSS una vez",
  "sass:watch": "Compila SCSS a CSS en tiempo real",
  "start": "Inicia el modo watch de Sass"
}
```

## 🎯 Características del Código

### Mixins de Sass
```scss
@mixin flexCenter($direction, $content, $align) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
  align-items: $align;
}
```

### Variables de Sass
```scss
$primary-color: #FFEFE7;
$secondary-color: #FFDAC6;
$tertiary-color: #BABD8D;
$primary-text-color: #7C6A0A;
$quaternary-color: #FA9500;
```

### Funcionalidades JavaScript
- Sistema de gestión de favoritos
- Carrito de compras con control de cantidad
- Modales interactivos
- Notificaciones toast
- Persistencia en localStorage
- Animaciones al scroll

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#FFEFE7` | Fondo principal |
| Secondary | `#FFDAC6` | Acentos y tarjetas |
| Tertiary | `#BABD8D` | Detalles decorativos |
| Text Primary | `#7C6A0A` | Texto principal |
| Quaternary | `#FA9500` | Botones y CTAs |

## 📱 Responsive Design

El sitio es totalmente responsive con breakpoints en:
- **1024px**: Tablets
- **768px**: Tablets pequeñas
- **480px**: Móviles

## 🌟 Funcionalidades Destacadas

### Sistema de Wishlist
- Agregar/remover productos de favoritos
- Persistencia de datos
- Indicador visual en tarjetas
- Modal con lista completa

### Carrito de Compras
- Agregar productos
- Ajustar cantidades
- Remover items
- Cálculo de totales
- Modal interactivo

### Notificaciones
- Mensajes de confirmación
- Alertas informativas
- Animaciones suaves
- Auto-dismiss después de 3s

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Omar Hernández**
- GitHub: [@omarhernandezrey](https://github.com/omarhernandezrey)

## 🙏 Agradecimientos

- Diseño inspirado en tendencias eco-friendly modernas
- Iconos y recursos de la comunidad open source
- Curso de Fundamentos de Sass

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

🌱 **Eco-Store** - Comprometidos con un futuro más verde
