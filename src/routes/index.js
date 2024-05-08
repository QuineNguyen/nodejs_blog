const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    // Khi URL http://localhost:3000/courses/html-css duoc nhap vao trinh duyet co path /courses thi se match
    // voi app.use('/courses', coursesRouter); Sau do lao vao coursesRouter trong file courses.js
    // Kiem tra trong file courses.js co match voi /:slug thi se lao vao courseController.show va se res.send('COURSE DETAIL')
    app.use('/', siteRouter);
    // Nhung path / luon de o duoi cung
}

module.exports = route;
