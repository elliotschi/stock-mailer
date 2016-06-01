import * as actions from '../constants/actionTypes';
import {
  getStockData,
  submitEmail
} from '../helpers/api';

// actions for stock data
export const fetchStockData = () => {
  return {
    type: actions.FETCH_STOCK_DATA
  }
};

export const fetchStockDataSuccess = (data) => {
  return {
    type: actions.FETCH_STOCK_DATA_SUCCESS,
    data
  }
};

export const fetchStockDataError = (error) => {
  return {
    type: actions.FETCH_STOCK_DATA_ERROR,
    error
  }
};

// thunk for the whole stock fetching process
export const fetchingStockData = () => (dispatch, getState) => {
  dispatch(fetchStockData());
  getStockData()
    .then(data => dispatch(fetchStockDataSuccess(data)))
    .catch(err => dispatch(fetchStockDataError(err)));
}

// actions for email submission
export const submitEmail = (email) => {
  return {
    type: actions.SUBMIT_EMAIL,
    email
  }
};

export const submitEmailSuccess = success => {
  return {
    type: actions.SUBMIT_EMAIL_SUCCESS,
    success
  }
};

export const submitEmailError = error => {
  return {
    type: actions.SUBMIT_EMAIL_ERROR,
    error
  }
};

// thunk for sending the email
export const submittingEmail = (email) => (dispatch, getState) => {
  let { google, apple } = getState();
  if (google && apple) {
    dispatch(submitEmail(email));
    submitEmail(email, google.price, apple.price)
      .then(data => dispatch(submitEmailSuccess(data)))
      .then(err => dispatch(submitEmailError(err)));
  } else {
    dispatch(submitEmailError(email));
  }
};