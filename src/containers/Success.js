import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Success = ({ sendingError, isSending }) => (
  <div>
    {sendingError.length > 0 && !isSending ? Materialize.toast('Could not send to that email, try again', 4000) : Materialize.toast('successfully sent email', 4000)}
    <h2>
      {'Return to home'}
    </h2>
    <Link to='/'>{
      <a className="btn-floating btn-large waves-effect waves-light red">
      <i className="material-icons">replay</i></a>
    }</Link>
  </div>
);

const mapStateToProps = ({ sendingError }) => {
  return {
    sendingError
  }  
};

export default connect(mapStateToProps)(Success);