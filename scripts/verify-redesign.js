const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

const checks = [
  ["new CV asset exists", () => exists("assets/cv/CV-2.pdf")],
  ["new photo asset exists", () => exists("assets/photo.jpg")],
  ["optimized profile photo exists", () => exists("assets/photo.webp") && read("_pages/sobre.html").includes("/assets/photo.webp")],
  ["about uses photo.jpg", () => read("_data/about.yml").includes("/assets/photo.jpg")],
  ["home has career timeline", () => read("_pages/sobre.html").includes("career-timeline")],
  ["home has research section", () => read("_pages/sobre.html").includes("research-grid")],
  ["about bio is a single block", () => read("_pages/sobre.html").includes("bio-block") && !read("_pages/sobre.html").includes("bio-grid")],
  ["home has Opt Labs", () => read("_data/about.yml").includes("Opt Labs")],
  ["hero mentions AI automation and design", () => read("_pages/sobre.html").includes("inteligência artificial, automação e design")],
  ["experience data exists", () => exists("_data/experience.yml")],
  ["research data exists", () => exists("_data/research.yml")],
  ["global redesign css exists", () => exists("assets/css/redesign.css")],
  ["layout loads redesign css", () => read("_includes/head.html").includes("redesign.css")],
  ["navigation links CV", () => read("_includes/navigation.html").includes("CV-2.pdf")],
  ["navigation links home", () => read("_includes/navigation.html").includes(">Início</a>") && read("_includes/navigation.html").includes("title=\"Início\"")],
  ["navigation does not link notes", () => !read("_includes/navigation.html").includes("/notas")],
  ["footer keeps notes link", () => read("_data/about.yml").includes("Notas de Aula")],
  ["projects page uses modern grid", () => read("_pages/projetos.html").includes("project-card")],
  ["skills page uses skill groups", () => read("_pages/skills.html").includes("skill-group")],
  ["skills include requested updates", () => {
    const skills = read("_data/skills.yml");
    return skills.includes("Engenharia de Software") &&
      skills.includes("Testes") &&
      skills.includes("Metodologias ágeis") &&
      skills.includes("Marketing") &&
      skills.includes("SEO") &&
      skills.includes("LLM") &&
      skills.includes("Prisma") &&
      skills.includes("Redis");
  }],
  ["operation label removed", () => !read("_data/skills.yml").includes("Operação")],
  ["posts catalogue improved", () => read("_layouts/home.html").includes("page-shell")],
  ["tags page improved", () => read("_pages/tags.html").includes("tag-cloud")],
  ["404 page improved", () => read("_pages/404.html").includes("error-page")],
  ["global heavy scripts removed", () => {
    const combined = [
      "_includes/head.html",
      "_includes/navigation.html",
      "_layouts/default.html",
      "assets/js/button.js",
      "assets/js/nav.js",
    ].map(read).join("\n");
    return !combined.includes("adsbygoogle") &&
      !combined.includes("cdn.mathjax.org") &&
      !combined.toLowerCase().includes("jquery") &&
      !combined.toLowerCase().includes("disqus.com");
  }],
  ["disqus removed completely", () => {
    const combined = [
      "_config.yml",
      "_layouts/post.html",
      "assets/css/redesign.css",
    ].map(read).join("\n").toLowerCase();
    return !exists("_includes/disqus_comments.html") &&
      !combined.includes("disqus") &&
      !combined.includes("comments-load") &&
      !combined.includes("disqus_thread");
  }],
  ["google analytics restored without ads", () => {
    const head = read("_includes/head.html");
    return head.includes("G-P9G89F6KLE") &&
      head.includes("googletagmanager.com/gtag/js") &&
      !head.includes("adsbygoogle");
  }],
  ["dark mode toggle exists", () => {
    const nav = read("_includes/navigation.html");
    const head = read("_includes/head.html");
    const css = read("assets/css/redesign.css");
    return exists("assets/js/theme.js") &&
      nav.includes("data-theme-toggle") &&
      head.includes("localStorage.getItem(\"theme\")") &&
      head.includes("assets/js/theme.js") &&
      css.includes('html[data-theme="dark"]') &&
      css.includes(".theme-toggle");
  }],
  ["dark mode preserves key images", () => {
    const css = read("assets/css/redesign.css");
    return css.includes(".post img") &&
      css.includes("--post-image-bg") &&
      css.includes(".profile-panel img,\n.project-media img") &&
      css.includes('html[data-theme="dark"] .post img') &&
      css.includes("filter: invert(1) hue-rotate(180deg)") &&
      css.includes(".post > p:first-of-type img");
  }],
  ["local svg icons replace fontawesome css", () => {
    const head = read("_includes/head.html").toLowerCase();
    return exists("_includes/icon.html") &&
      !head.includes("font-awesome") &&
      read("_pages/sobre.html").includes("include icon.html") &&
      read("_includes/footer.html").includes("include icon.html");
  }],
  ["post tags centered", () => {
    const css = read("assets/css/redesign.css");
    return css.includes(".post .tag-list") &&
      css.includes("justify-content: center") &&
      css.includes("text-align: center");
  }],
  ["UFES label shortened", () => read("_data/experience.yml").includes('company: "UFES"') && !read("_data/experience.yml").includes('company: "Universidade Federal do Espírito Santo"')],
  ["footer social links use icons", () => read("_includes/footer.html").includes("include icon.html") && read("_includes/footer.html").includes("sr-only")],
  ["button assets removed from pages", () => {
    const combined = [
      "_pages/sobre.html",
      "_pages/projetos.html",
      "_pages/skills.html",
      "_pages/tags.html",
      "_pages/notas.html",
      "_pages/publicacoes.html",
      "_layouts/home.html",
    ].map(read).join("\n");
    return !combined.includes("button.css") &&
      !combined.includes("button.js") &&
      !combined.includes('id="button"');
  }],
  ["project screenshots restored", () => {
    const projects = read("_data/projects.yml");
    return projects.includes("/assets/portfolio/airplane.png") &&
      projects.includes("/assets/portfolio/covid.png") &&
      projects.includes("/assets/portfolio/accb.png") &&
      projects.includes("/assets/portfolio/spotify.png") &&
      projects.includes("/assets/portfolio/face.png") &&
      projects.includes("/assets/portfolio/box.png") &&
      projects.includes("/assets/portfolio/chatbot.png");
  }],
  ["project cards do not repeat access label", () => !read("_pages/projetos.html").includes("Acessar projeto")],
  ["static preview supports extensionless urls", () => read("scripts/static-preview.js").includes("`${direct}.html`") && read("scripts/static-preview.js").includes("Cache-Control")],
  ["nav css request removed", () => !read("_includes/navigation.html").includes("nav.css")],
  ["nav js request removed", () => !read("_includes/navigation.html").includes("nav.js") && !read("_includes/navigation.html").includes("data-mobile-menu-toggle")],
  ["mobile menu is visible without toggle", () => read("_includes/navigation.html").includes('id="mobile-menu"') && read("assets/css/redesign.css").includes(".mobile-nav-control") && read("assets/css/redesign.css").includes(".mobile-menu") && !read("assets/css/redesign.css").includes(".mobile-menu.is-open")],
  ["preview html cache disabled", () => read("scripts/static-preview.js").includes('type.includes("text/html") ? "no-store"')],
  ["posts catalogue dark colors exist", () => read("assets/css/redesign.css").includes(".catalogue-title") && read("assets/css/redesign.css").includes(".catalogue-item p")],
  ["hero profile photo stretches on desktop", () => {
    const css = read("assets/css/redesign.css");
    return css.includes("align-items: stretch") &&
      css.includes("minmax(280px, 360px)") &&
      css.includes(".profile-panel picture") &&
      css.includes("height: 100%");
  }],
  ["mobile profile image disabled", () => read("_pages/sobre.html").includes("max-width: 759px") && read("assets/css/redesign.css").includes("display: none")],
  ["mobile-first hardening exists", () => {
    const css = read("assets/css/redesign.css");
    return css.includes("Mobile-first responsive hardening") &&
      css.includes("overflow-x: clip") &&
      css.includes("@media (min-width: 760px)") &&
      css.includes("@media (max-width: 420px)") &&
      css.includes(".button-row .button-primary") &&
      css.includes("grid-template-columns: minmax(0, 1fr)");
  }],
  ["global image preload removed", () => !read("_includes/head.html").includes("preload.html")],
  ["company names are vertical in timeline", () => read("_pages/sobre.html").includes("company-mark-vertical") && read("assets/css/redesign.css").includes("writing-mode: vertical-rl")],
  ["Opt Labs current role exists", () => {
    const experience = read("_data/experience.yml");
    return experience.includes("Opt Labs") &&
      experience.includes("Desenvolvedor Web") &&
      experience.includes("jan de 2024 - atualmente");
  }],
  ["cybersecurity research exists", () => {
    const research = read("_data/research.yml");
    return research.includes("Como democratizar o acesso a ferramentas de cibersegurança") &&
      research.includes("NVIDIA NIM") &&
      research.includes("Hugging Face") &&
      research.includes("grafo de conhecimento");
  }],
  ["RTOS research completed with Mateus as principal", () => {
    const research = read("_data/research.yml");
    return research.includes("Sistemas Operacionais de Tempo Real") &&
      research.includes("jan de 2023 - jul de 2023") &&
      research.includes("Pesquisador principal: Mateus Almeida") &&
      !research.toLowerCase().includes("wilson");
  }],
];

const failures = checks
  .filter(([, check]) => {
    try {
      return !check();
    } catch (_) {
      return true;
    }
  })
  .map(([name]) => name);

if (failures.length) {
  console.error("Redesign verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Redesign verification passed (${checks.length} checks).`);
