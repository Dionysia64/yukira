function resultDisplay() {
    const display = document.getElementById('result');
    const result = JSON.parse(localStorage.getItem('correspondances'));
    const wordSearching = JSON.parse(localStorage.getItem('word'));
    
    if (result && wordSearching) { // S'assurer que les deux existent
        result.forEach((item) => {
                // Vérifier si le mot est trouvé dans le résultat
                const wordIndex = item.value.toLowerCase().indexOf(wordSearching);
                if (wordIndex !== -1) {
                    // Diviser la chaîne en trois parties : avant le mot, le mot, et après le mot
                    const beforeWord = item.value.substring(0, wordIndex);
                    const word = item.value.substring(wordIndex, wordIndex + wordSearching.length);
                    const afterWord = item.value.substring(wordIndex + wordSearching.length);

                    // Créer un élément de lien
                    const link = document.createElement('a');
                    link.href = item.url; // Utilise l'URL associée au résultat
                    link.target = '_blank'; // Ouvrir le lien dans un nouvel onglet
                    link.style.textDecoration = 'none'; // Optionnel : retirer le soulignement du lien
                    
                    // Créer un élément de paragraphe
                    const p = document.createElement('p');
                    
                    // Ajouter les parties au paragraphe avec le mot en gras et agrandi
                    p.innerHTML = `${beforeWord}<strong style="font-size: 1.6em;">${word}</strong>${afterWord}`;
                    
                    // Ajouter le paragraphe dans le lien
                    link.appendChild(p);
                    
                    // Ajouter le lien au conteneur d'affichage
                    display.appendChild(link);
                } else {
                    // Si le mot n'est pas trouvé, afficher le texte complet sans modification
                    const p = document.createElement('p');
                    p.textContent = item.value;
                    // Créer un lien qui entoure le texte non modifié
                    const link = document.createElement('a');
                    link.appendChild(p);
                    
                    display.appendChild(link);
            }
        });
    }
}

resultDisplay();

