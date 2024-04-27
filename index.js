const express = require('express') // Express: Thu vien vua cai trong dependencies
// Require: Di vao thu muc node_modules de nap thu vien va luu vao bien express
const app = express() // Function da duoc xay dung san trong express
// Tra ve mot doi tuong dai dien cho ung dung nodejs
const port = 3000 // Run website nay o port nao

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b; // Dung breakpoint de ngan chan viec thuc thi tiep tuc hoan thien request
  res.send('Hello World!') // ()=>{} Arrow function
})
// Dinh nghia route
// localhost - 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})