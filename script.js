document.getElementById("enviarBtn").addEventListener("click", () => {
  const data = {
    mensaje: "Hola desde Netlify Function",
    fecha: new Date().toISOString()
  };

  document.getElementById("salida").textContent = "Enviando datos:\n" + JSON.stringify(data, null, 2);

  fetch("/.netlify/functions/enviar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(text => {
      document.getElementById("salida").textContent += "\n\nRespuesta del servidor:\n" + text;
    })
    .catch(err => {
      document.getElementById("salida").textContent += "\n\nError: " + err.message;
    });
});
