const success = document.querySelector(".successfull")
const typeForm = document. querySelector(".type_form")
const invalid1 = document.querySelector("#invalid-feedback1")
const invalid2 = document.querySelector("#invalid-feedback2")
const invalid3 = document.querySelector("#invalid-feedback3")
const invalid4 = document.querySelector("#invalid-feedback4")

const username = document.querySelector("#user_name")
const email = document.querySelector("#email_name")
const password = document.querySelector("#Password")
const confirmPassword = document.querySelector("#CPassword")


const submission = document.querySelector(".submitButton");


submission.addEventListener("click", function(){
    let inputUsername = username.value
    let inputPassword = password.value
    let inputEmail = email.value
    let inputConfirmPassword = confirmPassword.value
if (inputUsername && inputEmail && inputConfirmPassword === inputPassword){
    success.style.display = "block"
    typeForm.style.display = "none"
    
}else if (inputPassword != inputConfirmPassword){
    invalid4.style.display = "block"
    invalid4.innerText = "Password don't match"
}
else {
    invalid1.style.display = "block"
    invalid2.style.display = "block"
    invalid3.style.display = "block"
    invalid4.style.display = "block"
}
})

username.addEventListener ("click", function(){
    invalid1.style.display = "none"
})

email.addEventListener ("click", function(){
    invalid2.style.display = "none"
})

password.addEventListener ("click", function(){
    invalid3.style.display = "none"
})

confirmPassword.addEventListener ("click", function(){
    invalid4.style.display = "none"
})