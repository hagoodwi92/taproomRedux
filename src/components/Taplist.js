import React from 'react';
import Tap from "./Tap";

const masterTaplist = [
  {
      name:"Silver IPA",
      brand:"Boneyard Brewing",
      price:"5",
      alcoholContent : "6.2%"
  },
  {
    name:"Green IPA",
    brand:"Boneyard Brewing",
    price:"5",
    alcoholContent : "6.2%"
},

]
function Taplist(){
  return (
    <React.Fragment>
      <hr/>
      {masterTaplist.map((tap, index) =>
        <Tap names = {tap.names}
          brand = {tap.brand}
          price = {tap.price}
          alcoholContent = {tap.alcoholContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default Taplist;