const express =require('express');
const controler = require('./controler');
const { userValidationRules, validate } = require('./validator.js')
const router = express.Router();

router.route('/signUp').post(userValidationRules(), validate,controler.create);
router.route('/login').post(controler.login);

module.exports = router;
