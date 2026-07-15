# Harsh Jalnekar — Software Engineering Portfolio

A premium, highly interactive backend software engineer portfolio website. It features an event-driven network canvas background, interactive skills graph, minimal system architecture SVG diagrams, clean timeline layout, and structured engineering project cards detailing technical constraints and learnings.

Suitable for recruiter scanning and performance-optimized for top product companies.

## 🚀 Key Highlights

- **Pure Static Stack:** Simple, dependency-free static website using pure HTML, Vanilla CSS, and JavaScript. Highly compatible with static hosts.
- **Zero Build Step:** Runs directly in any browser without needing to run `npm install` or compilation scripts.
- **Modularity:** Stylings and scripts are cleanly separated into specialized modules (`css/`, `js/`) for enterprise maintainability.
- **Interactive SVG Graph:** Network graph of technical categories that displays details on hover/focus.
- **Dynamic Particles Background:** High-performance HTML5 Canvas-based floating particle background mimicking network nodes.
- **SEO & Accessibility Optimized:** Formatted with semantic tags, Schema.org Person JSON-LD, Twitter Cards, OpenGraph meta properties, ARIA labels, and keyboard-navigable elements.

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
