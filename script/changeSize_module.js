const btnsSizes = document.querySelectorAll("ul.dropdown-menu-taille > li > button");
const valuesSizes = ["8px", "12px", "16px", "18px", "20px", "22px"];
const lineHeights = ["50px", "75px", "150px", "150px", "150px", "150px"];

document.addEventListener("DOMContentLoaded", async () => {
        /* buttons funtions change */
        for(let i = 0; i < btnsSizes.length; i++) {
        changeSize(valuesSizes[i], btnsSizes[i], lineHeights[i]);
    }
});

/* Size change */
function changeSize(size, button, lineHeight = "150px") {
  const html = document.querySelector(":not(.container)");
  //const paragraphe = document.querySelector(".paragraphe_accueil");
  button.addEventListener("click", () => {
    html.style.fontSize = size;
    //paragraphe.style.lineHeight = lineHeight;
    localStorage.setItem("size", JSON.stringify(size));
  });
}