it("Si hacemos gritar('hola') debería retornar ¡hola!", function() {
  let resultado = gritar('hola')
  assert.equal(resultado, '¡hola!',`${resultado}`);
})



