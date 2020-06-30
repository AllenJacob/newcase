const express = require("express");
const signuprouter = express.Router();
const Signupdata = require('../model/Signupdata');


function router(nav){
    signuprouter.get("/",function(req,res){
        res.render("signup",{
            nav,
            title:'Signup'
        });
    });

    signuprouter.post('/login',function(req,res){
        var item ={
             email:req.body.email,
             mobile:req.body.mobile,
             password:req.body.password
        }
        var signup = new Signupdata(item);
        console.log(item);
        signup.save();
        res.redirect('/login');
    });

    return signuprouter;
}
module.exports = router;