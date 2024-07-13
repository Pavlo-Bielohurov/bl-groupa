import{a as l}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=l.create({baseURL:"https://dummyjson.com"});async function c(){return await d.get("/products")}function p(n){return n.map(({title:r,images:i,description:s,rating:e,price:t,id:o,brand:u,stock:a})=>`<li data-product="${o}">
      <img src="${i[0]}" alt="${r}" width="300" />
      <h2>Brand:${u}</h2>
      <p>Price:${t}</p>
      <p>Rating:${e}</p>
      <p>Quantity:${a}</p>
      <p>Description:${s}</p>
 </li>`).join("")}c().then(console.log);const f=document.querySelector("#allProducts");c().then(({data:{products:n}})=>{const r=p(n);f.insertAdjacentHTML("afterbegin",r)});
//# sourceMappingURL=commonHelpers.js.map
