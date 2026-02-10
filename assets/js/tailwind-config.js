tailwind.config = {
    theme: {
        extend: {
            colors: {
                pitch: '#050505',
                emerald: { 
                    DEFAULT: '#047857', 
                    dark: '#012E34', 
                    glow: '#10B981' 
                },
                beige: '#F0EAD6',
                gold: '#D4AF37',       // Premium Metallic Gold
                cyber: '#00ff41',      // Hacker Green
                neon: '#ff003c'        // Cyberpunk Red
            },
            fontFamily: {
                heading: ['Cinzel', 'serif'],
                body: ['Inter', 'sans-serif'],
                gaming: ['Orbitron', 'sans-serif'],
                retro: ['VT323', 'monospace'],
                pixel: ['"Press Start 2P"', 'cursive'],
            },
            backgroundImage: {
                'premium-gradient': 'radial-gradient(circle at 50% 50%, #012E34 0%, #050505 80%)',
                'grid-pattern': 'linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'shine': 'shine 3s linear infinite',
                'fade-up': 'fadeUp 1s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pop-in': 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                'scroll-left': 'scrollLeft 30s linear infinite',
                'scroll-right': 'scrollRight 30s linear infinite',
                'grid-move': 'gridMove 20s linear infinite',
            },
            keyframes: {
                float: { 
                    '0%, 100%': { transform: 'translateY(0)' }, 
                    '50%': { transform: 'translateY(-20px)' } 
                },
                shine: { 
                    '0%': { backgroundPosition: '200% center' }, 
                    '100%': { backgroundPosition: '-200% center' } 
                },
                fadeUp: { 
                    '0%': { opacity: '0', transform: 'translateY(40px)' }, 
                    '100%': { opacity: '1', transform: 'translateY(0)' } 
                },
                popIn: { 
                    '0%': { transform: 'scale(0.9)', opacity: '0' }, 
                    '100%': { transform: 'scale(1)', opacity: '1' } 
                },
                scrollLeft: { 
                    '0%': { transform: 'translateX(0)' }, 
                    '100%': { transform: 'translateX(-50%)' } 
                },
                scrollRight: { 
                    '0%': { transform: 'translateX(-50%)' }, 
                    '100%': { transform: 'translateX(0)' } 
                },
                gridMove: {
                    '0%': { transform: 'perspective(500px) rotateX(60deg) translateY(0)' },
                    '100%': { transform: 'perspective(500px) rotateX(60deg) translateY(50px)' },
                }
            }
        }
    }
}