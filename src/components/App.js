import React from "react";
import Header from "./Header";
import TapControl from './TapControl';

function App(){
  
  return (
    
    <React.Fragment>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
      <Header />
      <TapControl />
    </React.Fragment>
  );
}

export default App;