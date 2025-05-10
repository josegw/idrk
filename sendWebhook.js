exports.handler = async function (event) {
  // Verifica si el evento es un POST
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body); // Parsea el cuerpo de la solicitud

    // Respuesta a enviar
    const response = {
      success: true,
      mensaje: "Datos recibidos correctamente",
      bodyRecibido: body
    };

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response)
    };
  } else {
    // Si el método no es POST, retorna un error
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método no permitido" })
    };
  }
};
