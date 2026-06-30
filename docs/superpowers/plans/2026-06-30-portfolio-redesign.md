# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, premium redesign of the existing Jekyll portfolio while preserving routes, content collections, and the original monochrome/blue aesthetic.

**Architecture:** Keep the Jekyll site static and data-driven. Add structured YAML for experience and research, one global redesign stylesheet, and targeted Liquid markup updates for each page family.

**Tech Stack:** Jekyll, Liquid, Sass/CSS, static assets, Node.js verification script.

---

### Task 1: Verification Harness

**Files:**
- Create: `scripts/verify-redesign.js`

- [x] **Step 1: Write failing verification**

Create a Node.js script that checks for the new CV asset, global CSS, page classes, timeline data, research data, CV nav link, project cards, skill groups, tag cloud, and 404 shell.

- [ ] **Step 2: Run and verify failure**

Run: `node scripts/verify-redesign.js`
Expected: failure listing missing redesign features.

### Task 2: Data and Assets

**Files:**
- Create: `_data/experience.yml`
- Create: `_data/research.yml`
- Modify: `_data/about.yml`
- Modify: `_data/skills.yml`
- Create: `assets/cv/CV-2.pdf`

- [ ] Add the supplied professional timeline and research projects as YAML.
- [ ] Rewrite the bio around AI, data, automation, UFES, eMentor.br, and Opt Labs.
- [ ] Replace skill bars with grouped professional competencies.
- [ ] Copy the new CV PDF into `assets/cv/CV-2.pdf`.

### Task 3: Global Visual System

**Files:**
- Create: `assets/css/redesign.css`
- Modify: `_includes/head.html`
- Modify: `_includes/navigation.html`
- Modify: `_includes/footer.html`

- [ ] Add tokens, page shells, buttons, cards, timeline, tags, project grids, post reading surfaces, and responsive rules.
- [ ] Load the stylesheet globally from the head include.
- [ ] Update navigation with retained routes and a CV download action.
- [ ] Modernize footer spacing and social tone.

### Task 4: Page Redesign

**Files:**
- Modify: `_pages/sobre.html`
- Modify: `_pages/projetos.html`
- Modify: `_pages/skills.html`
- Modify: `_pages/tags.html`
- Modify: `_pages/notas.html`
- Modify: `_pages/publicacoes.html`
- Modify: `_pages/404.html`
- Modify: `_layouts/home.html`
- Modify: `_layouts/post.html`
- Modify: `_layouts/note.html`
- Modify: `_includes/catalogue_item.html`

- [ ] Rebuild the home page with hero, bio, CV, trajectory, research, and skill highlights.
- [ ] Rebuild projects, skills, tags, notes, publications, post catalogue, post pages, and 404 with consistent shells.
- [ ] Preserve all permalinks and collections.

### Task 5: Verification and Sync

**Files:**
- Destination: `/mnt/HDD_1/Antigravity/imsouza-portfolio-redesign`

- [ ] Run `node scripts/verify-redesign.js`.
- [ ] Run Jekyll build if local dependencies are available.
- [ ] Sync the finished project into `/mnt/HDD_1/Antigravity/imsouza-portfolio-redesign`.
