const express     = require("express");
const User        = require("../models/user");

const router      = express.Router();

router.get("/", (req, res)=>{
    if(req.user){
        User.findById(req.user._id).then(()=>res.redirect("/users/@me"))
        .catch((e)=>{
            console.log(e);
            return res.redirect("/users/login");
          
    
        });
    }else{
        res.redirect("/users/login");
    }
});

router.get("/joystick", (req, res)=>{
  if(req.user){
    res.render('joystick',{title:"joystick"}) 
  }else{
    res.redirect("/users/login")
  }
})

router.get("/2048", (req, res)=>{
  if(req.user){
    res.render('2048',{title:"2048"}) 
  }else{
    res.redirect("/users/login")
  }
})

module.exports = router;
