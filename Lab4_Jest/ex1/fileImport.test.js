// fileImport.test.js

test('vérifier que fileImport.js fonctionne', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  
  // Exécute fileImport.js qui va appeler mean et afficher les résultats
  require('./fileImport.js');
  
  // Vérifie que console.log a été appelé avec les bonnes valeurs
  expect(consoleSpy).toHaveBeenCalledWith("Scores:", [85, 90, 78, 92, 88]);
  expect(consoleSpy).toHaveBeenCalledWith("Moyenne:", 86.6);
  
  consoleSpy.mockRestore();
});