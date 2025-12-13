// ==========================================
//  SHARED WEBSITE LOGIC
// ==========================================

// 1. Page Loader Logic
// ------------------------------------------
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Wait 500ms before starting fade out
        setTimeout(() => {
            loader.style.opacity = '0';
            // Wait for fade transition (700ms) to finish before hiding
            setTimeout(() => {
                loader.style.display = 'none';
            }, 700);
        }, 500);
    }
});

// 2. Scroll Animations (Intersection Observer)
// ------------------------------------------
// This adds the class 'active' to any element with class 'reveal'
// when it comes into view.
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing once revealed to improve performance
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Attach observer to all elements with class 'reveal'
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

// 3. Navbar Effects
// ------------------------------------------
// Adds a background blur and padding change when scrolling down
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('py-2');
            // Optional: Add specific background class if needed
            // nav.classList.add('bg-black/80'); 
        } else {
            nav.classList.remove('py-2');
            // nav.classList.remove('bg-black/80');
        }
    }
});

// 4. Mobile Menu Toggle
// ------------------------------------------
// Used by the hamburger menu button in the navbar
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        
        // Optional: Add a class for animation if your CSS supports it
        // menu.classList.toggle('open'); 
    }
}

// Make function global so onclick="toggleMobileMenu()" works in HTML
window.toggleMobileMenu = toggleMobileMenu;