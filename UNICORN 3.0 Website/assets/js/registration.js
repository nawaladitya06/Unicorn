// ==========================================
//  1. LOCK & INTRO SYSTEM
// ==========================================
const LOCK_SCREEN = document.getElementById('lock-screen');
const MAIN = document.getElementById('main-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');
const UNLOCK_DATE = new Date("2024-12-13T21:30:00");

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
            checkInitialParams(); // Check URL params after reveal
        }
    }, 2800);
    setTimeout(() => { if (INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

window.onload = checkLock;

// ==========================================
//  2. DYNAMIC FIELD GENERATOR (ALL 14 EVENTS)
// ==========================================
const teamSizeMapping = {
    "Crisis Cabinet": 2, "Flip the Argument": 1, "Flop Tank": 3,
    "Solo Surge": 1, "The Grand Choreo": 6, "Unicorn Icon": 1,
    "The Grand Hunt": 3, "War in the Boardroom": 2, "PR Rally": 1,
    "Face Painting": 2, "Wall Décor": 2, "Crochet Making": 1,
    "Auction": 2, "Story Writing": 1
};

function generatePlayerFields(size) {
    const container = document.getElementById('player-profiles-container');
    if (!container) return;
    container.innerHTML = ''; 

    for (let i = 1; i <= size; i++) {
        const block = document.createElement('div');
        block.className = "p-6 bg-white/5 border border-white/10 rounded-xl mb-6 animate-pop-in";
        block.innerHTML = `
            <h4 class="text-gold font-gaming text-sm mb-4 tracking-widest uppercase">PLAYER ${i} PROFILE</h4>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Full Name</label>
                    <input type="text" name="Player${i}_Name" required class="w-full gaming-input rounded p-3 text-sm" placeholder="Codename">
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Email</label>
                    <input type="email" name="Player${i}_Email" required class="w-full gaming-input rounded p-3 text-sm" placeholder="Comms">
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Phone</label>
                    <input type="tel" name="Player${i}_Phone" required class="w-full gaming-input rounded p-3 text-sm" placeholder="Hotline">
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">PRN Number</label>
                    <input type="text" name="Player${i}_PRN" required class="w-full gaming-input rounded p-3 text-sm" placeholder="ID Number">
                </div>
                <div class="space-y-2 md:col-span-2">
                    <label class="text-[10px] text-gray-400 font-gaming uppercase tracking-widest">Class (Level)</label>
                    <select name="Player${i}_Year" required class="w-full gaming-input rounded p-3 text-sm">
                        <option value="">-- SELECT LEVEL --</option>
                        <option value="FY">FY (Level 1)</option>
                        <option value="SY">Level 2 (SY)</option>
                        <option value="TY">Level 3 (TY)</option>
                        <option value="PG">PG (Masters)</option>
                    </select>
                </div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/5">
                <label class="text-[10px] text-emerald-glow uppercase block mb-2 tracking-widest">Upload ID Evidence (Player ${i})</label>
                <input type="file" name="Player${i}_ID" accept="image/*" required class="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-emerald-glow/20 file:text-emerald-glow hover:file:bg-emerald-glow transition-all">
            </div>
        `;
        container.appendChild(block);
    }
}

// ==========================================
//  3. SYNC LOGIC
// ==========================================
function checkInitialParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    const eventMapping = { 
        "1":"Crisis Cabinet", "2":"Flip the Argument", "3":"Flop Tank", 
        "4":"Solo Surge", "5":"The Grand Choreo", "6":"Unicorn Icon", 
        "7":"The Grand Hunt", "8":"War in the Boardroom", "9":"PR Rally",
        "10":"Face Painting", "11":"Wall Décor", "12":"Crochet Making",
        "13":"Auction", "14":"Story Writing"
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
    const eventRadios = document.querySelectorAll('input[name="Event"]');
    eventRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const size = teamSizeMapping[e.target.value] || 1;
            generatePlayerFields(size);
        });
    });
});

// ==========================================
//  4. SUBMISSION & GOOGLE SHEETS SYNC
// ==========================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOdIm_xuvO_n4-r8gXWhPlYW-BY0XPRewgIGPNNe3MLOGxoiCj9gNcUG2fFRKLFCHE/exec';
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

if(form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();

        // 1. Strict Validation Check (HTML5 + Manual)
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> DEPLOYING...'; 
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const event = formData.get('Event');
            const size = teamSizeMapping[event] || 1;

            // Process IDs for all players as Base64
            for (let i = 1; i <= size; i++) {
                const input = form.querySelector(`input[name="Player${i}_ID"]`);
                if (input && input.files[0]) {
                    const data = await readFileAsBase64(input.files[0]);
                    formData.append(`Player${i}_FileData`, data.data);
                }
            }

            // Convert to URLSearchParams for Google Scripts
            const params = new URLSearchParams();
            for (const [key, value] of formData) { params.append(key, value); }

            await fetch(scriptURL, { method: 'POST', body: params });
            
            showNotification("SUCCESS", "Registration Deployed to Mainframe.");
            form.reset();
            document.getElementById('player-profiles-container').innerHTML = '<div class="text-center py-10 border-2 border-dashed border-white/5 rounded-xl"><p class="text-gray-500 font-mono text-xs uppercase tracking-widest animate-pulse">Select a Mission to deploy fields...</p></div>';
        } catch (err) {
            showNotification("ERROR", "Deployment failed. Check connection.", true);
        } finally {
            submitBtn.innerHTML = origText; submitBtn.disabled = false;
        }
    });
}

// ==========================================
//  5. NOTIFICATION SYSTEM
// ==========================================
function showNotification(title, message, isError = false) {
    const overlay = document.getElementById('custom-notification');
    const box = document.getElementById('notification-box');
    document.getElementById('notification-title').innerText = title;
    document.getElementById('notification-message').innerText = message;
    overlay.classList.remove('hidden');
}

function closeNotification() { document.getElementById('custom-notification').classList.add('hidden'); }