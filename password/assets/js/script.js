const digito1 = document.querySelector("#digito1");
const digito2 = document.querySelector("#digito2");
const digito3 = document.querySelector("#digito3");
const message = document.querySelector("#message");
const verificar = document.querySelector("#verificar");



verificar.addEventListener("click",()=>{

    const password = digito1.value + digito2.value + digito3.value;
   
    if(password === "911"){
        message.textContent = "Password 1 Correcto";
    } else if (password === "714"){
        message.textContent = "Password 2 Correcto";
    } else{
        message.textContent ="Password Incorrecto";
    }
});