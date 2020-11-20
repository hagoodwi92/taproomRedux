import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>Add Tap</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;