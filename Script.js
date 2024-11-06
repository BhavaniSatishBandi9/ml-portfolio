// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = "↑";
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = "🌙";
  darkModeToggle.classList.add('dark-mode-toggle');
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Store dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  