import { actionTypes } from './actions';
import { createContext } from 'react';
export const AppContext = createContext({});

export const initialState = {
  data : []
}

export const reducer = (state = {}, action) => {
  let response
  switch (action.type) {

    case actionTypes.SET_DATA:
      response = Object.assign({}, state, {
        data: action.data,
      });
      return response

    default:
      return state;

  }
};