// ==========================================
//  1. EVENT DATA (12 EVENTS)
// ==========================================
const events = [
    {
        id: 1,
        title: "Startup Heist",
        tagline: "Grand Theft Pitch",
        desc: "Plan the ultimate business heist. Pitch your startup idea to the investors.",
        category: "Business",
        day: "Day 1",
        fee: "₹500",
        team: "2-4",
        color: "text-purple-400",
        border: "border-purple-500",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Code Matrix",
        tagline: "Hack The Mainframe",
        desc: "Competitive coding marathon. Break the firewall before time runs out.",
        category: "Tech",
        day: "Day 1",
        fee: "₹200",
        team: "Solo",
        color: "text-green-400",
        border: "border-green-500",
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Valorant LAN",
        tagline: "Spike Rush",
        desc: "5v5 Tactical Shooter tournament. Defuse the spike or die trying.",
        category: "Gaming",
        day: "Day 2",
        fee: "₹1000",
        team: "5 Players",
        color: "text-red-500",
        border: "border-red-500",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Discord Wars",
        tagline: "Debate Royale",
        desc: "A high-stakes debate competition. Convince the mods or get banned.",
        category: "Literary",
        day: "Day 1",
        fee: "₹300",
        team: "2 Players",
        color: "text-blue-400",
        border: "border-blue-500",
        img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Loot Drop",
        tagline: "Treasure Hunt",
        desc: "Real-world scavenger hunt. Follow the clues to find the hidden loot crate.",
        category: "Fun",
        day: "Day 2",
        fee: "₹400",
        team: "4 Players",
        color: "text-yellow-400",
        border: "border-yellow-500",
        img: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Wolf of Dalal St",
        tagline: "Market Crash",
        desc: "Virtual stock market simulation. Buy low, sell high, don't go broke.",
        category: "Finance",
        day: "Day 1",
        fee: "₹250",
        team: "Solo/Duo",
        color: "text-emerald-400",
        border: "border-emerald-500",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Ad-Pocalypse",
        tagline: "Mad Men",
        desc: "Create a viral ad campaign for a bizarre product. Sell ice to eskimos.",
        category: "Marketing",
        day: "Day 2",
        fee: "₹300",
        team: "3 Players",
        color: "text-pink-400",
        border: "border-pink-500",
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 8,
        title: "EA FC Showdown",
        tagline: "Kick Off",
        desc: "1v1 FIFA Tournament. Bring your own controller or use ours.",
        category: "Gaming",
        day: "Day 1",
        fee: "₹300",
        team: "Solo",
        color: "text-white",
        border: "border-gray-500",
        img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 9,
        title: "Trivia Quest",
        tagline: "Knowledge Check",
        desc: "Pop culture, gaming, and tech quiz. No googling allowed.",
        category: "Quiz",
        day: "Day 2",
        fee: "₹200",
        team: "2 Players",
        color: "text-indigo-400",
        border: "border-indigo-500",
        img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 10,
        title: "Just Dance",
        tagline: "Rhythm Battle",
        desc: "Dance off battle. Keep up with the beat or get eliminated.",
        category: "Cultural",
        day: "Day 2",
        fee: "₹300",
        team: "Solo/Group",
        color: "text-fuchsia-400",
        border: "border-fuchsia-500",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 11,
        title: "Screenshot Mode",
        tagline: "Photography",
        desc: "Capture the best moments of the fest. Best edit wins.",
        category: "Art",
        day: "Day 1 & 2",
        fee: "₹150",
        team: "Solo",
        color: "text-cyan-400",
        border: "border-cyan-500",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 12,
        title: "Skin Showcase",
        tagline: "Fashion Show",
        desc: "Cosplay and fashion walk. Theme: Cyberpunk / Retro Future.",
        category: "Cultural",
        day: "Day 2",
        fee: "₹800",
        team: "8-12 Members",
        color: "text-rose-400",
        border: "border-rose-500",
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    }
];

// ==========================================
//  2. RENDER LOGIC
// ==========================================
const grid = document.getElementById('events-grid');

function renderEvents(filterType) {
    if(!grid) return;
    
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
    if(LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';
    
    // 2. Play Animation Sequence
    if(INTRO_SCREEN) {
        INTRO_SCREEN.style.display = 'flex'; // Make visible (it's hidden by CSS)
        playIntroSequence();
    } else {
        // Fallback if intro HTML is missing
        if(MAIN) MAIN.style.opacity = '1';
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
    setTimeout(() => { if(loadingBar) loadingBar.style.width = "100%"; }, 100);

    // 500ms: Shake Lock
    setTimeout(() => { if(lockIcon) lockIcon.classList.add('shake-lock'); }, 500);

    // 1200ms: Unlock & Turn Green
    setTimeout(() => {
        if(lockIcon) {
            lockIcon.classList.remove('shake-lock', 'fa-lock', 'text-gold');
            lockIcon.classList.add('fa-lock-open', 'text-emerald-glow', 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]');
        }
    }, 1200);

    // 1400ms: Reveal Text
    setTimeout(() => { if(modeText) modeText.classList.add('mode-text-reveal'); }, 1400);

    // 2800ms: Fade Out Overlay
    setTimeout(() => {
        if(INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if(MAIN) MAIN.style.opacity = '1'; // Reveal content behind
    }, 2800);
    
    // 3600ms: Cleanup (Remove Overlay from DOM flow)
    setTimeout(() => { if(INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// Run check on load
window.onload = checkLock;