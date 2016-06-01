'use strict';

const {
  getStockInfo,
  postEmail
} = require('./apiController');

const routeConfig = router => {
  router.get('/stocks', getStockInfo);
  router.post('/email', postEmail);
};

module.exports = routeConfig;