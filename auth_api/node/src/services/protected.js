const jwt = require('jsonwebtoken');

const protectFunction = (authorization) => {
  try {
    const decoded = jwt.verify(authorization, 'my2w7wjd7yXF64FIADfJxNs1oupTGAuW');

    if (decoded) {
      return { success: true, data: 'You are under protected data' };
    }

    return { success: false, data: 'Error token not valid' };
  } catch (error) {
    return { success: false, data: 'Error token not valid' };
  }
};

module.exports = protectFunction;
