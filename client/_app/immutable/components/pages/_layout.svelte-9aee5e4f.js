import{S as F,i as H,s as L,k as h,q as x,l as d,m as p,r as N,h as _,n as u,b,B as f,u as J,A as O,v as D,a as k,w as B,c as w,x as S,f as y,t as A,y as G,C as K,D as Q,E as T,F as U}from"../../chunks/index-dc6137a2.js";import{b as j}from"../../chunks/paths-6cd3a76e.js";import{C as W}from"../../chunks/Contact-27885b4d.js";function X(i){let t,s,l;return{c(){t=h("a"),s=x(i[0]),this.h()},l(n){t=d(n,"A",{class:!0,href:!0});var a=p(t);s=N(a,i[0]),a.forEach(_),this.h()},h(){u(t,"class","nav-link svelte-im92a8"),u(t,"href",l=j+"/"+i[1])},m(n,a){b(n,t,a),f(t,s)},p(n,[a]){a&1&&J(s,n[0]),a&2&&l!==(l=j+"/"+n[1])&&u(t,"href",l)},i:O,o:O,d(n){n&&_(t)}}}function Y(i,t,s){let{text:l}=t,{link:n}=t;return i.$$set=a=>{"text"in a&&s(0,l=a.text),"link"in a&&s(1,n=a.link)},[l,n]}class z extends F{constructor(t){super(),H(this,t,Y,X,L,{text:0,link:1})}}function Z(i){let t,s,l,n,a,v,r,e,o,$,I,V,g,q,C;return l=new z({props:{text:"Home",link:""}}),a=new z({props:{text:"RANDOM DOG API",link:"randog"}}),{c(){t=h("nav"),s=h("div"),D(l.$$.fragment),n=k(),D(a.$$.fragment),v=k(),r=h("a"),e=x("Skills"),o=k(),$=h("a"),I=x("Contact"),V=k(),g=h("div"),q=x("Aigerim Gilmanova"),this.h()},l(c){t=d(c,"NAV",{class:!0});var E=p(t);s=d(E,"DIV",{class:!0});var m=p(s);B(l.$$.fragment,m),n=w(m),B(a.$$.fragment,m),v=w(m),r=d(m,"A",{class:!0,href:!0});var M=p(r);e=N(M,"Skills"),M.forEach(_),o=w(m),$=d(m,"A",{class:!0,href:!0});var P=p($);I=N(P,"Contact"),P.forEach(_),V=w(m),g=d(m,"DIV",{class:!0});var R=p(g);q=N(R,"Aigerim Gilmanova"),R.forEach(_),m.forEach(_),E.forEach(_),this.h()},h(){u(r,"class","nav-link svelte-1ggh7wd"),u(r,"href","/#skills"),u($,"class","nav-link svelte-1ggh7wd"),u($,"href","#contact"),u(g,"class","logo svelte-1ggh7wd"),u(s,"class","navBar svelte-1ggh7wd"),u(t,"class","svelte-1ggh7wd")},m(c,E){b(c,t,E),f(t,s),S(l,s,null),f(s,n),S(a,s,null),f(s,v),f(s,r),f(r,e),f(s,o),f(s,$),f($,I),f(s,V),f(s,g),f(g,q),C=!0},p:O,i(c){C||(y(l.$$.fragment,c),y(a.$$.fragment,c),C=!0)},o(c){A(l.$$.fragment,c),A(a.$$.fragment,c),C=!1},d(c){c&&_(t),G(l),G(a)}}}class tt extends F{constructor(t){super(),H(this,t,null,Z,L,{})}}function et(i){let t,s,l,n,a;t=new tt({});const v=i[1].default,r=K(v,i,i[0],null);return n=new W({}),{c(){D(t.$$.fragment),s=k(),r&&r.c(),l=k(),D(n.$$.fragment)},l(e){B(t.$$.fragment,e),s=w(e),r&&r.l(e),l=w(e),B(n.$$.fragment,e)},m(e,o){S(t,e,o),b(e,s,o),r&&r.m(e,o),b(e,l,o),S(n,e,o),a=!0},p(e,[o]){r&&r.p&&(!a||o&1)&&Q(r,v,e,e[0],a?U(v,e[0],o,null):T(e[0]),null)},i(e){a||(y(t.$$.fragment,e),y(r,e),y(n.$$.fragment,e),a=!0)},o(e){A(t.$$.fragment,e),A(r,e),A(n.$$.fragment,e),a=!1},d(e){G(t,e),e&&_(s),r&&r.d(e),e&&_(l),G(n,e)}}}function at(i,t,s){let{$$slots:l={},$$scope:n}=t;return i.$$set=a=>{"$$scope"in a&&s(0,n=a.$$scope)},[n,l]}class rt extends F{constructor(t){super(),H(this,t,at,et,L,{})}}export{rt as default};
