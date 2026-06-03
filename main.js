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
    // PROJECTS NAVIGATION — Clean buttons, no drag
    // ==========================================
    const projectsContainer = document.getElementById('projects-container');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    const dotsContainer = document.getElementById('projects-dots');
    
    if (projectsContainer && prevBtn && nextBtn) {
        const projects = projectsContainer.querySelectorAll('.project');
        let currentIndex = 0;
        
        // Create dots
        if (dotsContainer) {
            projects.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.classList.add('project-dot');
                dot.setAttribute('aria-label', `Project ${i + 1}`);
                dot.addEventListener('click', () => scrollToProject(i));
                dotsContainer.appendChild(dot);
            });
        }
        
        const allDots = dotsContainer ? dotsContainer.querySelectorAll('.project-dot') : [];
        
        function updateButtons() {
            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex >= projects.length - 1;
            
            allDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
        
        function scrollToProject(index) {
            if (index < 0 || index >= projects.length) return;
            currentIndex = index;
            
            const project = projects[index];
            const containerWidth = projectsContainer.clientWidth;
            const projectLeft = project.offsetLeft;
            const projectWidth = project.offsetWidth;
            const scrollTarget = projectLeft - (containerWidth - projectWidth) / 2;
            
            projectsContainer.scrollTo({
                left: Math.max(0, scrollTarget),
                behavior: 'smooth'
            });
            
            updateButtons();
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) scrollToProject(currentIndex - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < projects.length - 1) scrollToProject(currentIndex + 1);
        });
        
        // Update active dot on manual scroll
        let scrollTimeout;
        projectsContainer.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const containerCenter = projectsContainer.scrollLeft + projectsContainer.clientWidth / 2;
                
                let closestIndex = 0;
                let closestDistance = Infinity;
                
                projects.forEach((project, i) => {
                    const projectCenter = project.offsetLeft + project.offsetWidth / 2;
                    const distance = Math.abs(containerCenter - projectCenter);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIndex = i;
                    }
                });
                
                currentIndex = closestIndex;
                updateButtons();
            }, 100);
        });
        
        // Init
        updateButtons();
    }
    
    // ==========================================
    // SMOOTH ANCHOR LINK SCROLLING
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
    // PAUSE LENIS ON FORM FOCUS (Mobile keyboard fix)
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
