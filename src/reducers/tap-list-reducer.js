import * as c from './../actions/ActionTypes.js';

export default (state = {}, action) => {
  const {name, brand, price, quantity, alcoholContent, id} = action;
  switch (action.type) {
  case c.ADD_TAP:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        alcoholContent: alcoholContent,
        id: id 
      }
    });
  case c.DELETE_TAP:
    const newState = {...state};
    delete newState[id];
    return newState;
  case c.UPDATE_TAP:
    return Object.assign({}, state, {
      [id]: {
        name: 'Update',
        brand: 'Update',
        price: 7,
        quantity: 2,
        alcoholContent: 'Update',
        id: id
      }
    });
    case c.SHOW_TAP:
      return Object.assign({}, state, {
        [id]: {
          id: id 
        }
      });
  default:
    return state;
  }
};