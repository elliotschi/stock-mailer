import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import { Row } from 'react-materialize';
import StockInfo from '../components/StockInfo';
import { isEmail } from 'validator';

const { func, object, string, bool } = PropTypes;

class LandingContainer extends Component {
  static propTypes = {
    fetchingStockData: func.isRequired,
    submittingEmail: func.isRequired,
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
  
  onChange(e) {
    this.email = e.target.value;
  }
  
  onSubmit(event) {
    event.preventDefault();
    const email = this.email;
    if (isEmail(email)) {
      this.email = '';
      
      this.props.submittingEmail(email);
      this.context.router.push('/success');  
    } else {
      Materialize.toast('email format is not valid please try again', 2000);
    }
    
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
        <Row s={12} m={12}>
          <StockInfo data={google} isFetching={isFetching} fetchingError={fetchingError}/>
          <StockInfo data={apple} isFetching={isFetching} fetchingError={fetchingError}/>
          <div>
            <form className='col s6' onSubmit={::this.onSubmit}>
              <Row>
                <i className="material-icons">mail outline</i>
                <input id="email" type="text" className="validate" onChange={::this.onChange} placeholder='enter your email'/>
                <button className='btn-floating btn-large waves-effect waves-light green' type='submit' value='submit'>
                  <i className='material-icons'>add</i>
                </button>
              </Row>
            </form>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actionCreators
)(LandingContainer);