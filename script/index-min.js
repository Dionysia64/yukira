let url=new URLSearchParams(window.location.search).get("lang"),stateColor=(console.log(url),JSON.parse(localStorage.getItem("stateColor"))||["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff","#FFE200",!1]);function switchLanguages(e){switch(e){case"Français":languages("Français");break;case"Deutsch":languages("Deutsch");break;case"Italiano":languages("Italiano");break;case"English":languages("English");break;case"Ellinika":languages("Ellinika");break;default:languages("Français")}}async function colorChange(e,l=["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff","#FFE200",!1]){var o=document.getElementById("grey"),t=document.querySelectorAll("a:not(.lien-cards):not(.damier-link)"),r=document.getElementsByTagName("p"),a=document.querySelector("div.illustration > figure > figcaption"),n=document.getElementsByTagName("h1"),i=document.getElementsByTagName("h2"),c=document.querySelectorAll("h3:not(.daminer-original-color)"),s=document.querySelectorAll("h4:not(.daminer-original-color)"),g=document.getElementsByTagName("h5"),d=document.getElementsByTagName("h6");e(l[0]),o.style.background=l[1],a.style.color=l[2],Array.from(t).forEach(e=>{e.style.color=l[3],e.addEventListener("focus",function(){e.style.color="#ffffff"}),e.addEventListener("blur",function(){e.style.color=l[3]}),e.addEventListener("mouseenter",()=>{e.style.color="#ffffff"}),e.addEventListener("mouseleave",()=>{e.style.color=l[3]})}),Array.from(r).forEach(e=>{e.style.color=l[2]}),Array.from(n).forEach(e=>{e.style.color=l[2]}),Array.from(i).forEach(e=>{e.style.color=l[2]}),Array.from(c).forEach(e=>{e.style.color=l[2]}),Array.from(s).forEach(e=>{e.style.color=l[2]}),Array.from(g).forEach(e=>{e.style.color=l[2]}),Array.from(d).forEach(e=>{e.style.color=l[2]}),await Promise.all([logoColor(l[4]),logoColorGr(l[4]),logoColorIt(l[4]),logoColorEng(l[4]),logoColorGrg(l[4])])}async function logoColor(e){var l=document.querySelectorAll(".s1"),o=document.querySelectorAll(".s3"),t=document.querySelectorAll(".s4"),r=document.querySelectorAll(".s6"),a=document.querySelectorAll(".s8");const n="#000",i="#fff";e?(l.forEach(e=>{e.style.fill=n}),o.forEach(e=>{e.style.fill=n}),t.forEach(e=>{e.style.fill=n}),r.forEach(e=>{e.style.fill=n}),a.forEach(e=>{e.style.fill=n})):(l.forEach(e=>{e.style.fill=i}),o.forEach(e=>{e.style.fill=i}),t.forEach(e=>{e.style.fill=i}),r.forEach(e=>{e.style.fill=i}),a.forEach(e=>{e.style.fill=i}))}async function logoColorGr(e){var l=document.querySelectorAll(".s1g"),o=document.querySelectorAll(".s2g"),t=document.querySelectorAll(".s4g"),r=document.querySelectorAll(".s6g"),a=document.querySelectorAll(".s7g");const n="#000",i="#fff";e?(l.forEach(e=>{e.style.fill=n}),o.forEach(e=>{e.style.fill=n}),t.forEach(e=>{e.style.fill=n}),r.forEach(e=>{e.style.fill=n}),a.forEach(e=>{e.style.fill=n})):(l.forEach(e=>{e.style.fill=i}),o.forEach(e=>{e.style.fill=i}),t.forEach(e=>{e.style.fill=i}),r.forEach(e=>{e.style.fill=i}),a.forEach(e=>{e.style.fill=i}))}async function logoColorIt(e){var l=document.querySelectorAll(".s1i"),o=document.querySelectorAll(".s3i"),t=document.querySelectorAll(".s4i"),r=document.querySelectorAll(".s6i"),a=document.querySelectorAll(".s7i");const n="#000",i="#fff";e?(l.forEach(e=>{e.style.fill=n}),o.forEach(e=>{e.style.fill=n}),t.forEach(e=>{e.style.fill=n}),r.forEach(e=>{e.style.fill=n}),a.forEach(e=>{e.style.fill=n})):(l.forEach(e=>{e.style.fill=i}),o.forEach(e=>{e.style.fill=i}),t.forEach(e=>{e.style.fill=i}),r.forEach(e=>{e.style.fill=i}),a.forEach(e=>{e.style.fill=i}))}async function logoColorEng(e){var l=document.querySelectorAll(".s1en"),o=document.querySelectorAll(".s3en"),t=document.querySelectorAll(".s5en"),r=document.querySelectorAll(".s6en"),a=document.querySelectorAll(".s7en");const n="#000",i="#fff";e?(l.forEach(e=>{e.style.fill=n}),o.forEach(e=>{e.style.fill=n}),t.forEach(e=>{e.style.fill=n}),r.forEach(e=>{e.style.fill=n}),a.forEach(e=>{e.style.fill=n})):(l.forEach(e=>{e.style.fill=i}),o.forEach(e=>{e.style.fill=i}),t.forEach(e=>{e.style.fill=i}),r.forEach(e=>{e.style.fill=i}),a.forEach(e=>{e.style.fill=i}))}async function logoColorGrg(e){var l=document.querySelectorAll(".s1grg"),o=document.querySelectorAll(".s3grg"),t=document.querySelectorAll(".s5grg"),r=document.querySelectorAll(".s6grg"),a=document.querySelectorAll(".s7grg");const n="#000",i="#fff";e?(l.forEach(e=>{e.style.fill=n}),o.forEach(e=>{e.style.fill=n}),t.forEach(e=>{e.style.fill=n}),r.forEach(e=>{e.style.fill=n}),a.forEach(e=>{e.style.fill=n})):(l.forEach(e=>{e.style.fill=i}),o.forEach(e=>{e.style.fill=i}),t.forEach(e=>{e.style.fill=i}),r.forEach(e=>{e.style.fill=i}),a.forEach(e=>{e.style.fill=i}))}function changeColorPage(l,o,t,r,a=!1,n){var e=document.querySelectorAll(".dropdown-menu-color > li > button");const i=document.getElementById("grey"),c=document.querySelectorAll("a:not(.lien-cards):not(.damier-link)"),s=document.getElementsByTagName("p"),g=document.querySelector("figure > figcaption"),d=document.getElementsByTagName("h1"),u=document.getElementsByTagName("h2"),h=document.querySelectorAll("h3:not(.daminer-original-color)"),m=document.querySelectorAll("h4:not(.daminer-original-color)"),f=document.getElementsByTagName("h5"),y=document.getElementsByTagName("h6");e.forEach(e=>{e.addEventListener("click",()=>{e.classList.contains(l)&&(n(l),localStorage.setItem("stateColor",JSON.stringify([l,o,t,r,a])),logoColor(a),logoColorGr(a),logoColorIt(a),logoColorEng(a),logoColorGrg(a),i.style.background=o,g.style.color=t,Array.from(c).forEach(e=>{e.style.color=r,e.addEventListener("focus",function(){e.style.color="#ffffff"}),e.addEventListener("blur",function(){e.style.color=r}),e.addEventListener("mouseenter",()=>{e.style.color="#ffffff"}),e.addEventListener("mouseleave",()=>{e.style.color=r})}),Array.from(s).forEach(e=>{e.style.color=t}),Array.from(d).forEach(e=>{e.style.color=t}),Array.from(u).forEach(e=>{e.style.color=t}),Array.from(h).forEach(e=>{e.style.color=t}),Array.from(m).forEach(e=>{e.style.color=t}),Array.from(f).forEach(e=>{e.style.color=t}),Array.from(y).forEach(e=>{e.style.color=t}))})})}function handleGrey(){var e=document.getElementById("grey-screen");const l=document.querySelector("body");e.addEventListener("click",()=>{l.classList.contains("grey")&&grey?(l.style.filter="unset",l.classList.remove("grey")):(l.style.filter="grayscale(100%)",l.classList.add("grey"))})}function changeFont(e="Verdana"){var l=document.getElementById("grey");"LexieReadable"===e?(l.classList.add("LexieReadable"),l.classList.remove("Luciole"),l.classList.remove("Verdana")):"Luciole"===e?(l.classList.remove("LexieReadable"),l.classList.remove("Verdana"),l.classList.add("Luciole")):(l.classList.add("Verdana"),l.classList.remove("LexieReadable"),l.classList.remove("Luciole")),localStorage.setItem("police",JSON.stringify(e))}function displayLang(e){head(e),header(e),menu(e),main(e),footer(e)}async function retrieveData(){try{var e=await fetch("../data.json");return e.ok||console.error("Error loading data"),await e.json()}catch(e){throw new Error(e)}}function languages(l){var e=new URLSearchParams(window.location.search),o=(e.set("lang",l),window.location.hash),e=window.location.pathname+"?"+e.toString()+o;window.history.pushState({},"",e),retrieveData().then(e=>{switch(l){case"Français":displayLang(e.french),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Deutsch":displayLang(e.germany),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Italiano":displayLang(e.italy),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"English":displayLang(e.english),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Ellinika":displayLang(e.greek),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;default:throw new Error("Unknown language")}}).catch(e=>{throw new Error(e)})}function getLang(e,l){document.getElementById(e).addEventListener("click",e=>{e.preventDefault();e=new URLSearchParams(window.location.search),e.set("lang",l),e=window.location.pathname+"?"+e.toString();window.history.pushState({},"",e),retrieveData().then(e=>{switch(l){case"Français":displayLang(e.french),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Deutsch":displayLang(e.germany),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Italiano":displayLang(e.italy),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"English":displayLang(e.english),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;case"Ellinika":displayLang(e.greek),(stateColor=JSON.parse(localStorage.getItem("stateColor")))?colorChange(handleLinksHighlights,stateColor):colorChange(handleLinksHighlights);break;default:throw new Error("Unknown language")}}).catch(e=>{throw new Error(e)})})}function head(l){document.getElementsByTagName("html")[0].lang=l.head.lang;document.getElementsByTagName("title")[0].innerHTML=l.head.title;var o=document.getElementsByTagName("meta");for(let e=0;e<o.length;e++)"description"===o[e].getAttribute("name")&&(o[e].content=l.head.description)}function header(e){document.getElementsByTagName("svg")[0].innerHTML=e.header.svg;var l=document.querySelector("div.en-tete > a.logo");l.href=e.header.linkLogo,l.ariaLabel=e.header.ariaTitle}function menu(l){var o=document.querySelectorAll("nav > ul.menu > li > a");for(let e=0;e<l.header.menu.length;e++)o[e].innerHTML=l.header.menu[e],o[e].href=l.header.linksMenu[e];var t=document.querySelectorAll("div.langues > ul > li > a > img");for(let e=0;e<t.length;e++)t[e].alt=l.header.langues[e]}function main(e){var l=document.querySelector("div.illustration > figure.illustration_figure > img");l.src=e.main.illustration.img.imgUrl,l.alt=e.main.illustration.img.alt,document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > span")[0].innerHTML=e.main.illustration.img.figcaption.span1,document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > a").innerHTML=e.main.illustration.img.figcaption.link;document.querySelectorAll("#grey > main > div.illustration > figure > figcaption > span")[1].innerHTML=e.main.illustration.img.figcaption.span2;var l=document.querySelector("section.bienvenue > h1 > a"),o=document.querySelector("section.bienvenue > div.titre_accueil > h2"),t=document.querySelectorAll("section.bienvenue > div.paragraphe_accueil > p")[0],r=document.querySelectorAll("section.bienvenue > div.paragraphe_accueil > p")[1].querySelectorAll("span")[0],a=document.querySelectorAll("section.bienvenue > div.paragraphe_accueil > p")[1].querySelector("a"),n=document.querySelectorAll("section.bienvenue > div.paragraphe_accueil > p")[1].querySelectorAll("span")[1],i=document.querySelectorAll("section.bienvenue > div.paragraphe_accueil > p")[2],l=(l.innerHTML=e.main.bienvenue.title1,o.innerHTML=e.main.bienvenue.title2,t.innerHTML=e.main.bienvenue.paragraphe.p1,r.innerHTML=e.main.bienvenue.paragraphe.p2.span1,a.href=e.main.bienvenue.paragraphe.p2.linkHref,a.innerHTML=e.main.bienvenue.paragraphe.p2.link,n.innerHTML=e.main.bienvenue.paragraphe.p2.span2,i.innerHTML=e.main.bienvenue.paragraphe.p3,document.querySelectorAll("div.communication > div.cards > div.card > img")[0]),o=document.querySelectorAll("div.communication > div.cards > div.card > a")[0],t=(l.src=e.main.communication.card1.imgUrl,l.alt=e.main.communication.card1.alt,o.innerHTML=e.main.communication.card1.link,document.querySelectorAll("div.communication > div.cards > div.card > img")[1]),r=document.querySelectorAll("div.communication > div.cards > div.card > a")[1],a=(t.alt=e.main.communication.card2.alt,r.innerHTML=e.main.communication.card2.link,document.querySelector("div.sub-container_child_h2 > h2 > a")),n=document.querySelector("div.sub-container_child_h2 > p");a.innerHTML=e.main.video.title,n.innerHTML=e.main.video.paragraphe;document.querySelector("div.video-container > iframe").title=e.main.video.titleVideo;i=document.querySelector("div.quiz > a"),l=document.querySelector("div.quiz > p");i.innerHTML=e.main.video.quiz.link,l.innerHTML=e.main.video.quiz.paragraphe}function footer(l){document.querySelector("div.line_break > img").alt=l.footer.lineBreak.alt;var e=document.querySelectorAll("div.container > a > div > div > img"),o=document.querySelectorAll("div.container > a > div > img"),e=(e[0].alt=l.footer.damier.case1.titleAlt,e[1].alt=l.footer.damier.case2.titleAlt,e[2].alt=l.footer.damier.case3.titleAlt,e[3].alt=l.footer.damier.case7.titleAlt,e[4].alt=l.footer.damier.case8.titleAlt,e[5].alt=l.footer.damier.case9.titleAlt,o[0].alt=l.footer.damier.case4.titleAlt,o[1].alt=l.footer.damier.case5.titleAlt,o[2].alt=l.footer.damier.case6.titleAlt,document.querySelectorAll("div.container > a > div > div > h3")),o=document.querySelectorAll("div.container > a > div > h4"),t=document.querySelectorAll("div.container > a > div > div > h4"),e=(e[0].innerHTML=l.footer.damier.case1.title3,e[1].innerHTML=l.footer.damier.case2.title3,e[2].innerHTML=l.footer.damier.case3.title3,o[0].innerHTML=l.footer.damier.case4.title4,o[1].innerHTML=l.footer.damier.case5.title4,o[2].innerHTML=l.footer.damier.case6.title4,t[0].innerHTML=l.footer.damier.case7.title4,t[1].innerHTML=l.footer.damier.case8.title4,t[2].innerHTML=l.footer.damier.case9.title4,document.querySelectorAll("footer > div.container > a"));const r=l.footer.damier;e.forEach((e,l)=>{e.href=r["case"+(l+1)].href});var a=document.querySelectorAll("div.sub-container > div > ul > li a");for(let e=0;e<a.length;e++)a[e].innerHTML=l.footer.subMenuFooter[e];var n=document.querySelectorAll("section.sub-footer > div.elements-footer > h3");for(let e=0;e<n.length;e++)n[e].innerHTML=l.footer.subFooter[e];document.querySelector("#grey > main > section.video > div.quiz > a").href=l.main.video.quiz.linkQuest}async function colorChangeDefault(l,e){var o=document.getElementById("grey"),t=document.querySelectorAll("a:not(.lien-cards):not(.damier-link)"),r=document.getElementsByTagName("p"),a=document.querySelector("div.illustration > figure > figcaption"),n=document.getElementsByTagName("h1"),i=document.getElementsByTagName("h2"),c=document.querySelectorAll("h3:not(.daminer-original-color)"),s=document.querySelectorAll("h4:not(.daminer-original-color)"),g=document.getElementsByTagName("h5"),d=document.getElementsByTagName("h6");e(),o.style.background=l[1],a.style.color=l[2],Array.from(t).forEach(e=>{e.style.color=l[3],e.addEventListener("focus",function(){e.style.color="#ffffff"}),e.addEventListener("blur",function(){e.style.color=l[3]}),e.addEventListener("mouseenter",()=>{e.style.color="#ffffff"}),e.addEventListener("mouseleave",()=>{e.style.color=l[3]})}),Array.from(r).forEach(e=>{e.style.color=l[2]}),Array.from(n).forEach(e=>{e.style.color=l[2]}),Array.from(i).forEach(e=>{e.style.color=l[2]}),Array.from(c).forEach(e=>{e.style.color=l[2]}),Array.from(s).forEach(e=>{e.style.color=l[2]}),Array.from(g).forEach(e=>{e.style.color=l[2]}),Array.from(d).forEach(e=>{e.style.color=l[2]}),await Promise.all([logoColor(l[4]),logoColorGr(l[4]),logoColorIt(l[4]),logoColorEng(l[4]),logoColorGrg(l[4])])}function reset(){document.getElementById("reset").addEventListener("click",()=>{var e=new URLSearchParams(window.location.search).get("lang");localStorage.removeItem("stateColor"),stateColor=null,switchLanguages(e),colorChangeDefault(["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff","#FFE200",!1],handleLinksHighlights)})}changeColorPage("noirBlanc","#fff","#000","#0100A9",!0,handleLinksHighlights),changeColorPage("noirJaune","#FAF1BC","#000000","#0100A9",!0,handleLinksHighlights),changeColorPage("brunSaumon","#FFBF86","#0100A9","#64001D",!0,handleLinksHighlights),changeColorPage("mauveBlanc","#FFFFFF","#4D00FF","#64001D",!0,handleLinksHighlights),changeColorPage("blancBleu","#002639","#FFFFFF","#FFE200",!1,handleLinksHighlights),changeColorPage("jauneBleu","#002639","#FFE200","#FFFFFF",!1,handleLinksHighlights),changeColorPage("cielBleu","#002639","#82FFFF","#FFFFFF",!1,handleLinksHighlights),changeColorPage("limeBleu","#002639","#00FF00","#FFFFFF",!1,handleLinksHighlights),changeColorPage("blancNoir","#000000","#FFFFFF","#FFE200",!1,handleLinksHighlights),changeColorPage("jauneNoir","#000000","#FFE200","#FFFFFF",!1,handleLinksHighlights),changeColorPage("cielNoir","#000000","#82FFFF","#FFFFFF",!1,handleLinksHighlights),changeColorPage("limeNoir","#000000","#00FF00","#FFFFFF",!1,handleLinksHighlights),colorChange(handleLinksHighlights,stateColor),handleLinksHighlights(stateColor[0]),switchLanguages(url),reset(),handleGrey(),getLang("btn-fr","Français"),getLang("btn-ger","Deutsch"),getLang("btn-it","Italiano"),getLang("btn-eng","English"),getLang("btn-grec","Ellinika"),document.getElementById("Luciole").addEventListener("click",function(){changeFont("Luciole")}),document.getElementById("LexieReadable").addEventListener("click",function(){changeFont("LexieReadable")}),document.getElementById("Verdana").addEventListener("click",function(){changeFont()}),window.addEventListener("scroll",scrollFunction);const scrollToTopBtn=document.getElementById("scrollToTopBtn");function scrollFunction(){2e3<document.body.scrollTop||2e3<document.documentElement.scrollTop?scrollToTopBtn.style.display="block":scrollToTopBtn.style.display="none"}function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}function highLightQuiz(){const e=document.querySelector("#quiz > a");document.querySelector("#grey > header > nav > ul > li:nth-child(8) > a").addEventListener("click",()=>{e.classList.add("highLightQuiz")})}scrollToTopBtn.addEventListener("click",()=>{scrollToTop()}),highLightQuiz();