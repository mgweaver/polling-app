require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./models/index')
const handle = require('./handlers/index')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello'))

app.use(handle.notFound)
app.use(handle.errors)

app.listen(PORT, console.log(`Server started on port ${PORT}`))
