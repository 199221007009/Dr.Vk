# Math Professor Portfolio — Complete Setup & Deployment Guide

---

## STEP 0 — What You Have

This is a React + Vite project with:
- GSAP (animations + scroll triggers)
- Lenis (smooth scroll)
- KaTeX (live math rendering)
- Full glassmorphism design system

**To customize the site for your professor → Edit only ONE file:**
`src/data/professor.js`

---

## STEP 1 — Install Prerequisites (one-time)

### Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS version** (e.g. Node 22)
3. Run the installer — keep all defaults
4. Verify: open a terminal and run:
   ```
   node --version
   npm --version
   ```
   You should see version numbers.

### Install VS Code (if not already)
- Download from https://code.visualstudio.com

### Recommended VS Code Extensions
Install these from the Extensions panel (Ctrl+Shift+X):
- **ESLint** — code linting
- **Prettier** — code formatting
- **ES7+ React/Redux/React-Native snippets** — shortcuts
- **Auto Rename Tag** — rename JSX tags faster
- **GitLens** — better Git experience

---

## STEP 2 — Open the Project in VS Code

1. Unzip the project folder (`math-prof-portfolio`)
2. Open VS Code
3. File → Open Folder → select `math-prof-portfolio`
4. Open the integrated terminal: View → Terminal (or Ctrl+`)
5. Run:
   ```bash
   npm install
   ```
6. Start the dev server:
   ```bash
   npm run dev
   ```
7. Open `http://localhost:5173` in your browser
8. The site is live locally — edits auto-refresh

---

## STEP 3 — Customize the Site

**Open `src/data/professor.js`** — this is the only file you need to edit for content.

### Change the professor's name, title, institution:
```js
export const professor = {
  name: "Dr. [Actual Name]",
  institution: "[University Name]",
  email: "[email@domain.com]",
  ...
}
```

### Change publications:
Edit the `publications` array. Each entry has:
- `title` — paper title
- `journal` — journal name
- `year` — publication year
- `abstract` — short description
- `tags` — array of topic strings
- `doi` — DOI URL link

### Change the equation showcase:
Edit the `equations` array. Add real LaTeX from papers.

### Change timeline milestones:
Edit the `timeline` array with real dates and events.

---

## STEP 4 — Build for Production

When the site is ready:
```bash
npm run build
```
This creates a `dist/` folder — this is the finished website (HTML + CSS + JS).

---

## STEP 5 — Deploy Online (Choose One Method)

---

### METHOD A — Vercel (Recommended — Easiest, Free Forever)

**Best for:** Professional deployment, custom domain, zero config.

1. Create a free account at https://vercel.com (use GitHub login)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. In your project folder, run:
   ```bash
   vercel
   ```
4. Follow the prompts:
   - Set up and deploy? → **Y**
   - Which scope? → your username
   - Link to existing project? → **N**
   - Project name → `math-prof-portfolio` (or any name)
   - Directory? → **. (press Enter)**
   - Override settings? → **N**

5. Done! Vercel gives you a live URL like:
   ```
   https://math-prof-portfolio.vercel.app
   ```

**For future updates:**
```bash
vercel --prod
```

---

### METHOD B — Netlify (Also Free, Drag & Drop)

1. Go to https://netlify.com — create a free account
2. Run `npm run build` in your project
3. Drag and drop the `dist/` folder onto the Netlify dashboard
4. You get a live URL instantly

**For future updates:** drag the new `dist/` folder again.

---

### METHOD C — GitHub Pages (Free, via GitHub)

1. Create a GitHub account at https://github.com
2. Create a new repository called `math-prof-portfolio`
3. Install Git if not installed: https://git-scm.com

4. In your project folder:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/math-prof-portfolio.git
   git push -u origin main
   ```

5. Add the GitHub Pages config to `vite.config.js`:
   ```js
   export default {
     base: '/math-prof-portfolio/',
   }
   ```

6. Install the deploy package:
   ```bash
   npm install --save-dev gh-pages
   ```

7. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

8. Deploy:
   ```bash
   npm run deploy
   ```

9. In GitHub repo → Settings → Pages → set source to `gh-pages` branch
10. Live at: `https://YOUR_USERNAME.github.io/math-prof-portfolio/`

---

## STEP 6 — Custom Domain (Optional)

### Buy a domain
Recommended registrars (India):
- **GoDaddy** — https://godaddy.com/in
- **Namecheap** — https://namecheap.com
- **BigRock** — https://bigrock.in

Good domain examples:
- `drrajeshkumar.com`
- `rajeshkumarmaths.com`
- `profrajesh.in`

Price: ₹800–₹1500/year for `.com`

### Connect to Vercel
1. In Vercel dashboard → your project → Settings → Domains
2. Add your domain
3. Vercel gives you DNS records to add in your domain registrar
4. Propagates in 10–60 minutes

### Connect to Netlify
1. Netlify dashboard → your site → Domain settings → Add custom domain
2. Same process — add DNS records to your registrar

---

## STEP 7 — Updating the Site Later

Every time you change content:

```bash
# 1. Make your edits in src/data/professor.js
# 2. Build
npm run build
# 3. Deploy
vercel --prod   # if using Vercel
# OR
npm run deploy  # if using GitHub Pages
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Delete `node_modules` folder, run `npm install` again |
| Port 5173 already in use | Run `npm run dev -- --port 3000` |
| Vercel deploy fails | Run `npm run build` first, check for errors |
| Fonts not loading | Check internet connection — they load from Google Fonts CDN |
| Equations not rendering | KaTeX loads from CDN — needs internet in browser |
| Animations not working | Check browser console for errors (F12) |

---

## File Structure Reference

```
math-prof-portfolio/
├── index.html              ← Page title, meta tags, CDN links
├── package.json            ← Project dependencies
├── vite.config.js          ← Build configuration
├── public/
│   └── favicon.svg         ← Tab icon (the Σ symbol)
└── src/
    ├── main.jsx            ← Entry point (don't edit)
    ├── App.jsx             ← Root component, Lenis setup
    ├── index.css           ← All CSS variables, global styles
    ├── data/
    │   └── professor.js    ← ★ EDIT THIS for all content ★
    └── components/
        ├── FloatingEqs.jsx ← Background equations
        ├── Ticker.jsx      ← Top scrolling bar
        ├── Navbar.jsx      ← Navigation
        ├── Hero.jsx        ← Landing section + SVG animation
        ├── About.jsx       ← Bio + stats
        ├── Publications.jsx← Research papers
        ├── Teaching.jsx    ← Teaching cards
        ├── LatexShowcase.jsx← Equation display (KaTeX)
        ├── Timeline.jsx    ← Academic journey
        ├── Contact.jsx     ← Contact section
        └── Footer.jsx      ← Footer with QED
```

---

*Built with React 18 + Vite + GSAP 3 + Lenis + KaTeX*
