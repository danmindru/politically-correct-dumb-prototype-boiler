import React from 'react';
import { Link } from 'react-router';


export default React.createClass(
  {
    render: function(){
      return (
        <div>
          <h1>Hey!</h1>
          <p>About that prototype...</p>
          <Link to={'/'}>Back home</Link>
        </div>
      );
    }
  }
)