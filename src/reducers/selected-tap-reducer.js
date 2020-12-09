import * as c from './../actions/ActionTypes.js';

export default (state = false, action) => {
  switch (action.type) {
    case c.SHOW_TAP:
      return !state;
    default:
      return state;
  }
};