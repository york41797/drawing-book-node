const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title>Drawing Book</title>
      <style>
        html, body { 
          margin: 0; 
          padding: 0; 
          width: 100%; 
          height: 100%; 
          overflow: hidden; 
          background-color: #ffffff; 
        }
        iframe { 
          width: 100%; 
          height: 100%; 
          border: none; 
          display: block; 
        }
      </style>
    </head>
    <body>
      <iframe 
        src="https://null.perchance.org/drawing-book" 
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; picture-in-picture; speaker; usb; vr; web-share"
        sandbox="allow-scripts allow-same-origin allow-forms">
      </iframe>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
