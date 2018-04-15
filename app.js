const express = require('express')
const app = express()

const firstRes = 'first.js'
const secondRes =  'second.js'
const thirdRes = 'third.js'
const fourthRes = 'fourth.js'
    
app.get('/', (req, res) => res.sendFile('index.html', { "root": __dirname }))

app.get('/' + firstRes, (req, res) => res.sendFile(firstRes, { "root": __dirname }))
app.get('/' + secondRes, (req, res) => res.sendFile(secondRes, { "root": __dirname }))
app.get('/' + thirdRes, (req, res) => res.sendFile(thirdRes, { "root": __dirname }))
app.get('/' + fourthRes, (req, res) => res.sendFile(fourthRes, { "root": __dirname }))

app.listen(3000, () => console.log('Example app listening on port 3000!'))