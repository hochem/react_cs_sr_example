const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression())

app.use(express.static('build', {maxAge: 3600000}));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(5000, '0.0.0.0', () => console.log('\nRunning on http://0.0.0.0:5000\nBundle size report on: http://0.0.0.0:5000/report.html\n'));
