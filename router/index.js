const router = require('express').Router()
const userRouter = require('./user')
const itemRouter = require('./item')
const bidRouter = require('./bid')


router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/bid', bidRouter)



module.exports = router