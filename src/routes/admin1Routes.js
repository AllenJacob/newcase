const express = require('express');
const admin1Router = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
admin1Router.get('/',function(req,res){
    res.render('addauthor',{
        nav,
        title:'Add Author'
    })
})
  admin1Router.post('/addauthor',function(req,res){
      var item ={
         
         author:req.body.author,
         books:req.body.books,
         image:req.body.image
      }
      var author1 = new Authordata(item);
      console.log(item);
      author1.save();
      res.redirect('/authors');
  });

return admin1Router;
}
module.exports = router;