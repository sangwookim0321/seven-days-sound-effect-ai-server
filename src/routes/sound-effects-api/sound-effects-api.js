const express = require('express')
const { ElevenLabsClient } = require('elevenlabs')
const { Readable } = require('stream')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const client = new ElevenLabsClient({
  apiKey: process.env.SOUND_EFFECT_API_KEY,
})

router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required',
        error: 'Prompt is required',
      })
    }

    const response = await client.textToSoundEffects.convert({
      text: prompt,
    })

    console.log(response)

    res.setHeader('Content-Type', 'audio/mpeg')
    response.readableStream.pipe(res)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Error generating sound effect',
      error: error.message,
    })
  }
})

module.exports = router
