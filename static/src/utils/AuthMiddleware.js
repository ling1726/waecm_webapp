import React from 'react';
import { browserHistory } from 'react-router';

const auth_check = ({ getState }) =>  {
  return (next) => (action) => {
    if(action.error != undefined && action.error.response.status === 401){
        console.log('jwt expired'); 
        window.location.replace('/')
    }
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    return returnValue
  }
}

export default auth_check;
