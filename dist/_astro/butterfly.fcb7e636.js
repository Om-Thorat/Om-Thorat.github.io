import{S as O,i as Q,s as U,e as M,a as P,b as G,c as B,d as I,f as S,g as m,h as R,j as e,k as p,l as j,m as T,n as x,o as k,p as W,q as V}from"./index.628eb4f7.js";/* empty css                       */function Z(n,i){var l=n.getBoundingClientRect(),s=i.getBoundingClientRect();return Math.sqrt((l.top-s.top)**2+(s.left-l.left)**2)}function z(n){return new Promise(i=>setTimeout(i,n))}function $(n){let i,l,s,o,v,a,g,h,c,w,_,d;return{c(){i=M("div"),l=M("div"),s=P("svg"),o=P("circle"),v=G(),a=M("img"),h=G(),c=M("img"),_=G(),d=M("div"),this.h()},l(r){i=B(r,"DIV",{class:!0,style:!0});var u=I(i);l=B(u,"DIV",{class:!0});var t=I(l);s=S(t,"svg",{width:!0,height:!0,viewBox:!0,class:!0,fill:!0,xmlns:!0});var b=I(s);o=S(b,"circle",{cx:!0,cy:!0,r:!0,fill:!0,id:!0,class:!0,style:!0}),I(o).forEach(m),b.forEach(m),v=R(t),a=B(t,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,style:!0}),t.forEach(m),h=R(u),c=B(u,"IMG",{src:!0,width:!0,height:!0,class:!0,alt:!0}),u.forEach(m),_=R(r),d=B(r,"DIV",{});var E=I(d);E.forEach(m),this.h()},h(){e(o,"cx","5"),e(o,"cy","29"),e(o,"r","2.5"),e(o,"fill","#fbcb59"),e(o,"id","anchor"),e(o,"class","fixed transition-all duration-[80ms]"),p(o,"visibility","hidden "),e(s,"width","10"),e(s,"height","60"),e(s,"viewBox","0 0 10 60"),e(s,"class","dot transition-all duration-[80ms] ease-in fixed"),e(s,"fill","none"),e(s,"xmlns","http://www.w3.org/2000/svg"),j(a.src,g="/sparklesirl.svg")||e(a,"src",g),e(a,"alt","sparkles"),e(a,"width","10"),e(a,"height","10"),e(a,"class","dot transition-all ease-linear duration-[80ms] fade fixed svelte-8xr1bb"),p(a,"visibility","hidden"),e(l,"class","w-[10px] h-[60px] flex float-right"),j(c.src,w="/Butterfly.gif")||e(c,"src",w),e(c,"width","60px"),e(c,"height","64px"),e(c,"class","fly fixed transition-all duration-[80ms] ease-linear"),e(c,"alt",""),e(i,"class","z-0 cursor-pointer flex fixed transition-all duration-[80ms] ease-linear w-[60px] h-[64px]"),p(i,"top","max("+n[0]+"%,-4.5%)"),p(i,"right","max("+n[1]+"%,-4.5%)"),p(i,"rotate",n[2]+"rad")},m(r,u){T(r,i,u),x(i,l),x(l,s),x(s,o),n[6](o),x(l,v),x(l,a),n[7](a),x(i,h),x(i,c),T(r,_,u),T(r,d,u),n[8](d)},p(r,[u]){u&1&&p(i,"top","max("+r[0]+"%,-4.5%)"),u&2&&p(i,"right","max("+r[1]+"%,-4.5%)"),u&4&&p(i,"rotate",r[2]+"rad")},i:k,o:k,d(r){r&&m(i),n[6](null),n[7](null),r&&m(_),r&&m(d),n[8](null)}}}let A=3,N=100,X=100;const tt=.0025;function et(n,i,l){let s=-4.5,o=-4.5,v=2.4,a,g,h,c=-3,w=-3,_=95-Math.floor(Math.random()*20),d=30-Math.floor(Math.random()*25),r=50-(-1)**Math.floor(Math.random()*2)*Math.floor(Math.random()*20),u=!1;var t=.001;let b=1;async function E(){u==!0&&(b=-b),u=!0;let f=window.innerHeight,L=window.innerHeight;for(let H=1;H<1e3;H++){if(t>1||t<0){t=.001;break}l(0,s=(1-t)**3*c+3*(1-t)**2*t*_+3*(1-t)*t*t*A+t**3*N),l(1,o=(1-t)**3*w+3*(1-t)**2*t*d+3*(1-t)*t*t*r+t**3*X);var q=c*(-3+6*t-3*t**2)+_*(3-12*t+9*t**2)+A*(6*t-9*t**2)+3*N*t**2;q=f*q;var C=w*(-3+6*t-3*t**2)+d*(3-12*t+9*t**2)+r*(6*t-9*t**2)+3*X*t**2;if(C=L*C,l(2,v=Math.PI/2+Math.atan2(C,q)),t=t+b*(tt*Math.abs(v)+.001),await z(80),h.children.length<2||Z(h.children[h.children.length-1],g)>10){var D=g.getBoundingClientRect(),y=document.importNode(a,!0);console.log(D),y.setAttribute("id",`${t}`),y.style.position="fixed",y.style.visibility="visible",y.style.transition="none",y.style.top=`${D.top}px`,y.style.left=`${D.left}px`,h.append(y),h.children.length>10&&h.children[0].remove()}}t=.001}async function Y(){await z(2e3),E()}W(Y);function F(f){V[f?"unshift":"push"](()=>{g=f,l(4,g)})}function J(f){V[f?"unshift":"push"](()=>{a=f,l(3,a)})}function K(f){V[f?"unshift":"push"](()=>{h=f,l(5,h)})}return[s,o,v,a,g,h,F,J,K]}class rt extends O{constructor(i){super(),Q(this,i,et,$,U,{})}}export{rt as default};