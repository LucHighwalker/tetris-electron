(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),i=n.n(o),c=(n(24),n(1)),u=n(2),s=n(4),l=n(3),m=n(5),p=n(9),h=n(6),f=n(7),v=n(18),g=[[[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]],[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]],[[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],[[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]]],[[[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]]],[[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],[[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]]],[[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]]],b=function(){for(var e=[],t=0;t<18;t++){e.push([]);for(var n=0;n<10;n++)e[t].push(0)}return e},_=function(){return e=1,t=g.length-1,Math.floor(Math.random()*(t-e+1))+e;var e,t},d=function(){return{grid:b(),shape:_(),rotation:0,x:5,y:-4,next_shape:_(),is_running:!0,score:0,speed:100,game_over:!1}},O=function(e,t,n,r,a){for(var o=g[e][a],i=0;i<o.length;i++)for(var c=0;c<o[i].length;c++)if(0!==o[i][c]){var u=c+n,s=i+r;if(s<0)continue;var l=t[s];if(!l)return!1;if(void 0===l[u]||0!==l[u])return!1}return!0},E=function(){return{type:"PAUSE"}},j=function(){return{type:"RESUME"}},y=function(){return{type:"RESTART"}},k=function(){return{type:"MOVE_UP"}},w=function(){return{type:"MOVE_LEFT"}},R=function(){return{type:"MOVE_DOWN"}},T=function(){return{type:"MOVE_RIGHT"}},A=function(){return{type:"ROTATE_LEFT"}},C=function(){return{type:"ROTATE_RIGHT"}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d(),t=arguments.length>1?arguments[1]:void 0,n=e.shape,r=e.grid,a=e.x,o=e.y,i=e.rotation,c=e.next_shape,u=e.score,s=e.is_running;switch(t.type){case"PAUSE":return Object(f.a)({},e,{is_running:!1});case"RESUME":return Object(f.a)({},e,{is_running:!0});case"RESTART":return d();case"GAME_OVER":case"MOVE_UP":return e;case"MOVE_LEFT":return O(n,r,a-1,o,i)?Object(f.a)({},e,{x:a-1}):e;case"MOVE_DOWN":var l=o+1;if(O(n,r,a,l,i))return Object(f.a)({},e,{y:l});var m=function(e,t,n,r,a){for(var o=!1,i=g[e][a],c=Object(v.a)(t),u=0;u<i.length;u++)for(var s=0;s<i[u].length;s++)i[u][s]&&(u+r<0?o=!0:c[u+r][s+n]=e);return{grid:c,gameOver:o}}(n,r,a,o,i),p=m.grid;if(m.gameOver){var h=Object(f.a)({},e);return h.shape=0,h.grid=p,Object(f.a)({},e,{game_over:!0})}var b=d();return b.grid=p,b.shape=c,b.score=u,b.is_running=s,b.score=u+function(e){for(var t=0,n=0;n<e.length;n++)-1===e[n].indexOf(0)&&(t+=1,e.splice(n,1),e.unshift(Array(10).fill(0)));return[0,40,100,300,1200][t]}(p),b;case"MOVE_RIGHT":return O(n,r,a+1,o,i)?Object(f.a)({},e,{x:a+1}):e;case"ROTATE_LEFT":var _=function(e,t){var n=g[e].length;return(t+n+1)%n}(n,i);return O(n,r,a,o,_)?Object(f.a)({},e,{rotation:_}):e;case"ROTATE_RIGHT":var E=function(e,t){var n=g[e].length;return(t+n-1)%n}(n,i);return O(n,r,a,o,E)?Object(f.a)({},e,{rotation:E}):e;default:return e}},M=Object(p.b)({game:N}),x=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"head"},a.a.createElement("h1",null,"hello world"))}}]),t}(r.Component)),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="square color-".concat(this.props.color);return a.a.createElement("div",{className:e})}}]),t}(r.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"make_grid",value:function(){var e=this.props.shape,t=g[e][0];return g[0][0].map(function(n,r){return n.map(function(n,o){var i=0===t[r][o]?0:e;return a.a.createElement(L,{key:"".concat(r).concat(o),color:i})})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"next"},this.make_grid())}}]),t}(r.Component),U=Object(h.b)(function(e){return{shape:e.game.next_shape}})(V),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).last_update_time=0,n.progress_time=0,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.requestAnimationFrame(this.update.bind(this))}},{key:"make_grid",value:function(){var e=this.props,t=e.grid,n=e.shape,r=e.rotation,o=e.x,i=e.y,c=g[n][r],u=n;return t.map(function(e,n){return e.map(function(e,r){var s=r-o,l=n-i,m=e;s>=0&&s<c.length&&l>=0&&l<c.length&&(m=0===c[l][s]?m:u);var p=n*t[0].length+r;return a.a.createElement(L,{key:p,square:e,color:m},e)})})}},{key:"update",value:function(e){if(window.requestAnimationFrame(this.update.bind(this)),this.props.is_running){this.last_update_time||(this.last_update_time=e);var t=e-this.last_update_time;this.progress_time+=t,this.progress_time>this.props.speed&&(this.props.move_down(),this.progress_time=0),this.last_update_time=e}}},{key:"render",value:function(){return a.a.createElement("div",{className:"board"},this.make_grid())}}]),t}(r.Component),D=Object(h.b)(function(e){return{grid:e.game.grid,shape:e.game.shape,rotation:e.game.rotation,x:e.game.x,y:e.game.y,speed:e.game.speed,is_running:e.game.is_running}},{move_down:R})(S),F=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.is_running,n=e.score,r=e.resume,o=e.pause,i=e.restart,c=e.game_over;return a.a.createElement("div",{className:"score"},a.a.createElement("div",null,"Score:",n),a.a.createElement("div",null,"Level: 1"),a.a.createElement("button",{className:"score-button",onClick:function(e){c||(t?o():r())}},t?"Pause":"Resume"),a.a.createElement("button",{className:"score-button",onClick:function(e){i()}},"Restart"))}}]),t}(r.Component),G=Object(h.b)(function(e){return{score:e.game.score,is_running:e.game.is_running,game_over:e.game.game_over}},{pause:E,resume:j,restart:y})(F),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){var n=t.key,r=e.props,a=r.move_up,o=r.move_down,i=r.move_left,c=r.move_right,u=r.rotate_left,s=r.rotate_right;switch(n){case"w":case"ArrowUp":a();break;case"s":case"ArrowDown":o();break;case"a":case"ArrowLeft":i();break;case"d":case"ArrowRight":c();break;case"q":u();break;case"e":s()}},!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.is_running,r=t.game_over;return a.a.createElement("div",{className:"controls"},a.a.createElement("button",{className:"control-button",onClick:function(t){n&&!r&&e.props.move_up()}},"Up"),a.a.createElement("button",{className:"control-button",onClick:function(t){n&&!r&&e.props.move_down()}},"Down"),a.a.createElement("button",{className:"control-button",onClick:function(t){n&&!r&&e.props.move_left()}},"Left"),a.a.createElement("button",{className:"control-button",onClick:function(t){n&&!r&&e.props.move_right()}},"Right"),a.a.createElement("button",{onClick:function(t){n&&!r&&e.props.rotate_left()}},"Rotate Left"),a.a.createElement("button",{onClick:function(t){n&&!r&&e.props.rotate_right()}},"Rotate Right"))}}]),t}(r.Component),q=Object(h.b)(function(e){return{is_running:e.game.is_running,game_over:e.game.game_over}},{move_right:T,move_left:w,move_down:R,move_up:k,rotate_left:A,rotate_right:C})(P),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.game_over,n=e.is_running,r="",o="hidden";return t?(r="Game Over",o=""):n?r="???":(r="Paused",o=""),a.a.createElement("div",{className:"overlay ".concat(o)},a.a.createElement("h1",null,r),a.a.createElement("p",null))}}]),t}(r.Component),H=Object(h.b)(function(e){return{game_over:e.game.game_over,is_running:e.game.is_running}},{})(I),W=Object(p.c)(M),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,{store:W},a.a.createElement("div",{className:"app"},a.a.createElement(x,null),a.a.createElement(U,null),a.a.createElement(D,null),a.a.createElement(G,null),a.a.createElement(q,null),a.a.createElement(H,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.3bafa526.chunk.js.map