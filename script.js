/* ==========================================
   Portfolio JavaScript
   Smooth scrolling, nav highlighting,
   mobile menu, scroll reveal animations
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Elements
    // ==========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');
    const revealElements = document.querySelectorAll('.section-label, .section-heading, .timeline-item, .project-card, .education-card, .about-text, .about-highlights, .contact-description, .contact-links, .about-image');
    const revealElements = document.querySelectorAll('.section-label, .section-heading, .timeline-item, .project-card, .education-card, .about-text, .about-highlights, .contact-description, .contact-links, .about-image, .skill-category');
    
    // ==========================================
    // Navbar scroll effect
    // ==========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Check on load

    // ==========================================
    // Mobile menu toggle
    // ==========================================
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ==========================================
    // Smooth scroll for navigation links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Active section highlighting in navbar
    // ==========================================
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // If at top, highlight About (or remove all active if preferred)
        if (window.scrollY < 100) {
            navLinkItems.forEach(link => link.classList.remove('active'));
        }
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Check on load

    // ==========================================
    // Scroll reveal animation
    // ==========================================
    function revealOnScroll() {
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                // Add stagger delay for grouped elements
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 80);
            }
        });
    }

    // Add reveal class to elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // ==========================================
    // Parallax effect for gradient orbs
    // ==========================================
    const orbs = document.querySelectorAll('.gradient-orb');

    function parallaxOrbs() {
        const scrollY = window.scrollY;
        orbs.forEach((orb, index) => {
            const speed = 0.05 + (index * 0.02);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    window.addEventListener('scroll', parallaxOrbs);

    // ==========================================
    // Timeline marker entrance animation
    // ==========================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    }

    // Set initial state
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    });

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Check on load

    // ==========================================
    // Smooth fade-in for project cards
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card');

    function animateProjects() {
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }

    // Set initial state
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });

    window.addEventListener('scroll', animateProjects);
    animateProjects(); // Check on load

    // ==========================================
    // Contact links stagger animation
    // ==========================================
    const contactLinks = document.querySelectorAll('.contact-link');

    function animateContactLinks() {
        contactLinks.forEach((link, index) => {
            const linkTop = link.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (linkTop < windowHeight - 50) {
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }

    // Set initial state
    contactLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateContactLinks);
    animateContactLinks(); // Check on load

    // ==========================================
    // Mouse glow effect on project cards (desktop only)
    // ==========================================
    if (window.innerWidth > 900) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    // ==========================================
    // Typing effect for hero subtitle (optional enhancement)
    // ==========================================
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        heroSubtitle.style.opacity = '1';

        let charIndex = 0;
        function typeText() {
            if (charIndex < text.length) {
                heroSubtitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 40);
            }
        }
        setTimeout(typeText, 1500);
    }

    // ==========================================
    // Performance: Disable complex effects on touch devices
    // ==========================================
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
        // Disable parallax for better performance
        window.removeEventListener('scroll', parallaxOrbs);

        // Simplify orb animation
        orbs.forEach(orb => {
            orb.style.animation = 'none';
        });
    }

    console.log('Portfolio loaded - Welcome!');
});
