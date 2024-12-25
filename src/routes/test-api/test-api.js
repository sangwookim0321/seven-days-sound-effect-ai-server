const express = require('express')

const router = express.Router()

router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
    data: {
      name: 'John Doe',
      age: 30,
    },
  })
})

module.exports = router
