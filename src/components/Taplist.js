import React from 'react';
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap) =>
        <Tap
          whenBuyClicked = { props.onBuyItem }
          whenTapClicked = { props.onTapSelection }
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  
};

export default TapList;