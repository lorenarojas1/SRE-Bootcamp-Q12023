import { protectFunction } from '../services/protected';

export const protectedRender = async (req, res, next) => {
    const { jwt } = req.cookies;
    if (jwt) {
      protectFunction(jwt)
        .then((user) => {
          req.user = user;
          res.render('protected')
          next();
        })
        .catch(() => {
          res.sendStatus(403).render('forbidden');
        });
    } else {
      res.status(403).render('forbidden');
    }
  }

