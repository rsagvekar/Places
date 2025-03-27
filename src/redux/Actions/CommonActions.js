import {
  UPDATEPLACES,
  TOGGLE_VISITED,
  SAVE_HISTORY,
} from './ActionTypes';

import {_api_key} from '../../api/api';
// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

export const updatePlaces = data => {
  return dispatch => {
    dispatch({type: UPDATEPLACES, payload: data});
  };
};

export const toggleVisited = id => ({
  type: TOGGLE_VISITED,
  payload: id,
});

export const saveHistory = data => {
  return dispatch => {
    dispatch({type: SAVE_HISTORY, payload: data});
  };
};