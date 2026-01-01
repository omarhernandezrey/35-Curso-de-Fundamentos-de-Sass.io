# 📱 Guía de Optimización Móvil - Eco-Store

## 📋 Índice
1. [Diseño Responsive](#diseño-responsive)
2. [CSS Grid Layout](#css-grid-layout)
3. [Optimizaciones de Rendimiento](#optimizaciones-de-rendimiento)
4. [Interacciones Táctiles](#interacciones-táctiles)
5. [Mejores Prácticas](#mejores-prácticas)

---

## 🎨 Diseño Responsive

### Breakpoints Utilizados

El proyecto utiliza un sistema de breakpoints mobile-first:

```scss
// Dispositivos móviles pequeños
@media (max-width: 480px) { ... }

// Tablets y móviles grandes
@media (max-width: 768px) { ... }

// Tablets landscape y pantallas pequeñas
@media (max-width: 1024px) { ... }

// Laptops y pantallas medianas
@media (max-width: 1200px) { ... }

// Desktop y pantallas grandes
@media (max-width: 1400px) { ... }
```

### Adaptaciones por Dispositivo

#### 📱 Móviles (< 480px)
- **Layout**: Grid de 1 columna para cards
- **Navegación**: Compacta con iconos reducidos
- **Tipografía**: Reducida para mejor legibilidad
- **Espaciado**: Reducido para aprovechar espacio
- **Botones**: Ancho completo con touch targets de 44px mínimo

#### 📱 Tablets (481px - 768px)
- **Layout**: Grid de 2 columnas
- **Navegación**: Intermedia
- **Imágenes**: Optimizadas a 180px de altura
- **Modales**: Adaptados al viewport

#### 💻 Desktop (> 768px)
- **Layout**: Grid automático (auto-fill)
- **Hover effects**: Completos
- **Navegación**: Expandida

---

## 🎯 CSS Grid Layout

### Sistema de Grid Adaptativo

El diseño de las tarjetas de productos utiliza CSS Grid en lugar de Flexbox para móviles:

```scss
.card-section {
  display: grid;
  
  // Desktop: grid automático
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  
  // Tablet (< 1024px)
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
  }
  
  // Móvil grande (< 768px)
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columnas fijas
    gap: 20px;
  }
  
  // Móvil pequeño (< 480px)
  @media (max-width: 480px) {
    grid-template-columns: 1fr; // 1 columna
    gap: 20px;
  }
}
```

### Ventajas del Grid en Móviles

✅ **Distribución uniforme**: Las cards se distribuyen equitativamente
✅ **Sin cálculos complejos**: No necesita `calc()` para anchos
✅ **Mejor rendimiento**: Menos recalculaciones de layout
✅ **Responsive automático**: Se adapta al espacio disponible
✅ **Alineación perfecta**: Sin espacios irregulares

### Diseño de Card Móvil

En móviles (< 480px), las cards usan un grid interno:

```scss
.product-card {
  @media (max-width: 480px) {
    display: grid;
    grid-template-areas:
      "image image icon"
      "title title title"
      "desc desc desc";
    grid-template-columns: 1fr 1fr auto;
    gap: 12px;
  }
}
```

**Layout resultante:**
```
┌─────────────────────────────┐
│  [Imagen]  [Imagen]  [❤️]   │
│  [Título del Producto]      │
│  [Descripción del producto] │
└─────────────────────────────┘
```

---

## ⚡ Optimizaciones de Rendimiento

### Hardware Acceleration

```scss
@media (max-width: 768px) {
  * {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
```

**Beneficios:**
- ✅ Animaciones más suaves (60fps)
- ✅ Reduce el repaint
- ✅ Usa GPU para transformaciones

### Lazy Loading de Imágenes

```javascript
// mobile-optimizations.js
optimizeImages() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
      }
    });
  });
}
```

### Optimización durante Scroll

```javascript
optimizeScrolling() {
  let scrollTimeout;
  
  window.addEventListener('scroll', () => {
    document.body.classList.add('is-scrolling');
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 150);
  }, { passive: true });
}
```

```scss
body.is-scrolling * {
  pointer-events: none !important; // Desactiva eventos durante scroll
}
```

---

## 👆 Interacciones Táctiles

### Touch Feedback Visual

```javascript
setupTouchFeedback() {
  const elements = document.querySelectorAll(
    'button, .product-card, .filter-btn'
  );
  
  elements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.opacity = '0.7';
    }, { passive: true });
    
    element.addEventListener('touchend', function() {
      this.style.opacity = '1';
    }, { passive: true });
  });
}
```

### Gestos de Deslizamiento

**Swipe hacia abajo para cerrar modales:**

```javascript
setupSwipeGestures() {
  modal.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  });
  
  modal.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    
    if (touchStartY - touchEndY < -50) {
      // Cerrar modal con swipe down
      closeModal();
    }
  });
}
```

### Prevención de Zoom Accidental

```javascript
preventZoomOnDoubleTap() {
  let lastTouchEnd = 0;
  
  document.addEventListener('touchend', (event) => {
    const now = Date.now();
    
    if (now - lastTouchEnd <= 300) {
      event.preventDefault(); // Evita zoom en doble tap
    }
    
    lastTouchEnd = now;
  }, { passive: false });
}
```

### Viewport Height Fix

Soluciona el problema de la barra de navegación móvil:

```javascript
setupViewportHeight() {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 100);
  });
}
```

Uso en CSS:
```scss
.modal {
  height: calc(var(--vh, 1vh) * 100); // En lugar de 100vh
}
```

---

## 🎯 Mejores Prácticas

### 1. Touch Targets

✅ **Mínimo 44x44px** para botones e iconos

```scss
@media (max-width: 480px) {
  button {
    min-width: 44px;
    min-height: 44px;
    padding: 12px;
  }
}
```

### 2. Tipografía Legible

✅ **Mínimo 16px** para texto principal en móviles

```scss
@media (max-width: 480px) {
  body {
    font-size: 16px; // Evita zoom automático en iOS
  }
  
  h1 {
    font-size: 1.8em; // ~29px
  }
  
  p {
    font-size: 0.95em; // ~15px
    line-height: 1.6;
  }
}
```

### 3. Espaciado Adecuado

```scss
@media (max-width: 480px) {
  section {
    padding: 30px 15px; // Padding reducido
  }
  
  .card-section {
    gap: 20px; // Espacio entre cards
  }
}
```

### 4. Imágenes Optimizadas

```scss
@media (max-width: 480px) {
  .product-image {
    height: 140px; // Reducido para móviles
    
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
```

### 5. Modales Mobile-Friendly

```scss
@media (max-width: 480px) {
  .modal-overlay {
    padding: 10px;
    
    .modal-content {
      width: 100%;
      max-height: 90vh;
      border-radius: 20px;
    }
    
    .modal-body {
      max-height: calc(90vh - 140px);
      overflow-y: auto;
      -webkit-overflow-scrolling: touch; // Smooth scroll iOS
    }
  }
}
```

---

## 📊 Testing en Dispositivos

### Dispositivos de Prueba Recomendados

#### 📱 Móviles
- iPhone SE (375px)
- iPhone 12/13 Pro (390px)
- Samsung Galaxy S21 (360px)
- Google Pixel 5 (393px)

#### 📱 Tablets
- iPad Mini (768px)
- iPad Pro (1024px)
- Samsung Galaxy Tab (800px)

### Herramientas de Testing

1. **Chrome DevTools**
   - Device Toolbar (Ctrl + Shift + M)
   - Responsive Design Mode

2. **Firefox Developer Tools**
   - Responsive Design Mode (Ctrl + Shift + M)

3. **Safari Web Inspector**
   - Responsive Design Mode (Cmd + Opt + R)

4. **BrowserStack / LambdaTest**
   - Testing en dispositivos reales

---

## 🔧 Comandos Útiles

### Compilar SCSS

```bash
# Compilación normal
sass scss/main.scss css/main.css

# Compilación comprimida (producción)
sass scss/main.scss css/main.css --style=compressed

# Watch mode (desarrollo)
sass --watch scss/main.scss:css/main.css
```

### Servir Localmente

```bash
# Python 3
python -m http.server 8000

# Node.js (con live-server)
npx live-server
```

---

## 📝 Checklist de Optimización Móvil

- [x] CSS Grid responsive implementado
- [x] Breakpoints mobile-first
- [x] Touch targets ≥ 44px
- [x] Tipografía legible (≥ 16px)
- [x] Hardware acceleration activada
- [x] Lazy loading de imágenes
- [x] Optimización de scroll
- [x] Touch feedback visual
- [x] Gestos de deslizamiento
- [x] Prevención de zoom accidental
- [x] Viewport height fix
- [x] Modales adaptables
- [x] Meta tags móviles
- [x] Passive event listeners
- [x] Imágenes optimizadas

---

## 🎨 Ejemplos de Código

### Card Responsive Completa

```scss
.product-card {
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  
  // Tablet
  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 15px;
  }
  
  // Móvil
  @media (max-width: 480px) {
    display: grid;
    grid-template-areas:
      "image image icon"
      "title title title"
      "desc desc desc";
    grid-template-columns: 1fr 1fr auto;
    gap: 12px;
    padding: 15px;
    
    .product-image {
      grid-area: image;
      height: 140px;
    }
    
    h3 {
      grid-area: title;
      font-size: 1em;
    }
    
    p {
      grid-area: desc;
      font-size: 0.85em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .icon {
      grid-area: icon;
      align-self: start;
    }
  }
}
```

---

## 🚀 Rendimiento

### Métricas Target

| Métrica | Desktop | Móvil |
|---------|---------|-------|
| FCP (First Contentful Paint) | < 1.8s | < 2.5s |
| LCP (Largest Contentful Paint) | < 2.5s | < 4.0s |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.1 |
| FID (First Input Delay) | < 100ms | < 100ms |

### Optimizaciones Implementadas

✅ CSS comprimido
✅ Lazy loading de imágenes
✅ Hardware acceleration
✅ Passive event listeners
✅ Debounce en búsqueda
✅ Viewport optimization
✅ Grid layout eficiente

---

## 📚 Recursos Adicionales

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Mobile Web Best Practices](https://developers.google.com/web/fundamentals)
- [Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Web.dev Performance](https://web.dev/performance/)

---

**Última actualización:** 2026
**Autor:** Omar Hernández Rey
**Licencia:** MIT
