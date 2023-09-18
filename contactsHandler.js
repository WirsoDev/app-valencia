const getContacts = document.querySelector('#getContacts')
const contactsModal = document.querySelector('.contacts')
const closeBtn = document.querySelector('.close')

const contactLeo = document.querySelector('#')

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


function downContactsHandler(){




}




function getConts(){
    
    getContacts.addEventListener('click', ()=>{
        console.log('click')
        var vCard = vscards()
        vCard.firstName = 'Eric';
        vCard.middleName = 'J';
        vCard.lastName = 'Nesser';
        vCard.organization = 'ACME Corporation';
        vCard.workPhone = '312-555-1212';
        vCard.title = 'Software Developer';
        vCard.url = 'https://github.com/enesser';
        vCard.note = 'Notes on Eric';

        //vCard.saveToFile('./eric-nesser.vcf');
        downloadToFile(vCard, 'vcard.cvf','text/vcard')

    })
}


function downloadToFile(content, filename, contentType) {
    const a = document.createElement('a');
    a.style.display = 'none'
    const file = new Blob([content], { type: contentType });
  
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
}

function contactsMain(){
    openContactCards()
    closeContactCard()
}



export{contactsMain}