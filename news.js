function getParameterByName(e,t=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");let n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}AOS.init(),document.addEventListener("scroll",()=>{let e=window.scrollY;e>10?document.getElementById("app-header").classList.add("hidden"):e<10&&document.getElementById("app-header").classList.remove("hidden")});let getLatest=()=>{let e=getParameterByName("uid")||window.location.pathname.split("/")[2];fetch("/news/latest",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","CSRF-Token":$STATE.csrfToken},credentials:"include",body:JSON.stringify({uid:e})}).then(e=>e.json()).then(e=>{lozad(".lozad",{rootMargin:"300px 0px",threshold:.1,enableAutoReload:!0}).observe(),200===e.status&&(document.getElementById("news").innerHTML=e.template),new Progressive({el:"body",lazyClass:"progressive-img",removePreview:!0,scale:!1}).fire(),AOS.refresh()})},getRelated=()=>{fetch("/news/related",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","CSRF-Token":$STATE.csrfToken},credentials:"include",body:JSON.stringify({uid:getParameterByName("uid")})}).then(e=>e.json()).then(e=>{lozad(".lozad",{rootMargin:"300px 0px",threshold:.1,enableAutoReload:!0}).observe(),200===e.status&&(document.getElementById("news-related-result").innerHTML=e.template),AOS.refresh()})},getSearch=()=>{fetch("/news/search",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json","CSRF-Token":$STATE.csrfToken},credentials:"include",body:JSON.stringify({query:getParameterByName("q")})}).then(e=>e.json()).then(e=>{lozad(".lozad",{rootMargin:"300px 0px",threshold:.1,enableAutoReload:!0}).observe(),200===e.status&&(document.getElementById("news").innerHTML=e.template),new Progressive({el:"body",lazyClass:"progressive-img",removePreview:!0,scale:!1}).fire(),AOS.refresh()})};function copyToClipboard(e){let t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",e),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function shareNews(){let e=event.currentTarget.dataset.url;if(!e)return;copyToClipboard(e),Swal.mixin({toast:!0,type:"success",position:"bottom-start",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,background:"rgba(47, 47, 47)",didOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:"success",title:"Link copied"})}getParameterByName("uid")?(getLatest(),getRelated()):window.location.pathname.split("/")[2]?(getLatest(),getRelated()):getParameterByName("q")?getSearch():getLatest();