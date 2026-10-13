document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasAnime = () => typeof window.anime !== 'undefined' && !prefersReducedMotion;

// ---------- i18n ES/EN en tiempo real ----------
const WA_MSG = {
  es: 'Hola%20Jahzeel%2C%20vi%20tu%20portfolio%20y%20quiero%20conversar.',
  en: 'Hi%20Jahzeel%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.',
};
const CV = {
  es: { href: '/cv-jahzeel-rodas-ES.pdf', file: 'CV-Jahzeel-Rodas-ES.pdf' },
  en: { href: '/cv-jahzeel-rodas-EN.pdf', file: 'CV-Jahzeel-Rodas-EN.pdf' },
};
const I18N = {
  es: {
    'meta.title': 'Jahzeel Rodas — Ingeniero Informático',
    'meta.desc': 'Portfolio de Jahzeel Issac Rodas Flores, Ingeniero Informático / Software Developer en La Paz, Bolivia. Backend Node.js y Java Spring Boot, portales institucionales, automatización y robótica educativa.',
    'og.desc': 'Backend Node.js y Java Spring Boot, portales institucionales, automatización y robótica educativa. La Paz, Bolivia.',
    loader: 'Cargando portfolio',
    'nav.tagline': 'Portfolio',
    'nav.contact': 'Contacto',
    'menu.open': 'Menú',
    'menu.close': 'Cerrar',
    'menu.ariaOpen': 'Abrir menú',
    'menu.ariaClose': 'Cerrar menú',
    'menu.home': 'Inicio',
    'menu.experience': 'Experiencia',
    'menu.stack': 'Stack',
    'menu.contact': 'Contacto',
    'hero.role': '<span class="text-[#d4f321]">●</span> Ingeniero Informático',
    'hero.since': 'Software Developer',
    'hero.desc': 'Desarrollo de sistemas <strong class="text-[#f2f3e9]">escalables y soluciones web integrales</strong> que transforman los procesos complejos en herramientas eficientes de alto rendimiento.',
    'hero.cta1': 'Ver experiencia',
    'hero.cta2': 'WhatsApp',
    'hero.cta3': 'Guardar contacto',
    'hero.scroll': 'Scroll ↓',
    'man.kicker': 'Manifiesto',
    'man.text': 'Construyo <span class="impact-accent normal-case text-[#d4f321]">sistemas</span> que sostienen instituciones, automatizo lo repetitivo y enseño <span class="impact-accent normal-case text-[#d4f321]">robótica</span> a la próxima generación.',
    'stat.1': 'Años desarrollando sistemas',
    'stat.2': 'Experiencias destacadas',
    'stat.3': 'Tecnologías en stack',
    'exp.kicker': '01 — Trayectoria',
    'exp.title': 'Experi\u00ADencia',
    'exp.sub': 'Sistemas institucionales, portales web e innovación con robótica educativa.',
    'exp1.date': '2025 — 2026 · Santa Cruz',
    'exp1.desc': 'Portal web institucional del congreso. Sistema de registros con check-in por escaneo QR, generación de credenciales y emisión automática de certificados.',
    'tag.web': 'Portal web',
    'tag.certs': 'Certificados',
    'exp2.date': 'Institucional',
    'exp2.desc': 'Desarrollo del portal web institucional de la Asociación Nacional de Notarios de Bolivia y sus soluciones digitales.',
    'tag.digital': 'Soluciones digitales',
    'exp3.date': '2022 — 2025',
    'exp3.desc': 'Profesional en Investigación y Desarrollo de Sistemas: análisis, desarrollo y mantenimiento de sistemas clave — portales web, TCF, RSI, VUCE.',
    'exp4.date': 'Innovación & Robótica',
    'exp4.desc': 'Conferencias y cursos en metodología STEM. Seguidores de línea con Arduino y NodeBots: JavaScript para robótica.',
    'stack.kicker': '02 — Stack',
    'stack.title': 'Habili\u00ADdades',
    'stack.backend': 'Backend',
    'stack.frontend': 'Frontend / Apps',
    'stack.data': 'Datos & DevOps',
    'stack.qa': 'Testing & Ágil',
    'marquee2': 'Rovelbots ✦ Arduino ✦ Seguidores de línea ✦ Metodología STEM ✦ Conferencias ✦ Talleres ✦ ',
    'contact.kicker': '03 — Contacto',
    'contact.title': '<span class="block text-5xl font-black md:text-8xl">¿Habla&shy;mos?</span><span class="text-outline-lime block text-5xl font-black md:text-8xl">Escríbeme.</span>',
    'contact.wa': 'WhatsApp',
    'contact.save': 'Guardar contacto',
    'contact.cv': 'Descargar CV ↓',
    'contact.rovelbots': 'Visitar Rovelbots ↗',
    'footer.big': 'Siempre<br class="sm:hidden" /> creando®',
    'footer.loc': 'Bolivia',
    'footer.back': 'Volver arriba ↑',
  },
  en: {
    'meta.title': 'Jahzeel Rodas — Computer Engineer',
    'meta.desc': 'Portfolio of Jahzeel Issac Rodas Flores, Computer Engineer / Software Developer in La Paz, Bolivia. Backend Node.js and Java Spring Boot, institutional portals, automation and educational robotics.',
    'og.desc': 'Backend Node.js and Java Spring Boot, institutional portals, automation and educational robotics. La Paz, Bolivia.',
    loader: 'Loading portfolio',
    'nav.tagline': 'Portfolio',
    'nav.contact': 'Contact',
    'menu.open': 'Menu',
    'menu.close': 'Close',
    'menu.ariaOpen': 'Open menu',
    'menu.ariaClose': 'Close menu',
    'menu.home': 'Home',
    'menu.experience': 'Experience',
    'menu.stack': 'Stack',
    'menu.contact': 'Contact',
    'hero.role': '<span class="text-[#d4f321]">●</span> Computer Engineer',
    'hero.since': 'Software Developer',
    'hero.desc': 'Development of scalable <strong class="text-[#f2f3e9]">systems and comprehensive web solutions</strong>that transform complex processes into efficient, high-performance tools.',
    'hero.cta1': 'See experience',
    'hero.cta2': 'WhatsApp',
    'hero.cta3': 'Save contact',
    'hero.scroll': 'Scroll ↓',
    'man.kicker': 'Manifesto',
    'man.text': 'I build <span class="impact-accent normal-case text-[#d4f321]">systems</span> that support institutions, automate the repetitive and teach <span class="impact-accent normal-case text-[#d4f321]">robotics</span> to the next generation.',
    'stat.1': 'Years building systems',
    'stat.2': 'Featured roles',
    'stat.3': 'Technologies in stack',
    'exp.kicker': '01 — Career',
    'exp.title': 'Expe\u00ADrience',
    'exp.sub': 'Institutional systems, web portals and innovation with educational robotics.',
    'exp1.date': '2025 — 2026 · Santa Cruz',
    'exp1.desc': 'Institutional congress website. Registration system with QR scan check-in, badge generation and automatic certificate issuance.',
    'tag.web': 'Website',
    'tag.certs': 'Certificates',
    'exp2.date': 'Institutional',
    'exp2.desc': 'Development of the institutional website of the National Association of Notaries of Bolivia and its digital solutions.',
    'tag.digital': 'Digital solutions',
    'exp3.date': '2022 — 2025',
    'exp3.desc': 'Research and Systems Development Professional: analysis, development and maintenance of key systems — web portals, TCF, RSI, VUCE.',
    'exp4.date': 'Innovation & Robotics',
    'exp4.desc': 'STEM conferences and courses. Arduino line followers and NodeBots: JavaScript for robotics.',
    'stack.kicker': '02 — Stack',
    'stack.title': 'Skills',
    'stack.backend': 'Backend',
    'stack.frontend': 'Frontend / Apps',
    'stack.data': 'Data & DevOps',
    'stack.qa': 'Testing & Agile',
    'marquee2': 'Rovelbots ✦ Arduino ✦ Line followers ✦ STEM Methodology ✦ Talks ✦ Workshops ✦ ',
    'contact.kicker': '03 — Contact',
    'contact.title': '<span class="block text-5xl font-black md:text-8xl">Let\'s&shy; talk?</span><span class="text-outline-lime block text-5xl font-black md:text-8xl">Message me.</span>',
    'contact.wa': 'WhatsApp',
    'contact.save': 'Save contact',
    'contact.cv': 'Download CV ↓',
    'contact.rovelbots': 'Visit Rovelbots ↗',
    'footer.big': 'Always<br class="sm:hidden" /> creating®',
    'footer.loc': 'Bolivia',
    'footer.back': 'Back to top ↑',
  },
};

let currentLang = 'es';
try {
  const saved = localStorage.getItem('jr-lang');
  if (saved === 'es' || saved === 'en') currentLang = saved;
} catch (e) { /* almacenamiento no disponible */ }

const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) || I18N.es[k] || k;
window.__t = t;
Object.defineProperty(window, '__lang', { get: () => currentLang, configurable: true });

function applyTexts() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    // menu-btn se resuelve aparte según estado abierto/cerrado.
    if (el.id === 'menu-btn') return;
    const v = t(key);
    if (typeof v !== 'string') return;
    if (v.indexOf('<') >= 0 || /&[a-zA-Z]+;/.test(v)) el.innerHTML = v;
    else el.textContent = v;
  });
  document.querySelectorAll('a[data-wa]').forEach((a) => {
    a.href = 'https://wa.me/59170226107?text=' + WA_MSG[currentLang];
  });
  document.querySelectorAll('a[data-cv]').forEach((a) => {
    a.href = CV[currentLang].href;
    a.setAttribute('download', CV[currentLang].file);
  });
  document.title = t('meta.title');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', t('meta.desc'));
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((m) => m.setAttribute('content', t('meta.title')));
  document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach((m) => m.setAttribute('content', t('og.desc')));
  const locale = document.querySelector('meta[property="og:locale"]');
  if (locale) locale.setAttribute('content', currentLang === 'es' ? 'es_BO' : 'en_US');
  document.documentElement.setAttribute('lang', currentLang);
  // Estado visual del selector: muestra el idioma destino + aria-pressed.
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    langBtn.setAttribute('aria-label', currentLang === 'es' ? 'Switch to English' : 'Cambiar a español');
    langBtn.setAttribute('aria-pressed', String(currentLang === 'en'));
    langBtn.classList.toggle('border-[#d4f321]', currentLang === 'en');
    langBtn.classList.toggle('text-[#d4f321]', currentLang === 'en');
  }
  // Botón de menú según estado + idioma.
  const menuBtn = document.getElementById('menu-btn');
  const overlayEl = document.getElementById('menu-overlay');
  if (menuBtn && overlayEl) {
    const open = !overlayEl.classList.contains('hidden');
    menuBtn.textContent = open ? t('menu.close') : t('menu.open');
    menuBtn.setAttribute('aria-label', open ? t('menu.ariaClose') : t('menu.ariaOpen'));
  }
}

function setLanguage(lang, opts = {}) {
  if (lang !== 'es' && lang !== 'en') return;
  const animate = opts.animate !== false;
  currentLang = lang;
  try { localStorage.setItem('jr-lang', lang); } catch (e) { /* noop */ }
  const targets = document.querySelectorAll('[data-i18n]');
  if (animate && hasAnime() && targets.length) {
    window.anime({
      targets,
      opacity: [1, 0.15],
      duration: 150,
      easing: 'easeInQuad',
      complete: () => {
        applyTexts();
        window.anime({ targets, opacity: [0.15, 1], duration: 250, easing: 'easeOutQuad' });
      },
    });
  } else {
    applyTexts();
  }
}
window.setLanguage = setLanguage;
window.__setLang = (l, save) => setLanguage(l, { animate: save !== false });

// Aplica idioma inicial sin animación (evita flash antes del loader).
applyTexts();

// Toggle ES/EN con fade vía Anime.js.
document.addEventListener('DOMContentLoaded', () => {
  applyTexts();
  document.getElementById('lang-btn')?.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
});

// Menú fullscreen.
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('menu-overlay');
let menuOpen = false;

function setMenu(open) {
  menuOpen = open;
  const tt = (typeof window.__t === 'function') ? window.__t : ((k) => k);
  btn.textContent = open ? tt('menu.close') : tt('menu.open');
  btn.setAttribute('aria-label', open ? tt('menu.ariaClose') : tt('menu.ariaOpen'));
  // Fallback si i18n aún no cargó (claves sin traducir).
  if (btn.textContent === 'menu.open') btn.textContent = 'Menú';
  if (btn.textContent === 'menu.close') btn.textContent = 'Cerrar';
  btn.setAttribute('aria-expanded', String(open));
  overlay.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (!hasAnime()) {
    overlay.classList.toggle('hidden', !open);
    overlay.classList.toggle('flex', open);
    return;
  }
  if (open) {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    window.anime({ targets: overlay, opacity: [0, 1], duration: 350, easing: 'easeOutExpo' });
    window.anime({
      targets: overlay.querySelectorAll('.menu-link'),
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 600,
      delay: window.anime.stagger(80, { start: 100 }),
      easing: 'easeOutExpo',
    });
  } else {
    window.anime({
      targets: overlay,
      opacity: [1, 0],
      duration: 250,
      easing: 'easeInExpo',
      complete: () => {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
      },
    });
  }
}

btn?.addEventListener('click', () => setMenu(!menuOpen));
overlay?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) setMenu(false);
});

// Divide el hero en caracteres para animación por stagger (estilo editorial).
function splitChars(el) {
  if (!el) return [];
  const text = el.textContent;
  el.textContent = '';
  return [...text].map((ch) => {
    const s = document.createElement('span');
    s.className = 'inline-block';
    s.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(s);
    return s;
  });
}

function playIntro() {
  if (!hasAnime()) return;
  const line1 = splitChars(document.getElementById('hero-line-1'));
  const line2 = splitChars(document.getElementById('hero-line-2'));

  window.anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: line1, opacity: [0, 1], translateY: ['0.6em', 0], duration: 800, delay: window.anime.stagger(35) })
    .add({ targets: line2, opacity: [0, 1], translateY: ['0.6em', 0], duration: 800, delay: window.anime.stagger(35) }, '-=600');

  // Tarjetas de experiencia: fade-in + stagger al cargar.
  const cards = document.querySelectorAll('#project-cards .project-card');
  if (cards.length) {
    window.anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [36, 0],
      duration: 700,
      delay: window.anime.stagger(120, { start: 900 }),
      easing: 'easeOutExpo',
    });
  }
}

// Loader: se oculta al cargar, luego corre la intro. Con timeout de seguridad
// por si `load` tarda (hero.jpg pesado) o el CDN de anime falla.
let loaderDone = false;
function hideLoaderAndPlay() {
  if (loaderDone) return;
  loaderDone = true;
  const loader = document.getElementById('loader');
  if (!loader) {
    playIntro();
    return;
  }
  if (!hasAnime()) {
    loader.remove();
    playIntro();
    return;
  }
  window.anime({
    targets: loader,
    opacity: [1, 0],
    duration: 500,
    delay: 350,
    easing: 'easeInOutExpo',
    complete: () => {
      loader.remove();
      playIntro();
    },
  });
}

if (document.readyState === 'complete') hideLoaderAndPlay();
else window.addEventListener('load', hideLoaderAndPlay());
setTimeout(hideLoaderAndPlay, 2500);

// Reveals genéricos al entrar en viewport.
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  if (!hasAnime() || typeof IntersectionObserver === 'undefined') {
    els.forEach((el) => el.classList.add('revealed'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        window.anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 700,
          easing: 'easeOutExpo',
        });
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => observer.observe(el));
});
