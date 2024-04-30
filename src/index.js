const path = require('path');
const express = require('express'); // Express: Thu vien vua cai trong dependencies
const morgan = require('morgan');
// Require: Di vao thu muc node_modules de nap thu vien va luu vao bien express
const handlebars = require('express-handlebars');
const app = express(); // Function da duoc xay dung san trong express
// Tra ve mot doi tuong dai dien cho ung dung nodejs
const port = 3000; // Run website nay o port nao

app.use(express.static(path.join(__dirname, 'public'))); // Khi gap path nay, voi nhung file tinh express se phai kiem tra thu muc cung cap cho no trong phuong thuc static
// localhost:3000 coi la thu muc public

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
})); // App su dung template engine la handlebars voi ten la handlebars su dung thu vien 'express-handlebars'
app.set('view engine', 'hbs');// Dat cho ung dung express su dung view engine la handlebars
app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/', (req, res) => {
    // var a = 1;
    // var b = 2;
    // var c = a + b; // Dung breakpoint de ngan chan viec thuc thi tiep tuc hoan thien request
    res.render('home');
    // Khi render home thi mac dinh lay cai layout la main.handlebars. Nhung voi cai render thi no se choc vao file home.handlebars de lay content cua file home.handlebars
    // File home.handlebars se append vao giua cai layout. Ket qua chay duoc la tong cua layout va body cua trang home
    // Render mot trang khac thi lay trang khac dua vao body
    // ()=>{} Arrow function
    // Template engines: Duoc dung de viet ra file chua ma HTML o nhung noi khac gon gang hon, chia layout, dat hieu qua nhu code HTML
    // Phan khung chua ca header va footer goi la layout. Layout nay co the duoc su dung cho nhieu trang
})

app.get('/news', (req, res) => {
    res.render('news');
})
// Dinh nghia route
// localhost - 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})
// Nodemon: Lang nghe su thay doi cua file trong source code va reload lai ung dung ma khong can phai Ctrl + C de thoat server
// Morgan: Log HTTP request, giup nhin duoc log cua nhung request len node server

// nodemon.json: Config ve nhung file cho phep khi co su thay doi cua nhung file co duoi (vi du: js json) thi ung dung nodejs se restart lai server
// package.json: Khai bao nhung script, cai dat nhung su phu thuoc
// package-lock.json: Quan ly nhung su phu thuoc mot cach chi tiet hon
// Thu muc public: Quan ly nhung file tinh, bao gom css, img
// Thu muc resources: Bao gom nhung file khong phai nhung file ra thang ben ngoai public