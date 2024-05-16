const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.ul1.nav');

mobileMenu.addEventListener('click', function() {
  nav.classList.toggle('active');
});

function filterList() {
  const input = document.getElementById('tagInput').value; // Obtener el valor del input

  // Convertir el valor a minúsculas
  const inputLowerCase = input.toLowerCase();
  
  // Convertir el valor a mayúsculas
  const inputUpperCase = input.toUpperCase();

  
  const cards = document.querySelectorAll('.part4');

  cards.forEach(card => {
      const tags = card.getAttribute('data-tags').split(' ');

      if (tags.some(tag => tag.includes(input)) || input === '') {
          card.style.display = 'inline-block';
      } else {
          card.style.display = 'none';
      }
  });
}

