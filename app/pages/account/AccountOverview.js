import React from 'react';
import {Link} from 'react-router-dom';
import CustomSlider from '../../components/CustomSlider'

import 'rc-slider/assets/index.css';

import string10k from '../../utils/efficientheavy/string10k';

function AccountOverview() {
  return (
    <div>
      <h1>This is the account overview</h1>
      <Link to="/account/personaldata">Open nested page</Link>
      <CustomSlider />
    </div>
  );
}

export default AccountOverview;
