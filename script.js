document.addEventListener('DOMContentLoaded', () => {
    // Set Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Toggle
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primary-nav');
    
    if(toggle) {
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
});
