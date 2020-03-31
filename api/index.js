const express = require('express');

const keywords = require('./keywords');
const users= require('./users');


const router = express.Router();


router.use('/keywords',keywords);
router.use('/users',users);



module.exports = router;