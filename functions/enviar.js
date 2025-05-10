export async function handler(event) {
  const body = JSON.parse(event.body || "{}");

  try {
    const response = await fetch("https://webhookbeam.com/webhook/josegaznares/ifykyk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const text = await response.text();
    return {
      statusCode: 200,
      body: text || "POST enviado correctamente."
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error al enviar al webhook: ${error.message}`
    };
  }
}
