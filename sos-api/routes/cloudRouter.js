const router = require('express').Router();

router.post('/upload',(req,res) => {
    res.send('Upload Photo');
});

router.post('/request',(req,res)=>{
    res.send('Get Photo');
});

module.exports = router;