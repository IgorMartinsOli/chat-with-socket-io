const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log(`X desconectou`)
    })

    socket.on('msg', (msg) => {
        io.emit('showmsg', msg)
        console.log(msg)
    })
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})



http.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})