import React, { PropTypes } from 'react';
import { Row, Col, Preloader, Card } from 'react-materialize';

const StockInfo = ({ isFetching, data, fetchingError }) => (
  <Row>
    { isFetching ? <Col s={4}> <Preloader size='big' /> </Col> : ''}
    { fetchingError.length > 0 ? Materialize.toast('Could not fetch information', 4000) : ''}
  </Row>
);

StockInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  fetchingError: PropTypes.string.isRequired
};

export default StockInfo;