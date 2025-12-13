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
    if(LOCK_SCREEN) LOCK_SCREEN.style.display = 'none';
    
    // 2. Play Animation
    if(INTRO_SCREEN) {
        INTRO_SCREEN.style.display = 'flex';
        playIntroSequence();
    } else {
        if(MAIN) MAIN.style.opacity = '1';
    }
    
    localStorage.setItem('unicorn_bypass', 'true');
}

function playIntroSequence() {
    const lockIcon = document.getElementById('intro-lock-icon');
    const modeText = document.getElementById('intro-mode-text');
    const loadingBar = document.getElementById('intro-bar');

    setTimeout(() => { if(loadingBar) loadingBar.style.width = "100%"; }, 100);
    
    setTimeout(() => { if(lockIcon) lockIcon.classList.add('shake-lock'); }, 500);
    
    setTimeout(() => {
        if(lockIcon) {
            lockIcon.classList.remove('shake-lock', 'fa-lock', 'text-gold');
            lockIcon.classList.add('fa-lock-open', 'text-emerald-glow', 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]');
        }
    }, 1200);
    
    setTimeout(() => { if(modeText) modeText.classList.add('mode-text-reveal'); }, 1400);
    
    setTimeout(() => {
        if(INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if(MAIN) MAIN.style.opacity = '1';
    }, 2800);
    
    setTimeout(() => { if(INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

window.onload = checkLock;


// ==========================================
//  2. FORM SUBMISSION LOGIC
// ==========================================
// 🔴 PASTE YOUR GOOGLE SCRIPT URL HERE
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOdIm_xuvO_n4-r8gXWhPlYW-BY0XPRewgIGPNNe3MLOGxoiCj9gNcUG2fFRKLFCHE/exec';

const form = document.forms['unicorn-registration'];
const btn = document.getElementById('submit-btn');

// FILE INPUTS
const fileInput = document.getElementById('payment-screenshot');
const fileNameDisplay = document.getElementById('file-name-display');
const fileNameSpan = document.getElementById('file-name');

const idInput = document.getElementById('id-receipt');
const idNameDisplay = document.getElementById('id-file-name-display');
const idNameSpan = document.getElementById('id-file-name');

// 1. File Listeners
if(fileInput) {
    fileInput.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            fileNameDisplay.classList.remove('hidden');
            fileNameSpan.textContent = this.files[0].name;
        }
    });
}

if(idInput) {
    idInput.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            idNameDisplay.classList.remove('hidden');
            idNameSpan.textContent = this.files[0].name;
        }
    });
}

// 2. Helper
function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
            data: reader.result,
            name: file.name,
            type: file.type
        });
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 3. Submit
if(form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();

        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> PROCESSING...';
        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');

        const formData = new FormData(form);

        // Validation
        const payFile = fileInput.files[0];
        const idFile = idInput.files[0];

        if (!payFile) {
            alert("Please upload the Payment Screenshot!");
            resetBtn(); return;
        }
        if (!idFile) {
            alert("Please upload the ID / Fee Receipt!");
            resetBtn(); return;
        }

        if (payFile.size > 5 * 1024 * 1024 || idFile.size > 5 * 1024 * 1024) {
            alert("One of your files is too large! Max size 5MB.");
            resetBtn(); return;
        }

        try {
            const [payData, idData] = await Promise.all([
                readFileAsBase64(payFile),
                readFileAsBase64(idFile)
            ]);

            formData.append('fileData', payData.data);
            formData.append('mimeType', payData.type);
            formData.append('fileName', payData.name);
            formData.append('PaymentScreenshot', 'Uploaded');

            formData.append('idFileData', idData.data);
            formData.append('idMimeType', idData.type);
            formData.append('idFileName', idData.name);
            formData.append('IDReceipt', 'Uploaded');

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    alert("REGISTRATION SUCCESSFUL! Welcome to the mission.");
                    form.reset();
                    resetBtn();
                    if(fileNameDisplay) fileNameDisplay.classList.add('hidden');
                    if(idNameDisplay) idNameDisplay.classList.add('hidden');
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Error submitting form. Please try again.");
                    resetBtn();
                });

        } catch (err) {
            console.error(err);
            alert("Error reading files. Please try again.");
            resetBtn();
        }

        function resetBtn() {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
    });
}