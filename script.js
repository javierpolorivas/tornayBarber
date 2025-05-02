// ANIMACIONES DE SCROLL
const animElements = document.querySelectorAll('.fade-in, .zoom-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.1
});

animElements.forEach(el => {
  observer.observe(el);
  el.style.animationPlayState = 'paused';
});



// MENU HAMBURGUESA
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('active');
});

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('active');
});