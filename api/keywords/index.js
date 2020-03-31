const express =require('express');
const router = express.Router();
const controler = require('./keywordsControler');

router.route('/')
    .get(controler.search)
    .post(controler.create);

router.route('/:id')
    .get(controler.readById)
    .put(controler.update)
    .delete(controler.remove)
module.exports = router;
