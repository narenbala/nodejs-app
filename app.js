const express = require('express')

const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.get('/', (req, res) => {

    const stats = [
        {state: 'kerala', confirmed: '24,49,129', active: '10,37,760'},
        {state: 'Tamil Nadu', confirmed: '30,56,579', active: '21,34,560'},
        {state: 'karnataka', confirmed: '29,67,976', active: '18,74,149'},
        {state: 'Delhi', confirmed: '35,23,148', active: '25,87,984'}
    ]

    const totalCases = '4,98,189'

    res.render('pages/home', {
        totalCases: totalCases,
        stats: stats,
    })
})

app.get('/symptoms', (req, res) => {
    res.render('pages/symptoms')
})

app.get('/vaccines', (req, res) => {
    res.render('pages/vaccines')
})

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})