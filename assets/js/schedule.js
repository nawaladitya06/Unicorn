// ==========================================
//  LOCK & INTRO ANIMATION SYSTEM (SCHEDULE)
// ==========================================
const LOCK_OVERLAY = document.getElementById('lock-overlay');
const CONTENT = document.getElementById('encrypted-content');
const INTRO_SCREEN = document.getElementById('intro-lock-screen');
const REG_POPUP = document.getElementById('reg-popup');

// 🔴 SET THIS DATE (Format: YYYY-MM-DDTHH:MM:SS)
const UNLOCK_DATE = new Date("2026-02-02T10:00:00");

function checkStatus() {
    const now = new Date();

    // If time is up OR previously unlocked
    if (now >= UNLOCK_DATE || isDev) {
        unlockSite();
    }
    
    // Trigger Popup after short delay
    setTimeout(initPopup, 1500);
}

function unlockSite() {
    // 1. Hide the Static "Classified" Screen immediately
    if(LOCK_OVERLAY) LOCK_OVERLAY.style.display = 'none';
    
    // 2. Play Animation Sequence
    if(INTRO_SCREEN && INTRO_SCREEN.style.display !== 'none') {
        INTRO_SCREEN.style.display = 'flex'; 
        playIntroSequence();
    } else {
        // Fallback: Just show content immediately
        if(CONTENT) {
            CONTENT.classList.remove('encrypted-blur');
            CONTENT.classList.add('decrypted');
            activatePanels(); // Ensure panels look active immediately
        }
    }

    // 3. UPDATE BADGES (Active Style)
    const badge1 = document.getElementById('day1-badge');
    const badge2 = document.getElementById('day2-badge');
    const badge3 = document.getElementById('day3-badge');

    // Helper function to update style to "Active Phase" look
    const setUnlockedStyle = (badge) => {
        if(badge) {
            badge.innerText = "UNLOCKED";
            // Remove Locked Styles
            badge.classList.remove('bg-gray-700', 'text-white');
            
            // Add "Active" Styles (Transparent Green + Glow)
            badge.classList.add(
                'bg-emerald-dark/50', 
                'text-emerald-glow', 
                'border', 
                'border-emerald-glow/50',
                'shadow-[0_0_15px_rgba(16,185,129,0.4)]'
            );
        }
    };

    setUnlockedStyle(badge1);
    setUnlockedStyle(badge2);
    setUnlockedStyle(badge3);
}

function activatePanels() {
    // Finds all glass panels (the day containers)
    const panels = document.querySelectorAll('.glass-panel');
    
    panels.forEach(panel => {
        // 1. Remove the faded opacity
        panel.classList.remove('opacity-50');
        
        // 2. Change the left border from Gold to Emerald (Active Look)
        panel.classList.remove('border-l-gold');
        panel.classList.add('border-l-emerald-glow', 'shadow-[0_0_20px_rgba(16,185,129,0.1)]');
        
        // 3. Update the inner timeline lines/dots to Green
        const innerLines = panel.querySelectorAll('.border-gold\\/20');
        innerLines.forEach(line => {
            line.classList.remove('border-gold/20');
            line.classList.add('border-emerald-glow/30');
        });
    });
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
            
            // Trigger the panel activation here for the smooth transition
            activatePanels();
        }
    }, 2800);
    
    // 3600ms: Cleanup
    setTimeout(() => { if(INTRO_SCREEN) INTRO_SCREEN.style.display = 'none'; }, 3600);
}

// --- POPUP LOGIC ---
function initPopup() {
    if(REG_POPUP) {
        REG_POPUP.classList.remove('translate-y-32', 'opacity-0');
    }
}

function closePopup() {
    if(REG_POPUP) {
        REG_POPUP.classList.add('translate-y-32', 'opacity-0');
    }
}

// Make close function global so HTML button can find it
window.closePopup = closePopup;

// Run check on load
window.onload = checkStatus;