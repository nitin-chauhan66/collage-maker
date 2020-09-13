(this["webpackJsonpcollage-maker"]=this["webpackJsonpcollage-maker"]||[]).push([[0],{26:function(e,a,t){e.exports=t(55)},31:function(e,a,t){},32:function(e,a,t){},37:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),o=t(11),i=(t(31),t(56)),s=t(58),m=t(59),u=t(60),d=(t(32),t(10)),g=t(25);function f(e){var a=e.drop,t=e.allowDrag,n=document.getElementById("collage");return r.a.createElement(m.a,{className:"mr-2 collage"},r.a.createElement(m.a.Body,null,r.a.createElement(i.a,{className:"justify-content-between"},r.a.createElement(m.a.Title,{className:"mt-2"},"Collage"),r.a.createElement("a",{onClick:function(e){return function(e){var a=n.canvas.toDataURL({format:"jpeg",quality:1});Object(g.saveAs)(a,"image.jpg")}()},download:"collage.jpeg"},r.a.createElement(u.a,{variant:"primary"},r.a.createElement("i",{class:"fa fa-download","aria-hidden":"true"}))),r.a.createElement(u.a,{variant:"primary",onClick:function(){n.canvas.clear()}},r.a.createElement("i",{class:"fa fa-refresh","aria-hidden":"true"}))),r.a.createElement(i.a,{style:{height:"500px"}},r.a.createElement("fabric-canvas",{className:"collage__canvas",id:"collage",onDrop:a,onDragOver:t}))))}t(37);var h=t(57);function p(e){var a=e.images,t=e.pending,n=(e.error,e.dragFunc),c=e.refresh,l=e.clickHandler;return r.a.createElement(m.a,{className:"gallery"},r.a.createElement(m.a.Body,null,r.a.createElement(i.a,{className:"justify-content-between"},r.a.createElement(m.a.Title,{className:"mt-2"},"Gallery"),r.a.createElement(u.a,{variant:"primary",onClick:function(){return c()}},r.a.createElement("i",{class:"fa fa-refresh","aria-hidden":"true"}))),r.a.createElement(i.a,{className:"justify-content-center gallery__container"},t?r.a.createElement(h.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):a.map((function(e){return r.a.createElement(s.a,{sm:"6",key:e.id},r.a.createElement("img",{src:"https://cors-anywhere.herokuapp.com/"+e.url,className:"gallery__image",id:e.id,onDragStart:function(e){return n(e)},draggable:!0,onClick:l,crossOrigin:"anonymous"}))})))))}var E=t(7),y=t(12),v=t.n(y),w="MAKE_REQUEST",b="GET_DATA",j="ERROR";function k(e,a){switch(a.type){case w:return Object(E.a)(Object(E.a)({},e),{},{loading:!0,images:[]});case b:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,images:a.payload});case j:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,images:[],error:!0});default:return e}}var O=function(){var e=Object(n.useState)(1),a=Object(o.a)(e,2),t=a[0],c=a[1];document.title="Collage Maker";var l=function(e){var a=Object(n.useReducer)(k,{images:[],loading:!0,error:!1}),t=Object(o.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){var a=v.a.CancelToken.source();return c({type:w}),v.a.get("https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/photos",{cancelToken:a.token,params:{albumId:e}}).then((function(e){c({type:b,payload:e.data})})).catch((function(e){v.a.isCancel(e)||c({type:j})})),function(){a.cancel()}}),[e]),r}(t),m=l.images,u=l.loading,g=l.error;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Collage Maker"),r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(f,{drop:function(e){e.preventDefault();var a=e.dataTransfer.getData("image"),t=document.getElementById(a),n=t.height/t.width,r=new d.a.Image(t,{width:300*n,height:300*n,top:100,left:100});console.log(r),e.target.add(r)},allowDrag:function(e){e.preventDefault()}})),r.a.createElement(s.a,null,r.a.createElement(p,{images:m,pending:u,error:g,dragFunc:function(e){e.dataTransfer.setData("image",e.target.id)},refresh:function(){var e=parseInt(10*Math.random());c(e)},clickHandler:function(e){var a=document.getElementById(e.target.id),t=a.height/a.width,n=new d.a.Image(a,{width:300*t,height:300*t,top:100,left:100});document.getElementById("collage").add(n),document.getElementById("collage").canvas.setActiveObject(n)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6d889ef7.chunk.js.map