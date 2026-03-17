/* ============================================================
   REVIVE NATURAL — LÓGICA DEL SITIO
   ============================================================ */

// Formato de precios colombianos
function formatPrecio(valor) {
  return '$ ' + valor.toLocaleString('es-CO');
}

// Mostrar toast de notificación
function mostrarToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 2200);
}

// ── CARRITO ──────────────────────────────────────────────
let carrito = JSON.parse(localStorage.getItem('rn-carrito') || '[]');

function guardarCarrito() {
  localStorage.setItem('rn-carrito', JSON.stringify(carrito));
}

function obtenerTotal() {
  return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
}

function obtenerTotalItems() {
  return carrito.reduce((sum, item) => sum + item.cantidad, 0);
}

function actualizarContadorNav() {
  const count = obtenerTotalItems();
  document.querySelectorAll('.carrito-count').forEach(el => {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'grid';
  });
}

function agregarAlCarrito(id) {
  const prod = PRODUCTOS.find(p => p.id === id);
  if (!prod) return;
  const existente = carrito.find(i => i.id === id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }
  guardarCarrito();
  actualizarContadorNav();
  renderCarrito();
  mostrarToast(`✅ ${prod.nombre} agregado al carrito`);
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }
  guardarCarrito();
  actualizarContadorNav();
  renderCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  guardarCarrito();
  actualizarContadorNav();
  renderCarrito();
}

function renderCarrito() {
  const contenedor = document.getElementById('carrito-items');
  const subtotalEl = document.getElementById('carrito-subtotal-val');
  const totalEl = document.getElementById('carrito-total-val');

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="carrito-vacio">
        <div class="emoji">🛒</div>
        <p>Tu carrito está vacío.<br>¡Agrega productos para empezar!</p>
      </div>`;
    subtotalEl.textContent = formatPrecio(0);
    totalEl.textContent = formatPrecio(0);
    return;
  }

  contenedor.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img class="carrito-item-img"
           src="${item.imagen}"
           alt="${item.nombre}"
           onerror="this.src='imagenes/placeholder.jpg'">
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        <div class="carrito-item-precio">${formatPrecio(item.precio * item.cantidad)}</div>
        <div class="carrito-item-controles">
          <button class="btn-qty" onclick="cambiarCantidad(${item.id}, -1)">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="btn-qty" onclick="cambiarCantidad(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">🗑</button>
    </div>
  `).join('');

  const total = obtenerTotal();
  subtotalEl.textContent = formatPrecio(total);
  totalEl.textContent = formatPrecio(total);
}

function abrirCarrito() {
  document.getElementById('carrito-overlay').classList.add('abierto');
  document.getElementById('carrito-panel').classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
  document.getElementById('carrito-overlay').classList.remove('abierto');
  document.getElementById('carrito-panel').classList.remove('abierto');
  document.body.style.overflow = '';
}

function pedirPorWhatsApp() {
  if (carrito.length === 0) {
    mostrarToast('⚠️ Agrega productos al carrito primero');
    return;
  }
  const detalle = carrito.map(i =>
    `• ${i.nombre} x${i.cantidad} = ${formatPrecio(i.precio * i.cantidad)}`
  ).join('%0A');
  const total = formatPrecio(obtenerTotal());
  const msg = `🌿 *PEDIDO REVIVE NATURAL*%0A%0A${detalle}%0A%0A*TOTAL: ${total}*%0A%0APor favor confírmenme disponibilidad y forma de pago. ¡Gracias!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}

// ── CATÁLOGO ─────────────────────────────────────────────
let categoriaActiva = 'Todos';
let busqueda = '';

function renderProductos() {
  const grid = document.getElementById('productos-grid');
  let lista = PRODUCTOS;

  if (categoriaActiva !== 'Todos') {
    lista = lista.filter(p => p.categoria === categoriaActiva);
  }

  if (busqueda.trim()) {
    const q = busqueda.toLowerCase();
    lista = lista.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
    );
  }

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="sin-resultados">
        <div class="emoji">🔍</div>
        <p>No encontramos productos con "<strong>${busqueda || categoriaActiva}</strong>"</p>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(p => `
    <div class="producto-card">
      <div class="producto-imagen-wrap">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
             onerror="this.src='imagenes/placeholder.jpg'">
        <span class="producto-badge-cat">${p.categoria}</span>
        ${p.destacado ? '<span class="badge-destacado">⭐ Popular</span>' : ''}
      </div>
      <div class="producto-info">
        <div class="producto-nombre">${p.nombre}</div>
        <div class="producto-desc">${p.descripcion}</div>
        <div class="producto-precio">
          ${formatPrecio(p.precio)}
          <small>COP</small>
        </div>
        <div class="producto-acciones">
          <button class="btn-agregar" onclick="agregarAlCarrito(${p.id})">
            🛒 Agregar
          </button>
          <button class="btn-wa-producto"
            onclick="window.open('https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20*${encodeURIComponent(p.nombre)}*%20de%20Revive%20Natural.', '_blank')"
            title="Consultar por WhatsApp">
            💬
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFiltros() {
  const wrap = document.getElementById('filtros-wrap');
  wrap.innerHTML = CATEGORIAS.map(cat => `
    <button class="filtro-btn ${cat === categoriaActiva ? 'activo' : ''}"
            onclick="seleccionarCategoria('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function seleccionarCategoria(cat) {
  categoriaActiva = cat;
  renderFiltros();
  renderProductos();
}

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFiltros();
  renderProductos();
  actualizarContadorNav();
  renderCarrito();

  // Buscador
  document.getElementById('buscador').addEventListener('input', e => {
    busqueda = e.target.value;
    renderProductos();
  });

  // Menú hamburguesa
  document.querySelector('.navbar-hamburger')?.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('menu-abierto');
  });

  // Cerrar overlay carrito
  document.getElementById('carrito-overlay').addEventListener('click', cerrarCarrito);
});
