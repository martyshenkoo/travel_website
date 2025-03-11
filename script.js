window.addEventListener('scroll', function () {
  const navigationBar = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
});

