// document.querySelectorAll('.faq-item h3 img').forEach(icon => {
//   icon.addEventListener('click', () => {
//     const faqItem = icon.closest('.faq-item');
//     faqItem.classList.toggle('active');
//   });
// });


document.querySelectorAll('.faq-item h3 img').forEach(icon => {
  icon.addEventListener('click', () => {
    const faqItem = icon.closest('.faq-item');
    faqItem.classList.toggle('active');
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

if (mobileMenuBtn && mobileMenu && menuIcon) {
  let isMenuOpen = false;

  const closeMenu = () => {
    isMenuOpen = false;
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    menuIcon.textContent = '☰';
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    isMenuOpen = true;
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    menuIcon.textContent = '✕';
    document.body.style.overflow = 'hidden';
  };

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMenuOpen) closeMenu(); else openMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    if (isMenuOpen && navbar && !navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 576 && isMenuOpen) {
      closeMenu();
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => closeMenu());
  });
}






  // document.addEventListener('DOMContentLoaded', function() {
  //   const carousel = document.querySelector('.seven .reviews');
  //   const slides = carousel.querySelectorAll('.review');
  //   let currentSlide = 0;
  //   const totalSlides = slides.length; // Auto-detects 5
  //   const slideDuration = 5000; // ms per slide
  //   function nextSlide() {
  //     currentSlide = (currentSlide + 1) % totalSlides;
  //     carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  //     carousel.style.transition = 'transform 0.5s ease'; // Smooth shift
  //   }
  //   let interval = setInterval(nextSlide, slideDuration);
  //   carousel.addEventListener('mouseenter', () => clearInterval(interval));
  //   carousel.addEventListener('mouseleave', () => interval = setInterval(nextSlide, slideDuration));
  //   // Reset transition for loop seamlessness
  //   setInterval(() => { carousel.style.transition = 'none'; }, slideDuration * totalSlides);
  // });

  