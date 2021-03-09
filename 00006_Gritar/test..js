it("Si hacemos gritar('hola') debería retornar ¡hola!", function() {
  let resultado = gritar('hola')
  assert.equal(resultado, '¡hola!',`gritar('hola') debería retornar ¡hola! pero el resultado fue ${resultado}`);
})



