(() => {
  const root = document.body;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved){ root.setAttribute('data-theme', saved); }
  if(toggle){
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();


