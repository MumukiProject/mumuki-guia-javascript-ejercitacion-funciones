it("Si hacemos calcularPorcentaje(100, 15) debería retornar 15", function() {
  let resultado = calcularPorcentaje(100, 15)
  assert.equal(resultado, 15,`calcularPorcentaje(100, 15) debería retornar 15 pero fue ${resultado}`);
})

it("Si hacemos calcularPorcentaje(10, 50) debería retornar 5", function() {
  let resultado = calcularPorcentaje(10, 50)
  assert.equal(resultado, 5,`calcularPorcentaje(10, 50) debería retornar 5 pero fue ${resultado}`);
})