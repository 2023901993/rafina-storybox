document.documentElement.classList.add('js');
const orderNumber = '60179761702';
document.querySelectorAll('[data-order]').forEach((button) => {
  button.addEventListener('click', () => {
    const packageName = button.dataset.order;
    const message = `Hai Rafina Storybox, saya berminat dengan ${packageName}.\n\nNama:\nKuantiti:\nBentuk/warna (jika berkaitan):\nLokasi penghantaran/COD:`;
    window.open(`https://wa.me/${orderNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

// Keep the catalogue readable if the browser blocks scroll observers.
window.setTimeout(() => document.querySelectorAll('.reveal:not(.is-visible)').forEach((item) => item.classList.add('is-visible')), 1400);
