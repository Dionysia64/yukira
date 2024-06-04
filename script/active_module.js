    /* Active links */

    function active() {
        const url = new URLSearchParams(window.location).toString();
        const currentPage = decodeURIComponent(url).split("pages")[1].split(".html")[0];
        console.log(currentPage);
        switch (currentPage) {
          case "/about":
            links(currentPage);
            break;
            case "/itineraire":
              links(currentPage);
            break;
            case "/besoins":
              links(currentPage);
            break;
            case "/adresses":
              links(currentPage);
            break;
            case "/informations":
              links(currentPage);
            break;
            case "/passion-chiens":
              links(currentPage);
            break;
          default:
            break;
        }
      }
    
  function links(currentPage) {
    const links = document.querySelectorAll("#grey > header > nav > ul > li > a");
    links.forEach((link) => {
      if (link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
      };
    });
  }
  
  active();