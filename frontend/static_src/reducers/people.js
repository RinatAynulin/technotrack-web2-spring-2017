import {
  RECEIVE_PEOPLE,
  REQUEST_PEOPLE,
  QUERY_PEOPLE,
} from './../actions/people.js';

import Immutable from 'immutable';

const initialStore = {
  people: [],
  showedPeople: [],
  isFetching: false,
};

export function people(state = initialStore, action) {
  switch (action.type) {
  case REQUEST_PEOPLE:
    return Immutable.fromJS(state).set('isFetching', true).toJS();

  case RECEIVE_PEOPLE:
    console.log(state);
    return Immutable.fromJS(state).set('isFetching', false).set('people', action.people).toJS();

  case QUERY_PEOPLE:
    if (action.query == '') {
      return Immutable.fromJS(state).set('showedPeople', state.people).toJS();
    }

    return Immutable.fromJS(state).set('showedPeople', state.people.filter(person => {
      const person_info = person.username + person.first_name + person.last_name;
      return person_info.toLowerCase().indexOf(action.query.toLowerCase()) != -1;
    })).toJS();

  default:
    return state;
  }
}
