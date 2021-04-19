

// sgin up page

const signform = document.getElementById('sform');

const emailid = document.getElementById('email');
const password = document.getElementById('password');
const passwordstrength = document.getElementById('password-strength');
const phoneno = document.getElementById('phoneNo');
//password variables

let state = false;
let lowUpeercase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");




signform.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkinputs();

})


  function checkinputs() {
      emailvalidation();
      phonevalidation();
      passwordvalidation();
  }







function emailvalidation() {
    
        const emailValue = emailid.value.trim();
        
        if(!isValidEmail(emailValue)){
        
           
            Forerror (emailid, "Email formate error");          
        
    
        }else{
            Forsuccess (emailid); 
        }
    
     
    }


     
function phonevalidation(){
    const phnovalue = phoneno.value.trim();
     
    if(!phonenumber(phnovalue)){
        
        Forerror (phoneno, "Phone number formate error");
    }
    else {
        Forsuccess (phoneno);
    }
    }

function passwordvalidation() {
    const passValue = password.value.trim();

    if(passValue ==="")
    {
        Forerror (password, "Password cannot be empty");
    }
    else
    checkStrength(passValue);
    
    
}    
  
function checkStrength(passW){
    let strength = 0;
    if(passW.match(/([a-z]*[A-Z])|([A-Z]*[a-z])/)){
        strength+=1;
        lowUpeercase.classList.remove('fa-circle');
        lowUpeercase.classList.add('fa-check');
    } else {
        lowUpeercase.classList.add('fa-circle');
        lowUpeercase.classList.remove('fa-check');
    }

    if(passW.match(/([0-9])/)){
        strength+=1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');

    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
     
    if(passW.match(/([!,@,#,$,%,^,&,*,.,?])/)){
        strength+=1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
     
    if(passW.length > 7){
        strength+=1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }

   
    if(strength<2){
        passwordstrength.classList.remove("progress-bar-warning");
        passwordstrength.classList.remove("progress-bar-success");
        passwordstrength.classList.add("progress-bar-danger");
        passwordstrength.style="width:20%";
    }else if(strength == 3) {
        passwordstrength.classList.remove("progress-bar-success");
        passwordstrength.classList.remove("progress-bar-danger");
        passwordstrength.classList.add("progress-bar-warning");
        passwordstrength.style="width:60%";
    }else if(strength == 4) {
        passwordstrength.classList.remove("progress-bar-warning");
        passwordstrength.classList.remove("progress-bar-danger");
        passwordstrength.classList.add("progress-bar-success");
        passwordstrength.style="width:100%";
    }


}






     function Forerror (input, message) {
        let parent = input.parentElement;
        let msgsmall = parent.querySelector('small');
        msgsmall.innerText = message;
        parent.className = 'form-elements error';
     }

     function Forsuccess (input) {
        let parent = input.parentElement;
        parent.className = 'form-elements success';
     }





     function phonenumber(inputtxt) {

          return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(inputtxt);
              
        }
        



    function isValidEmail(email) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
                
        } 
    

