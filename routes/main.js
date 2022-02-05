const express = require('express');

const router = express.Router();

/* - - - - - Controllers - - - - -  */ 
const mainController = require('../controllers/mainController');

/* - - - - - Routes - - - - -  */ 
router.get('/', mainController.home);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

module.exports = router;