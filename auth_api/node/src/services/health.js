export const health = (req, res, next) => {
  res.render('health');
  next();
};
