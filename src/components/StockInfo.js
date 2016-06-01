import React, { PropTypes } from 'react';
import { Row, Col, Preloader, Card, CardTitle } from 'react-materialize';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { isEmpty } from 'lodash';

const StockInfo = ({ isFetching, data, fetchingError }) => 
(
  <div>
    { isFetching ? <Col s={4}> <Preloader size='big' /> </Col> : ''}
    
    { fetchingError.length > 0 ? Materialize.toast('Could not fetch information', 2000) : ''}
    
    { !isEmpty(data) ?
    <Col s={4}>
      <Card header={
        <CardTitle reveal image={'https://www.tradingadvantage.com/wp-content/uploads/2013/10/TA_COURSES_STOCKS1.png'} 
        waves='light' />
        } 
        title={data.symbol}
        reveal={
          <Sparklines data={
            [Number(data.daysLow), Number(data.daysHigh), Number(data.yearLow), Number(data.yearHigh)]
          }
          limit={5} width={400} height={200} margin={5}
          >
            <SparklinesBars style={{ fill: '#41c3f9' }} />
          </Sparklines>}
      > 
      <p><strong>Price</strong>: {data.price}</p> 
      </Card>
    </Col>
      : ''
    }
  </div>
);

StockInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  fetchingError: PropTypes.string.isRequired
};

export default StockInfo;