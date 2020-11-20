import React from 'react';
import PropTypes from "prop-types";

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

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.string
};

export default Tap;