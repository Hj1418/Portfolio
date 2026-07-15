/* ==========================================================================
   Harsh Jalnekar — Portfolio Animations & Scroll Reveal (animations.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initPremiumCardHover();
  initSmoothScroll();
});

/**
 * Setup Intersection Observer for scroll-triggered slide-up reveals
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after revealing to prevent repetitive executions
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px' // triggers slightly before entering viewport
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

/**
 * Add a subtle 3D hover/tilt effect and dynamic sheen on hover cards for a premium feel
 */
function initPremiumCardHover() {
  const cards = document.querySelectorAll('.glass');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate normalized position from -1 to 1
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = (x - xc) / xc; // -1 to 1
      const dy = (y - yc) / yc; // -1 to 1
      
      // Limit tilt to a maximum of 2.5 degrees for subtlety
      const tiltX = -dy * 2.5;
      const tiltY = dx * 2.5;
      
      // Apply transform and update variables for dynamic CSS background gradients
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
    
    card.addEventListener('mouseleave', () => {
      // Revert transformation smoothly
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/**
 * Ensure smooth keyboard scrolling compatibility and anchor offsets
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for navigation header bar (approx 75px height)
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without jumping page focus
        history.pushState(null, null, targetId);
      }
    });
  });
}
