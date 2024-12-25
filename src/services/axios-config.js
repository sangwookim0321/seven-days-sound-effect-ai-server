const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.elevenlabs.io/',
  headers: {
    'xi-api-key': process.env.SOUND_EFFECT_API_KEY,
  },
})

module.exports = { api }
