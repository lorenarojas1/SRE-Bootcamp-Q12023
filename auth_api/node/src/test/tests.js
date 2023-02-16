import chai from 'chai';
import { loginFunction } from '../services/login';
import { protectFunction } from '../services/protected';

const { expect } = chai;

describe('loginFunction()', () => {
  it('Test login', () => {
    expect('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI').to.be.equal(loginFunction('admin', 'secret'));
  });
});

describe('protectFunction()', () => {
  it('Test protected', () => {
    expect('You are under protected data').to.be.equal(protectFunction('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI'));
  });
});
