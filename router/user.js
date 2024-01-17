const router = require('express').Router()
const user = require('../controllers/userController')

router.get('/', user.getUser)
router.get('/:address', user.getUserById)
router.post('/auth/login', user.loginUser)
router.put('/auth/logout', user.logoutUser)
router.put('/edit/:address', user.editUser)

module.exports = router