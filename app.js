const express = require('express')

const app = express()
const port = 3000
app.get('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log('app is listening at port' + port)
})