import React from 'react';
import {Link} from 'react-router-dom';

function Error404() {
  return (
    <div>
      <h2>Sheesh... There's nothing to see here.</h2>
      <Link to="/">Go back Home</Link> 
    </div>
  );
}

export default Error404;
