const express = require('express')
const router = express.Router()

router.get('/', (req, resp)=>{
    resp.send('Hello World how are you');
})

module.exports = router