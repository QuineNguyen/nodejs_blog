// Function handler
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug (Co the nhan nhieu gia tri o :slug)
    show(req, res) {
        res.send('NEW DETAILS!!!');
    }
}
module.exports = new NewsController;