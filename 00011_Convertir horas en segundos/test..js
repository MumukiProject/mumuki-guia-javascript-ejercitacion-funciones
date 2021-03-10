it("Si hacemos convertirHorasEnSegundos(1) debería retornar 3600", function() {
  let resultado = convertirHorasEnSegundos(1)
  assert.equal(resultado, 3600,`convertirHorasEnSegundos(1) debería retornar 3600 pero fue ${resultado}`);
})