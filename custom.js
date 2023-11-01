window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  let scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    header.classList.remove('scrolled');
    header.style.transform = 'translateY(0)';
  } 
  else if (scrollPosition > 0 && scrollPosition <= 100) {
      header.style.transform = 'translateY(-100%)';
  } else {
      header.classList.add('scrolled');
  }
});