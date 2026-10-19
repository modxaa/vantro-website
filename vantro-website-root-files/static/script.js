const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Set VANTRO_CONTACT_EMAIL to your real business email before publishing.
const BUSINESS_EMAIL = 'vantrodigital29@gmail.com';
const form = document.querySelector('#contactForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Vantro project enquiry — ${data.get('service')}`;
  const body = `Hello Vantro,\n\nMy name is ${data.get('name')}.\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}\n\nThank you.`;
  document.querySelector('#formStatus').textContent = 'Opening your email app…';
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
