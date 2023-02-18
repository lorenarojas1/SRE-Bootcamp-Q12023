export const pageProtected = async (_, res) => {
  res.render('protected', { alert: false });
};
