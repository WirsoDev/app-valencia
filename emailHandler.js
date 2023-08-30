// handle email 
    // check if is valid email
    // store email on google sheets

// handle dismiss
// link to email policy

//all btns consts

const submit = document.querySelector('.sub-btn')
const dismissBtn = document.querySelector('.dis-btn')
const emailModal = document.querySelector('.email-modal-cont')


function emailHandler(){

    submit.addEventListener('click',()=>{
        const emailInput = document.querySelector('#email')
        const emailValue = emailInput.value

        //check if is valid email regex
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}') 
        let emailValid = regex.test(emailValue)
        if(emailValid){
            // do stuff
            console.log(emailValue)
        }else{
            alert('Email not valid')
            return
        }

        emailModal.classList.add('hide')
    })

}


function dismiss(){
    dismissBtn.addEventListener('click', ()=>{
        emailModal.classList.add('hide')
    })
}


function emailMain(){
    emailHandler()
    dismiss()
}

export{ emailMain }