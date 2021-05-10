const router = require("mongoose").Router();

router.post('/',async(req,res)=>{

    res.status(201).send({
        msg:""
    })

})

router.get('/:id',async(req,res)=>{
    let user;

    res.send({
        user
    })
})

router.put('/:id',async(req,res)=>{
    res.send({
        msg:""
    })
})

router.delete('/',async(req,res)=>{
    res.send({
        msg:""
    })
})


module.exports = router;