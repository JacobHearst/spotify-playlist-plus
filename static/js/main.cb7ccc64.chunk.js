(this["webpackJsonpspotify-playlist-plus"]=this["webpackJsonpspotify-playlist-plus"]||[]).push([[0],{52:function(t,e,r){},53:function(t,e,r){},81:function(t,e,r){},82:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(24),i=r.n(c),s=(r(52),r(9)),o=r(5),u=r(6),l=r(11),j=r(10),h=r(12),d=(r(53),r(54),r(19)),b=r(91),p=r(13),f=r.n(p),O=r(18),v=r(25),y=r.n(v),x=y.a.create({});x.interceptors.response.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)}));var k=x,m=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getPlaylistById",value:function(t){try{return k.get("".concat("https://api.spotify.com/v1/playlists","/").concat(t))}catch(e){console.error('Failed to get playlist with id: "'.concat(t,'". Error: ').concat(e))}}}]),t}(),g=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getPlaylist",value:function(){var t=Object(O.a)(f.a.mark((function t(e){var r,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getPlaylistById(e);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return");case 5:return n=r.data.tracks.items,t.abrupt("return",Object(s.a)(Object(s.a)({},r.data),{},{tracks:n}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),T=r(20),C=r(1);function w(){var t="/spotify-playlist-plus";return Object(C.jsxs)("div",{children:[Object(C.jsx)(T.b,{to:t,children:"Home "}),Object(C.jsx)(T.b,{to:t+"/AlbumPage",children:"Album Page "}),Object(C.jsx)(T.b,{to:t+"/artist/4V8LLVI7PbaPR0K2TGSxFF",children:"Artist Page"}),Object(C.jsx)(T.b,{to:t+"/playlist/37i9dQZF1DZ06evO2QRN3G",children:"Playlist Page "})]})}var P=r(87);function A(t){if(!(t<=0)){var e=864e5,r=36e5,n=[],a=function(t){return t>1?"s":""},c=Math.floor(t/e);c>0&&n.push("".concat(c," Day").concat(a(c)));var i=t%e,s=Math.floor(i/r);s>0&&n.push("".concat(s%24," Hour").concat(a(s))),i%=r;var o=Math.floor(i/6e4);o>0&&n.push("".concat(o%60," Minute").concat(a(o))),i%=6e4;var u=Math.floor(i/1e3);return 0==n.length&&u>0&&n.push("".concat(u," Second").concat(a(u))),n.join(", ")}}function _(t){if(!(t<=0)){var e=Math.floor(t/1e3),r=Math.floor(e/60),n=Math.floor(r/60),a=[];return n>0&&a.push(n),(r>0||n<1)&&a.push(r%60),e>0&&a.push(e%60),a.map((function(t,e){return 0==e?"".concat(t):t<10?"0".concat(t):"".concat(t)})).join(":")}}var S,I=r(43);!function(t){t.Play="\u25b6",t.Pause="\u23f8",t.Next="\u23e9",t.Previous="\u23ea"}(S||(S={}));var L="https://api.spotify.com/v1/me/player";var F=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state=Object(s.a)({},t),n.playerButtonClicked=n.playerButtonClicked.bind(Object(d.a)(n)),n}return Object(u.a)(r,[{key:"playerButtonClicked",value:function(){this.state.currentlyPlaying?k.put("".concat(L,"/pause")):k.put("".concat(L,"/play")),this.setState({currentlyPlaying:!this.state.currentlyPlaying})}},{key:"render",value:function(){return Object(C.jsx)(I.a,{variant:"outline-dark",onClick:this.playerButtonClicked,children:this.props.currentlyPlaying?S.Pause:S.Play})}}]),r}(a.a.Component),R=r(86),U=r(93),B=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state=Object(s.a)({},t),n}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)(U.a,{children:[Object(C.jsx)(U.a.Toggle,{variant:"Secondary",children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(U.a.Menu,{children:Object(C.jsx)(U.a.Item,{href:this.state.track.uri,children:"Open in Spotify"})})]})}}]),r}(a.a.Component),M=(r(81),function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state={track:t.track},n}return Object(u.a)(r,[{key:"render",value:function(){var t,e,r=this.state.track.artists.map((function(t){return t.name})).join(", ");return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)(F,{currentlyPlaying:!1})}),Object(C.jsx)("td",{children:this.state.track.track_number}),Object(C.jsx)("td",{children:this.state.track.name}),Object(C.jsx)("td",{children:r}),Object(C.jsx)("td",{children:null!==(t=null===(e=this.state.track.album)||void 0===e?void 0:e.name)&&void 0!==t?t:"No album"}),Object(C.jsx)("td",{children:_(this.state.track.duration_ms)}),Object(C.jsx)("td",{children:Object(C.jsx)(B,{track:this.state.track})})]})}}]),r}(a.a.Component)),E=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state={tracks:t.tracks},n}return Object(u.a)(r,[{key:"render",value:function(){return this.state.tracks?Object(C.jsxs)(P.a,{hover:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:"Artist(s)"}),Object(C.jsx)("th",{children:"Album"}),Object(C.jsx)("th",{children:"Duration"}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:this.state.tracks.map((function(t){return Object(C.jsx)(M,{track:t},t.id)}))})]}):Object(C.jsx)("p",{children:"Loading tracks"})}}]),r}(a.a.Component),V=r(88),z=r(89),N=r(90),D=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state=Object(s.a)({},t),n}return Object(u.a)(r,[{key:"render",value:function(){if(!this.state.playlist)return Object(C.jsx)("p",{children:"Loading"});var t=this.state.playlist,e=t.name,r=t.description,n=t.owner,a=t.tracks,c=0;return a.forEach((function(t){var e=t.track;return c+=e.duration_ms})),Object(C.jsxs)(V.a,{style:{marginBottom:15},children:[Object(C.jsx)(z.a,{xs:"auto",children:Object(C.jsx)(N.a,{src:this.state.playlist.images[0].url,width:250,height:250,style:{border:"1px solid black"}})}),Object(C.jsxs)(z.a,{children:[Object(C.jsx)("h2",{children:e}),Object(C.jsx)("p",{children:r}),Object(C.jsxs)("p",{children:["Owned by: ",n.display_name]}),Object(C.jsxs)("p",{children:[a.length," Songs. ",A(c)]})]})]})}}]),r}(a.a.Component),G=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsx)("h3",{children:"No songs in this playlist"})}}]),r}(a.a.Component),H=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state={playlistId:t.match.params.id},n.loadPlaylist=n.loadPlaylist.bind(Object(d.a)(n)),n.loadPlaylist(),n}return Object(u.a)(r,[{key:"loadPlaylist",value:function(){var t=this;console.log("Loading playlist"),g.getPlaylist(this.state.playlistId).then((function(e){e&&t.setState(Object(s.a)(Object(s.a)({},t.state),{},{playlist:e}))}))}},{key:"render",value:function(){if(!this.state.playlist)return Object(C.jsx)(G,{});var t=this.state.playlist.tracks.map((function(t){return t.track}));return Object(C.jsxs)(b.a,{fluid:!0,children:[Object(C.jsx)(w,{}),Object(C.jsx)(D,{playlist:this.state.playlist}),Object(C.jsx)(E,{tracks:t})]})}}]),r}(a.a.Component),J=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(w,{}),Object(C.jsx)("h1",{children:"Name"}),Object(C.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/6123EInXGSL._SL1081_.jpg",height:"300px",width:"300px"})]})}}]),r}(a.a.Component),Q=a.a.createContext(void 0);function Z(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Spotify Playlist Plus"}),Object(C.jsx)(Q.Consumer,{children:function(t){var e=void 0;return t&&t.tokenRetriever&&(e=t.tokenRetriever.redirect_url),Object(C.jsx)("a",{href:e,children:Object(C.jsx)("button",{disabled:!e,children:"Spotify Login"})})}})]})}var K=r(92),W="https://api.spotify.com/v1/artists",X=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getArtistById",value:function(t){try{return k.get("".concat(W,"/").concat(t))}catch(e){console.error('Failed to get artist with id: "'.concat(t,'". Error: ').concat(e))}}},{key:"getArtistTopTracks",value:function(t){try{return k.get("".concat(W,"/").concat(t,"/top-tracks?market=US"))}catch(e){console.error('Failed to get top tracks for artist with id: "'.concat(t,". Error: ").concat(e))}}}]),t}(),q=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"getArtist",value:function(){var t=Object(O.a)(f.a.mark((function t(e){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getArtistById(e);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getArtistTopTracks",value:function(){var t=Object(O.a)(f.a.mark((function t(e){var r,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,t.next=3,X.getArtistTopTracks(r);case 3:if(n=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",n.data.tracks);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),Y=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n;return Object(o.a)(this,r),(n=e.call(this,t)).state={artistId:t.match.params.id},n.loadArtist=n.loadArtist.bind(Object(d.a)(n)),n.loadTopTracks=n.loadTopTracks.bind(Object(d.a)(n)),n.loadArtist(),n}return Object(u.a)(r,[{key:"loadArtist",value:function(){var t=this;q.getArtist(this.state.artistId).then((function(e){e&&(t.setState(Object(s.a)(Object(s.a)({},t.state),{},{artist:e})),t.loadTopTracks(e))})).catch((function(t){return console.error(t)}))}},{key:"loadTopTracks",value:function(t){var e=this;q.getArtistTopTracks(t).then((function(t){t&&e.setState(Object(s.a)(Object(s.a)({},e.state),{},{topTracks:t}))}))}},{key:"render",value:function(){var t,e;if(!this.state.artist)return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)("p",{children:"Loading Artist"})]});var r=this.state.artist,n=r.genres,c=r.images,i=r.name,s=r.popularity,o={sm:c.find((function(t){return 160===t.height})),md:c.find((function(t){return 320===t.height})),lg:c.find((function(t){return 640===t.height}))},u=null!==(t=null!==(e=o.md)&&void 0!==e?e:o.lg)&&void 0!==t?t:o.sm,l=n.map((function(t){return Object(C.jsx)(K.a,{style:{marginRight:5},variant:"secondary",children:t},t)}));return Object(C.jsxs)(b.a,{fluid:!0,children:[Object(C.jsx)(w,{}),u?Object(C.jsx)(N.a,{src:u.url}):Object(C.jsx)("p",{children:"Loading Image"}),Object(C.jsxs)(V.a,{children:[Object(C.jsx)(z.a,{as:"h2",xs:"auto",children:i}),Object(C.jsx)(z.a,{children:Object(C.jsxs)(U.a,{children:[Object(C.jsx)(U.a.Toggle,{variant:"Secondary",children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(U.a.Menu,{children:Object(C.jsx)(U.a.Item,{href:this.state.artist.uri,children:"Open in Spotify"})})]})})]}),Object(C.jsx)(V.a,{children:Object(C.jsxs)(z.a,{as:"p",children:["Genres: ",l]})}),Object(C.jsx)(V.a,{children:Object(C.jsxs)(z.a,{as:"p",children:[" Popularity: ",s,"th Percentile "]})}),Object(C.jsx)(V.a,{children:Object(C.jsx)(z.a,{as:"h3",children:"Top Tracks"})}),Object(C.jsx)(V.a,{children:Object(C.jsx)(z.a,{children:Object(C.jsx)(E,{tracks:this.state.topTracks})})})]})}}]),r}(a.a.Component),$=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("p",{children:"Home page"}),Object(C.jsx)(w,{}),Object(C.jsx)("button",{onClick:this.context.logOut,children:"Log out"})]})}}]),r}(a.a.Component);$.contextType=Q;var tt="a7d9f2be243d45f69ad9e83e2ef03b61",et={redirectUri:"https://jacobhearst.github.io/spotify-playlist-plus"};function rt(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(O.a)(f.a.mark((function t(e){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post("https://accounts.spotify.com/api/token",null,{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var at=function(){function t(){Object(o.a)(this,t)}return Object(u.a)(t,null,[{key:"createCodeVerifierCookie",value:function(){var t=this.randomString();return document.cookie="code_verifier=".concat(t),t}},{key:"getVerifierCookie",value:function(){var t=document.cookie.split("; ").filter((function(t){return t.startsWith("code_verifier")}));return t.length>0?t[0].split("=")[1]:void 0}},{key:"constructAuthorizationURI",value:function(){var t=Object(O.a)(f.a.mark((function t(e){var r,n,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.scopes.join(" "),n="".concat("https://accounts.spotify.com/authorize","?client_id=").concat(tt,"&response_type=code&redirect_uri=").concat(et.redirectUri,"&scope=").concat(encodeURIComponent(r)),t.next=4,this.sha256(e);case 4:return a=t.sent,c=this.base64urlencode(a),n+="&code_challenge_method=S256&code_challenge=".concat(c),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"randomString",value:function(){var t="",e=new Uint8Array(43);window.crypto.getRandomValues(e);for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=256/r.length,a=0;a<43;a++)t+=r[Math.floor(Math.abs(e[a])/n)];return t}},{key:"sha256",value:function(t){var e=(new TextEncoder).encode(t);return window.crypto.subtle.digest("SHA-256",e)}},{key:"base64urlencode",value:function(t){var e=new Uint8Array(t);return btoa(String.fromCharCode.apply(null,e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}},{key:"refreshTimer",value:function(){var t=Object(O.a)(f.a.mark((function t(e,r){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:5e3,n=1e3*e.expires_in,a=n-5e3,setTimeout(Object(O.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,rt({grant_type:"refresh_token",refresh_token:e.refresh_token,client_id:tt});case 2:(n=t.sent)&&r(n);case 4:case"end":return t.stop()}}),t)}))),a);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"exchangeCodeForToken",value:function(t,e){return rt({client_id:tt,grant_type:"authorization_code",code:t,redirect_uri:et.redirectUri,code_verifier:e})}}]),t}();at.scopes=["user-modify-playback-state","user-read-playback-state"];var ct=function(t){Object(l.a)(r,t);var e=Object(j.a)(r);function r(t){var n,a;Object(o.a)(this,r),a=e.call(this,t);var c=null!==(n=at.getVerifierCookie())&&void 0!==n?n:at.createCodeVerifierCookie(),i=new URLSearchParams(window.location.search).get("code");return i?at.exchangeCodeForToken(i,c).then((function(t){var e;t&&(a.refreshTokenCallback(t),(e=a.state).authToken&&(x.defaults.headers.common.Authorization="Bearer "+e.authToken.access_token))})):a.getAuthURL(c),a.state={logOut:function(){a.getAuthURL(c),a.setState(Object(s.a)(Object(s.a)({},a.state),{},{authToken:void 0}))}},a}return Object(u.a)(r,[{key:"getAuthURL",value:function(t){var e=this;at.constructAuthorizationURI(t).then((function(r){var n={redirect_url:r,verifier:t};e.setState(Object(s.a)(Object(s.a)({},e.state),{},{tokenRetriever:n}))}))}},{key:"render",value:function(){var t="/spotify-playlist-plus",e=Object(C.jsx)(Z,{});return this.state.authToken&&(e=Object(C.jsx)($,{})),Object(C.jsx)("main",{children:Object(C.jsx)(Q.Provider,{value:this.state,children:Object(C.jsxs)(h.c,{children:[Object(C.jsx)(h.a,{exact:!0,path:t,children:e}),Object(C.jsx)(h.a,{exact:!0,path:t+"/AlbumPage",component:J}),Object(C.jsx)(h.a,{exact:!0,path:t+"/artist/:id",component:Y}),Object(C.jsx)(h.a,{exact:!0,path:t+"/playlist/:id",component:H})]})})})}},{key:"refreshTokenCallback",value:function(t){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{authToken:t})),at.refreshTimer(t,this.refreshTokenCallback)}}]),r}(a.a.Component),it=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,94)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(C.jsx)(T.a,{children:Object(C.jsx)(ct,{})}),document.getElementById("root")),it()}},[[82,1,2]]]);
//# sourceMappingURL=main.cb7ccc64.chunk.js.map