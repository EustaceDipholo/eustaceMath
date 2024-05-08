//When the user clicks sign in the sign in form must appear,and if he clicks log in ,then the log in form should appear but the forms shoul not appear at the same time
document.addEventListener("DOMContentLoaded",()=>{
    const x=document.querySelector("#LogInForm");
    const y=document.querySelector("#SignInForm");

    document.querySelector("#linkSignIn").addEventListener("click",e=>{
        e.preventDefault();
        y.classList.add("formHide");
        x.classList.remove("formHide"); 
    });
    document.querySelector("#linkRegister").addEventListener("click",e=>{
        e.preventDefault();
        y.classList.remove("formHide");
        x.classList.add("formHide");
    });
});
const loggingIn=document.querySelector("#LogButton");
const error=document.getElementById("errorMssg");
const space=document.getElementById("space1");
const space2=document.getElementById("space2");
let userName;

//creating a function to get the size of the string variable it receives
function length(username){
    let size=0;
    do{
        size++;        
    }while(username[size]); 
    return size;
}

document.getElementById("signInButton").onclick=function(){
    userName=document.getElementById("nameSignIn").value;
    if(length(userName)<6){
        error.classList.remove("formHide");
        space.classList.add("formHide");
        space2.classList.add("formHide");
    }
    else{
        error.classList.add("formHide");
        space.classList.remove("formHide");
        space2.classList.remove("formHide");
    }
};
