export default (state = {}, action) => {
  const {name, brand, price, quantity, alcoholContent, id} = action;
  switch (action.type) {
  case 'ADD_TAP':
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
  case 'DELETE_TAP':
    const newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};