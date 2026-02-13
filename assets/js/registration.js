// CONSTANTS (prefixed with REG_ to avoid conflict with events.js globals)
const REG_LOCK_SCREEN = document.getElementById('lock-screen');
const REG_MAIN = document.getElementById('main-content');
const REG_INTRO_SCREEN = document.getElementById('intro-lock-screen');

// GLOBAL SITE OPENING DATE (Overall Portal Lock)
const SITE_OPEN_DATE = new Date("2025-01-01T10:00:00");

// ==========================================
//  1. LOCK & INTRO SYSTEM
// ==========================================

// Use a unique name to avoid conflict with events.js
window.onload = function () {
    initRegistrationPage();
};

function initRegistrationPage() {
    const now = new Date();

    // PHASE 1: SITE IS LOCKED
    if (now < SITE_OPEN_DATE) {
        lockSite();
    }
    // PHASE 2: SITE IS OPEN
    else {
        unlockSite();
        setTimeout(checkEventLocks, 500);
        checkInitialParams(); // Check URL for ?event=ID
    }
}

function lockSite() {
    if (REG_MAIN) REG_MAIN.style.display = 'none';
    if (REG_INTRO_SCREEN) REG_INTRO_SCREEN.style.display = 'none';

    if (!document.querySelector('.global-lock-msg')) {
        document.body.innerHTML += `
            <div class="global-lock-msg fixed inset-0 flex flex-col items-center justify-center bg-black text-center px-6 z-[9999]">
                <i class="fa-solid fa-lock text-gold text-7xl mb-6"></i>
                <h1 class="font-heading text-4xl md:text-5xl text-white mb-4">Registration Locked</h1>
                <p class="text-beige/70 max-w-xl">
                    Portal opens on <span class="text-emerald-glow font-mono">February 2, 2026 at 10:00 AM</span>.
                </p>
            </div>
        `;
    }
}

function unlockSite() {
    if (REG_INTRO_SCREEN && getComputedStyle(REG_INTRO_SCREEN).display !== 'none') {
        playIntroSequence();
    } else {
        revealContent();
    }
}

function revealContent() {
    if (REG_MAIN) {
        REG_MAIN.classList.remove('opacity-0');
        REG_MAIN.style.opacity = '1';
    }
}

// Fallback to ensure content shows
setTimeout(revealContent, 3000);

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
        if (REG_INTRO_SCREEN) REG_INTRO_SCREEN.classList.add('fade-out-intro');
        revealContent();
    }, 2800);

    setTimeout(() => { if (REG_INTRO_SCREEN) REG_INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// ==========================================
//  2. EVENT TIME LOCKING
// ==========================================

function checkEventLocks() {
    if (typeof events === 'undefined') return;

    const now = new Date();
    const radioButtons = document.querySelectorAll('input[name="Event"]');

    radioButtons.forEach(radio => {
        const eventData = events.find(e => e.title === radio.value);

        if (eventData && eventData.startTime) {
            const startTime = new Date(eventData.startTime);

            if (now >= startTime) {
                radio.disabled = true;
                radio.checked = false;

                const card = radio.nextElementSibling;
                if (card) {
                    card.classList.add('opacity-40', 'cursor-not-allowed', 'grayscale');
                    card.classList.remove('hover:bg-white/10');

                    if (!card.querySelector('.lock-badge')) {
                        const badge = document.createElement('div');
                        badge.className = "lock-badge absolute top-2 right-2 bg-red-600/90 text-white text-[9px] px-2 py-1 rounded font-gaming uppercase tracking-widest border border-red-400/50 z-10 shadow-lg";
                        badge.innerHTML = "<i class='fa-solid fa-lock mr-1'></i> REGISTRATION CLOSED";
                        card.classList.add('relative');
                        card.appendChild(badge);
                    }
                }
            }
        }
    });
}

// ==========================================
//  3. PLAYER FIELDS CONFIGURATION
// ==========================================
const teamSizeMapping = {
    "Crisis Cabinet": { min: 2, max: 2 },
    "Mind Switch": { min: 1, max: 1 },
    "Flop Tank": { min: 2, max: 3 },
    "FacePop": { min: 2, max: 2 },
    "Poster Making": { min: 2, max: 2 },
    "Crochet Chronicles": { min: 1, max: 1 },
    "60 Seconds of Fame": { min: 1, max: 1 },
    "From Prompt to Plot": { min: 1, max: 1 },
    "Solo Surge": { min: 1, max: 1 },
    "Battle of Steps": { min: 6, max: 10 },
    "Vogue Vista": { min: 8, max: 10 },
    "Face of Unicorn": { min: 2, max: 2 },
    "The Grand Hunt": { min: 3, max: 3 },
    "Level Up Bids (IPL Auctions)": { min: 1, max: 1 },
    "BGMI": { min: 2, max: 4 },
    "Free Fire": { min: 2, max: 4 }
};

let currentPlayerCount = 0;
let currentMaxPlayers = 0;

// ==========================================
//  4. CORE LOGIC (Event Delegation Fix)
// ==========================================

// Global Listener for ANY change on the document
document.addEventListener('change', function (e) {
    // Check if the changed element is one of our Event Radio buttons
    if (e.target && e.target.name === 'Event') {
        console.log("Mission Selected:", e.target.value); // Debugging

        const eventName = e.target.value;
        // Default to Solo if mapping fails
        const config = teamSizeMapping[eventName] || { min: 1, max: 1 };

        generatePlayerFields(config);

        // Smooth scroll to fields
        setTimeout(() => {
            const container = document.getElementById('player-profiles-container');
            if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
});

// Global Function for "Add Player" button
window.addNewPlayer = function () {
    if (currentPlayerCount < currentMaxPlayers) {
        addPlayerBlock(currentPlayerCount + 1);

        const countDisplay = document.getElementById('count-display');
        if (countDisplay) countDisplay.innerText = currentPlayerCount;

        if (currentPlayerCount >= currentMaxPlayers) {
            const addBtn = document.getElementById('add-player-btn');
            if (addBtn) addBtn.style.display = 'none';
        }
    }
};

function generatePlayerFields(config) {
    const container = document.getElementById('player-profiles-container');
    if (!container) {
        console.error("Player container not found!");
        return;
    }

    container.innerHTML = ''; // Clear previous fields
    currentPlayerCount = 0;
    currentMaxPlayers = config.max;

    const oldBtn = document.getElementById('dynamic-controls');
    if (oldBtn) oldBtn.remove();

    if (config.max === 0) {
        container.innerHTML = `<div class="p-8 text-center text-white/50 border border-white/10 rounded">Contingent Protocol Active</div>`;
        return;
    }

    for (let i = 1; i <= config.min; i++) {
        addPlayerBlock(i);
    }

    if (config.max > config.min) {
        const btnContainer = document.createElement('div');
        btnContainer.id = "dynamic-controls";
        btnContainer.className = "flex justify-center pt-4";
        btnContainer.innerHTML = `
            <button type="button" onclick="window.addNewPlayer()" id="add-player-btn" 
                class="px-6 py-2 border border-emerald-glow text-emerald-glow font-gaming text-[10px] hover:bg-emerald-glow hover:text-pitch transition-all uppercase tracking-widest cursor-pointer">
                <i class="fa-solid fa-plus mr-2"></i> Add Operative (<span id="count-display">${currentPlayerCount}</span>/${currentMaxPlayers})
            </button>`;
        container.after(btnContainer);
    }
}

function addPlayerBlock(index) {
    const container = document.getElementById('player-profiles-container');
    const block = document.createElement('div');
    // Removed 'animate-pop-in' to prevent visibility issues if CSS is missing
    block.className = "p-6 bg-white/5 border border-white/10 rounded-xl mb-6 relative";
    block.innerHTML = ` 
        <div class="absolute -top-3 left-4 bg-black px-2">
            <span class="text-gold font-gaming text-xs tracking-widest uppercase">PLAYER 0${index}</span>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mt-2">
            <div class="space-y-2">
                <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Full Name</label>
                <input type="text" name="Player${index}_Name" required class="w-full gaming-input rounded p-3 text-sm">
            </div>
            <div class="space-y-2">
                <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Email</label>
                <input type="email" name="Player${index}_Email" required class="w-full gaming-input rounded p-3 text-sm">
            </div>
            <div class="space-y-2">
                <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Phone</label>
                <input type="tel" name="Player${index}_Phone" required class="w-full gaming-input rounded p-3 text-sm">
            </div>
            <div class="space-y-2">
                <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">PRN Number</label>
                <input type="text" name="Player${index}_PRN" required class="w-full gaming-input rounded p-3 text-sm">
            </div>
            <div class="space-y-2 md:col-span-2">
                <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Class (Level)</label>
                <select name="Player${index}_Year" required class="w-full gaming-input rounded p-3 text-sm">
                    <option value="">-- SELECT LEVEL --</option>
                    <option value="FY">FY</option><option value="SY">SY</option><option value="TY">TY</option><option value="PG">PG</option>
                </select>
            </div>
        </div>
        <div class="mt-4 pt-4 border-t border-white/5">
            <label class="text-[10px] text-emerald-glow uppercase block mb-2 tracking-widest">Upload ID Card</label>
            <input type="file" name="Player${index}_ID" accept="image/*" required 
                class="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-emerald-glow/20 file:text-emerald-glow hover:file:bg-emerald-glow transition-all cursor-pointer">
        </div>`;
    container.appendChild(block);
    currentPlayerCount++;
}

// ==========================================
//  5. URL PARAMETER CHECK
// ==========================================

function checkInitialParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    if (typeof events === 'undefined' || !eventId) return;

    const selectedEvent = events.find(e => e.id == eventId);

    if (selectedEvent) {
        const val = selectedEvent.title;
        // NOTE: We do NOT rely on 'change' here because programmatic click is safer
        const btn = document.querySelector(`input[name="Event"][value="${val}"]`);

        if (btn && !btn.disabled) {
            btn.checked = true;
            // Manually trigger the generation since checking the box doesn't always fire 'change' programmatically
            const config = teamSizeMapping[val] || { min: 1, max: 1 };
            generatePlayerFields(config);
            setTimeout(() => btn.closest('label').scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
        }
    }
}

// ==========================================
//  6. FORM SUBMISSION SYSTEM
// ==========================================
const scriptURL = 'https://script.google.com/macros/s/AKfycby6IikoV59in_ug59s2Ph-A24hFZqvt7JJZt2WE8dys2WkSBXDyKP-jNmFPix73VZx0/exec';
const form = document.forms['unicorn-registration'];
const submitBtn = document.getElementById('submit-btn');

function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ data: reader.result, name: file.name, type: file.type });
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

if (form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> DEPLOYING...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const payload = {};

            for (const [key, value] of formData.entries()) {
                if (!(value instanceof File)) payload[key] = value;
            }

            for (let i = 1; i <= currentPlayerCount; i++) {
                const fileInput = form.querySelector(`input[name="Player${i}_ID"]`);
                if (fileInput && fileInput.files[0]) {
                    const fileData = await readFileAsBase64(fileInput.files[0]);
                    payload[`Player${i}_FileData`] = fileData.data;
                    payload[`Player${i}_FileName`] = fileData.name;
                }
            }

            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: new URLSearchParams(payload)
            });

            showNotification("SUCCESS", "Registration Deployed.");
            form.reset();
            document.getElementById('player-profiles-container').innerHTML =
                '<div class="text-center py-10 border-2 border-dashed border-white/5 rounded-xl"><p class="text-gray-500 font-mono text-xs uppercase tracking-widest">Select Mission to deploy fields...</p></div>';

            const oldBtn = document.getElementById('dynamic-controls');
            if (oldBtn) oldBtn.remove();
            window.scrollTo(0, 0);

        } catch (err) {
            console.error(err);
            showNotification("ERROR", "Connection Failed.", true);
        } finally {
            submitBtn.innerHTML = origText;
            submitBtn.disabled = false;
        }
    });
}

function showNotification(title, message, isError = false) {
    const overlay = document.getElementById('custom-notification');
    const titleEl = document.getElementById('notification-title');
    const msgEl = document.getElementById('notification-message');
    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = message;
    if (titleEl && isError) titleEl.classList.add('text-red-500');
    else if (titleEl) titleEl.classList.remove('text-red-500');
    if (overlay) overlay.classList.remove('hidden');
}

window.closeNotification = function () {
    const overlay = document.getElementById('custom-notification');
    if (overlay) overlay.classList.add('hidden');
};