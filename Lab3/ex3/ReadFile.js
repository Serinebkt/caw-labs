// ReadFile.js
const fs = require('fs');

// Récupérer le nom du fichier depuis les arguments
const fileName = process.argv[2];

if (!fileName) {
    console.log("Veuillez spécifier un nom de fichier");
    console.log("Usage: node ReadFile.js nom_du_fichier.txt");
    process.exit(1);
}

// Lire et afficher le contenu du fichier
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.log("Erreur lors de la lecture du fichier:", err.message);
        return;
    }
    console.log(data);
});