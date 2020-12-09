import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';
import selectedTapReducer from '../../reducers/selected-tap-reducer';
import * as c from '../../actions/ActionTypes.js';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: {},
      formVisibleOnPage: false,
      selectedTap: false
    });
  });

  test('Check that initial state of tapListReducer matches root reducer', () => {
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedTapReducer matches root reducer', () => {
    expect(store.getState().selectedTap).toEqual(selectedTapReducer(undefined, { type: null })); 
  });

  test('Check that ADD_TICKET action works for tapListReducer and root reducer', () => {
    const action = {
      type: c.ADD_TAP,
      name: 'IPA',
      brand: 'Boneyard',
      price: '6',
      quantity: '5',
      alcoholContent: '5.6%',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that SHOW_TAP action works for selectedTap and root reducer', () => {
    const action = {
      type: c.SHOW_TAP
    }
    store.dispatch(action);
    expect(store.getState().selectedTap).toEqual(selectedTapReducer(undefined, action));
  });
  
});