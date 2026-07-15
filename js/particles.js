/* ==========================================================================
   Harsh Jalnekar — Portfolio Background Particles System (particles.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
});

function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-canvas';
  // Insert at the beginning of body, so it sits behind everything
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let animationId;
  let particlesArray = [];
  
  const colors = [
    'rgba(108, 107, 255, 0.25)',  /* Indigo with low opacity */
    'rgba(69, 217, 198, 0.25)'    /* Cyan with low opacity */
  ];

  // Particle configuration
  const maxParticles = 60; // Keep count moderate for high performance
  const connectDistance = 110;

  // Handle Canvas Resizing
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticleArray();
  });

  // Particle Class Definition
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.35; // slow speed
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      this.x += this.vx;
      this.y += this.vy;
    }
  }

  // Populate Particle Collection
  function initParticleArray() {
    particlesArray = [];
    for (let i = 0; i < maxParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  // Draw Faint Connective Lines (representing network nodes)
  function connectParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
      for (let j = i + 1; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectDistance) {
          // Opacity decreases as distance increases
          const opacity = (1 - dist / connectDistance) * 0.08;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  // Pause animation if page is hidden to conserve power/CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

  initParticleArray();
  animate();
}
