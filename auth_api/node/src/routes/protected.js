const { protectFunction } = require('../services/protected');

const protect = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const tokenArray = authorization.split(' ');

    if (tokenArray.length === 0) {
      res.status(500).send('Error no token');
      next();
      return;
    }

    const protectedResponse = await protectFunction(tokenArray[1]);

    if (protectedResponse) {
      res.status(200).send({ data: protectedResponse.data });
      next();
      return;
    }

    res.status(500).send({ data: protectedResponse.data });
    next();
    return;
  } catch (error) {
    res.status(500).send({ data: error });
    next();
  }
};

module.exports = {
  protect,
};
