"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[769],{2705:function(e,n,t){t.d(n,{M1:function(){return p},TP:function(){return f},XT:function(){return l},qF:function(){return d},tx:function(){return m}});var r=t(5861),a=t(7757),c=t.n(a),s=t(4569),i=t.n(s),u="626606dbe7f5835682a8b704b6445e35",o="https://api.themoviedb.org/3",l=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/trending/movie/day?api_key=").concat(u,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US&include_adult=false"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US&include_adult=false"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,i().get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5769:function(e,n,t){t.r(n);var r=t(1413),a=t(5861),c=t(885),s=t(7757),i=t.n(s),u=t(2791),o=t(6871),l=t(2705),f=t(501),p=t(184);n.default=function(){var e,n=(0,u.useState)({item:{},loading:!1,error:null}),t=(0,c.Z)(n,2),s=t[0],m=t[1],d=(0,o.UO)().id;(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0,error:null})})),e.next=4,(0,l.TP)(d);case 4:n=e.sent,m((function(e){return(0,r.Z)((0,r.Z)({},e),{},{item:n})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m((function(n){return(0,r.Z)((0,r.Z)({},n),{},{error:e.t0})}));case 11:return e.prev=11,m((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m,d]);var v=(0,o.s0)(),h=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",g=s.item,x=g.title,w=g.poster_path,_=g.vote_average,b=g.overview,j=g.genres,k=Math.round(10*_);return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("button",{className:"go-back-btn",onClick:function(){v(h)},children:"\ud83d\udd19"}),(0,p.jsxs)("div",{className:"main-info",children:[(0,p.jsx)("img",{src:w?"https://image.tmdb.org/t/p/w342".concat(w):"https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png",alt:"Movie poster",className:"film-poster"}),(0,p.jsxs)("div",{className:"text-info",children:[(0,p.jsx)("h2",{className:"film-title",children:x}),(0,p.jsxs)("p",{className:"film-score",children:["User score: ",(0,p.jsxs)("span",{className:"score-pers",children:[k,"%"]})]}),(0,p.jsx)("h3",{className:"film-overview",children:"Overview"}),(0,p.jsx)("p",{className:"film-about",children:b}),(0,p.jsx)("h4",{className:"film-genres",children:"Genres"}),(0,p.jsx)("ul",{className:"film-genres-list",children:j?j.map((function(e){var n=e.id,t=e.name;return(0,p.jsx)("li",{className:"film-one-genre",children:t},n)})):(0,p.jsx)("p",{className:"film-one-genre",children:"no genres"})})]})]}),(0,p.jsxs)("div",{className:"secondary-info",children:[(0,p.jsx)(f.rU,{state:{from:h},to:"/movies/".concat(d,"/cast"),className:"film-btn",children:"Cast"}),(0,p.jsx)(f.rU,{state:{from:h},to:"/movies/".concat(d,"/reviews"),className:"film-btn",children:"Reviews"}),(0,p.jsx)(o.j3,{})]})]})}}}]);
//# sourceMappingURL=769.4ad2e52b.chunk.js.map