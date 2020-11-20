import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.name} - {tap.brand}-{tap.price}</h3>
      <p><em>{tap.alcoholContent}</em></p>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};

export default TapDetail;