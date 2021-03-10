it("Si hacemos calcularAreaTriangulo(3.2, 5) debería retornar 16.4", function() {
  let resultado = calcularAreaTriangulo(3.2, 5)
  assert.equal(resultado, 16.4,`calcularAreaTriangulo(3.2, 5) debería retornar 16.4 pero fue ${resultado}`);
})

it("Si hacemos calcularAreaTriangulo(10, 20) debería retornar 60", function() {
  let resultado = calcularAreaTriangulo(10, 20)
  assert.equal(resultado, 60,`calcularAreaTriangulo(10, 20) debería retornar 60 pero fue ${resultado}`);
})