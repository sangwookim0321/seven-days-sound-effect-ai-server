require('dotenv').config({ path: './.env.local' })
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))