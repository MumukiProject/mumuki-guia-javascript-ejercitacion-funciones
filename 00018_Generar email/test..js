it("Si hacemos generarEmail('adalovelace', 'gmail') debería retornar 'adalovelace@gmail.com'", function() {
  let resultado = obtenerCompetencia('Coca', 'Pepsi')
  assert.equal(resultado, 'adalovelace@gmail.com',`generarEmail('adalovelace', 'gmail') debería retornar adalovelace@gmail.com pero fue ${resultado}`);
})