const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

// Function handler
class SiteController {
    // [GET] /
    // Huong dan cach viet voi promise
    index(req, res, next) {
        Course.find({}) // Choc vao model
            // Khi truyen duoi dang object o doi so thu hai cua render (vi du: title: 'TEST TITLE')
            // O view se khai bao bien title trong file hbs
            // .then(courses => res.render('home', {
            //     courses: courses
            // })) // Nhan duoc courses thanh cong
            .then(courses => { // Lay duoc du lieu mang vao controller
                res.render('home', { // Choc sang view
                    courses: multipleMongooseToObject(courses) // Truyen data lay tu model cho view
                    // Ben view doc logic va render ra UI duoi dang HTML, CSS
                    // Render tra lai cho phia client
                });
            })
            .catch(next); // Loi, su dung callback function
    }
    // res.render('home');
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
