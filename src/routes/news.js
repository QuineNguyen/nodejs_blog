// Dinh nghia tuyen duong news
const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);
// Tuyen duong o goc phai duoc dua xuong duoi cung vi tuyen duong se luon khop tu tren xuong
// Nen khi doc tu tren xuong ma khop voi tuyen duong / thi se lao vao router.use('/', newsController.index);
// Do do nen dao router.use('/:slug', newsController.show); len truoc router.use('/', newsController.index); neu khop se lot vao router.use('/:slug', newsController.show); truoc
// Neu khong khop se chay xuong duoi

module.exports = router;
