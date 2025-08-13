document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email && message) {
    Swal.fire({
      title: 'Message Successfully Sent!',
      // text: 'Thank you for reaching out. I will get back to you soon.',
      icon: 'success',
      background: '#1e1e1e',
      color: '#ffffff',
      timer: 1500, // Auto close after 1s
      showConfirmButton: false, // Hide confirm button
      customClass: {
        popup: 'custom-popup'
      }
    });

    document.getElementById("contact-form").reset();
  } else {
    Swal.fire({
      title: 'Missing Fields!',
      text: 'Please fill in all fields before submitting.',
      icon: 'error',
      background: '#1e1e1e',
      color: '#ffffff',
      timer: 2000, // Auto close after 2s
      showConfirmButton: false,
      customClass: {
        popup: 'custom-popup'
      }
    });
  }
});
















// Navbar scroll effect
const navbar = document.getElementById('navbar');
let manualSelectionActive = false; // Flag to track manual selections

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Only update active section if no manual selection was recently made
    if (!manualSelectionActive) {
        // Highlight active section in navbar
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // More precise threshold for section detection
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        // Only update if we found a valid section
        if (current) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        }
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    
    // If closing menu, ensure active state is correct
    if (!navLinks.classList.contains('active')) {
        // Small delay to let any scroll events settle
        setTimeout(() => {
            manualSelectionActive = false;
        }, 100);
    }
    
    // Prevent any automatic selection when opening menu
    if (navLinks.classList.contains('active')) {
        manualSelectionActive = true;
        setTimeout(() => {
            manualSelectionActive = false;
        }, 500);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Update active state immediately for mobile menu clicks
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Set flag to prevent scroll-based highlighting from overriding manual selection
            manualSelectionActive = true;
            
            // Smooth scroll with mobile offset
            const offset = window.innerWidth <= 768 ? 100 : 80;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
            
            // Re-enable scroll-based highlighting after scroll completes
            setTimeout(() => {
                manualSelectionActive = false;
            }, 1500);
        }
    });
});

// Add touch support for mobile interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('.btn, .social-icon, .skill-item, .tool-card');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// Highlight active section in navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // if (!name || !email || !message) {
    //     alert('Please fill in all fields');
    //     return;
    // }

    // if (!validateEmail(email)) {
    //     alert('Please enter a valid email address');
    //     return;
    // }

    // alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





















  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.flip-on-scroll');
    const triggerPoint = window.innerHeight;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerPoint && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // <-- removes class when out of view
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimations);
  window.addEventListener('load', handleScrollAnimations);










  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-rounded');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Reset to allow re-animation
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', animateOnScroll);






  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-right, .animate-rounded');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', animateOnScroll);





  function revealToolsOnScroll() {
    const cards = document.querySelectorAll('.tool-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.4    
    });

    cards.forEach(card => {
      card.classList.add('animate-left');
      observer.observe(card);
    });
  }

  document.addEventListener('DOMContentLoaded', revealToolsOnScroll);



  function applyRepeatedScrollAnimations(selector, animationClass) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass); // <-- Key line for repeat
        }
      });
    }, {
      threshold: 0.4
    });

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyRepeatedScrollAnimations('.animate-left', 'visible');
    applyRepeatedScrollAnimations('.animate-right', 'visible');
    applyRepeatedScrollAnimations('.animate-rounded', 'visible');
    applyRepeatedScrollAnimations('.animate-up', 'visible');
    applyRepeatedScrollAnimations('.animate-down', 'visible');
    applyRepeatedScrollAnimations('.animate-fade', 'visible');
    applyRepeatedScrollAnimations('.animate-scale', 'visible');
    applyRepeatedScrollAnimations('.animate-rotate', 'visible');
    applyRepeatedScrollAnimations('.animate-slide-top', 'visible');
    applyRepeatedScrollAnimations('.animate-slide-bottom', 'visible');
    applyRepeatedScrollAnimations('.animate-bounce', 'visible');
    applyRepeatedScrollAnimations('.animate-flip', 'visible');
    applyRepeatedScrollAnimations('.animate-stagger', 'visible');
    applyRepeatedScrollAnimations('.animate-zoom', 'visible');
    applyRepeatedScrollAnimations('.animate-slide-left-fade', 'visible');
    applyRepeatedScrollAnimations('.animate-slide-right-fade', 'visible');
    applyRepeatedScrollAnimations('.animate-elastic', 'visible');
    applyRepeatedScrollAnimations('.animate-glow', 'visible');
  });




function animateOnScrollRepeated(selector) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    animateOnScrollRepeated('.animate-left');
    animateOnScrollRepeated('.animate-right');
    animateOnScrollRepeated('.animate-up');
    animateOnScrollRepeated('.animate-down');
    animateOnScrollRepeated('.animate-fade');
    animateOnScrollRepeated('.animate-scale');
    animateOnScrollRepeated('.animate-rotate');
    animateOnScrollRepeated('.animate-slide-top');
    animateOnScrollRepeated('.animate-slide-bottom');
    animateOnScrollRepeated('.animate-bounce');
    animateOnScrollRepeated('.animate-flip');
    animateOnScrollRepeated('.animate-stagger');
    animateOnScrollRepeated('.animate-zoom');
    animateOnScrollRepeated('.animate-slide-left-fade');
    animateOnScrollRepeated('.animate-slide-right-fade');
    animateOnScrollRepeated('.animate-elastic');
    animateOnScrollRepeated('.animate-glow');
  });





  function animateTimelineOnScroll() {
    const cards = document.querySelectorAll('.timeline-animate');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // allows repeat
        }
      });
    }, {
      threshold: 0.3
    });

    cards.forEach(card => observer.observe(card));
  }

  document.addEventListener('DOMContentLoaded', animateTimelineOnScroll);





  function revealOnScroll() {
    const elements = document.querySelectorAll('.slide-left, .slide-right');
    const trigger = window.innerHeight * 0.9;
    elements.forEach(el => {
      const box = el.getBoundingClientRect();
      if (box.top < trigger) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);










    function revealOnScroll() {
    const elements = document.querySelectorAll('.flip-box, .flip-on-scroll');
    elements.forEach(el => {
      const position = el.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);








  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // repeat on scroll
      }
    });
  });

  document.querySelectorAll('.animate-left-glow, .animate-right-glow').forEach(el => {
    observer.observe(el);
  });
  


    document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-visible");
      } else {
        footer.classList.remove("footer-visible");
      }
    }, {
      threshold: 0.2
    });

    observer.observe(footer);
  });








// Prevent layout shifts during load
document.addEventListener('DOMContentLoaded', () => {
    // Show content immediately to preserve original design
    document.body.classList.add('loaded');
    
    // Initialize all necessary elements
    animateOnScroll();

    // Set initial active state based on current scroll position
    const setInitialActiveState = () => {
        // If we're at the very top of the page, default to home
        if (window.scrollY < 100) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            const homeLink = document.querySelector('a[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
            return;
        }
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    };
    
    // Set initial state with a small delay to ensure DOM is ready
    setTimeout(setInitialActiveState, 100);

    // Rotating text animation
    const textCircle = document.querySelector('.text-bg');
    let rotation = 0;
    function rotateText() {
        rotation += 0.2;
        textCircle.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        requestAnimationFrame(rotateText);
    }
    rotateText();

    // Animate navbar items
    const navListItems = document.querySelectorAll('.nav-links li');
    navListItems.forEach((item, index) => {
        item.style.animation = `fadeDown 0.6s forwards ${index * 0.1 + 0.4}s`;
    });

    // Text glow animation
    const textSpans = document.querySelectorAll('.text-bg span');
    setInterval(() => {
        textSpans.forEach(span => {
            span.style.animation = 'none';
            setTimeout(() => {
                span.style.animation = 'textGlow 3s infinite alternate';
            }, 10);
        });
    }, 6000);
});

// Enhanced Project Animations
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.05)';
            card.style.boxShadow = '0 30px 60px rgba(100, 255, 218, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
});

// Graph Animation
function animateGraphs() {
    const graphItems = document.querySelectorAll('.graph-item');
    
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const graphFill = entry.target.querySelector('.graph-fill');
                const percentage = entry.target.getAttribute('data-percentage');
                
                if (graphFill) {
                    setTimeout(() => {
                        graphFill.style.width = percentage + '%';
                    }, 500);
                }
            }
        });
    }, { threshold: 0.5 });

    graphItems.forEach(item => {
        graphObserver.observe(item);
    });
}

// Initialize graph animations
document.addEventListener('DOMContentLoaded', animateGraphs);

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe achievement counter section
const achievementSection = document.querySelector('.achievement-counter');
if (achievementSection) {
    counterObserver.observe(achievementSection);
}

// Enhanced 3D Card Tilt Effect
function init3DCards() {
    const cards = document.querySelectorAll('.info-card-enhanced');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Disable transition for instant response
            card.style.transition = 'none';

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Increase sensitivity (smaller divisor = faster tilt)
            const rotateX = ((y - centerY) / 5).toFixed(2);
            const rotateY = ((centerX - x) / 5).toFixed(2);

            // Apply transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            // Smooth return to normal
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
        });
    });
}

// Call the function after DOM is ready
document.addEventListener('DOMContentLoaded', init3DCards);


// Initialize 3D cards when DOM is loaded
document.addEventListener('DOMContentLoaded', init3DCards);

// Enhanced Scroll Animations for New Sections
function animateNewSections() {
    const sections = document.querySelectorAll('.about-content-new, .projects-showcase');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate children with stagger
                const children = entry.target.querySelectorAll('.info-card-3d, .project-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        
        const children = section.querySelectorAll('.info-card-3d, .project-item');
        children.forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'all 0.5s ease';
        });
        
        sectionObserver.observe(section);
    });
}

// Initialize new section animations
document.addEventListener('DOMContentLoaded', animateNewSections);

// Floating Icons Animation Enhancement
function enhanceFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.5) rotate(360deg)';
            icon.style.opacity = '0.8';
            icon.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
            icon.style.opacity = '';
        });
    });
}

// Initialize floating icons enhancement
document.addEventListener('DOMContentLoaded', enhanceFloatingIcons);

// Project Card Hover Effects
function enhanceProjectHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectOverlay = card.querySelector('.project-overlay');
        const techStack = card.querySelector('.tech-stack');
        const projectImage = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', () => {
            if (projectOverlay) {
                projectOverlay.style.opacity = '1';
            }
            if (techStack) {
                techStack.style.transform = 'scale(1.1)';
                techStack.style.transition = 'transform 0.3s ease';
            }
            if (projectImage) {
                projectImage.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (projectOverlay) {
                projectOverlay.style.opacity = '0';
            }
            if (techStack) {
                techStack.style.transform = 'scale(1)';
            }
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
        });
    });
}

// Initialize project hover effects
document.addEventListener('DOMContentLoaded', enhanceProjectHovers);

// Skill Tags Animation
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-3px) scale(1.05)';
            tag.style.boxShadow = '0 8px 25px rgba(0, 238, 255, 0.4)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = '';
            tag.style.boxShadow = '';
        });
    });
}

// Initialize skill tags animation
document.addEventListener('DOMContentLoaded', animateSkillTags);

// Enhanced Action Button Functionality
function enhanceActionButtons() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(btn => {
        // Add click functionality
        btn.addEventListener('click', (e) => {

          // Instead of blocking all clicks, only block if it's NOT a real link
if (!e.target.closest('a')) {
    e.preventDefault();
}

            
            // Add click animation
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle different button types
            if (btn.classList.contains('live-btn')) {
                // For Live Preview - you can add actual URLs here
                const projectTitle = btn.closest('.project-item').querySelector('.project-title').textContent;
                alert(`Opening Live Preview for: ${projectTitle}\n\nAdd your actual project URLs in the href attributes!`);
            } else if (btn.classList.contains('code-btn')) {
                // For Get Source - you can add actual GitHub URLs here
                const projectTitle = btn.closest('.project-item').querySelector('.project-title').textContent;
                alert(`Opening Source Code for: ${projectTitle}\n\nAdd your actual GitHub URLs in the href attributes!`);
            }
        });
        
        // Enhanced hover effects
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// Initialize action button enhancements
document.addEventListener('DOMContentLoaded', enhanceActionButtons);

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .action-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Education Progress Bar Animation
function animateEducationProgress() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const percentage = progressBar.getAttribute('data-percentage');
        progressBar.style.width = percentage + '%';
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Enhanced Education Card Animations
function enhanceEducationCards() {
  const educationCards = document.querySelectorAll('.education-card');
  
  educationCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.2}s`;
    
    // Enhanced hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
      card.style.boxShadow = '0 30px 60px rgba(100, 255, 218, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '';
    });
  });
}

// Enhanced Experience Card Animations
function enhanceExperienceCards() {
  const experienceCards = document.querySelectorAll('.experience-card');
  
  experienceCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.2}s`;
    
    // Enhanced hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
      card.style.boxShadow = '0 30px 60px rgba(100, 255, 218, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '';
    });
    
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
  });
}

// Experience Section Scroll Animation
function animateExperienceSection() {
  const experienceSection = document.querySelector('#experience');
  const experienceCards = document.querySelectorAll('.experience-card');
  
  if (experienceSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate cards with stagger
          experienceCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(experienceSection);
  }
}

// Initialize all new functions
document.addEventListener('DOMContentLoaded', () => {
  // ... existing code ...
  
  // Initialize new Education and Experience animations
  animateEducationProgress();
  enhanceEducationCards();
  enhanceExperienceCards();
  animateExperienceSection();
  
  // Set initial state for experience cards
  const experienceCards = document.querySelectorAll('.experience-card');
  experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
  });
});
