it("Si hacemos obtenerCompetencia(1, 1) debería retornar 60", function() {
  let resultado = calcularFPS(1, 1)
  assert.equal(resultado, 60,`calcularFPS(1, 1) debería retornar 60 pero fue ${resultado}`);
})