const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const bigFiveBtn = document.getElementById('bigFiveBtn');
const jobShadowingBtn = document.getElementById('jobShadowingBtn');
const imageModal = document.getElementById('imageModal');
const pdfModal = document.getElementById('pdfModal');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

function openModal(modal) {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
}

bigFiveBtn.addEventListener('click', () => openModal(imageModal));
jobShadowingBtn.addEventListener('click', () => openModal(pdfModal));
document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeModals));
document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) closeModals(); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModals(); });

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.14 });
revealItems.forEach(item => observer.observe(item));
