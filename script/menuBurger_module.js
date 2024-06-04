/** Menu burger **/

menuBurger(); // trigger the burger button menu

function menuBurger() {
  const burger = document.querySelector("#burger");
  burger.addEventListener("click", () => {
    openBurger();
  });
  burger.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      openBurger();
      f;
    }
  });
}

function openBurger() {
  const accessibility = document.querySelector(".accessibilité");
  const nav = document.querySelector("header > nav > ul.menu");
  if (accessibility.classList.contains("block")) {
    accessibility.classList.remove("block");
    accessibility.style.display = "none";
    nav.style.display = "none";
  } else {
    accessibility.classList.add("block");
    accessibility.style.display = "flex";
    nav.style.display = "inline";
  }
}