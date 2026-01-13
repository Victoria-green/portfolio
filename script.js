document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Update Footer Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle accessibility attribute
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle class for CSS visibility
      primaryNav.classList.toggle('active');
      
      // Change icon (optional: switch between ☰ and ✕)
      navToggle.textContent = isExpanded ? '☰' : '✕';
    });
  }

  // 3. Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.primary-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });

});
