const health = (req, res, next) => {
    res.send('OK');
    next();
}

module.export = health;