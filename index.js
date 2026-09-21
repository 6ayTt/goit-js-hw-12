import{a as m,S as p,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="57683653-4b4123473ade54c19ff1735af",g="https://pixabay.com/api/";async function y(s){return(await m.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${t}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${i}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${u}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${f}
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();r&&(L(),v(),y(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(o)}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
