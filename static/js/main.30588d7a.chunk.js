(this["webpackJsonpgrantbartone.github.io"]=this["webpackJsonpgrantbartone.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo-icons.beb6a98d.svg"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),s=(a(21),a(1)),o=a(12),c=(a(24),a(4)),u=a(2),m=a(7),h=a(8),f=a(9),d=a(11),v=a(10),g=(a(25),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"getCellColor",value:function(e){return 1===e?"red":2===e?"black":"white"}},{key:"render",value:function(){var e=this.props,t=e.cell,a=e.columnIndex,n=e.handleClick,i=this.getCellColor(t);return r.a.createElement("td",null,r.a.createElement("div",{className:"cell",onClick:function(){return n(a)}},r.a.createElement("div",{className:i})))}}]),a}(n.Component)),p=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).isFullColumn=function(e){return e.length===n.state.boardHeight},n.WINNINGROWS=4,n.BOARDWIDTH=7,n.BOARDHEIGHT=6,n.state={playerTurn:1,playerOneName:"Red",playerTwoName:"Black",winningRows:n.WINNINGROWS,boardHeight:n.BOARDHEIGHT,board:new Array(n.BOARDWIDTH).fill([]),isGameOver:!1,isDraw:!1},n.handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(h.a)(a,[{key:"initNewGame",value:function(){this.setState(Object(u.a)(Object(u.a)({},this.state),{},{playerTurn:1,board:new Array(this.state.board.length).fill([]),isGameOver:!1,isDraw:!1}))}},{key:"verticalWinner",value:function(e){for(var t=0;t<e.length;t+=1)if(!(e[t].length<this.state.winningRows)){for(var a=!0,n=0;n<e[t].length;n+=1)if(!(n<e[t].length-this.state.winningRows)&&e[t][n]!==this.state.playerTurn){a=!1;break}if(a)return this.state.playerTurn}return!1}},{key:"horizontalWinner",value:function(e){for(var t=0;t<e.length;t+=1)if(0!==e[t].length){var a=e[t].length-1;if(e[t][a]===this.state.playerTurn)for(var n=Math.max(t-this.state.winningRows,0),r=Math.min(e.length,t+this.state.winningRows),i=0,l=n;l<r;l+=1)if(e[l][a]&&e[l][a]===this.state.playerTurn){if((i+=1)===this.state.winningRows)return this.state.playerTurn}else i=0}return!1}},{key:"diagonalWinner",value:function(e){for(var t=0;t<e.length;t+=1){var a=e[t].length-1;if(!(e[t].length<this.state.winningRows||e[t][a]!==this.state.playerTurn)){for(var n=t>=this.state.winningRows-1,r=t<=e.length-this.state.winningRows,i=1;i<this.state.winningRows&&(n=n&&e[t-i][a-i]===this.state.playerTurn,r=r&&e[t+i][a-i]===this.state.playerTurn,n||r);i+=1);if(n||r)return this.state.playerTurn}}return!1}},{key:"isPlayerWin",value:function(e){return this.verticalWinner(e)||this.horizontalWinner(e)||this.diagonalWinner(e)}},{key:"isDraw",value:function(e){for(var t=0;t<e.length;t+=1)if(!this.isFullColumn(e[t]))return!1;return!0}},{key:"handleClick",value:function(e){if(!this.state.isGameOver){var t=Object(c.a)(this.state.board),a=Object(c.a)(t[e]);if(!this.isFullColumn(a))a.push(this.state.playerTurn),t[e]=a,this.isPlayerWin(t)?this.setState(Object(u.a)(Object(u.a)({},this.state),{},{board:t,isGameOver:!0})):this.isDraw(t)?this.setState(Object(u.a)(Object(u.a)({},this.state),{},{board:t,isGameOver:!0,isDraw:!0})):this.setState(Object(u.a)(Object(u.a)({},this.state),{},{board:t,playerTurn:1===this.state.playerTurn?2:1}))}}},{key:"getDisplayGrid",value:function(){for(var e=Object(c.a)(this.state.board),t=0;t<e.length;t+=1)if(e[t].length<this.state.boardHeight){var a=this.state.boardHeight-e[t].length,n=new Array(a).fill(null);e[t]=[].concat(Object(c.a)(e[t]),Object(c.a)(n))}for(var r=[],i=e[0].length-1;i>=0;i-=1){for(var l=[],s=0;s<e.length;s+=1)l.push(e[s][i]);r.push(l)}return r}},{key:"getPlayerTurnName",value:function(){return 1===this.state.playerTurn?r.a.createElement("span",{className:"playerRed"},this.state.playerOneName):r.a.createElement("span",null,this.state.playerTwoName)}},{key:"renderPlayerPrompt",value:function(){return this.state.isDraw?r.a.createElement("div",{className:"playerPrompt"},"This game is a draw!"):this.state.isGameOver?r.a.createElement("div",{className:"playerPrompt"},this.getPlayerTurnName()," wins!!!"):r.a.createElement("div",{className:"playerPrompt"},"Next Player: ",this.getPlayerTurnName())}},{key:"renderInstructions",value:function(){var e=this;return this.state.isDraw||this.state.isGameOver?r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"newGame",onClick:function(){return e.initNewGame()}},"New Game")):r.a.createElement("div",{className:"center"},"Click any column below to drop a piece")}},{key:"render",value:function(){var e=this,t=this.getDisplayGrid();return r.a.createElement("div",null,r.a.createElement("h1",null,"Connect 4"),this.renderPlayerPrompt(),this.renderInstructions(),r.a.createElement("table",null,r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement(b,{key:a,row:t,handleClick:e.handleClick})})))))}}]),a}(n.Component);function b(e){var t=e.row,a=e.handleClick;return r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement(g,{key:t,cell:e,handleClick:a,columnIndex:t})})))}a(26);var w=a(15),y=a.n(w);function E(e){var t=e.dismissLogin,a=Object(n.useState)(3),i=Object(s.a)(a,2),l=i[0],o=i[1],c=Object(n.useState)(""),u=Object(s.a)(c,2),m=u[0],h=u[1],f=Object(n.useState)(""),d=Object(s.a)(f,2),v=d[0],g=d[1],p=Object(n.useState)(""),b=Object(s.a)(p,2),w=b[0],E=b[1];Object(n.useEffect)((function(){return document.body.style="background-color: #37444c; color: white;",function(){return document.body.style="background-color: null;  color: null"}}),[]);var O=function(){g("shake",setTimeout((function(){return g("")}),500))},k=function(){return E("flyAway",setTimeout((function(){return t()}),500))};return r.a.createElement("div",{id:"loginContent",className:"".concat(v," ").concat(w)},r.a.createElement("div",{className:"loginLogo"},r.a.createElement("img",{src:y.a,alt:"Expensify"})),r.a.createElement("form",{className:"loginForm",onSubmit:function(e){switch(e.preventDefault(),l){case 3:h("Login Failed. Please try again."),O();break;case 2:h("Failed again. A couple more tries..."),O();break;case 1:h("Cool gesture, right?! Last time!"),O();break;default:return void k()}o(l-1)}},r.a.createElement("input",{type:"email",name:"username",placeholder:"Email",autoFocus:!0,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",required:!0}),r.a.createElement("div",{id:"loginHint"},m),r.a.createElement("input",{type:"submit",value:"Login"})))}function O(e){var t=e.dismissLogin;return r.a.createElement(E,{dismissLogin:t})}a(27);var k=!1,N=!0,j=[[k,k,k,k,k,k],[k,k,N,k,k,k],[k,k,k,N,k,k],[k,N,N,N,k,k],[k,k,k,k,k,k],[k,k,k,k,k,k]];function T(){var e=Object(n.useState)(j),t=Object(s.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){return i(C(a))}),200);return function(){clearInterval(e)}}),[a]);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},"Welcome to the Game... of Life!"),r.a.createElement("div",{className:"intro"},r.a.createElement("p",null,'This is Grant\'s "Game of Life" challenge built in React! This version auto-advances generations every 200ms.'),r.a.createElement("p",null,"Learn more about the rules of the game ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},"here"),".")),r.a.createElement("div",null,r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement("div",{className:"row",key:"".concat(t)},e.map((function(e,t){return r.a.createElement("div",{className:"item ".concat(e?"item--alive":""),key:"".concat(t)})})))})))))}var C=function(e){for(var t=function(t,a){for(var n=function(t,a){return e[t][a]?1:0},r=e.length,i=e[0].length,l=0,o=0,c=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];o<c.length;o++){var u=Object(s.a)(c[o],2);l+=n((r+t+u[0])%r,(i+a+u[1])%i)}return l},a=[],n=0;n<e.length;n+=1){for(var r=[],i=0;i<e[0].length;i+=1){var l=t(n,i);e[n][i]?r.push([2,3].includes(l)):r.push(3===l)}a.push(r)}return a},G="welcome",R="connect",I="expenses_app";var W=function(){o.a.initialize("G-RJDR3ET5KK"),o.a.pageview(window.location.pathname+window.location.search);var e=Object(n.useState)(G),t=Object(s.a)(e,2),a=t[0],i=t[1],l=function(){return i(G)},c=function(){return i(I)},u=function(){return i(R)};return r.a.createElement("div",{className:"App"},function(){switch(a){case R:return r.a.createElement(p,null);case I:return r.a.createElement(O,{dismissLogin:l});case G:default:return r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"welcome"},"Welcome to Grant's GithubIO site, where I'm hosting a few random projects I've built that are open-source on my ",r.a.createElement("a",{href:"https://github.com/grantbartone/hello-world",target:"_blank",rel:"noopener noreferrer"},"Github"),"."),r.a.createElement("div",{className:"welcome"},"Pick a button below from some interactive options:"),r.a.createElement("div",{className:"welcome_buttons"},r.a.createElement("button",{onClick:c},"Check out my Login UX"),r.a.createElement("button",{onClick:u},"Play Connect 4")),r.a.createElement(T,null))}}(),r.a.createElement("div",{className:"welcome"},"By: Grant Bartone"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.30588d7a.chunk.js.map