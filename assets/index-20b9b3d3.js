(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function h(n,t){const o=["#50543D","#D2B07E","#622C25","#E1CDB8"],l=["100px","80px","70px","60px","50px","30px","20px"].reverse();let e=Math.floor(t/l.length),i=0,s=0;for(let a=0;a<t;a++){const r=document.createElement("div");r.classList.add("ball"),r.id=`ball${a}`,r.style.backgroundColor=o[Math.floor(Math.random()*o.length)];let u=l[i];r.style.width=u,r.style.height=u,n.appendChild(r);const p=Math.floor(Math.random()*(n.clientWidth-10)),m=Math.floor(Math.random()*(n.clientHeight-10));r.style.left=`${p}px`,r.style.top=`${m}px`,s==e?(s=0,i++):s++}const c=document.querySelectorAll(".ball");for(let a=0;a<c.length;a++){const r=c[a].offsetWidth;r==20&&(c[a].style.filter="blur(8px)"),r==30&&(c[a].style.filter="blur(6px)"),r==50&&(c[a].style.filter="blur(3.5px)"),r==60&&(c[a].style.filter="blur(2px)"),r==70&&(c[a].style.filter="blur(1.5px)")}}function y(){typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(n=>{n==="granted"&&window.addEventListener("deviceorientation",()=>{console.log("granted")})}).catch(console.error):console.log("not iOS")}function g(){let n=document.querySelectorAll(".ball");window.addEventListener("deviceorientation",t);function t(o){Math.round(o.alpha);var l=Math.round(o.beta),e=Math.round(o.gamma);n.forEach(i=>{x(i,l,e)})}}function x(n,t,o,l){let e=n.clientHeight;if(e=="100"){n.style.transform=`translateY(${t}px) translateX(${o}px) `;return}if(e=="80"){n.style.transform=`translateY(${t*1.5}px) translateX(${o*1.5}px)`;return}if(e=="70"){n.style.transform=`translateY(${t*2}px) translateX(${o*2}px)`;return}if(e=="60"){n.style.transform=`translateY(${t*2}px) translateX(${o*2}px)`;return}if(e=="50"){n.style.transform=`translateY(${t*2.5}px) translateX(${o*2.5}px)`;return}if(e=="30"){n.style.transform=`translateY(${t*3}px) translateX(${o*3}px)`;return}if(e=="20"){n.style.transform=`translateY(${t*3.5}px) translateX(${o*3.5}px)`;return}}const v=document.getElementById("site"),b=document.getElementById("in");document.getElementById("vacrd");function w(){v.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com")})}function E(){b.addEventListener("click",()=>{window.open("https://www.linkedin.com/company/aquinosgroup/")})}function $(){w(),E()}function d(n,t){const o=document.querySelector(".email-modal-cont");let l=`
        <div class="alert-box">
            <h1>${n}</h1>
            <p>${t}</p>
        </div>
    `;const e=document.createElement("div");e.classList.add("alert-box-cont"),e.innerHTML=l,o.appendChild(e),setTimeout(()=>{e.remove()},"3000")}const L=document.querySelector(".sub-btn"),q=document.querySelector(".dis-btn"),f=document.querySelector(".email-modal-cont"),M=document.querySelector(".email-policy");function O(){L.addEventListener("click",()=>{const t=document.querySelector("#email").value;let l=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(t);if(t.length<=0){d("&#9785;","You need to fill in your email");return}if(!l){d("&#9785;","This email is not valid");return}if(l){d("&#9786;","Thanks! Let's go!"),setTimeout(()=>{f.classList.add("hide")},"3000");return}})}function S(){q.addEventListener("click",()=>{f.classList.add("hide")})}function P(){M.addEventListener("click",()=>{window.open("https://www.aquinosgroup.com/termos-de-uso-e-politica-de-privaci?lang=en")})}function Y(){O(),S(),P()}const B=document.querySelector(".app-balls");function D(){h(B,90),g(),$(),Y(),y()}D();
