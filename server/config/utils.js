'use strict'

const utils = {
  errorHandler: (err, req, res, next) => {
    res.status(500);
    res.render('error', {error: err})
  },
  
  errorLogger: (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  }
}

module.exports = utils;