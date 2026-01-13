// Small JS for nav toggle, smooth scroll, and year
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('primary-nav');
  const btn = document.getElementById('navToggle');

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.dataset.open = String(!open);
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav if open
        if(window.innerWidth < 900){
          btn.setAttribute('aria-expanded','false');
          nav.dataset.open = 'false';
        }
      }
    });
  });

  // Current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});