import React from 'react';
import NewTapForm from './NewTapForm';
import Taplist from './Taplist';
import TapDetail from './TapDetail';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null
    };
    
  }

  handleBuyingItem = (id) => {
    const newMasterTapList = this.state.masterTapList;
    newMasterTapList.map((tap) => {
      if(tap.id === id && tap.quantity !== 0) {
        tap.quantity = tap.quantity - 1;
      } else if (tap.id === id && tap.quantity === 0) {
        tap.quantity = "Out of Stock";
      }
      return tap;
    })
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(Tap => Tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({masterTapList: newMasterTapList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} />
      buttonText = "Return to Tap List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}  />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <Taplist tapList={this.state.masterTapList} onTapSelection={this.handleChangingSelectedTap} />;
      buttonText = "Add Tap";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
  }


export default TapControl;