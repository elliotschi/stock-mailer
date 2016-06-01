import * as actions from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  isSending: false,
  google: {},
  apple: {},
  fetchingError: '',
  sendingError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STOCK_DATA:
      return {
        ...state,
        isFetching: true
      }
      
    case actions.FETCH_STOCK_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.data
      }
      
    case actions.FETCH_STOCK_DATA_ERROR: 
      return {
        ...state,
        isFetching: false,
        fetchingError: 'could not fetch stock data'
      }
      
    case actions.SUBMIT_EMAIL:
      return {
        ...state,
        isSending: true
      }
      
    case actions.SUBMIT_EMAIL_SUCCESS:
      return {
        ...state,
        isSending: false
      }
      
    case actions.SUBMIT_EMAIL_ERROR:
      return {
        ...state,
        sendingError: 'could not submit email'
      }
      
    default:
      return state;
  }
};