import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import { Preloader } from 'react-materialize';
import StockInfo from '../components/StockInfo';

const { func, object, string, bool } = PropTypes;

class LandingContainer extends Component {
  static propTypes = {
    fetchingStockData: func.isRequired,
    google: object.isRequired,
    apple: object.isRequired,
    isFetching: bool.isRequired,
    isSending: bool.isRequired,
    fetchingError: string.isRequired,
    sendingError: string.isRequired
  }
  
  static contextTypes = {
    router: object.isRequired
  }
  
  componentWillMount() {
    const { fetchingStockData } = this.props; 
    fetchingStockData();
  }
  
  render() {
    const { 
      isFetching, isSending, fetchingError, 
      sendingError, google, apple 
    } = this.props;
    
    return (
      <div>
        <StockInfo data={google} isFetching={isFetching} fetchingError={fetchingError}/>
        <StockInfo data={apple} isFetching={isFetching} fetchingError={fetchingError}/>
        
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    ...actionCreators
  }
)(LandingContainer);