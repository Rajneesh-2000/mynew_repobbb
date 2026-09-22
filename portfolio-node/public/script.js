// Count the uptime figure up once on load — the single deliberate motion moment.
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.metric-value');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const target = 99.9;
  const unit = el.querySelector('.metric-unit');
  const unitHTML = unit ? unit.outerHTML : '';
  let current = 0;
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    current = target * progress;
    el.innerHTML = current.toFixed(1) + unitHTML;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
