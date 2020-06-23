const express = require('express')
const { response } = require('express')

const app = express()
const publicDir = __dirname+'/../public'
console.log(publicDir)
app.use(express.static(publicDir))

app.get('/weather', () => {
    res.send('Weather is sunny')
})

app.listen(3000, () => {
    console.log("Weather server starting at port 3000")
})