it("Si hacemos obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') debería retornar 'Hola Ada, un gusto conocerte'", function() {
  let resultado = saludar('Ada')
  assert.equal(resultado, 'Hola Ada, un gusto conocerte',`saludar('Ada') debería retornar 'Hola Ada, un gusto conocerte' pero el resultado fue ${resultado}`);
})