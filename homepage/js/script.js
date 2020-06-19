
console.log("Sorki za lorem ipsum");

let button1 = document.querySelector(".button1")
let newBackground = document.querySelector(".newBackground")
let body = document.querySelector("body")



// button1.addEventListener("click", () =>){body.classList.toggle.}




button1.addEventListener("click", () => { 
    body.classList.toggle("newBackground");



    if (button1.innerText === "Zmień tło na jaśniejsze") {
        button1.innerText = "Zmień tło na ciemniejsze"
    } else {
        button1.innerText = "Zmień tło na jaśniejsze"
    }


});

    /* Alternatywny dzialajacy scenariusz

    if( body.classList.contains("newBackground")){
    button1.innerText = "Zmień tło na jaśniejsze";}

else{ button1.innerText = "Zmień tło na ciemniejsze";}
    
    */ 






