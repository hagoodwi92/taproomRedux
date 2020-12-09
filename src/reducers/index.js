import formVisibleReducer from './form-visible-reducer';
import tapListReducer from './tap-list-reducer';
import { combineReducers } from 'redux';
import selectedTapReducer from './selected-tap-reducer';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTapList: tapListReducer,
  selectedTap: selectedTapReducer
});

export default rootReducer;