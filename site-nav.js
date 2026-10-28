// Mobile menu toggle for the shared site navigation.
(()=>{const b=document.querySelector(".site-nav .menu-button"),l=document.querySelector(".site-nav .nav-links");if(!b||!l)return;
const set=open=>{b.setAttribute("aria-expanded",String(open));b.setAttribute("aria-label",open?"Close navigation":"Open navigation");l.classList.toggle("is-open",open);document.body.classList.toggle("menu-open",open)};
b.addEventListener("click",()=>set(b.getAttribute("aria-expanded")!=="true"));l.addEventListener("click",e=>{if(e.target.closest("a"))set(false)})})();
