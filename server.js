export function render(req, res) {
  const html = `
    <!doctype html>
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" type="text/css" href="/app.css"/>
      </head>
      <body>
        <div id="app"></div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
  res.send(html);
}

