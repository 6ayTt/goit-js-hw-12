import{a as w,S,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const P="57683653-4b4123473ade54c19ff1735af",q="https://pixabay.com/api/";async function u(r,s){return(await w.get(q,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function m(r){const s=r.map(({webformatURL:t,largeImageURL:i,tags:e,likes:o,views:n,comments:L,downloads:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${o}
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
      `).join("");d.insertAdjacentHTML("beforeend",s),M.refresh()}function B(){d.innerHTML=""}function p(){f.classList.add("is-visible")}function y(){f.classList.remove("is-visible")}function h(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}const $=document.querySelector(".form"),R=document.querySelector(".load-more");let l="",a=1;$.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(s){l=s,a=1,B(),b(),p();try{const t=await u(l,a);if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits);const i=Math.ceil(t.totalHits/15);a<i?h():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){c.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(t)}finally{y()}}});R.addEventListener("click",async()=>{a+=1,b(),p();try{const r=await u(l,a);m(r.hits);const s=Math.ceil(r.totalHits/15);a<s?h():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const t=document.querySelector(".gallery-item");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(r){c.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error(r)}finally{y()}});
//# sourceMappingURL=index.js.map
