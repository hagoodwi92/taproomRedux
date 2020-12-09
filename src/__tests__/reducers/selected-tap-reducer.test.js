import selectedTapReducer from '../../reducers/selected-tap-reducer';
import * as c from '../../actions/ActionTypes.js';

describe("selectedTapReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTapReducer(false, { type: null })).toEqual(false);
  });
    test('Should toggle selectedTapReducer visiblility state to true', () => {
      expect(selectedTapReducer(false, {type: c.SHOW_TAP })).toEqual(true);
  });
  
});