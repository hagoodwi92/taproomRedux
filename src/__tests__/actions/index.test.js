import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes.js';

describe('taproom actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTap should create ADD_TAP action', () => {
    expect(actions.addTap({name: 'IPA', brand: 'boneyard', id: 1})).toEqual({
      type: c.ADD_TAP,
      name: 'IPA',
      brand: 'boneyard',
      id: 1
    });
  });
});