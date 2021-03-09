it("Si hacemos obtenerNombreCompleto('Ada', 'Lovelace') debería retornar 'Ada Lovelace'", function() {
  let resultado = obtenerNombreCompleto('Ada', 'Lovelace')
  assert.equal(resultado, 'Ada Lovelace',`obtenerNombreCompleto('Ada', 'Lovelace') debería retornar 'Ada Lovelace' pero el resultado fue ${resultado}`);
})