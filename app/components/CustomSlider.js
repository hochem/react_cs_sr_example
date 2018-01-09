import React from 'react';
import {Link} from 'react-router-dom';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

function CustomSlider() {
  return (
    <div style={{width: '50%'}}>
      <h2>Heavy slider component:</h2>
      <Slider />
      <Range />
    </div>
  );
}

export default CustomSlider;
