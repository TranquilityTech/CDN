function getParameterByName(e,t=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");let n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}AOS.init(),document.addEventListener("scroll",()=>{let e=window.scrollY;e>10?document.getElementById("app-header").classList.add("hidden"):e<10&&document.getElementById("app-header").classList.remove("hidden")}),fetch("/news/related",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","CSRF-Token":$STATE.csrfToken},credentials:"include",body:JSON.stringify({uid:getParameterByName("uid")})}).then(e=>e.json()).then(e=>{window.addEventListener("load",e=>{new Progressive({el:"body",lazyClass:"progressive-img",removePreview:!0,scale:!1}).fire()}),lozad(".lozad",{rootMargin:"300px 0px",threshold:.1,enableAutoReload:!0}).observe(),200===e.status&&(document.getElementById("news").innerHTML=e.template),AOS.refresh()});