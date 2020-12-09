import * as c from './../actions/ActionTypes.js';

export const deleteTap = id => ({
  type: c.DELETE_TAP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTap = (tap) => {
  const { name, brand, price, quantity, alcoholContent, id } = tap;
  return {
    type: c.ADD_TAP,
    name: name,
    brand: brand,
    price: price,
    quantity: quantity,
    alcoholContent: alcoholContent,
    id: id
  }
}