// Navbar toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));

// Auto year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Animate skill bars on scroll
const skillSpans = document.querySelectorAll('.skill-bar span');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const span = entry.target;
      span.style.width = span.getAttribute('data-skill');
      skillObserver.unobserve(span);
    }
  });
}, { threshold: 0.5 });
skillSpans.forEach(span => skillObserver.observe(span));

// Update footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Animate skill bars on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar span");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const value = entry.target.getAttribute("data-skill");
          entry.target.style.width = value;
        }
      });
    },
    { threshold: 0.6 }
  );

  skillBars.forEach(bar => observer.observe(bar));
});






