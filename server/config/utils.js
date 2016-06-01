'use strict'

const utils = {
  errorHandler: (err, req, res, next) => {
    res.status(500).send({
      error: err.message
    });
  },
  
  errorLogger: (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  }
}

module.exports = utils;