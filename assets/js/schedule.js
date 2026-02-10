// ==========================================
//  LOCK & INTRO ANIMATION SYSTEM (SCHEDULE)
// ==========================================
const LOCK_OVERLAY = document.getElementById('lock-overlay');
const CONTENT = document.getElementById('encrypted-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');

// 🔴 SET THIS DATE (Format: YYYY-MM-DDTHH:MM:SS)
const UNLOCK_DATE = new Date("2026-02-02T10:00:00");

function checkStatus() {
    const now = new Date();

    // If time is up OR previously unlocked
    if (now >= UNLOCK_DATE || isDev) {
        unlockSite();
    }
}

function unlockSite() {
    // 1. Hide the Static "Classified" Screen immediately
    if(LOCK_OVERLAY) LOCK_OVERLAY.style.display = 'none';
    
    // 2. Play Animation Sequence
    if(INTRO_SCREEN && INTRO_SCREEN.style.display !== 'none') {
        INTRO_SCREEN.style.display = 'flex'; 
        playIntroSequence();
    } else {
        // Fallback: Just show content
        if(CONTENT) {
            CONTENT.classList.remove('encrypted-blur');
            CONTENT.classList.add('decrypted');
        }
    }

    // 3. UPDATE BADGES (New Code)
    const badge1 = document.getElementById('day1-badge');
    const badge2 = document.getElementById('day2-badge');

    // Helper function to update style
    const setUnlockedStyle = (badge) => {
        if(badge) {
            badge.innerText = "UNLOCKED";
            badge.classList.remove('bg-gray-700', 'text-white');
            badge.classList.add('bg-emerald-glow', 'text-pitch', 'shadow-[0_0_10px_#10B981]');
        }
    };

    setUnlockedStyle(badge1);
    setUnlockedStyle(badge2);
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

    // 2800ms: Fade Out Overlay & Reveal Content
    setTimeout(() => {
        if(INTRO_SCREEN) INTRO_SCREEN.classList.add('fade-out-intro');
        if(CONTENT) {
            CONTENT.classList.remove('encrypted-blur');
            CONTENT.classList.add('decrypted');
        }
    }, 2800);
    
    // 3600ms: Cleanup
    setTimeout(() => { if(INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// Run check on load
window.onload = checkStatus;