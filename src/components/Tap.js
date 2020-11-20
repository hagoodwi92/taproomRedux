import React from 'react';
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <h3>{props.brand} {props.name}</h3>
      <button onClick={() => props.whenTapClicked(props.id)}>Show Details</button>
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