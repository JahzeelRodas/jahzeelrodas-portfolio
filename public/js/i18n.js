// Compat: la lógica i18n vive ahora en public/js/main.js (setLanguage / window.__t).
// Este archivo queda como shim para HTML en caché que aún cargue /js/i18n.js.
// No registra listeners para evitar doble toggle.
(function () {
  if (typeof window !== 'undefined' && typeof window.__setLang === 'function') return;
  // Fallback mínimo si main.js no cargó: respeta idioma guardado en <html lang>.
  try {
    var l = localStorage.getItem('jr-lang');
    if (l === 'es' || l === 'en') document.documentElement.setAttribute('lang', l);
  } catch (e) {}
})();
