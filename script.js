const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
const icon = document.querySelector('.theme-toggle__icon');

function updateThemeUI() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  icon.textContent = isDark ? '☀' : '☾';
  toggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
}

toggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  updateThemeUI();
});

updateThemeUI();
