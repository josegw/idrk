document.getElementById("enviarBtn").addEventListener("click", () => {
  const seleccion = document.getElementById("formato").value;

  const formatos = {
    formato1: {
      mensaje: "Hola desde formato 1",
      fecha: new Date().toISOString()
    },
    formato2: {
      content: "Hola desde formato 2",
      date: new Date().toISOString()
    },
    formato3: {
      text: "Hola desde formato 3"
    },
    formato4: "Hola desde formato 4 (texto plano)"
  };

  const data = formatos[seleccion];
  const esTextoPlano = typeof data === "string";

  document.getElementById("salida").textContent = "Enviando datos:\n" +
    (esTextoPlano ? data : JSON.stringify(data, null, 2));

  fetch("/.netlify/functions/enviar", {
    method: "POST",
    headers: {
      "Content-Type": esTextoPlano ? "text/plain" : "application/json"
    },
    body: esTextoPlano ? data : JSON.stringify(data)
  })
    .then(res => res.text())
    .then(text => {
      document.getElementById("salida").textContent += "\n\nRespuesta del servidor:\n" + text;
    })
    .catch(err => {
      document.getElementById("salida").textContent += "\n\nError: " + err.message;
    });
});
