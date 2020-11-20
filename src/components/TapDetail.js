import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.brand} {tap.name}</h3>
      <h4>Price: {tap.price}</h4>
      <p>Abv: <em>{tap.alcoholContent}</em></p>
      <button onClick={()=> onClickingDelete(tap.id) }>Remove Tap</button> 
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TapDetail;