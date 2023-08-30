// create an alert box for email

function crateAlertBox(msg){
    
    const app = document.querySelector('.email-modal-cont')

    //create box
    let box = `
        <div class="alert-box">
            <h1>&#9785;</h1>
            <p>${msg}</p>
        </div>
    `

    const alertContDiv = document.createElement('div')
    alertContDiv.classList.add('alert-box-cont')
    alertContDiv.innerHTML = box

    app.appendChild(alertContDiv)

    setTimeout(()=>{
        alertContDiv.remove()
    }, "3000")

}


export {crateAlertBox}