// Eco-Store - Funcionalidades JavaScript Avanzadas

// Variables globales
let wishlist = [];
let cart = [];
let viewMode = 'grid'; // 'grid' o 'list'
let searchTerm = '';
let filterCategory = 'all';
let sortBy = 'default'; // 'default', 'name-asc', 'name-desc'
let theme = localStorage.getItem('theme') || 'light';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Función principal de inicialización
function initializeApp() {
  // Cargar datos del localStorage
  loadFromStorage();
  
  // Configurar eventos de navegación
  setupNavButtons();
  
  // Configurar eventos de productos
  setupProductCards();
  
  // Configurar smooth scroll
  setupSmoothScroll();
  
  // Configurar animaciones de entrada
  setupScrollAnimations();
  
  // Actualizar contadores
  updateCounters();
  
  // Nuevas funcionalidades modernas
  setupSearchBar();
  setupFilterButtons();
  setupViewToggle();
  setupBackToTop();
  setupThemeToggle();
  setupKeyboardShortcuts();
  setupProductQuickView();
  trackUserActivity();
  applyTheme();
}

// Configurar botones de navegación
function setupNavButtons() {
  const profileBtn = document.querySelector('.profile');
  const wishlistBtn = document.querySelector('.wishlist');
  const cartBtn = document.querySelector('.cart');
  
  if (profileBtn) {
    profileBtn.addEventListener('click', function() {
      showNotification('Perfil de usuario - Funcionalidad en desarrollo', 'info');
    });
  }
  
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', function() {
      toggleWishlistView();
    });
  }
  
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      toggleCartView();
    });
  }
}

// Configurar tarjetas de productos
function setupProductCards() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach((card, index) => {
    // Agregar animación escalonada
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Configurar icono de favoritos
    const icon = card.querySelector('.icon');
    if (icon) {
      icon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleWishlist(card, icon);
      });
    }
    
    // Agregar al carrito al hacer clic en la tarjeta
    card.addEventListener('click', function() {
      addToCart(card);
    });
  });
}

// Toggle favoritos
function toggleWishlist(card, iconElement) {
  const productName = card.querySelector('h3').textContent;
  const productImage = card.querySelector('.product-image img').src;
  
  const product = {
    name: productName,
    image: productImage,
    description: card.querySelector('p').textContent
  };
  
  const index = wishlist.findIndex(item => item.name === productName);
  
  if (index > -1) {
    // Remover de wishlist
    wishlist.splice(index, 1);
    iconElement.classList.remove('favorited');
    showNotification(`${productName} removido de favoritos`, 'info');
  } else {
    // Agregar a wishlist
    wishlist.push(product);
    iconElement.classList.add('favorited');
    showNotification(`${productName} agregado a favoritos ❤️`, 'success');
  }
  
  saveToStorage();
  updateCounters();
}

// Agregar al carrito
function addToCart(card) {
  const productName = card.querySelector('h3').textContent;
  const productImage = card.querySelector('.product-image img').src;
  
  const product = {
    name: productName,
    image: productImage,
    description: card.querySelector('p').textContent,
    quantity: 1
  };
  
  const existingProduct = cart.find(item => item.name === productName);
  
  if (existingProduct) {
    existingProduct.quantity++;
    showNotification(`${productName} cantidad actualizada en el carrito`, 'info');
  } else {
    cart.push(product);
    showNotification(`${productName} agregado al carrito 🛒`, 'success');
  }
  
  saveToStorage();
  updateCounters();
  
  // Animación de agregar al carrito
  animateAddToCart(card);
}

// Animación de agregar al carrito
function animateAddToCart(card) {
  card.style.transform = 'scale(0.95)';
  setTimeout(() => {
    card.style.transform = '';
  }, 200);
}

// Mostrar vista de wishlist
function toggleWishlistView() {
  if (wishlist.length === 0) {
    showNotification('Tu lista de favoritos está vacía', 'info');
    return;
  }
  
  let wishlistHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h2>❤️ Mis Favoritos (${wishlist.length})</h2>
          <button class="close-btn" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body">
  `;
  
  wishlist.forEach((item, index) => {
    wishlistHTML += `
      <div class="modal-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <button class="remove-btn" onclick="removeFromWishlist(${index})">🗑️</button>
      </div>
    `;
  });
  
  wishlistHTML += `
        </div>
      </div>
    </div>
  `;
  
  showModal(wishlistHTML);
}

// Mostrar vista de carrito
function toggleCartView() {
  if (cart.length === 0) {
    showNotification('Tu carrito está vacío', 'info');
    return;
  }
  
  let cartHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h2>🛒 Mi Carrito (${cart.reduce((sum, item) => sum + item.quantity, 0)} items)</h2>
          <button class="close-btn" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body">
  `;
  
  cart.forEach((item, index) => {
    cartHTML += `
      <div class="modal-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="quantity-controls">
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `;
  });
  
  cartHTML += `
        </div>
        <div class="modal-footer">
          <button class="checkout-btn" onclick="checkout()">Proceder al Pago</button>
        </div>
      </div>
    </div>
  `;
  
  showModal(cartHTML);
}

// Mostrar modal
function showModal(html) {
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }
  
  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';
  
  // Agregar estilos del modal
  if (!document.getElementById('modal-styles')) {
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
      }
      
      .modal-content {
        background: white;
        border-radius: 25px;
        max-width: 800px;
        width: 90%;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        animation: slideUp 0.3s ease;
      }
      
      .modal-header {
        padding: 30px;
        border-bottom: 2px solid #FFEFE7;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-header h2 {
        color: #7C6A0A;
        margin: 0;
        font-size: 1.8em;
      }
      
      .close-btn {
        background: none;
        border: none;
        font-size: 2em;
        cursor: pointer;
        color: #7C6A0A;
        transition: all 0.3s ease;
      }
      
      .close-btn:hover {
        transform: rotate(90deg);
        color: #FA9500;
      }
      
      .modal-body {
        padding: 30px;
        overflow-y: auto;
        flex: 1;
      }
      
      .modal-item {
        display: flex;
        gap: 20px;
        padding: 20px;
        margin-bottom: 20px;
        background: #FFEFE7;
        border-radius: 15px;
        align-items: center;
        transition: all 0.3s ease;
      }
      
      .modal-item:hover {
        transform: translateX(5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
      
      .modal-item img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
      }
      
      .item-info {
        flex: 1;
      }
      
      .item-info h3 {
        color: #7C6A0A;
        margin: 0 0 10px 0;
        font-size: 1.2em;
      }
      
      .item-info p {
        color: #7C6A0A;
        opacity: 0.8;
        margin: 0;
        font-size: 0.9em;
      }
      
      .quantity-controls {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-top: 10px;
      }
      
      .quantity-controls button {
        background: #FA9500;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2em;
        transition: all 0.3s ease;
      }
      
      .quantity-controls button:hover {
        transform: scale(1.1);
        background: darken(#FA9500, 10%);
      }
      
      .quantity-controls span {
        font-weight: bold;
        color: #7C6A0A;
        min-width: 30px;
        text-align: center;
      }
      
      .remove-btn {
        background: #ff4444;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1.2em;
        transition: all 0.3s ease;
      }
      
      .remove-btn:hover {
        background: #cc0000;
        transform: scale(1.1);
      }
      
      .modal-footer {
        padding: 30px;
        border-top: 2px solid #FFEFE7;
      }
      
      .checkout-btn {
        width: 100%;
        padding: 18px;
        background: linear-gradient(135deg, #FA9500, #ff7700);
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .checkout-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(250, 149, 0, 0.4);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(50px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styles);
  }
}

// Cerrar modal
function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 300);
  }
}

// Actualizar cantidad en carrito
function updateQuantity(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
    return;
  }
  
  saveToStorage();
  toggleCartView(); // Refrescar vista
}

// Remover de wishlist
function removeFromWishlist(index) {
  const productName = wishlist[index].name;
  wishlist.splice(index, 1);
  saveToStorage();
  updateCounters();
  toggleWishlistView(); // Refrescar vista
  showNotification(`${productName} removido de favoritos`, 'info');
}

// Remover del carrito
function removeFromCart(index) {
  const productName = cart[index].name;
  cart.splice(index, 1);
  saveToStorage();
  updateCounters();
  
  if (cart.length === 0) {
    closeModal();
  } else {
    toggleCartView(); // Refrescar vista
  }
  
  showNotification(`${productName} removido del carrito`, 'info');
}

// Proceso de checkout
function checkout() {
  showNotification('¡Gracias por tu compra! 🎉 Funcionalidad de pago en desarrollo', 'success');
  cart = [];
  saveToStorage();
  updateCounters();
  closeModal();
}

// Actualizar contadores
function updateCounters() {
  const wishlistBtn = document.querySelector('.wishlist');
  const cartBtn = document.querySelector('.cart');
  
  // Remover badges existentes
  document.querySelectorAll('.badge').forEach(badge => badge.remove());
  
  // Agregar badge a wishlist si hay items
  if (wishlist.length > 0 && wishlistBtn) {
    const badge = createBadge(wishlist.length);
    wishlistBtn.appendChild(badge);
  }
  
  // Agregar badge a carrito si hay items
  if (cart.length > 0 && cartBtn) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = createBadge(totalItems);
    cartBtn.appendChild(badge);
  }
}

// Crear badge
function createBadge(count) {
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = count;
  badge.style.cssText = `
    position: absolute;
    top: -5px;
    right: -5px;
    background: #FA9500;
    color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  `;
  return badge;
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  const colors = {
    success: '#4CAF50',
    error: '#f44336',
    info: '#2196F3',
    warning: '#ff9800'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: ${colors[type] || colors.info};
    color: white;
    padding: 18px 25px;
    border-radius: 50px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
    z-index: 10001;
    animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
    font-weight: 500;
    max-width: 350px;
  `;
  
  // Agregar estilos de animación si no existen
  if (!document.getElementById('notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styles);
  }
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Guardar en localStorage
function saveToStorage() {
  localStorage.setItem('ecostore_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('ecostore_cart', JSON.stringify(cart));
}

// Cargar desde localStorage
function loadFromStorage() {
  const savedWishlist = localStorage.getItem('ecostore_wishlist');
  const savedCart = localStorage.getItem('ecostore_cart');
  
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist);
  }
  
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  
  // Restaurar iconos favoritos
  setTimeout(() => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const productName = card.querySelector('h3').textContent;
      if (wishlist.some(item => item.name === productName)) {
        const icon = card.querySelector('.icon');
        if (icon) {
          icon.classList.add('favorited');
        }
      }
    });
  }, 100);
}

// Configurar smooth scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Animaciones al hacer scroll
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar secciones
  document.querySelectorAll('section, .gallery-images img, .mission-section > div').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ========================================
// FUNCIONALIDADES MODERNAS AVANZADAS
// ========================================

// 1. BÚSQUEDA EN TIEMPO REAL
function setupSearchBar() {
  // Crear barra de búsqueda si no existe
  const mainSection = document.querySelector('.main-section');
  if (!mainSection || document.querySelector('.search-container')) return;
  
  const searchHTML = `
    <div class="search-container">
      <div class="search-wrapper">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#7C6A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input type="text" id="searchInput" placeholder="Buscar productos..." autocomplete="off">
        <button class="clear-search" style="display: none;">✕</button>
      </div>
      <div class="search-results" style="display: none;"></div>
    </div>
  `;
  
  mainSection.insertAdjacentHTML('afterbegin', searchHTML);
  
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.querySelector('.clear-search');
  const searchResults = document.querySelector('.search-results');
  
  // Búsqueda en tiempo real con debounce
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    const value = e.target.value.trim();
    
    clearBtn.style.display = value ? 'block' : 'none';
    
    searchTimeout = setTimeout(() => {
      performSearch(value);
    }, 300);
  });
  
  // Limpiar búsqueda
  clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchResults.style.display = 'none';
    filterProducts();
  });
  
  // Cerrar resultados al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchResults.style.display = 'none';
    }
  });
}

function performSearch(term) {
  searchTerm = term.toLowerCase();
  const searchResults = document.querySelector('.search-results');
  
  if (!term) {
    searchResults.style.display = 'none';
    filterProducts();
    return;
  }
  
  const allProducts = document.querySelectorAll('.product-card');
  const matches = [];
  
  allProducts.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    const productDesc = card.querySelector('p').textContent.toLowerCase();
    
    if (productName.includes(term) || productDesc.includes(term)) {
      matches.push({
        name: card.querySelector('h3').textContent,
        desc: card.querySelector('p').textContent,
        img: card.querySelector('.product-image img').src,
        element: card
      });
    }
  });
  
  // Mostrar resultados
  if (matches.length > 0) {
    let resultsHTML = `<div class="search-results-header">${matches.length} resultado(s) encontrado(s)</div>`;
    matches.forEach(product => {
      resultsHTML += `
        <div class="search-result-item" data-product="${product.name}">
          <img src="${product.img}" alt="${product.name}">
          <div>
            <h4>${highlightText(product.name, term)}</h4>
            <p>${highlightText(product.desc, term)}</p>
          </div>
        </div>
      `;
    });
    searchResults.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
    
    // Scroll a producto al hacer clic
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', function() {
        const productName = this.dataset.product;
        const productCard = Array.from(allProducts).find(card => 
          card.querySelector('h3').textContent === productName
        );
        if (productCard) {
          productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          productCard.style.animation = 'pulse 1s ease';
        }
        searchResults.style.display = 'none';
      });
    });
  } else {
    searchResults.innerHTML = '<div class="no-results">No se encontraron productos</div>';
    searchResults.style.display = 'block';
  }
  
  filterProducts();
}

function highlightText(text, term) {
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// 2. FILTROS POR CATEGORÍA
function setupFilterButtons() {
  const productSection = document.querySelector('.product-section');
  if (!productSection || document.querySelector('.filter-container')) return;
  
  const filterHTML = `
    <div class="filter-container">
      <button class="filter-btn active" data-filter="all">Todos</button>
      <button class="filter-btn" data-filter="healthcare">Salud</button>
      <button class="filter-btn" data-filter="furniture">Hogar</button>
    </div>
  `;
  
  productSection.insertAdjacentHTML('afterbegin', filterHTML);
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterCategory = this.dataset.filter;
      filterProducts();
    });
  });
}

function filterProducts() {
  const healthcareProducts = document.querySelectorAll('.healthcare .product-card');
  const furnitureProducts = document.querySelectorAll('.furniture .product-card');
  
  const allProducts = [...healthcareProducts, ...furnitureProducts];
  
  allProducts.forEach(card => {
    const matchesCategory = filterCategory === 'all' || 
      (filterCategory === 'healthcare' && card.closest('.healthcare')) ||
      (filterCategory === 'furniture' && card.closest('.furniture'));
    
    const productName = card.querySelector('h3').textContent.toLowerCase();
    const productDesc = card.querySelector('p').textContent.toLowerCase();
    const matchesSearch = !searchTerm || 
      productName.includes(searchTerm) || 
      productDesc.includes(searchTerm);
    
    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.5s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// 3. TOGGLE VISTA GRID/LIST
function setupViewToggle() {
  const nav = document.querySelector('nav');
  if (!nav || document.querySelector('.view-toggle')) return;
  
  const viewToggleHTML = `
    <div class="view-toggle">
      <button class="view-btn active" data-view="grid" title="Vista de cuadrícula">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8" height="8" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="13" width="8" height="8" stroke="currentColor" stroke-width="2"/>
          <rect x="13" y="3" width="8" height="8" stroke="currentColor" stroke-width="2"/>
          <rect x="13" y="13" width="8" height="8" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>
      <button class="view-btn" data-view="list" title="Vista de lista">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/>
          <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2"/>
          <rect x="3" y="4" width="4" height="4" fill="currentColor"/>
          <rect x="3" y="10" width="4" height="4" fill="currentColor"/>
          <rect x="3" y="16" width="4" height="4" fill="currentColor"/>
        </svg>
      </button>
    </div>
  `;
  
  nav.querySelector('.icons').insertAdjacentHTML('beforebegin', viewToggleHTML);
  
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      viewMode = this.dataset.view;
      toggleViewMode();
    });
  });
}

function toggleViewMode() {
  const cardSections = document.querySelectorAll('.card-section');
  
  cardSections.forEach(section => {
    if (viewMode === 'list') {
      section.classList.add('list-view');
      section.classList.remove('grid-view');
    } else {
      section.classList.add('grid-view');
      section.classList.remove('list-view');
    }
  });
  
  showNotification(`Vista cambiada a ${viewMode === 'grid' ? 'cuadrícula' : 'lista'}`, 'info');
}

// 4. BOTÓN VOLVER ARRIBA
function setupBackToTop() {
  const backToTopHTML = `
    <button class="back-to-top" title="Volver arriba">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;
  
  document.body.insertAdjacentHTML('beforeend', backToTopHTML);
  
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 5. MODO OSCURO/CLARO
function setupThemeToggle() {
  const nav = document.querySelector('nav');
  if (!nav || document.querySelector('.theme-toggle')) return;
  
  const themeToggleHTML = `
    <button class="theme-toggle" title="Cambiar tema">
      <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
      </svg>
      <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" style="display: none;">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2"/>
      </svg>
    </button>
  `;
  
  nav.querySelector('.icons').insertAdjacentHTML('beforebegin', themeToggleHTML);
  
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const sunIcon = themeToggleBtn.querySelector('.sun-icon');
  const moonIcon = themeToggleBtn.querySelector('.moon-icon');
  
  themeToggleBtn.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme();
    
    // Toggle icons
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
    
    showNotification(`Modo ${theme === 'dark' ? 'oscuro' : 'claro'} activado`, 'success');
  });
  
  // Set initial icon
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

function applyTheme() {
  document.body.classList.toggle('dark-theme', theme === 'dark');
}

// 6. ATAJOS DE TECLADO
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Abrir búsqueda
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.focus();
        showNotification('Búsqueda activada (Ctrl+K)', 'info');
      }
    }
    
    // Ctrl/Cmd + B: Toggle tema
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      document.querySelector('.theme-toggle')?.click();
    }
    
    // ESC: Cerrar modales
    if (e.key === 'Escape') {
      closeModal();
    }
    
    // Ctrl/Cmd + H: Ver favoritos
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      e.preventDefault();
      toggleWishlistView();
    }
    
    // Ctrl/Cmd + C: Ver carrito
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault();
      toggleCartView();
    }
  });
}

// 7. VISTA RÁPIDA DE PRODUCTO
function setupProductQuickView() {
  document.querySelectorAll('.product-card').forEach(card => {
    // Agregar botón de vista rápida
    const quickViewBtn = document.createElement('button');
    quickViewBtn.className = 'quick-view-btn';
    quickViewBtn.innerHTML = '👁️ Vista Rápida';
    quickViewBtn.style.display = 'none';
    
    card.appendChild(quickViewBtn);
    
    card.addEventListener('mouseenter', () => {
      quickViewBtn.style.display = 'block';
    });
    
    card.addEventListener('mouseleave', () => {
      quickViewBtn.style.display = 'none';
    });
    
    quickViewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showQuickView(card);
    });
  });
}

function showQuickView(card) {
  const productName = card.querySelector('h3').textContent;
  const productDesc = card.querySelector('p').textContent;
  const productImg = card.querySelector('.product-image img').src;
  
  const quickViewHTML = `
    <div class="modal-overlay quick-view-modal" onclick="closeModal()">
      <div class="modal-content quick-view-content" onclick="event.stopPropagation()">
        <button class="close-btn" onclick="closeModal()">✕</button>
        <div class="quick-view-body">
          <div class="quick-view-image">
            <img src="${productImg}" alt="${productName}">
          </div>
          <div class="quick-view-info">
            <h2>${productName}</h2>
            <p>${productDesc}</p>
            <div class="quick-view-actions">
              <button class="btn-primary" onclick="addToCartFromQuickView('${productName}')">
                🛒 Agregar al Carrito
              </button>
              <button class="btn-secondary" onclick="toggleWishlistFromQuickView('${productName}')">
                ❤️ Agregar a Favoritos
              </button>
            </div>
            <div class="product-features">
              <h3>Características:</h3>
              <ul>
                <li>✓ 100% Materiales ecológicos</li>
                <li>✓ Producción artesanal</li>
                <li>✓ Libre de químicos dañinos</li>
                <li>✓ Empaque biodegradable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  showModal(quickViewHTML);
}

window.addToCartFromQuickView = function(productName) {
  const card = Array.from(document.querySelectorAll('.product-card')).find(
    c => c.querySelector('h3').textContent === productName
  );
  if (card) {
    addToCart(card);
    closeModal();
  }
};

window.toggleWishlistFromQuickView = function(productName) {
  const card = Array.from(document.querySelectorAll('.product-card')).find(
    c => c.querySelector('h3').textContent === productName
  );
  if (card) {
    const icon = card.querySelector('.icon');
    toggleWishlist(card, icon);
    closeModal();
  }
};

// 8. TRACKING DE ACTIVIDAD DEL USUARIO
function trackUserActivity() {
  // Tiempo en la página
  let startTime = Date.now();
  
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Tiempo en la página: ${timeSpent} segundos`);
    
    // Guardar estadísticas
    const stats = JSON.parse(localStorage.getItem('ecostore_stats') || '{}');
    stats.totalTimeSpent = (stats.totalTimeSpent || 0) + timeSpent;
    stats.visits = (stats.visits || 0) + 1;
    stats.lastVisit = new Date().toISOString();
    localStorage.setItem('ecostore_stats', JSON.stringify(stats));
  });
  
  // Tracking de clics
  document.addEventListener('click', (e) => {
    if (e.target.closest('.product-card')) {
      const productName = e.target.closest('.product-card').querySelector('h3').textContent;
      console.log(`Click en producto: ${productName}`);
    }
  });
}

// Mensaje de bienvenida
setTimeout(() => {
  showNotification('¡Bienvenido a Eco-Store! 🌱', 'success');
}, 500);
