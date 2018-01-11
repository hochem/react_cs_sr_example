import path from 'path';
import express from 'express';
import compression from 'compression';
import fetch from 'node-fetch';
import find from 'lodash/find';

global.fetch = fetch;

import reactApplication from './middleware/reactApplication';

const app = express();

app.use(compression());

app.use(express.static('build', {maxAge: 3600000}));


const products = [
  {
    id: '0',
    name: 'Whisky Glass',
    description: 'A nice whisky glass.',
    price: 1
  },
  {
    id: '1',
    name: 'Table',
    description: 'A big table for up to 10 persons.',
    price: 200
  },
  {
    id: '2',
    name: 'Chair',
    description: 'A big chair for up to 5 persons.',
    price: 100
  }
];

app.get('/api/v1/cart', (req, res) => {
  res.send({
    products: [{ id: 'p1', name: 'Whisky Glas', amount: 5, price: 1}],
    totalCost: 5
  });
});

app.get('/api/v1/product/:productId', (req, res) => {
  const product = find(products, {id: req.params.productId});
  res.send(product);
});

app.get('*', (req, res) => {
  return reactApplication(req, res);
});

app.listen(5000, '0.0.0.0', () => console.log('\nRunning on http://0.0.0.0:5000\nBundle size report on: http://0.0.0.0:5000/report.html\n'));
