import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.brand} {tap.name}</h3>
      <h4>Price: {tap.price}</h4>
      <p>Abv: <em>{tap.alcoholContent}</em></p>
      <p>Pints left: {124}</p>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;