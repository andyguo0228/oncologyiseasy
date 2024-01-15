document.addEventListener('DOMContentLoaded', function() {
  var themeToggle = document.getElementById('theme-toggle');
  var currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    jtd.setTheme(currentTheme);
  }

  themeToggle.addEventListener('click', function() {
    currentTheme = jtd.getTheme();

    if (currentTheme === 'dark') {
      // If current theme is dark, switch to light
      jtd.setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      // If current theme is not dark, switch to dark
      jtd.setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});
