// Tao file site.js de luu nhung file khong thuoc tai nguyen cu the (vi du: home, search, contact)
// Dinh nghia tuyen duong news
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);
// Tuyen duong o goc phai duoc dua xuong duoi cung vi tuyen duong se luon khop tu tren xuong
// Nen khi doc tu tren xuong ma khop voi tuyen duong / thi se lao vao router.use('/', newsController.index);
// Do do nen dao router.use('/:slug', newsController.show); len truoc router.use('/', newsController.index); neu khop se lot vao router.use('/:slug', newsController.show); truoc
// Neu khong khop se chay xuong duoi

module.exports = router;