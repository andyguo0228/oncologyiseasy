document.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('theme-toggle');
  
    themeToggle.addEventListener('click', function() {
      var currentTheme = jtd.getTheme();
      
      if (currentTheme === 'dark') {
        // If current theme is dark, switch to light
        jtd.setTheme('light');
      } else {
        // If current theme is not dark, switch to dark
        jtd.setTheme('dark');
      }
    });
  });
  