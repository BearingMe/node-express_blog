import express from 'express'

const router = express.Router()

router.get(/\/(home)?/, (req, res) => {
  res.send('<h1>Home Page!</h1>')
})

export default router