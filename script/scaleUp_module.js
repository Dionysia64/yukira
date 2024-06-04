
if (window.innerWidth >= 768) {
    scaleUp("section.about > div > figure > img");
    scaleUp("section.about > div > div > img");
    scaleUp("section.informations > div > figure > img");
    scaleUp("section.informations > div > div > img");
    scaleUp("section.informations > div > a > div > img");
    scaleUp("section.itinéraire > div > figure > img");
    scaleUp("section.itinéraire > div > div > img");
  }
  
  function scaleUp(selector) {
    const imgs = document.querySelectorAll(selector);
    imgs.forEach((img) => {
      img.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        img.classList.add('scaleUp');
    });
    img.addEventListener("mouseleave", (e) => {
      e.preventDefault();
        img.classList.remove('scaleUp');
    });
  });
  }