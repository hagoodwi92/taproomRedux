import React from 'react';
import PropTypes from "prop-types";

function Tap(props){
  const myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return(
    <div style={myStyledComponentStyles}>
    <React.Fragment>
      <h3>{props.brand} {props.name}</h3>
      <p>Pints left: </p>{props.quantity} <br></br><br></br>
      <button onClick={() => props.whenTapClicked(props.id)}>Show Details</button>
      <button onClick={() => props.whenBuyClicked(props.id)}>Buy</button>
      <hr></hr>
    </React.Fragment>
    </div>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  alcoholContent: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func
};

export default Tap;