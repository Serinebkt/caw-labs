// echo.test.js

// Pas besoin d'importer puisque echo.js s'exécute directement
test('vérifier que echo.js fonctionne', () => {
  // Ce test vérifie juste que le fichier peut s'exécuter sans erreur
  expect(() => {
    require('./echo.js');
  }).not.toThrow();
});