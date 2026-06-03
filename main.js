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

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger integration
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
    
    // Navigation scroll behavior
    const nav = document.querySelector('.nav');
    const navProgress = document.querySelector('.nav-progress');
    let lastScroll = 0;
    
    lenis.on('scroll', ({ scroll }) => {
        // Progress bar
        const progress = (scroll / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        navProgress.style.width = `${progress}%`;
        
        // Hide/show nav
        if (scroll > lastScroll && scroll > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        
        // Add background on scroll
        if (scroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = scroll;
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
        if (!scrollbarThumb) return;
        const scrollPercentage = projectsContainer.scrollLeft / (projectsContainer.scrollWidth - projectsContainer.clientWidth);
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
    
    // Drag start
    function handleDragStart(e) {
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
    
    // Mouse wheel horizontal scroll
    projectsContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            
            cancelAnimationFrame(momentumId);
            
            const scrollAmount = e.deltaY * 1.5;
            const startScroll = projectsContainer.scrollLeft;
            const targetScroll = startScroll + scrollAmount;
            
            gsap.to(projectsContainer, {
                scrollLeft: targetScroll,
                duration: 0.8,
                ease: 'power2.out',
                onUpdate: updateScrollbar
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
    
    // Smooth scroll for anchor links
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
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        });
    });
    
    // WhatsApp Form Submission
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm ? contactForm.querySelector('.submit-button') : null;
    
    if (contactForm && submitButton) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields before sending.');
                return;
            }
            
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                alert('Please enter a valid phone number.');
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
            
            const yourWhatsAppNumber = '2349037471667';
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
// ==========================================
// ACTIVE PROJECT DETECTION (Glassmorphic Effect)
// ==========================================
function updateActiveProjects() {
    const projects = document.querySelectorAll('.project');
    const container = projectsContainer;
    
    if (!projects.length || !container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + (containerRect.width / 2);
    
    projects.forEach(project => {
        const projectRect = project.getBoundingClientRect();
        const projectCenter = projectRect.left + (projectRect.width / 2);
        const distanceFromCenter = Math.abs(containerCenter - projectCenter);
        const threshold = projectRect.width * 0.6; // 60% of project width as threshold
        
        // Check if project is in viewport
        const isInViewport = projectRect.right > containerRect.left && 
                             projectRect.left < containerRect.right;
        
        if (distanceFromCenter < threshold && isInViewport) {
            // This is the active (centered) project
            project.classList.add('active');
            project.classList.remove('inactive');
        } else if (isInViewport) {
            // Inactive but visible projects
            project.classList.remove('active');
            project.classList.add('inactive');
        } else {
            // Projects far outside viewport
            project.classList.remove('active', 'inactive');
        }
    });
}

// Add scroll detection for projects
projectsContainer.addEventListener('scroll', () => {
    updateActiveProjects();
    updateScrollbar();
});

// Update on window resize
window.addEventListener('resize', () => {
    updateActiveProjects();
});

// Initial call to set active projects
setTimeout(() => {
    updateActiveProjects();
}, 100);

// Update active projects when scrolling stops (for smoother experience)
let scrollTimeout;
projectsContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveProjects();
    }, 100);
});

// Optional: Snap to nearest project on scroll end
function snapToNearestProject() {
    const projects = document.querySelectorAll('.project');
    const container = projectsContainer;
    
    if (!projects.length) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + (containerRect.width / 2);
    
    let closestProject = null;
    let closestDistance = Infinity;
    
    projects.forEach(project => {
        const projectRect = project.getBoundingClientRect();
        const projectCenter = projectRect.left + (projectRect.width / 2);
        const distance = Math.abs(containerCenter - projectCenter);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestProject = project;
        }
    });
    
    if (closestProject && closestDistance < 200) {
        const scrollAmount = closestProject.offsetLeft - (container.clientWidth / 2) + (closestProject.clientWidth / 2);
        
        gsap.to(container, {
            scrollLeft: scrollAmount,
            duration: 0.5,
            ease: 'power2.out',
            onUpdate: updateActiveProjects
        });
    }
}

// Add snap on scroll end
projectsContainer.addEventListener('scrollend', () => {
    snapToNearestProject();
});

// For browsers that don't support scrollend
projectsContainer.addEventListener('touchend', () => {
    setTimeout(snapToNearestProject, 150);
});

projectsContainer.addEventListener('mouseup', () => {
    setTimeout(snapToNearestProject, 150);
});

// Override the existing drag end to include snap
const originalDragEnd = handleDragEnd;
window.handleDragEnd = function() {
    if (originalDragEnd) originalDragEnd();
    setTimeout(snapToNearestProject, 150);
};
