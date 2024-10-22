function initializeSearchBar(id) {
    const search = document.getElementById(id);
    const parent = search.parentNode;

    // Fonction pour recréer le bouton "Rechercher"
    function restoreSearchElement(form) {
        if (form) {
            form.remove(); // Supprime le formulaire
        }
        parent.appendChild(search); // Remet le bouton de recherche
        search.focus(); // Remet le focus sur le bouton de recherche
    }

    search.addEventListener('click', (e) => {

        e.preventDefault();

        localStorage.removeItem('correspondances');
        localStorage.removeItem('word');

        // Retire le bouton de recherche
        search.remove();

        // Crée le formulaire de recherche
        const form = document.createElement('form');
        const bar = document.createElement('input');
        bar.setAttribute('type', 'search');
        bar.setAttribute('id', "search-bar");
        bar.setAttribute('name', "search");
        bar.setAttribute('autofocus', "true");
        bar.setAttribute('aria-label', "Search input");

        const btn = document.createElement('input');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('id', "btn-search");
        btn.setAttribute('name', "btn-search");
        btn.setAttribute('value', "Search");
        btn.setAttribute('disabled', 'disabled'); // Désactivé jusqu'à ce que l'utilisateur entre du texte

        form.appendChild(bar);
        form.appendChild(btn);
        parent.appendChild(form);

        // Focus immédiat sur la barre de recherche
        bar.focus();

        // Activer le bouton de recherche lorsque l'utilisateur tape dans l'input
        bar.addEventListener('input', () => {
            btn.disabled = bar.value.trim() === ''; // Désactive si le champ est vide
        });

        // Gérer l'accessibilité clavier
        bar.addEventListener('keydown', (e) => {
            // Fermer le formulaire avec la touche "Escape"
            if (e.key === 'Escape') {
                restoreSearchElement(form);
            }
        });

        // Gérer le clic à l'extérieur du formulaire
        function outsideClick(event) {
            if (!form.contains(event.target) && event.target !== search) {
                restoreSearchElement(form);
                document.removeEventListener('click', outsideClick);
            }
        }
        document.addEventListener('click', outsideClick);

        // Permet d'ouvrir le formulaire en appuyant sur "Entrée"
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && document.activeElement === search) {
                e.preventDefault();
                search.click(); // Simule un clic pour ouvrir le formulaire
            }
        });
        searchModule("search-bar");
    });

    // Permet d'accéder au bouton avec la touche Tab
    search.setAttribute('tabindex', '0');
}

// Initialiser la fonction pour les deux barres de recherche
initializeSearchBar("search-links");
initializeSearchBar("search");


async function searchModule(id) {
    const regex = /^https:\/\/[^\s#\/]+(?:\/[^\s#]*)?(?:#[^\s]*)?$/;
    const field = document.getElementById(id);
    const btn = document.getElementById("btn-search");

    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const response = await fetch("../data.json");
        const data = await response.json();
        let foundAnyMatch = false; // Drapeau pour vérifier s'il y a une correspondance

        // Fonction pour accumuler les résultats dans le localStorage
        function addToLocalStorage(value, url) {
            let correspondances = JSON.parse(localStorage.getItem("correspondances")) || [];
            correspondances.push({ value: value, url: url });
            localStorage.setItem("correspondances", JSON.stringify(correspondances));
        }

        function iterateJSON(obj, url = "") {
            const pagesArray = ["main", "mainAbout", "itineraire", "informations", "passion", "besoin", "questions"];
            
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    // Ignore la clé "alt"
                    if (key === "alt") {
                        continue;
                    }

                    // Si la clé est "pageURL", mettre à jour l'URL
                    if (key === "pageURL" && typeof obj[key] === 'string') {
                        url = obj[key]; // Mise à jour de l'URL
                    }

                    // Vérifie si la valeur est un objet ou un tableau
                    if (typeof obj[key] === 'object' && obj[key] !== null || pagesArray.includes(key)) {
                        // Appel récursif pour parcourir les sous-objets, avec l'URL mise à jour
                        iterateJSON(obj[key], url);
                    } else {
                        if (field.value.length >= 3) {
                            const userInput = field.value.toLowerCase();  // Input de l'utilisateur
                            localStorage.setItem("word", JSON.stringify(userInput));
                            
                            // Vérifie que la valeur dans l'objet est une chaîne avant d'utiliser toLowerCase()
                            if (typeof obj[key] === 'string') {
                                const objectValue = obj[key].toLowerCase();   // Valeur dans l'objet JSON
                                
                                // Vérifie si l'input de l'utilisateur est inclus dans la valeur de l'objet
                                if (objectValue.includes(userInput)) {
                                    // Si la valeur est une URL valide (selon le regex), l'ignorer sauf si c'est du texte mélangé avec une URL
                                    if (!regex.test(objectValue) && objectValue.match(/[a-zA-Z0-9]/)) {
                                        foundAnyMatch = true;  // Une correspondance a été trouvée
                                        addToLocalStorage(obj[key], url);  // Ajoute la correspondance au localStorage avec l'URL
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        iterateJSON(data);

        // Si aucune correspondance n'a été trouvée
        if (!foundAnyMatch) {
            addToLocalStorage('Pas de correspondance trouvée pour le mot cherché.');
        }
        if (location.pathname === '/index.html' || location.pathname === '/') {
            location.href = "./pages/result.html";
        } else {
            location.href = "./result.html";
        }

    });
}

