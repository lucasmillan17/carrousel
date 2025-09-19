const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Mostrar la primera imagen
showSlide(current);

// Navegación
prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Cambiar automáticamente cada 5 segundos
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);
