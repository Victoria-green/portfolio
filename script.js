document.addEventListener('DOMContentLoaded', () => {
    // Auto-update copyright year
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Mobile Toggle Logic
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primary-nav');
    
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            const isVisible = nav.style.display === 'block';
            nav.style.display = isVisible ? 'none' : 'block';
            toggle.textContent = isVisible ? '☰' : '✕';
        });
    }
});
