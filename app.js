const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})
app.listen(port, () => {
    console.log('app listening at port ' + port)
})