import { loginFunction } from '../services/login';

describe('loginFunction()', () => {
  it('Test login', async () => {
    const result = await loginFunction('admin', 'secret');
    console.log(result);
    expect(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI'
    ).toBe(result.token);
  });
});

// describe('protectFunction()', () => {
//   it('Test protected', () => {
//     expect('You are under protected data').to.be.equal(
//       protectFunction(
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI'
//       )
//     );
//   });
// });
