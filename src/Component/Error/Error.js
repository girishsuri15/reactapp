import React from 'react';
const ERROR = props => {
    if (props.IsError) {
      return (
        <div class="alert alert-primary" role="alert">
        {props.msg}
      </div>
  
      );
    }
  
    return null;
  };

  export default ERROR;