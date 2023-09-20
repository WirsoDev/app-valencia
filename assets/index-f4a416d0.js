(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();function b(a,o){const e=["#50543D","#D2B07E","#622C25","#E1CDB8"],c=["100px","80px","70px","60px","50px","30px","20px"].reverse();let t=Math.floor(o/c.length),n=0,r=0;for(let i=0;i<o;i++){const s=document.createElement("div");s.classList.add("ball"),s.id=`ball${i}`,s.style.backgroundColor=e[Math.floor(Math.random()*e.length)];let f=c[n];s.style.width=f,s.style.height=f,a.appendChild(s);const h=Math.floor(Math.random()*(a.clientWidth-10)),E=Math.floor(Math.random()*(a.clientHeight-10));s.style.left=`${h}px`,s.style.top=`${E}px`,r==t?(r=0,n++):r++}const l=document.querySelectorAll(".ball");for(let i=0;i<l.length;i++){const s=l[i].offsetWidth;s==20&&(l[i].style.filter="blur(8px)"),s==30&&(l[i].style.filter="blur(6px)"),s==50&&(l[i].style.filter="blur(3.5px)"),s==60&&(l[i].style.filter="blur(2px)"),s==70&&(l[i].style.filter="blur(1.5px)")}}function L(){typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(a=>{a==="granted"&&window.addEventListener("deviceorientation",()=>{console.log("granted")})}).catch(console.error):console.log("not iOS")}function w(){let a=document.querySelectorAll(".ball");window.addEventListener("deviceorientation",o);function o(e){Math.round(e.alpha);var c=Math.round(e.beta),t=Math.round(e.gamma);a.forEach(n=>{v(n,c,t)})}}function v(a,o,e,c){let t=a.clientHeight;if(t=="100"){a.style.transform=`translateY(${o}px) translateX(${e}px) `;return}if(t=="80"){a.style.transform=`translateY(${o*1.5}px) translateX(${e*1.5}px)`;return}if(t=="70"){a.style.transform=`translateY(${o*2}px) translateX(${e*2}px)`;return}if(t=="60"){a.style.transform=`translateY(${o*2}px) translateX(${e*2}px)`;return}if(t=="50"){a.style.transform=`translateY(${o*2.5}px) translateX(${e*2.5}px)`;return}if(t=="30"){a.style.transform=`translateY(${o*3}px) translateX(${e*3}px)`;return}if(t=="20"){a.style.transform=`translateY(${o*3.5}px) translateX(${e*3.5}px)`;return}}const g=document.getElementById("site"),y=document.getElementById("in"),C=document.getElementById("inst");function O(){g.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com")})}function T(){y.addEventListener("click",()=>{window.open("https://www.linkedin.com/company/aquinosgroup/")})}function x(){C.addEventListener("click",()=>{window.open("https://www.instagram.com/aquinos_group/")})}function A(){O(),T(),x()}function u(a,o){const e=document.querySelector(".email-modal-cont");let c=`
        <div class="alert-box">
            <h1>${a}</h1>
            <p>${o}</p>
        </div>
    `;const t=document.createElement("div");t.classList.add("alert-box-cont"),t.innerHTML=c,e.appendChild(t),setTimeout(()=>{t.remove()},"3000")}class d{constructor(){this.testUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha1",this.pingsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha2",this.contactsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha3"}postNewRequest(o){fetch(this.testUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewPing(o){fetch(this.pingsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewContact(o){fetch(this.contactsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}}const N=document.querySelector(".sub-btn"),S=document.querySelector(".dis-btn"),p=document.querySelector(".email-modal-cont"),D=document.querySelector(".email-policy");function q(){N.addEventListener("click",()=>{const o=document.querySelector("#email").value;let c=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(o);if(o.length<=0){u("&#9785;","You need to fill in your email");return}if(!c){u("&#9785;","This email is not valid");return}if(c){u("&#9786;","Thanks! Let's go!");const t=new d;let n={EMAIL:o,DATE:new Date};t.postNewRequest(n),setTimeout(()=>{p.classList.add("hide")},"3000");return}})}function R(){S.addEventListener("click",()=>{p.classList.add("hide")})}function M(){D.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en")})}function I(){q(),R(),M()}const k=document.querySelector("#getContacts"),m=document.querySelector(".contacts"),B=document.querySelector(".close"),F=document.querySelector("#leo"),$=document.querySelector("#jose"),V=document.querySelector("#tiago"),U=document.querySelector("#sofia"),P=document.querySelector("#fabio");function j(){k.addEventListener("click",()=>{m.classList.remove("remove-cont")})}function H(){B.addEventListener("click",()=>{m.classList.add("remove-cont")})}function G(){F.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Leonel Mendes;;;
FN:Leonel Mendes
TEL;CELL:+351 968 484 537
EMAIL;HOME:leonel.mendes@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Commercial Manager
END:VCARD`,o=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(o);const c=document.createElement("a");c.download="Leonel.vcf",c.textContent="Leonel",c.href=e,c.click();const t=new d;let n={CONTACT:"LEONEL",DATE:new Date};t.postNewContact(n)})}function J(){$.addEventListener("click",()=>{const a=new d;let o={CONTACT:"JOSE",DATE:new Date};a.postNewContact(o),console.log("click");var e=`BEGIN:VCARD
VERSION:3.0
N:Jose Sousa;;;
FN:Jose Sousa
TEL;CELL:+351 964 371 584
EMAIL;HOME:jose.sousa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,c=new Blob([e],{type:"text/vcard"}),t=URL.createObjectURL(c);const n=document.createElement("a");n.download="Jose.vcf",n.textContent="Jose",n.href=t,n.click()})}function K(){V.addEventListener("click",()=>{const a=new d;let o={CONTACT:"TIAGO",DATE:new Date};a.postNewContact(o),console.log("click");var e=`BEGIN:VCARD
VERSION:3.0
N:Tiago Ferreira;;;
FN:Tiago Ferreira
TEL;CELL:
EMAIL;HOME:TiagoFerreira.Dias@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,c=new Blob([e],{type:"text/vcard"}),t=URL.createObjectURL(c);const n=document.createElement("a");n.download="Tiago.vcf",n.textContent="Tiago",n.href=t,n.click()})}function W(){U.addEventListener("click",()=>{const a=new d;let o={CONTACT:"SOFIA",DATE:new Date};a.postNewContact(o),console.log("click");var e=`BEGIN:VCARD
VERSION:3.0
N:Sofia Cristovão;;;
FN:Sofia Cristovão
TEL;CELL:+351 927 246 462
EMAIL;HOME:Sofia.cristovao@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,c=new Blob([e],{type:"text/vcard"}),t=URL.createObjectURL(c);const n=document.createElement("a");n.download="Sofia.vcf",n.textContent="Sofia",n.href=t,n.click()})}function Y(){P.addEventListener("click",()=>{const a=new d;let o={CONTACT:"FABIO",DATE:new Date};a.postNewContact(o),console.log("click");var e=`BEGIN:VCARD
VERSION:3.0
N:Fabio Costa;;;
FN:Fabio Costa
TEL;CELL:
EMAIL;HOME:fabio.costa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,c=new Blob([e],{type:"text/vcard"}),t=URL.createObjectURL(c);const n=document.createElement("a");n.download="Fabio.vcf",n.textContent="Fabio",n.href=t,n.click()})}function X(){j(),H(),G(),J(),W(),K(),Y()}const z=new d;z.postNewPing({DATE:new Date});const _=document.querySelector(".app-balls");function Q(){b(_,90),w(),A(),I(),L(),X()}Q();
