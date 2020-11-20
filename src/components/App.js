import React from "react";
import Header from "./Header";
import Tap from "./Tap";
import Taplist from './Taplist';
import TapControl from './TapControl';

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <TapControl />
    </React.Fragment>
  );
}

export default App;