"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[248],{2705:function(e,n,t){t.d(n,{M1:function(){return p},TP:function(){return l},XT:function(){return f},qF:function(){return h},tx:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),s="626606dbe7f5835682a8b704b6445e35",o="https://api.themoviedb.org/3",f=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/trending/movie/day?api_key=").concat(s,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US&include_adult=false"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US&include_adult=false"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9074:function(e,n,t){var r=t(6871),a=t(501),c=t(184),u=function(e){var n=e.items,t=(0,r.TH)(),u=n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{className:"home-film-card",children:(0,c.jsx)(a.rU,{state:{from:t},to:"/movies/".concat(n),className:"home-film-link",children:r})},n)}));return(0,c.jsx)("ul",{className:"home-films-list",children:u})};n.Z=u,u.defaultProps={items:[]}},6248:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(1413),a=t(5861),c=t(885),u=t(7757),i=t.n(u),s=t(4942),o=t(2791),f=t(184),l=function(e){var n=e.onSubmit,t=(0,o.useState)({search:""}),a=(0,c.Z)(t,2),u=a[0],i=a[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),i({search:""})},children:[(0,f.jsx)("input",{name:"search",value:u.search,onChange:function(e){var n=e.target,t=n.name,a=n.value;i((0,r.Z)((0,r.Z)({},u),{},(0,s.Z)({},t,a)))},placeholder:"Search for movies",required:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},p=t(501),v=t(2705),h=t(9074),d=function(){var e=(0,o.useState)({items:[],loading:!1,error:null}),n=(0,c.Z)(e,2),t=n[0],u=n[1],s=(0,p.lr)(),d=(0,c.Z)(s,2),m=d[0],g=d[1],x=m.get("search");(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,(0,v.qF)(x);case 4:n=e.sent,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:n.results})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{error:e.t0})}));case 11:return e.prev=11,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();x&&e()}),[x]);var Z=t.items;return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{children:"Search for movies"}),(0,f.jsx)(l,{onSubmit:function(e){var n=e.search;g({search:n})}}),(0,f.jsx)(h.Z,{items:Z})]})}}}]);
//# sourceMappingURL=248.47ee5b56.chunk.js.map