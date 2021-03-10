it("Si hacemos generarEmail('adalovelace', 'gmail') debería retornar 'adalovelace@gmail.com'", function() {
  let resultado = generarEmail('adalovelace', 'gmail')
  assert.equal(resultado, 'adalovelace@gmail.com',`generarEmail('adalovelace', 'gmail') debería retornar adalovelace@gmail.com pero fue ${resultado}`);
})