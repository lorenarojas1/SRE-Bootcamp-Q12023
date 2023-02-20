"use strict";

var _login = require("../services/login");
var _protected = require("../services/protected");
//jest.mock('../db/db');
// const { findUserByUsername } = require('../db/db');

describe('login', () => {
  it('Should return JWT token to a valid login', async () => {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await (0, _login.loginFunction)('admin', 'secret');
    expect('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI').toBe(result.token);
  });
});
describe('protectFunction()', () => {
  it('Test protected', () => {
    return (0, _protected.protectFunction)('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI').then(user => {
      console.log(user);
      expect(user).toStrictEqual({
        role: 'admin'
      });
    });
  });
});