// ==========================================
//  HOME PAGE SPECIFIC LOGIC
// ==========================================

// 1. Countdown Timer Logic
// ------------------------------------------
// Set the date we're counting down to
const countDownDate = new Date("Feb 1, 2026 09:00:00").getTime();

// Update the count down every 1 second
const timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the elements with corresponding IDs
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");

    if (daysEl && hoursEl && minsEl) {
        daysEl.innerHTML = days < 10 ? "0" + days : days;
        hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
        minsEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timerInterval);
        if (daysEl) document.getElementById("days").innerHTML = "00";
        if (hoursEl) document.getElementById("hours").innerHTML = "00";
        if (minsEl) document.getElementById("mins").innerHTML = "00";
    }
}, 1000);


// 2. Past Glory Section Logic
// ------------------------------------------
// Data Source: Images from assets/images/glimpses folder
// We need ~9 items total for a balanced grid
const pastGloryData = [
    {
        type: 'image',
        src: 'assets/images/glimpses/img1.jpg',
        title: 'The Grand Launch',
        category: 'Event Start'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img2.jpg',
        title: 'Captivated Audience',
        category: 'Audience'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img10.jpg',
        category: 'Meet',
        title: 'Netwrking Time'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img4.jpg',
        title: 'Collaborative Ideas',
        category: 'Networking'
    },

    // *** CENTER ITEM (The Quote) ***
    {
        type: 'quote',
        text: "Unicorn isn't just a festival. It's where the future CEOs of India are born.",
        author: "Alumni, 2023"
    },

    {
        type: 'image',
        src: 'assets/images/glimpses/img5.jpg',
        title: 'Keynote Session',
        category: 'Highlights'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img6.jpg',
        title: 'Brainstorming Hub',
        category: 'Innovation'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img7.jpg',
        title: 'Core Management',
        category: 'Team'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img8.jpg',
        title: 'Victorious Smiles',
        category: 'Victory'
    },
];

function renderPastGlory() {
    const container = document.getElementById('past-glory-container');
    if (!container) return; // Exit if element not found (e.g. on other pages)

    let html = '';

    pastGloryData.forEach((item) => {
        // Determine text color based on category for visual variety
        let categoryColorClass = 'text-gold';
        if (item.category === 'Audience' || item.category === 'Team') {
            categoryColorClass = 'text-emerald-glow';
        }

        if (item.type === 'quote') {
            // Render Quote Block (Fixed Height)
            html += `
                <div class="reveal h-80 w-full group">
                    <div class="glass-panel h-full w-full p-8 rounded-xl border border-gold/30 flex flex-col items-center justify-center text-center hover:bg-emerald-dark/40 transition duration-500">
                        <i class="fa-solid fa-quote-left text-4xl text-emerald-dark mb-4 group-hover:text-gold transition duration-300"></i>
                        <p class="font-heading text-lg md:text-xl text-beige italic leading-relaxed">
                            "${item.text}"
                        </p>
                        <div class="w-12 h-1 bg-gold mx-auto mt-6 mb-2"></div>
                        <span class="text-xs text-emerald-glow uppercase tracking-widest">${item.author}</span>
                    </div>
                </div>
            `;
        } else {
            // Render Image Block (Fixed Height)
            // Note the updated src path logic in case of error
            html += `
                <div class="reveal h-80 w-full">
                    <div class="relative group h-full w-full overflow-hidden rounded-xl border border-white/10">
                        <img src="${item.src}" 
                             alt="${item.title}"
                             onerror="this.src='https://placehold.co/600x400/012E34/D4AF37?text=Image+Not+Found'"
                             class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                            <span class="${categoryColorClass} text-xs font-bold uppercase tracking-wider mb-1">${item.category}</span>
                            <h3 class="text-white font-heading text-xl font-bold">${item.title}</h3>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;

    // Re-trigger observer for new elements so animations play
    setTimeout(() => {
        if (typeof observer !== 'undefined') {
            document.querySelectorAll('#past-glory-container .reveal').forEach((el) => observer.observe(el));
        }
    }, 100);
}

// Run the render function when script loads
renderPastGlory();

// ==========================================
//  3. FEATURED EVENTS (Locked vs Unlocked)
// ==========================================

// 🔴 CONFIGURATION: DATE TO UNLOCK
// Format: YYYY-MM-DDTHH:MM:SS
const EVENTS_REVEAL_DATE = new Date("2026-01-19T16:00:00");

// DATA: LOCKED STATE (Mystery Cards)
const lockedData = [
    {
        title: "Flagship Event",
        category: "Business Track",
        desc: "Details regarding the flagship business competition will be unveiled soon.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
        icon: "fa-lock"
    },
    {
        title: "Finance Event",
        category: "Finance Track",
        desc: "Details regarding the finance simulation will be unveiled soon.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        icon: "fa-lock"
    },
    {
        title: "Tech Event",
        category: "Innovation Track",
        desc: "Details regarding the hackathon challenge will be unveiled soon.",
        img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        icon: "fa-lock"
    }
];

// home.js mein unlockedData ko aise update karein
const unlockedData = [
    {
        id: 1, // ID wahi rakhein jo events.js mein hai
        title: "Crisis Cabinet",
        subtitle: "Leadership Under Pressure",
        category: "BUSINESS",
        colorClass: "border-purple-500 text-purple-400",
        desc: "Represent a business in a global industry...",
        img: "assets/images/events/event1.jpg",
        link: "registration.html?event=1" // Yahan ID attach karein
    },
    {
        id: 2,
        title: "Flip the Argument",
        subtitle: "Mind Switch",
        category: "BUSINESS",
        colorClass: "border-green-500 text-green-400",
        desc: "A two-round challenge featuring a business quiz...",
        img: "assets/images/events/event2.jpg",
        link: "registration.html?event=2"
    },
    {
        id: 3,
        title: "Flop Tank",
        subtitle: "The Flop Factory",
        category: "BUSINESS",
        colorClass: "border-red-500 text-red-500",
        desc: "A parody pitch event where you must creatively...",
        img: "assets/images/events/event3.jpg",
        link: "registration.html?event=3"
    }
];

function renderFeaturedEvents() {
    const container = document.getElementById('home-events-grid');
    const badgeContainer = document.getElementById('events-status-badge');
    const subtitle = document.getElementById('events-subtitle');

    if (!container) return;

    const now = new Date();
    // Check if Developer Bypass is on (optional, helpful for testing)
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';

    const isUnlocked = now >= EVENTS_REVEAL_DATE || isDev;

    let html = '';

    if (!isUnlocked) {
        // --- RENDER LOCKED STATE ---
        subtitle.innerHTML = "Competitions · Workshops · Speaker Sessions";

        badgeContainer.className = "mt-4 md:mt-0 px-4 py-2 border border-gold/30 bg-gold/5 rounded backdrop-blur-sm";
        badgeContainer.innerHTML = `<p class="text-gold font-bold text-xs tracking-widest uppercase"><i class="fa-regular fa-calendar mr-2"></i> Reveal: Dec 13</p>`;

        lockedData.forEach(item => {
            html += `
            <div class="group relative overflow-hidden rounded-2xl reveal border border-white/5 hover:border-gold/30 transition duration-500 bg-pitch">
                <div class="relative h-96 overflow-hidden">
                    <div class="absolute inset-0 bg-pitch/80 z-10"></div>
                    <img src="${item.img}" class="w-full h-full object-cover blur-sm opacity-50">
                    <div class="absolute inset-0 z-20 flex flex-col items-center justify-center">
                        <div class="w-16 h-16 rounded-full border border-gold/50 flex items-center justify-center mb-4 bg-pitch/90 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <i class="fa-solid ${item.icon} text-gold text-2xl"></i>
                        </div>
                        <span class="font-heading text-xl font-bold text-white tracking-widest uppercase">${item.title}</span>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black via-black/90 to-transparent">
                    <span class="bg-emerald-dark/50 text-emerald-glow border border-emerald-glow/20 text-[10px] font-bold px-3 py-1 rounded mb-3 inline-block tracking-widest uppercase">
                        ${item.category}
                    </span>
                    <p class="text-sm text-beige/50 font-body mb-4">${item.desc}</p>
                </div>
            </div>`;
        });

    } else {
        // --- RENDER UNLOCKED STATE ---
        subtitle.innerHTML = "Top Tier Competitions & Challenges";

        badgeContainer.className = "mt-4 md:mt-0 px-4 py-2 border border-emerald-glow/30 bg-emerald-dark/30 rounded backdrop-blur-sm";
        badgeContainer.innerHTML = `<p class="text-emerald-glow font-bold text-xs tracking-widest uppercase animate-pulse"><i class="fa-solid fa-circle mr-2 text-[8px]"></i> Registrations Live</p>`;

        unlockedData.forEach(item => {
            html += `
            <div class="group relative overflow-hidden rounded-2xl reveal border border-white/5 hover:border-gold/30 transition duration-500 bg-pitch">
                <div class="relative h-96 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-t from-pitch via-transparent to-transparent z-10"></div>
                    <img src="${item.img}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                    <div class="absolute top-4 right-4 z-20">
                        <span class="bg-black/80 border ${item.colorClass} text-[10px] font-gaming px-3 py-1 rounded backdrop-blur-md">
                            ${item.category}
                        </span>
                    </div>
                </div>
                
                <div class="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <h3 class="font-gaming text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">${item.title}</h3>
                    <p class="text-xs text-gold uppercase tracking-wider mb-3">${item.subtitle}</p>
                    <p class="text-sm text-beige/70 font-body mb-6 line-clamp-2">${item.desc}</p>
                    <a href="${item.link}" class="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-emerald-glow transition-colors">
                        REGISTER NOW <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>`;
        });
    }

    container.innerHTML = html;

    // Re-trigger reveal animations
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        container.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
}

// Initialize
document.addEventListener('DOMContentLoaded', renderFeaturedEvents);

// ==========================================
//  4. EVENT TIMELINE (Locked vs Unlocked)
// ==========================================

function renderEventTimeline() {
    const container = document.getElementById('timeline-dynamic-container');
    if (!container) return;

    const now = new Date();
    // Re-use the same date configuration and bypass check
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';
    const isUnlocked = now >= EVENTS_REVEAL_DATE || isDev;

    let html = '';

    if (!isUnlocked) {
        // --- LOCKED STATE ---
        const lockedDays = ['Day 01', 'Day 02'];

        lockedDays.forEach(day => {
            html += `
            <div class="relative pl-8 md:pl-12 reveal opacity-70">
                <div class="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-pitch border-4 border-gold/50"></div>
                
                <div class="glass-panel p-6 rounded-xl border border-white/5 bg-pitch/50 cursor-not-allowed group hover:border-gold/30 transition duration-300">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-white/40 font-bold text-xs tracking-widest uppercase">
                            <i class="fa-solid fa-lock text-gold mr-1 text-[10px]"></i> ${day}
                        </span>
                        <span class="text-beige/20 text-xs font-mono">Jan 2026</span>
                    </div>
                    <h3 class="text-xl font-heading font-bold text-white/50 mt-1 group-hover:text-gold/70 transition-colors">
                        Agenda Locked
                    </h3>
                    <p class="text-beige/30 mt-2 text-sm">
                        Classified information. Clearance required for access.
                    </p>
                </div>
            </div>`;
        });

    } else {
        // --- UNLOCKED STATE ---
        const unlockedDays = [
            {
                day: "Day 01",
                date: "Jan 16",
                title: "The Launch",
                desc: "Opening Ceremony, Wolf of Dalal St, Startup Heist & EA FC Showdown.",
                color: "emerald-glow" // Accent color
            },
            {
                day: "Day 02",
                date: "Jan 17",
                title: "The Finale",
                desc: "Valorant LAN, Ad-Pocalypse, Loot Drop, Skin Showcase & DJ Night.",
                color: "neon" // Accent color
            }
        ];

        unlockedDays.forEach(item => {
            html += `
            <div class="relative pl-8 md:pl-12 reveal">
                <div class="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-pitch border-4 border-${item.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                
                <div class="glass-panel p-6 rounded-xl border border-white/10 hover:border-${item.color} transition transform hover:-translate-y-1 duration-300">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-${item.color} font-bold text-xs tracking-widest uppercase bg-pitch/80 border border-${item.color}/30 px-2 py-1 rounded">
                            ${item.day}
                        </span>
                        <span class="text-beige/60 text-xs font-mono">${item.date}</span>
                    </div>
                    <h3 class="text-xl font-heading font-bold text-white mt-1 group-hover:text-${item.color} transition-colors">
                        ${item.title}
                    </h3>
                    <p class="text-beige/80 mt-2 text-sm leading-relaxed">
                        ${item.desc}
                    </p>
                </div>
            </div>`;
        });
    }

    container.innerHTML = html;

    // Re-trigger reveal animations for new elements
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });

        container.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
}

// Update the listener to run both functions
document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderFeaturedEvents === 'function') renderFeaturedEvents();
    renderEventTimeline();
});