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
// 4. Mobile Menu Toggle (Fixed for Animation)
// ------------------------------------------
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    
    if (menu) {
        // Check if the menu is currently hidden (closed)
        if (menu.classList.contains('hidden')) {
            // --- OPENING SEQUENCE ---
            
            // 1. Remove display:none so it becomes visible in the DOM
            menu.classList.remove('hidden');
            
            // 2. Add a tiny delay to allow the browser to register "display:block"
            // before we trigger the CSS transition.
            setTimeout(() => {
                menu.classList.add('open');
            }, 10);
            
        } else {
            // --- CLOSING SEQUENCE ---
            
            // 1. Remove the open class to trigger the CSS slide-up animation
            menu.classList.remove('open');
            
            // 2. Wait for the CSS transition (300ms) to finish, 
            // then apply display:none to fully hide it.
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 300); 
        }
    }
}

// Make function global
window.toggleMobileMenu = toggleMobileMenu;

// ==========================================
//  Active Page Highlighter
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Get current filename (e.g., 'about.html')
    const path = window.location.pathname;
    const currentPage = path.split("/").pop() || "index.html";

    // Select both Desktop and Mobile links
    const navLinks = document.querySelectorAll(".nav-link, .nav-link-mobile");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        
        // Match link to current page
        if (href === currentPage) {
            link.classList.add("active");
            link.classList.remove("text-beige");
        } else {
            link.classList.remove("active");
        }
    });
});