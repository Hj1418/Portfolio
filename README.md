# Harsh Jalnekar — Backend Engineer · AI Builder · Product Developer

A personal engineering and product portfolio website showcasing production backend systems, IoT data pipelines, event-driven architectures, AI developer tooling, and independent products.

Built with a pure static stack (HTML5, Vanilla CSS, JavaScript) featuring an interactive IoT pipeline inspector, RabbitMQ event-driven topologies, Java-to-Python backend evolution, and a product case study for **The Grid** (F1 motorsport community and prediction platform).

## 🚀 Key Highlights

- **Backend & Production SaaS:** Highlights production microservices, multi-tenant PostgreSQL database modeling, Keycloak/OAuth2/RBAC security, and <code>@Transactional</code> reliability.
- **Interactive IoT / MQTT Data Pipeline:** Interactive 8-stage data pipeline (IoT Devices &rarr; MQTT &rarr; RabbitMQ &rarr; Python Consumer &rarr; Validation &rarr; Authorization &rarr; PostgreSQL &rarr; Daily Reports &amp; Notifications) with live stage inspection.
- **Asynchronous & Event-Driven Systems:** Visual RabbitMQ event-driven flows for message consumption, email processing (70% throughput boost), and background synchronization.
- **Java &rarr; Python Evolution:** Visual narrative demonstrating adaptability across backend ecosystems and modern Python services alongside established Java/Spring systems.
- **Flagship Product (The Grid):** Deep-dive showcase of an F1 motorsport community, learning platform, and prediction engine (Prediction Bench).
- **AI Tooling & Personal Workflows:** Showcases ongoing work on an AI Testing Tool and a self-built Personal Job-Tracking Application.
- **Pure Static Stack & Zero Build Step:** Zero compilation or node dependency requirements; deploys seamlessly to GitHub Pages.
- **SEO & Accessibility Optimized:** Schema.org Person JSON-LD, semantic landmark elements, ARIA dialog accessibility, and keyboard navigation.

## 📁 Repository Structure

```
portfolio/
│
├── index.html                  # Core layout structure & semantic page sections
│
├── css/
│   ├── styles.css              # Theme tokens, variables, typography, layout structures
│   ├── animations.css          # Pulse keyframes, scroll reveal controls, canvas placement
│   └── responsive.css          # Mobile & tablet query viewport optimizations
│
├── js/
│   ├── main.js                 # Interactive SVG skill map rendering logic & focus triggers
│   ├── animations.js           # Scroll observer reveal hooks, dynamic card perspective hover
│   └── particles.js            # HTML5 Canvas network nodes animation loop
│
└── assets/
    └── resume.pdf              # Respective resume document
```

## 🛠️ Running Locally

Since this is a pure static website, you do not need any build configurations. Simply open `index.html` in your favorite web browser:

1. **Direct double-click:** Double-click on `index.html` to open it locally.
2. **VS Code Live Server:** Right-click on `index.html` and click "Open with Live Server" for hot reloading.
3. **Simple HTTP Server:** Run a local server from the project directory:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## 🌐 Deployment on GitHub Pages

This codebase is configured to deploy directly to GitHub Pages out of the box with zero extra build steps:

1. Push this folder structure to your GitHub repository.
2. Navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and set the source branch to `main` (or your default branch) and directory to `/ (root)`.
4. Click **Save** and wait for the automated deployment build task to finish. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`.
