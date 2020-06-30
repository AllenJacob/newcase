



    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var reg1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,15}$/
    var reg2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    

function validate()
{
let email = document.getElementById("email").value;
let pno = document.getElementById("pno").value;
let pwd = document.getElementById("pwd").value;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

 
if(reg.test(email)&&reg1.test(pwd)&&reg2.test(pno))
{
    error.innerHTML="valid email";
    error.style.color="blue";
    error1.innerHTML="valid number";
    error1.style.color="blue";
    error2.innerHTML="valid password";
    error2.style.color="blue";

    return true;
}
else if(reg.test!=(email)&&reg1.test(pwd)&&reg2.test(pno)){
    error.innerHTML="invalid email";
    error.style.color="red";
    
    return false;
}
else if(reg1.test!=(pwd)&&reg.test(email)&&reg2.test(pno)){
    
    error2.innerHTML="invalid password";
    error2.style.color="red";

    return false;
}
else if(reg2.test!=(pno)&&reg1.test(pwd)&&reg.test(email)){
    error1.innerHTML="invalid number";
    error1.style.color="red";
    
    return false;
    
}
else if(reg.test!=(email)&&reg1.test!=(pwd)&&reg2.test(pno)){
    error.innerHTML="invalid email";
    error.style.color="red";
    error2.innerHTML="invalid password";
    error2.style.color="red";

    return false;
}
else if(reg.test!=(email)&&reg1.test(pwd)&&reg2.test!=(pno)){
    error.innerHTML="invalid email";
    error.style.color="red";
    error1.innerHTML="invalid number";
    error1.style.color="red";

    return false;
}
else if(reg.test(email)&&reg1.test!=(pwd)&&reg2.test!=(pno)){
    error2.innerHTML="invalid password";
    error2.style.color="red";
    error1.innerHTML="invalid number";
    error1.style.color="red";

    return false;
}

  
 
}

function ontype(){
    if(pwd.value.length<8) {
        error2.innerHTML = "Invalid Pwd";
        error2.style.color = "red";
        
    }
    else if(pwd.value.length==8||pwd.value.length<=10){
        error2.innerHTML = "poor";
        error2.style.color="red";
    }
    else if(pwd.value.length==11||pwd.value.length<=13){
        error2.innerHTML = "medium";
        error2.style.color="skyblue";
    }
    else {
        error2.innerHTML = "strong";
        error2.style.color = "green";
    }
}
