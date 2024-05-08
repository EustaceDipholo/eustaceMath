document.addEventListener("DOMContentLoaded",()=>{
    const x=document.querySelector("#LogIn");
    const y=document.querySelector("#SignIn");
    
    document.querySelector("#Signs").addEventListener("click",e=>{
        e.preventDefault();
        y.classList.remove("formHide");
        x.classList.add("formHide");
    });

    document.querySelector("#Logs").addEventListener("click",e=>{
        e.preventDefault();
        x.classList.remove("formHide"); 
        y.classList.add("formHide");
        
    });
    
});

