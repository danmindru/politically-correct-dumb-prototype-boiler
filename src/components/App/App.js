import React from 'react';
import { Link } from 'react-router';


export default React.createClass(
  {
    render: function(){
      return (
        <div>
          <h1>BOOM!</h1>
          <p>How's that prototype looking?</p>
          <Link to={'about'}>Take me somewhere else</Link>
        </div>
      );
    }
  }
)