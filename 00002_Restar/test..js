it("Si hacemos restar(3, 2) debería retornar 1", function() {
  let resultado = sumar(3,2)
  assert.equal(resultado, 1,`La suma debería retornar 1 pero fue ${resultado}`);
})

it("Si hacemos sumar(10, 5.5) debería retornar 4.5", function() {
  let resultado = sumar(10,5.5)
  assert.equal(resultado, 4.5,`La suma debería retornar 4.5 pero fue ${resultado}`);
})

it("Si hacemos sumar(3, 5) debería retornar -2", function() {
  let resultado = sumar(3,5)
  assert.equal(resultado, -2,`La suma debería retornar -2 pero fue ${resultado}`);
})