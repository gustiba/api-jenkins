const express = require('express')
const { userController} = require('../controllers')
const { auth } = require('../helpers/auth')

const router = express.Router()

router.get('/getUsers', userController.getUsers)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/keeplogin', auth, userController.keepLogin)
router.put('/verifikasiemail', userController.emailVerifikasi)
router.post('/resendemailver', userController.resendEmailVer)
router.get('/getCurrentUser/:username',auth, userController.getCurrentUser)
router.put('/editUser/:username', auth, userController.getCurrentUser)
 
module.exports = router