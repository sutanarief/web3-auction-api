const router = require('express').Router()
const item = require('../controllers/itemController')

router.get('/', item.getItem)
router.post('/', item.createItem)
router.put('/claim', item.claimItem)
// router.post('/login', user.login)

module.exports = router