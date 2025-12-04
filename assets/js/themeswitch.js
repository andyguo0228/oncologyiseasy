document.addEventListener('DOMContentLoaded', function() {
  var themeToggle = document.getElementById('theme-toggle');
  var currentTheme = localStorage.getItem('theme');

  // Only proceed if theme toggle button exists
  if (!themeToggle) return;

  if (currentTheme) {
    jtd.setTheme(currentTheme);
  }

  themeToggle.addEventListener('click', function() {
    currentTheme = jtd.getTheme();

    if (currentTheme === 'dark') {
      // If current theme is dark, switch to light
      jtd.setTheme('light');
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<span>☀️</span>';
    } else {
      // If current theme is not dark, switch to dark
      jtd.setTheme('dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<span>🌙</span>';
    }
  });

  // Set initial icon based on current theme
  var initialTheme = jtd.getTheme();
  if (initialTheme === 'dark') {
    themeToggle.innerHTML = '<span>🌙</span>';
  } else {
    themeToggle.innerHTML = '<span>☀️</span>';
  }
});
