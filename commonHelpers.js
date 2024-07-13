import{a as p}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=p.create({baseURL:"https://dummyjson.com"});async function u(){return await s.get("/products")}async function m(r){return await s.post("/products/add",r)}function f(r){return r.map(({title:o,images:n,description:i,rating:e,price:t,id:c,brand:a,stock:l})=>`<li data-product="${c}">
      <img src="${n[0]}" alt="${o}" width="300" />
      <h2>Brand:${a}</h2>
      <p>Price:${t}</p>
      <p>Rating:${e}</p>
      <p>Quantity:${l}</p>
      <p>Description:${i}</p>
 </li>`).join("")}function y({description:r,price:o,title:n}){return`
  <h2>Brand:${n}</h2>
      <p>Price:${o}</p>
      <p>Description:${r}</p>
      `}u().then(console.log);document.querySelector("#allProducts");u().then(({data:{products:r}})=>{f(r)});document.querySelector("#singleProductForm");document.querySelector("#singleProduct");const d=document.querySelector("#newProductForm"),g=document.querySelector("#newProductSection");d.addEventListener("submit",P);function P(r){r.preventDefault();const o=r.target.elements.title.value,n=r.target.elements.price.value,i=r.target.elements.description.value,e={title:o,price:n,description:i};console.log(e),m(e).then(({data:t})=>{const c=y(t);g.innerHTML=c,d.reset()})}
//# sourceMappingURL=commonHelpers.js.map
