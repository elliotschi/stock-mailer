require('dotenv').config();
const request = require('pify')(require('request'), {
  multiArgs: true 
});

const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

/*
email is a string

google is a string

apple is a string

all sent in json body
*/
const apiController = {
  postEmail: ({ body: { email, google, apple }}, res, next) => {
    if (email && google && apple) {
      let mailOptions = {
        from: 'elliotschi@gmail.com',
        to: email,
        subject: `${new Date()} Google & Apple Stocks`,
        html: `
          <h3>${new Date()} Google & App Stock prices: </h3>
            Google: ${google}</br>
            Apple: ${apple}       
      `
      };
      
      sendgrid.send(mailOptions, (err, json) => {
          if (err) {
            next(err);
          } else {
            console.log(json);
            res.send(json);
          }
      });
    } else {
      next(new Error('must send email and stocks'));
    }
  },
  
  getStockInfo: (req, res, next) => {
    Promise.all([
      request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='),
      
      request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
    ])
    .then(result => {
      // nested array destructuring
      let [[,google], [,apple]] = result;
      
      google = JSON.parse(google).query.results.quote;
      apple = JSON.parse(apple).query.results.quote;
      
      let returnObj = {
        google: {
          symbol: google.symbol,
          // ask: google.ask,
          // bid: google.bid,
          price: google.LastTradePriceOnly,
          daysLow: google.DaysLow,
          daysHigh: google.DaysHigh,
          yearLow: google.YearLow,
          yearHigh: google.YearHigh
        },
        
        apple: {
          symbol: apple.symbol,
          // ask: apple.ask,
          // bid: apple.bid,
          price: apple.LastTradePriceOnly,
          daysLow: apple.DaysLow,
          daysHigh: apple.DaysHigh,
          yearLow: apple.YearLow,
          yearHigh: apple.YearHigh
        }
      }
      
      res.json(returnObj);
    })
    .catch(err => next(err));
  }
};

module.exports = apiController;