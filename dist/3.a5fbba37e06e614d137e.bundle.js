(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{345:function(e,t,o){"use strict";o.r(t),function(e){var a,r=o(1),s=o.n(r),c=o(346),n=(o(353),o(348)),i=o(351),d=o(362);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=()=>{const[e,t]=Object(r.useState)([]),[o,a]=Object(r.useState)(1);Object(r.useEffect)(()=>{(async()=>{try{const e=await fetch(`${c.b}/tv/popular${c.a}&language=en-US&page=${o}`);if(!e.ok)throw Error(e.statusText);const a=await e.json();t(e=>[...e,...a.results]),loadRating()}catch(e){console.log(e)}})()},[o]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,{movies:e}),s.a.createElement(i.a,{movies:e}),s.a.createElement(d.a,{addNextPage:e=>{a(e=>e+1),e.preventDefault()}}))};var u,v;l(f,"useState{[movies, setMovies]([])}\nuseState{[page, setPage](1)}\nuseEffect{}"),t.default=f,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var o=void 0!==t?t:exports;if(o)if("function"!=typeof o){for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){var r=void 0;try{r=o[a]}catch(e){continue}e.register(r,a,"/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/TV.jsx")}}else e.register(o,"module.exports","/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/TV.jsx")}}(),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(f,"default","/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/TV.jsx"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,o(57)(e))},353:function(e,t,o){"use strict";(function(e){var a,r=o(1),s=o(347);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const n=e=>{const[t,o]=Object(r.useState)([]);return Object(r.useEffect)(()=>{(async()=>{try{const t=await fetch(e);if(!t.ok)throw Error(t.statusText);const a=await t.json();o(a.results),Object(s.a)()}catch(e){console.log(e)}})()},[]),t};c(n,"useState{[movies, setMovies]([])}\nuseEffect{}");var i,d;!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var o=void 0!==t?t:exports;if(o)if("function"!=typeof o){for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){var r=void 0;try{r=o[a]}catch(e){continue}e.register(r,a,"/mnt/c/Users/cristi/work/dev/movie_database/src/assets/use_fetch.js")}}else e.register(o,"module.exports","/mnt/c/Users/cristi/work/dev/movie_database/src/assets/use_fetch.js")}}(),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(n,"default","/mnt/c/Users/cristi/work/dev/movie_database/src/assets/use_fetch.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,o(57)(e))},362:function(e,t,o){"use strict";(function(e){var a,r=o(1),s=o.n(r);o(346);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=({addNextPage:e})=>s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"load-container"},s.a.createElement("a",{href:"#"},s.a.createElement("button",{className:"load",onClick:e},s.a.createElement("i",{class:"fas fa-ellipsis-h"}))))));var n,i;t.a=c,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var o=void 0!==t?t:exports;if(o)if("function"!=typeof o){for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){var r=void 0;try{r=o[a]}catch(e){continue}e.register(r,a,"/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/LoadMoreButton.jsx")}}else e.register(o,"module.exports","/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/LoadMoreButton.jsx")}}(),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(c,"default","/mnt/c/Users/cristi/work/dev/movie_database/src/components/sections/LoadMoreButton.jsx"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(57)(e))}}]);