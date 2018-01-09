const express = require('express');
const app = express();
app.use(express.static('build', {maxAge: 3600000}));

const {render} = require('./build/server.js');

app.use('/*', render);

app.listen(5000, '0.0.0.0', () => console.log('\nRunning on http://0.0.0.0:5000\nBundle size report on: http://0.0.0.0:5000/report.html\n'));
