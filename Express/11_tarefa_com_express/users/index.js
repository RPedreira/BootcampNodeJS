const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/server.html`)
})

router.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos!`)
    
    res.sendFile(`${basePath}/server.html`)
})

router.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

module.exports = router