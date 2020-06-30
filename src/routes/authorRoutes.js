const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav) {
   
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
              nav,
              title:'Authors',
              authors  
            });
        })
       
    });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Author',
                author 
            });
        })
        
    });
    authorRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Authordata.deleteOne({_id:id},function(err,result){
                if(result){

                }
        });
        res.redirect('/authors');
        
    })
    authorRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id}) 
        .then(function(author){
            res.render("editauthor",{
                nav,
                title:'Editauthor',
                book
            })
        }) 
        
       })
       authorRouter.post('/editauthor',function(req,res){
           var id = req.body.id;
           var author = req.body.author;
           var books = req.body.books;
           Authordata.update({_id:id},{$set:{author:author,books:books}},(err,result)=>{
               if(err) throw err;
               else
               {
                           res.redirect('/authors');
                       
                   
               }
           })
       })

    


    return authorRouter;
    
}


module.exports = router;
