# 🚀 Utkarsh Upadhyay — Personal Portfolio Website

> A premium, futuristic personal portfolio website for **Utkarsh Upadhyay**, a Full Stack Developer (MERN Stack) and AI Enthusiast.

---

## 🌐 Live Preview

Open `index.html` in any modern browser to view the portfolio locally.

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML structure (519 lines)
├── style.css        # All styles, animations & responsive rules (834 lines)
├── script.js        # JavaScript — loader, typing effect, particles, scroll reveal (119 lines)
└── README.md        # Project documentation
```

> ⚠️ All three files must be kept in the **same folder** for the site to work correctly.

---

## ✨ Features

- **Dark Theme UI** — Deep black background (`#050505`) with green (`#00ff88`) accent colors
- **Animated Loading Screen** — Progress bar with initials logo on startup
- **Particle Background** — Interactive canvas-based particle network in the hero section
- **Typing Effect** — Auto-cycling role titles (JavaScript Developer, React Developer, etc.)
- **Glassmorphism Cards** — Frosted glass-style project and skill cards with hover glow
- **Scroll Reveal Animations** — Elements fade and slide in as you scroll
- **Animated Skill Bars** — Progress bars animate when scrolled into view
- **Vertical Timeline** — Learning journey displayed as a clean left-rail timeline
- **Working Contact Form** — Client-side form with submission feedback
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **Sticky Navbar** — Shrinks on scroll; hamburger menu on mobile
- **Back to Top Button** — Appears after scrolling down
- **SEO Optimized** — Meta description and keywords included
- **Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript. No frameworks, no npm.

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5                               |
| Styling    | CSS3 (Custom Properties, Flexbox, Grid, Animations) |
| Scripting  | Vanilla JavaScript (ES6+)           |
| Font       | Times New Roman (system font)       |
| Icons      | Inline SVG                          |
| Images     | Base64 embedded (no external files) |

---

## 📄 Sections

| # | Section         | Description                                                    |
|---|-----------------|----------------------------------------------------------------|
| 1 | **Hero**        | Name, animated typing roles, CTA buttons, profile photo, floating tech badges, particle background |
| 2 | **About**       | Bio, live code block, stats (Projects, Technologies, Learning) |
| 3 | **Skills**      | Animated progress bars across Frontend, Backend, Database, AI & Tools |
| 4 | **Projects**    | 4 project cards with tech badges, GitHub & Live Demo buttons   |
| 5 | **Journey**     | 5-phase learning timeline with skill tags                      |
| 6 | **Contact**     | GitHub, LinkedIn, Email, Phone links + contact form            |
| 7 | **Footer**      | Social icons, tagline, back-to-top button                      |

---

## 📦 Projects Showcased

### 1. SpendWise — MERN Expense Tracking Platform
- **Repo:** [github.com/utkarsh61r/Spendwise](https://github.com/utkarsh61r/Spendwise)
- **Stack:** React.js · Node.js · Express.js · MongoDB
- Full stack expense tracking with transaction management and financial visualization.

### 2. Task Manager Application
- **Repo:** [github.com/utkarsh61r/Task-Manager](https://github.com/utkarsh61r/Task-Manager)
- **Stack:** React.js · Tailwind CSS · Node.js · Express.js
- Task creation, editing, completion tracking with a responsive interface.

### 3. Research Paper Analysis System
- **Repo:** [github.com/utkarsh61r/Research-paper-maker-interface](https://github.com/utkarsh61r/Research-paper-maker-interface)
- **Stack:** MongoDB · Embeddings · AI Concepts · Node.js
- System for research paper analysis and automated review generation.

### 4. Full Stack Travel Booking Platform
- **Repo:** [github.com/utkarsh61r/Travel-Booking](https://github.com/utkarsh61r/Travel-Booking)
- **Stack:** MongoDB · Express.js · React.js · Node.js (MERN)
- Travel booking with destination listings, JWT authentication, and responsive UI.

---

## 🔗 Contact & Social

| Platform  | Link                                                                 |
|-----------|----------------------------------------------------------------------|
| GitHub    | [github.com/utkarsh61r](https://github.com/utkarsh61r)              |
| LinkedIn  | [linkedin.com/in/utkarsh-upadhyay-135a34260](https://www.linkedin.com/in/utkarsh-upadhyay-135a34260/) |
| Email     | upadhyayutkarsh1614@gmail.com                                        |
| Phone     | +91 99362 62305                                                      |
| Resume    | [View on Google Drive](https://drive.google.com/file/d/1xrfsMldrKGaID1gNuh664cbB1qWKGioV/view?usp=drive_link) |

---

## 🚀 How to Run Locally

1. **Download** all three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. **Open** `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No build step, no terminal, no `npm install` — it just works.

---

## 🌍 How to Deploy

### Option 1 — GitHub Pages (Free)
```bash
# 1. Create a new GitHub repository
# 2. Upload index.html, style.css, script.js
# 3. Go to Settings → Pages → Source: main branch → root folder
# 4. Your site will be live at: https://<your-username>.github.io/<repo-name>
```

### Option 2 — Netlify (Free, Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder onto the Netlify dashboard
3. Done — live URL generated instantly

### Option 3 — Vercel (Free)
```bash
npm install -g vercel
cd your-portfolio-folder
vercel
```

---

## 🎨 Customization Guide

| What to change        | Where to change it                                      |
|-----------------------|---------------------------------------------------------|
| Name / bio text       | `index.html` — Hero & About sections                   |
| Profile photo         | `index.html` — replace the base64 `src` in `<img class="avatar-photo">` |
| Accent color (green)  | `style.css` — change `--green: #00ff88` in `:root`     |
| Font                  | `style.css` — change `--mono` and `--display` variables |
| Typing role titles    | `script.js` — edit the `phrases` array                 |
| Add a new project     | `index.html` — copy any `.project-card` block and update |
| Skill percentages     | `index.html` — update `data-width` on `.skill-fill` divs |
| Social links          | `index.html` — update `href` values in Contact section  |

---

## 📸 Sections Preview

```
┌─────────────────────────────────────────┐
│  🔳 NAV  —  UU.   About Skills ...      │
├─────────────────────────────────────────┤
│  HERO    —  Name + Typing + Photo       │
│             Particles Background        │
├─────────────────────────────────────────┤
│  ABOUT   —  Bio + Code Block + Stats    │
├─────────────────────────────────────────┤
│  SKILLS  —  Animated Progress Cards     │
├─────────────────────────────────────────┤
│  PROJECTS — 4 Glassmorphism Cards       │
├─────────────────────────────────────────┤
│  JOURNEY —  5-Phase Timeline            │
├─────────────────────────────────────────┤
│  CONTACT —  Links + Form                │
├─────────────────────────────────────────┤
│  FOOTER  —  Socials + Back to Top       │
└─────────────────────────────────────────┘
```

---

## 📝 License

This portfolio is personal work created for **Utkarsh Upadhyay**. Feel free to use it as inspiration, but please don't republish it as your own.

---

<div align="center">

**Designed & Developed by Utkarsh Upadhyay**

*Built with HTML · CSS · JavaScript*

</div>
