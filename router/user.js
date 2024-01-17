const router = require('express').Router()
const user = require('../controllers/userController')

router.get('/', user.getUser)
router.get('/:address', user.getUserById)
router.post('/register', user.createUser)
// router.post('/login', user.login)

module.exports = router