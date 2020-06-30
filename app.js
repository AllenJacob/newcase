const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books' 
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/admin1',name:'Add Author'
    }
    
];
const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorRouter = require("./src/routes/authorRoutes")(nav);

const loginrouter = require("./src/routes/loginrouter")(nav);
const signuprouter = require("./src/routes/signuprouter")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);
const admin1Router = require("./src/routes/admin1Routes")(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginrouter);
app.use('/signup',signuprouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);
app.get('/',function(req,res){
    res.render("index",
    {
      nav:[{link:'/books',name:'Books'},{link:'/admin',name:'Add Book'},{link:'/admin1',name:'Add Author'},{link:'/authors',name:'authors'},{link:'/login',name:'Login'},{link:'/signup',name:'signup'}],      
      title:'Library'  
    });
});

    


app.listen(5000);