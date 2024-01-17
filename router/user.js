const router = require('express').Router()
const user = require('../controllers/userController')

router.get('/', user.getUser)
router.get('/:address', user.getUserById)
router.post('/auth/login', user.loginUser)
router.put('/auth/logout', user.logoutUser)
// router.post('/login', user.login)

module.exports = router