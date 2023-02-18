import { loginFunction } from '../services/login';
import { protectFunction } from '../services/protected';
//jest.mock('../db/db');
// const { findUserByUsername } = require('../db/db');

describe('loginFunction()', () => {
  it('Test login', async () => {
    // findUserByUsername.mockImplementation(() => Promise.resolve({}));
    const result = await loginFunction('admin', 'secret');
    expect(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI'
    ).toBe(result.token);
  });
});

describe('protectFunction()', () => {
  it('Test protected', () => {
    return protectFunction(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI'
    ).then((user) => {
      console.log(user);
      expect(user).toStrictEqual({ role: 'admin' });
    });
  });
});
