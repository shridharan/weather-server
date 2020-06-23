const express = require('express')
const { response } = require('express')

const app = express()
const port = process.env.PORT || 3000

const publicDir = __dirname+'/../public'
console.log(publicDir)
app.use(express.static(publicDir))

app.get('/weather', () => {
    res.send('Weather is sunny')
})

app.listen(port, () => {
    console.log(`Weather server starting at port  ${port}`)
})