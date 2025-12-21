// ==========================================
//  CONFIGURATION: HIERARCHICAL GRID (Bento Style)
// ==========================================

const galleryImages = [
    {
        type: 'image',
        src: 'assets/images/glimpses/img7.jpg', // Street/Entrance energy
        category: 'Vibe',
        title: 'The Energy of Unicorn',
        span: 'md:col-span-2 md:row-span-2' // LARGE HERO ITEM
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img8.jpg', // Formal stage group
        category: 'Inauguration',
        title: 'Official Launch',
        span: 'md:col-span-2 md:row-span-2' // TALL ITEM
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img4.jpg', // Small group trophy
        category: 'Awards',
        title: 'Winning Moments',
        span: 'md:col-span-1 md:row-span-1' // STANDARD
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img2.jpg', // 2nd Runner up
        category: 'Winners',
        title: 'Achievement Unlocked',
        span: 'md:col-span-1 md:row-span-1' // STANDARD
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img5.jpg', // Large team pose
        category: 'Team',
        title: 'The Organizers',
        span: 'md:col-span-2 md:row-span-1' // WIDE IMAGE
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img1.jpg', // 1st Runner up
        category: 'Winners',
        title: 'The Finalists',
        span: 'md:col-span-1 md:row-span-1' // STANDARD
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img3.jpg', // 1st Runner up (alt)
        category: 'Victory',
        title: 'Pure Joy',
        span: 'md:col-span-1 md:row-span-1' // STANDARD
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img6.jpg', // Group peace signs
        category: 'Community',
        title: 'Unicorn Family',
        span: 'md:col-span-1 md:row-span-1' // STANDARD
    },
    {
        type: 'image',
        src: 'assets/images/glimpses/img9.jpg', // Massive group celebration
        category: 'Grand Finale',
        title: 'Reliving the Glory',
        span: 'md:col-span-2 md:row-span-2' // LARGE FOOTER IMAGE
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