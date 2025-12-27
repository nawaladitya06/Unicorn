// ==========================================
//  1. EVENT DATA (12 EVENTS)
// ==========================================
const events = [
    {
        id: 1,
        title: "Crisis Cabinet",
        tagline: "Leadership Under Pressure",
        desc: "Represent a business in a global industry and navigate intense environmental and economic crises with strategic thinking.",
        category: "Business",
        day: "TBD",
        fee: "Free",
        team: "2 Players (CEO & COO)",
        color: "text-purple-400",
        border: "border-purple-500",
        img: "assets/images/events/event1.jpg"
    },
    {
        id: 2,
        title: "Flip the Argument",
        tagline: "Mind Switch",
        desc: "A two-round challenge featuring a business quiz followed by a round where you must instantly defend opposing viewpoints.",
        category: "Business",
        day: "TBD",
        fee: "Free",
        team: "Solo",
        color: "text-green-400",
        border: "border-green-500",
        img: "assets/images/events/event2.jpg"
    },
    {
        id: 3,
        title: "Flop Tank",
        tagline: "The Flop Factory",
        desc: "A parody pitch event where you must creatively justify the most impractical and useless product ideas.",
        category: "Business",
        day: "TBD",
        fee: "Free",
        team: "2-3 Players",
        color: "text-red-500",
        border: "border-red-500",
        img: "assets/images/events/event3.jpg"
    },
    {
        id: 4,
        title: "Solo Surge",
        tagline: "Echoes of One",
        desc: "A power-packed solo singing battle where vocalists own the stage across all genres.",
        category: "Performing Arts",
        day: "TBD",
        fee: "Free",
        team: "Solo/Group",
        color: "text-blue-400",
        border: "border-blue-500",
        img: "assets/images/events/event4.jpg"
    },
    {
        id: 5,
        title: "The Grand Choreo",
        tagline: "Battle of Steps",
        desc: "A high-intensity dance showdown focusing on power, precision, and perfect synchronization.",
        category: "Performing Arts",
        day: "TBD",
        fee: "Free",
        team: "4-6 Players",
        color: "text-yellow-400",
        border: "border-yellow-500",
        img: "assets/images/events/event5.jpg"
    },
    {
        id: 6,
        title: "Unicorn Icon",
        tagline: "Icon of the Year",
        desc: "The ultimate pageant featuring a ramp walk, monologue round, and talent showcase.",
        category: "Icon",
        day: "TBD",
        fee: "Free",
        team: "Solo",
        color: "text-emerald-400",
        border: "border-emerald-500",
        img: "assets/images/events/event6.jpg"
    },
    {
        id: 7,
        title: "The Grand Hunt",
        tagline: "Campus Chase",
        desc: "A high-speed scavenger hunt turning the campus into a giant puzzle.",
        category: "Management",
        day: "TBD",
        fee: "Free",
        team: "3 Players",
        color: "text-pink-400",
        border: "border-pink-500",
        img: "assets/images/events/event7.jpg"
    },
    {
        id: 8,
        title: "War in the Boardroom",
        tagline: "The Decision Arena",
        desc: "Step into a financial simulation to trade, negotiate, and speculate on Labour and property.",
        category: "Management",
        day: "TBD",
        fee: "Free",
        team: "2 Players",
        color: "text-white",
        border: "border-gray-500",
        img: "assets/images/events/event8.jpg"
    },
    {
        id: 9,
        title: "PR Rally",
        tagline: "OTT Campaign Challenge",
        desc: "Design creative PR campaigns to promote digital shows and streaming services.",
        category: "Business",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-indigo-400",
        border: "border-indigo-500",
        img: "assets/images/events/event9.jpg"
    },
    {
        id: 10,
        title: "Face Painting",
        tagline: "Canvas of the Soul",
        desc: "Express your artistic vision through live face painting.",
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-orange-400",
        border: "border-orange-500",
        img: "assets/images/events/event10.jpg"
    },
    {
        id: 11,
        title: "Wall Décor",
        tagline: "Design Your Space",
        desc: "Create beautiful, thematic wall decorations using fine art techniques.",
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-amber-400",
        border: "border-amber-500",
        img: "assets/images/events/event11.jpg"
    },
    {
        id: 12,
        title: "Crochet Making",
        tagline: "Thread and Needle",
        desc: "Showcase your craftsmanship in the delicate art of crochet.",
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-teal-400",
        border: "border-teal-500",
        img: "assets/images/events/event12.jpg"
    },
    {
        id: 13,
        title: "Auction",
        tagline: "Highest Bidder",
        desc: "A literacy arts competition centered around the mechanics of a live auction.",
        category: "Literacy Arts",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-rose-400",
        border: "border-rose-500",
        img: "assets/images/events/event13.jpg"
    },
    {
        id: 14,
        title: "Story Writing",
        tagline: "The Written Word",
        desc: "Unleash your imagination and master the craft of storytelling.",
        category: "Literacy Arts",
        day: "TBD",
        fee: "Free",
        team: "TBD",
        color: "text-cyan-400",
        border: "border-cyan-500",
        img: "assets/images/events/event14.jpg"
    }
];
// ==========================================
//  2. RENDER LOGIC
// ==========================================
const grid = document.getElementById('events-grid');

function renderEvents(filterType) {
    if (!grid) return;

    grid.innerHTML = '';

    const filteredEvents = filterType === 'all'
        ? events
        : events.filter(e => e.day.includes(filterType));

    // Update Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText.includes(filterType.toUpperCase()) || (filterType === 'all' && btn.innerText.includes('ALL'))) {
            btn.classList.add('active-filter');
        } else {
            btn.classList.remove('active-filter');
        }
    });

    // Create Cards
    filteredEvents.forEach((event, index) => {
        const delay = index * 50;
        const card = document.createElement('div');
        card.className = `hud-card group opacity-0 animate-pop-in`;
        card.style.animationDelay = `${delay}ms`;

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative border-b border-white/10">
                <img src="${event.img}" alt="${event.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div class="absolute top-0 right-0 bg-black/80 border-l border-b border-white/20 px-3 py-1">
                     <span class="${event.color} font-gaming text-xs font-bold">${event.category}</span>
                </div>
                <div class="absolute bottom-2 left-4">
                     <span class="text-white/60 font-mono text-[10px] tracking-widest uppercase">
                        <i class="fa-solid fa-calendar-days mr-1"></i> ${event.day}
                     </span><br>
                </div>
            </div>
            
            <div class="p-6 relative">
                <div class="absolute -top-3 left-4 bg-black border border-gold px-3 py-1 transform -skew-x-12 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                    <span class="text-gold font-gaming text-xs font-bold skew-x-12 block">${event.tagline}</span>
                </div>

                <h3 class="text-2xl font-gaming font-bold text-white mb-2 mt-2 group-hover:text-emerald-glow transition-colors">
                    ${event.title}
                </h3>
                <p class="text-sm text-beige/60 mb-6 font-mono leading-relaxed h-10 overflow-hidden">
                    ${event.desc}
                </p>
                
                <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mb-4">
                    <div>
                        <span class="block text-[10px] text-gray-500 font-gaming uppercase">ENTRY FEE</span>
                        <span class="text-gold font-bold font-gaming">${event.fee}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] text-gray-500 font-gaming uppercase">SQUAD</span>
                        <span class="text-white font-bold font-gaming text-sm">${event.team}</span>
                    </div>
                </div>

                <button class="w-full py-2 bg-white/5 hover:bg-emerald-glow hover:text-pitch border border-white/10 hover:border-emerald-glow transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <span class="font-gaming font-bold text-sm tracking-widest">REGISTER_</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initial Render
renderEvents('all');
window.filterEvents = renderEvents;


// ==========================================
//  3. LOCK & INTRO ANIMATION SYSTEM
// ==========================================
const LOCK_SCREEN = document.getElementById('lock-screen');
const MAIN = document.getElementById('main-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');

// 🔴 SET THIS DATE: The moment the site should naturally unlock
const UNLOCK_DATE = new Date("2025-12-13T21:30:00");

function checkLock() {
    const now = new Date();
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';

    // If time is up OR previously unlocked
    if (now >= UNLOCK_DATE || isDev) {
        unlockSite();
    }
}

function unlockSite() {
    // 1. Hide the Static "Classified" Screen immediately
    if (LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';

    // 2. Play Animation Sequence
    if (INTRO_SCREEN) {
        INTRO_SCREEN.style.display = 'flex'; // Make visible (it's hidden by CSS)
        playIntroSequence();
    } else {
        // Fallback if intro HTML is missing
        if (MAIN) MAIN.style.opacity = '1';
    }

    // 3. Mark as unlocked in storage
    localStorage.setItem('unicorn_bypass', 'true');
}

function playIntroSequence() {
    const lockIcon = document.getElementById('intro-lock-icon');
    const modeText = document.getElementById('intro-mode-text');
    const loadingBar = document.getElementById('intro-bar');

    // -- TIMELINE --

    // 100ms: Start Bar
    setTimeout(() => { if (loadingBar) loadingBar.style.width = "100%"; }, 100);

    // 500ms: Shake Lock
    setTimeout(() => { if (lockIcon) lockIcon.classList.add('shake-lock'); }, 500);

    // 1200ms: Unlock & Turn Green
    setTimeout(() => {
        if (lockIcon) {
            lockIcon.classList.remove('shake-lock', 'fa-lock', 'text-gold');
            lockIcon.classList.add('fa-lock-open', 'text-emerald-glow', 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]');
        }
    }, 1200);

    // 1400ms: Reveal Text
    setTimeout(() => { if (modeText) modeText.classList.add('mode-text-reveal'); }, 1400);

    // 2800ms: Fade Out Overlay
    setTimeout(() => {
        if (INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if (MAIN) MAIN.style.opacity = '1'; // Reveal content behind
    }, 2800);

    // 3600ms: Cleanup (Remove Overlay from DOM flow)
    setTimeout(() => { if (INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// Run check on load
window.onload = checkLock;