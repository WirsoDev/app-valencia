(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();function L(a,t){const e=["#50543D","#D2B07E","#622C25","#E1CDB8"],n=["100px","80px","70px","60px","50px","30px","20px"].reverse();let o=Math.floor(t/n.length),c=0,r=0;for(let i=0;i<t;i++){const s=document.createElement("div");s.classList.add("ball"),s.id=`ball${i}`,s.style.backgroundColor=e[Math.floor(Math.random()*e.length)];let p=n[c];s.style.width=p,s.style.height=p,a.appendChild(s);const E=Math.floor(Math.random()*(a.clientWidth-10)),b=Math.floor(Math.random()*(a.clientHeight-10));s.style.left=`${E}px`,s.style.top=`${b}px`,r==o?(r=0,c++):r++}const l=document.querySelectorAll(".ball");for(let i=0;i<l.length;i++){const s=l[i].offsetWidth;s==20&&(l[i].style.filter="blur(8px)"),s==30&&(l[i].style.filter="blur(6px)"),s==50&&(l[i].style.filter="blur(3.5px)"),s==60&&(l[i].style.filter="blur(2px)"),s==70&&(l[i].style.filter="blur(1.5px)")}}function v(){typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(a=>{a==="granted"&&window.addEventListener("deviceorientation",()=>{console.log("granted")})}).catch(console.error):console.log("not iOS")}function g(){let a=document.querySelectorAll(".ball");window.addEventListener("deviceorientation",t);function t(e){Math.round(e.alpha);var n=Math.round(e.beta),o=Math.round(e.gamma);a.forEach(c=>{y(c,n,o)})}}function y(a,t,e,n){let o=a.clientHeight;if(o=="100"){a.style.transform=`translateY(${t}px) translateX(${e}px) `;return}if(o=="80"){a.style.transform=`translateY(${t*1.5}px) translateX(${e*1.5}px)`;return}if(o=="70"){a.style.transform=`translateY(${t*2}px) translateX(${e*2}px)`;return}if(o=="60"){a.style.transform=`translateY(${t*2}px) translateX(${e*2}px)`;return}if(o=="50"){a.style.transform=`translateY(${t*2.5}px) translateX(${e*2.5}px)`;return}if(o=="30"){a.style.transform=`translateY(${t*3}px) translateX(${e*3}px)`;return}if(o=="20"){a.style.transform=`translateY(${t*3.5}px) translateX(${e*3.5}px)`;return}}const w=document.getElementById("site"),C=document.getElementById("in"),O=document.getElementById("inst");function S(){w.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com")})}function x(){C.addEventListener("click",()=>{window.open("https://www.linkedin.com/company/aquinosgroup/")})}function A(){O.addEventListener("click",()=>{window.open("https://www.instagram.com/aquinos_group/")})}function T(){S(),x(),A()}function u(a,t){const e=document.querySelector(".email-modal-cont");let n=`
        <div class="alert-box">
            <h1>${a}</h1>
            <p>${t}</p>
        </div>
    `;const o=document.createElement("div");o.classList.add("alert-box-cont"),o.innerHTML=n,e.appendChild(o),setTimeout(()=>{o.remove()},"3000")}class f{constructor(){this.testUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha1",this.pingsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha2",this.contactsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha3"}postNewRequest(t){fetch(this.testUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewPing(t){fetch(this.pingsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewContact(t){fetch(this.contactsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}}const N=document.querySelector(".sub-btn"),q=document.querySelector(".dis-btn"),m=document.querySelector(".email-modal-cont"),R=document.querySelector(".email-policy");function M(){N.addEventListener("click",()=>{const t=document.querySelector("#email").value;let n=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(t);if(t.length<=0){u("&#9785;","You need to fill in your email");return}if(!n){u("&#9785;","This email is not valid");return}if(n){u("&#9786;","Thanks! Let's go!");const o=new f;let c={EMAIL:t,DATE:new Date};o.postNewRequest(c),setTimeout(()=>{m.classList.add("hide")},"500");return}})}function D(){q.addEventListener("click",()=>{m.classList.add("hide")})}function I(){R.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en")})}function k(){M(),D(),I()}const B=document.querySelector("#getContacts"),h=document.querySelector(".contacts"),F=document.querySelector(".close"),$=document.querySelector("#leo"),V=document.querySelector("#jose"),U=document.querySelector("#tiago"),P=document.querySelector("#sofia"),j=document.querySelector("#fabio");function H(){B.addEventListener("click",()=>{h.classList.remove("remove-cont")})}function G(){F.addEventListener("click",()=>{h.classList.add("remove-cont")})}function J(){$.addEventListener("click",()=>{d("LEONEL"),console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Leonel Mendes;;;
FN:Leonel Mendes
TEL;CELL:+351 968 484 537
EMAIL;HOME:leonel.mendes@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Commercial Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const n=document.createElement("a");n.download="Leonel.vcf",n.textContent="Leonel",n.href=e,n.click()})}function K(){V.addEventListener("click",()=>{d("JOSE"),console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Jose Sousa;;;
FN:Jose Sousa
TEL;CELL:+351 964 371 584
EMAIL;HOME:jose.sousa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const n=document.createElement("a");n.download="Jose.vcf",n.textContent="Jose",n.href=e,n.click()})}function W(){U.addEventListener("click",()=>{d("TIAGO"),console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Tiago Ferreira;;;
FN:Tiago Ferreira
TEL;CELL:
EMAIL;HOME:TiagoFerreira.Dias@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const n=document.createElement("a");n.download="Tiago.vcf",n.textContent="Tiago",n.href=e,n.click()})}function Y(){P.addEventListener("click",()=>{d("SOFIA"),console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Sofia Cristovão;;;
FN:Sofia Cristovão
TEL;CELL:+351 927 246 462
EMAIL;HOME:Sofia.cristovao@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const n=document.createElement("a");n.download="Sofia.vcf",n.textContent="Sofia",n.href=e,n.click()})}function X(){j.addEventListener("click",()=>{d("FABIO"),console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Fabio Costa;;;
FN:Fabio Costa
TEL;CELL:
EMAIL;HOME:fabio.costa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const n=document.createElement("a");n.download="Fabio.vcf",n.textContent="Fabio",n.href=e,n.click()})}function d(a){console.log("Add contact data!");const t=new f;let e={CONTACT:a,DATE:new Date};t.postNewContact(e)}function z(){H(),G(),J(),K(),Y(),W(),X()}const _=new f;_.postNewPing({DATE:new Date});const Q=document.querySelector(".app-balls");function Z(){L(Q,90),g(),T(),k(),v(),z()}Z();
