const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors({ origin: 'http://127.0.0.1:8081' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models')
db.mongoose.connect(db.url, { useNewUrlParser: true })
    .then(() => console.log('Connected to Database!'))
    .catch(error => console.log(error))

app.get('/', (request, response) => response.json({ message: 'MERN Full Stack Netflix App' }))

const port = process.env.PORT || 8082

app.listen(port, () => console.log('Backend Server UP & Running on Port 8082...'))