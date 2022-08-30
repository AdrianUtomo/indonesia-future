const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const db = require('./db/models')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }))

db.sequelize.sync();

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`)
})