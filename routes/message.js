const {Router} = require('express');


const {
    sendMessage
} = require('../controllers/message');

const router = Router();


router.post('/',sendMessage);

module.exports = router;