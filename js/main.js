/* ==========================================================================
   Harsh Jalnekar — Portfolio Core JavaScript (main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSkillGraph();
  renderCertificationsAndPublications();
  initAccordion();
  initStatsCounters();
});

function initSkillGraph() {
  const skillData = [
    { name: "Languages", skills: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"] },
    { name: "Backend", skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JWT", "Maven"] },
    { name: "Architecture", skills: ["Distributed Systems", "Event-Driven", "Multi-Tenant SaaS", "Clean Architecture", "Domain Modeling"] },
    { name: "Databases", skills: ["PostgreSQL", "AlloyDB", "Redis", "MongoDB"] },
    { name: "Messaging", skills: ["RabbitMQ", "MQTT"] },
    { name: "AI & LLM", skills: ["Ollama", "Prompt Engineering", "LLM Integration", "Semantic Chunking", "LSTM"] },
    { name: "Security", skills: ["Keycloak", "OAuth2", "RBAC", "AES/RSA Encryption"] },
    { name: "Cloud & DevOps", skills: ["Docker", "Linux", "Git", "GitHub Actions", "Nginx", "Google Cloud"] }
  ];

  const svg = document.getElementById('skillSvg');
  if (!svg) return;

  const cx = 200, cy = 200, r = 135;
  const ns = "http://www.w3.org/2000/svg";

  // Render nodes and connection lines
  skillData.forEach((cat, i) => {
    const angle = (i / skillData.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);

    // Create Connection Line
    const edge = document.createElementNS(ns, 'line');
    edge.setAttribute('x1', cx);
    edge.setAttribute('y1', cy);
    edge.setAttribute('x2', x);
    edge.setAttribute('y2', y);
    edge.setAttribute('class', 'sg-edge');
    svg.appendChild(edge);

    // Create Skill Node Group for Accessibility
    const nodeGroup = document.createElementNS(ns, 'g');
    nodeGroup.setAttribute('class', 'sg-node-group');
    nodeGroup.style.cursor = 'pointer';

    // Create Circle Node
    const node = document.createElementNS(ns, 'circle');
    node.setAttribute('cx', x);
    node.setAttribute('cy', y);
    node.setAttribute('r', 32);
    node.setAttribute('class', 'sg-node');
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', `View skills for ${cat.name}`);
    node.dataset.index = i;
    nodeGroup.appendChild(node);

    // Create Node Label text
    const label = document.createElementNS(ns, 'text');
    
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    let labelX = x;
    let labelY = y;
    let textAnchor = 'middle';

    if (Math.abs(cos) < 0.01) {
      // Top or Bottom nodes
      textAnchor = 'middle';
      labelX = x;
      labelY = y + (sin > 0 ? 48 : -42);
    } else if (cos > 0) {
      // Right-side nodes
      textAnchor = 'start';
      labelX = x + 44;
      labelY = y + 4;
    } else {
      // Left-side nodes
      textAnchor = 'end';
      labelX = x - 44;
      labelY = y + 4;
    }

    label.setAttribute('x', labelX);
    label.setAttribute('y', labelY);
    label.setAttribute('text-anchor', textAnchor);
    label.setAttribute('class', 'sg-label');
    label.textContent = cat.name;
    nodeGroup.appendChild(label);

    svg.appendChild(nodeGroup);

    // Event listeners
    const showSkillDetails = () => showSkill(i, skillData);
    
    node.addEventListener('mouseenter', showSkillDetails);
    node.addEventListener('focus', showSkillDetails);

    // Keyboard support for space and enter
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showSkillDetails();
      }
    });
  });

  // Render Center Hub Node
  const centerNode = document.createElementNS(ns, 'circle');
  centerNode.setAttribute('cx', cx);
  centerNode.setAttribute('cy', cy);
  centerNode.setAttribute('r', 28);
  centerNode.setAttribute('class', 'sg-center');
  svg.appendChild(centerNode);

  const centerLabel = document.createElementNS(ns, 'text');
  centerLabel.setAttribute('x', cx);
  centerLabel.setAttribute('y', cy + 4);
  centerLabel.setAttribute('class', 'sg-label');
  centerLabel.setAttribute('fill', '#0A0E14');
  centerLabel.setAttribute('text-anchor', 'middle');
  centerLabel.textContent = "Harsh";
  svg.appendChild(centerLabel);

  // Pre-load Languages details on load
  showSkill(0, skillData);
}

function showSkill(i, skillData) {
  const cat = skillData[i];
  const detail = document.getElementById('skillDetail');
  if (!detail) return;

  // Fade out detail content, update it, and fade it back in
  detail.style.opacity = 0;
  detail.style.transform = 'translateY(5px)';
  
  setTimeout(() => {
    detail.innerHTML = `
      <h4>${cat.name}</h4>
      <div class="pill-row">
        ${cat.skills.map(s => `<span class="pill">${s}</span>`).join('')}
      </div>
    `;
    detail.style.opacity = 1;
    detail.style.transform = 'translateY(0)';
  }, 150);

  // Update active state on circles
  document.querySelectorAll('.sg-node').forEach((n, idx) => {
    if (idx === i) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });
}

/* ===== Certifications & Publications Data & Logic ===== */

const publicationsData = [
  {
    title: "Stock Market Prediction Using LSTM",
    journal: "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
    date: "December 2022",
    description: "Co-authored a research paper exploring the application of Long Short-Term Memory (LSTM) neural networks for stock market prediction and time-series forecasting.",
    tags: ["Research", "LSTM", "Machine Learning", "Deep Learning", "Time Series", "Python"],
    url: "https://www.researchgate.net/profile/Harsh-Jalnekar",
    featured: true
  }
];

const certificationsData = [
  {
    issuer: "Google",
    title: "Engineer AI Agents with Agent Development Kit (ADK)",
    date: "June 2026",
    skills: ["Agentic AI", "AI Agents", "LLMs", "Workflow Automation"],
    credential: "https://developers.google.com",
    featured: true
  },
  {
    issuer: "Anthropic",
    title: "Introduction to Agent Skills",
    date: "May 2026",
    skills: ["Claude", "Prompt Engineering", "AI Workflows"],
    credential: "https://anthropic.com",
    featured: true
  },
  {
    issuer: "LinkedIn",
    title: "What Is Generative AI?",
    date: "March 2026",
    skills: ["Generative AI", "Business AI", "LLMs"],
    credential: "https://linkedin.com",
    featured: true
  },
  {
    issuer: "Coursera",
    title: "Programming for Everybody (Python)",
    date: "February 2024",
    skills: ["Python"],
    credential: "https://coursera.org",
    featured: true
  },
  // Additional certifications (accordion)
  {
    issuer: "DSAI Hackathon",
    title: "DSAI Hackathon – Meraz 4.0",
    date: "2024",
    featured: false
  },
  {
    issuer: "ML Hackathon",
    title: "ML Hackathon 2K23",
    date: "2023",
    featured: false
  },
  {
    issuer: "MCC",
    title: "MCC Coding Assessment",
    date: "2023",
    featured: false
  },
  {
    issuer: "QuizWizard",
    title: "QuizWizard 2.0",
    date: "2023",
    featured: false
  },
  {
    issuer: "Case Cipher",
    title: "Case Cipher Hackathon",
    date: "2023",
    featured: false
  },
  {
    issuer: "CodeDex",
    title: "CodeDex Online Quiz",
    date: "2022",
    featured: false
  }
];

function renderCertificationsAndPublications() {
  const pubContainer = document.getElementById('publications-container');
  const certContainer = document.getElementById('certifications-container');
  const accordionContainer = document.getElementById('accordion-list-container');

  if (pubContainer) {
    pubContainer.innerHTML = publicationsData.map(pub => `
      <article class="glass pub-card featured-pub" style="border-color: var(--cyan); box-shadow: 0 0 24px rgba(69, 217, 198, 0.12); width: 100%;">
        <div class="pub-icon" aria-hidden="true" style="background: linear-gradient(135deg, var(--cyan), var(--indigo));">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0E14" stroke-width="2">
            <path d="M4 19.5V5a2 2 0 012-2h11a2 2 0 012 2v14"/>
            <path d="M4 19.5A2.5 2.5 0 016.5 17H19"/>
          </svg>
        </div>
        <div class="pub-body" style="width: 100%;">
          <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 6px; color: var(--text);">${pub.title}</h3>
          <span class="pub-meta" style="color: var(--cyan); font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; margin-bottom: 12px; display: block;">
            ${pub.journal} — ${pub.date}
          </span>
          <p style="color: var(--muted); font-size: 0.92rem; margin-bottom: 18px;">
            ${pub.description}
          </p>
          <div class="tag-row" style="margin-bottom: 24px;">
            ${pub.tags.map(tag => `<span class="tag" style="border-color: var(--cyan); color: var(--cyan);">${tag}</span>`).join('')}
          </div>
          <div class="hero-actions" style="gap: 12px;">
            <a href="${pub.url}" target="_blank" rel="noopener" class="btn-primary" style="font-size: 0.82rem; padding: 10px 20px;" aria-label="View LSTM Stock Market Prediction Publication">
              View Publication
            </a>
            <a href="${pub.url}" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 0.82rem; padding: 10px 20px;" aria-label="View Harsh Jalnekar ResearchGate profile">
              ResearchGate
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  if (certContainer) {
    const featuredCerts = certificationsData.filter(c => c.featured);
    certContainer.innerHTML = featuredCerts.map(cert => {
      const initial = cert.issuer.charAt(0);
      return `
        <div class="glass cert-card">
          <div class="cert-badge" aria-hidden="true" style="background: rgba(108, 107, 255, 0.12); border-color: rgba(108, 107, 255, 0.35); color: var(--indigo); font-weight:700;">
            ${initial}
          </div>
          <div style="flex:1;">
            <h4 style="font-size: 1rem; font-weight:600; margin-bottom: 4px; color: var(--text);">${cert.title}</h4>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom: 10px;">
              <span style="font-family:'JetBrains Mono', monospace; font-size:0.78rem; color:var(--cyan);">${cert.issuer}</span>
              <span style="font-size:0.75rem; color:var(--muted);">${cert.date}</span>
            </div>
            <div class="tag-row" style="margin-bottom:12px; gap: 5px;">
              ${cert.skills.map(skill => `<span class="tag" style="font-size:0.65rem; padding: 2px 6px;">${skill}</span>`).join('')}
            </div>
            <a href="${cert.credential}" target="_blank" rel="noopener" class="pub-link" style="font-size: 0.78rem; font-weight:600;" aria-label="View ${cert.title} credential certificate">
              View Credential &rarr;
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  if (accordionContainer) {
    const accordionCerts = certificationsData.filter(c => !c.featured);
    accordionContainer.innerHTML = accordionCerts.map(cert => `
      <div class="accordion-item" style="padding: 14px 20px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="dot-indicator" style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--cyan); box-shadow: 0 0 6px var(--cyan);"></div>
          <span style="font-weight: 500; color: var(--text);">${cert.title}</span>
        </div>
        <div style="display:flex; align-items:center; gap:20px;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--muted);">${cert.issuer}</span>
          <span style="font-size: 0.75rem; color: var(--muted-2);">${cert.date}</span>
        </div>
      </div>
    `).join('');
  }
}

function initAccordion() {
  const toggleBtn = document.getElementById('accordion-toggle-btn');
  const content = document.getElementById('accordion-content');
  const chevron = document.getElementById('accordion-chevron');

  if (toggleBtn && content && chevron) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
      if (isExpanded) {
        content.style.maxHeight = '0px';
        chevron.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  }
}

function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-count');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseInt(target.getAttribute('data-target'), 10);
        const duration = 1500; // milliseconds
        const startTime = performance.now();
        
        const updateCount = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function: easeOutQuad
          const easeProgress = progress * (2 - progress);
          const currentCount = Math.floor(easeProgress * targetVal);
          
          target.textContent = currentCount + (target.getAttribute('data-suffix') || '');
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            target.textContent = targetVal + (target.getAttribute('data-suffix') || '');
          }
        };
        
        requestAnimationFrame(updateCount);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.1 });
  
  counters.forEach(c => observer.observe(c));
}
