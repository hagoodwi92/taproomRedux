import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

  const currentState = {
    1: {name: 'IIPA',
    brand: 'Breakside',
    price: 5,
    quantity: 6,
    alcoholContent: '7.5',
    id: 1},
    2: {name: 'IPA',
    brand: 'Burnside',
    price: 7,
    quantity: 2,
    alcoholContent: '4.5',
    id: 2}
  }

  let action;
  const tapData = {
    name: 'IIPA',
    brand: 'Breakside',
    price: 5,
    quantity: 6,
    alcoholContent: '7.5',
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new tap data to masterTapList', () => {
    const {name, brand, price, quantity, alcoholContent, id} = tapData;
    action = {
      type:  'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      alcoholContent: alcoholContent,
      id: id  
    };
    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        alcoholContent: alcoholContent,
        id: id  
      }
  })
});
test('Should successfully remove a tap', () => {
  action = {
    type: 'DELETE_TAP',
    id: 1
  };
  expect(tapListReducer(currentState, action)).toEqual({
    2: {name: 'IPA',
    brand: 'Burnside',
    price: 7,
    quantity: 2,
    alcoholContent: '4.5',
    id: 2}
  });
});
}); 