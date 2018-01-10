import React from 'react';
import {Link} from 'react-router-dom';

import string5k from '../utils/efficientheavy/string5k';

function Landing() {
  return (
    <div>
      <h1>This is the landing page!</h1>
      <Link to="/account">Go to account</Link>
      <br/>
      <a href="report.html">Show webpack bundle report</a>
    </div>
  );
}

export default Landing;

