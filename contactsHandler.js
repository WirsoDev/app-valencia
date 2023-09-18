const getContacts = document.querySelector('#getContacts')
const contactsModal = document.querySelector('.contacts')
const closeBtn = document.querySelector('.close')

const contactLeo = document.querySelector('#leo')
const contactJose = document.querySelector('#jose')
const contactTiago = document.querySelector('#tiago')
const contactSofia = document.querySelector('#sofia')

import vscards from 'vcards-js'

//open contacts card

function openContactCards(){
    
    getContacts.addEventListener('click', ()=>{
        contactsModal.classList.remove('remove-cont')
    })

}

function closeContactCard(){
    
    closeBtn.addEventListener('click', ()=>{
        contactsModal.classList.add('remove-cont')
    })

}


function downContactsLeo(){

    contactLeo.addEventListener('click', ()=>{
        console.log('click')
        var vCard = vscards()
        vCard.firstName = 'Leonel';
        vCard.lastName = 'Mendes';
        vCard.organization = 'Aquinos Group';
        vCard.workPhone = '+351 968 484 537';
        vCard.title = 'Commercial Manager';

        //vCard.saveToFile('./eric-nesser.vcf');
        downloadToFile(vCard)

    })

}



function downloadToFile(content) {
    const a = document.createElement('a');
    a.style.display = 'none'
    //const file = new Blob([content], { type: contentType });

    // build data url
    var url = 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(content);

    // ask the browser to download it
    document.location.href = url;
}



function contactsMain(){
    openContactCards()
    closeContactCard()
    downContactsLeo()
}



export{contactsMain}