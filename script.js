// Navbar toggle (same as before)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Auto year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Animate skill bars when they scroll into view
const skillSpans = document.querySelectorAll('.skill-bar span');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const span = entry.target;
      span.style.width = span.getAttribute('data-skill');
      span.classList.add('animated');
      skillObserver.unobserve(span);
    }
  });
}, { threshold: 0.5 });

skillSpans.forEach(span => {
  skillObserver.observe(span);
});




