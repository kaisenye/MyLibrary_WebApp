const express = require('express')
const app = express()
const expresLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', _dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


app.listen(process.env.PORT || 3000)
