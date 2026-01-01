# 🚀 Guía de Funcionalidades Avanzadas - Eco-Store

## Bienvenido a Eco-Store v1.1.0

Esta guía te ayudará a aprovechar al máximo todas las funcionalidades modernas implementadas.

---

## 🔍 Búsqueda Inteligente

### Cómo usar
1. **Atajo rápido**: Presiona `Ctrl+K` (Windows/Linux) o `Cmd+K` (Mac)
2. **Manual**: Haz clic en la barra de búsqueda
3. Escribe lo que buscas
4. Los resultados aparecen instantáneamente

### Características
- ✅ Búsqueda en tiempo real (300ms debounce)
- ✅ Busca en nombres y descripciones
- ✅ Resaltado de coincidencias
- ✅ Click en resultado para scroll automático
- ✅ Botón × para limpiar

### Ejemplo
```
Buscar: "bambú"
Resultados: Cepillo de bambú, Silla de bambú, Lámpara de bambú
```

---

## 🎯 Filtros por Categoría

### Opciones disponibles
- **Todos**: Muestra todos los productos
- **Salud**: Productos de cuidado personal
- **Hogar**: Muebles y decoración

### Cómo usar
1. Haz clic en el botón de categoría deseada
2. Los productos se filtran instantáneamente
3. Combina con búsqueda para resultados precisos

### Nota
Los filtros y búsqueda trabajan juntos. Si filtras "Salud" y buscas "crema", solo verás productos de salud que contengan "crema".

---

## 📱 Vista Grid/List

### Modos disponibles

#### Vista Grid (Cuadrícula) 🔲
- Muestra más productos a la vez
- Ideal para explorar el catálogo
- Vista por defecto

#### Vista List (Lista) ☰
- Información más detallada
- Mejor para comparar productos
- Diseño horizontal

### Cómo cambiar
1. Busca los iconos en la barra de navegación
2. Haz clic en el icono de cuadrícula o lista
3. La vista cambia instantáneamente

---

## 🌓 Modo Oscuro/Claro

### Beneficios
- **Modo Claro**: Mejor para ambientes luminosos
- **Modo Oscuro**: Reduce fatiga visual en ambientes oscuros

### Cómo activar
1. **Método 1**: Haz clic en el icono sol/luna en el navbar
2. **Método 2**: Presiona `Ctrl+B` (Windows/Linux) o `Cmd+B` (Mac)

### Personalización
- Tu preferencia se guarda automáticamente
- Se aplica cada vez que visitas la página
- Todos los elementos se adaptan al tema

---

## 👁️ Vista Rápida de Productos

### Qué incluye
- Imagen ampliada del producto
- Descripción completa
- Botón "Agregar al Carrito"
- Botón "Agregar a Favoritos"
- Lista de características

### Cómo acceder
1. Pasa el mouse sobre cualquier producto
2. Aparece el botón "👁️ Vista Rápida"
3. Haz clic en el botón
4. Se abre un modal con la información

### Acciones disponibles
- **Agregar al Carrito**: Sin salir del modal
- **Agregar a Favoritos**: Marca como favorito
- **Cerrar**: Click en × o fuera del modal

---

## ⌨️ Atajos de Teclado

### Lista completa

| Atajo | Windows/Linux | Mac | Acción |
|-------|---------------|-----|--------|
| Búsqueda | `Ctrl + K` | `Cmd + K` | Abre la búsqueda |
| Tema | `Ctrl + B` | `Cmd + B` | Cambia tema oscuro/claro |
| Favoritos | `Ctrl + H` | `Cmd + H` | Abre lista de favoritos |
| Carrito | `Ctrl + C` | `Cmd + C` | Abre carrito de compras |
| Cerrar | `ESC` | `ESC` | Cierra modales abiertos |

### Consejos
- Los atajos son case-insensitive
- Funcionan en toda la página
- Recibes notificación visual al usarlos

---

## ⬆️ Botón Volver Arriba

### Funcionamiento
- Aparece automáticamente al hacer scroll > 300px
- Desaparece cerca del inicio de la página
- Scroll suave al hacer click

### Diseño
- Botón flotante en la esquina inferior derecha
- Icono de flecha hacia arriba
- Efecto hover con elevación

---

## ❤️ Sistema de Favoritos

### Gestión de favoritos
1. **Agregar**: Click en ❤️ de cualquier producto
2. **Ver todos**: Click en ❤️ del navbar o `Ctrl+H`
3. **Remover**: Click en 🗑️ en el modal de favoritos

### Características
- Contador en el navbar
- Persistencia entre sesiones
- Indicador visual en productos favoritos
- Modal con vista completa

---

## 🛒 Carrito de Compras

### Gestión del carrito
1. **Agregar**: Click en producto o botón en vista rápida
2. **Ver**: Click en 🛒 del navbar o `Ctrl+C`
3. **Cantidad**: Usa botones + y - en el modal
4. **Eliminar**: Click en 🗑️ para remover item

### Características
- Contador de items en navbar
- Control de cantidades
- Total de items calculado
- Persistencia entre sesiones
- Modal interactivo

---

## 🔔 Notificaciones

### Tipos de notificaciones
- ✅ **Success** (Verde): Acciones exitosas
- ℹ️ **Info** (Azul): Información general
- ⚠️ **Warning** (Naranja): Advertencias
- ❌ **Error** (Rojo): Errores

### Comportamiento
- Aparecen en la esquina superior derecha
- Se auto-cierran después de 3 segundos
- Animación suave de entrada/salida
- No bloquean la interacción

---

## 💾 Persistencia de Datos

### Qué se guarda
- ❤️ Lista de favoritos
- 🛒 Productos en el carrito
- 🌓 Preferencia de tema
- 📊 Estadísticas de uso
- 👁️ Preferencia de vista

### Dónde se guarda
Todo se almacena en **localStorage** de tu navegador:
- `ecostore_wishlist`: Favoritos
- `ecostore_cart`: Carrito
- `ecostore_stats`: Estadísticas
- `theme`: Preferencia de tema

### Privacidad
- Todos los datos están en tu dispositivo
- No se envía información a servidores
- Puedes borrar datos limpiando localStorage

---

## 📊 Analytics y Tracking

### Qué se rastrea
- ⏱️ Tiempo en la página
- 👆 Clicks en productos
- 📈 Número de visitas
- 📅 Última visita

### Cómo ver tus estadísticas
Abre la consola del navegador (F12) y escribe:
```javascript
JSON.parse(localStorage.getItem('ecostore_stats'))
```

---

## 🎨 Personalización Visual

### Scrollbar Personalizada
- Color acorde a la paleta
- Hover effect
- Se adapta al tema oscuro/claro

### Animaciones
- **Scroll**: Elementos aparecen al hacer scroll
- **Hover**: Efectos al pasar el mouse
- **Click**: Feedback visual en acciones
- **Transiciones**: Cambios suaves

---

## 🐛 Solución de Problemas

### La búsqueda no funciona
- Verifica que JavaScript esté habilitado
- Refresca la página (F5)
- Limpia caché del navegador

### Los favoritos/carrito no se guardan
- Verifica que localStorage esté habilitado
- Comprueba que no estés en modo incógnito
- Revisa si el navegador tiene espacio disponible

### El tema no cambia
- Refresca la página
- Limpia localStorage y recarga
- Verifica compatibilidad del navegador

### Los atajos no funcionan
- Asegúrate de no estar en un campo de texto
- Verifica que no haya conflictos con extensiones
- Prueba en modo incógnito

---

## 💡 Consejos y Trucos

### Navegación eficiente
1. Usa atajos de teclado para acciones rápidas
2. Combina búsqueda + filtros para encontrar productos
3. Usa vista rápida para agregar sin navegar

### Productividad
1. Marca favoritos mientras exploras
2. Usa el carrito como lista de deseos temporal
3. Cambia a vista lista para comparar productos

### Accesibilidad
1. Usa modo oscuro en ambientes con poca luz
2. Los atajos facilitan navegación sin mouse
3. Scroll suave mejora la experiencia

---

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablets (iPad, Android)
- ✅ Móviles (iOS, Android)

---

## 🆘 Soporte

### ¿Necesitas ayuda?
- 📧 Email: omar.hernandez.rey@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/omarhernandezrey/35-Curso-de-Fundamentos-de-Sass.io/discussions)

---

## 🎯 Próximas Funcionalidades

Estamos trabajando en:
- 🔐 Sistema de autenticación
- 💳 Integración de pagos
- 📦 Seguimiento de pedidos
- ⭐ Sistema de reseñas
- 🤖 Recomendaciones inteligentes

---

**¡Gracias por usar Eco-Store!** 🌱

*Última actualización: Enero 2026*
*Versión: 1.1.0*
