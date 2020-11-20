import React from "react";
import Header from "./Header";
import Tap from "./Tap";
import Taplist from './Taplist';
import TapControl from './TapControl';

function App(){
  return (
    <React.Fragment>
      <Header />
      <TapControl />
    </React.Fragment>
  );
}

export default App;