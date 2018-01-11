import React from 'react';
import {Link} from 'react-router-dom';

import string5k from '../utils/efficientheavy/string5k';

function Landing() {
  return (
    <div>
      <h1>This is the landing page!</h1>
      <Link to="/account">Go to account</Link><br/>
      <h2>Products</h2>
      <Link to="/product/0">View product: whisky glass</Link><br/>
      <Link to="/product/1">View product: table</Link><br/>
      <Link to="/product/2">View product: chair</Link><br/>
      <h2>Webpack Info</h2>
      <a href="report.html">Show webpack bundle report</a>
    </div>
  );
}

export default Landing;
