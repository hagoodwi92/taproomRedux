import React from 'react';
import Tap from "./Tap";
import PropTypes from "prop-types";

function Taplist(props){
  return (
    <React.Fragment>
      <hr />
      {/* We now need to map over the values of an object, not an array. */}
      {Object.values(props.tapList).map((tap) =>
        <Tap
          whenTapClicked = { props.onTapSelection }
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          quantity={tap.quantity}
          alcoholContent = {tap.alcoholContent}
          id={tap.id}
          key={tap.id}/>
      )}
      {/* Don't forget to add the curly brace above - otherwise there will be a syntax error. */}
    </React.Fragment>
  );
}


Taplist.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func
};

export default Taplist;