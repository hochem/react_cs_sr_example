import React from 'react';
import {Link} from 'react-router-dom';

import {string5k} from '../utils/heavyutils';

function Landing() {
  return (
    <div>
      <h1>This is the landing page</h1>
      <Link to="/account">Go to account</Link>
    </div>
  );
}

export default Landing;

