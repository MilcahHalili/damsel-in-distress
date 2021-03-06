const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.get('/', usersCtrl.getUser)
router.put('/update', usersCtrl.addTrigger)
router.put('/remove', usersCtrl.removeTrigger)

module.exports = router;