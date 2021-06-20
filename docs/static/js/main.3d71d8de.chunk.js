(this.webpackJsonptsume_cube_scramble_generator=this.webpackJsonptsume_cube_scramble_generator||[]).push([[0],{41:function(e,n){var t=function(){var e={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},n={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},t=function(e){var t,r,i,o,a,c,l;if("string"===typeof e){for(l=[],t=0,r=(c=e.split(/\s+/)).length;t<r;t++)if(0!==(o=c[t]).length){if(o.length>2)throw new Error("Invalid move: ".concat(o));if(void 0===(i=n[o[0]]))throw new Error("Invalid move: ".concat(o));if(1===o.length)a=0;else if("2"===o[1])a=1;else{if("'"!==o[1])throw new Error("Invalid move: ".concat(o));a=2}l.push(3*i+a)}return l}return null!=e.length?e:[e]};return{inverse:function(n){var r,i,o,a,c,l,u;if((l=function(){var e,i,o,l;for(l=[],e=0,i=(o=t(n)).length;e<i;e++)a=o[e],r=a/3|0,c=a%3,l.push(3*r-(c-1)+1);return l}()).reverse(),"string"===typeof n){for(u="",i=0,o=l.length;i<o;i++)a=l[i],u+=e[r=a/3|0],1===(c=a%3)?u+="2":2===c&&(u+="'"),u+=" ";return u.substring(0,u.length-1)}return null!=n.length?l:l[0]}}}();e.exports=t},43:function(e,n){var t={makeShortScramble:function(e){for(var n=["U","R","F","D","L","B"],t=["","'","2"],r=[];r.length<e;){var i=n[Math.floor(Math.random()*n.length)],o=t[Math.floor(Math.random()*t.length)];r.length>=1&&i===r[r.length-1].face||r.length>=2&&i===r[r.length-2].face&&("U"===i&&"D"===r[r.length-1].face||"D"===i&&"U"===r[r.length-1].face||"R"===i&&"L"===r[r.length-1].face||"L"===i&&"R"===r[r.length-1].face||"F"===i&&"B"===r[r.length-1].face||"B"===i&&"F"===r[r.length-1].face)||r.push({face:i,turn:o})}var a="";return r.forEach((function(e){a+=e.face+e.turn+" "})),a=a.trim()},makeCorrectScramble:function(e,n){var t=e.split(" "),r=[];t.forEach((function(e){var n=e.split("");1===n.length&&n.push(""),r.push(n)}));var i=n.split(" "),o=[];i.forEach((function(e){var n=e.split("");1===n.length&&n.push(""),o.push(n)}));for(var a=r.slice(),c=o.slice(),l=!0,u=0;l;)r[r.length-(u+1)][0]!==o[u][0]?l=!1:""===r[r.length-(u+1)][1]&&"'"===o[u][1]||"'"===r[r.length-(u+1)][1]&&""===o[u][1]||"2"===r[r.length-(u+1)][1]&&"2"===o[u][1]?(a.pop(),c.shift(),u++):"'"===r[r.length-(u+1)][1]&&"2"===o[u][1]||"2"===r[r.length-(u+1)][1]&&"'"===o[u][1]?(a[a.length-(u+1)][1]="",c.shift(),l=!1):""===r[r.length-(u+1)][1]&&"2"===o[u][1]||"2"===r[r.length-(u+1)][1]&&""===o[u][1]?(a[a.length-(u+1)][1]="'",c.shift(),l=!1):(""===r[r.length-(u+1)][1]&&""===o[u][1]||"'"===r[r.length-(u+1)][1]&&"'"===o[u][1])&&(a[a.length-(u+1)][1]="2",c.shift(),l=!1);var f=a.concat(c),h="";return f.forEach((function(e){h+=e[0]+e[1]+" "})),h}};e.exports=t},58:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(9),o=t.n(i),a=(t(58),t(34)),c=t(91),l=t(94),u=t(96),f=t(105),h=t(104),s=t(106),v=t(97),p=t(98),d=t(99),j=t(100),g=t(101),b=t(102),m=t(103),y=t(41),O=t.n(y),x=t(30),w=t(31),k=function(){var e,n,t,r,i,o,a,c,l,u,f,h,s,v,p=!1,d=function(e){for(var n=0,t=0;t<7;t++)n*=3,n+=e.co[t];return n},j=function(e){for(var n=0,t=0;t<11;t++)n*=2,n+=e.eo[t];return n},g=function(e){for(var n=0,t=4,i=0;i<12;i++)e.ep[i]>7&&(n+=r[11-i][t--]);return n},b=function(e){for(var n,t=255,r=0,i=0;i<8;i++)n=255>>8-e.cp[i],r+=V(7-i)*T(t&n),t^=1<<e.cp[i];return r},m=function(e){for(var n,t=255,r=0,i=0;i<8;i++)n=255>>8-e.ep[i],r+=V(7-i)*T(t&n),t^=1<<e.ep[i];return r},y=function(e){for(var n,t,r=0,i=15,o=0;o<4;o++)n=15>>4-(t=e.ep[o+8]-8),r+=V(3-o)*T(i&n),i^=1<<t;return r},O=function(e,n){for(var t=0,r=0;r<7;r++)e.co[r]=n/Math.pow(3,6-r)|0,t+=e.co[r],n%=Math.pow(3,6-r);e.co[7]=(15-t)%3},k=function(e,n){for(var t=0,r=0;r<11;r++)e.eo[10-r]=1&n,t+=e.eo[10-r],n>>>=1;e.eo[11]=(12-t)%2},E=function(e,n){for(var t=4,i=0;i<12;i++)n>=r[11-i][t]?(e.ep[i]=t+7,n-=r[11-i][t--]):e.ep[i]=i-4+t},I=function(e,n){for(var t,r=[0,1,2,3,4,5,6,7],i=0;i<8;i++)t=1<<n/V(7-i)|0,e.cp[i]=r.splice(T(t-1),1)[0],n%=V(7-i)},A=function(e,n){for(var t,r=[0,1,2,3,4,5,6,7],i=0;i<8;i++)t=1<<n/V(7-i)|0,e.ep[i]=r.splice(T(t-1),1)[0],n%=V(7-i)},M=function(e,n){for(var t,r=[8,9,10,11],i=0;i<4;i++)t=1<<n/V(3-i)|0,e.ep[i+8]=r.splice(T(t-1),1)[0],n%=V(3-i)},S=function(e){for(var n,t=0,r=0;r<8;r++)n=1<<e/V(7-r)|0,t+=T(n-1),e%=V(7-r);return 1&t},z=function(e){for(var n,t=0,r=0;r<12;r++)n=1<<e/V(11-r)|0,t+=T(n-1),e%=V(11-r);return 1&t},B=function(){i=X(2187,18);var e,t,r=new J;for(e=0;e<2187;e++)for(O(r,e),t=0;t<18;t++)i[e][t]=d(r.apply(n[t]))},D=function(){o=X(2048,18);var e,t,r=new J;for(e=0;e<2048;e++)for(k(r,e),t=0;t<18;t++)o[e][t]=j(r.apply(n[t]))},F=function(){a=X(495,18);var e,t,r=new J;for(e=0;e<495;e++)for(E(r,e),t=0;t<18;t++)a[e][t]=g(r.apply(n[t]))},L=function(){c=X(40320,10);var e,r,i=new J;for(e=0;e<40320;e++)for(I(i,e),r=0;r<10;r++)c[e][r]=b(i.apply(n[t[r]]))},R=function(){l=X(40320,10);var e,r,i=new J;for(e=0;e<40320;e++)for(A(i,e),r=0;r<10;r++)l[e][r]=m(i.apply(n[t[r]]))},U=function(){u=X(24,10);var e,r,i=new J;for(e=0;e<24;e++)for(M(i,e),r=0;r<10;r++)u[e][r]=y(i.apply(n[t[r]]))},_=function(){var e,n,t,r,o,c;for((f=Array(1082565)).fill(15),f[0]=0,t=1,r=0;t<1082565;){for(o=0;o<1082565;o++)if(f[o]===r)for(e=i[o/495|0],n=a[o%495],c=0;c<18;c++)15===f[495*e[c]+n[c]]&&(f[495*e[c]+n[c]]=r+1,t++);r++}},C=function(){var e,n,t,r,i,c;for((h=Array(1013760)).fill(15),h[0]=0,t=1,r=0;t<1013760;){for(i=0;i<1013760;i++)if(h[i]===r)for(e=o[i/495|0],n=a[i%495],c=0;c<18;c++)15===h[495*e[c]+n[c]]&&(h[495*e[c]+n[c]]=r+1,t++);r++}},P=function(){var e,n,t,r,i,o;for((s=Array(967680)).fill(15),s[0]=0,t=1,r=0;t<967680;){for(i=0;i<967680;i++)if(s[i]===r)for(e=c[i/24|0],n=u[i%24],o=0;o<10;o++)15===s[24*e[o]+n[o]]&&(s[24*e[o]+n[o]]=r+1,t++);r++}},N=function(){var e,n,t,r,i,o;for((v=Array(967680)).fill(15),v[0]=0,t=1,r=0;t<967680;){for(i=0;i<967680;i++)if(v[i]===r)for(e=l[i/24|0],n=u[i%24],o=0;o<10;o++)15===v[24*e[o]+n[o]]&&(v[24*e[o]+n[o]]=r+1,t++);r++}},J=function(){function e(n,t,r,i){Object(x.a)(this,e),this.cp=n||[0,1,2,3,4,5,6,7],this.co=t||[0,0,0,0,0,0,0,0],this.ep=r||[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=i||[0,0,0,0,0,0,0,0,0,0,0,0]}return Object(w.a)(e,[{key:"apply",value:function(n){var t=this;return new e(this.cp.map((function(e,r){return t.cp[n.cp[r]]})),this.co.map((function(e,r){return(t.co[n.cp[r]]+n.co[r])%3})),this.ep.map((function(e,r){return t.ep[n.ep[r]]})),this.eo.map((function(e,r){return(t.eo[n.ep[r]]+n.eo[r])%2})))}},{key:"copy",value:function(){return new e(this.cp,this.co,this.ep,this.eo)}},{key:"toIndexPhase1",value:function(){return new W(d(this),j(this),g(this),[])}},{key:"toIndexPhase2",value:function(){return new q(b(this),m(this),y(this),[])}}]),e}(),W=function(){function e(n,t,r,i){Object(x.a)(this,e),this.twist=n||0,this.flip=t||0,this.eslice=r||0,this.move=i||[]}return Object(w.a)(e,[{key:"apply",value:function(n){var t,r,c,l;return t=i[this.twist][n],r=o[this.flip][n],c=a[this.eslice][n],(l=this.move.slice()).push(n),new e(t,r,c,l)}},{key:"toArray",value:function(){}}]),e}(),q=function(){function e(n,t,r,i){Object(x.a)(this,e),this.cp=n||0,this.udep=t||0,this.eslice2=r||0,this.move=i||[]}return Object(w.a)(e,[{key:"apply",value:function(n){var r,i,o,a,f=t.indexOf(n);return r=c[this.cp][f],i=l[this.udep][f],o=u[this.eslice2][f],(a=this.move.slice()).push(n),new e(r,i,o,a)}},{key:"toArray",value:function(){}}]),e}(),G=function(e,r){var i,o,a,c,l;a=e.toIndexPhase1();for(var u=10;u<=13;u++){(i=new Z).push(a);for(var p=void 0,d=void 0,j=void 0,g=void 0;i.size()>0;){if((p=i.pop()).move.length===u&&0===p.twist&&0===p.flip&&0===p.eslice){l=e.copy();for(var b=0;b<p.move.length;b++)l=l.apply(n[p.move[b]]);c=l.toIndexPhase2();for(var m=0;m<=r-p.move.length;m++){(o=new Z).push(c);for(var y=void 0,O=void 0,x=void 0,w=void 0;o.size()>0;){if(0===(y=o.pop()).cp&&0===y.udep&&0===y.eslice2)return p.move.concat(y.move);if(!(y.move.length+Math.max(s[24*y.cp+y.eslice2],v[24*y.udep+y.eslice2])>m))for(var k=0;k<10;k++)((x=(O=t[k])/3|0)%3!==(w=0===y.move.length?-1:y.move[y.move.length-1]/3|0)%3||x>w)&&o.push(y.apply(O))}}}if(!(p.move.length+Math.max(f[495*p.twist+p.eslice],h[495*p.flip+p.eslice])>u))for(d=0;d<18;d++)((j=d/3|0)%3!==(g=0===p.move.length?-1:p.move[p.move.length-1]/3|0)%3||j>g)&&i.push(p.apply(d))}}return null},H=function(e){var n,t,r,i,o=new Y(e),a=new J;do{n=o.randomInt(40320),r=o.randomInt(479001600)}while(S(n)!==z(r));return t=o.randomInt(2187),i=o.randomInt(2048),I(a,n),O(a,t),function(e,n){for(var t,r=[0,1,2,3,4,5,6,7,8,9,10,11],i=0;i<12;i++)t=1<<n/V(11-i)|0,e.ep[i]=r.splice(T(t-1),1)[0],n%=V(11-i)}(a,r),k(a,i),a},K=function(e){var n,t,r,i,o,a,c,l,u;n=e.length,t=Array(n),r=Array(n),i=Array(n);for(var f=0;f<n;f++)t[f]=e[f]/3|0,r[f]=t[f]%3,i[f]=e[f]%3;do{l=0,n=t.length;for(var h=0;h<n-1;h++)r[h]===r[h+1]&&t[h]>t[h+1]&&(Q(t,h),Q(r,h),Q(i,h));for(var s=0;s<n-1;s++)t[s]===t[s+1]&&(l++,i[s]=(i[s]+i[s+1]+1)%4,i[s+1]=3);o=[],a=[],c=[];for(var v=0;v<n;v++)3!==i[v]&&(o.push(t[v]),a.push(r[v]),c.push(i[v]));t=o.slice(),r=a.slice(),i=c.slice()}while(l>0);u=Array(t.length);for(var p=0;p<t.length;p++)u[p]=3*t[p]+i[p];return u},Q=function(e,n){e.splice(n,2,e[n+1],e[n])},T=function(e){return(65535&(e=(16711935&(e=(252645135&(e=(858993459&(e=(1431655765&e)+(e>>1&1431655765)))+(e>>2&858993459)))+(e>>4&252645135)))+(e>>8&16711935)))+(e>>16&65535)},V=function(e){for(var n=1,t=1;t<=e;t++)n*=t;return n},X=function(e,n){for(var t=Array(e),r=0;r<e;r++)t[r]=Array(n);return t},Y=function(){function e(n){Object(x.a)(this,e),this.x=123456789,this.y=362436069,this.z=521288629,this.w=n||Math.floor(Math.random()*Date.now())}return Object(w.a)(e,[{key:"_random",value:function(){var e;return e=this.x^this.x<<11,this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^e^e>>>8}},{key:"randomInt",value:function(e){return Math.abs(this._random())%e}}]),e}(),Z=function(){function e(){Object(x.a)(this,e),this.heap=[]}return Object(w.a)(e,[{key:"empty",value:function(){return 0===this.heap.length}},{key:"size",value:function(){return this.heap.length}},{key:"top",value:function(){return this.heap[0]}},{key:"push",value:function(e){this.heap.unshift(e)}},{key:"pop",value:function(){return this.heap.shift()}}]),e}();return{initialize:function(){p||(!function(){r=X(12,12);for(var i=0;i<12;i++){r[i].fill(0),r[i][0]=1,r[i][i]=1;for(var o=1;o<i;o++)r[i][o]=r[i-1][o-1]+r[i-1][o]}e=["U","U2","U'","F","F2","F'","R","R2","R'","D","D2","D'","B","B2","B'","L","L2","L'"],(n=Array(18))[0]=new J([3,0,1,2,4,5,6,7],[0,0,0,0,0,0,0,0],[4,5,2,3,1,0,6,7,8,9,10,11],[0,0,0,0,0,0,0,0,0,0,0,0]),n[3]=new J([1,7,2,3,0,5,6,4],[1,2,0,0,2,0,0,1],[9,1,2,8,4,5,6,7,0,3,10,11],[1,0,0,1,0,0,0,0,1,1,0,0]),n[6]=new J([4,1,2,0,5,3,6,7],[2,0,0,1,1,2,0,0],[0,1,2,3,8,5,6,11,7,9,10,4],[0,0,0,0,0,0,0,0,0,0,0,0]),n[9]=new J([0,1,2,3,7,4,5,6],[0,0,0,0,0,0,0,0],[0,1,7,6,4,5,2,3,8,9,10,11],[0,0,0,0,0,0,0,0,0,0,0,0]),n[12]=new J([0,1,3,5,4,6,2,7],[0,0,1,2,0,1,2,0],[0,11,10,3,4,5,6,7,8,9,1,2],[0,1,1,0,0,0,0,0,0,0,1,1]),n[15]=new J([0,2,6,3,4,5,7,1],[0,1,2,0,0,0,1,2],[0,1,2,3,4,10,9,7,8,5,6,11],[0,0,0,0,0,0,0,0,0,0,0,0]);for(var a=0;a<6;a++)n[3*a+1]=n[3*a].apply(n[3*a]),n[3*a+2]=n[3*a+1].apply(n[3*a]);t=[0,1,2,4,7,9,10,11,13,16]}(),B(),D(),F(),L(),R(),U(),_(),C(),P(),N(),p=!0)},solve:function(t){for(var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:22,o=t.split(" "),a=new J,c="",l=0;l<o.length;l++)e.indexOf(o[l])>=0&&(a=a.apply(n[e.indexOf(o[l])]));return null==(r=G(a,i))?"Error":((r=K(r)).forEach((function(n){c+=e[n]+" "})),c)},getScramble:function(n){var t,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:22;return t=H(n),null==(r=G(t,o))?"Error":((r=K(r)).reverse(),i="",r.forEach((function(n){i+=e[n]+" "})),console.log(i+"["+r.length+" moves]"),i)}}}(),E=t(43),I=t.n(E),A=t(6);var M=function(){var e=Object(c.a)((function(e){return{container:{margin:"0 auto",padding:"20px",maxWidth:"700px"},formControl:{margin:e.spacing(1),minWidth:120}}}))(),n=Object(r.useState)([]),t=Object(a.a)(n,2),i=t[0],o=t[1],y=Object(r.useState)(""),x=Object(a.a)(y,2),w=x[0],E=x[1],M=Object(r.useState)(""),S=Object(a.a)(M,2),z=S[0],B=S[1],D=Object(r.useState)([]),F=Object(a.a)(D,2),L=F[0],R=F[1];Object(r.useEffect)((function(){if(""!==w&&""!==z){for(var e=[],n=[],t=0;t<z;t++){var r=U(w);n.push(r),e.push(!1)}o(n),R(e)}}),[w,z]);var U=function(e){k.initialize();for(var n="",t="";t.split(" ").length<19;)n=I.a.makeShortScramble(e),t=O.a.inverse(k.solve(n));return[n,t]};return Object(A.jsxs)("div",{className:e.container,children:[Object(A.jsx)(l.a,{variant:"h4",children:"\u8a70\u3081\u30ad\u30e5\u30fc\u30d6\u30b9\u30af\u30e9\u30f3\u30d6\u30eb\u751f\u6210\u5668"}),Object(A.jsxs)(u.a,{className:e.formControl,children:[Object(A.jsx)(f.a,{id:"moves-label",children:"\u624b\u6570"}),Object(A.jsxs)(h.a,{labelId:"moves-label",id:"moves",value:w,onChange:function(e){E(e.target.value)},children:[Object(A.jsx)(s.a,{value:2,children:"2"}),Object(A.jsx)(s.a,{value:3,children:"3"}),Object(A.jsx)(s.a,{value:4,children:"4"}),Object(A.jsx)(s.a,{value:5,children:"5"}),Object(A.jsx)(s.a,{value:6,children:"6"}),Object(A.jsx)(s.a,{value:7,children:"7"}),Object(A.jsx)(s.a,{value:8,children:"8"})]})]}),Object(A.jsxs)(u.a,{className:e.formControl,children:[Object(A.jsx)(f.a,{id:"count-label",children:"\u500b\u6570"}),Object(A.jsxs)(h.a,{labelId:"count-label",id:"count",value:z,onChange:function(e){B(e.target.value)},children:[Object(A.jsx)(s.a,{value:3,children:"mo3"}),Object(A.jsx)(s.a,{value:5,children:"ao5"}),Object(A.jsx)(s.a,{value:12,children:"ao12"})]})]}),Object(A.jsx)(v.a,{children:Object(A.jsxs)(p.a,{children:[Object(A.jsx)(d.a,{children:Object(A.jsx)(j.a,{children:Object(A.jsx)(g.a,{children:"\u30b9\u30af\u30e9\u30f3\u30d6\u30eb"})})}),Object(A.jsx)(b.a,{children:i.map((function(e,n){return Object(A.jsxs)(j.a,{children:[Object(A.jsx)(g.a,{children:e[1]}),Object(A.jsx)(g.a,{children:L[n]&&O.a.inverse(e[0])}),Object(A.jsx)(g.a,{children:Object(A.jsx)(m.a,{variant:"contained",onClick:function(){return function(e){var n=L.slice();L[e]?n[e]=!1:n[e]=!0,R(n)}(n)},children:"\u89e3\u7b54"})})]},n)}))})]})})]})};o.a.render(Object(A.jsx)(M,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.3d71d8de.chunk.js.map