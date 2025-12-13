// ==========================================
//  HOME PAGE SPECIFIC LOGIC
// ==========================================

// 1. Countdown Timer Logic
// ------------------------------------------
// Set the date we're counting down to
const countDownDate = new Date("Mar 15, 2026 09:00:00").getTime();

// Update the count down every 1 second
const timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the elements with corresponding IDs
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");

    if (daysEl && hoursEl && minsEl) {
        daysEl.innerHTML = days < 10 ? "0" + days : days;
        hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
        minsEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timerInterval);
        if (daysEl) document.getElementById("days").innerHTML = "00";
        if (hoursEl) document.getElementById("hours").innerHTML = "00";
        if (minsEl) document.getElementById("mins").innerHTML = "00";
    }
}, 1000);


// 2. Past Glory Section Logic
// ------------------------------------------
// Data Source: Images from assets/images/glimpses folder
// We need ~9 items total for a balanced grid
const pastGloryData = [
    { type: 'image', src: 'assets/images/glimpses/img1.jpg', title: 'The Beginning', category: 'Event Start' },
    { type: 'image', src: 'assets/images/glimpses/img2.jpg', title: 'Crowd Energy', category: 'Audience' },
    { type: 'image', src: 'assets/images/glimpses/img3.jpg', title: 'Learning Session', category: 'Workshops' },
    { type: 'image', src: 'assets/images/glimpses/img4.jpg', title: 'In Action', category: 'Competition' },

    // *** CENTER ITEM (The Quote) ***
    {
        type: 'quote',
        text: "Unicorn isn't just a festival. It's where the future CEOs of India are born.",
        author: "Alumni, 2023"
    },

    { type: 'image', src: 'assets/images/glimpses/img5.jpg', title: 'Key Moment', category: 'Highlights' },
    { type: 'image', src: 'assets/images/glimpses/img6.jpg', title: 'The Organizers', category: 'Team' },
    // Reusing images to ensure grid is full if you don't have 9 unique ones yet
    { type: 'image', src: 'assets/images/glimpses/img1.jpg', title: 'Celebration', category: 'Victory' },
    { type: 'image', src: 'assets/images/glimpses/img2.jpg', title: 'Full House', category: 'Event Start' }
];

function renderPastGlory() {
    const container = document.getElementById('past-glory-container');
    if (!container) return; // Exit if element not found (e.g. on other pages)

    let html = '';

    pastGloryData.forEach((item) => {
        // Determine text color based on category for visual variety
        let categoryColorClass = 'text-gold';
        if (item.category === 'Audience' || item.category === 'Team') {
            categoryColorClass = 'text-emerald-glow';
        }

        if (item.type === 'quote') {
            // Render Quote Block (Fixed Height)
            html += `
                <div class="reveal h-80 w-full group">
                    <div class="glass-panel h-full w-full p-8 rounded-xl border border-gold/30 flex flex-col items-center justify-center text-center hover:bg-emerald-dark/40 transition duration-500">
                        <i class="fa-solid fa-quote-left text-4xl text-emerald-dark mb-4 group-hover:text-gold transition duration-300"></i>
                        <p class="font-heading text-lg md:text-xl text-beige italic leading-relaxed">
                            "${item.text}"
                        </p>
                        <div class="w-12 h-1 bg-gold mx-auto mt-6 mb-2"></div>
                        <span class="text-xs text-emerald-glow uppercase tracking-widest">${item.author}</span>
                    </div>
                </div>
            `;
        } else {
            // Render Image Block (Fixed Height)
            // Note the updated src path logic in case of error
            html += `
                <div class="reveal h-80 w-full">
                    <div class="relative group h-full w-full overflow-hidden rounded-xl border border-white/10">
                        <img src="${item.src}" 
                             alt="${item.title}"
                             onerror="this.src='https://placehold.co/600x400/012E34/D4AF37?text=Image+Not+Found'"
                             class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:grayscale-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                            <span class="${categoryColorClass} text-xs font-bold uppercase tracking-wider mb-1">${item.category}</span>
                            <h3 class="text-white font-heading text-xl font-bold">${item.title}</h3>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
    
    // Re-trigger observer for new elements so animations play
    setTimeout(() => {
        if(typeof observer !== 'undefined') {
            document.querySelectorAll('#past-glory-container .reveal').forEach((el) => observer.observe(el));
        }
    }, 100);
}

// Run the render function when script loads
renderPastGlory();