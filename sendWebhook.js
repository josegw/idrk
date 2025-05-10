const https = require('https');

exports.handler = async function (event) {
  // Mensaje de depuración visible en el sitio
  const debugMessage = {
    mensaje: "Función ejecutada correctamente",
    metodo: event.httpMethod,
    bodyRecibido: event.body || "(sin body)"
  };

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(debugMessage)
  };
};
