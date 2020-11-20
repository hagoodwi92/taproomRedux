import React from 'react';

function Tap(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p> 
      <p>{props.alcoholContent}</p>
      <hr></hr>
    </React.Fragment>
  )
}

export default Tap;