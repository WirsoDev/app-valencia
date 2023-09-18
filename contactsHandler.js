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
        var vCard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:" + "contact.name "+ ";;;\n"
        + "FN:" + "contact.name" + "\n"
        + "TEL;CELL:" + "contact.phone" + "\n"
        + "TEL;CELL:" + "contact.mobile" + "\n"
        + "EMAIL;HOME:" + "contact.email "+ "\n"
        + "ADR;HOME:" + "contact.address" + "\n"
        + "ORG;WORK:" + "contact.organization" + "\n"
        + "TITLE:" + "contact.title" + "\n"
        + "URL:" + "contact.url" + "\n"
        + "NOTE:" + "contact.notes" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
        

            const newLink = document.createElement('a');
            newLink.download = 'name' + ".vcf";
            newLink.textContent = 'name';
            newLink.href = url;

            newLink.click();

            // window.close();
    })

}



function downloadToFile(content, filename, contentType) {
    const a = document.createElement('a');
    a.style.display = 'none'
    const file = new Blob([content], { type: contentType });

    if(navigator.share){
        navigator.share({
            title: 'New Contact',
            text: 'Save contact',
            files: [new File([file], filename, {type: contentType})],
        }).then(()=>{ })

    }else{
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
  
        URL.revokeObjectURL(a.href);
    }
}



function contactsMain(){
    openContactCards()
    closeContactCard()
    downContactsLeo()
}



export{contactsMain}