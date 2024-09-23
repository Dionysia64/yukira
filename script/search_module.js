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
    });

    // Permet d'accéder au bouton avec la touche Tab
    search.setAttribute('tabindex', '0');
}

// Initialiser la fonction pour les deux barres de recherche
initializeSearchBar("search-links");
initializeSearchBar("search");
