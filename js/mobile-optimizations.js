/**
 * Optimizaciones específicas para dispositivos móviles
 * Mejora la experiencia táctil y el rendimiento en pantallas pequeñas
 */

class MobileOptimizations {
  constructor() {
    this.isMobile = window.innerWidth <= 768;
    this.isTouch = 'ontouchstart' in window;
    
    if (this.isMobile || this.isTouch) {
      this.init();
    }
  }
  
  init() {
    this.setupTouchFeedback();
    this.setupSwipeGestures();
    this.optimizeScrolling();
    this.preventZoomOnDoubleTap();
    this.optimizeImages();
    this.setupViewportHeight();
  }
  
  /**
   * Añade feedback visual para interacciones táctiles
   */
  setupTouchFeedback() {
    const interactiveElements = document.querySelectorAll(
      'button, .product-card, .filter-btn, .icon svg, a'
    );
    
    interactiveElements.forEach(element => {
      // Añadir efecto de "presionado"
      element.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
        this.style.transition = 'opacity 0.1s';
      }, { passive: true });
      
      element.addEventListener('touchend', function() {
        this.style.opacity = '1';
      }, { passive: true });
      
      element.addEventListener('touchcancel', function() {
        this.style.opacity = '1';
      }, { passive: true });
    });
  }
  
  /**
   * Implementa gestos de deslizamiento para navegación
   */
  setupSwipeGestures() {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    const modals = document.querySelectorAll('.modal-overlay');
    
    modals.forEach(modal => {
      modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });
      
      modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        this.handleSwipe(modal, touchStartX, touchEndX, touchStartY, touchEndY);
      }, { passive: true });
    });
  }
  
  handleSwipe(modal, startX, endX, startY, endY) {
    const swipeThreshold = 50;
    const diffX = startX - endX;
    const diffY = startY - endY;
    
    // Swipe hacia abajo para cerrar modal
    if (Math.abs(diffY) > Math.abs(diffX) && diffY < -swipeThreshold) {
      const closeBtn = modal.querySelector('.close-btn');
      if (closeBtn) {
        closeBtn.click();
      }
    }
  }
  
  /**
   * Optimiza el scrolling para móviles
   */
  optimizeScrolling() {
    // Smooth scrolling nativo
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Momentum scrolling para iOS
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Ocultar elementos mientras se hace scroll (mejor rendimiento)
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Solo aplicar optimizaciones en scrolls rápidos
      if (scrollDelta > 50) {
        document.body.classList.add('is-scrolling');
      }
      
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
        lastScrollY = currentScrollY;
      }, 150);
    }, { passive: true });
  }
  
  /**
   * Previene zoom accidental en doble tap
   */
  preventZoomOnDoubleTap() {
    let lastTouchEnd = 0;
    
    document.addEventListener('touchend', (event) => {
      const now = Date.now();
      
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      
      lastTouchEnd = now;
    }, { passive: false });
  }
  
  /**
   * Optimiza carga de imágenes en móviles
   */
  optimizeImages() {
    const images = document.querySelectorAll('img');
    
    // Lazy loading nativo
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
    
    // Intersection Observer para animaciones de carga
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          imageObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  /**
   * Ajusta la altura del viewport para móviles
   * Soluciona el problema de la barra de direcciones en móviles
   */
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
}

// Inicializar optimizaciones móviles
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MobileOptimizations();
  });
} else {
  new MobileOptimizations();
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MobileOptimizations;
}
