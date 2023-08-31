// handle email 
    // check if is valid email
    // store email on google sheets

// handle dismiss
// link to email policy

//all btns consts
import {crateAlertBox} from './alertBox'

const submit = document.querySelector('.sub-btn')
const dismissBtn = document.querySelector('.dis-btn')
const emailModal = document.querySelector('.email-modal-cont')
const emailPolicy = document.querySelector('.email-policy')


function emailHandler(){

    submit.addEventListener('click',()=>{
        const emailInput = document.querySelector('#email')
        const emailValue = emailInput.value

        //check if is valid email regex
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}') 
        let emailValid = regex.test(emailValue)

        if(emailValue.length <= 0){
            crateAlertBox( '&#9785;','You need to fill in your email')
            return
        }

        if(!emailValid){
            crateAlertBox('&#9785;','This email is not valid')
            return
        }

        if(emailValid){
            // do stuff
            crateAlertBox('&#9786;',"Thanks! Let's go!")
            setTimeout(()=>{
                emailModal.classList.add('hide')
            }, '3000')
            return
        }
        
    })
}


function dismiss(){
    dismissBtn.addEventListener('click', ()=>{
        emailModal.classList.add('hide')
    })
}


function emailPolicyHandler(){
    emailPolicy.addEventListener('click', ()=>{
        window.open('https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en')
    })
}


function emailMain(){
    emailHandler()
    dismiss()
    emailPolicyHandler()
}


export{ emailMain }