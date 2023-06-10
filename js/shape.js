// Objeto rectángulo
const rectangle = {
    width: 10,
    height: 20
  }
  
  // Función que espera un objeto con propiedades length y width
  function drawShape(shape) {
    console.log(`Drawing shape with length ${shape.length} and width ${shape.width}`)
  }
  
  // Adaptador para convertir el objeto rectángulo en el objeto esperado por la función
  const rectangleAdapter = {
    length: function() {
      return rectangle.height
    },
    width: function() {
      return rectangle.width
    }
  }
  
  // Usamos el adaptador para llamar a la función con el objeto rectángulo
  drawShape(rectangleAdapter)
  