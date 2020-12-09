import React from 'react';
import NewTapForm from './NewTapForm';
import EditTapForm from './EditTapForm'
import Taplist from './Taplist';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // formVisibleOnPage: false,
      // selectedTap: null,
      editing: false
    };
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTap(id);
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

  // handleChangingSelectedTap = (id) => {
  //   const selectedTap = this.props.masterTapList[id];
  //   this.setState({selectedTap: selectedTap});
  // }
  handleChangingSelectedTap = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'SHOW_TAP',
      id: id
    }
    dispatch(action);
    // this.setState({selectedTap: null});
  }

  handleAddingNewTapToList = (newTap) => {
    const {dispatch} = this.props;
    const action = a.addTap(newTap);
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedTap: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const {dispatch} = this.props;
    const action = a.addTap(tapToEdit);
    dispatch(action);
    this.setState({
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
    else if (this.props.formVisibleOnPage) {
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
    masterTapList: PropTypes.object,
    formVisibleOnPage: PropTypes.bool,
    selectedTap: PropTypes.object
  };

  const mapStateToProps = state => {
    return {
      masterTapList: state.masterTapList,
      formVisibleOnPage: state.formVisibleOnPage,
      selectedTap: state.selectedTap
    }
  }
  TapControl = connect(mapStateToProps)(TapControl);

  export default TapControl;