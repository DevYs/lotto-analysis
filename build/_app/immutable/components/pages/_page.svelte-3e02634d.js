import{S as M,i as T,s as $,k as f,a as S,I as A,l as _,h as a,c as q,m as d,n as h,D as m,b as u,B as p,J as C,e as k,q as v,r as b}from"../../chunks/index-8e65a02c.js";const y=o=>{o.sort(()=>Math.random()-.5)},B=()=>{let o=[];for(let i=1;i<=45;i++)o.push(i);y(o),o.push(o.slice(0,3)[0]),o.push(o.slice(0,3)[1]),o.push(o.slice(0,3)[2]);const e=[];e.push(o.slice(0,6).sort((i,l)=>i-l)),e.push(o.slice(6,12).sort((i,l)=>i-l)),e.push(o.slice(12,18).sort((i,l)=>i-l)),e.push(o.slice(18,24).sort((i,l)=>i-l)),e.push(o.slice(24,30).sort((i,l)=>i-l)),e.push(o.slice(30,36).sort((i,l)=>i-l)),e.push(o.slice(36,42).sort((i,l)=>i-l)),e.push(o.slice(42,48).sort((i,l)=>i-l)),o=[];for(let i=1;i<=45;i++)o.push(i);return y(o),e.push(o.slice(0,6).sort((i,l)=>i-l)),e.push(o.slice(6,12).sort((i,l)=>i-l)),e};function E(o,e,i){const l=o.slice();return l[1]=e[i],l[3]=i,l}function L(o,e,i){const l=o.slice();return l[4]=e[i],l[3]=i,l}function D(o){let e,i=o[4]+"",l;return{c(){e=f("li"),l=v(i),this.h()},l(s){e=_(s,"LI",{class:!0});var t=d(e);l=b(t,i),t.forEach(a),this.h()},h(){h(e,"class","type-45 svelte-16irwgo")},m(s,t){u(s,e,t),m(e,l)},p,d(s){s&&a(e)}}}function J(o){let e,i=o[4]+"",l;return{c(){e=f("li"),l=v(i),this.h()},l(s){e=_(s,"LI",{class:!0});var t=d(e);l=b(t,i),t.forEach(a),this.h()},h(){h(e,"class","type-40 svelte-16irwgo")},m(s,t){u(s,e,t),m(e,l)},p,d(s){s&&a(e)}}}function N(o){let e,i=o[4]+"",l;return{c(){e=f("li"),l=v(i),this.h()},l(s){e=_(s,"LI",{class:!0});var t=d(e);l=b(t,i),t.forEach(a),this.h()},h(){h(e,"class","type-30 svelte-16irwgo")},m(s,t){u(s,e,t),m(e,l)},p,d(s){s&&a(e)}}}function O(o){let e,i=o[4]+"",l;return{c(){e=f("li"),l=v(i),this.h()},l(s){e=_(s,"LI",{class:!0});var t=d(e);l=b(t,i),t.forEach(a),this.h()},h(){h(e,"class","type-20 svelte-16irwgo")},m(s,t){u(s,e,t),m(e,l)},p,d(s){s&&a(e)}}}function P(o){let e,i=o[4]+"",l;return{c(){e=f("li"),l=v(i),this.h()},l(s){e=_(s,"LI",{class:!0});var t=d(e);l=b(t,i),t.forEach(a),this.h()},h(){h(e,"class","type-10 svelte-16irwgo")},m(s,t){u(s,e,t),m(e,l)},p,d(s){s&&a(e)}}}function w(o){let e;function i(t,r){if(1<=t[4]&&t[4]<=10)return P;if(11<=t[4]&&t[4]<=20)return O;if(21<=t[4]&&t[4]<=30)return N;if(31<=t[4]&&t[4]<=40)return J;if(41<=t[4]&&t[4]<=45)return D}let l=i(o),s=l&&l(o);return{c(){s&&s.c(),e=k()},l(t){s&&s.l(t),e=k()},m(t,r){s&&s.m(t,r),u(t,e,r)},p(t,r){s&&s.p(t,r)},d(t){s&&s.d(t),t&&a(e)}}}function I(o){let e,i,l=o[1],s=[];for(let t=0;t<l.length;t+=1)s[t]=w(L(o,l,t));return{c(){e=f("ul");for(let t=0;t<s.length;t+=1)s[t].c();i=S(),this.h()},l(t){e=_(t,"UL",{class:!0});var r=d(e);for(let c=0;c<s.length;c+=1)s[c].l(r);i=q(r),r.forEach(a),this.h()},h(){h(e,"class","svelte-16irwgo")},m(t,r){u(t,e,r);for(let c=0;c<s.length;c+=1)s[c].m(e,null);m(e,i)},p(t,r){if(r&1){l=t[1];let c;for(c=0;c<l.length;c+=1){const n=L(t,l,c);s[c]?s[c].p(n,r):(s[c]=w(n),s[c].c(),s[c].m(e,i))}for(;c<s.length;c+=1)s[c].d(1);s.length=l.length}},d(t){t&&a(e),C(s,t)}}}function U(o){let e,i,l,s=o[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=I(E(o,s,r));return{c(){e=f("meta"),i=S(),l=f("section");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){const c=A("svelte-1gd29ef",document.head);e=_(c,"META",{name:!0,content:!0}),c.forEach(a),i=q(r),l=_(r,"SECTION",{class:!0});var n=d(l);for(let g=0;g<t.length;g+=1)t[g].l(n);n.forEach(a),this.h()},h(){document.title="Lotto number generator",h(e,"name","description"),h(e,"content","Lotto number generator"),h(l,"class","svelte-16irwgo")},m(r,c){m(document.head,e),u(r,i,c),u(r,l,c);for(let n=0;n<t.length;n+=1)t[n].m(l,null)},p(r,[c]){if(c&1){s=r[0];let n;for(n=0;n<s.length;n+=1){const g=E(r,s,n);t[n]?t[n].p(g,c):(t[n]=I(g),t[n].c(),t[n].m(l,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},i:p,o:p,d(r){a(e),r&&a(i),r&&a(l),C(t,r)}}}function j(o){const e=B();return console.log(e),[e]}class F extends M{constructor(e){super(),T(this,e,j,U,$,{})}}export{F as default};
