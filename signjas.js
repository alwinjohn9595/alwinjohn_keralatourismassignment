

// sgin up page

const signformsign = document.getElementById('sform');

let emailid = document.getElementById('txtemail');
let password = document.getElementById('txtpassword');
let passwordstrength = document.getElementById('Password-strength');
let phoneno = document.getElementById('inputnumber');

let state = false;




function myFunction(show){
    show.classList.toggle('fa-eye-slash');
}


function toggle(){
     if(state){
         password.setAttribute("type", "password");
         state = false;
     }
     else{
         password.setAttribute("type", "text")
         state = true;
     }
}


 
    
function checkStrength(password){
    
    
    let strength = 0 ;



    if(password.match(/^([a-z].*[A-Z])|([A-Z}.*[a-z])$/)){
        strength += 1;
    }


    if(password.match(/^([0-9])$/)){
        strength += 1;
    }



    if(password.match(/^([!,%,@,#,^,$,?,_,~])$/)){
        strength += 1;
    }

    if(password.lenth>7){
        strength += 1;
    }




    if(strength == 0){
        passwordstrength.style = 'width: 0%';
    }
    else if(strength == 2){
        passwordstrength.classList.remove('progress-bar-warning');
        passwordstrength.classList.remove('prgress-bar-success');
        passwordstrength.classList.add('progress-bar-danger');
        passwordstrength.style = 'width: 10%';
    }
}






function validation() {
    
    const emailValue = emailid.value.trim();
    const phnovalue = phoneno.value.trim();

 
    
    if(!isValidEmail(emailValue)){
    
                    let parent = emailid.parentElement;
                    let msgsmall = parent.querySelector('small');
                    msgsmall.style.visibilty="visible";
                    msgsmall.innerText="email formate not correct";
                    parent.className = 'form-elemets error';
    

    }else{
        setSuccessFor(emailid);
    }


    if(!phonenumber(phnovalue)){
        let parentph = phoneno.parentElement;
        let msgsmall = parentph.querySelector('small');
        msgsmall.style.visibilty="visible";
        msgsmall.innerText="";
        parentph.className = 'form-elemets error';  

    }
    else {
        setSuccessFor(phnovalue);
    }
    

}








 signformsign.addEventListener('click',(event)=>{
    event.preventDefault();
    validation();

 })



function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-elemets success';
}    

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        
}


function phonenumber(inputtxt){

  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(inputtxt);
      
      
 
     
    
}