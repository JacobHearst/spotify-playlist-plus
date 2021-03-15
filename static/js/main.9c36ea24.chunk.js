(this["webpackJsonpspotify-playlist-plus"]=this["webpackJsonpspotify-playlist-plus"]||[]).push([[0],{52:function(t,e,r){},54:function(t,e,r){},81:function(t,e,r){},82:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(24),i=r.n(c),s=(r(52),r(5)),o=r.n(s),u=r(13),l=r(9),j=r(6),h=r(7),d=r(12),p=r(11),b=r(14),f=(r(54),r(55),r(19)),O=r(91),y=r(25),v=r.n(y),x=v.a.create({});x.interceptors.response.use((function(t){return t}),(function(t){return console.log(t),Promise.reject(t)}));var k=x,m=function(){function t(){Object(j.a)(this,t)}return Object(h.a)(t,null,[{key:"getPlaylistById",value:function(t){try{return k.get("".concat("https://api.spotify.com/v1/playlists","/").concat(t))}catch(e){console.error('Failed to get playlist with id: "'.concat(t,'". Error: ').concat(e))}}}]),t}(),g=function(){function t(){Object(j.a)(this,t)}return Object(h.a)(t,null,[{key:"getPlaylist",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getPlaylistById(e);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return");case 5:return n=r.data.tracks.items,t.abrupt("return",Object(l.a)(Object(l.a)({},r.data),{},{tracks:n}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),w=r(20),C=r(1);function T(){var t="/spotify-playlist-plus";return Object(C.jsxs)("div",{children:[Object(C.jsx)(w.b,{to:t,children:"Home "}),Object(C.jsx)(w.b,{to:t+"/AlbumPage",children:"Album Page "}),Object(C.jsx)(w.b,{to:t+"/artist/4V8LLVI7PbaPR0K2TGSxFF",children:"Artist Page"}),Object(C.jsx)(w.b,{to:t+"/playlist/37i9dQZF1DZ06evO2QRN3G",children:"Playlist Page "})]})}var P=r(87);function S(t){if(!(t<=0)){var e=864e5,r=36e5,n=[],a=function(t){return t>1?"s":""},c=Math.floor(t/e);c>0&&n.push("".concat(c," Day").concat(a(c)));var i=t%e,s=Math.floor(i/r);s>0&&n.push("".concat(s%24," Hour").concat(a(s))),i%=r;var o=Math.floor(i/6e4);o>0&&n.push("".concat(o%60," Minute").concat(a(o))),i%=6e4;var u=Math.floor(i/1e3);return 0==n.length&&u>0&&n.push("".concat(u," Second").concat(a(u))),n.join(", ")}}function _(t){if(!(t<=0)){var e=Math.floor(t/1e3),r=Math.floor(e/60),n=Math.floor(r/60),a=[];return n>0&&a.push(n),(r>0||n<1)&&a.push(r%60),e>0&&a.push(e%60),a.map((function(t,e){return 0==e?"".concat(t):t<10?"0".concat(t):"".concat(t)})).join(":")}}var A,I=r(43);!function(t){t.Play="\u25b6",t.Pause="\u23f8",t.Next="\u23e9",t.Previous="\u23ea"}(A||(A={}));var L="https://api.spotify.com/v1/me/player";function R(t,e){var r={uris:e};k.put("".concat(L,"/play?device_id=").concat(t),r)}var F=a.a.createContext(void 0),U=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state=Object(l.a)({},t),n.playerButtonClicked=n.playerButtonClicked.bind(Object(f.a)(n)),n}return Object(h.a)(r,[{key:"playerButtonClicked",value:function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.currentlyPlaying?k.put("".concat(L,"/pause")):R(e._options.id,this.state.uris),this.props.updateCurrentlyPlayingCallback(this.props.index);case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(C.jsx)(F.Consumer,{children:function(e){return Object(C.jsx)(I.a,{variant:"outline-dark",onClick:function(){return t.playerButtonClicked(null===e||void 0===e?void 0:e.player)},children:t.props.currentlyPlaying?A.Pause:A.Play})}})}}]),r}(a.a.Component),B=r(86),M=r(93),E=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state=Object(l.a)({},t),n}return Object(h.a)(r,[{key:"render",value:function(){return Object(C.jsxs)(M.a,{children:[Object(C.jsx)(M.a.Toggle,{variant:"Secondary",children:Object(C.jsx)(B.a,{})}),Object(C.jsx)(M.a.Menu,{children:Object(C.jsx)(M.a.Item,{href:this.state.track.uri,children:"Open in Spotify"})})]})}}]),r}(a.a.Component),V=(r(81),function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state={track:t.track},n}return Object(h.a)(r,[{key:"render",value:function(){var t,e,r=this.state.track.artists.map((function(t){return t.name})).join(", ");return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)(U,{currentlyPlaying:this.props.currentlyPlaying,uris:[this.state.track.uri],updateCurrentlyPlayingCallback:this.props.updateCurrentlyPlayingCallback,index:this.props.index})}),Object(C.jsx)("td",{children:this.state.track.track_number}),Object(C.jsx)("td",{children:this.state.track.name}),Object(C.jsx)("td",{children:r}),Object(C.jsx)("td",{children:null!==(t=null===(e=this.state.track.album)||void 0===e?void 0:e.name)&&void 0!==t?t:"No album"}),Object(C.jsx)("td",{children:_(this.state.track.duration_ms)}),Object(C.jsx)("td",{children:Object(C.jsx)(E,{track:this.state.track})})]})}}]),r}(a.a.Component)),z=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).updateCurrentTrack=function(t){var e=t==n.state.currentPlayingTrack?-1:t;n.setState(Object(l.a)(Object(l.a)({},n.state),{},{currentPlayingTrack:e}))},n.state={tracks:t.tracks,currentPlayingTrack:-1},n.updateCurrentTrack.bind(Object(f.a)(n)),n}return Object(h.a)(r,[{key:"render",value:function(){var t=this;return this.state.tracks?Object(C.jsxs)(P.a,{hover:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:"Artist(s)"}),Object(C.jsx)("th",{children:"Album"}),Object(C.jsx)("th",{children:"Duration"}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:this.state.tracks.map((function(e,r){return Object(C.jsx)(V,{track:e,index:r,updateCurrentlyPlayingCallback:t.updateCurrentTrack,currentlyPlaying:t.state.currentPlayingTrack==r},e.id)}))})]}):Object(C.jsx)("p",{children:"Loading tracks"})}}]),r}(a.a.Component),D=r(88),N=r(89),G=r(90),H=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state=Object(l.a)({},t),n}return Object(h.a)(r,[{key:"render",value:function(){if(!this.state.playlist)return Object(C.jsx)("p",{children:"Loading"});var t=this.state.playlist,e=t.name,r=t.description,n=t.owner,a=t.tracks,c=0;return a.forEach((function(t){var e=t.track;return c+=e.duration_ms})),Object(C.jsxs)(D.a,{style:{marginBottom:15},children:[Object(C.jsx)(N.a,{xs:"auto",children:Object(C.jsx)(G.a,{src:this.state.playlist.images[0].url,width:250,height:250,style:{border:"1px solid black"}})}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)("h2",{children:e}),Object(C.jsx)("p",{children:r}),Object(C.jsxs)("p",{children:["Owned by: ",n.display_name]}),Object(C.jsxs)("p",{children:[a.length," Songs. ",S(c)]})]})]})}}]),r}(a.a.Component),J=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){return Object(j.a)(this,r),e.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(C.jsx)("h3",{children:"No songs in this playlist"})}}]),r}(a.a.Component),K=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state={playlistId:t.match.params.id},n.loadPlaylist=n.loadPlaylist.bind(Object(f.a)(n)),n.loadPlaylist(),n}return Object(h.a)(r,[{key:"loadPlaylist",value:function(){var t=this;console.log("Loading playlist"),g.getPlaylist(this.state.playlistId).then((function(e){e&&t.setState(Object(l.a)(Object(l.a)({},t.state),{},{playlist:e}))}))}},{key:"render",value:function(){if(!this.state.playlist)return Object(C.jsx)(J,{});var t=this.state.playlist.tracks.map((function(t){return t.track}));return Object(C.jsxs)(O.a,{fluid:!0,children:[Object(C.jsx)(T,{}),Object(C.jsx)(H,{playlist:this.state.playlist}),Object(C.jsx)(z,{tracks:t})]})}}]),r}(a.a.Component),Q=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){return Object(j.a)(this,r),e.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(T,{}),Object(C.jsx)("h1",{children:"Name"}),Object(C.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/6123EInXGSL._SL1081_.jpg",height:"300px",width:"300px"})]})}}]),r}(a.a.Component);function W(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Spotify Playlist Plus"}),Object(C.jsx)(F.Consumer,{children:function(t){var e=void 0;return t&&t.tokenRetriever&&(e=t.tokenRetriever.redirect_url),Object(C.jsx)("a",{href:e,children:Object(C.jsx)("button",{disabled:!e,children:"Spotify Login"})})}})]})}var Z=r(92),X="https://api.spotify.com/v1/artists",q=function(){function t(){Object(j.a)(this,t)}return Object(h.a)(t,null,[{key:"getArtistById",value:function(t){try{return k.get("".concat(X,"/").concat(t))}catch(e){console.error('Failed to get artist with id: "'.concat(t,'". Error: ').concat(e))}}},{key:"getArtistTopTracks",value:function(t){try{return k.get("".concat(X,"/").concat(t,"/top-tracks?market=US"))}catch(e){console.error('Failed to get top tracks for artist with id: "'.concat(t,". Error: ").concat(e))}}}]),t}(),Y=function(){function t(){Object(j.a)(this,t)}return Object(h.a)(t,null,[{key:"getArtist",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.getArtistById(e);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getArtistTopTracks",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,t.next=3,q.getArtistTopTracks(r);case 3:if(n=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",n.data.tracks);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),$=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n;return Object(j.a)(this,r),(n=e.call(this,t)).state={artistId:t.match.params.id},n.loadArtist=n.loadArtist.bind(Object(f.a)(n)),n.loadTopTracks=n.loadTopTracks.bind(Object(f.a)(n)),n.loadArtist(),n}return Object(h.a)(r,[{key:"loadArtist",value:function(){var t=this;Y.getArtist(this.state.artistId).then((function(e){e&&(t.setState(Object(l.a)(Object(l.a)({},t.state),{},{artist:e})),t.loadTopTracks(e))})).catch((function(t){return console.error(t)}))}},{key:"loadTopTracks",value:function(t){var e=this;Y.getArtistTopTracks(t).then((function(t){t&&e.setState(Object(l.a)(Object(l.a)({},e.state),{},{topTracks:t}))}))}},{key:"render",value:function(){var t,e;if(!this.state.artist)return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)(T,{}),Object(C.jsx)("p",{children:"Loading Artist"})]});var r=this.state.artist,n=r.genres,c=r.images,i=r.name,s=r.popularity,o={sm:c.find((function(t){return 160===t.height})),md:c.find((function(t){return 320===t.height})),lg:c.find((function(t){return 640===t.height}))},u=null!==(t=null!==(e=o.md)&&void 0!==e?e:o.lg)&&void 0!==t?t:o.sm,l=n.map((function(t){return Object(C.jsx)(Z.a,{style:{marginRight:5},variant:"secondary",children:t},t)}));return Object(C.jsxs)(O.a,{fluid:!0,children:[Object(C.jsx)(T,{}),u?Object(C.jsx)(G.a,{src:u.url}):Object(C.jsx)("p",{children:"Loading Image"}),Object(C.jsxs)(D.a,{children:[Object(C.jsx)(N.a,{as:"h2",xs:"auto",children:i}),Object(C.jsx)(N.a,{children:Object(C.jsxs)(M.a,{children:[Object(C.jsx)(M.a.Toggle,{variant:"Secondary",children:Object(C.jsx)(B.a,{})}),Object(C.jsx)(M.a.Menu,{children:Object(C.jsx)(M.a.Item,{href:this.state.artist.uri,children:"Open in Spotify"})})]})})]}),Object(C.jsx)(D.a,{children:Object(C.jsxs)(N.a,{as:"p",children:["Genres: ",l]})}),Object(C.jsx)(D.a,{children:Object(C.jsxs)(N.a,{as:"p",children:[" Popularity: ",s,"th Percentile "]})}),Object(C.jsx)(D.a,{children:Object(C.jsx)(N.a,{as:"h3",children:"Top Tracks"})}),Object(C.jsx)(D.a,{children:Object(C.jsx)(N.a,{children:Object(C.jsx)(z,{tracks:this.state.topTracks})})})]})}}]),r}(a.a.Component),tt=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(){return Object(j.a)(this,r),e.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("p",{children:"Home page"}),Object(C.jsx)(T,{}),Object(C.jsx)("button",{onClick:this.context.logOut,children:"Log out"})]})}}]),r}(a.a.Component);tt.contextType=F;var et="a7d9f2be243d45f69ad9e83e2ef03b61",rt={redirectUri:"https://jacobhearst.github.io/spotify-playlist-plus"};function nt(t){return at.apply(this,arguments)}function at(){return(at=Object(u.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("https://accounts.spotify.com/api/token",null,{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var ct=function(){function t(){Object(j.a)(this,t)}return Object(h.a)(t,null,[{key:"createCodeVerifierCookie",value:function(){var t=this.randomString();return document.cookie="code_verifier=".concat(t),t}},{key:"getVerifierCookie",value:function(){var t=document.cookie.split("; ").filter((function(t){return t.startsWith("code_verifier")}));return t.length>0?t[0].split("=")[1]:void 0}},{key:"constructAuthorizationURI",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r,n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.scopes.join(" "),n="".concat("https://accounts.spotify.com/authorize","?client_id=").concat(et,"&response_type=code&redirect_uri=").concat(rt.redirectUri,"&scope=").concat(encodeURIComponent(r)),t.next=4,this.sha256(e);case 4:return a=t.sent,c=this.base64urlencode(a),n+="&code_challenge_method=S256&code_challenge=".concat(c),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"randomString",value:function(){var t="",e=new Uint8Array(43);window.crypto.getRandomValues(e);for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=256/r.length,a=0;a<43;a++)t+=r[Math.floor(Math.abs(e[a])/n)];return t}},{key:"sha256",value:function(t){var e=(new TextEncoder).encode(t);return window.crypto.subtle.digest("SHA-256",e)}},{key:"base64urlencode",value:function(t){var e=new Uint8Array(t);return btoa(String.fromCharCode.apply(null,e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}},{key:"refreshTimer",value:function(){var t=Object(u.a)(o.a.mark((function t(e,r){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:5e3,n=1e3*e.expires_in,a=n-5e3,setTimeout(Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt({grant_type:"refresh_token",refresh_token:e.refresh_token,client_id:et});case 2:(n=t.sent)&&r(n);case 4:case"end":return t.stop()}}),t)}))),a);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"exchangeCodeForToken",value:function(t,e){return nt({client_id:et,grant_type:"authorization_code",code:t,redirect_uri:rt.redirectUri,code_verifier:e})}}]),t}();function it(){return st.apply(this,arguments)}function st(){return(st=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){window.Spotify?t(window.Spotify):window.onSpotifyWebPlaybackSDKReady=function(){t(window.Spotify)}})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ot(t){return ut.apply(this,arguments)}function ut(){return(ut=Object(u.a)(o.a.mark((function t(e){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,it();case 2:return r=t.sent,n=r.Player,a={name:"SomeTool",getOAuthToken:function(t){t(e.access_token)},volume:.5},t.abrupt("return",new n(a));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}ct.scopes=["user-modify-playback-state","user-read-playback-state","streaming","user-read-email","user-read-private"];var lt=function(t){Object(d.a)(r,t);var e=Object(p.a)(r);function r(t){var n,a;Object(j.a)(this,r),a=e.call(this,t);var c=null!==(n=ct.getVerifierCookie())&&void 0!==n?n:ct.createCodeVerifierCookie(),i=new URLSearchParams(window.location.search).get("code");return i?ct.exchangeCodeForToken(i,c).then((function(t){var e;t&&((e=t)&&(x.defaults.headers.common.Authorization="Bearer "+e.access_token),a.refreshTokenCallback(t))})):a.getAuthURL(c),a.state={logOut:function(){a.getAuthURL(c),a.setState(Object(l.a)(Object(l.a)({},a.state),{},{authToken:void 0}))}},a}return Object(h.a)(r,[{key:"getAuthURL",value:function(t){var e=this;ct.constructAuthorizationURI(t).then((function(r){var n={redirect_url:r,verifier:t};e.setState(Object(l.a)(Object(l.a)({},e.state),{},{tokenRetriever:n}))}))}},{key:"render",value:function(){var t="/spotify-playlist-plus",e=Object(C.jsx)(W,{});return this.state.authToken&&(e=Object(C.jsx)(tt,{})),Object(C.jsx)("main",{children:Object(C.jsx)(F.Provider,{value:this.state,children:Object(C.jsxs)(b.c,{children:[Object(C.jsx)(b.a,{exact:!0,path:t,children:e}),Object(C.jsx)(b.a,{exact:!0,path:t+"/AlbumPage",component:Q}),Object(C.jsx)(b.a,{exact:!0,path:t+"/artist/:id",component:$}),Object(C.jsx)(b.a,{exact:!0,path:t+"/playlist/:id",component:K})]})})})}},{key:"refreshTokenCallback",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ot(e);case 2:(r=t.sent).connect().then((function(t){console.log(t)})),this.setState(Object(l.a)(Object(l.a)({},this.state),{},{authToken:e,player:r})),ct.refreshTimer(e,this.refreshTokenCallback);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),r}(a.a.Component),jt=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,94)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(C.jsx)(w.a,{children:Object(C.jsx)(lt,{})}),document.getElementById("root")),jt()}},[[82,1,2]]]);
//# sourceMappingURL=main.9c36ea24.chunk.js.map