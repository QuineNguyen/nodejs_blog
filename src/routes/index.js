const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    // Nhung path / luon de o duoi cung
}

module.exports = route;