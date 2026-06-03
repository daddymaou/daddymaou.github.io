// ============================================
// LENIS SMOOTH SCROLL
// ============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));

// ============================================
// DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initTheme();
    initNavbar();
    initMobileMenu();
    initCustomCursor();
    initScrollAnimations();
    initProjectSlider();
    initForm();
    initYear();
});

// ============================================
// LOADER
// ============================================
function initLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 800);
    }
}

// ============================================
// CURRENT YEAR
// ============================================
function initYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
    const body = document.body;
    
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved) {
        body.setAttribute('data-theme', saved);
    } else if (prefersDark) {
        body.setAttribute('data-theme', 'dark');
    }
    
    const toggleTheme = () => {
        const current = body.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        
        if (sidebarThemeToggle) {
            const icon = sidebarThemeToggle.querySelector('i');
            if (icon) {
                icon.textContent = next === 'light' ? 'dark_mode' : 'light_mode';
                const span = sidebarThemeToggle.querySelector('span');
                if (span) span.textContent = next === 'light' ? 'Dark Mode' : 'Light Mode';
            }
        }
    };
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (sidebarThemeToggle) sidebarThemeToggle.addEventListener('click', toggleTheme);
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    const nav = document.querySelector('.nav');
    const progress = document.querySelector('.nav-progress');
    
    lenis.on('scroll', ({ scroll }) => {
        if (progress) {
            const percent = (scroll / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progress.style.width = `${percent}%`;
        }
        
        if (nav) {
            if (scroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
    
    document.querySelectorAll('.nav-link, .nav-logo').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                }
            }
        });
    });
}

// ============================================
// MOBILE SIDEBAR
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const body = document.body;
    
    if (!menuBtn || !sidebar || !overlay) return;
    
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
    
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    overlay.addEventListener('click', closeMenu);
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                closeMenu();
                const target = document.querySelector(href);
                if (target) {
                    setTimeout(() => {
                        lenis.scrollTo(target, { offset: -80, duration: 1.2 });
                    }, 300);
                }
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.cursor-dot');
    
    if (!cursor || !dot) return;
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        dot.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });
    
    setTimeout(() => {
        gsap.to([cursor, dot], { opacity: 1, duration: 0.3 });
    }, 1000);
    
    const hoverElements = document.querySelectorAll('a, button, .skill-item, .project, input, textarea, .sidebar-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { width: 60, height: 60, backgroundColor: 'rgba(45, 45, 45, 0.1)', duration: 0.3 });
            gsap.to(dot, { width: 12, height: 12, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { width: 40, height: 40, backgroundColor: 'transparent', duration: 0.3 });
            gsap.to(dot, { width: 8, height: 8, duration: 0.3 });
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    gsap.from('.hero-name', { y: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
    gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
    gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 });
    gsap.from('.scroll-hint', { opacity: 0, duration: 1, delay: 1.3 });
    
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none reverse' },
            y: 40, opacity: 0, duration: 0.7, ease: 'power3.out'
        });
    });
    
    gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about', start: 'top 75%', toggleActions: 'play none none reverse' },
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out'
    });
    gsap.from('.about-image', {
        scrollTrigger: { trigger: '.about', start: 'top 75%', toggleActions: 'play none none reverse' },
        x: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
    });
    
    gsap.from('.skill-item', {
        scrollTrigger: { trigger: '.skills', start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out'
    });
    
    gsap.from('.cv-container', {
        scrollTrigger: { trigger: '.cv', start: 'top 80%', toggleActions: 'play none none reverse' },
        scale: 0.95, opacity: 0, duration: 0.7, ease: 'power3.out'
    });
    
    gsap.from('.form-group', {
        scrollTrigger: { trigger: '.contact', start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 30, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out'
    });
    gsap.from('.submit-button', {
        scrollTrigger: { trigger: '.contact', start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 30, opacity: 0, duration: 0.5, delay: 0.3, ease: 'power2.out'
    });
    
    gsap.from('.footer-links a', {
        scrollTrigger: { trigger: '.footer', start: 'top 90%', toggleActions: 'play none none reverse' },
        y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out'
    });
}

// ============================================
// PROJECT SLIDER - BUTTONS ONLY (NO DRAG)
// ============================================
function initProjectSlider() {
    const container = document.getElementById('projects-container');
    const prevBtn = document.getElementById('prevArrow');
    const nextBtn = document.getElementById('nextArrow');
    const projects = document.querySelectorAll('.project');
    
    if (!container || !projects.length) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    
    // Get visible projects count based on screen width
    function getVisibleCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }
    
    // Update active project classes
    function updateActiveProjects() {
        const visibleCount = getVisibleCount();
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        projects.forEach((project, index) => {
            const projectRect = project.getBoundingClientRect();
            const projectCenter = projectRect.left + projectRect.width / 2;
            const distance = Math.abs(containerCenter - projectCenter);
            const threshold = projectRect.width * 0.6;
            
            if (distance < threshold) {
                project.classList.add('active');
                project.classList.remove('inactive');
            } else if (Math.abs(index - currentIndex) <= visibleCount) {
                project.classList.remove('active');
                project.classList.add('inactive');
            } else {
                project.classList.remove('active', 'inactive');
            }
        });
    }
    
    // Scroll to specific project
    function scrollToProject(index, direction = 'next') {
        if (isAnimating) return;
        if (index < 0) index = 0;
        if (index >= projects.length) index = projects.length - 1;
        
        isAnimating = true;
        currentIndex = index;
        
        const targetProject = projects[currentIndex];
        const scrollAmount = targetProject.offsetLeft - (container.clientWidth / 2) + (targetProject.clientWidth / 2);
        
        gsap.to(container, {
            scrollLeft: scrollAmount,
            duration: 0.6,
            ease: 'power3.out',
            onUpdate: updateActiveProjects,
            onComplete: () => {
                isAnimating = false;
                updateButtonsState();
            }
        });
    }
    
    // Update button states
    function updateButtonsState() {
        if (prevBtn) {
            const isAtStart = currentIndex === 0;
            prevBtn.disabled = isAtStart;
            prevBtn.style.opacity = isAtStart ? '0.4' : '1';
            prevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
        }
        
        if (nextBtn) {
            const isAtEnd = currentIndex === projects.length - 1;
            nextBtn.disabled = isAtEnd;
            nextBtn.style.opacity = isAtEnd ? '0.4' : '1';
            nextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
        }
    }
    
    // Next project
    function nextProject() {
        if (isAnimating) return;
        if (currentIndex < projects.length - 1) {
            scrollToProject(currentIndex + 1, 'next');
        }
    }
    
    // Previous project
    function prevProject() {
        if (isAnimating) return;
        if (currentIndex > 0) {
            scrollToProject(currentIndex - 1, 'prev');
        }
    }
    
    // Find current index based on scroll position
    function updateCurrentIndex() {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        projects.forEach((project, index) => {
            const projectRect = project.getBoundingClientRect();
            const projectCenter = projectRect.left + projectRect.width / 2;
            const distance = Math.abs(containerCenter - projectCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        
        if (closestIndex !== currentIndex) {
            currentIndex = closestIndex;
            updateButtonsState();
        }
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevProject);
    if (nextBtn) nextBtn.addEventListener('click', nextProject);
    
    // Handle scroll to update current index
    container.addEventListener('scroll', () => {
        updateCurrentIndex();
        updateActiveProjects();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        setTimeout(() => {
            scrollToProject(currentIndex);
            updateActiveProjects();
            updateButtonsState();
        }, 100);
    });
    
    // Initialize
    setTimeout(() => {
        // Find the centered project on load
        updateCurrentIndex();
        updateActiveProjects();
        updateButtonsState();
    }, 100);
}

// ============================================
// CONTACT FORM
// ============================================
function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitBtn = form.querySelector('.submit-button');
    const messageField = document.getElementById('message');
    
    if (messageField) {
        messageField.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }
        
        const originalText = submitBtn?.querySelector('span')?.textContent;
        if (submitBtn) {
            submitBtn.querySelector('span').textContent = 'Opening WhatsApp...';
            submitBtn.disabled = true;
            submitBtn.classList.add('clicked');
        }
        
        const msg = `*New Message from Portfolio*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
        window.open(`https://wa.me/2348154899093?text=${msg}`, '_blank');
        
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.querySelector('span').textContent = 'Message Sent';
                submitBtn.style.backgroundColor = '#25D366';
            }
            form.reset();
            if (messageField) messageField.style.height = 'auto';
            
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('clicked');
                    submitBtn.style.backgroundColor = '';
                }
            }, 4000);
        }, 1500);
    });
}
