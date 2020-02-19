const express			      = require('express')
const router			      = express.Router()
const axiosjs			      = require('axios')
const https				      = require('https')
const { body }          = require('express-validator')
const { sanitizeBody }  = require('express-validator')

const axios = axiosjs.create({
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
})

router.get('/welcome', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Welcome to my api'
  })
})

router.post('/save-poem', [
  body('*')
  .not().isEmpty()
  .trim()
  .escape(),
], (req, res) => {
  console.log('New poem', JSON.stringify(req.body, 0, 2))

  return res.status(200).json({
    success: true,
    message: 'Poem saved'
  })
})

module.exports = router
