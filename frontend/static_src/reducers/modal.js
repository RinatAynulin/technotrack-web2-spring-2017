import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_SELECTED_POST
} from './../actions/modal.js';

import Immutable from 'immutable';

const initialStore = {
  selectedIndex: 0,
  showModal: false,
}

export function modal(state = initialStore, action) {
  switch (action.type) {
  case CHANGE_SELECTED_POST:
    console.log(action);
    return Immutable.fromJS(state).set('selectedIndex', action.selectedIndex).toJS();

  case OPEN_MODAL:
    return Immutable.fromJS(state).set('showModal', true).toJS();

  case CLOSE_MODAL:
    return Immutable.fromJS(state).set('showModal', false).toJS();

  default:
    return state;
  }
}
