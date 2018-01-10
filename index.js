// import 'ignore-styles';
import path from 'path';
import express from 'express';
import compression from 'compression';

import reactApplication from './server/middleware/reactApplication';

const app = express();

app.use(compression())

app.use(express.static('build', {maxAge: 3600000}));

app.get('*', (req, res) => {
  console.log('Request for: ', req.url);
  return reactApplication(req, res);
});

app.listen(5000, '0.0.0.0', () => console.log('\nRunning on http://0.0.0.0:5000\nBundle size report on: http://0.0.0.0:5000/report.html\n'));
