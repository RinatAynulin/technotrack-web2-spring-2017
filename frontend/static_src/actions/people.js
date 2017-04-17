export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const QUERY_PEOPLE = 'QUERY_PEOPLE';

export function requestPeople() {
  return {
    type: REQUEST_PEOPLE,
  };
}

export function receivePeople(json) {
  return {
    type: RECEIVE_PEOPLE,
    people: json.data,
  };
}

export function queryPeople(query) {
    return {
        type: QUERY_PEOPLE,
        query: query,
    }
}
