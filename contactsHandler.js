const getContacts = document.querySelector('#getContacts')
const contactsModal = document.querySelector('.contacts')
const closeBtn = document.querySelector('.close')

const contactLeo = document.querySelector('#leo')
const contactJose = document.querySelector('#jose')
const contactTiago = document.querySelector('#tiago')
const contactSofia = document.querySelector('#sofia')
const contactFabio = document.querySelector('#fabio')

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
        + "N:" + "Leonel Mendes"+ ";;;\n"
        + "FN:" + "Leonel Mendes" + "\n"
        + "TEL;CELL:" + "+351 968 484 537" + "\n"
        + "EMAIL;HOME:" + "leonel.mendes@aquinos.pt"+ "\n"
        + "ORG;WORK:" + "Aquinos Sofas" + "\n"
        + "TITLE:" + "Commercial Manager" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
    
            const newLink = document.createElement('a');
            newLink.download = 'Leonel' + ".vcf";
            newLink.textContent = 'Leonel';
            newLink.href = url;
            newLink.click();
    })
}

function downContactsJose(){
    contactJose.addEventListener('click', ()=>{
        console.log('click')
        var vCard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:" + "Jose Sousa"+ ";;;\n"
        + "FN:" + "Jose Sousa" + "\n"
        + "TEL;CELL:" + "+351 964 371 584" + "\n"
        + "EMAIL;HOME:" + "jose.sousa@aquinos.pt"+ "\n"
        + "ORG;WORK:" + "Aquinos Sofas" + "\n"
        + "TITLE:" + "Key-Account Manager" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
    
            const newLink = document.createElement('a');
            newLink.download = 'Jose' + ".vcf";
            newLink.textContent = 'Jose';
            newLink.href = url;
            newLink.click();
    })
}

function downContactsTiago(){
    contactTiago.addEventListener('click', ()=>{
        console.log('click')
        var vCard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:" + "Tiago Ferreira"+ ";;;\n"
        + "FN:" + "Tiago Ferreira" + "\n"
        + "TEL;CELL:" + "" + "\n"
        + "EMAIL;HOME:" + "TiagoFerreira.Dias@aquinos.pt"+ "\n"
        + "ORG;WORK:" + "Aquinos Sofas" + "\n"
        + "TITLE:" + "Key-Account Manager" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
    
            const newLink = document.createElement('a');
            newLink.download = 'Tiago' + ".vcf";
            newLink.textContent = 'Tiago';
            newLink.href = url;
            newLink.click();
    })
}

function downContactsSofia(){
    contactSofia.addEventListener('click', ()=>{
        console.log('click')
        var vCard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:" + "Sofia Cristovão"+ ";;;\n"
        + "FN:" + "Sofia Cristovão" + "\n"
        + "TEL;CELL:" + "+351 927 246 462" + "\n"
        + "EMAIL;HOME:" + "Sofia.cristovao@aquinos.pt"+ "\n"
        + "ORG;WORK:" + "Aquinos Sofas" + "\n"
        + "TITLE:" + "Key-Account Manager" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
    
            const newLink = document.createElement('a');
            newLink.download = 'Sofia' + ".vcf";
            newLink.textContent = 'Sofia';
            newLink.href = url;
            newLink.click();
    })
}

function downContactsFabio(){
    contactFabio.addEventListener('click', ()=>{
        console.log('click')
        var vCard = "BEGIN:VCARD\nVERSION:3.0\n"
        + "N:" + "Fabio Costa"+ ";;;\n"
        + "FN:" + "Fabio Costa" + "\n"
        + "TEL;CELL:" + "" + "\n"
        + "EMAIL;HOME:" + "fabio.costa@aquinos.pt"+ "\n"
        + "ORG;WORK:" + "Aquinos Sofas" + "\n"
        + "TITLE:" + "Key-Account Manager" + "\n"
        + "END:VCARD";  

        //vCard.saveToFile('./eric-nesser.vcf');
        //downloadToFile(vCard, 'vcard.cvf','text/vcard')
        var blob = new Blob([vCard], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);
    
            const newLink = document.createElement('a');
            newLink.download = 'Fabio' + ".vcf";
            newLink.textContent = 'Fabio';
            newLink.href = url;
            newLink.click();
    })
}





function contactsMain(){
    openContactCards()
    closeContactCard()
    downContactsLeo()
    downContactsJose()
    downContactsSofia()
    downContactsTiago()
    downContactsFabio()
}



export{contactsMain}