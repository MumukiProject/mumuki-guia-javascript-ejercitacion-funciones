it("Si hacemos sumarPorcentaje(100, 15) debería retornar 115", function() {
  let resultado = sumarPorcentaje(100, 15)
  assert.equal(resultado, 115,`calcularPorcentaje(100, 15) debería retornar 115 pero fue ${resultado}`);
})

it("Si hacemos sumarPorcentaje(10, 50) debería retornar 15", function() {
  let resultado = sumarPorcentaje(10, 50)
  assert.equal(resultado, 15,`calcularPorcentaje(10, 50) debería retornar 15 pero fue ${resultado}`);
})