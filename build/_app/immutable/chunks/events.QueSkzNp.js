import{F as S,G as h,I as v,D as k,J as D,A as O}from"./runtime.B6xIVx50.js";const T=new Set,q=new Set;function A(a){for(var r=0;r<a.length;r++)T.add(a[r]);for(var n of q)n(a)}function B(a){var p;var r=this,n=r.ownerDocument,g=a.type,e=((p=a.composedPath)==null?void 0:p.call(a))||[],t=e[0]||a.target,s=0,u=a.__root;if(u){var c=e.indexOf(u);if(c!==-1&&(r===document||r===window)){a.__root=r;return}var _=e.indexOf(r);if(_===-1)return;c<=_&&(s=c)}if(t=e[s]||a.target,t!==r){S(a,"currentTarget",{configurable:!0,get(){return t||n}});var y=D,m=O;h(null),v(null);try{for(var o,d=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var i=t["__"+g];if(i!==void 0&&!t.disabled)if(k(i)){var[w,...b]=i;w.apply(t,[a,...b])}else i.call(t,a)}catch(f){o?d.push(f):o=f}if(a.cancelBubble||l===r||l===null)break;t=l}if(o){for(let f of d)queueMicrotask(()=>{throw f});throw o}}finally{a.__root=r,delete a.currentTarget,h(y),v(m)}}}export{T as a,A as d,B as h,q as r};
