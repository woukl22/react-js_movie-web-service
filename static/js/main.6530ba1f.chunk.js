(this["webpackJsonpmovie-web-service"]=this["webpackJsonpmovie-web-service"]||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(15),i=s.n(r),c=s(6),o=s.n(c),m=s(16),l=s(17),d=s(18),j=s(21),u=s(20),v=s(19),b=s.n(v),h=(s(45),s(0));var p=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:r},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})},O=(s(47),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Coponent)),g=O;i.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6530ba1f.chunk.js.map