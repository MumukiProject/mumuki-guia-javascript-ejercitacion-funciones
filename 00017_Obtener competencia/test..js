it("Si hacemos obtenerCompetencia('JavaScript', 'Python') debería retornar `JavaScript vs. Python`", function() {
  let resultado = obtenerCompetencia('JavaScript', 'Python')
  assert.equal(resultado, `JavaScript vs. Python`,`obtenerCompetencia('JavaScript', 'Python') debería retornar JavaScript vs. Python pero fue ${resultado}`);
})