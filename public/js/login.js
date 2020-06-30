



    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    


    function validate()
{
    
   
let email = document.getElementById("email").value;
let pwd = document.getElementById("pwd").value;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");



   
    if(reg.test(email)&&reg1.test(pwd))
    {
        error.innerHTML="valid email";
        error.style.color="blue";
        error1.innerHTML="valid password";
        error1.style.color="blue";
        return true;
        
    }
    else if(reg.test!=(email)&&reg1.test(pwd)){
        error.innerHTML="invalid email";
        error.style.color="red";
        error1.innerHTML="valid password";
        error1.style.color="blue";
        return false;    

    }
     else if(reg.test(email)&&reg1.test!=(pwd)){
        error1.innerHTML="invalid pwd";
        error1.style.color="red";
        error.innerHTML="valid email";
        error.style.color="blue";
        return false;
    }
    else{
        error.innerHTML="invalid email";
        error.style.color="red";
        error1.innerHTML="invalid pwd";
        error1.style.color="red";
        return false;
    }
  
   
   }
   
   function check(){
    
    if(pwd.value.length<8) {
        error1.innerHTML = "Invalid Pwd";
        error1.style.color = "red";
        
    }
    else if(pwd.value.length==8||pwd.value.length<=10){
        error1.innerHTML = "poor";
        error1.style.color="red";
    }
    else if(pwd.value.length==11||pwd.value.length<=13){
        error1.innerHTML = "medium";
        error1.style.color="skyblue";
    }
    else {
        error1.innerHTML = "strong";
        error1.style.color = "green";
    }
    
}


