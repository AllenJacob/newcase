
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',()=>{
    console.log("bookdata database is connected");
})



const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    
    
    author:String,
    books:String,
    image:String,
}) ;


var Authordata = mongoose.model('authordata',AuthorSchema);



module.exports = Authordata;
