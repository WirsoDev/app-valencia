(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();function E(a,t){const e=["#50543D","#D2B07E","#622C25","#E1CDB8"],o=["100px","80px","70px","60px","50px","30px","20px"].reverse();let n=Math.floor(t/o.length),r=0,c=0;for(let s=0;s<t;s++){const i=document.createElement("div");i.classList.add("ball"),i.id=`ball${s}`,i.style.backgroundColor=e[Math.floor(Math.random()*e.length)];let u=o[r];i.style.width=u,i.style.height=u,a.appendChild(i);const h=Math.floor(Math.random()*(a.clientWidth-10)),v=Math.floor(Math.random()*(a.clientHeight-10));i.style.left=`${h}px`,i.style.top=`${v}px`,c==n?(c=0,r++):c++}const l=document.querySelectorAll(".ball");for(let s=0;s<l.length;s++){const i=l[s].offsetWidth;i==20&&(l[s].style.filter="blur(8px)"),i==30&&(l[s].style.filter="blur(6px)"),i==50&&(l[s].style.filter="blur(3.5px)"),i==60&&(l[s].style.filter="blur(2px)"),i==70&&(l[s].style.filter="blur(1.5px)")}}function L(){typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(a=>{a==="granted"&&window.addEventListener("deviceorientation",()=>{console.log("granted")})}).catch(console.error):console.log("not iOS")}function g(){let a=document.querySelectorAll(".ball");window.addEventListener("deviceorientation",t);function t(e){Math.round(e.alpha);var o=Math.round(e.beta),n=Math.round(e.gamma);a.forEach(r=>{y(r,o,n)})}}function y(a,t,e,o){let n=a.clientHeight;if(n=="100"){a.style.transform=`translateY(${t}px) translateX(${e}px) `;return}if(n=="80"){a.style.transform=`translateY(${t*1.5}px) translateX(${e*1.5}px)`;return}if(n=="70"){a.style.transform=`translateY(${t*2}px) translateX(${e*2}px)`;return}if(n=="60"){a.style.transform=`translateY(${t*2}px) translateX(${e*2}px)`;return}if(n=="50"){a.style.transform=`translateY(${t*2.5}px) translateX(${e*2.5}px)`;return}if(n=="30"){a.style.transform=`translateY(${t*3}px) translateX(${e*3}px)`;return}if(n=="20"){a.style.transform=`translateY(${t*3.5}px) translateX(${e*3.5}px)`;return}}const b=document.getElementById("site"),w=document.getElementById("in"),x=document.getElementById("inst");function C(){b.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com")})}function S(){w.addEventListener("click",()=>{window.open("https://www.linkedin.com/company/aquinosgroup/")})}function O(){x.addEventListener("click",()=>{window.open("https://www.instagram.com/aquinos_group/")})}function q(){C(),S(),O()}function d(a,t){const e=document.querySelector(".email-modal-cont");let o=`
        <div class="alert-box">
            <h1>${a}</h1>
            <p>${t}</p>
        </div>
    `;const n=document.createElement("div");n.classList.add("alert-box-cont"),n.innerHTML=o,e.appendChild(n),setTimeout(()=>{n.remove()},"3000")}class f{constructor(){this.testUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha1",this.pingsUrl="https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha2"}postNewRequest(t){fetch(this.testUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}postNewPing(t){fetch(this.pingsUrl,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{console.log("Add new data"+e)}).catch(e=>{console.log(e)})}}const M=document.querySelector(".sub-btn"),R=document.querySelector(".dis-btn"),p=document.querySelector(".email-modal-cont"),T=document.querySelector(".email-policy");function A(){M.addEventListener("click",()=>{const t=document.querySelector("#email").value;let o=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(t);if(t.length<=0){d("&#9785;","You need to fill in your email");return}if(!o){d("&#9785;","This email is not valid");return}if(o){d("&#9786;","Thanks! Let's go!");const n=new f;let r={EMAIL:t,DATE:new Date};n.postNewRequest(r),setTimeout(()=>{p.classList.add("hide")},"3000");return}})}function N(){R.addEventListener("click",()=>{p.classList.add("hide")})}function D(){T.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en")})}function I(){A(),N(),D()}const k=document.querySelector("#getContacts"),m=document.querySelector(".contacts"),$=document.querySelector(".close"),B=document.querySelector("#leo"),P=document.querySelector("#jose"),V=document.querySelector("#tiago"),H=document.querySelector("#sofia");function U(){k.addEventListener("click",()=>{m.classList.remove("remove-cont")})}function j(){$.addEventListener("click",()=>{m.classList.add("remove-cont")})}function F(){B.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Leonel Mendes;;;
FN:Leonel Mendes
TEL;CELL:+351 968 484 537
EMAIL;HOME:leonel.mendes@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Commercial Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const o=document.createElement("a");o.download="Leonel.vcf",o.textContent="Leonel",o.href=e,o.click()})}function Y(){P.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Jose Sousa;;;
FN:Jose Sousa
TEL;CELL:+351 964 371 584
EMAIL;HOME:jose.sousa@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const o=document.createElement("a");o.download="Jose.vcf",o.textContent="Jose",o.href=e,o.click()})}function G(){V.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Tiago Ferreira;;;
FN:Tiago Ferreira
TEL;CELL:
EMAIL;HOME:TiagoFerreira.Dias@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const o=document.createElement("a");o.download="Tiago.vcf",o.textContent="Tiago",o.href=e,o.click()})}function J(){H.addEventListener("click",()=>{console.log("click");var a=`BEGIN:VCARD
VERSION:3.0
N:Sofia Cristovão;;;
FN:Sofia Cristovão
TEL;CELL:+351 927 246 462
EMAIL;HOME:Sofia.cristovao@aquinos.pt
ORG;WORK:Aquinos Sofas
TITLE:Key-Account Manager
END:VCARD`,t=new Blob([a],{type:"text/vcard"}),e=URL.createObjectURL(t);const o=document.createElement("a");o.download="Sofia.vcf",o.textContent="Sofia",o.href=e,o.click()})}function K(){U(),j(),F(),Y(),J(),G()}const W=new f;W.postNewPing({DATE:new Date});const X=document.querySelector(".app-balls");function z(){E(X,90),g(),q(),I(),L(),K()}z();
