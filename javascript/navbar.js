// Scroll background color
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll spy navbar
window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navLinks = navbar.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section');

  // home langsung merah waktu pertama kali masuk website
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#home') {
      link.classList.add('active');
    }
  });

  window.addEventListener('scroll', () => {
    const currentPos = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbar.offsetHeight;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = navbar.querySelector(`a[href="#${sectionId}"]`);

      if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });

  // Menambahkan event listener ke setiap elemen li
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const targetTop = targetSection.offsetTop - navbar.offsetHeight + 1;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });

      // Menutup hamburger menu setelah mengklik tautan
      const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
      hamburgerCheckbox.checked = false;
    });
  });
});

// Menutup hamburger menu saat mengklik di luar navigasi
window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburgerCheckbox = document.getElementById('hamburger-checkbox');

  // Menambahkan event listener ke dokumen
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Mengecek apakah target yang diklik bukan bagian dari navigasi
    if (!navbar.contains(target)) {
      hamburgerCheckbox.checked = false;
    }
  });
});
