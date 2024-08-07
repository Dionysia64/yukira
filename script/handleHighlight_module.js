function handleLinksHighlights(nameColor = "default") {
    const links = document.querySelectorAll("a");
    const btnHighlight = document.querySelector("#daltonien-links");
    let isHighlighted = false;
  
    btnHighlight.addEventListener("click", () => {
      isHighlighted = !isHighlighted; // Toggle the state of isHighlighted

      links.forEach(link => {
        if (isHighlighted) {
          if (["noirBlanc", "noirJaune", "brunSaumon", "mauveBlanc"].includes(nameColor)) {
            link.classList.add("linksHighLights");
            link.classList.remove("linksHighDarks");
          } else if (["blancBleu", "jauneBleu", "cielBleu", "limeBleu", "blancNoir", "jauneNoir", "cielNoir", "limeNoir", "default"].includes(nameColor)){
            link.classList.add("linksHighDarks");
            link.classList.remove("linksHighLights");
          }
        } else {
          link.classList.remove("linksHighDarks");
          link.classList.remove("linksHighLights");
        }
      });
    });
  }