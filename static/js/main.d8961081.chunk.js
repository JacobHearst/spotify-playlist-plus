(this["webpackJsonpspotify-playlist-plus"]=this["webpackJsonpspotify-playlist-plus"]||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(34),i=n.n(r),s=(n(42),n(9)),o=n(3),l=n(4),u=n(8),j=n(7),h=n(5),b=(n(43),n(44),n(18)),d=n(75),p=n(22),O=n.n(p),f=n(35),y=n(36),x=n.n(y).a.create({});x.interceptors.response.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)}));var v=x,m=function(){function t(){Object(o.a)(this,t)}return Object(l.a)(t,null,[{key:"getPlaylistById",value:function(t){try{return v.get("".concat("https://api.spotify.com/v1/playlists","/").concat(t))}catch(e){console.error('Failed to get playlist with id: "'.concat(t,'". Error: ').concat(e))}}}]),t}();function g(){return(g=Object(f.a)(O.a.mark((function t(e){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getPlaylistById(e);case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return a=n.data.tracks.items,t.abrupt("return",Object(s.a)(Object(s.a)({},n.data),{},{tracks:a}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=n(17),P=n(1);function C(){var t="/spotify-playlist-plus";return Object(P.jsxs)("div",{children:[Object(P.jsx)(k.b,{to:t,children:"Home "}),Object(P.jsx)(k.b,{to:t+"/AlbumPage",children:"Album Page "}),Object(P.jsx)(k.b,{to:t+"/playlist/37i9dQZF1DZ06evO2QRN3G",children:"Playlist Page "})]})}var w=n(71);function _(t){var e=Math.floor(t/1e3),n=Math.floor(e/60),a=Math.floor(n/60),c=Math.floor(a/24),r=[];return c>0&&r.push("".concat(c," Days")),a>0&&r.push("".concat(a%24," Hours")),n>0&&r.push("".concat(n%60," Minutes")),0==r.length&&r.push("".concat(e," Seconds")),r.join(", ")}function L(t){var e=Math.floor(t/1e3),n=Math.floor(e/60),a=Math.floor(n/60),c=[];return a>0&&c.push(a),n>0&&c.push(n%60),e>0&&c.push(e%60),c.map((function(t,e){return t%10==0?"".concat(t,"0"):0==e?"".concat(t):t<10?"0".concat(t):"".concat(t)})).join(":")}var S,B=n(76);!function(t){t.Play="#9654",t.Pause="#9208",t.Next="#5861",t.Previous="#5862"}(S||(S={}));var I="https://api.spotify.com/v1/me/player";var M=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state=Object(s.a)({},t),a}return Object(l.a)(n,[{key:"playerButtonClicked",value:function(){this.state.currentlyPlaying?v.put("".concat(I,"/pause")):v.put("".concat(I,"/play")),this.setState({currentlyPlaying:!this.state.currentlyPlaying})}},{key:"render",value:function(){return Object(P.jsxs)(B.a,{variant:"outline-dark",onClick:this.playerButtonClicked,children:["&",this.props.currentlyPlaying?S.Pause:S.Play]})}}]),n}(c.a.Component),W=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state=Object(s.a)({},t),a}return Object(l.a)(n,[{key:"render",value:function(){var t,e,n=this.state.track.artists.map((function(t){return t.name})).join(", ");return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:Object(P.jsx)(M,{currentlyPlaying:!1,children:"&#21E8"})}),Object(P.jsx)("td",{children:this.state.track.name}),Object(P.jsx)("td",{children:n}),Object(P.jsx)("td",{children:null!==(t=null===(e=this.state.track.album)||void 0===e?void 0:e.name)&&void 0!==t?t:"No album"}),Object(P.jsx)("td",{children:L(this.state.track.duration_ms)})]})}}]),n}(c.a.Component),F=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state=Object(s.a)({},t),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(P.jsxs)(w.a,{hover:!0,children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{}),Object(P.jsx)("th",{children:"Title"}),Object(P.jsx)("th",{children:"Artist(s)"}),Object(P.jsx)("th",{children:"Album"}),Object(P.jsx)("th",{children:"Duration"})]})}),Object(P.jsx)("tbody",{children:this.state.tracks?this.state.tracks.map((function(t){return Object(P.jsx)(W,{track:t},t.id)})):Object(P.jsx)("tr",{children:"Loading tracks"})})]})}}]),n}(c.a.Component),T=n(72),A=n(73),N=n(74),H=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state=Object(s.a)({},t),a}return Object(l.a)(n,[{key:"render",value:function(){if(!this.state.playlist)return Object(P.jsx)("p",{children:"Loading"});var t=this.state.playlist,e=t.name,n=t.description,a=t.owner,c=t.tracks,r=c.map((function(t){return t.track.duration_ms})).reduce((function(t,e){return t+e}));return Object(P.jsxs)(T.a,{style:{marginBottom:15},children:[Object(P.jsx)(A.a,{xs:"auto",children:Object(P.jsx)(N.a,{src:this.state.playlist.images[0].url,width:250,height:250,style:{border:"1px solid black"}})}),Object(P.jsxs)(A.a,{children:[Object(P.jsx)("h2",{children:e}),Object(P.jsx)("p",{children:n}),Object(P.jsxs)("p",{children:["Owned by: ",a.display_name]}),Object(P.jsxs)("p",{children:[c.length," Songs. ",_(r)]})]})]})}}]),n}(c.a.Component),z=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(P.jsx)("h3",{children:"No songs in this playlist"})}}]),n}(c.a.Component),D=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={playlistId:t.match.params.id},a.loadPlaylist=a.loadPlaylist.bind(Object(b.a)(a)),a.loadPlaylist(),a}return Object(l.a)(n,[{key:"loadPlaylist",value:function(){var t=this;console.log("Loading playlist"),function(t){return g.apply(this,arguments)}(this.state.playlistId).then((function(e){e&&t.setState(Object(s.a)(Object(s.a)({},t.state),{},{playlist:e}))}))}},{key:"render",value:function(){if(!this.state.playlist)return Object(P.jsx)(z,{});var t=this.state.playlist.tracks.map((function(t){return t.track}));return Object(P.jsxs)(d.a,{fluid:!0,children:[Object(P.jsx)(C,{}),Object(P.jsx)(H,{playlist:this.state.playlist}),Object(P.jsx)(F,{tracks:t})]})}}]),n}(c.a.Component),E=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)(C,{}),Object(P.jsx)("h1",{children:"Name"}),Object(P.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/6123EInXGSL._SL1081_.jpg",height:"300px",width:"300px"})]})}}]),n}(c.a.Component),U={redirectUri:"https://jacobhearst.github.io/spotify-playlist-plus"};var R=function(){function t(e,n,a){Object(o.a)(this,t),this.currentToken=void 0,this.token_type=void 0,this.expires_in=void 0,this.currentToken=e,this.token_type=n,this.expires_in=a,this.startWatching()}return Object(l.a)(t,[{key:"startWatching",value:function(){console.log("Watching token")}}]),t}(),G=c.a.createContext(void 0),J=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)("p",{children:"Home page"}),Object(P.jsx)(C,{}),Object(P.jsx)("button",{onClick:this.context.logOut,children:"Log out"})]})}}]),n}(c.a.Component);J.contextType=G;var Q=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;Object(o.a)(this,n);var c,r={logOut:function(){a.setState(Object(s.a)(Object(s.a)({},a.state),{},{tokenWatcher:void 0}))}},i=(a=e.call(this,t)).getURLHashValues(window.location.hash);return i&&i.length>0&&(r.tokenWatcher=new R(i[0],i[1],Number(i[2])),(c=r).tokenWatcher?x.defaults.headers.common.Authorization="Bearer "+c.tokenWatcher.currentToken:console.warn("Can't initialize axios without a token watcher")),a.state=r,a}return Object(l.a)(n,[{key:"getURLHashValues",value:function(t){var e=t.slice(1,t.length).split("&").map((function(t){return t.split("=")[1]}));if(e.length>0&&e.every((function(t){return!!t})))return e}},{key:"render",value:function(){var t="/spotify-playlist-plus",e=Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Spotify Playlist Plus"}),Object(P.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=a7d9f2be243d45f69ad9e83e2ef03b61&response_type=token&redirect_uri="+U.redirectUri,children:Object(P.jsx)("button",{children:"Spotify Login"})})]});return this.state.tokenWatcher&&(e=Object(P.jsx)(J,{})),Object(P.jsx)("main",{children:Object(P.jsx)(G.Provider,{value:this.state,children:Object(P.jsxs)(h.c,{children:[Object(P.jsx)(h.a,{exact:!0,path:t,children:e}),Object(P.jsx)(h.a,{exact:!0,path:t+"/AlbumPage",component:E}),Object(P.jsx)(h.a,{exact:!0,path:t+"/playlist/:id",component:D})]})})})}}]),n}(c.a.Component),V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(P.jsx)(k.a,{children:Object(P.jsx)(Q,{})}),document.getElementById("root")),V()}},[[70,1,2]]]);
//# sourceMappingURL=main.d8961081.chunk.js.map