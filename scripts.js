// Smooth scrolling
document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Interactive Cards
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-hover');
    });

    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-hover');
    });
  });
});
