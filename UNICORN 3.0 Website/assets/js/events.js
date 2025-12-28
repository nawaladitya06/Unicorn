// ==========================================
//  1. FULL EVENT DATA (14 EVENTS)
// ==========================================
const events = [
    {
        id: 1,
        title: "Crisis Cabinet",
        tagline: "Leadership Under Pressure",
        desc: "Represent a business in a global industry and navigate intense environmental and economic crises with strategic thinking.",
        fullInfo: "Every participant represents a business from the same industry but located in different nations. Simulates real-world pressure faced by business leaders during moments of crisis.",
        rules: [
            "Consists of 3 Rounds involving environmental, economic, and financial crises.",
            "Each group must designate a CEO and a COO.",
            "Questions directed at one role cannot be answered by the other (incurs negatives).",
            "Use of electronic devices, AI, and cross-talking is strictly prohibited.",
            "Participants must carry a laptop for Round 2."
        ],
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
        fullInfo: "Measures both what you know and how you think. Qualifiers must instantly switch perspectives and defend opposing viewpoints on the same motion.",
        rules: [
            "Round 1: Knowledge Check (20-25 min quiz) on business, brands, and current affairs.",
            "Round 2: The Inner Debate (Self-Defense). Speak FOR a motion (30-45s) then AGAINST (30-45s).",
            "Mobile phones are strictly prohibited.",
            "Abusive language or vulgarity leads to disqualification."
        ],
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
        fullInfo: "The challenge is to convince judges why a terrible idea deserves funding using confidence, creativity, and humor. Defend absurd business models and flaws.",
        rules: [
            "Teams of 2-3 participants. Consists of 3 rounds.",
            "Round 1: Presentation of ridiculous features and overpriced valuations.",
            "Round 2: Shark Attack (Q&A). Round 3: Deal or Disaster.",
            "Products must be fictional (no real brands).",
            "Offensive or political content is strictly prohibited."
        ],
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
        fullInfo: "A celebration of confidence and vocal energy. Performers must electrify the audience and turn every note into a statement.",
        rules: [
            "Performance Duration: 3–5 minutes. Setup: 1–2 minutes.",
            "Music (MP3/MP4) must be submitted 24 hours in advance.",
            "Content must be appropriate for a college audience.",
            "Backing tracks allowed but must not misrepresent vocal skill."
        ],
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
        fullInfo: "Teams compete head-to-head to claim supremacy. This event emphasizes innovation and jaw-dropping moves in a cohesive crew performance.",
        rules: [
            "Performance time: 5-7 minutes. Setup time: 3 minutes.",
            "Use of Mashups, remixes, and medleys is allowed.",
            "Song lyrics must be decent; item songs are not allowed.",
            "Use of fire, smoke, or hazardous effects is prohibited."
        ],
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
        fullInfo: "More than a competition; it's a celebration of talent and charisma to find the ultimate representative of the college.",
        rules: [
            "Round 1: Introduction (30-60s) and thematic ramp walk.",
            "Round 2: Spin the wheel for a 1-minute monologue/speech based on a scenario.",
            "Round 3: Talent showcase (max 3 mins) and final Q&A.",
            "Evaluated on creativity, stage confidence, and eloquence."
        ],
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
        fullInfo: "Every clue is a trick and every answer is a step closer to the secret. Solve smart and move fast through a sequence of clues.",
        rules: [
            "All teams receive the first clue simultaneously.",
            "Clues must not be damaged, removed, or shared.",
            "Use of mobile phones is strictly prohibited.",
            "First 8 teams to register (First Come First Serve)."
        ],
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
        fullInfo: "An innovative property trading game where currency and real estate are just the beginning. Navigate inflation and market shifts.",
        rules: [
            "Conducted in two rounds with 6 contingents each.",
            "Winners declared based on overall performance across both rounds.",
            "No electronic devices or cross-talk between contingents.",
            "Disrespectful behavior leads to immediate disqualification."
        ],
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
        fullInfo: "Showcase strategic communication and branding in the era of binge-watching. Create campaigns for original digital content.",
        rules: [
            "Props must be safe and banners must be lightweight.",
            "No unapproved loudspeakers; handheld drums/whistles allowed.",
            "Late arrival or delays result in point deductions.",
            "Vulgarity or abusive language leads to disqualification."
        ],
        category: "Rally",
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
        fullInfo: "Transform the human face into a work of art based on a given theme. Creativity and precision are key.",
        rules: [
            "Participants must bring their own skin-friendly colors and brushes.",
            "Time limit: 60 minutes.",
            "Theme will be announced on the spot.",
            "No use of stencils or reference images allowed."
        ],
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "2 Players",
        color: "text-orange-400",
        border: "border-orange-500",
        img: "assets/images/events/event10.jpg"
    },
    {
        id: 11,
        title: "Wall Décor",
        tagline: "Design Your Space",
        desc: "Create beautiful, thematic wall decorations using fine art techniques.",
        fullInfo: "Showcase your interior design skills by creating decorative wall pieces using sustainable or craft materials.",
        rules: [
            "Materials provided must be used effectively.",
            "Judgment based on aesthetics, neatness, and theme adherence.",
            "Time limit: 90 minutes.",
            "Pre-made items are not allowed."
        ],
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "2-3 Players",
        color: "text-amber-400",
        border: "border-amber-500",
        img: "assets/images/events/event11.jpg"
    },
    {
        id: 12,
        title: "Crochet Making",
        tagline: "Thread and Needle",
        desc: "Showcase your craftsmanship in the delicate art of crochet.",
        fullInfo: "A test of patience and skill. Create intricate patterns and functional art using just a hook and yarn.",
        rules: [
            "Participants must carry their own hooks and yarn.",
            "A specific pattern or object will be assigned.",
            "Time limit: 120 minutes.",
            "Selection based on stitch consistency and complexity."
        ],
        category: "Fine Arts",
        day: "TBD",
        fee: "Free",
        team: "Solo",
        color: "text-teal-400",
        border: "border-teal-500",
        img: "assets/images/events/event12.jpg"
    },
    {
        id: 13,
        title: "Auction",
        tagline: "Highest Bidder",
        desc: "A literacy arts competition centered around the mechanics of a live auction.",
        fullInfo: "Master the art of persuasion and strategy. Bid for rare items or literary works while managing a virtual budget.",
        rules: [
            "Teams will be given a set starting budget.",
            "Bidding logic and strategic reasoning will be judged.",
            "Participants must not exceed their budget limits.",
            "Collusion between teams leads to disqualification."
        ],
        category: "Literacy Arts",
        day: "TBD",
        fee: "Free",
        team: "2 Players",
        color: "text-rose-400",
        border: "border-rose-500",
        img: "assets/images/events/event13.jpg"
    },
    {
        id: 14,
        title: "Story Writing",
        tagline: "The Written Word",
        desc: "Unleash your imagination and master the craft of storytelling.",
        fullInfo: "Craft a compelling narrative based on specific prompts or genres provided at the start of the event.",
        rules: [
            "Word limit: 800 - 1000 words.",
            "Theme/Prompt will be given at the venue.",
            "Use of internet or AI for drafting is strictly prohibited.",
            "Judgment based on plot, vocabulary, and emotional impact."
        ],
        category: "Literacy Arts",
        day: "TBD",
        fee: "Free",
        team: "Solo",
        color: "text-cyan-400",
        border: "border-cyan-500",
        img: "assets/images/events/event14.jpg"
    }
];

// ==========================================
//  2. UPDATED RENDER LOGIC (Optimized Expansion)
// ==========================================
const grid = document.getElementById('events-grid');

function renderEvents(filterType) {
    if (!grid) return;
    grid.innerHTML = '';

    const filteredEvents = filterType === 'all'
        ? events
        : events.filter(e => e.day.includes(filterType));

    filteredEvents.forEach((event, index) => {
        const delay = index * 50;
        const card = document.createElement('div');
        card.className = `hud-card group opacity-0 animate-pop-in flex flex-col`;
        card.style.animationDelay = `${delay}ms`;

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative border-b border-white/10">
                <img src="${event.img}" alt="${event.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div class="absolute top-0 right-0 bg-black/80 border-l border-b border-white/20 px-3 py-1">
                     <span class="${event.color} font-gaming text-xs font-bold uppercase">${event.category}</span>
                </div>
            </div>
            
            <div class="p-6 relative flex-grow flex flex-col">
                <div class="absolute -top-3 left-4 bg-black border border-gold px-3 py-1 transform -skew-x-12 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                    <span class="text-gold font-gaming text-xs font-bold skew-x-12 block">${event.tagline}</span>
                </div>

                <h3 class="text-2xl font-gaming font-bold text-white mb-4 mt-2 group-hover:text-emerald-glow transition-colors">
                    ${event.title}
                </h3>
                
                <details class="mb-6 group/details text-left">
                    <summary class="text-[10px] font-gaming text-emerald-glow cursor-pointer hover:text-white list-none uppercase tracking-widest flex items-center gap-2">
                        <span>MISSION DETAILS_</span>
                        <i class="fa-solid fa-chevron-down group-open/details:rotate-180 transition-transform text-[8px]"></i>
                    </summary>
                    
                    <div class="mt-4 space-y-4">
                        <div class="text-[11px] text-gray-300 font-mono bg-white/5 p-3 rounded border border-white/5 leading-relaxed">
                            ${event.fullInfo}
                        </div>

                        <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                            <div>
                                <span class="block text-[9px] text-gray-500 font-gaming uppercase mb-1">ENTRY FEE</span>
                                <span class="text-gold font-bold font-gaming text-xs">${event.fee}</span>
                            </div>
                            <div>
                                <span class="block text-[9px] text-gray-500 font-gaming uppercase mb-1">TEAM SIZE</span>
                                <span class="text-white font-bold font-gaming text-xs">${event.team}</span>
                            </div>
                        </div>
                    </div>
                </details>

                <div class="mt-auto space-y-2">
                    <button onclick="window.location.href='registration.html?event=${event.id}'" 
                        class="w-full py-2 bg-emerald-glow/20 text-emerald-glow border border-emerald-glow/40 hover:bg-emerald-glow hover:text-pitch transition-all duration-300">
                        <span class="font-gaming font-bold text-xs tracking-widest uppercase">Register Now</span>
                    </button>
                    
                    <button onclick="openRules(${event.id})" 
                        class="w-full py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300">
                        <span class="font-gaming font-bold text-xs tracking-widest uppercase">Rules & Regs</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
//  3. ANIMATED RULES MODAL WITH TRANSITIONS
// ==========================================
function openRules(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const modal = document.createElement('div');
    // Initial state: invisible (opacity-0) and scaled down (scale-90)
    modal.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 opacity-0 pointer-events-none";
    modal.id = "rules-modal";
    
    modal.innerHTML = `
        <div id="modal-content" class="bg-[#0a0a0a] border-2 border-gold/30 w-full max-w-2xl p-8 rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.1)] relative max-h-[90vh] overflow-y-auto transform scale-90 transition-transform duration-300 ease-out">
            <button onclick="closeRules()" class="absolute top-4 right-4 text-gold hover:text-white transition-colors">
                <i class="fa-solid fa-circle-xmark text-3xl"></i>
            </button>
            <h2 class="font-gaming text-4xl text-gold mb-1 uppercase tracking-tighter">${event.title}</h2>
            <p class="text-emerald-glow font-mono text-xs mb-8 tracking-[0.2em] uppercase">Rules & Regulations</p>
            <div class="space-y-4">
                ${event.rules.map(rule => `
                    <div class="flex gap-4 items-start border-l-2 border-white/10 pl-4 py-1 hover:border-gold transition-colors">
                        <span class="text-gold font-bold font-mono">></span>
                        <p class="text-gray-300 font-mono text-sm leading-relaxed">${rule}</p>
                    </div>
                `).join('')}
            </div>
            <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p class="text-[10px] text-gray-500 font-gaming uppercase">Unicorn 3.0 // Mission Briefing</p>
                <button onclick="window.location.href='registration.html?event=${event.id}'" 
                    class="px-10 py-3 bg-emerald-glow text-pitch font-gaming text-xs font-bold hover:bg-white transition-all duration-300 uppercase tracking-widest">
                    Confirm Participation_
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // This forces the browser to recognize the "opacity-0" state before we change it
    void modal.offsetWidth;

    // Trigger animations
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    
    const content = document.getElementById('modal-content');
    if (content) {
        content.classList.remove('scale-90');
        content.classList.add('scale-100');
    }
}

window.closeRules = function() {
    const modal = document.getElementById('rules-modal');
    const content = document.getElementById('modal-content');
    
    if (modal && content) {
        modal.classList.replace('opacity-100', 'opacity-0');
        content.classList.replace('scale-100', 'scale-95');
        setTimeout(() => { modal.remove(); }, 300);
    }
};

// ==========================================
//  4. LOCK & INTRO ANIMATION SYSTEM
// ==========================================
const LOCK_SCREEN = document.getElementById('lock-screen');
const MAIN = document.getElementById('main-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');

// SET DATE: Site unlocks automatically if current date is past this
const UNLOCK_DATE = new Date("2025-12-11T00:00:00"); 

function checkLock() {
    const now = new Date();
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';

    if (now >= UNLOCK_DATE || isDev) {
        unlockSite();
    }
}

function unlockSite() {
    if (LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';

    if (INTRO_SCREEN) {
        INTRO_SCREEN.style.display = 'flex';
        playIntroSequence();
    } else if (MAIN) {
        MAIN.style.opacity = '1';
        renderEvents('all'); // Initialize cards immediately if no intro
    }
    localStorage.setItem('unicorn_bypass', 'true');
}

function playIntroSequence() {
    const lockIcon = document.getElementById('intro-lock-icon');
    const modeText = document.getElementById('intro-mode-text');
    const loadingBar = document.getElementById('intro-bar');

    setTimeout(() => { if (loadingBar) loadingBar.style.width = "100%"; }, 100);
    setTimeout(() => { if (lockIcon) lockIcon.classList.add('shake-lock'); }, 500);
    setTimeout(() => {
        if (lockIcon) {
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open', 'text-emerald-glow');
        }
    }, 1200);
    setTimeout(() => { if (modeText) modeText.classList.add('mode-text-reveal'); }, 1400);
    setTimeout(() => {
        if (INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if (MAIN) {
            MAIN.style.opacity = '1';
            renderEvents('all'); // Render events ONLY after intro finishes
        }
    }, 2800);
    setTimeout(() => { if (INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// Initial Hookup
window.onload = checkLock;
window.openRules = openRules;