// ==========================================
//  1. LOCK & INTRO SYSTEM
// ==========================================
const LOCK_SCREEN = document.getElementById('lock-screen');
const MAIN = document.getElementById('main-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');
const UNLOCK_DATE = new Date("2026-02-02T10:00:00");

function checkLock() {
    const now = new Date();
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';
    if (now >= UNLOCK_DATE || isDev) { unlockSite(); }
}

function unlockSite() {
    if (LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';
    if (INTRO_SCREEN) { INTRO_SCREEN.style.display = 'flex'; playIntroSequence(); }
    else { if (MAIN) MAIN.style.opacity = '1'; }
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
            checkInitialParams();
        }
    }, 2800);
    setTimeout(() => { if (INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

window.onload = checkLock;

// ==========================================
//  2. DYNAMIC DATA MAPPING
// ==========================================
const teamSizeMapping = {
    "Crisis Cabinet": { min: 2, max: 2 },
    "Mind Switch": { min: 1, max: 1 },
    "Flop Tank": { min: 3, max: 3 },
    "FacePop": { min: 2, max: 2 },
    "Wallistry": { min: 2, max: 2 },
    "Crochet Chronicles": { min: 1, max: 1 },
    "60 Seconds of Fame": { min: 1, max: 1 },
    "From Prompt to Plot": { min: 1, max: 1 },
    "Solo Surge": { min: 1, max: 1 },
    "Battle of Steps": { min: 6, max: 10 },
    "Vogue Vista": { min: 7, max: 10 },
    "Face of Unicorn": { min: 2, max: 2 },
    "Campus Chase": { min: 3, max: 3 },
    "The Boardgame Arena": { min: 2, max: 2 }
};

let currentPlayerCount = 0;
let currentMaxPlayers = 0;

function generatePlayerFields(config) {
    const container = document.getElementById('player-profiles-container');
    if (!container) return;

    container.innerHTML = '';
    currentPlayerCount = 0;
    currentMaxPlayers = config.max;

    const oldBtn = document.getElementById('dynamic-controls');
    if (oldBtn) oldBtn.remove();

    if (config.max === 0) {
        container.innerHTML = `
            <div class="p-8 border-2 border-dashed border-emerald-glow/20 rounded-xl text-center bg-emerald-glow/5 animate-pop-in">
                <i class="fa-solid fa-users-gear text-4xl text-emerald-glow mb-4"></i>
                <h4 class="text-white font-gaming text-sm uppercase mb-2">Contingent Protocol Active</h4>
                <p class="text-beige/60 font-mono text-[10px] leading-relaxed">
                    PR Rally does not require individual profiles. Submission will be processed via Contingent Ops data.
                </p>
            </div>`;
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
            <button type="button" onclick="addNewPlayer()" id="add-player-btn" 
                class="px-6 py-2 border border-emerald-glow text-emerald-glow font-gaming text-[10px] hover:bg-emerald-glow hover:text-pitch transition-all uppercase tracking-widest">
                <i class="fa-solid fa-plus mr-2"></i> Add Operative (<span id="count-display">${currentPlayerCount}</span>/${currentMaxPlayers})
            </button>`;
        container.after(btnContainer);
    }
}

function addPlayerBlock(index) {
    const container = document.getElementById('player-profiles-container');
    const block = document.createElement('div');
    block.className = "p-6 bg-white/5 border border-white/10 rounded-xl mb-6 animate-pop-in";
    block.innerHTML = `
        <h4 class="text-gold font-gaming text-sm mb-4 tracking-widest uppercase">PLAYER ${index} PROFILE</h4>
        <div class="grid md:grid-cols-2 gap-6">
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
            <input type="file" name="Player${index}_ID" accept="image/*" required class="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-emerald-glow/20 file:text-emerald-glow hover:file:bg-emerald-glow transition-all">
        </div>`;
    container.appendChild(block);
    currentPlayerCount++;
}

window.addNewPlayer = function () {
    if (currentPlayerCount < currentMaxPlayers) {
        addPlayerBlock(currentPlayerCount + 1);
        const countDisplay = document.getElementById('count-display');
        if (countDisplay) countDisplay.innerText = currentPlayerCount;
        if (currentPlayerCount === currentMaxPlayers) {
            const addBtn = document.getElementById('add-player-btn');
            if (addBtn) addBtn.remove();
        }
    }
};

// ==========================================
//  3. SYNC LOGIC
// ==========================================
function checkInitialParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    const eventMapping = {
        "1": "Crisis Cabinet", "2": "Mind Switch", "3": "Flop Tank",
        "5": "FacePop", "6": "Wallistry", "7": "Crochet Chronicles", "8": "60 Seconds of Fame",
        "9": "From Prompt to Plot", "10": "Solo Surge", "11": "Battle of Steps", "12": "Vogue Vista",
        "13": "Face of Unicorn", "14": "Campus Chase", "15": "The Boardgame Arena"
    };

    if (eventId && eventMapping[eventId]) {
        const val = eventMapping[eventId];
        const btn = document.querySelector(`input[name="Event"][value="${val}"]`);
        if (btn) {
            btn.checked = true;
            generatePlayerFields(teamSizeMapping[val]);
            setTimeout(() => btn.closest('label').scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[name="Event"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const config = teamSizeMapping[e.target.value] || { min: 1, max: 1 };
            generatePlayerFields(config);
        });
    });
});

// ==========================================
//  4. SUBMISSION & GOOGLE SHEETS SYNC
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

            // 1. Capture ALL standard inputs (Names, Emails, PRNs, etc.)
            for (const [key, value] of formData.entries()) {
                if (!(value instanceof File)) {
                    payload[key] = value;
                }
            }

            // 2. Capture and process files for EACH active player
            for (let i = 1; i <= currentPlayerCount; i++) {
                const fileInput = form.querySelector(`input[name="Player${i}_ID"]`);
                if (fileInput && fileInput.files[0]) {
                    const fileData = await readFileAsBase64(fileInput.files[0]);
                    payload[`Player${i}_FileData`] = fileData.data;
                    payload[`Player${i}_FileName`] = fileData.name;
                }
            }

            // 3. Send using URLSearchParams to ensure Apps Script e.parameter parsing
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // Essential for Google Apps Script
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(payload).toString()
            });

            // Since we use 'no-cors', we cannot read the response object.
            // We assume success if no error was thrown during fetch.
            showNotification("SUCCESS", "Registration Deployed to Mainframe.");
            form.reset();
            document.getElementById('player-profiles-container').innerHTML =
                '<div class="text-center py-10 border-2 border-dashed border-white/5 rounded-xl"><p class="text-gray-500 font-mono text-xs uppercase tracking-widest animate-pulse">Select a Mission to deploy fields...</p></div>';
            const oldBtn = document.getElementById('dynamic-controls');
            if (oldBtn) oldBtn.remove();

        } catch (err) {
            console.error("Submission error:", err);
            showNotification("ERROR", "Deployment failed. Check connection or data size.", true);
        } finally {
            submitBtn.innerHTML = origText;
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
//  5. NOTIFICATION SYSTEM
// ==========================================
function showNotification(title, message, isError = false) {
    const overlay = document.getElementById('custom-notification');
    const titleEl = document.getElementById('notification-title');
    const msgEl = document.getElementById('notification-message');
    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = message;
    if (overlay) overlay.classList.remove('hidden');
}

window.closeNotification = function () {
    const overlay = document.getElementById('custom-notification');
    if (overlay) overlay.classList.add('hidden');
};