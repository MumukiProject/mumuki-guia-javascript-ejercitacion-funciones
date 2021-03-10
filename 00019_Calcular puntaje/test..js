it("Si hacemos calcularPuntaje(3, 0, 0) debería retornar 9", function() {
  let resultado = calcularPuntaje(3, 0, 0)
  assert.equal(resultado, 9,'calcularPuntaje(3, 0, 0) debería retornar 9 pero fue ${resultado}`);
})