// ==========================================
//  1. FULL EVENT DATA (14 EVENTS)
// ==========================================
const events = [
    // --- BUSINESS STRATEGY ---
    {
        id: 1,
        title: "Crisis Cabinet",
        startTime: "2026-02-18T11:00:00", // Example: "2026-02-18T10:30:00"
        tagline: "Leadership Under Pressure",
        fullInfo: "Welcome to the World Crisis Cabinet...",
        rules: [
            "The event consists of 3 Rounds.",
            "Participants will encounter crisis situations related to the environment, economy, and finance, and will be directly questioned by the moderator.",
            "Each group must designate a CEO and a COO, with questions directed at one role not being answerable by the other; failure to adhere to this will incur negatives.",
            "The use of electronic devices and Cross talking between different contingents is not permitted.",
            "Participants should carry their laptop compulsory for Round 2.",
            "Use of AI is strictly prohibited.",
            "Disrespect towards any member or physical aggression will lead to negatives or disqualification."
        ],
        category: "Business",
        fee: "Free",
        team: "2 Players",
        img: "assets/images/events/event1.jpg",
        color: "text-purple-400",
        day: 1
    },
    {
        id: 2,
        title: "Mind Switch",
        startTime: "2026-02-18T11:00:00",
        tagline: "Dynamic Adaptation",
        fullInfo: "Mind Switch is a dynamic two-round challenge...",
        rules: [
            "The event consists of 2 Rounds.",
            "Round 1: The Knowledge Check (Quiz Round) covering business, economics, brands, marketing, startups, and current affairs (20-25 mins).",
            "Round 2: The Inner Debate (Self-Defense Round). Speak FOR a motion (30–45s) then immediately switch and speak AGAINST the same motion (30–45s).",
            "Mobile phones are strictly prohibited.",
            "Vulgarity, obscenity, and profanity will not be tolerated; abusive language leads to negative marking or disqualification."
        ],
        category: "Business",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event2.jpg",
        color: "text-green-400",
        day: 1
    },
    {
        id: 3,
        title: "Flop Tank",
        startTime: "2026-02-18T11:00:00",
        tagline: "The Flop Factory",
        fullInfo: "A parody of Shark Tank where participants...",
        rules: [
            "Each team must consist of 2 to 3 participants.",
            "The event consists of 3 rounds: Round 1 (Pitching flaws/valuation), Round 2 (Shark Attack Q&A), and Round 3 (Deal or Disaster).",
            "The product must be intentionally bad, impractical, or unnecessary and must be fictional (no real brands).",
            "Offensive, political, religious, or explicit content is strictly prohibited.",
            "Use of PPT, charts, props, or prototypes is optional.",
            "Unprofessional behavior towards committee members will result in disqualification."
        ],
        category: "Business",
        fee: "Free",
        team: "2-3 Players",
        img: "assets/images/events/event3.jpg",
        color: "text-red-500",
        day: 1
    },
    // --- FINE ARTS ---
    {
        id: 5,
        title: "FacePop",
        startTime: "2026-02-18T11:00:00",
        tagline: "Faces Become Art",
        fullInfo: "Participants transform faces into living canvases...",
        rules: [
            "Participants should come in a team of two (one painter, one model).",
            "The theme will be announced on the spot and designs must strictly align with it.",
            "Participants must bring their own face paints, brushes, sponges, mirrors, and wipes.",
            "Only skin-safe, non-toxic, and washable colors are allowed; spray paints and permanent colors are prohibited.",
            "Models should not have any pre-drawn sketches or base makeup before the event begins.",
            "Tracing, stencils, or reference images on mobile phones are not permitted."
        ],
        category: "Fine Arts",
        fee: "Free",
        team: "2 Players",
        img: "assets/images/events/event5.jpg",
        color: "text-orange-400",
        day: 1
    },
    {
        id: 6,
        title: "Poster Making",
        startTime: "2026-02-18T11:00:00",
        tagline: "Art Meets Aesthetics",
        fullInfo: "Design and decorate your posters with immersive visual experiences...",
        rules: [
            "Each team will be given 2 hours to complete the poster in their allotted specific area.",
            "The theme will be announced on the spot (or pre-declared).",
            "Participants must bring their own materials (paints, paper, crayons, adhesives, etc.)",
            "Use of mobile phones for reference images is not permitted.",
            "Any damage to college property will result in disqualification.",
            "The size of paper will be A3 sized 11.7 x 16.5 inches"
        ],
        category: "Fine Arts",
        fee: "Free",
        team: "2 Players",
        img: "assets/images/events/event6.jpg",
        color: "text-amber-400",
        day: 1
    },
    {
        id: 7,
        title: "Crochet Chronicles",
        startTime: "2026-02-18T11:00:00",
        tagline: "Stories Through Stitches",
        fullInfo: "A creative crochet event that invites participants...",
        rules: [
            "The crochet piece must be created entirely during the event; pre-started pieces are prohibited.",
            "Participants must bring their own hooks, yarns, stitch markers, and scissors.",
            "Sharing of materials between participants is not permitted once the event begins.",
            "Use of mobile phones, printed patterns, or written notes is not allowed; designs must be executed from memory.",
            "Copying another participant’s design will lead to disqualification."
        ],
        category: "Fine Arts",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event7.jpg",
        color: "text-teal-400",
        day: 1
    },
    // --- LITERACY ARTS ---
    {
        id: 8,
        title: "60 Seconds of Fame",
        startTime: "2026-02-18T11:00:00",
        tagline: "JAM Competition",
        fullInfo: "A dynamic on-the-spot speaking competition...",
        rules: [
            "Participation is individual; topics will be given on the spot.",
            "Each participant will be given exactly 60 seconds to speak with 15-20 seconds to think beforehand.",
            "The speech must be delivered in English only.",
            "Use of notes, mobile phones, or external aids is strictly not allowed.",
            "Offensive, political, religious, or sensitive content is strictly prohibited.",
            "Vulgar language or inappropriate gestures result in immediate disqualification."
        ],
        category: "Literacy Arts",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event8.jpg",
        color: "text-rose-400",
        day: 1
    },
    {
        id: 9,
        title: "From Prompt to Plot",
        startTime: "2026-02-18T11:00:00",
        tagline: "Creative Story Writing",
        fullInfo: "Turn a simple prompt into an imaginative...",
        rules: [
            "Round 1 (Fright in Ink): 30 minutes to write a story (400–500 words) based on a prompt with a twist.",
            "Round 2 (From Page to Performance): Narrate the story (3–5 mins) with expressions, tone, and dramatic delivery.",
            "The story and narration must be in English only.",
            "No use of smartphones or any references; stories must be original.",
            "No personal, offensive, or vulgar content."
        ],
        category: "Literacy Arts",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event9.jpg",
        color: "text-cyan-400",
        day: 1
    },
    // --- PERFORMING ARTS (DAY 2) ---
    {
        id: 10,
        title: "Solo Surge",
        startTime: "2026-02-20T11:00:00",
        tagline: "Echoes of One",
        fullInfo: "A power-packed solo singing battle...",
        rules: [
            "Performance duration: 3–5 minutes per participant.",
            "Setup time: 1–2 minutes (for instruments or props).",
            "Music (MP3/MP4) must be submitted 24 hours in advance.",
            "Backing tracks are permitted but must not contain pre-recorded vocals that misrepresent skill.",
            "Content must be appropriate; offensive lyrics or gestures are not allowed."
        ],
        category: "Performing Arts",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event10.jpg",
        color: "text-blue-400",
        day: 3
    },
    {
        id: 11,
        title: "Battle of Steps",
        startTime: "2026-02-20T11:00:00",
        tagline: "High-Intensity Dance",
        fullInfo: "Teams compete head-to-head to claim supremacy...",
        rules: [
            "Performance time: 4–7 minutes; setup time: 3 minutes.",
            "Selection of songs is at participant discretion; mashups, remixes, and medleys are allowed.",
            "Participants must submit costumes, props, and audio (MP3) for vetting.",
            "Song lyrics must be decent; item songs are not allowed.",
            "Use of fire, smoke, or any hazardous effects is not allowed.",
            "Vulgarity, obscenity, and profanity lead to negative marking or disqualification."
        ],
        category: "Performing Arts",
        fee: "Free",
        team: "6-10 Players",
        img: "assets/images/events/event11.jpg",
        color: "text-yellow-400",
        day: 3
    },
    {
        id: 12,
        title: "Vogue Vista",
        startTime: "2026-02-20T11:00:00",
        tagline: "Fashion Show",
        fullInfo: "The runway becomes a canvas for participants...",
        rules: [
            "Team Size: Between 8-10 members (includes models and designers).",
            "Maximum time limit: 8-10 minutes; exceeding this leads to negative marking.",
            "Props must be approved by OC; list must be submitted 3 days prior.",
            "Costumes must be appropriate for the stage and uphold dignity.",
            "Avoid religiously offensive, disrespectful, or inappropriate elements.",
            "Audio tracks (MP3) must be submitted on a pen drive at registration.",
            "Vulgarity, obscenity, and profanity lead to disqualification."
        ],
        category: "Performing Arts",
        fee: "Free",
        team: "8-10 Players",
        img: "assets/images/events/event12.jpg",
        color: "text-indigo-500",
        day: 3
    },
    {
        id: 13,
        title: "Face of Unicorn",
        startTime: "2026-02-20T11:00:00",
        tagline: "Mr. & Miss Unicorn",
        fullInfo: "A celebration of talent, charisma, and personality...",
        rules: [
            "Round 1: Introduction (30-60s) and thematic ramp walk evaluating stage presence and style.",
            "Round 2: Talent Round. Each performance has 2 to 3 minutes to present their talent.",
            "Round 3: Final Question (Q&A) to test wit, personality, and spontaneous articulation.",
            "Music tracks must be submitted 3 days before the event in MP3 format.",
            "Vulgarity, obscenity, and profanity will lead to disqualification."
        ],
        category: "Icon",
        fee: "Free",
        team: "1 Male & 1 Female",
        img: "assets/images/events/event13.jpg",
        color: "text-emerald-400",
        day: 3
    },
    // --- MANAGEMENT ---
    {
        id: 14,
        title: "The Grand Hunt",
        startTime: "2026-02-18T11:00:00",
        tagline: "Seeek. Solve. Secure.",
        fullInfo: "A race against time where decoding clues becomes the key to success.",
        rules: [
            "Teams will be given clues leading to different locations around the city; first to find the final treasure wins.",
            "All teams receive the first clue simultaneously.",
            "Use of any electronic devices (phones, smartwatches, etc.) to search for clues is prohibited.",
            "Teams cannot use private transport.",
            "Any form of cheating, copying answers, or interference results in immediate disqualification.",
            "Participants will be accompanied by an OC member."
        ],
        category: "Management",
        fee: "Free",
        team: "3 Players",
        img: "assets/images/events/event14.jpg",
        color: "text-pink-400",
        day: 1
    },
    {
        id: 15,
        title: "Level Up Bids (IPL Auctions)",
        startTime: "2026-02-18T11:00:00",
        tagline: "Strategy Meets Cricketing Passion",
        fullInfo: "Enter the thrilling arena of Level Up Bids, where strategy meets cricketing passion. In this high-stakes IPL auction, participants must outwit rivals, manage limited resources, and assemble the perfect team. With every bid, the tension rises as you inch closer to victory.",
        rules: [
            "Each team must have 15 players by the end of the auction; otherwise, they will be eliminated.",
            "Team composition must include 11 playing players and 4 substitutes.",
            "A maximum of 6 foreign players and a minimum of 9 Indian players are allowed.",
            "Minimum mandatory roles include 3 batsmen, 2 all-rounders, 2 fast bowlers, 1 spinner, and 1 wicket-keeper. Remaining players are the participant’s choice.",
            "Bidding increments shall be ₹0.25 crore up to a ₹5 crore bid value, after which the minimum increment will be ₹1 crore.",
            "Use of electronic devices during the auction is strictly prohibited.",
            "Cross-talk or collusion between participants is not allowed.",
            "The event is conducted as a solo participation format.",
            "Management’s decision will be final and binding in all matters."
        ],
        category: "Management",
        fee: "Free",
        team: "Solo",
        img: "assets/images/events/event15.jpeg",
        color: "text-white",
        day: 1
    },
    {
        id: 16,
        title: "BGMI",
        startTime: "2026-02-19T11:00:00",
        tagline: "Battle Royale Showdown",
        fullInfo: "An intense Battlegrounds Mobile India (BGMI) e-sport competition organized. Squads compete across multiple maps with a structured points system based on position and kills. Fair play, strategy, and teamwork are key to winning.",
        rules: [
            "All squads must report at the venue at least 1 hour prior to their scheduled match.",
            "Use of hacks, mods, scripts, emulators, or unfair practices is strictly prohibited.",
            "Cross-teaming or sharing information with other squads is not allowed.",
            "Match timings once announced will not be changed or rescheduled.",
            "Players must arrange their own internet connection.",
            "College ID card is compulsory for all participants.",
            "Charging ports will not be provided at the venue.",
            "Consoles and external controllers are not allowed.",
            "Any rule violation will result in immediate disqualification of the entire squad.",
            "The decision of the organizers shall be final and binding.",
            "Slots are limited and will be allocated on a first-come, first-served basis, upon registration."
        ],
        category: "E-Sports",
        fee: "Free",
        team: "Squad",
        img: "assets/images/events/event16.jpeg",
        color: "text-white",
        day: 2
    },
    {
        id: 17,
        title: "Free Fire",
        startTime: "2026-02-19T11:00:00",
        tagline: "Survival of the Sharpest",
        fullInfo: "A high-energy Free Fire e-sport competition organized. Players battle it out following strict fair-play rules, showcasing skill, coordination, and quick decision-making.",
        rules: [
            "All squads must report on time as instructed by the organizing team.",
            "Any form of hacking, modding, or use of unfair advantages is strictly prohibited.",
            "Cross-teaming or intentional teaming with other squads is not permitted.",
            "Match schedules and progression once announced cannot be changed.",
            "Players must use their own internet connection and devices.",
            "College ID card is mandatory for participation.",
            "Consoles or external gaming accessories are not allowed.",
            "Failure to follow instructions or rules will lead to disqualification.",
            "Organizers reserve the right to modify match flow to ensure fair play.",
            "The organizers’ decision will be final in all matters.",
            "Slots are limited and will be allocated on a first-come, first-served basis, upon registration."
        ],
        category: "E-Sports",
        fee: "Free",
        team: "Squad",
        img: "assets/images/events/event17.jpeg",
        color: "text-white",
        day: 2
    }
];

// ==========================================
//  2. UPDATED RENDER LOGIC (Optimized Expansion)
// ==========================================
const grid = document.getElementById('events-grid');
window.filterEvents = function (filterValue) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter');
        if (btn.getAttribute('onclick').includes(`'${filterValue}'`)) {
            btn.classList.add('active-filter');
        }
    });

    renderEvents(filterValue);
};

function renderEvents(filterType = 'all') {
    if (!grid) return;
    grid.innerHTML = '';
    const filteredEvents = filterType === 'all'
        ? events
        : events.filter(e => {
            const dayNum = parseInt(filterType.replace('Day ', ''));
            return e.day === dayNum;
        });

    filteredEvents.forEach((event, index) => {
        const delay = index * 50;
        const card = document.createElement('div');
        const now = new Date();
        const eventStartTime = event.startTime ? new Date(event.startTime) : null;
        const isExpired = eventStartTime && now >= eventStartTime;

        card.className = `hud-card group opacity-0 animate-pop-in flex flex-col ${isExpired ? 'opacity-60 grayscale' : ''}`;
        card.style.animationDelay = `${delay}ms`;

        // Build the register button based on whether the event has expired
        const registerButton = isExpired
            ? `<div class="w-full py-2 bg-red-900/30 text-red-400 border border-red-500/40 cursor-not-allowed text-center">
                    <span class="font-gaming font-bold text-xs tracking-widest uppercase"><i class="fa-solid fa-lock mr-1"></i>Registration Closed</span>
               </div>`
            : `<button onclick="window.location.href='registration.html?event=${event.id}'" 
                    class="w-full py-2 bg-emerald-glow/20 text-emerald-glow border border-emerald-glow/40 hover:bg-emerald-glow hover:text-pitch transition-all duration-300">
                    <span class="font-gaming font-bold text-xs tracking-widest uppercase">Register Now</span>
               </button>`;

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative border-b border-white/10">
                <img src="${event.img}" alt="${event.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div class="absolute top-0 right-0 bg-black/80 border-l border-b border-white/20 px-3 py-1">
                     <span class="${event.color} font-gaming text-xs font-bold uppercase">${event.category}</span>
                </div>
                ${isExpired ? '<div class="absolute top-0 left-0 bg-red-600/90 text-white text-[9px] px-3 py-1 font-gaming uppercase tracking-widest border-r border-b border-red-400/50"><i class="fa-solid fa-lock mr-1"></i>CLOSED</div>' : ''}
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
                    ${registerButton}
                    
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

    const now = new Date();
    const eventStartTime = event.startTime ? new Date(event.startTime) : null;
    const isExpired = eventStartTime && now >= eventStartTime;

    const modal = document.createElement('div');
    // Initial state: invisible (opacity-0) and scaled down (scale-90)
    modal.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 opacity-0 pointer-events-none";
    modal.id = "rules-modal";

    const participationButton = isExpired
        ? `<div class="px-10 py-3 bg-red-900/40 text-red-400 font-gaming text-xs font-bold uppercase tracking-widest border border-red-500/40 cursor-not-allowed text-center">
                <i class="fa-solid fa-lock mr-1"></i>Registration Closed
           </div>`
        : `<button onclick="window.location.href='registration.html?event=${event.id}'" 
                class="px-10 py-3 bg-emerald-glow text-pitch font-gaming text-xs font-bold hover:bg-white transition-all duration-300 uppercase tracking-widest">
                Confirm Participation_
           </button>`;

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
                ${participationButton}
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

window.closeRules = function () {
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
const UNLOCK_DATE = new Date("2026-01-19T16:00:00");

function checkLock() {
    const now = new Date();

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