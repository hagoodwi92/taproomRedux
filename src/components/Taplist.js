import React from 'react';
import Tap from "./Tap";
import PropTypes from "prop-types";

function Taplist(props){
  return (
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap, index) =>
        <Tap name = {tap.name}
          brand = {tap.brand}
          price = {tap.price}
          alcoholContent = {tap.alcoholContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}

Taplist.propTypes = {
  tapList: PropTypes.array
};

export default Taplist;