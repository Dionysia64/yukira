let url = new URLSearchParams(window.location.search).get("lang");
console.log(url);
let stateColor = JSON.parse(localStorage.getItem("stateColor")) || ["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff", "#FFE200",false];

/* Change color page */

changeColorPage("noirBlanc", "#fff", "#000", "#0100A9", true,  handleLinksHighlights);
changeColorPage("noirJaune", "#FAF1BC", "#000000", "#0100A9", true,  handleLinksHighlights);
changeColorPage("brunSaumon", "#FFBF86", "#0100A9", "#64001D", true,  handleLinksHighlights);
changeColorPage("mauveBlanc", "#FFFFFF", "#4D00FF", "#64001D", true,  handleLinksHighlights);
changeColorPage("blancBleu", "#002639", "#FFFFFF", "#FFE200", false,  handleLinksHighlights);
changeColorPage("jauneBleu", "#002639", "#FFE200", "#FFFFFF", false,  handleLinksHighlights);
changeColorPage("cielBleu", "#002639", "#82FFFF", "#FFFFFF", false,  handleLinksHighlights);
changeColorPage("limeBleu", "#002639", "#00FF00", "#FFFFFF", false,  handleLinksHighlights);
changeColorPage("blancNoir", "#000000", "#FFFFFF", "#FFE200", false,  handleLinksHighlights);
changeColorPage("jauneNoir", "#000000", "#FFE200", "#FFFFFF", false,  handleLinksHighlights);
changeColorPage("cielNoir", "#000000", "#82FFFF", "#FFFFFF", false,  handleLinksHighlights);
changeColorPage("limeNoir", "#000000", "#00FF00", "#FFFFFF", false,  handleLinksHighlights);

colorChange(handleLinksHighlights, stateColor);

handleLinksHighlights(stateColor[0]);

switchLanguages(url);

reset();

handleGrey(); // trigger the grey mode change

getLang("btn-fr", "Français");
getLang("btn-ger", "Deutsch");
getLang("btn-it", "Italiano");
getLang("btn-eng", "English");
getLang("btn-grec", "Ellinika");


function switchLanguages(url) {
  switch (url) {
    case "Français":
      languages("Français");
      break;
    case "Deutsch":
      languages("Deutsch");
      break;
    case "Italiano":
      languages("Italiano");
      break;
    case "English":
      languages("English");
      break;
    case "Ellinika":
      languages("Ellinika");
      break;
    default:
      languages("Français");
      break;
  }
}

async function colorChange(callback, array = ["default", "linear-gradient(120deg, rgb(2, 2, 77), black 50%)", "#fff", "#FFE200", false]) {
  const body = document.getElementById("grey");
  const links = document.querySelectorAll("a:not(.lien-cards):not(.damier-link)");
  const textes = document.getElementsByTagName("p");
  const figcaption = document.querySelector("div.illustration > figure > figcaption");
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
  const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");
  callback(array[0]);
  body.style.background = array[1];
  figcaption.style.color = array[2];
  Array.from(links).forEach((link) => {
    link.style.color = array[3];
    link.addEventListener("focus", function () {
      link.style.color = "#ffffff";
    });
    link.addEventListener("blur", function () {
      link.style.color = array[3];
    });
    link.addEventListener("mouseenter", () => {
      link.style.color = "#ffffff";
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = array[3];
    });
  });
  Array.from(textes).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h1).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h2).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h3).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h4).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h5).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h6).forEach((text) => {
    text.style.color = array[2];
  });
  await Promise.all([
    logoColor(array[4]),
    logoColorGr(array[4]),
    logoColorIt(array[4]),
    logoColorEng(array[4]),
    logoColorGrg(array[4])
  ]);
  return;
}

async function logoColor(boolean) {
    const s1 = document.querySelectorAll(".s1");
    const s3 = document.querySelectorAll(".s3");
    const s4 = document.querySelectorAll(".s4");
    const s6 = document.querySelectorAll(".s6");
    const s8 = document.querySelectorAll(".s8");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1.forEach((s) => {
        s.style.fill = dark;
      });
      s3.forEach((s) => {
        s.style.fill = dark;
      });
      s4.forEach((s) => {
        s.style.fill = dark;
      });
      s6.forEach((s) => {
        s.style.fill = dark;
      });
      s8.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1.forEach((s) => {
        s.style.fill = light;
      });
      s3.forEach((s) => {
        s.style.fill = light;
      });
      s4.forEach((s) => {
        s.style.fill = light;
      });
      s6.forEach((s) => {
        s.style.fill = light;
      });
      s8.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorGr(boolean) {
    const s1g = document.querySelectorAll(".s1g");
    const s2g = document.querySelectorAll(".s2g");
    const s4g = document.querySelectorAll(".s4g");
    const s6g = document.querySelectorAll(".s6g");
    const s7g = document.querySelectorAll(".s7g");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1g.forEach((s) => {
        s.style.fill = dark;
      });
      s2g.forEach((s) => {
        s.style.fill = dark;
      });
      s4g.forEach((s) => {
        s.style.fill = dark;
      });
      s6g.forEach((s) => {
        s.style.fill = dark;
      });
      s7g.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1g.forEach((s) => {
        s.style.fill = light;
      });
      s2g.forEach((s) => {
        s.style.fill = light;
      });
      s4g.forEach((s) => {
        s.style.fill = light;
      });
      s6g.forEach((s) => {
        s.style.fill = light;
      });
      s7g.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorIt(boolean) {
    const s1i = document.querySelectorAll(".s1i");
    const s3i = document.querySelectorAll(".s3i");
    const s4i = document.querySelectorAll(".s4i");
    const s6i = document.querySelectorAll(".s6i");
    const s7i = document.querySelectorAll(".s7i");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1i.forEach((s) => {
        s.style.fill = dark;
      });
      s3i.forEach((s) => {
        s.style.fill = dark;
      });
      s4i.forEach((s) => {
        s.style.fill = dark;
      });
      s6i.forEach((s) => {
        s.style.fill = dark;
      });
      s7i.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1i.forEach((s) => {
        s.style.fill = light;
      });
      s3i.forEach((s) => {
        s.style.fill = light;
      });
      s4i.forEach((s) => {
        s.style.fill = light;
      });
      s6i.forEach((s) => {
        s.style.fill = light;
      });
      s7i.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorEng(boolean) {
    const s1en = document.querySelectorAll(".s1en");
    const s3en = document.querySelectorAll(".s3en");
    const s5en = document.querySelectorAll(".s5en");
    const s6en = document.querySelectorAll(".s6en");
    const s7en = document.querySelectorAll(".s7en");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1en.forEach((s) => {
        s.style.fill = dark;
      });
      s3en.forEach((s) => {
        s.style.fill = dark;
      });
      s5en.forEach((s) => {
        s.style.fill = dark;
      });
      s6en.forEach((s) => {
        s.style.fill = dark;
      });
      s7en.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1en.forEach((s) => {
        s.style.fill = light;
      });
      s3en.forEach((s) => {
        s.style.fill = light;
      });
      s5en.forEach((s) => {
        s.style.fill = light;
      });
      s6en.forEach((s) => {
        s.style.fill = light;
      });
      s7en.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorGrg(boolean) {
    const s1grg = document.querySelectorAll(".s1grg");
    const s3grg = document.querySelectorAll(".s3grg");
    const s5grg = document.querySelectorAll(".s5grg");
    const s6grg = document.querySelectorAll(".s6grg");
    const s7grg = document.querySelectorAll(".s7grg");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1grg.forEach((s) => {
        s.style.fill = dark;
      });
      s3grg.forEach((s) => {
        s.style.fill = dark;
      });
      s5grg.forEach((s) => {
        s.style.fill = dark;
      });
      s6grg.forEach((s) => {
        s.style.fill = dark;
      });
      s7grg.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1grg.forEach((s) => {
        s.style.fill = light;
      });
      s3grg.forEach((s) => {
        s.style.fill = light;
      });
      s5grg.forEach((s) => {
        s.style.fill = light;
      });
      s6grg.forEach((s) => {
        s.style.fill = light;
      });
      s7grg.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

    /* logo */

function changeColorPage(
  nameColor,
  backColor,
  frontColor,
  secondaryColor,
  flag = false,
  callback
) {
  const btns = document.querySelectorAll(".dropdown-menu-color > li > button");
  const body = document.getElementById("grey");
  const links = document.querySelectorAll(
    "a:not(.lien-cards):not(.damier-link)"
  );
  const textes = document.getElementsByTagName("p");
  const figcaption = document.querySelector("figure > figcaption");
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
  const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains(nameColor)) {
        callback(nameColor);
        localStorage.setItem(
          "stateColor",
          JSON.stringify([
            nameColor,
            backColor,
            frontColor,
            secondaryColor,
            flag,
          ])
        );
        logoColor(flag);
        logoColorGr(flag);
        logoColorIt(flag);
        logoColorEng(flag);
        logoColorGrg(flag);
        body.style.background = backColor;
        figcaption.style.color = frontColor;
        Array.from(links).forEach((link) => {
          link.style.color = secondaryColor;
          link.addEventListener("focus", function () {
            link.style.color = "#ffffff";
          });
          link.addEventListener("blur", function () {
            link.style.color = secondaryColor;
          });
          link.addEventListener("mouseenter", () => {
            link.style.color = "#ffffff";
          });
          link.addEventListener("mouseleave", () => {
            link.style.color = secondaryColor;
          });
        });
        Array.from(textes).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h1).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h2).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h3).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h4).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h5).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h6).forEach((text) => {
          text.style.color = frontColor;
        });
      }
    });
  });
}

/* Niveau de gris */

function handleGrey() {
  const btn = document.getElementById("grey-screen");
  const body = document.querySelector("body");
  btn.addEventListener("click", () => {
    if (body.classList.contains("grey") && grey) {
      body.style.filter = "unset";
      body.classList.remove("grey");
    } else {
      body.style.filter = "grayscale(100%)";
      body.classList.add("grey");
    }
  });
}

/* Change the font */

function changeFont(police = "Verdana") {
  const body = document.getElementById("grey");
  if (police === "LexieReadable") {
    body.classList.add("LexieReadable");
    body.classList.remove("Luciole");
    body.classList.remove("Verdana");
    localStorage.setItem("police", JSON.stringify(police));
  } else if (police === "Luciole") {
    body.classList.remove("LexieReadable");
    body.classList.remove("Verdana");
    body.classList.add("Luciole");
    localStorage.setItem("police", JSON.stringify(police));
  } else {
    body.classList.add("Verdana");
    body.classList.remove("LexieReadable");
    body.classList.remove("Luciole");
    localStorage.setItem("police", JSON.stringify(police));
  }
}

document.getElementById("Luciole").addEventListener("click", function () {
  changeFont("Luciole");
});

document.getElementById("LexieReadable").addEventListener("click", function () {
  changeFont("LexieReadable");
});

document.getElementById("Verdana").addEventListener("click", function () {
  changeFont();
});

/* Handle language traduction */

function displayLang(data) {
    head(data);
    header(data);
    menu(data);
    main(data);
    footer(data);
  }
  
  async function retrieveData() {
    try {
      const response = await fetch("../data.json");
      if (!response.ok) {
        console.error("Error loading data");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
  
  function languages(lang) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("lang", lang);
    // Récupère le fragment (ancre) de l'URL actuelle
    const hash = window.location.hash;
    // Construit la nouvelle URL avec le fragment inclus
    const newUrl = window.location.pathname + "?" + urlParams.toString() + hash;
    // Met à jour l'historique du navigateur avec la nouvelle URL
    window.history.pushState({}, "", newUrl);
    retrieveData()
      .then((data) => {
        switch (lang) {
          case "Français":
            displayLang(data.french);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
            break;
          case "Deutsch":
            displayLang(data.germany);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
            break;
          case "Italiano":
            displayLang(data.italy);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
            break;
          case "English":
            displayLang(data.english);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
            break;
          case "Ellinika":
            displayLang(data.greek);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
            break;
          default:
            throw new Error("Unknown language");
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
  
  function getLang(id, lang) {
    const btn = document.getElementById(id);
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("lang", lang);
      const newUrl = window.location.pathname + "?" + urlParams.toString();
      window.history.pushState({}, "", newUrl);
      retrieveData()
        .then((data) => {
          switch (lang) {
            case "Français":
              displayLang(data.french);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              
              stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
              break;
            case "Deutsch":
              displayLang(data.germany);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              
              stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
              break;
            case "Italiano":
              displayLang(data.italy);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              
              stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
              break;
            case "English":
              displayLang(data.english);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              
              stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
              break;
            case "Ellinika":
              displayLang(data.greek);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              
              stateColor ? colorChange(handleLinksHighlights, stateColor) : colorChange(handleLinksHighlights);
              break;
            default:
              throw new Error("Unknown language");
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  }
  
  function head(data) {
    const lang = document.getElementsByTagName("html")[0];
    lang.lang = data.head.lang;
    const title = document.getElementsByTagName("title")[0];
    title.innerHTML = data.head.title;
    const metaTags = document.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute("name") === "description") {
        metaTags[i].content = data.head.description;
      }
    }
  }
  
  function header(data) {
    const svg = document.getElementsByTagName("svg")[0];
    svg.innerHTML = data.header.svg;
    const linkHref = document.querySelector("div.en-tete > a.logo");
    linkHref.href = data.header.linkLogo;
    linkHref.ariaLabel = data.header.ariaTitle;
  }
  
  function menu(data) {
    const menuArrays = document.querySelectorAll("nav > ul.menu > li > a");
    for (let i = 0; i < data.header.menu.length; i++) {
      menuArrays[i].innerHTML = data.header.menu[i];
      menuArrays[i].href = data.header.linksMenu[i];
    }
    const imgs = document.querySelectorAll("div.langues > ul > li > a > img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].alt = data.header.langues[i];
    }
  }
  
function main(data) {
  const img = document.querySelector(
    "div.illustration > figure.illustration_figure > img"
  );
  img.src = data.main.illustration.img.imgUrl;
  img.alt = data.main.illustration.img.alt;
  const texte1 = document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > span")[0];
  texte1.innerHTML = data.main.illustration.img.figcaption.span1;
  const linkCloe = document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > a");
  linkCloe.innerHTML = data.main.illustration.img.figcaption.link;
  const texte2 = document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > span")[1];
  texte2.innerHTML = data.main.illustration.img.figcaption.span2;
  const title1 = document.querySelector("section.bienvenue > h1 > a");
  const title2 = document.querySelector(
    "section.bienvenue > div.titre_accueil > h2"
  );
  const p1 = document.querySelectorAll(
    "section.bienvenue > div.paragraphe_accueil > p"
  )[0];
  const p2Span1 = document.querySelectorAll(
    "section.bienvenue > div.paragraphe_accueil > p"
  )[1].querySelectorAll("span")[0];
  const p2Link = document.querySelectorAll(
    "section.bienvenue > div.paragraphe_accueil > p"
  )[1].querySelector("a");
  const p2Span2 = document.querySelectorAll(
    "section.bienvenue > div.paragraphe_accueil > p"
  )[1].querySelectorAll("span")[1];
  const p3 = document.querySelectorAll(
    "section.bienvenue > div.paragraphe_accueil > p"
  )[2];
  title1.innerHTML = data.main.bienvenue.title1;
  title2.innerHTML = data.main.bienvenue.title2;
  p1.innerHTML = data.main.bienvenue.paragraphe.p1;
  p2Span1.innerHTML = data.main.bienvenue.paragraphe.p2.span1;
  p2Link.href = data.main.bienvenue.paragraphe.p2.linkHref;
  p2Link.innerHTML = data.main.bienvenue.paragraphe.p2.link;
  p2Span2.innerHTML = data.main.bienvenue.paragraphe.p2.span2;
  p3.innerHTML = data.main.bienvenue.paragraphe.p3;
  const img1 = document.querySelectorAll(
    "div.communication > div.cards > div.card > img"
  )[0];
  const link1 = document.querySelectorAll(
    "div.communication > div.cards > div.card > a"
  )[0];
  img1.src = data.main.communication.card1.imgUrl;
  img1.alt = data.main.communication.card1.alt;
  link1.innerHTML = data.main.communication.card1.link;
  const img2 = document.querySelectorAll(
    "div.communication > div.cards > div.card > img"
  )[1];
  const link2 = document.querySelectorAll(
    "div.communication > div.cards > div.card > a"
  )[1];
  img2.alt = data.main.communication.card2.alt;
  link2.innerHTML = data.main.communication.card2.link;
  const titleVideo = document.querySelector(
    "div.sub-container_child_h2 > h2 > a"
  );
  const paragraphe = document.querySelector("div.sub-container_child_h2 > p");
  titleVideo.innerHTML = data.main.video.title;
  paragraphe.innerHTML = data.main.video.paragraphe;
  const video = document.querySelector("div.video-container > iframe");
  video.title = data.main.video.titleVideo;
  const titleQuiz = document.querySelector("div.quiz > a");
  const paragrapheQuiz = document.querySelector("div.quiz > p");
  titleQuiz.innerHTML = data.main.video.quiz.link;
  paragrapheQuiz.innerHTML = data.main.video.quiz.paragraphe;
}
  
  function footer(data) {
    const lineImg = document.querySelector("div.line_break > img");
    lineImg.alt = data.footer.lineBreak.alt;
    const groupImg1 = document.querySelectorAll(
      "div.container > a > div > div > img"
    );
    const groupImg2 = document.querySelectorAll("div.container > a > div > img");
    groupImg1[0].alt = data.footer.damier.case1.titleAlt;
    groupImg1[1].alt = data.footer.damier.case2.titleAlt;
    groupImg1[2].alt = data.footer.damier.case3.titleAlt;
    groupImg1[3].alt = data.footer.damier.case7.titleAlt;
    groupImg1[4].alt = data.footer.damier.case8.titleAlt;
    groupImg1[5].alt = data.footer.damier.case9.titleAlt;
    groupImg2[0].alt = data.footer.damier.case4.titleAlt;
    groupImg2[1].alt = data.footer.damier.case5.titleAlt;
    groupImg2[2].alt = data.footer.damier.case6.titleAlt;
    const titleH3 = document.querySelectorAll(
      "div.container > a > div > div > h3"
    );
    const titleH4Group1 = document.querySelectorAll(
      "div.container > a > div > h4"
    );
    const titleH4Group2 = document.querySelectorAll(
      "div.container > a > div > div > h4"
    );
    titleH3[0].innerHTML = data.footer.damier.case1.title3;
    titleH3[1].innerHTML = data.footer.damier.case2.title3;
    titleH3[2].innerHTML = data.footer.damier.case3.title3;
    titleH4Group1[0].innerHTML = data.footer.damier.case4.title4;
    titleH4Group1[1].innerHTML = data.footer.damier.case5.title4;
    titleH4Group1[2].innerHTML = data.footer.damier.case6.title4;
    titleH4Group2[0].innerHTML = data.footer.damier.case7.title4;
    titleH4Group2[1].innerHTML = data.footer.damier.case8.title4;
    titleH4Group2[2].innerHTML = data.footer.damier.case9.title4;
    const linkDamier = document.querySelectorAll("footer > div.container > a");
    const cases = data.footer.damier;
    linkDamier.forEach((link, index) => {
      link.href = cases[`case${index + 1}`].href;
    });
    const linksSubFooter = document.querySelectorAll(
      "div.sub-container > div > ul > li a"
    );
    for (let i = 0; i < linksSubFooter.length; i++) {
      linksSubFooter[i].innerHTML = data.footer.subMenuFooter[i];
    }
    const textSubFooter = document.querySelectorAll(
      "section.sub-footer > div.elements-footer > h3"
    );
    for (let i = 0; i < textSubFooter.length; i++) {
      textSubFooter[i].innerHTML = data.footer.subFooter[i];
    }
    const urlQuest = document.querySelector("#grey > main > section.video > div.quiz > a");
    urlQuest.href = data.main.video.quiz.linkQuest;
  }
  
  async function colorChangeDefault(array, callback) {
    const body = document.getElementById("grey");
    const links = document.querySelectorAll(
      "a:not(.lien-cards):not(.damier-link)"
    );
    const textes = document.getElementsByTagName("p");
    const figcaption = document.querySelector("div.illustration > figure > figcaption");
    const h1 = document.getElementsByTagName("h1");
    const h2 = document.getElementsByTagName("h2");
    const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
    const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
    const h5 = document.getElementsByTagName("h5");
    const h6 = document.getElementsByTagName("h6");
    callback();
    body.style.background = array[1];
    figcaption.style.color = array[2];
    Array.from(links).forEach((link) => {
      link.style.color = array[3];
      link.addEventListener("focus", function () {
        link.style.color = "#ffffff";
      });
      link.addEventListener("blur", function () {
        link.style.color = array[3];
      });
      link.addEventListener("mouseenter", () => {
        link.style.color = "#ffffff";
      });
      link.addEventListener("mouseleave", () => {
        link.style.color = array[3];
      });
    });
    Array.from(textes).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h1).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h2).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h3).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h4).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h5).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h6).forEach((text) => {
      text.style.color = array[2];
    });
    await Promise.all([
      logoColor(array[4]),
      logoColorGr(array[4]),
      logoColorIt(array[4]),
      logoColorEng(array[4]),
      logoColorGrg(array[4])
    ]);
    return;
  }
  
  function reset() {
    const btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", () => {
      const url = new URLSearchParams(window.location.search).get("lang");
      localStorage.removeItem("stateColor");
      stateColor = null;
      switchLanguages(url);
      colorChangeDefault(["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff", "#FFE200",false], handleLinksHighlights);
    });
  }
  
  /* got To Top */
  
  window.addEventListener("scroll", scrollFunction);
  
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  scrollToTopBtn.addEventListener("click", () => {
    scrollToTop();
  });
  
  function scrollFunction() {
      if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  }
  
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  highLightQuiz();

  function highLightQuiz() {
    const quest = document.querySelector("#quiz > a");
    const btn = document.querySelector("#grey > header > nav > ul > li:nth-child(8) > a");
    btn.addEventListener("click", () => {
      quest.classList.add("highLightQuiz");
    })
  }