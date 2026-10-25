// Day / Night theme toggle
(function () {
  var root = document.documentElement;
  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', theme);

  // Works even if the script loads before the button exists
  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('#theme')) return;
    theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (err) {}
  });
})();