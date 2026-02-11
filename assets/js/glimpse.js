// ==========================================
//  CONFIGURATION: HIERARCHICAL GRID (Bento Style)
// ==========================================

const galleryImages = [
    // 1. Inauguration / Opening
    {
        type: 'image',
        src: 'assets/images/glimpses/img13.jpg',
        category: 'Inaugration',
        title: 'Start of Unicorn 2.0',
        span: 'md:col-span-2 md:row-span-1'
    },

    // 2. Event Begins / Ideas
    {
        type: 'image',
        src: 'assets/images/glimpses/img11.jpg',
        category: 'Events',
        title: 'And the fun Begins',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img12.jpg',
        category: 'Events',
        title: 'where ideas meet',
        span: 'md:col-span-1 md:row-span-1'
    },

    // 3. Vibe / Energy
    {
        type: 'image',
        src: 'assets/images/glimpses/img7.jpg',
        category: 'Vibe',
        title: 'The Energy of Unicorn',
        span: 'md:col-span-2 md:row-span-2'
    },

    // 4. Networking / Meet
    {
        type: 'image',
        src: 'assets/images/glimpses/img10.png',
        category: 'Meet',
        title: 'Netwrking Time',
        span: 'md:col-span-1 md:row-span-1'
    },

    // 5. Organizers / Team
    {
        type: 'image',
        src: 'assets/images/glimpses/img6.png',
        category: 'Team',
        title: 'The Organizers',
        span: 'md:col-span-2 md:row-span-1'
    },

    // 6. Formal Moments
    {
        type: 'image',
        src: 'assets/images/glimpses/img8.jpg',
        category: 'Unicorn 2.0',
        title: 'Formal Picture',
        span: 'md:col-span-1 md:row-span-1'
    },

    // 7. Winners / Results
    {
        type: 'image',
        src: 'assets/images/glimpses/img1.jpg',
        category: 'Winners',
        title: 'The Finalists',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img2.jpg',
        category: 'Winners',
        title: 'Achievement Unlocked',
        span: 'md:col-span-1 md:row-span-1'
    },

    // 8. Awards
    {
        type: 'image',
        src: 'assets/images/glimpses/img4.jpg',
        category: 'Awards',
        title: 'Winning Moments',
        span: 'md:col-span-1 md:row-span-1'
    },

    // 9. Celebration / End
    {
        type: 'image',
        src: 'assets/images/glimpses/img9.jpg',
        category: 'Celebration',
        title: 'Fun after event ends',
        span: 'md:col-span-1 md:row-span-1'
    }
];


// ==========================================
//  RENDER LOGIC
// ==========================================

function renderGallery() {
    const container = document.getElementById('gallery-container');
    if(!container) return;
    
    let html = '';

    galleryImages.forEach((item, index) => {
        let categoryColorClass = 'text-gold';
        if (item.category === 'Audience' || item.category === 'Team') {
            categoryColorClass = 'text-emerald-glow';
        }

        // Default Span if not specified
        const spanClass = item.span || 'md:col-span-1 md:row-span-1';

        if (item.type === 'quote') {
            // Render Quote Block
            html += `
                <div class="reveal ${spanClass} w-full h-full group">
                    <div class="glass-panel w-full h-full p-8 rounded-xl border border-gold/30 flex flex-col items-center justify-center text-center hover:bg-emerald-dark/40 transition duration-500">
                        <i class="fa-solid fa-quote-left text-3xl md:text-4xl text-emerald-dark mb-4 group-hover:text-gold transition duration-300"></i>
                        <p class="font-heading text-lg md:text-xl text-beige italic leading-relaxed">
                            "${item.text}"
                        </p>
                        <div class="w-12 h-1 bg-gold mx-auto mt-6 mb-2"></div>
                        <span class="text-xs text-emerald-glow uppercase tracking-widest">${item.author}</span>
                    </div>
                </div>
            `;
        } else {
            // Render Image Block
            html += `
                <div class="reveal ${spanClass} w-full h-full">
                    <div class="relative group w-full h-full overflow-hidden rounded-xl border border-white/10">
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

    // Re-attach observer to new elements
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
}

renderGallery();

function playAfterMovie() {
    const video = document.getElementById('afterMovie');
    const cover = document.getElementById('video-cover');
    const overlay = document.getElementById('video-overlay');

    cover.classList.add('hidden');
    overlay.classList.add('hidden');
    video.classList.remove('hidden');
}
