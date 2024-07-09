function handleLinksHighlights(nameColor) {
    const links = document.querySelectorAll("a");
    const btnHighlight = document.querySelector("#daltonien-links");
    let isHighlighted = false;
  
    btnHighlight.addEventListener("click", () => {
      isHighlighted = !isHighlighted; // Toggle the state of isHighlighted
  
      links.forEach(link => {
        if (isHighlighted) {
          if (["noirBlanc", "noirJaune", "brunSaumon", "mauveBlanc"].includes(nameColor)) {
            link.classList.add("linksHighLights");
          } else if (["blancBleu", "jauneBleu", "cielBleu", "limeBleu", "blancNoir", "jauneNoir", "cielNoir", "limeNoir"].includes(nameColor)){
            link.classList.add("linksHighDarks");
          }
        } else {
          link.classList.remove("linksHighLights", "linksHighDarks");
        }
      });
    });
  }