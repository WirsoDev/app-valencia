(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();function L(a,n){const e=["#50543D","#D2B07E","#622C25","#E1CDB8"],t=["100px","80px","70px","60px","50px","30px","20px"].reverse();let o=Math.floor(n/t.length),c=0,s=0;for(let r=0;r<n;r++){const i=document.createElement("div");i.classList.add("ball"),i.id=`ball${r}`,i.style.backgroundColor=e[Math.floor(Math.random()*e.length)];let u=t[c];i.style.width=u,i.style.height=u,a.appendChild(i);const h=Math.floor(Math.random()*(a.clientWidth-10)),E=Math.floor(Math.random()*(a.clientHeight-10));i.style.left=`${h}px`,i.style.top=`${E}px`,s==o?(s=0,c++):s++}const l=document.querySelectorAll(".ball");for(let r=0;r<l.length;r++){const i=l[r].offsetWidth;i==20&&(l[r].style.filter="blur(8px)"),i==30&&(l[r].style.filter="blur(6px)"),i==50&&(l[r].style.filter="blur(3.5px)"),i==60&&(l[r].style.filter="blur(2px)"),i==70&&(l[r].style.filter="blur(1.5px)")}}function v(){typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(a=>{a==="granted"&&window.addEventListener("deviceorientation",()=>{console.log("granted")})}).catch(console.error):console.log("not iOS")}function b(){let a=document.querySelectorAll(".ball");window.addEventListener("deviceorientation",n);function n(e){Math.round(e.alpha);var t=Math.round(e.beta),o=Math.round(e.gamma);a.forEach(c=>{g(c,t,o)})}}function g(a,n,e,t){let o=a.clientHeight;if(o=="100"){a.style.transform=`translateY(${n}px) translateX(${e}px) `;return}if(o=="80"){a.style.transform=`translateY(${n*1.5}px) translateX(${e*1.5}px)`;return}if(o=="70"){a.style.transform=`translateY(${n*2}px) translateX(${e*2}px)`;return}if(o=="60"){a.style.transform=`translateY(${n*2}px) translateX(${e*2}px)`;return}if(o=="50"){a.style.transform=`translateY(${n*2.5}px) translateX(${e*2.5}px)`;return}if(o=="30"){a.style.transform=`translateY(${n*3}px) translateX(${e*3}px)`;return}if(o=="20"){a.style.transform=`translateY(${n*3.5}px) translateX(${e*3.5}px)`;return}}const y=document.getElementById("site"),w=document.getElementById("in"),C=document.getElementById("inst");function x(){y.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com")})}function S(){w.addEventListener("click",()=>{window.open("https://www.linkedin.com/company/aquinosgroup/")})}function O(){C.addEventListener("click",()=>{window.open("https://www.instagram.com/aquinos_group/")})}function q(){x(),S(),O()}function d(a,n){const e=document.querySelector(".email-modal-cont");let t=`
        <div class="alert-box">
            <h1>${a}</h1>
            <p>${n}</p>
        </div>
    `;const o=document.createElement("div");o.classList.add("alert-box-cont"),o.innerHTML=t,e.appendChild(o),setTimeout(()=>{o.remove()},"3000")}class f{constructor(){this.testUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha1",this.pingsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha2"}postNewRequest(n){fetch(this.testUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewPing(n){fetch(this.pingsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}}const R=document.querySelector(".sub-btn"),A=document.querySelector(".dis-btn"),p=document.querySelector(".email-modal-cont"),M=document.querySelector(".email-policy");function N(){R.addEventListener("click",()=>{const n=document.querySelector("#email").value;let t=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(n);if(n.length<=0){d("&#9785;","You need to fill in your email");return}if(!t){d("&#9785;","This email is not valid");return}if(t){d("&#9786;","Thanks! Let's go!");const o=new f;let c={EMAIL:n,DATE:new Date};o.postNewRequest(c),setTimeout(()=>{p.classList.add("hide")},"3000");return}})}function T(){A.addEventListener("click",()=>{p.classList.add("hide")})}function D(){M.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en")})}function I(){N(),T(),D()}const k=document.querySelector("#getContacts"),m=document.querySelector(".contacts"),B=document.querySelector(".close"),$=document.querySelector("#leo"),F=document.querySelector("#jose"),V=document.querySelector("#tiago"),H=document.querySelector("#sofia"),P=document.querySelector("#fabio");function U(){k.addEventListener("click",()=>{m.classList.remove("remove-cont")})}function j(){B.addEventListener("click",()=>{m.classList.add("remove-cont")})}function G(){$.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Leonel Mendes;;;
FN:Leonel Mendes
TEL;CELL:+351 968 484 537
EMAIL;HOME:leonel.mendes@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Commercial Manager
END:VCARD`,n=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(n);const t=document.createElement("a");t.download="Leonel.vcf",t.textContent="Leonel",t.href=e,t.click()})}function K(){F.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Jose Sousa;;;
FN:Jose Sousa
TEL;CELL:+351 964 371 584
EMAIL;HOME:jose.sousa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,n=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(n);const t=document.createElement("a");t.download="Jose.vcf",t.textContent="Jose",t.href=e,t.click()})}function W(){V.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Tiago Ferreira;;;
FN:Tiago Ferreira
TEL;CELL:
EMAIL;HOME:TiagoFerreira.Dias@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,n=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(n);const t=document.createElement("a");t.download="Tiago.vcf",t.textContent="Tiago",t.href=e,t.click()})}function Y(){H.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Sofia Cristovão;;;
FN:Sofia Cristovão
TEL;CELL:+351 927 246 462
EMAIL;HOME:Sofia.cristovao@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,n=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(n);const t=document.createElement("a");t.download="Sofia.vcf",t.textContent="Sofia",t.href=e,t.click()})}function J(){P.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Fabio Costa;;;
FN:Fabio Costa
TEL;CELL:
EMAIL;HOME:fabio.costa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,n=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(n);const t=document.createElement("a");t.download="Fabio.vcf",t.textContent="Fabio",t.href=e,t.click()})}function X(){U(),j(),G(),K(),Y(),W(),J()}const z=new f;z.postNewPing({DATE:new Date});const _=document.querySelector(".app-balls");function Q(){L(_,90),b(),q(),I(),v(),X()}Q();
