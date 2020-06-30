const express = require("express");
const Signupdata = require("../model/Signupdata");
const loginrouter = express.Router();
function router(nav){
    loginrouter.get("/",function(req,res){
        res.render("login",{
            nav,
            title:'Login'
        });
    });

    loginrouter.post('/check',function(req,res){
        var email = req.body.email;
        var password = req.body.password;

        Signupdata.findOne({$and :[{'email' : email},{'password': password}]},function(err,user){
            if(user){
                console.log("valid");
                res.redirect('/books');
            }
            else{
                res.send("invalid credentials");
            }
        })
    })
    return loginrouter;
}
module.exports = router;