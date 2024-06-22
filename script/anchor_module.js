const array = document.querySelectorAll('a[href^="#"]:not(footer > div.container > a)');

function anchor(selector) {
  selector.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Empêche le comportement par défaut du lien
          const targetId = anchor.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - document.documentElement.clientTop;
              window.scrollTo({
                  top: topOffset,
                  behavior: 'smooth'
              });
          }
      });
  });
}

anchor(array);

