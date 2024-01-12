const router = require('express').Router()
const bid = require('../controllers/bidController')

router.get('/', bid.getBid)
router.post('/', bid.createBid)
// router.post('/login', user.login)

module.exports = router