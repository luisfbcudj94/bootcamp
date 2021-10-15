const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Conectar a base de datos
mongoose.connect('mongodb://localhost/miniYoutube')
    .then(db => console.log('Db conectada'))
    .catch(err => console.log(err))


// importando rutas
const indexRoutes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
// Routes
app.use('/', indexRoutes)

app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`)
})