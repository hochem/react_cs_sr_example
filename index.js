const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static('build'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(5000, '0.0.0.0', () => console.log('\nRunning on http://0.0.0.0:5000\nWebpack bundle report on http://0.0.0.0:5000/report.html\n'));
