const express = require('express');
const app = express();
app.use(express.static('build'));

const {render} = require('./build/server.js');

app.use(render);

app.listen(5000, '0.0.0.0', () => console.log('Running on http://0.0.0.0:5000'));
