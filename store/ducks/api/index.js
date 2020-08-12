// constants
import axios from 'axios';
import { addLink } from '../links';

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

const API_REQUEST = 'API_REQUEST';
const API_SUCCESS = 'API_SUCCESS';
const API_ERROR = 'API_ERROR';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_REQUEST:
      return { ...state, error: null, loading: true, data: null };
    case API_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case API_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// actions
export const apiSuccess = (payload) => async (dispatch) => {
  dispatch({
    type: API_SUCCESS,
    payload,
  });
};

export const apiError = (payload) => async (dispatch) => {
  dispatch({
    type: API_ERROR,
    payload,
  });
};

export const apiRequest = (method, url, data) => async (dispatch) => {
  dispatch({ type: API_REQUEST });
  await axios({
    method,
    url,
    data,
  })
    .then((res) => {
      dispatch(apiSuccess(res.data));
    })
    .catch((exception) => {
      console.error(exception);
    });
};

// middleware
export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API_SUCCESS) {
    dispatch(addLink(action.payload));
  }
};
