import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Beer Name' />
        <input
        type='text'
        name='brand'
        placeholder='Brand' />
        <input
        type='text'
        name='price'
        placeholder='Price' />
        <input
        type='text'
        name='alcoholContent'
        placeholder='alcoholContent' />
        <input
        type='text'
        name='quantity'
        placeholder='quantity' />
        <button type='submit'>Add Tap</button>
      </form>
    </React.Fragment>
  );
}
NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;