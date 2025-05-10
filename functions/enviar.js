export async function handler(event) {
  try {
    const body = event.body;

    const response = await fetch("https://webhookbeam.com/webhook/josegaznares/ifykyk", {
      method: "POST",
      headers: {
        "Content-Type": event.headers["content-type"] || "application/json"
      },
      body: body
    });

    const text = await response.text();
    return {
      statusCode: 200,
      body: text || "POST enviado correctamente al webhook."
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error al enviar al webhook: ${error.message}`
    };
  }
}
