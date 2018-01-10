import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

function AccountPersonalData() {
  return (
    <div>
      <h2>This is a nested route!</h2>
      Sample MomentJS: {moment().format('MMMM Do YYYY, h:mm:ss a')}
    </div>
  );
}

export default AccountPersonalData;
