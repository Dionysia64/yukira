let police = JSON.parse(localStorage.getItem("police"));
let size = JSON.parse(localStorage.getItem("size"));

document.addEventListener("DOMContentLoaded", async () => {
  fontSize(size);
  fontType(police);
});

function fontSize(size) {
  const html = document.querySelector(":not(.container)");
  html.style.fontSize = size;
}
function fontType(police) {
  const body = document.getElementById("grey");
  body.classList.add(police);
}