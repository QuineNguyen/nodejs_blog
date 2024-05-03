const path = require('path');
const express = require('express'); // Express: Thu vien vua cai trong dependencies
const morgan = require('morgan');
// Require: Di vao thu muc node_modules de nap thu vien va luu vao bien express
const handlebars = require('express-handlebars');
const app = express(); // Function da duoc xay dung san trong express
// Tra ve mot doi tuong dai dien cho ung dung nodejs
const port = 3000; // Run website nay o port nao

const route = require('./routes');
// Co the tu nap file index.js nen khong can ghi ro ten file vao require

app.use(express.static(path.join(__dirname, 'public'))); // Khi gap path nay, voi nhung file tinh express se phai kiem tra thu muc cung cap cho no trong phuong thuc static
// localhost:3000 coi la thu muc public

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
); // App su dung template engine la handlebars voi ten la handlebars su dung thu vien 'express-handlebars'

      app.set(
    'view engine',
    'hbs',
); // Dat cho ung dung express su dung view engine la handlebars
        app.set('views', path.join(__dirname, 'resources\\views'));

// Routes init: Khoi tao tuyen duong
route(          app);
// Lo trinh:
// Di tu ham route(app) truyen express instance (app) vao trong route
// File index.js trong routes nhan duoc express instance va chay app.use('/news', newRouter)
// Truyen bien newRouter tuc la export bien router thong qua module.exports = router
// Express se kiem tra de biet rang dang truyen cho route o doi so thu hai cua app.use
// Express hieu la bien newsRouter cau hinh nhieu tuyen duong cho /news
// Moi khi truy cap vao website co path /news thi se choc vao newsRouter
// Trong newsRouter se la tuyen duong trong router.use('/', newsController.index)
// Moi khi co path /news thi express se choc vao newsRouter, newsRouter duoc hieu la cap con cua /news
// Phan / trong router.use('/', newsController.index) duoc hieu la tuyen duong choc vao dau tien khi truy xuat vao /news
// /news se choc vao phuong thuc index cua bien newsController

// app.get('/', (req, res) => {
//     // var a = 1;
//     // var b = 2;
//     // var c = a + b; // Dung breakpoint de ngan chan viec thuc thi tiep tuc hoan thien request
//     res.render('home');
//     // Khi render home thi mac dinh lay cai layout la main.handlebars. Nhung voi cai render thi no se choc vao file home.handlebars de lay content cua file home.handlebars
//     // File home.handlebars se append vao giua cai layout. Ket qua chay duoc la tong cua layout va body cua trang home
//     // Render mot trang khac thi lay trang khac dua vao body
//     // ()=>{} Arrow function
//     // Template engines: Duoc dung de viet ra file chua ma HTML o nhung noi khac gon gang hon, chia layout, dat hieu qua nhu code HTML
//     // Phan khung chua ca header va footer goi la layout. Layout nay co the duoc su dung cho nhieu trang
// });
// // req (Request): Chua nhung thong tin ma ung dung o phia client yeu cau len server
// // res (Response): Khi server nhan duoc request tu phia client, no se xu ly cho vao database de lay du lieu va tra ve client
// // Bien response se giup client co the tuy chon, cau hinh sao cho viec tra ve client nhung gi, tra ve nhu the nao

// // app.get('/news', (req, res) => {
// //     res.render('news');
// // });

// // Query parameters
// app.get('/search', (req, res) => {
//     res.render('search'); // Render ra view la search
// });
// // Nhap vao duong dan theo cu phap: key = value. Truoc key dau tien su dung dau ?, tu key thu hai tro di su dung dau &
// // Action ---> Dispatcher ---> Function handler
// // Viec nhap cau lenh app.get('/search' goi la action
// // Dung giua action va function handler la dispatcher
// // Function handler la ham xu ly (req, res) => {}
// // Dispatcher doc action, neu thay khop thi se thuc thi function handler
// // Thanh phan controller trong mo hinh MVC chinh la function handler

// app.post('/search', (req, res) => {
//     console.log(req.body); // In ra terminal trong truong hop form data
//     res.send('');
// });

// Dinh nghia route
// localhost - 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
// Nodemon: Lang nghe su thay doi cua file trong source code va reload lai ung dung ma khong can phai Ctrl + C de thoat server
// Morgan: Log HTTP request, giup nhin duoc log cua nhung request len node server

// nodemon.json: Config ve nhung file cho phep khi co su thay doi cua nhung file co duoi (vi du: js json) thi ung dung nodejs se restart lai server
// package.json: Khai bao nhung script, cai dat nhung su phu thuoc
// package-lock.json: Quan ly nhung su phu thuoc mot cach chi tiet hon
// Thu muc public: Quan ly nhung file tinh, bao gom css, img
// Thu muc resources: Bao gom nhung file khong phai nhung file ra thang ben ngoai public

// GET method: Khi truy cap vao mot website, nhap trang web vao thanh dia chi va bam enter (hoac click vao the a chua cac duong dan trang web) thi trinh duyet mac dinh
// su dung phuong thuc GET
// POST method: Su dung javascript hoac su dung nhung the submit form voi phuong thuc POST, khi muon gui du lieu tu phia client len tren server

// Mo hinh MVC
// Model: Thanh phan tuong tac voi data source (Vi du: Noi dung cua khoa hoc hien thi ra luu trong database)
// View: Thanh phan chi chua file view (HTML, CSS)
// Controller:
// Bat dau tu client nguoi dung (Browser). Khi go vao trinh duyet mot website thi se request len tren server qua HTTP Protocol
// Di len web server thi se di qua tang Routes (Chinh la tang dinh tuyen voi phuong thuc gi, path gi thi truy cap code gi)
// Dispatcher: Hanh dong goi sang controller
// Khi Routes dinh tuyen thanh cong con duong minh can thi no se choc vao Controller tuong ung
// Vi du: Khi muon lay danh sach khoa hoc moi nhat
// Khi di vao Controller cua trang chu va trong trang chu can lay ra data thi Controller se tuong tac voi Model va lay ra du lieu trong database
// Sau do Controller se goi sang View de lay giao dien cua khoa hoc
// Khi do se nhan duoc View hoan chinh bao gom Ten khoa hoc, Noi dung khoa hoc, Hinh anh,... va tra ve cho Client qua Web Server su dung HTTP Protocol

// Local host: Host nam tren may tinh cuc bo (tren chinh may tinh cua ban). Ban than localhost dong vai tro la server

// Lint-staged: Chay nhung file da duoc add vao git va phai match voi pattern duoc dinh nghia trong package.json
// Co the bo npm run beautiful neu da ap dung husky