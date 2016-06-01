'use strict';

module.exports = {
  logError: (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  },
  
  handleError: (err, req, res) => {
    res.status(500).send({error: err.message});
  }
}