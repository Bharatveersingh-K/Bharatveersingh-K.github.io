

  // Activate scrollreveal
  ScrollReveal().reveal('.skills-container .skills-card-1', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-out'
  });

  // Activate typed.js
  var typed = new Typed('.multiple-text', {
    strings: ["Full-stack Developer", "React Enthusiast", "Problem Solver"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  });

  // GitHub Calendar
  GitHubCalendar(".react-activity-calendar", "Bharatveersingh-K");

  // Initialize scrollreveal
  ScrollReveal().reveal('.about-content', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-out'
  });

  // Add a scroll event listener to change the background color of the navbar
  window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('navbar-bg');
    } else {
      header.classList.remove('navbar-bg');
    }
  });

 