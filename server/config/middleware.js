'use strict';

// body parser takes incoming data and attaches it to the req
const {
  json,
  urlencoded
} = require('body-parser');
// path.join merges two file paths together so you don't have to use string concat
const joinPaths = require('path').join;
// error loggers and handlers created in utils file
const {
  errorHandler,
  errorLogger
} = require('./utils');
// middleware for express that applies gzip compression for every request and response
const compression = require('compression');
// middleware that allows react router's browser history to work
const history = require('connect-history-api-fallback');
const logger = require('morgan');

// exports a function that applies all middleware to the express server
module.exports = (app, express) => {
  // webpack dev middleware
  if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('./../../webpack.config');
    const compiler = webpack(webpackConfig);
    const { webpackDevMiddleware, webpackHotMiddleware } = require('./webpackDev');
    app.use(webpackDevMiddleware(webpackConfig, compiler));
    app.use(webpackHotMiddleware(compiler));  
  }
  
  app.use(compression());
  app.use(logger('dev'));
  app.use(json());
  app.use(urlencoded({extended: true}));
  
  let router = express.Router();
  app.use('/api', router);
  require('../api/apiRoutes')(router);
  
  app.use(express.static(joinPaths(__dirname, '../../dist')));
  // add my stylesheets
  app.use('/style', express.static(joinPaths(__dirname, '../../node_modules/materialize-css/dist')));
  
  app.use(history());
  app.use('*', (req, res) => {
    res.sendStatus(404).send('404: Page not found');
  });
  
  // error handling
  app.use(errorHandler);
  app.use(errorLogger);
}