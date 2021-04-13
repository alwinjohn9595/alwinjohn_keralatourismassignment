const signformlog = document.getElementById('loginform');
let emailidlog = document.getElementById('loginemail');
let pwdlog = document.getElementById('loginpassword');



const signformsign = document.getElementById('form');
let emailid = document.getElementById('txtemail');
let password = document.getElementById('txtpassword');


signformlog.addEventListener('click', (e)=>{
    e.preventDefault();

    validationlogin();
    validation();

});




function validationlogin() {
    const emailValue = emailidlog.value.trim();
    const pwdvalue = pwdlog.value.trim();
    
    
    if(!isValidEmail(emailValue)){
    
                    let parent = emailidlog.parentElement;
                    let msgsmall = parent.querySelector('small');
                    msgsmall.style.visibilty="visible";
                    msgsmall.innerText="email formate not correct";
                    parent.className = 'form-elemets error';
    

    }else{
        setSuccessFor(emailidlog);
    }

     if (pwdvalue === ""){
        let parent = pwdlog.parentElement;
        let msgsmall = parent.querySelector('small');
        msgsmall.style.visibilty="visible";
        msgsmall.innerText="email formate not correct";
        parent.className = 'form-elemets error';

     } else{
        setSuccessFor(pwdlog);
     }



    


}



function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-elemets success';
}    

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        
}

