import{a as w,S,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const P="57683653-4b4123473ade54c19ff1735af",q="https://pixabay.com/api/";async function u(o){return(await w.get(q,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:L,downloads:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
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
              ${n}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${L}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${v}
            </p>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",r),M.refresh()}function B(){d.innerHTML=""}function y(){m.classList.add("is-visible")}function p(){m.classList.remove("is-visible")}function h(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}const $=document.querySelector(".form");document.querySelector(".gallery");const R=document.querySelector(".load-more");let a=1,l="";$.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r){l=r,a=1,B(),b(),y();try{const s=await u(l,a);if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits);const i=Math.ceil(s.totalHits/15);a<i?h():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(s){c.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(s)}finally{p()}}});R.addEventListener("click",async()=>{a+=1,b(),y();try{const o=await u(l,a);f(o.hits);const r=Math.ceil(o.totalHits/15);a<r?h():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(o){c.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(o)}finally{p()}});
//# sourceMappingURL=index.js.map
