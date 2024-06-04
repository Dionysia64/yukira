/** Menu burger child dropdown **/
dropDown("color-change", ".dropdown-menu-color", "-150px"); // trigger the color change
dropDown("taille", ".dropdown-menu-taille", "50px"); // trigger the size change
dropDown("font-change", ".dropdown-menu-font", "-50px"); // trigger the font change

function dropDown(id, option, values) {
    const dropdown = document.querySelector(option);
    const dropdownColor = document.getElementById(id);
    dropdownColor.addEventListener("click", () => {
      if (dropdownColor.classList.contains("on")) {
        dropdown.style.display = "flex";
        dropdown.style.position = "absolute";
        dropdown.style.top = "50px";
        dropdown.style.left = values;
        dropdown.style.padding = "unset";
        dropdownColor.classList.remove("on");
      } else {
        dropdown.style.display = "none";
        dropdownColor.classList.add("on");
      }
    });
  }