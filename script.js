// =============================================
//  SAÚCO CHIMALTENANGO — Interactividad
//  Archivo: script.js
//  Enlazado desde: index.html
// =============================================


// --- TOAST: Notificación al agregar producto al carrito ---
function agregarCarrito(nombre) {
  const toast = document.getElementById('toast');
  toast.textContent = '🛒 ' + nombre + ' agregado al carrito';
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}


// --- SCROLL ANIMATION: Elementos aparecen al hacer scroll ---
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.style.opacity = '1';
      entrada.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.producto-card, .beneficio-item, .dato-card, .stat-box, .paso, .foto-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observador.observe(el);
});