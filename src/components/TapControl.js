import React from 'react';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm'
import Taplist from './Taplist';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTap: null,
      editing: false
    };
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TAP',
      id: id
    }
    dispatch(action);
    this.setState({selectedTap: null});
  }

  handleBuyingItem = (id) => {
    const newMasterTapList = this.state.masterTapList;
    newMasterTapList.map((tap) => {
      if(tap.id === id && tap.quantity > 0) {
        tap.quantity = tap.quantity - 1;
      } else if (tap.id === id) {
        tap.quantity = "Out of Stock";
      }
      return tap;
    })
    this.setState({
      masterTapList: newMasterTapList
    })
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  

  handleAddingNewTapToList = (newTap) => {
    const {dispatch} = this.props;
    const {id, name, brand, price, quantity, alcoholContent} = newTap;
    const action = {
      type: 'ADD_TAP',
      id: id,
      name: name,
      brand: brand,
      price: price,
      quantiy: quantity,
      alcoholContent: alcoholContent,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false });
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      masterTapList: editedMasterTapList,
      editing: false,
      selectedTap: null
    });
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTapForm tap = {this.state.selectedTap} onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
    }
    else if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} onClickingDelete = {this.handleDeletingTap} onClickingEdit = {this.handleEditClick}  />
      buttonText = "Return to Tap List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}  />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <Taplist tapList={this.props.masterTapList} onTapSelection={this.handleChangingSelectedTap} onBuyItem={this.handleBuyingItem} />;
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
  TapControl.propTypes = {
    masterTapList: PropTypes.object
  };

  const mapStateToProps = state => {
    return {
      masterTapList: state
    }
  }
  TapControl = connect(mapStateToProps)(TapControl);

  export default TapControl;