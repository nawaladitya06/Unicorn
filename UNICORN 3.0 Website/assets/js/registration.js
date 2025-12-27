// ==========================================
//  1. LOCK & INTRO ANIMATION SYSTEM
// ==========================================
const LOCK_SCREEN = document.getElementById('lock-screen');
const MAIN = document.getElementById('main-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');

// 🔴 SET THIS DATE
const UNLOCK_DATE = new Date("2025-12-13T21:30:00");

function checkLock() {
    const now = new Date();
    const isDev = localStorage.getItem('unicorn_bypass') === 'true';

    if (now >= UNLOCK_DATE || isDev) {
        unlockSite();
    }
}

function unlockSite() {
    // 1. Remove Static Lock
    if (LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';

    // 2. Play Animation
    if (INTRO_SCREEN) {
        INTRO_SCREEN.style.display = 'flex';
        playIntroSequence();
    } else {
        if (MAIN) MAIN.style.opacity = '1';
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
            lockIcon.classList.remove('shake-lock', 'fa-lock', 'text-gold');
            lockIcon.classList.add('fa-lock-open', 'text-emerald-glow', 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]');
        }
    }, 1200);

    setTimeout(() => { if (modeText) modeText.classList.add('mode-text-reveal'); }, 1400);

    setTimeout(() => {
        if (INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if (MAIN) MAIN.style.opacity = '1';
    }, 2800);

    setTimeout(() => { if (INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

window.onload = checkLock;

// ==========================================
//  2. FORM SUBMISSION LOGIC
// ==========================================

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOdIm_xuvO_n4-r8gXWhPlYW-BY0XPRewgIGPNNe3MLOGxoiCj9gNcUG2fFRKLFCHE/exec';
const form = document.forms['unicorn-registration'];
const btn = document.getElementById('submit-btn');
const idInput = document.getElementById('id-receipt');
const idNameDisplay = document.getElementById('id-file-name-display');
const idNameSpan = document.getElementById('id-file-name');

if(idInput) {
    idInput.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            idNameDisplay.classList.remove('hidden');
            idNameSpan.textContent = this.files[0].name;
        }
    });
}

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
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> PROCESSING...';
        btn.disabled = true;

        const idFile = idInput.files[0];
        if (!idFile) {
            showNotification("Input Required", "Please upload your College ID Proof!", true);
            resetBtn(); return;
        }

        try {
            const idData = await readFileAsBase64(idFile);
            const formData = new FormData(form);
            formData.append('idFileData', idData.data);
            formData.append('idMimeType', idData.type);
            formData.append('idFileName', idData.name);

            fetch(scriptURL, { method: 'POST', body: new URLSearchParams(formData) })
                .then(response => {
                    showNotification("Mission Success", "Welcome to the mainframe, Agent.");
                    form.reset();
                    if(idNameDisplay) idNameDisplay.classList.add('hidden');
                })
                .catch(error => {
                    showNotification("System Error", "Submission failed. Please try again.", true);
                })
                .finally(() => resetBtn());

        } catch (err) {
            showNotification("File Error", "Error reading files. Try a smaller image.", true);
            resetBtn();
        }

        function resetBtn() {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}

// ==========================================
//  3. NOTIFICATION & AUTO-SELECT SYSTEM
// ==========================================
function showNotification(title, message, isError = false) {
    const overlay = document.getElementById('custom-notification');
    const box = document.getElementById('notification-box');
    const titleEl = document.getElementById('notification-title');
    const msgEl = document.getElementById('notification-message');
    const icon = document.getElementById('notification-icon');

    titleEl.innerText = title.toUpperCase();
    msgEl.innerText = message;
    
    if(isError) {
        box.style.borderColor = "#ef4444";
        box.style.boxShadow = "0 0 30px rgba(239, 68, 68, 0.4)";
        icon.className = "fa-solid fa-triangle-exclamation text-red-500";
    } else {
        box.style.borderColor = "#10b981";
        box.style.boxShadow = "0 0 30px rgba(16, 185, 129, 0.4)";
        icon.className = "fa-solid fa-circle-check text-emerald-glow";
    }

    overlay.classList.remove('hidden');
    setTimeout(() => box.classList.replace('scale-90', 'scale-100'), 10);
}

function closeNotification() {
    document.getElementById('custom-notification').classList.add('hidden');
    document.getElementById('notification-box').classList.replace('scale-100', 'scale-90');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');
    const eventMapping = {
        "1": "Crisis Cabinet", "2": "Flip the Argument", "3": "Flop Tank",
        "4": "Solo Surge", "5": "The Grand Choreo", "6": "Unicorn Icon",
        "7": "The Grand Hunt", "8": "War in the Boardroom", "9": "PR Rally",
        "10": "Face Painting", "11": "Wall Décor", "12": "Crochet Making",
        "13": "Auction", "14": "Story Writing"
    };

    if (eventId && eventMapping[eventId]) {
        const radioBtn = document.querySelector(`input[name="Event"][value="${eventMapping[eventId]}"]`);
        if (radioBtn) {
            radioBtn.checked = true;
            setTimeout(() => radioBtn.closest('label').scrollIntoView({ behavior: 'smooth', block: 'center' }), 1000);
        }
    }
});