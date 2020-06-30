const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
   
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
              nav,
              title:'Books',
              books  
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Book',
                book 
            });
        })
        
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.deleteOne({_id:id},function(err,result){
                if(result){

                }
        });
        res.redirect('/books');
        
    })
    booksRouter.get('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("editbook",{
                nav,
                title:'Editbook',
                book
            })
        }) 
        
       })
       booksRouter.post('/editbook',function(req,res){
           var id = req.body.id;
           var title = req.body.title;
           var author = req.body.author;
           var genre = req.body.genre;
           
           Bookdata.updateOne({_id:id},{$set:{title:title,author:author,genre:genre}},(err,result)=>{
               if(err) throw err;
               else
               {
                           res.redirect('/books');
                       
                   
               }
           })
       })

    


    return booksRouter;
    
}


module.exports = router;
