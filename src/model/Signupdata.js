
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',()=>{
    console.log("bookdata database is connected");
})



const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    
    
    email:String,
    mobile:Number,
    password:String,
}) ;


var Signupdata = mongoose.model('signupdata',SignupSchema);



module.exports = Signupdata;
