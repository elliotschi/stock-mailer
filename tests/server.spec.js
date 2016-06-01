import {
  expect,
  should
} from 'chai';

import app from '../server/config/server-config';
const request = require('supertest').agent(app.listen());

describe('get request to /api/stocks', () => {
  it('should return an object', done => {
    request
      .get('/api/stocks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err,res) => {
        expect(res.body).to.be.an('object')
        expect(res.body.google).to.be.an('object')
        expect(res.body.apple).to.be.an('object')
      }, done());
  });
});

describe('post request to /api/emails', () => {
  it('should send an email and return success object', done => {
    request
      .post('/api/email')
      .send({
        email: 'elliotschi@gmail.com',
        google: 1,
        apple: 1
      })
      .expect(200)
      .expect({ message: 'success' }, done());
  });
  
  it('should send an error when we miss a param', done => {
    request
      .post('/api/email')
      .send({
        google: 'forgot'
      })
      .expect(500, done());
  })
});

describe('get request to * routes', () => {
  it('should return 404', done => {
    request
      .get('abc')
      .expect(404, done());
  });
});
