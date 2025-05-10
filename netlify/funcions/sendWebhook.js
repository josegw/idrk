const https = require('https');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const payload = event.body;

  const options = {
    hostname: 'webhookbeam.com',
    path: '/webhook/josegaznares/ifykyk',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  // Promesa para manejar la solicitud HTTPS
  const result = await new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        statusCode: 200,
        body: JSON.stringify({ success: true, response: data })
      }));
    });

    req.on('error', error => {
      reject({
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      });
    });

    req.write(payload);
    req.end();
  });

  return result;
};
