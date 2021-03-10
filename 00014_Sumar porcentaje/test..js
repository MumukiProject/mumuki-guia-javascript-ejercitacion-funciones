it("Si hacemos sumarPorcentaje(100, 15) debería retornar 115", function() {
  let resultado = sumarPorcentaje(100, 15)
  assert.equal(resultado, 115,`calcularPorcentaje(100, 15) debería retornar 115 pero fue ${resultado}`);
})