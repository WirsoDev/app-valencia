const Aqsite = document.getElementById('site')
const linkedin = document.getElementById('in')
const Instagram = document.getElementById('inst')


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

function instaHandler(){
    Instagram.addEventListener('click', ()=>{
        window.open('https://www.instagram.com/aquinos_group/')
    })
}


function mainBtn(){
    siteHandeler()
    linkedinHandler()
    instaHandler()
}


export{mainBtn}