/* PERFECT MOBILE OPTIMIZATION WITH GLASSMORPHIC SIDEBAR */
@media (max-width: 768px) {
    :root {
        --spacing-xs: 0.4rem;
        --spacing-sm: 0.75rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 3rem;
        --spacing-xl: 4rem;
        --glass-bg: rgba(255, 255, 255, 0.12);
        --glass-border: rgba(255, 255, 255, 0.15);
    }

    [data-theme="dark"] {
        --glass-bg: rgba(0, 0, 0, 0.35);
        --glass-border: rgba(255, 255, 255, 0.08);
    }

    /* Base Typography for Mobile */
    h1 {
        font-size: clamp(2.5rem, 12vw, 4rem);
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: clamp(1.75rem, 8vw, 2.25rem);
        line-height: 1.2;
    }

    h3 {
        font-size: 1.25rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
    }

    /* ============================================
       DESKTOP NAVIGATION - HIDE ON MOBILE
       ============================================ */
    .nav-links-glass {
        display: none !important;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: flex !important;
        align-items: center;
        justify-content: center;
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        border: 1px solid var(--glass-border);
        border-radius: 50%;
        width: 44px;
        height: 44px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: var(--color-text);
    }

    .mobile-menu-btn i {
        font-size: 24px;
    }

    .mobile-menu-btn:hover,
    .mobile-menu-btn:active {
        background: var(--color-accent);
        color: white;
        transform: scale(1.05);
    }

    /* ============================================
       GLASSMORPHIC SIDEBAR - MOBILE ONLY
       ============================================ */
    .mobile-sidebar {
        position: fixed;
        top: 0;
        left: -280px;
        width: 280px;
        height: 100vh;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 2000;
        transition: left 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        padding: 80px 0 20px;
        box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
    }

    [data-theme="dark"] .mobile-sidebar {
        background: rgba(10, 10, 10, 0.95);
        border-right: 1px solid rgba(255, 255, 255, 0.08);
    }

    .mobile-sidebar.active {
        left: 0;
    }

    /* Sidebar Header */
    .sidebar-header {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 0 20px 30px 20px;
        color: var(--color-text);
        border-bottom: 1px solid var(--glass-border);
        margin-bottom: 20px;
    }

    .sidebar-header .logo-icon {
        font-size: 30px;
        color: var(--color-accent);
    }

    .sidebar-header h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
    }

    /* Sidebar Navigation Links */
    .sidebar-nav-links {
        list-style: none;
        padding: 0 15px;
    }

    .sidebar-nav-links li {
        margin-bottom: 8px;
    }

    .sidebar-link {
        display: flex;
        align-items: center;
        gap: 15px;
        color: var(--color-text);
        text-decoration: none;
        padding: 12px 15px;
        border-radius: 12px;
        transition: all 0.3s ease;
        font-size: 1rem;
        font-weight: 500;
    }

    .sidebar-link i {
        font-size: 24px;
    }

    .sidebar-link:hover,
    .sidebar-link:active {
        background: rgba(0, 0, 0, 0.05);
        color: var(--color-accent);
        transform: translateX(5px);
    }

    [data-theme="dark"] .sidebar-link:hover,
    [data-theme="dark"] .sidebar-link:active {
        background: rgba(255, 255, 255, 0.1);
    }

    /* Sidebar Theme Toggle */
    .sidebar-theme-toggle {
        display: flex;
        align-items: center;
        gap: 15px;
        width: 100%;
        background: transparent;
        border: none;
        color: var(--color-text);
        padding: 12px 15px;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 10px;
    }

    .sidebar-theme-toggle i {
        font-size: 24px;
    }

    .sidebar-theme-toggle:hover,
    .sidebar-theme-toggle:active {
        background: rgba(0, 0, 0, 0.05);
        color: var(--color-accent);
        transform: translateX(5px);
    }

    [data-theme="dark"] .sidebar-theme-toggle:hover,
    [data-theme="dark"] .sidebar-theme-toggle:active {
        background: rgba(255, 255, 255, 0.1);
    }

    /* Sidebar Overlay */
    .sidebar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        z-index: 1999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .sidebar-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    /* Hero Section - Mobile */
    .hero {
        min-height: 90vh;
        padding: 0 1rem;
    }

    .hero-name {
        margin-bottom: 0.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
        margin-bottom: var(--spacing-md);
        min-height: 1.75rem;
    }

    .cta-button {
        padding: 0.75rem 1.25rem;
        font-size: 0.9rem;
        gap: 0.5rem;
    }

    .scroll-hint {
        bottom: 2rem;
    }

    .scroll-line {
        height: 40px;
    }

    /* About Section - Mobile */
    .about {
        padding: var(--spacing-lg) 1rem;
    }

    .about-container {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .about-content p {
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .about-intro {
        font-size: 1.125rem !important;
        margin-bottom: 1rem !important;
    }

    .image-frame {
        padding-top: 80%;
        margin-top: 1rem;
    }

    /* Skills Section - Mobile */
    .skills {
        padding: var(--spacing-lg) 1rem;
    }

    .skills-list {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }

    .skill-item {
        padding: 0.875rem 0;
    }

    .skill-item:hover {
        padding-left: 0.5rem;
    }

    .skill-name {
        font-size: 1rem;
    }

    .skill-desc {
        font-size: 0.85rem;
    }

    /* Projects Section - Mobile */
    .projects {
        padding: var(--spacing-lg) 0;
    }

    .projects-header {
        padding: 0 1rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .scroll-hint-horizontal {
        font-size: 0.8rem;
    }

    .scroll-text {
        display: inline-block;
    }

    .scroll-hint-horizontal svg {
        width: 14px;
        height: 14px;
    }

    .projects-wrapper {
        overflow: visible;
        position: relative;
    }

    .projects-container {
        padding: 1rem 1rem;
        gap: 1rem;
        scroll-snap-type: x mandatory;
        cursor: grab;
    }

    /* Glassmorphic Project Cards on Mobile */
    .project {
        flex: 0 0 calc(85vw - 2rem);
        min-width: 260px;
        min-height: 400px;
        scroll-snap-align: start;
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        border: 1px solid var(--glass-border);
        border-radius: 20px;
    }

    /* Mobile Active/Inactive States */
    .project.active {
        transform: scale(1);
        backdrop-filter: blur(16px);
        background: rgba(255, 255, 255, 0.18);
    }

    .project.inactive {
        transform: scale(0.92) translateY(8px);
        filter: blur(2px);
        opacity: 0.65;
    }

    [data-theme="dark"] .project.active {
        background: rgba(0, 0, 0, 0.45);
    }

    .project-image {
        min-height: 180px;
        height: 45%;
    }

    .project-img {
        object-fit: cover;
    }

    .project-info {
        padding: 1rem;
    }

    .project-year {
        font-size: 0.7rem;
    }

    .project-title {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    .project-desc {
        font-size: 0.85rem;
        margin-bottom: 0.875rem;
        line-height: 1.4;
    }

    .project-link {
        font-size: 0.85rem;
    }

    /* Slider Arrows on Mobile */
    .slider-arrows {
        padding: 0 1rem;
        margin-bottom: 0.5rem;
        justify-content: center;
    }

    .slider-arrow {
        width: 40px;
        height: 40px;
    }

    .slider-arrow svg {
        width: 18px;
        height: 18px;
    }

    /* Scrollbar on Mobile */
    .projects-scrollbar {
        max-width: 80%;
        margin: 1rem auto 0;
        height: 2px;
    }

    /* CV Section - Mobile */
    .cv {
        padding: var(--spacing-lg) 1rem;
    }

    .cv-title {
        font-size: 1.5rem;
    }

    .cv-desc {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }

    .cv-button {
        font-size: 1rem;
    }

    /* Contact Section - Mobile */
    .contact {
        padding: var(--spacing-lg) 1rem;
    }

    .contact-form {
        gap: 1.25rem;
    }

    .form-group {
        padding-top: 1rem;
    }

    .form-group label {
        font-size: 0.9rem;
        top: 1rem;
    }

    .form-group input,
    .form-group textarea {
        font-size: 0.95rem;
    }

    .submit-button {
        width: 100%;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        font-size: 0.9rem;
    }

    /* Footer - Mobile */
    .footer {
        padding: var(--spacing-md) 1rem;
        margin-top: var(--spacing-lg);
    }

    .footer-container {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .footer-links {
        order: 2;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .footer-link {
        font-size: 0.85rem;
    }

    .footer-copyright {
        order: 3;
        font-size: 0.8rem;
    }
}

/* Small Mobile Devices (iPhone SE, etc.) */
@media (max-width: 375px) {
    :root {
        --spacing-sm: 0.5rem;
        --spacing-md: 1rem;
        --spacing-lg: 2rem;
    }

    .hero-name {
        font-size: clamp(2rem, 10vw, 3rem);
    }

    .hero-subtitle {
        font-size: 0.9rem;
    }

    .mobile-sidebar {
        width: 260px;
    }

    .project {
        flex: 0 0 calc(90vw - 2rem);
        min-width: 240px;
        min-height: 360px;
    }

    .project-image {
        min-height: 160px;
    }

    .project-title {
        font-size: 1rem;
    }

    .project-desc {
        font-size: 0.8rem;
    }

    .footer-links {
        gap: 0.75rem;
    }

    .footer-link {
        font-size: 0.8rem;
    }

    .section-title {
        font-size: 1.5rem;
    }
}

/* Tablet Portrait */
@media (min-width: 769px) and (max-width: 1024px) {
    .about-container {
        gap: 2rem;
    }

    .project {
        flex: 0 0 calc(70vw - 2rem);
        min-width: 380px;
    }

    .skills-list {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-container {
        padding: 2rem 5%;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .skill-item:hover {
        padding-left: 0;
    }
    
    .skill-item:active {
        padding-left: 0.5rem;
    }
    
    .skill-desc {
        opacity: 1;
        height: auto;
        margin-top: 0.25rem;
    }
    
    .cta-button:active {
        transform: translateY(-2px);
        background-color: var(--color-accent);
    }
    
    .project-link:active {
        gap: 0.75rem;
    }
    
    .submit-button:active {
        background-color: var(--color-accent);
    }

    /* Improve touch targets */
    .sidebar-link,
    .sidebar-theme-toggle,
    .mobile-menu-btn,
    .cta-button,
    .project-link,
    .cv-button,
    .submit-button,
    .footer-link {
        min-height: 44px;
        display: flex;
        align-items: center;
    }

    /* Better touch scrolling for projects */
    .projects-container {
        cursor: grab;
        -webkit-overflow-scrolling: touch;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .mobile-sidebar,
    .sidebar-overlay {
        transition: none;
    }
}

/* Landscape Mode for Mobile */
@media (max-width: 768px) and (orientation: landscape) {
    .hero {
        min-height: 100vh;
    }
    
    .project {
        min-height: 320px;
    }
    
    .project-image {
        min-height: 140px;
    }
    
    .skills-list {
        gap: 0.5rem;
    }
    
    .skill-item {
        padding: 0.5rem 0;
    }

    .mobile-sidebar {
        width: 260px;
    }
}

/* Fix for notch/display cutouts */
@supports (padding: max(0px)) {
    .nav {
        padding-left: max(0.5rem, env(safe-area-inset-left));
        padding-right: max(0.5rem, env(safe-area-inset-right));
        top: max(0.5rem, env(safe-area-inset-top));
    }
    
    .hero,
    .about,
    .skills,
    .projects,
    .cv,
    .contact,
    .footer {
        padding-left: max(1rem, env(safe-area-inset-left));
        padding-right: max(1rem, env(safe-area-inset-right));
    }

    .mobile-sidebar {
        padding-top: max(20px, env(safe-area-inset-top));
    }
}
