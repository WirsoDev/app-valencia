const Aqsite = document.getElementById('site')
const linkedin = document.getElementById('in')
const vcard = document.getElementById('vacrd')


function siteHandeler(){
    Aqsite.addEventListener('click', ()=>{
        window.open('https://www.aquinosgroup.com');
    })
}


function linkedinHandler(){
    linkedin.addEventListener('click', ()=>{
        window.open('https://www.linkedin.com/company/aquinosgroup/')
    })
}


function mainBtn(){
    siteHandeler()
    linkedinHandler()
}


export{mainBtn}