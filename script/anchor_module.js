const array = document.querySelectorAll('a[href^="#"]');

function anchor(selector) {
  selector.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Empêche le comportement par défaut du lien
          const targetId = anchor.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'start',
                  boundary: targetElement
              });
          }
      });
  });
}

anchor(array);

