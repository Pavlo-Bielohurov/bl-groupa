import{a as f}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=f.create({baseURL:"https://dummyjson.com"});async function d(){return await a.get("/products")}async function u(o){return await a.get(`/products/${o}`)}function m(o){return o.map(({title:r,images:c,description:n,rating:e,price:t,id:i,brand:s,stock:p})=>`<li data-product="${i}">
      <img src="${c[0]}" alt="${r}" width="300" />
      <h2>Brand:${s}</h2>
      <p>Price:${t}</p>
      <p>Rating:${e}</p>
      <p>Quantity:${p}</p>
      <p>Description:${n}</p>
 </li>`).join("")}function g({title:o,images:r,description:c,rating:n,price:e,id:t,brand:i,stock:s}){return`<div data-product="${t}">
      <img src="${r[0]}" alt="${o}" width="300" />
      <h2>Brand:${i}</h2>
      <p>Price:${e}</p>
      <p>Rating:${n}</p>
      <p>Quantity:${s}</p>
      <p>Description:${c}</p>
 </div>`}d().then(console.log);const h=document.querySelector("#allProducts");d().then(({data:{products:o}})=>{const r=m(o);h.insertAdjacentHTML("afterbegin",r)});const l=document.querySelector("#singleProductForm"),y=document.querySelector("#singleProduct");l.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements.id.value;u(r).then(console.log),u(r).then(({data:c})=>{const n=g(c);y.innerHTML=n}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
