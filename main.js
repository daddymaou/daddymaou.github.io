// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2
});

// GSAP ScrollTrigger integration — single RAF, no duplicate
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800);
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: 'power2.out'
            });
            
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        });
        
        // Show cursor on page load
        setTimeout(() => {
            gsap.to([cursor, cursorDot], {
                opacity: 1,
                duration: 0.3
            });
        }, 1000);
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .skill-item, .project, .form-group input, .form-group textarea');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    width: 60,
                    height: 60,
                    backgroundColor: 'rgba(45, 45, 45, 0.1)',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    width: 12,
                    height: 12,
                    duration: 0.3
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    width: 40,
                    height: 40,
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    width: 8,
                    height: 8,
                    duration: 0.3
                });
            });
        });
    }
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        body.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Navigation scroll behavior — throttled to prevent layout thrashing
    const nav = document.querySelector('.nav');
    const navProgress = document.querySelector('.nav-progress');
    let navTimeout;
    
    lenis.on('scroll', ({ scroll, direction }) => {
        // Progress bar
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scroll / docHeight) * 100 : 0;
        navProgress.style.width = `${progress}%`;
        
        // Hide/show nav — throttled, uses Lenis direction
        if (!navTimeout) {
            navTimeout = setTimeout(() => {
                if (scroll > 100 && direction === 1) {
                    nav.classList.add('hidden');
                } else if (direction === -1) {
                    nav.classList.remove('hidden');
                }
                navTimeout = null;
            }, 50);
        }
        
        // Add background on scroll
        if (scroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // GSAP Animations
    // Hero animation
    gsap.from('.hero-name', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
    });
    
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
    });
    
    gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.1
    });
    
    gsap.from('.scroll-hint', {
        opacity: 0,
        duration: 1,
        delay: 1.5
    });
    
    // Scroll animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // About section animation
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Skills stagger animation
    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out'
    });
    
    // CV section animation
    gsap.from('.cv-container', {
        scrollTrigger: {
            trigger: '.cv',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Contact form animation
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.submit-button', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power3.out'
    });
    
    // Footer animation
    gsap.from('.footer-links a', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // ==========================================
    // SMOOTH PROJECT SLIDER
    // ==========================================
    const projectsContainer = document.getElementById('projects-container');
    const scrollbarThumb = document.querySelector('.scrollbar-thumb');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let momentumId;
    let lastX;
    let lastTime;
    
    // Update scrollbar
    function updateScrollbar() {
        if (!scrollbarThumb || !projectsContainer) return;
        const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        if (maxScroll <= 0) return;
        const scrollPercentage = projectsContainer.scrollLeft / maxScroll;
        const thumbWidth = (projectsContainer.clientWidth / projectsContainer.scrollWidth) * 100;
        scrollbarThumb.style.width = `${Math.max(thumbWidth, 10)}%`;
        scrollbarThumb.style.transform = `translateX(${scrollPercentage * (100 - thumbWidth)}%)`;
    }
    
    // Momentum scrolling
    function applyMomentum() {
        const friction = 0.95;
        const minVelocity = 0.05;
        
        function animateMomentum() {
            if (Math.abs(velocity) < minVelocity) {
                cancelAnimationFrame(momentumId);
                return;
            }
            
            projectsContainer.scrollLeft -= velocity * 15;
            velocity *= friction;
            updateScrollbar();
            
            momentumId = requestAnimationFrame(animateMomentum);
        }
        
        momentumId = requestAnimationFrame(animateMomentum);
    }
    
    // Drag start — prevents vertical scroll on touch devices
    function handleDragStart(e) {
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        isDragging = true;
        projectsContainer.style.cursor = 'grabbing';
        
        const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startX = clientX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
        
        velocity = 0;
        lastX = clientX;
        lastTime = Date.now();
        
        cancelAnimationFrame(momentumId);
    }
    
    // Drag move
    function handleDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const x = clientX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        
        projectsContainer.scrollLeft = scrollLeft - walk;
        
        // Calculate velocity
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        
        if (deltaTime > 0) {
            const deltaX = clientX - lastX;
            velocity = deltaX / deltaTime;
        }
        
        lastX = clientX;
        lastTime = currentTime;
        updateScrollbar();
    }
    
    // Drag end
    function handleDragEnd() {
        isDragging = false;
        projectsContainer.style.cursor = 'grab';
        
        if (Math.abs(velocity) > 0.1) {
            applyMomentum();
        }
    }
    
    // Mouse events
    projectsContainer.addEventListener('mousedown', handleDragStart);
    projectsContainer.addEventListener('mousemove', handleDragMove);
    projectsContainer.addEventListener('mouseup', handleDragEnd);
    projectsContainer.addEventListener('mouseleave', handleDragEnd);
    
    // Touch events
    projectsContainer.addEventListener('touchstart', handleDragStart, { passive: false });
    projectsContainer.addEventListener('touchmove', handleDragMove, { passive: false });
    projectsContainer.addEventListener('touchend', handleDragEnd);
    
    // Mouse wheel horizontal scroll — uses native scrollBy instead of fighting GSAP
    projectsContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            
            cancelAnimationFrame(momentumId);
            
            projectsContainer.scrollBy({
                left: e.deltaY * 1.5,
                behavior: 'smooth'
            });
        }
    }, { passive: false });
    
    // Initialize scrollbar and cursor
    projectsContainer.style.cursor = 'grab';
    updateScrollbar();
    
    // Update scrollbar on window resize
    window.addEventListener('resize', updateScrollbar);
    
    // Project hover animations
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            gsap.to(project, {
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(project.querySelector('.project-img'), {
                scale: 1.05,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
        
        project.addEventListener('mouseleave', () => {
            gsap.to(project, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(project.querySelector('.project-img'), {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    });
    
    // ==========================================
    // FIX: SMOOTH ANCHOR LINK SCROLLING
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    offset: -80,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    }
                });
            }
        });
    });
    
    // ==========================================
    // FIX: PAUSE LENIS ON FORM FOCUS (Mobile keyboard glitch)
    // ==========================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            lenis.stop();
        });
        
        input.addEventListener('blur', () => {
            lenis.start();
        });
    });
    
    // WhatsApp Form Submission
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm ? contactForm.querySelector('.submit-button') : null;
    
    if (contactForm && submitButton) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields before sending.');
                return;
            }
            
            // Improved phone validation
            const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
            const phoneRegex = /^\+?[0-9]{7,15}$/;
            if (!phoneRegex.test(cleanedPhone)) {
                alert('Please enter a valid phone number (7-15 digits).');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            const originalText = submitButton.querySelector('span').textContent;
            submitButton.querySelector('span').textContent = 'Opening WhatsApp...';
            submitButton.disabled = true;
            submitButton.classList.add('clicked');
            
            const whatsappMessage = `*New Message from Portfolio*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A%0A*Message:*%0A${encodeURIComponent(message)}%0A%0A_Message sent from maou portfolio_`;
            
            const yourWhatsAppNumber = '2348154899093';
            const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${whatsappMessage}`;
            
            window.open(whatsappURL, '_blank');
            
            setTimeout(() => {
                submitButton.querySelector('span').textContent = 'Message Sent';
                submitButton.style.backgroundColor = '#25D366';
                
                contactForm.reset();
                
                const messageTextarea = document.getElementById('message');
                if (messageTextarea) {
                    messageTextarea.style.height = 'auto';
                }
                
                // Restart Lenis after form reset (in case it was stopped)
                lenis.start();
                
                setTimeout(() => {
                    submitButton.querySelector('span').textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.classList.remove('clicked');
                    submitButton.style.backgroundColor = '';
                }, 4000);
            }, 1500);
        });
    }
    
    // Dynamic textarea height
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
        
        messageTextarea.dispatchEvent(new Event('input'));
    }
    
    // Skill hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
        
        item.addEventListener('mouseleave', () => {
            setTimeout(() => {
                item.classList.remove('active');
            }, 300);
        });
    });
    
    // Image lazy loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});
