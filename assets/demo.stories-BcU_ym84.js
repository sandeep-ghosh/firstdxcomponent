var Hi=Object.defineProperty;var Bi=(t,n,e)=>n in t?Hi(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var Z=(t,n,e)=>Bi(t,typeof n!="symbol"?n+"":n,e);import{j as l,r as Wi}from"./index-SNvzCnZR.js";import{r as f}from"./index-C5e9SFkp.js";import{Q as de,u as er,G as So,R as Gi,H as xn,N as $o,p as Vi,O as tr,t as qi,T as Yi,U as Xi,C as Zi,f as Te,b as xe,W as Jt,o as Ee,d as _e,F as re,I as Pe,X as qe,q as L,v as je,Y as Qt,S as Rt,A as y,z as it,e as X,Z as Ki,_ as Nr,y as St,E as Bn,$ as Ji,a0 as xt,x as _n,a1 as Ct,a2 as vo,B as Ne,J as Zt,h as To,a3 as Qi,s as es,i as ye,K as nr,D as Wn,a4 as rr,r as or,M as bn,a5 as Eo,a6 as ts,a7 as ns,l as tt,V as Kt,a8 as Gn,k as rs,a9 as ir,aa as sr,ab as os,w as is,m as ss}from"./Badges.test-ids-CXhtf5TT.js";import"./index-vofeE47f.js";import"./iframe-E3Xy3AI7.js";const as=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,Vn=t=>t.charAt(0).toUpperCase()+t.slice(1),Yt=t=>{var e;const n=(e=t.current)==null?void 0:e.getRootNode();if(!(!de(n,Document)&&!de(n,ShadowRoot))){for(const r of n.childNodes)if(r.contains(t.current)&&de(r,HTMLElement))return r}},ls=(t,n,e)=>{const r=[];if(n.global||n.sticky){let o=0,i;for(;i=n.exec(t);)r.push(t.slice(o,i.index),e(i[0])),o=i.index+i[0].length;r.push(t.slice(o))}else{const o=n.exec(t);o?r.push(t.slice(0,o.index),e(o[0]),t.slice(o.index+o[0].length)):r.push(t)}return r.flatMap((o,i)=>o?l.jsx(f.Fragment,{children:o},i):[])},nt=()=>{const{direction:t}=er();return f.useMemo(()=>t==="ltr"?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[t])},zr=["button","a","input","li","legend"],cs=({focusEl:t,scope:n,scopeSelector:e,selector:r,orientation:o="vertical",focusDescendantEl:i,clearFocusDescendant:a,focusReturnEl:c,clearFocusReturn:u,currentDescendantId:d,onClick:p,preventInitialScroll:g,pauseDescendantEvaluation:m=!1,clearPreventScroll:b},w=[])=>{const[S,_]=f.useState(0),x=f.useRef(""),$=f.useRef(m),[I,O]=f.useState(null),[T,P]=f.useState(null),[k,B]=f.useState(),{rtl:W}=nt(),A=f.useCallback(()=>{k==null||k.forEach(N=>{N.setAttribute("data-current","false")})},[k]),j=f.useCallback(N=>{A(),B(N?Array.from(N).filter(R=>de(R,HTMLElement)):null)},[k]),V=f.useCallback(({clear:N}={clear:!1})=>{var Y;const R=[];if(k&&k.length&&k.forEach(C=>{C.id=C.id||So(),R.push(C.id)}),N){const C=(Y=t==null?void 0:t.getAttribute("aria-owns"))==null?void 0:Y.split(" "),U=C==null?void 0:C.filter(G=>!R.includes(G));t==null||t.setAttribute("aria-owns",(U==null?void 0:U.join(" "))||"")}else t==null||t.setAttribute("aria-owns",R.join(" "))},[t,k]),F=f.useCallback(()=>{if(m)return;let N=n;if(N&&de(N,HTMLElement)){if(e&&(N=N.querySelector(e)),!N){j(null);return}if(r){const R=N.querySelectorAll(r);j(R)}else{const R=N.querySelectorAll(Gi);j(R)}}else j(null);T===null&&P(0)},[n,e,r,m,T]);return f.useEffect(()=>{$.current=m},[m]),f.useEffect(()=>{if(!n||!t)return;n.setAttribute("data-active-scope",xn()===t?"true":"false");const N=()=>{n.setAttribute("data-active-scope","true")},R=()=>{n.setAttribute("data-active-scope","false")};return t.addEventListener("focus",N),t.addEventListener("blur",R),()=>{t.removeEventListener("focus",N),t.removeEventListener("blur",R)}},[n,t]),f.useEffect(()=>{m||F()},[m]),f.useEffect(()=>{const N=setTimeout(()=>{F(),$.current||P(0)},0);return()=>clearTimeout(N)},[...w]),f.useEffect(()=>{m?(A(),V({clear:!0})):(V(),_(Math.random()))},[m,t,k]),f.useEffect(()=>{const N=()=>{u==null||u(),b==null||b(),T!==null&&T+1<k.length?P(T+1):P(0)},R=()=>{u==null||u(),b==null||b(),T!==null&&T-1>-1?P(T-1):P(k.length-1)},Y=C=>{k!=null&&k.length&&(["ArrowDown","ArrowUp"].includes(C.key)&&o==="vertical"&&C.preventDefault(),["ArrowLeft","ArrowRight"].includes(C.key)&&o==="horizontal"&&C.preventDefault(),setTimeout(()=>{var U;switch(C.key){case"ArrowDown":o==="vertical"&&N();break;case"ArrowUp":o==="vertical"&&R();break;case"ArrowRight":o==="horizontal"&&(W?R():N());break;case"ArrowLeft":o==="horizontal"&&(W?N():R());break;case"Enter":if(T!==null){if(p){p(k[T]);break}const G=k[T].nodeName.toLowerCase();zr.includes(G)?k[T].click():(U=k[T].querySelector(`${zr.join(",")}`))==null||U.click()}break}},0))};return!m&&t&&(k!=null&&k.length)&&!d&&t.addEventListener("keydown",Y),()=>{t==null||t.removeEventListener("keydown",Y)}},[t,T,k,m]),f.useEffect(()=>{!m&&k&&d&&k.forEach((N,R)=>{N.id===d&&P(R)})},[d,k,m]),f.useEffect(()=>{if($.current)return;const N=I||T,R=c==null?void 0:c.id;let Y;const C=i==null?void 0:i.id;let U,G=!1;if(k&&k.length){if(k.forEach((J,z)=>{I===null&&J.id===C&&(U=z,G=!0,O(z)),J.id===R&&(Y=z),J.setAttribute("data-current","false")}),Y&&Y!==T){P(Y),u==null||u();return}if(G&&U!==void 0){_(Math.random()),P(U);return}if(N!==null&&k[N]){const J=k[N];if(J.setAttribute("data-current","true"),t==null||t.setAttribute("aria-activedescendant",J.id),J.id!==x.current&&!g){const z=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;z==null||z.call(J,!1)}I!==null&&(O(null),a==null||a()),x.current=J.id}}return()=>{t==null||t.removeAttribute("aria-activedescendant")}},[k,T,i,t,S]),{activeDescendant:T!==null&&k?k[T]:void 0,descendants:k||null}},ds=({loading:t,descendants:n,previousActiveDescendant:e,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:i,scrollEl:a})=>{f.useEffect(()=>{if(t&&n&&n.length&&r){const u=[...n].pop(),d=(u==null?void 0:u.id)||void 0;let p;return d===r.id?(a&&(a.scrollTop=a.scrollHeight-a.offsetHeight),(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{i(u)},0))):(o==null?void 0:o.id)!==r.id&&(p=setTimeout(()=>{i(r)},0)),()=>clearTimeout(p)}},[t,n,e,r,a,o])},us=`
  a[href],
  button:enabled,
  input[type='checkbox']:enabled,
  input[type='radio']:enabled
`,fs=(t,{cycle:n=!0,selector:e=us,dir:r="up-down",allowTabFocus:o=!0,updateTabIndex:i=!0,initialFocusElement:a}={},c=[])=>{const[u,d]=r==="up-down"?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"],p=f.useCallback((m,b)=>{const w=Array.from(m.querySelectorAll(e));if(w.length>0){let S=w.findIndex(_=>_===a);S===-1&&(S=0),w[S].tabIndex=o&&!b?0:-1,w.splice(S,1),w.forEach(_=>{de(_,HTMLElement)&&(_.checked||(_.tabIndex=-1),_.querySelector('input[type="radio"]:checked')&&(_.tabIndex=0))})}},[e,a,...c]);$o([t],m=>{t.current&&i&&p(t.current,m)});const g=f.useCallback(m=>{const b=t.current;if(!b||(["Home","End",u,d].includes(m.key)&&m.preventDefault(),!Vi))return;const w=Array.from(b.querySelectorAll(e)).filter(I=>de(I,HTMLElement));if(!w.length)return;const S=b.getRootNode();if(!de(S,Document)&&!de(S,ShadowRoot))return;const _=w.indexOf(S.activeElement),x=w.length-1;let $;if(m.key==="Home"||m.key===u&&_===-1){const O=Array.from(b.querySelectorAll(e)).findIndex(T=>T===a);$=O===-1?0:O}else if(m.key==="End"||m.key===d&&_===-1){const O=Array.from(b.querySelectorAll(e)).findIndex(T=>T===a);$=O===-1?x:O}else if(m.key==="Enter"){i&&p(b,!0);return}else if(m.key===u)if(_===x){if(!n)return;$=0}else $=_+1;else if(m.key===d)if(_===0){if(!n)return;$=x}else $=_-1;else return;w[$].focus()},[t.current,n,e,a,...c]);f.useEffect(()=>{const m=t.current;if(m)return i&&setTimeout(()=>{p(m,!1)},0),m.addEventListener("keydown",g),()=>{m.removeEventListener("keydown",g)}},[t.current,e,g,a,...c])},hs=(t,n,e,r=[])=>{const[o,i]=f.useState(void 0);return f.useEffect(()=>{if(!n.current)return;const a=requestAnimationFrame(()=>{const c=n.current;if(!c){i(void 0);return}if(c.clientHeight===0&&c.clientWidth===0){i(void 0);return}const d=tr(t).some(x=>c.contains(x)&&x!==c&&!(e!=null&&e.some($=>$.current===x))),p=window.getComputedStyle(c),g=p.overflowY==="auto"||p.overflowY==="scroll",m=p.overflowX==="auto"||p.overflowX==="scroll",[b,w]=qi(c);i(!d&&(g&&w||m&&b)?0:void 0)});return()=>{cancelAnimationFrame(a)}},r),o},ko=(t,n,e,r,o)=>{f.useEffect(()=>{var a;let i=null;if(n>0){const c=(t==null?void 0:t.current)??((a=o==null?void 0:o.current)==null?void 0:a.getRootNode())??document;if(!de(c,HTMLElement,SVGElement,Document,ShadowRoot))return;const u=c.querySelectorAll(r);u.length>n&&(i=u[n])}if(i){const c=new IntersectionObserver(u=>{u[0].isIntersecting&&e()},{root:t.current??null});return c.observe(i),()=>{c.disconnect()}}},[e,n])},Io=(t,n,e)=>{var a;const{portalTarget:r}=er(),o=((a=r==null?void 0:r.ownerDocument)==null?void 0:a.defaultView)||window,i=f.useCallback(c=>{const u=c.composedPath(),d=u[0];if(!de(d,Node))return;let p=0,g=1;for(;!de(u[p],Document);){const b=u[p],w=u[g];if(!b||!w)return;if(de(w,DocumentFragment)||de(w,Document)){if(!de(b,Node)||!w.contains(b))return;p=g}else if(de(b,DocumentFragment)){if(!de(w,Element)||w.shadowRoot!==b)return;p=g}g+=1}Yi(n).flatMap(b=>!de(b,Element)&&!de(b,Document)&&!de(b,DocumentFragment)?[b]:[b,...Xi(b)]).every(b=>b!==d&&!b.contains(d))&&e(c)},[...n,e]);f.useEffect(()=>{const c=Array.isArray(t)?t:[t];return c.forEach(u=>{var d;return(d=o==null?void 0:o.document)==null?void 0:d.addEventListener(u,i)}),()=>{c.forEach(u=>{var d;return(d=o==null?void 0:o.document)==null?void 0:d.removeEventListener(u,i)})}},[t,i])},ar=t=>{const n=f.useRef();return f.useLayoutEffect(()=>{n.current=t},[t]),n.current},ps=t=>n=>l.jsx(Zi,{children:l.jsx(t,{...n})}),ms="budicon",gs="galaxy",bs=()=>l.jsx("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),ys="0 0 25 25",ws=Object.freeze(Object.defineProperty({__proto__:null,Component:bs,name:gs,set:ms,viewBox:ys},Symbol.toStringTag,{value:"Module"})),xs="streamline",_s="folder-empty",Ss=()=>l.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),$s="0 0 18 18",vs=Object.freeze(Object.defineProperty({__proto__:null,Component:Ss,name:_s,set:xs,viewBox:$s},Symbol.toStringTag,{value:"Module"})),Ao=Te("empty-state",["message","icon"]);it(ws);it(vs);const lr=L.div(({theme:t})=>{const n=je(()=>Qt(t.base.palette["foreground-color"],t.base.transparency["transparent-2"]));return y`
    height: 100%;

    ${Rt} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${n};
    }
  `});lr.defaultProps=X;const Ts=f.forwardRef(function(n,e){const{base:{"icon-set":r}}=Jt(),o=Ee(),{testId:i,message:a=o("no_items"),...c}=n,u=_e(i,Ao);return l.jsxs(re,{"data-testid":u.root,...c,as:lr,ref:e,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[l.jsx(Pe,{"data-testid":u.icon,name:r==="streamline"?"folder-empty":"galaxy"}),l.jsx(qe,{"data-testid":u.message,variant:"secondary",children:a})]})}),Co=xe(Ts,Ao),Ot=f.createContext({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:So(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),Lo=Te("meta-list",[]),Es=L.ul(({wrapItems:t})=>y`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!t&&y`
      white-space: nowrap;
    `}
  `),Fr=L.li(({wrapItems:t})=>y`
    min-width: 0;
    display: inline-block;

    ${t?y`
          overflow-wrap: break-word;
        `:y`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),ks=f.forwardRef(function({testId:n,items:e,wrapItems:r=!0,...o},i){const a=_e(n,Lo),c=e.length<=1?"none":void 0;return l.jsx(re,{"data-testid":a.root,...o,as:Es,role:c,container:{colGap:.5,alignItems:"center",wrap:r?"wrap":"nowrap"},wrapItems:r,ref:i,children:e.flatMap((u,d,p)=>u?[l.jsx(qe,{as:Fr,variant:"secondary",role:c,wrapItems:r,children:u},`${d+0}`)].concat(d!==p.length-1?[l.jsx(qe,{as:Fr,"aria-hidden":!0,variant:"secondary",children:"•"},`${d+0}-sep`)]:[]):[])})}),Is=xe(ks,Lo),Ur=t=>["between","around","evenly"].includes(t)?`space-${t}`:t,Hr=t=>{if(!t)return;if(t===!0)return y`
      display: grid;
    `;const{inline:n,pad:e,cols:r,autoCols:o,rows:i,autoRows:a,autoFlow:c,areas:u,template:d,colGap:p,rowGap:g,gap:m,justifyItems:b,justifyContent:w,alignItems:S,alignContent:_}=t;return y`
    display: ${n?"inline-grid":"grid"};

    ${e!==void 0&&y`
      padding: ${({theme:{base:{spacing:x}}})=>(Array.isArray(e)?e:[e]).map($=>`calc(${$} * ${x})`).join(" ")};
    `}

    ${r&&y`
      grid-template-columns: ${r};
    `}

    ${o&&y`
      grid-auto-columns: ${o};
    `}

    ${i&&y`
      grid-template-rows: ${i};
    `}

    ${a&&y`
      grid-auto-rows: ${a};
    `}

    ${c&&y`
      grid-auto-flow: ${c};
    `}

    ${u&&y`
      grid-template-areas: ${u};
    `}

    ${d&&y`
      grid-template: ${d};
    `}

    ${m!==void 0&&y`
      gap: calc(${m} * ${x=>x.theme.base.spacing});
    `}

    ${p!==void 0&&y`
      column-gap: calc(${p} * ${x=>x.theme.base.spacing});
    `}

    ${g!==void 0&&y`
      row-gap: calc(${g} * ${x=>x.theme.base.spacing});
    `}

    ${b&&y`
      justify-items: ${b};
    `}

    ${w&&y`
      justify-content: ${Ur(w)};
    `}

    ${S&&y`
      align-items: ${S};
    `}

    ${_&&y`
      align-content: ${Ur(_)};
    `}
  `},Br=t=>{if(!t)return;const{colStart:n,colEnd:e,colStartEnd:r,rowStart:o,rowEnd:i,rowStartEnd:a,area:c,justifySelf:u,alignSelf:d}=t;return y`
    ${n&&y`
      grid-column-start: ${n};
    `}

    ${e&&y`
      grid-column-end: ${e};
    `}

    ${r&&y`
      grid-column: ${r};
    `}

    ${o&&y`
      grid-row-start: ${o};
    `}

    ${i&&y`
      grid-row-end: ${i};
    `}

    ${a&&y`
      grid-row: ${a};
    `}

    ${c&&y`
      grid-area: ${c};
    `}

    ${u&&y`
      justify-self: ${u};
    `}

    ${d&&y`
      align-self: ${d};
    `}
  `},As=["xs","sm","md","lg","xl"],Sn=L.div(({container:t,item:n,theme:{base:{breakpoints:e}},xs:r,sm:o,md:i,lg:a,xl:c})=>{const u={xs:r,sm:o,md:i,lg:a,xl:c};return y`
      ${Hr(t)}
      ${Br(n)}

    ${As.map(d=>{var p,g;return u[d]&&y`
            @media screen and (min-width: ${e[d]}) {
              ${Hr((p=u[d])==null?void 0:p.container)}
              ${Br((g=u[d])==null?void 0:g.item)}
            }
          `})}
    `});Sn.defaultProps=X;const yt=f.forwardRef(function(n,e){return l.jsx(Sn,{...n,ref:e})}),Po=Te("summary-item",["primary","secondary","visual","actions"]),Qe=L.div`
  > ${Ki}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;Qe.defaultProps=X;const cr=L(yt)(({theme:t,isString:n,overflowStrategy:e})=>y`
    ${e==="ellipsis"?y`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:y`
          word-break: break-word;
        `}

    ${n&&y`
      font-weight: ${t.base["font-weight"]["semi-bold"]};
    `}
  `);cr.defaultProps=X;const Ke=L(yt)(({overflowStrategy:t})=>y`
    ${t==="ellipsis"?y`
          overflow: hidden;
          text-overflow: ellipsis;
        `:y`
          word-break: break-word;
        `}
  `),Je=L.div`
  white-space: nowrap;
`,Mo=L.div``,Cs=({visual:t,actions:n})=>`${t?"auto ":""}minmax(0, 1fr)${n?" auto":""}`,Ls=({secondary:t,layout:n,visual:e,actions:r})=>`"${e?"visual ":""}primary${t&&n==="inline"?" secondary":""}${r?" actions":""}"${t&&n==="stacked"?`
"${e?"visual ":""}secondary${r?" actions":""}"`:""}`,Ps=f.forwardRef(function({testId:n,visual:e,primary:r,secondary:o,layout:i="stacked",actions:a,container:c,overflowStrategy:u="wrap",as:d,...p},g){const m=_e(n,Po);return l.jsxs(yt,{"data-testid":m.root,...p,ref:g,container:{cols:Cs({visual:e,actions:a}),colGap:2,areas:Ls({secondary:o,layout:i,visual:e,actions:a}),...c},as:Mo,forwardedAs:d,children:[e&&l.jsx(yt,{"data-testid":m.visual,as:Qe,item:{area:"visual",alignSelf:"center"},children:e}),l.jsx(cr,{"data-testid":m.primary,item:{area:"primary",alignSelf:o&&i==="stacked"?"end":"center"},isString:typeof r=="string",overflowStrategy:u,children:r}),o&&l.jsx(Ke,{"data-testid":m.secondary,item:{area:"secondary",alignSelf:i==="stacked"?"start":"center"},overflowStrategy:u,children:o}),a&&l.jsx(yt,{"data-testid":m.actions,as:Je,item:{area:"actions",alignSelf:"center"},children:a})]})}),dr=xe(Ps,Po),Ms="budicon",Rs="caret-left",Os=()=>l.jsx("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),Ds="0 0 25 25",Ro=Object.freeze(Object.defineProperty({__proto__:null,Component:Os,name:Rs,set:Ms,viewBox:Ds},Symbol.toStringTag,{value:"Module"})),js="budicon",Ns="caret-right",zs=()=>l.jsx("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),Fs="0 0 25 25",Oo=Object.freeze(Object.defineProperty({__proto__:null,Component:zs,name:Ns,set:js,viewBox:Fs},Symbol.toStringTag,{value:"Module"})),Us="budicon",Hs="check",Bs=()=>l.jsx("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),Ws="0 0 25 25",Do=Object.freeze(Object.defineProperty({__proto__:null,Component:Bs,name:Hs,set:Us,viewBox:Ws},Symbol.toStringTag,{value:"Module"})),jo=L.span(({theme:t,variant:n,children:e})=>{const{foreground:r,background:o}=t.components.badges.count[n],i=je(()=>Qt(r,.1)),a=St(t.base["font-size"],t.base["font-scale"]);return y`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${t.base["border-radius"]});
    color: ${r};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${i};
    font-size: ${a.xxs};
    font-weight: ${t.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${e.length===1?y`
          aspect-ratio: 1 / 1;
        `:y`
          padding-inline: ${t.base.spacing};
        `}
  `});jo.defaultProps=X;const Rn=t=>t<1e3?"":1e3<=t&&t<1e6?"K":1e6<=t&&t<1e9?"M":1e9<=t&&t<1e12?"B":1e12<=t&&t<1e15?"T":"",Gs=t=>{for(let n=3;n<15;n+=3){if(t<10**(n+1))return`${`${t}`.slice(0,1)}.${`${t}`.slice(1,2)}${Rn(t)}`;if(t<10**(n+2))return`${`${t}`.slice(0,2)}${Rn(t)}`;if(t<10**(n+3))return`${`${t}`.slice(0,3)}${Rn(t)}`}return"999T+"},Vs=t=>{const n=Math.abs(t);return n<1e3?`${t}`:`${t<0?"-":""}${Gs(n)}`},No=xe(f.forwardRef(function({testId:n,variant:e="default",children:r,...o},i){const a=_e(n,Nr);return Number.isInteger(r)?l.jsx(jo,{"data-testid":a.root,variant:e,...o,ref:i,children:Vs(r)}):null}),Nr),zo=L.mark(({theme:t})=>y`
    color: ${t.base.colors.black};
    background-color: ${t.components.mark["background-color"]};
    font-weight: ${t.components.mark["font-weight"]};
  `);zo.defaultProps=X;const qs=t=>l.jsx(zo,{...t}),et={isItem(t){return Bn(t,"primary")},getItem(t,n){let e;return t.some(r=>this.isItem(r)&&r.id===n?(e=r,!0):r.items?(e=this.getItem(r.items,n),!!e):!1),e},getPath(t,n){let e=[];return t.some(r=>{if(r.id===n)return e=[r],!0;if(r.items){const o=this.getPath(r.items,n);return o.length&&(e=o.concat(r)),!!e.length}return!1}),e},setItem(t,n,e){return t.map(r=>r.id===n?{...e}:r.items?{...r,items:this.setItem(r.items,n,e)}:r)},mapItem(t,n,e){return t.map((r,o,i)=>{let a=r;return r.items&&(a={...a,items:this.mapItem(r.items,n,e)}),this.isItem(a)&&r.id===n&&(a=e(a,o,i)),a})},mapTree(t,n){return t.map((e,r,o)=>{let i=e;return e.items&&(i={...i,items:this.mapTree(e.items,n)}),this.isItem(i)?n(i,r,o):i})},flatten(t,n=[],e={parentFirst:!1}){let r=[],o=[];return t.forEach(i=>{if(this.isItem(i)&&r.push(n.length>0?{...i,ancestors:n}:i),i.items){const a=this.flatten(i.items,[...n,i],e);e.parentFirst?o=[...o,...a]:r=[...r,...a]}}),e.parentFirst?[...r,...o]:r},toggleSelected(t,n,e,r){return this.mapTree(t,o=>{if(this.isItem(o)){if(o.id===n)return{...o,selected:r!==void 0?r:!o.selected};if(e==="single-select")return{...o,selected:!1}}return o})},selectItem(t,n,e){return this.toggleSelected(t,n,e,!0)},deselectItem(t,n,e){return this.toggleSelected(t,n,e,!1)},getSelected(t){return t.reduce((n,e)=>(this.isItem(e)&&e.selected&&(n=[...n,e]),e.items&&(n=[...n,...this.getSelected(e.items)]),n),[])},prependTo(t,n,e){return e?this.mapItem(t,e,r=>({...r,items:[...n,...r.items??[]]})):[...n,...t]},appendTo(t,n,e){return e?this.mapItem(t,e,r=>({...r,items:[...r.items??[],...n]})):[...t,...n]},getNextItem(t,n){if(!n)return t[0];let e;return this.mapItem(t,n,(r,o,i)=>(e=i[o+1],r)),e},getPrevItem(t,n){if(!n)return t[0];let e;return this.mapItem(t,n,(r,o,i)=>(e=i[o-1],r)),e},getParentItem(t,n){if(!n)return;const[,e]=this.getPath(t,n);return e}},mn=y`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;L(Ne)`
  align-self: center;
`;const qn=L(Pe)``,Fo=L.li(({theme:{base:t,components:n},isParentItem:e,itemLayout:r,mode:o="action","aria-selected":i=!1,selectableParent:a=!1})=>{const c=je(()=>xt(.85,t.palette["primary-background"],t.palette.interactive)),u=je(()=>xt(.95,t.palette["primary-background"],t.palette.interactive)),d=n["radio-check"][":checked"]["background-color"],p=je(()=>_n(d));return y`
      min-height: ${t["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${t.spacing});
      padding-inline: ${t.spacing};
      cursor: pointer;

      ${r==="inline"&&y`
        justify-content: flex-start;

        ${Mo} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${Qe}):has(${Ke}):has(${Je}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${Qe}):has(${Ke}):not(:has(${Je})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${Qe}):not(:has(${Ke})):has(${Je}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${Qe}):not(:has(${Ke})):not(
              :has(${Je})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Qe})):has(${Ke}):has(${Je}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${Qe})):has(${Ke}):not(
              :has(${Je})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Qe})):not(:has(${Ke})):has(
              ${Je}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Qe})):not(:has(${Ke})):not(
              :has(${Je})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${cr} {
            ${mn};
          }

          & > ${Ke} {
            ${mn};

            ul {
              li {
                ${mn};
              }
              justify-content: end;
            }
          }

          & > ${Je} > ${Ct} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${t["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${c};
      }

      &:hover {
        ${qn} {
          visibility: visible;
          ${o==="single-select"&&y`
            ${i?y`
                  color: ${d};
                `:y`
                  visibility: hidden;
                `}
          `}
          ${o==="multi-select"&&y`
            ${!i&&y`
              border-color: ${n["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${u};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${e&&!a&&(o==="multi-select"||o==="single-select")&&y`
        padding-inline-start: calc(1.125rem + 2 * ${t.spacing});
      `}

      ${Sn} {
        flex-grow: 1;
      }

      ${qn} {
        margin-inline-start: 0;
        ${o==="single-select"&&y`
          ${i?y`
                color: ${d};
              `:y`
                visibility: hidden;
              `}
        `}
        ${o==="multi-select"&&y`
          ${i?y`
                color: ${p};
                background-color: ${d};
                border: 0.0625rem solid ${n["radio-check"][":checked"]["border-color"]};
              `:y`
                color: transparent;
                border: 0.0625rem solid ${n["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${t["border-radius"]} * ${n.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${n["form-control"][":disabled"]["background-color"]};
        opacity: ${t["disabled-opacity"]};
      }
    `});Fo.defaultProps=X;const Ys=L.div`
  ${Rt} {
    width: 1em;
    height: 1em;
  }

  & > ${vo} {
    ${mn};
  }
`;L.p`
  ${Zt}
`;const Uo=L.li(({theme:t})=>y`
    height: 0.0625rem;
    background-color: ${t.base.palette["border-line"]};
    margin: ${t.base.spacing} 0;
  `);Uo.defaultProps=X;const ur=L.div(({theme:t})=>y`
    min-height: ${t.base["hit-area"]["mouse-min"]};
    font-weight: ${t.base["font-weight"]["semi-bold"]};
    background-color: ${t.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${t.base["hit-area"]["finger-min"]};
    }
  `);ur.defaultProps=X;const Ho=L.legend(({theme:{base:t}})=>{const n=je(()=>xt(.95,t.palette["primary-background"],t.palette.interactive)),e=je(()=>xt(.85,t.palette["primary-background"],t.palette.interactive));return y`
    cursor: pointer;
    width: 100%;
    background-color: ${t.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${t.shadow["focus-inset"]};
      background-color: ${e};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${n};
    }
    color: ${t.palette["foreground-color"]};
    padding: calc(0.5 * ${t.spacing}) ${t.spacing};
    text-align: start;
    border-radius: inherit;

    > ${Sn} {
      grid-column-gap: ${t.spacing};
    }

    ${Rt} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});Ho.defaultProps=X;const fr=L.ul(({theme:t})=>y`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${lr} {
      padding: ${t.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${ur} {
      margin-block-start: ${t.base.spacing};
    }
  `);fr.defaultProps=X;const hr=L.fieldset(({theme:t})=>y`
    background-color: ${t.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);hr.defaultProps=X;const Xs=L(hr)`
  min-width: 10rem;
`,Bo=L.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,yn=L.div(({theme:t})=>y`
    position: relative;
    overflow: hidden;
    transition: height ${t.base.animation.speed} ${t.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);yn.defaultProps=X;const Wo=L.div(({theme:t})=>{const n=`0.0625rem solid ${t.base.palette["border-line"]}`;return y`
    display: flex;
    flex-direction: column;

    &,
    ${yn} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${t.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${t.base.shadow["focus-inset"]};

      @media (forced-colors: active) {
        outline: 0.125rem solid Highlight;
        outline-offset: -0.125rem;
      }
    }

    ${Ji}:first-child {
      + ${yn}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${t.base.spacing};
    }

    > header {
      border-bottom: ${n};
    }

    > footer {
      border-top: ${n};
    }
  `});Wo.defaultProps=X;const Go=Te("menu",["create-new"]),Vo=Te("menu-item",[]);it(Ro,Oo,Do);const Zs=({expandHandler:t})=>{const{end:n}=nt(),e=l.jsx(Pe,{name:`caret-${n}`});return t?l.jsx(Ne,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:t,children:e}):e},Ks=({ancestors:t=[]})=>{const n=t.length>2,e=n?[t[0],t[t.length-1]]:t,{end:r}=nt();return l.jsx(re,{container:{gap:.5,alignItems:"center"},as:Ys,title:t.map(o=>et.isItem(o)?o.primary:o.label).join(" > "),children:e.map((o,i,a)=>{const c=et.isItem(o)?o.primary:o.label;return l.jsxs(f.Fragment,{children:[l.jsx(qe,{variant:"secondary",children:c}),i<a.length-1&&l.jsxs(l.Fragment,{children:[l.jsx(qe,{variant:"secondary",children:l.jsx(Pe,{name:`caret-${r}`})}),n&&l.jsxs(l.Fragment,{children:[l.jsx(qe,{variant:"secondary",children:"…"}),l.jsx(qe,{variant:"secondary",children:l.jsx(Pe,{name:`caret-${r}`})})]})]})]},o.id)})})},Js=({testId:t,id:n,primary:e,secondary:r,ancestors:o,visual:i,count:a,items:c,selected:u,partial:d,href:p,tooltip:g,onClick:m,onExpand:b,disabled:w,role:S="menuitem",..._})=>{const x=Ee(),{mode:$,onItemClick:I,itemLayout:O,accent:T,variant:P,setFocusDescendant:k,getScopedItemId:B,arrowNavigationUnsupported:W}=f.useContext(Ot),A=_e(t,Vo),j=$==="single-select"||$==="multi-select",V=c&&typeof u=="boolean",F=f.useMemo(()=>B(n),[n,B]),N=`${n}-count`,R=`${n}-secondary`,Y=f.useCallback(te=>{if(te.detail>0){const Re=te.target,se=Re.getAttribute("role")===S?Re:Re.closest(`li[role="${S}"]`);se&&k(se)}m==null||m(n,te),I==null||I(n,te)},[m,I,n]),C=f.useCallback(te=>{b==null||b(n,te),te.stopPropagation()},[b,n]);let U;if(T&&!c){const te=typeof T=="function"?T(e):T;U=ls(e,te,ge=>l.jsx(qs,{children:ge}))}const G=o?l.jsx(Ks,{ancestors:o}):r&&l.jsx(Is,{items:r,id:R}),[J,z]=To(),ee=l.jsxs(l.Fragment,{children:[l.jsx(dr,{ref:z,primary:U||(c?e:l.jsx(qe,{children:e})),secondary:G,layout:O,visual:i,actions:c||a?l.jsxs(re,{container:{gap:1,alignItems:"center",justify:"center"},children:[a!==void 0&&l.jsx(No,{id:N,"aria-label":x("menu_item_count",[a]),children:a}),c&&l.jsx(Zs,{expandHandler:V?C:void 0})]}):void 0,container:{colGap:1}}),g&&l.jsx(Qi,{target:J,hideDelay:"none",showDelay:"short",children:g})]}),Me=f.useMemo(()=>{const te=x("menu_collapsed",[e]);return c?W?x("menu_item_shift_space_expand_collapse",[te]):x("menu_item_expand_arrow",[te]):e},[u,e,c]),Q=f.useMemo(()=>{const te=!!r;let ge;return te?(ge=R,a!==void 0&&a>=0&&(ge=`${ge} ${N}`)):a!==void 0&&a>=0?ge=N:ge="",ge},[c,r,N,R]);return l.jsxs(re,{"data-testid":A.root,..._,container:{alignItems:"center",justify:"between",gap:1},id:F,as:Fo,"aria-label":Me,"aria-describedby":Q,role:S,"aria-disabled":w,"data-expand":!!c,itemLayout:O,tabIndex:-1,disabled:w,onMouseDown:te=>{te.preventDefault()},onClick:te=>{if(!w)return c&&typeof u!="boolean"?C(te):Y(te)},onMouseEnter:P==="flyout"?C:void 0,href:p,mode:$,isParentItem:!!c,"aria-selected":!!u,selectableParent:V,children:[j&&(!c||V)&&l.jsx(qn,{name:"check"}),p&&!j?l.jsx(es,{href:p,tabIndex:"-1",children:ee}):ee]})},pr=xe(Js,Vo),Yn=(t,n,e,r)=>{var u,d;const o=!!((u=t.firstElementChild)!=null&&u.matches("legend")),i=[':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'],a=t.querySelectorAll(i.join(", "))[Math.max(Math.min(r-(o?2:1),e-1),0)];let c;if(a){const p=t.getBoundingClientRect().top,g=a.getBoundingClientRect(),m=((d=t.querySelector(":scope > ul"))==null?void 0:d.scrollTop)??0;let b=g.bottom;e>r&&(b=(g.top+g.bottom)/2),c=b-p+m}n.style.height=c?`${c}px`:""},qo=({id:t,label:n,items:e,itemRole:r})=>{const{componentId:o}=f.useContext(Ot),i=`${o}-${t}`;return l.jsxs("li",{role:"presentation",children:[l.jsx(re,{container:{alignItems:"center",pad:[.5,1]},as:ur,id:i,children:n}),l.jsx("ul",{role:"group","aria-labelledby":i,children:e.length>0&&e.map(a=>f.createElement(pr,{...a,key:a.id,role:r??"menuitem"}))})]})},bt=t=>Array.isArray(t.items),Yo=f.forwardRef(function({items:n,parent:e,menuRole:r},o){const i=Ee(),a=ye(o),c=f.useRef(null),u=f.useRef(null),d=f.useRef(null),[p,g]=f.useState(),{componentId:m,loadMore:b,loading:w,scrollAt:S,emptyText:_,onItemExpand:x,pushFlyoutId:$,flyOutActiveIdStack:I,updateActiveDescendants:O,updateParentDescendantStack:T}=f.useContext(Ot),{announcePolite:P}=nr();ko(c,n.length-1,()=>{var A;b==null||b((A=e==null?void 0:e.item)==null?void 0:A.id)},":scope > li"),Wn(()=>{if(p){const A=n.find(j=>j.id===p.id);A&&bt(A)?g(A):g(void 0)}},[p,n]),f.useEffect(()=>{n.some(j=>I.includes(j.id))||(d.current=null,g(void 0))},[I]),f.useEffect(()=>{n.length===0&&!w&&P({message:_??i("no_items")})},[n.length,w]);const k=f.useMemo(()=>n.length?n.map(A=>et.isItem(A)?f.createElement(pr,{...A,key:A.id,"aria-haspopup":!!A.items,"aria-expanded":A.items?A.id===(p==null?void 0:p.id):void 0,role:r==="listbox"?"option":"menuitem",onExpand:(j,V)=>{var F;A.items?(d.current=V.currentTarget,g(bt(A)?A:void 0),(F=A==null?void 0:A.onExpand)==null||F.call(A,j,V),x==null||x(j,V),$(A.id||m),O(),T&&T(d.current.closest("li"))):(d.current=null,g(void 0))}}):f.createElement(qo,{...A,key:A.id,itemRole:r==="listbox"?"option":"menuitem"})):w?null:l.jsx(Co,{message:_,forwardedAs:"li"}),[n,w,_,p,I]),B=l.jsxs(fr,{ref:c,role:r,children:[k,w&&!p&&l.jsx(Bo,{children:l.jsx(rr,{placement:"local"})})]});f.useLayoutEffect(()=>{g(void 0),a.current&&(u.current=a.current.parentElement,Yn(a.current,a.current,n.length,S))},[n]);const W=f.useCallback(()=>{p&&g(void 0)},[p]);return l.jsxs(l.Fragment,{children:[l.jsx(Xs,{ref:a,onScroll:W,"data-flyout-menu-parent-id":m,"data-flyout-menu-id":(e==null?void 0:e.item.id)||m,children:B}),p&&a.current&&l.jsx(or,{target:d.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:l.jsx(Yo,{items:p.items,parent:{el:a.current,item:p,siblingItems:n,setExpandedItem:g,returnFocusRef:d},menuRole:r})})]})}),Qs="21.875rem",Wr="calc(100vw - 20rem)",ea=.05,ta="budicon",na="drag",ra=()=>l.jsx("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),oa="0 0 25 25",ia=Object.freeze(Object.defineProperty({__proto__:null,Component:ra,name:na,set:ta,viewBox:oa},Symbol.toStringTag,{value:"Module"})),sa="budicon",aa="arrow-micro-up-down",la=()=>l.jsx("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),ca="0 0 25 25",da=Object.freeze(Object.defineProperty({__proto__:null,Component:la,name:aa,set:sa,viewBox:ca},Symbol.toStringTag,{value:"Module"}));it(ia);it(da);const ua=L(Ne)(({rotateIcon:t})=>y`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${Zt};
    }

    ${t&&y`
      ${Rt} {
        transform: rotate(90deg);
      }
    `}
  `),Xo=L.div(({theme:t})=>y`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${t.base.animation.speed} ${t.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${t.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${t.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${t.base.palette.interactive};
    }

    ${Eo} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${t.base.spacing});
      translate: 0 -50%;
      box-shadow: ${t.base.shadow.focus};
    }
  `);Xo.defaultProps=X;const fa=f.forwardRef(function({onMouseDown:n,onKeyDown:e},r){const o=ye(r),i=Ee(),[a,c]=f.useState(!1),[u,d]=f.useState(!1);bn(()=>{c(!1),d(!1)});const p=b=>{b.code==="Space"&&(b.preventDefault(),d(!u)),e==null||e(b,u)},g=b=>{const w=Yt(o);w&&(w.style.setProperty("user-select","none"),c(!0),n==null||n(b))},m=()=>{const b=Yt(o);b&&(b.style.removeProperty("user-select"),c(!1))};return l.jsx(Xo,{onMouseDown:g,onMouseUp:m,ref:o,children:l.jsx(ua,{tabIndex:0,icon:!0,label:!a&&!u?i("resize"):void 0,"aria-label":i(!a&&!u?"drag_handle_activate_description":"drag_handle_cancel_description"),onMouseDown:g,onKeyDown:p,onBlur:()=>{d(!1)},rotateIcon:u,children:l.jsx(Pe,{name:u?"arrow-micro-up-down":"drag"})})})}),un=ns(Qs),Zo=L.div(t=>{const{state:n,shadow:e,position:r,placement:o,transitionSpeed:i,size:a,resizeable:c,theme:u}=t;let d="horizontal",p="X",g="top";(o==="top"||o==="bottom")&&(d="vertical",p="Y",g="left");const m=n==="open"||n==="opening"?0:"100%",b=i||u.base.animation.speed;return y`
    z-index: ${u.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${g}: 0;
    height: ${d==="vertical"?a:"100%"};
    width: ${d==="horizontal"?a:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${b}, 0.0001s);
    transition-timing-function: ${u.base.animation.timing.ease};
    transform: ${n==="open"?"none":`translate${p}(${o==="top"||o==="left"?"-":""}${m})`};

    ${e&&y`
      box-shadow: ${u.base.shadow.high};
    `}

    ${c&&y`
      width: ${d==="horizontal"?"var(--resize-drawer-width)":"100%"};
    `}
  `});Zo.defaultProps=X;const ha=f.forwardRef(function(n,e){const{open:r=!1,shadow:o=!1,position:i="absolute",children:a,placement:c="right",transitionSpeed:u,size:d="100%",resizeable:p=!1,onAfterOpen:g,onAfterClose:m,onBeforeOpen:b,onBeforeClose:w,onOuterClick:S,nullWhenClosed:_=!1,...x}=n,$=ye(e),{ltr:I,rtl:O}=nt(),[T,P]=f.useState(r?"open":"closed");let k=ar(T);k||(k=T),Io("mousedown",[$],f.useCallback(()=>{r&&(S==null||S())},[r,S])),f.useEffect(()=>{r&&(T==="closed"||T==="closing")?(b==null||b(),ts($.current),P("opening")):!r&&(T==="open"||T==="opening")?(w==null||w(),P("closing")):r&&T==="open"&&k!=="open"?g==null||g():!r&&T==="closed"&&k!=="closed"&&(m==null||m())},[r,T,k,b,w,g,m]);const B=f.useCallback(F=>{F.target!==$.current||F.propertyName!=="transform"||P(r?"open":"closed")},[r]),W=f.useRef();f.useEffect(()=>{if(!p||!$.current)return;const F=Yt($);F&&(F.style.getPropertyValue("--resize-drawer-width")||F.style.setProperty("--resize-drawer-width",d))},[$.current]);const A=f.useCallback(F=>{var C;const N=Yt($),R=(C=$.current)==null?void 0:C.getBoundingClientRect();if(!R||!N)return;W.current=F.clientX;const Y=new AbortController;N.addEventListener("mousemove",U=>{if(!W.current||!R.width)return;const G=W.current,J=c==="right"?G-U.clientX:U.clientX-G,z=Math.max(J+R.width,parseInt(un,10));N.style.setProperty("--resize-drawer-width",`clamp(${un}, ${z}px, ${Wr})`)},{passive:!0,signal:Y.signal}),N.addEventListener("mouseup",()=>{Y.abort()},{once:!0})},[c]),j=f.useCallback((F,N)=>{var J;if(!N)return;const R=Yt($),Y=document.documentElement.clientWidth*ea,C=(J=$.current)==null?void 0:J.getBoundingClientRect();if(!C||!R||F.code!=="ArrowLeft"&&F.code!=="ArrowRight")return;F.preventDefault();const U=(F.code==="ArrowLeft"?1:-1)*(c==="right"?1:-1),G=Math.max(C.width+U*Y,parseInt(un,10));R.style.setProperty("--resize-drawer-width",`clamp(${un}, ${G}px, ${Wr})`)},[c]),V=p&&T==="open"&&(c==="left"&&O||c==="right"&&I);return T==="closed"&&!r&&_?null:l.jsxs(Zo,{ref:$,position:i,shadow:o&&r,transitionSpeed:u,placement:c,size:d,resizeable:p,open:r,state:T,onTransitionEnd:B,...x,children:[a,V&&l.jsx(fa,{onMouseDown:A,onKeyDown:j})]})});it(Ro,Oo);const pa=({text:t,onClick:n})=>{const e=Ee(),{arrowNavigationUnsupported:r}=f.useContext(Ot),{start:o}=nt(),i=f.useCallback(a=>{(a.key==="Enter"||a.key===`Arrow${Vn(o)}`)&&n()},[n,o]);return l.jsx(re,{container:{alignItems:"center"},as:Ho,onClick:n,onKeyDown:i,"data-collapse":"true","aria-expanded":!0,"aria-label":`${e("menu_expanded",[t||""])} ${e(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:l.jsx(dr,{visual:l.jsx(Pe,{name:`caret-${o}`}),primary:t})})},Gr=(t,n)=>{t.disabled=n;const e=t.querySelector("legend button");e&&(e.disabled=n)},Vr=(t,n)=>t.reduce((e,r)=>!et.isItem(r)&&r.items?e+r.items.length+1:e+1,n?1:0),fn=t=>t.flatMap(n=>et.isItem(n)?n:[n,...n.items?n.items:[]]),Ko=f.forwardRef(function({items:n,parent:e,id:r,menuRole:o,...i},a){const c=Ee(),u=f.useRef(null),d=ye(a),p=f.useRef(null),g=f.useRef(null),[m,b]=f.useState(!e),[w,S]=f.useState(),{scrollAt:_,"aria-label":x,loadMore:$,loading:I,emptyText:O,currentItemId:T,onItemExpand:P,focusControl:k,updateActiveDescendants:B,setFocusReturnEl:W,onItemCollapse:A,expandTo:j}=f.useContext(Ot),{end:V}=nt(),{announcePolite:F}=nr();ko(p,n.length-1,()=>{var C;I||$==null||$((C=e==null?void 0:e.item)==null?void 0:C.id)},":scope > li"),f.useLayoutEffect(()=>{!d.current||w||(u.current=d.current.parentElement,Yn(d.current,u.current,Vr(n,I),_))}),f.useEffect(()=>{e&&b(!0)},[]),Wn(()=>{if(w){const C=fn(n).find(U=>U.id===w.id);C&&bt(C)?S(C):S(void 0)}},[w,n]),Wn(()=>{if(T){const C=fn(n).find(U=>{var G;return((G=U.items)==null?void 0:G.length)&&et.getItem(U.items,T)!==void 0});C&&(S(bt(C)?C:void 0),B({preventScroll:!0}))}},[T,n,e]),f.useEffect(()=>{if(j!=null&&j.parentItemId){const C=fn(n).find(U=>U.id===j.parentItemId);if(C)S(bt(C)?C:void 0),B({preventScroll:!0}),j.onComplete();else{const U=fn(n).find(G=>{var J;return((J=G.items)==null?void 0:J.length)&&et.getItem(G.items,j.parentItemId)!==void 0});U?S(bt(U)?U:void 0):j.onComplete()}}},[j,n,e]);const N=f.useCallback((C,U)=>{var J;const G=et.getItem(n,C);g.current=U.currentTarget,G&&bt(G)?S(G):S(void 0),(J=G==null?void 0:G.onExpand)==null||J.call(G,C,U),P==null||P(C,U),B({preventScroll:!0})},[n]);f.useEffect(()=>{n.length===0&&!I&&F({message:O??c("no_items")})},[n.length,I]);const R=f.useMemo(()=>n.length?n.map((C,U)=>et.isItem(C)?f.createElement(pr,{...C,key:C.id,role:o==="listbox"?"option":"menuitem",onExpand:C.items?N:void 0}):l.jsxs(f.Fragment,{children:[l.jsx(qo,{...C,items:C.items.map(G=>G.items?{...G,onExpand:N}:G),itemRole:o==="listbox"?"option":"menuitem"}),n[U+1]&&et.isItem(n[U+1])&&l.jsx(Uo,{role:"separator"})]},C.id)):I?null:l.jsx(Co,{message:O,forwardedAs:"li"}),[n,I,O]),Y=l.jsxs(fr,{id:w?void 0:r,ref:p,role:o,...i,children:[e&&l.jsx(pa,{text:e.item.primary,onClick:()=>{b(!1)}}),R,I&&!w&&l.jsx(Bo,{children:l.jsx(rr,{placement:"local",liveConfig:{contextualLabel:x??c("menu")}})})]});return l.jsxs(l.Fragment,{children:[l.jsx(ha,{"aria-hidden":!!w,as:hr,ref:d,open:m,style:{opacity:w?0:1},disabled:!!w,placement:V,onBeforeOpen:()=>{e&&(e.el.style.opacity="0"),d.current&&(d.current.style.opacity="1")},onAfterOpen:()=>{e&&Gr(e.el,!0)},onBeforeClose:()=>{e&&u.current&&(Gr(e.el,!1),e.el.style.opacity="1",Yn(e.el,u.current,Vr(e.siblingItems),_)),d.current&&(d.current.style.opacity="0")},onAfterClose:()=>{if(e){k==null||k.focus();const C=e.returnFocusRef.current;e.setExpandedItem(void 0),C&&W(C==null?void 0:C.closest("li")),A==null||A(e.item.id),B()}},children:Y}),w&&d.current&&l.jsx(Ko,{id:r,items:w.items,parent:{el:d.current,item:w,siblingItems:n,setExpandedItem:S,returnFocusRef:g},menuRole:o})]})}),ma=f.forwardRef(function(n,e){var Et,ot;const r=tt(),{testId:o,id:i=r,items:a=[],itemLayout:c="stacked",onCreateNew:u,mode:d="action",accent:p,scrollAt:g=7,emptyText:m,onItemClick:b,onItemActive:w,onItemExpand:S,loadMore:_,onItemCollapse:x,loading:$=!1,currentItemId:I,header:O,footer:T,variant:P="drill-down",focusControlEl:k,arrowNavigationUnsupported:B,"aria-describedby":W,"aria-label":A,role:j="menu",listId:V,pauseDescendantEvaluation:F,menuList:N,handleRef:R,...Y}=n,C=_e(o,Go),U=Ee(),{end:G,start:J}=nt(),z=tt(),ee=ye(e),Me=f.useRef(0),[Q,te]=f.useState(0),[ge,Re]=f.useState(null),[se,ze]=f.useState([i]),[He,Be]=f.useState(),[rt,ie]=f.useState(!1),[q,st]=f.useState([]),[ne,$t]=f.useState(),Se=!k,at=f.useMemo(()=>`fieldset[data-flyout-menu-id="${se[se.length-1]}"]`,[se]),ke=f.useMemo(()=>k||ee.current,[k,ee.current]);f.useImperativeHandle(R,()=>({expandTo:ae=>{$t(ae)}}),[]);const We=f.useCallback(ae=>{ze([...se,ae])},[se]);f.useEffect(()=>{ze([...se,i])},[i]);const Nt=f.useCallback(ae=>{st([...q,ae])},[q]),ht=f.useCallback(ae=>btoa(encodeURIComponent(ae)),[i]),en=f.useCallback(ae=>decodeURIComponent(atob(ae)),[i]),Ge=f.useCallback(({preventScroll:ae=!1}={})=>{ie(ae),te(Math.random())},[]),$e=f.useMemo(()=>({focusEl:ke,scope:ee.current,scopeSelector:P==="drill-down"?'fieldset[aria-hidden="false"]':at,selector:`[role="${j==="menu"?"menuitem":"option"}"], legend`,focusDescendantEl:ge,clearFocusDescendant:()=>{Re(null)},focusReturnEl:He,clearFocusReturn:()=>{Be(null)},currentDescendantId:I?ht(I):void 0,preventInitialScroll:rt,clearPreventScroll:()=>{ie(!1)},pauseDescendantEvaluation:F}),[ke,ee.current,at,He,ge,I,rt,F]),{activeDescendant:fe,descendants:Fe}=cs($e,[Q]),zt=ar(fe);ds({loading:$,descendants:Fe,previousActiveDescendant:zt,activeDescendant:fe,focusReturnEl:He,setFocusReturnEl:Be,scrollEl:(ot=(Et=$e.scope)==null?void 0:Et.querySelector($e.scopeSelector))==null?void 0:ot.querySelector("ul")}),f.useEffect(()=>{const ae=(he=null)=>{if(fe){if(fe.dataset.expand==="true"&&he!=="collapse"){(fe.querySelector('span[aria-hidden="true"]')??fe).click();return}if(he!=="expand")if(P==="flyout"&&se.length>1&&q.length>0){ze([...se].slice(0,-1));const Ie=q.pop();Ie!==void 0&&Be(Ie),Ge()}else fe.dataset.collapse==="true"&&fe.click()}},Ue=he=>{switch(he.key){case`Arrow${Vn(G)}`:{if(B)break;ae("expand");break}case`Arrow${Vn(J)}`:{if(B)break;ae("collapse");break}case"Escape":{if(P==="flyout"&&se.length>1&&q.length>0){he.preventDefault(),he.stopPropagation(),ze([...se].slice(0,-1));const Ie=q.pop();Ie!==void 0&&Be(Ie),Ge()}break}}B&&(he.key===" "||he.key==="Spacebar")&&he.shiftKey&&(he.preventDefault(),ae())};return fe&&(w==null||w(en(fe.id))),ke==null||ke.addEventListener("keydown",Ue),()=>ke==null?void 0:ke.removeEventListener("keydown",Ue)},[ke,fe,se]),f.useEffect(()=>{const ae=setTimeout(()=>{var Ue,he;if(a.length===Me.current){const Ie=Fe==null?void 0:Fe.map(Ye=>Ye.id),Ft=(he=(Ue=$e.scope)==null?void 0:Ue.querySelector($e.scopeSelector))==null?void 0:he.querySelectorAll($e.selector);if(!Ft){Ge();return}const lt=Array.from(Ft);if((lt==null?void 0:lt.length)!==(Ie==null?void 0:Ie.length)){Ge();return}lt.every((Ye,ct)=>Ye.id===Ie[ct])||Ge();return}Me.current=a.length,Ge()},0);return()=>clearTimeout(ae)},[a]);const vt=f.useMemo(()=>({componentId:i,"aria-label":A,mode:d,arrowNavigationUnsupported:B,onItemClick:(ae,Ue)=>{var he;Se&&((he=ee.current)==null||he.focus()),b==null||b(ae,Ue)},onItemActive:w,onItemExpand:S,onItemCollapse:x,itemLayout:c,accent:p,scrollAt:g,emptyText:m,radioName:z,loadMore:_,loading:$,variant:P,focusControl:ke,updateActiveDescendants:Ge,setFocusReturnEl:Be,setFocusDescendant:Re,getScopedItemId:ht,pushFlyoutId:We,flyOutActiveIdStack:se,updateParentDescendantStack:Nt,expandTo:{parentItemId:ne,onComplete:()=>{$t(void 0)}}}),[i,A,d,B,b,w,S,x,c,p,g,m,z,_,$,P,ke,Ge,Be,Re,ht,We,se,Nt,ne]),Tt=N??(P==="drill-down"?l.jsx(Ko,{items:a,id:V,menuRole:j,"aria-multiselectable":d==="multi-select","aria-labelledby":A?`${i}-menuLabel`:void 0}):l.jsx(Yo,{items:a,menuRole:j}));return l.jsxs(Wo,{"data-testid":C.root,id:i,"aria-describedby":Se?`${i}-menuDescription`:void 0,...Y,ref:ee,tabIndex:Se?0:void 0,children:[Se&&l.jsx("span",{id:`${i}-menuDescription`,hidden:!0,children:`${U("menu_selection_instructions")} `&&W||""}),A&&l.jsx(Kt,{id:`${i}-menuLabel`,children:A}),O&&l.jsx("header",{"data-popover-scroll-el":!0,children:O}),l.jsx(yn,{"data-popover-scroll-el":!0,children:l.jsx(Ot.Provider,{value:vt,children:Tt})}),(u||T)&&l.jsx("footer",{"data-popover-scroll-el":!0,children:u?l.jsxs(Ne,{"data-testid":C.createNew,variant:"link",onClick:u,children:[l.jsx(Pe,{name:"plus"})," ",U("create_new")]}):T})]})}),ga=xe(ma,Go),ba="budicon",ya="arrow-micro-down",wa=()=>l.jsx("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),xa="0 0 25 25",_a=Object.freeze(Object.defineProperty({__proto__:null,Component:wa,name:ya,set:ba,viewBox:xa},Symbol.toStringTag,{value:"Module"})),Jo=Te("menu-button",[]);it(_a);const Qo=L.button(({theme:{base:{spacing:t}}})=>y`
      gap: ${t};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${Gn} + ${Eo} {
        margin-inline-start: ${t};
      }
    `);Qo.defaultProps=X;const Sa=L.span(({theme:t,padIcon:n})=>{const{base:{"hit-area":{"mouse-min":e,"finger-min":r}},components:{icon:{size:{s:o}}}}=t;return y`
    max-width: 100%;

    ${n&&y`
      padding-inline-start: calc((${e} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${vo} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Rt}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${t.base.spacing};
    }
  `}),$a=L(or)`
  min-width: 20ch;
`,va=f.forwardRef(function(n,e){const r=tt(),{testId:o,id:i=r,text:a,menu:c,popover:u,onClick:d,icon:p,count:g,iconOnly:m=!1,showArrow:b=!1,...w}=n,S=_e(o,Jo),[_,x]=f.useState(!1),$=ye(e),I=ye(u==null?void 0:u.ref),O=ye(c==null?void 0:c.ref);$o([I,$],f.useCallback(P=>{P||x(!1)},[])),bn(P=>{_&&(x(!1),P.stopPropagation())},$),bn(P=>{var k;_&&(x(!1),P.stopPropagation(),(k=$.current)==null||k.focus())},c==null?void 0:c.focusControlEl);const{rtl:T}=nt();return l.jsxs(l.Fragment,{children:[l.jsx(Ne,{"data-testid":S.root,as:Qo,"aria-label":a,...w,id:i,ref:$,"aria-expanded":_,"aria-haspopup":"menu","aria-controls":_?`${i}-popover`:void 0,label:m&&!_?a:void 0,onClick:P=>{const k=P.detail>0;_?k&&x(!1):x(!0),(!_||k)&&(d==null||d(P))},icon:m,children:l.jsxs(re,{as:Sa,container:{alignItems:"center",gap:1},padIcon:m&&b,children:[p&&l.jsx(Pe,{name:p}),!m&&l.jsxs(l.Fragment,{children:[l.jsx(qe,{children:a}),typeof g=="number"&&l.jsx(No,{children:g})]}),(!m||b)&&l.jsx(Pe,{name:"arrow-micro-down"})]})}),l.jsx($a,{placement:T?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...u,id:`${i}-popover`,show:!!c&&_,target:$.current,ref:I,children:c&&l.jsx(ga,{testId:S.root,...c,ref:O,items:c.items,onItemClick:(P,k)=>{var B;c.mode!=="multi-select"&&x(!1),(B=c.onItemClick)==null||B.call(c,P,k)},focusControlEl:c.focusControlEl||$.current||void 0})})]})}),Ta=xe(va,Jo),Ea=f.forwardRef(function({"data-testid":n,items:e,menuAt:r=2,scrollAt:o,iconOnly:i=!0,menuButtonProps:a,contextualLabel:c,compact:u=!1,disabled:d=!1,tabIndex:p},g){const m=Ee(),b=ye(g);return!e||e.length===0?null:e.length>=r?l.jsx(Ta,{...n?{"data-testid":n}:{},ref:b,text:m("actions"),"aria-label":c&&m("actions_for",[c]),iconOnly:!0,icon:"more",variant:"simple",compact:u,onClick:a==null?void 0:a.onClick,onKeyDown:a==null?void 0:a.onKeyDown,disabled:d,tabIndex:p,menu:{scrollAt:o,items:e.map(({text:w,onClick:S,..._})=>({..._,primary:w,onClick:S?(x,$)=>{S(x,$,b.current??void 0)}:void 0}))}}):l.jsx(l.Fragment,{children:e.map(({id:w,icon:S,text:_,onClick:x,...$})=>f.createElement(Ne,{...n?{"data-testid":n}:{},key:w,variant:S&&i?"simple":void 0,onClick:I=>x==null?void 0:x(w,I),label:S?_:void 0,icon:!!S&&i,compact:u,"aria-label":c?`${_} - ${c}`:_,disabled:d,...$},S&&i?l.jsx(Pe,{name:S}):_))})});/*! @license DOMPurify 3.4.14 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.14/LICENSE */function qr(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function ka(t){if(Array.isArray(t))return t}function Ia(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,o,i,a,c=[],u=!0,d=!1;try{if(i=(e=e.call(t)).next,n!==0)for(;!(u=(r=i.call(e)).done)&&(c.push(r.value),c.length!==n);u=!0);}catch(p){d=!0,o=p}finally{try{if(!u&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(d)throw o}}return c}}function Aa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ca(t,n){return ka(t)||Ia(t,n)||La(t,n)||Aa()}function La(t,n){if(t){if(typeof t=="string")return qr(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?qr(t,n):void 0}}const ei=Object.entries,Yr=Object.setPrototypeOf,Pa=Object.isFrozen,Ma=Object.getPrototypeOf,Ra=Object.getOwnPropertyDescriptor;let pe=Object.freeze,me=Object.seal,Lt=Object.create,ti=typeof Reflect<"u"&&Reflect,Xn=ti.apply,Zn=ti.construct;pe||(pe=function(n){return n});me||(me=function(n){return n});Xn||(Xn=function(n,e){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(e,o)});Zn||(Zn=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return new n(...r)});const gt=ue(Array.prototype.forEach),Oa=ue(Array.prototype.lastIndexOf),Xr=ue(Array.prototype.pop),Bt=ue(Array.prototype.push),Da=ue(Array.prototype.splice),Mt=Array.isArray,Vt=ue(String.prototype.toLowerCase),On=ue(String.prototype.toString),Zr=ue(String.prototype.match),Wt=ue(String.prototype.replace),Kr=ue(String.prototype.indexOf),ja=ue(String.prototype.trim),Na=ue(Number.prototype.toString),za=ue(Boolean.prototype.toString),Jr=typeof BigInt>"u"?null:ue(BigInt.prototype.toString),Qr=typeof Symbol>"u"?null:ue(Symbol.prototype.toString),Le=ue(Object.prototype.hasOwnProperty),Gt=ue(Object.prototype.toString),we=ue(RegExp.prototype.test),mt=Fa(TypeError);function ue(t){return function(n){n instanceof RegExp&&(n.lastIndex=0);for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return Xn(t,n,r)}}function Fa(t){return function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Zn(t,e)}}function K(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Vt;if(Yr&&Yr(t,null),!Mt(n))return t;let r=n.length;for(;r--;){let o=n[r];if(typeof o=="string"){const i=e(o);i!==o&&(Pa(n)||(n[r]=i),o=i)}t[o]=!0}return t}function Ua(t){for(let n=0;n<t.length;n++)Le(t,n)||(t[n]=null);return t}function De(t){const n=Lt(null);for(const r of ei(t)){var e=Ca(r,2);const o=e[0],i=e[1];Le(t,o)&&(Mt(i)?n[o]=Ua(i):i&&typeof i=="object"&&i.constructor===Object?n[o]=De(i):n[o]=i)}return n}function Ha(t){switch(typeof t){case"string":return t;case"number":return Na(t);case"boolean":return za(t);case"bigint":return Jr?Jr(t):"0";case"symbol":return Qr?Qr(t):"Symbol()";case"undefined":return Gt(t);case"function":case"object":{if(t===null)return Gt(t);const n=t,e=Ve(n,"toString");if(typeof e=="function"){const r=e(n);return typeof r=="string"?r:Gt(r)}return Gt(t)}default:return Gt(t)}}function Ve(t,n){for(;t!==null;){const r=Ra(t,n);if(r){if(r.get)return ue(r.get);if(typeof r.value=="function")return ue(r.value)}t=Ma(t)}function e(){return null}return e}function Ba(t){try{return we(t,""),!0}catch{return!1}}const eo=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Dn=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),jn=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wa=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Nn=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ga=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),to=pe(["#text"]),no=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),zn=pe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ro=pe(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),hn=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Va=me(/{{[\w\W]*|^[\w\W]*}}/g),qa=me(/<%[\w\W]*|^[\w\W]*%>/g),Ya=me(/\${[\w\W]*/g),Xa=me(/^data-[\-\w.\u00B7-\uFFFF]+$/),Za=me(/^aria-[\-\w]+$/),oo=me(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ka=me(/^(?:\w+script|data):/i),Ja=me(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Qa=me(/^html$/i),el=me(/^[a-z][.\w]*(-[.\w]+)+$/i),io=me(/<[/\w!]/g),so=me(/<[/\w]/g),tl=me(/<\/no(script|embed|frames)/i),nl=me(/\/>/i),Oe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ni=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],rl=pe(K({},ni)),ol=(function(){const t={};return gt(ni,n=>{t[n]=me(new RegExp("</"+n+"(?=[\\t\\n\\f\\r />])","i"))}),pe(t)})(),il=function(){return typeof window>"u"?null:window},sl=function(n,e){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";e&&e.hasAttribute(o)&&(r=e.getAttribute(o));const i="dompurify"+(r?"#"+r:"");try{return n.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},ao=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ut=function(n,e,r,o){return Le(n,e)&&Mt(n[e])?K(o.base?De(o.base):{},n[e],o.transform):r},Fn=function(n,e,r){const o=Le(n,e)?n[e]:void 0;return o&&typeof o=="object"?De(o):r()};function ri(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:il();const n=E=>ri(E);if(n.version="3.4.14",n.removed=[],!t||!t.document||t.document.nodeType!==Oe.document||!t.Element)return n.isSupported=!1,n;let e=t.document;const r=e,o=r.currentScript;t.DocumentFragment;const i=t.HTMLTemplateElement,a=t.Node,c=t.Element,u=t.NodeFilter,d=t.NamedNodeMap;d===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;const p=t.DOMParser,g=t.trustedTypes,m=c.prototype,b=Ve(m,"cloneNode"),w=Ve(m,"remove"),S=Ve(m,"nextSibling"),_=Ve(m,"childNodes"),x=Ve(m,"parentNode"),$=Ve(m,"shadowRoot"),I=Ve(m,"attributes"),O=a&&a.prototype?Ve(a.prototype,"nodeType"):null,T=a&&a.prototype?Ve(a.prototype,"nodeName"):null,P=a&&a.prototype?Ve(a.prototype,"ownerDocument"):null,k=function(s){return O?O(s):s.nodeType},B=function(s){return T?T(s):s.nodeName};if(typeof i=="function"){const E=e.createElement("template");E.content&&E.content.ownerDocument&&(e=E.content.ownerDocument)}let W,A="",j,V=!1,F=0;const N=function(){if(F>0)throw mt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},R=function(s){N(),F++;try{return W.createHTML(s)}finally{F--}},Y=function(s){N(),F++;try{return W.createScriptURL(s)}finally{F--}},C=function(){return V||(j=sl(g,o),V=!0),j},U=e,G=U.implementation,J=U.createNodeIterator,z=U.createDocumentFragment,ee=U.getElementsByTagName,Me=r.importNode;let Q=ao();n.isSupported=typeof ei=="function"&&typeof x=="function"&&G&&G.createHTMLDocument!==void 0;const te=Va,ge=qa,Re=Ya,se=Xa,ze=Za,He=Ka,Be=Ja,rt=el;let ie=oo,q=null;const st=K({},[...eo,...Dn,...jn,...Nn,...to]);let ne=null;const $t=K({},[...no,...zn,...ro,...hn]);let Se=Object.seal(Lt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),at=null,ke=null;const We=Object.seal(Lt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Nt=!0,ht=!0,en=!1,Ge=!0,$e=!1,fe=!0,Fe=!1,zt=!1,vt=null,Tt=null,Et=!1,ot=!1,ae=!1,Ue=!1,he=!0,Ie=!1;const Ft="user-content-";let lt=!0,tn=!1,Ye={},ct=null;const yr=K({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let wr=null;const xr=K({},["audio","video","img","source","image","track"]);let _r=null;const Sr=K({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nn="http://www.w3.org/1998/Math/MathML",rn="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml";let kt=Xe,En=!1,kn=null;const Ei=K({},[nn,rn,Xe],On),$r=pe(["mi","mo","mn","ms","mtext"]);let In=K({},$r);const vr=pe(["annotation-xml"]);let An=K({},vr);const ki=K({},["title","style","font","a","script"]);let Ut=null;const Ii=["application/xhtml+xml","text/html"],Ai="text/html";let ce=null,It=null;const Ci=e.createElement("form"),Tr=function(s){return s instanceof RegExp||s instanceof Function},Cn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(It&&It===s)return;(!s||typeof s!="object")&&(s={}),s=De(s),Ut=Ii.indexOf(s.PARSER_MEDIA_TYPE)===-1?Ai:s.PARSER_MEDIA_TYPE,ce=Ut==="application/xhtml+xml"?On:Vt,q=ut(s,"ALLOWED_TAGS",st,{transform:ce}),ne=ut(s,"ALLOWED_ATTR",$t,{transform:ce}),kn=ut(s,"ALLOWED_NAMESPACES",Ei,{transform:On}),_r=ut(s,"ADD_URI_SAFE_ATTR",Sr,{transform:ce,base:Sr}),wr=ut(s,"ADD_DATA_URI_TAGS",xr,{transform:ce,base:xr}),ct=ut(s,"FORBID_CONTENTS",yr,{transform:ce}),at=ut(s,"FORBID_TAGS",De({}),{transform:ce}),ke=ut(s,"FORBID_ATTR",De({}),{transform:ce}),Ye=Le(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?De(s.USE_PROFILES):s.USE_PROFILES:!1,Nt=s.ALLOW_ARIA_ATTR!==!1,ht=s.ALLOW_DATA_ATTR!==!1,en=s.ALLOW_UNKNOWN_PROTOCOLS||!1,Ge=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$e=s.SAFE_FOR_TEMPLATES||!1,fe=s.SAFE_FOR_XML!==!1,Fe=s.WHOLE_DOCUMENT||!1,ot=s.RETURN_DOM||!1,ae=s.RETURN_DOM_FRAGMENT||!1,Ue=s.RETURN_TRUSTED_TYPE||!1,Et=s.FORCE_BODY||!1,he=s.SANITIZE_DOM!==!1,Ie=s.SANITIZE_NAMED_PROPS||!1,lt=s.KEEP_CONTENT!==!1,tn=s.IN_PLACE||!1,ie=Ba(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:oo,kt=typeof s.NAMESPACE=="string"?s.NAMESPACE:Xe,In=Fn(s,"MATHML_TEXT_INTEGRATION_POINTS",()=>K({},$r)),An=Fn(s,"HTML_INTEGRATION_POINTS",()=>K({},vr));const h=Fn(s,"CUSTOM_ELEMENT_HANDLING",()=>Lt(null));if(Se=Lt(null),Le(h,"tagNameCheck")&&Tr(h.tagNameCheck)&&(Se.tagNameCheck=h.tagNameCheck),Le(h,"attributeNameCheck")&&Tr(h.attributeNameCheck)&&(Se.attributeNameCheck=h.attributeNameCheck),Le(h,"allowCustomizedBuiltInElements")&&typeof h.allowCustomizedBuiltInElements=="boolean"&&(Se.allowCustomizedBuiltInElements=h.allowCustomizedBuiltInElements),me(Se),$e&&(ht=!1),ae&&(ot=!0),Ye&&(q=K({},to),ne=Lt(null),Ye.html===!0&&(K(q,eo),K(ne,no)),Ye.svg===!0&&(K(q,Dn),K(ne,zn),K(ne,hn)),Ye.svgFilters===!0&&(K(q,jn),K(ne,zn),K(ne,hn)),Ye.mathMl===!0&&(K(q,Nn),K(ne,ro),K(ne,hn))),We.tagCheck=null,We.attributeCheck=null,Le(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?We.tagCheck=s.ADD_TAGS:Mt(s.ADD_TAGS)&&(q===st&&(q=De(q)),K(q,s.ADD_TAGS,ce))),Le(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?We.attributeCheck=s.ADD_ATTR:Mt(s.ADD_ATTR)&&(ne===$t&&(ne=De(ne)),K(ne,s.ADD_ATTR,ce))),Le(s,"ADD_FORBID_CONTENTS")&&Mt(s.ADD_FORBID_CONTENTS)&&(ct===yr&&(ct=De(ct)),K(ct,s.ADD_FORBID_CONTENTS,ce)),lt&&(q["#text"]=!0),Fe&&K(q,["html","head","body"]),q.table&&(K(q,["tbody"]),delete at.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw mt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw mt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const v=W;W=s.TRUSTED_TYPES_POLICY;try{A=R("")}catch(M){throw W=v,M}}else s.TRUSTED_TYPES_POLICY===null?(W=void 0,A=""):(W===void 0&&(W=C()),W&&typeof A=="string"&&(A=R("")));pe&&pe(s),It=s},Er=K({},[...Dn,...jn,...Wa]),kr=K({},[...Nn,...Ga]),Li=function(s,h,v){return h.namespaceURI===Xe?s==="svg":h.namespaceURI===nn?s==="svg"&&(v==="annotation-xml"||In[v]):!!Er[s]},Pi=function(s,h,v){return h.namespaceURI===Xe?s==="math":h.namespaceURI===rn?s==="math"&&An[v]:!!kr[s]},Mi=function(s,h,v){return h.namespaceURI===rn&&!An[v]||h.namespaceURI===nn&&!In[v]?!1:!kr[s]&&(ki[s]||!Er[s])},Ri=function(s){let h=x(s);(!h||!h.tagName)&&(h={namespaceURI:kt,tagName:"template"});const v=Vt(s.tagName),M=Vt(h.tagName);return kn[s.namespaceURI]?s.namespaceURI===rn?Li(v,h,M):s.namespaceURI===nn?Pi(v,h,M):s.namespaceURI===Xe?Mi(v,h,M):!!(Ut==="application/xhtml+xml"&&kn[s.namespaceURI]):!1},dt=function(s){Bt(n.removed,{element:s});try{x(s).removeChild(s)}catch{if(w(s),!x(s))throw mt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Ir=function(s,h,v){try{s.removeAttributeNode(h)}catch{try{s.removeAttribute(v)}catch{}}},on=function(s){sn(s);const h=_(s);if(h){const M=[];gt(h,D=>{Bt(M,D)}),gt(M,D=>{try{w(D)}catch{}})}const v=I(s);if(v)for(let M=v.length-1;M>=0;--M){const D=v[M],H=D&&D.name;typeof H=="string"&&Ir(s,D,H)}},pt=function(s,h,v){if(!v)try{v=h.getAttributeNode(s)}catch{v=null}Bt(n.removed,{attribute:v||null,from:h});try{v?h.removeAttributeNode(v):h.removeAttribute(s)}catch{try{h.removeAttribute(s)}catch{}}if(s==="is")if(ot||ae)try{dt(h)}catch{}else try{h.setAttribute(s,"")}catch{}},Oi=function(s){const h=I(s);if(h)for(let v=h.length-1;v>=0;--v){const M=h[v],D=M&&M.name;typeof D!="string"||ne[ce(D)]||Ir(s,M,D)}},sn=function(s){const h=[s];for(;h.length>0;){const v=h.pop();k(v)===Oe.element&&Oi(v);const D=_(v);if(D)for(let H=D.length-1;H>=0;--H)h.push(D[H])}},Ar=function(s,h){return fe?s==="patchsrc"?!0:s==="for"&&h!=="label"&&h!=="output":!1},Di=function(s){if(!fe)return;const h=[s];for(;h.length>0;){const v=h.pop(),M=k(v);if(M===Oe.processingInstruction||M===Oe.comment&&we(so,v.data)){try{w(v)}catch{}continue}if(M===Oe.element){const H=v,oe=ce(B(v));try{H.hasAttribute&&H.hasAttribute("patchsrc")&&H.removeAttribute("patchsrc"),H.hasAttribute&&H.hasAttribute("for")&&Ar("for",oe)&&H.removeAttribute("for")}catch{}}const D=_(v);if(D)for(let H=D.length-1;H>=0;--H)h.push(D[H])}},Cr=function(s){let h=null,v=null;if(Et)s="<remove></remove>"+s;else{const H=Zr(s,/^[\r\n\t ]+/);v=H&&H[0]}Ut==="application/xhtml+xml"&&kt===Xe&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const M=W?R(s):s;if(kt===Xe)try{h=new p().parseFromString(M,Ut)}catch{}if(!h||!h.documentElement){h=G.createDocument(kt,"template",null);try{h.documentElement.innerHTML=En?A:M}catch{}}const D=h.body||h.documentElement;return s&&v&&D.insertBefore(e.createTextNode(v),D.childNodes[0]||null),kt===Xe?ee.call(h,Fe?"html":"body")[0]:Fe?h.documentElement:D},Lr=function(s){const h=P?P(s):s.ownerDocument;return J.call(h||s,s,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},an=function(s){return s=Wt(s,te," "),s=Wt(s,ge," "),s=Wt(s,Re," "),s},Ln=function(s){var h;s.normalize();const v=P?P(s):s.ownerDocument,M=J.call(v||s,s,u.SHOW_TEXT|u.SHOW_COMMENT|u.SHOW_CDATA_SECTION|u.SHOW_PROCESSING_INSTRUCTION,null);let D=M.nextNode();for(;D;)D.data=an(D.data),D=M.nextNode();const H=(h=s.querySelectorAll)===null||h===void 0?void 0:h.call(s,"template");H&&gt(H,oe=>{At(oe.content)&&Ln(oe.content)})},ln=function(s){const h=T?T(s):null;return typeof h!="string"||ce(h)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==I(s)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==O(s)||s.childNodes!==_(s)},At=function(s){if(!O||typeof s!="object"||s===null)return!1;try{return O(s)===Oe.documentFragment}catch{return!1}},Ht=function(s){if(!O||typeof s!="object"||s===null)return!1;try{return typeof O(s)=="number"}catch{return!1}};function Ze(E,s,h){E.length!==0&&gt(E,v=>{v.call(n,s,h,It)})}const ji=function(s,h){return!!(fe&&s.hasChildNodes()&&!Ht(s.firstElementChild)&&we(io,s.textContent)&&we(io,s.innerHTML)||fe&&s.namespaceURI===Xe&&rl[h]&&(Ht(s.firstElementChild)||typeof s.textContent=="string"&&we(ol[h],s.textContent))||s.nodeType===Oe.processingInstruction||fe&&s.nodeType===Oe.comment&&we(so,s.data))},cn=function(s,h){if(s instanceof RegExp)return we(s,h);if(s instanceof Function){for(var v=arguments.length,M=new Array(v>2?v-2:0),D=2;D<v;D++)M[D-2]=arguments[D];return!!s(h,...M)}return!1},Ni=function(s,h,v){if(!at[h]&&Dr(h)&&cn(Se.tagNameCheck,h))return!1;if(lt&&!ct[h]){const M=x(s),D=_(s);if(D&&M){const H=D.length;for(let oe=H-1;oe>=0;--oe){const le=s===v?b(D[oe],!0):D[oe];M.insertBefore(le,S(s))}}}return dt(s),!0},Pr=function(s,h,v,M){return s.length===0?h:h===v||h===M?De(h):h},Mr=function(s,h){return s===h||x(s)!==null?!1:(tn&&sn(s),!0)},Rr=function(s,h){if(Ze(Q.beforeSanitizeElements,s,null),Mr(s,h))return!0;if(ln(s))return dt(s),!0;const v=ce(B(s));if(q=Pr(Q.uponSanitizeElement,q,st,vt),Ze(Q.uponSanitizeElement,s,{tagName:v,allowedTags:q}),Mr(s,h))return!0;if(ji(s,v))return dt(s),!0;if(at[v]||!(We.tagCheck instanceof Function&&We.tagCheck(v))&&!q[v]){const D=Ni(s,v,h);return D===!1&&Ze(Q.afterSanitizeElements,s,null),D}if(k(s)===Oe.element&&!Ri(s)||(v==="noscript"||v==="noembed"||v==="noframes")&&we(tl,s.innerHTML))return dt(s),!0;if($e&&s.nodeType===Oe.text){const D=an(s.textContent);s.textContent!==D&&(Bt(n.removed,{element:s.cloneNode()}),s.textContent=D)}return Ze(Q.afterSanitizeElements,s,null),!1},Or=function(s,h,v){if(ke[h]||Ar(h,s)||he&&(h==="id"||h==="name")&&(v in e||v in Ci))return!1;const M=ne[h]||We.attributeCheck instanceof Function&&We.attributeCheck(h,s);return ht&&we(se,h)||Nt&&we(ze,h)?!0:M?_r[h]||we(ie,Wt(v,Be,""))||(h==="src"||h==="xlink:href"||h==="href")&&s!=="script"&&Kr(v,"data:")===0&&wr[s]||en&&!we(He,Wt(v,Be,""))?!0:!v:Dr(s)&&cn(Se.tagNameCheck,s)&&cn(Se.attributeNameCheck,h,s)||h==="is"&&Se.allowCustomizedBuiltInElements&&cn(Se.tagNameCheck,v)},zi=K({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Dr=function(s){return!zi[Vt(s)]&&we(rt,s)},Fi=function(s,h,v,M){if(W&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!v)switch(g.getAttributeType(s,h)){case"TrustedHTML":return R(M);case"TrustedScriptURL":return Y(M)}return M},Ui=function(s,h,v,M){try{v?s.setAttributeNS(v,h,M):s.setAttribute(h,M),ln(s)?dt(s):Xr(n.removed)}catch{pt(h,s)}},jr=function(s){Ze(Q.beforeSanitizeAttributes,s,null);const h=s.attributes;if(!h||ln(s))return;ne=Pr(Q.uponSanitizeAttribute,ne,$t,Tt);const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ne,forceKeepAttr:void 0};let M=h.length;const D=ce(s.nodeName);for(;M--;){const H=h[M],oe=H.name,le=H.namespaceURI,Ae=H.value,Ce=ce(oe),Mn=Ae;let ve=oe==="value"?Mn:ja(Mn);if(v.attrName=Ce,v.attrValue=ve,v.keepAttr=!0,v.forceKeepAttr=void 0,Ze(Q.uponSanitizeAttribute,s,v),ve=v.attrValue,Ie&&(Ce==="id"||Ce==="name")&&Kr(ve,Ft)!==0&&(pt(oe,s,H),ve=Ft+ve),fe&&we(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,ve)){pt(oe,s,H);continue}if(Ce==="attributename"&&Zr(ve,"href")){pt(oe,s,H);continue}if(!v.forceKeepAttr){if(!v.keepAttr){pt(oe,s,H);continue}if(!Ge&&we(nl,ve)){pt(oe,s,H);continue}if($e&&(ve=an(ve)),!Or(D,Ce,ve)){pt(oe,s,H);continue}ve=Fi(D,Ce,le,ve),ve!==Mn&&Ui(s,oe,le,ve)}}Ze(Q.afterSanitizeAttributes,s,null)},dn=function(s){let h=null;const v=Lr(s);for(Ze(Q.beforeSanitizeShadowDOM,s,null);h=v.nextNode();)if(Ze(Q.uponSanitizeShadowNode,h,null),Rr(h,s),jr(h),At(h.content)&&dn(h.content),k(h)===Oe.element){const M=$(h);At(M)&&(Pn(M),dn(M))}Ze(Q.afterSanitizeShadowDOM,s,null)},Pn=function(s){const h=[{node:s,shadow:null}];for(;h.length>0;){const v=h.pop();if(v.shadow){dn(v.shadow);continue}const M=v.node,H=k(M)===Oe.element,oe=_(M);if(oe)for(let le=oe.length-1;le>=0;--le)h.push({node:oe[le],shadow:null});if(H){const le=T?T(M):null;if(typeof le=="string"&&ce(le)==="template"){const Ae=M.content;At(Ae)&&h.push({node:Ae,shadow:null})}}if(H){const le=$(M);At(le)&&h.push({node:null,shadow:le},{node:le,shadow:null})}}};return n.sanitize=function(E){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=null,v=null,M=null,D=null;if(En=!E,En&&(E="<!-->"),typeof E!="string"&&!Ht(E)&&(E=Ha(E),typeof E!="string"))throw mt("dirty is not a string, aborting");if(!n.isSupported)return E;zt?(q=vt,ne=Tt):Cn(s),(Q.uponSanitizeElement.length>0||Q.uponSanitizeAttribute.length>0)&&(q=De(q)),Q.uponSanitizeAttribute.length>0&&(ne=De(ne)),n.removed=[];const H=tn&&typeof E!="string"&&Ht(E);if(H){Di(E);const Ae=B(E);if(typeof Ae=="string"){const Ce=ce(Ae);if(!q[Ce]||at[Ce])throw on(E),mt("root node is forbidden and cannot be sanitized in-place")}if(ln(E))throw on(E),mt("root node is clobbered and cannot be sanitized in-place");try{Pn(E)}catch(Ce){throw on(E),Ce}}else if(Ht(E))h=Cr("<!---->"),v=h.ownerDocument.importNode(E,!0),v.nodeType===Oe.element&&v.nodeName==="BODY"||v.nodeName==="HTML"?h=v:h.appendChild(v),Pn(v);else{if(!ot&&!$e&&!Fe&&E.indexOf("<")===-1)return W&&Ue?R(E):E;if(h=Cr(E),!h)return ot?null:Ue?A:""}h&&Et&&dt(h.firstChild);const oe=H?E:h;try{const Ae=Lr(oe);for(;M=Ae.nextNode();)Rr(M,oe),jr(M),At(M.content)&&dn(M.content)}catch(Ae){throw H&&(on(E),gt(n.removed,Ce=>{Ce.element&&sn(Ce.element)})),Ae}if(H)return gt(n.removed,Ae=>{Ae.element&&sn(Ae.element)}),$e&&Ln(E),E;if(ot){if($e&&Ln(h),ae)for(D=z.call(h.ownerDocument);h.firstChild;)D.appendChild(h.firstChild);else D=h;return(ne.shadowroot||ne.shadowrootmode)&&(D=Me.call(r,D,!0)),D}let le=Fe?h.outerHTML:h.innerHTML;return Fe&&q["!doctype"]&&h.ownerDocument&&h.ownerDocument.doctype&&h.ownerDocument.doctype.name&&we(Qa,h.ownerDocument.doctype.name)&&(le="<!DOCTYPE "+h.ownerDocument.doctype.name+`>
`+le),$e&&(le=an(le)),W&&Ue?R(le):le},n.setConfig=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Cn(E),zt=!0,vt=q,Tt=ne},n.clearConfig=function(){It=null,zt=!1,vt=null,Tt=null,W=j,A=""},n.isValidAttribute=function(E,s,h){It||Cn({});const v=ce(E),M=ce(s);return Or(v,M,h)},n.addHook=function(E,s){typeof s=="function"&&Le(Q,E)&&Bt(Q[E],s)},n.removeHook=function(E,s){if(Le(Q,E)){if(s!==void 0){const h=Oa(Q[E],s);return h===-1?void 0:Da(Q[E],h,1)[0]}return Xr(Q[E])}},n.removeHooks=function(E){Le(Q,E)&&(Q[E]=[])},n.removeAllHooks=function(){Q=ao()},n}var al=ri();const oi=Te("html",[]),Xt=al(),ll=y`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,cl=t=>y`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${t.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`,dl=t=>{const{base:{"font-size":n,"font-scale":e,palette:r},components:{text:o}}=t,i=St(n,e);return`
    ${ll}
    table {
      ${cl(t)}
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }
    a {
      color: ${r.interactive};
    }
    pre {
      white-space: break-spaces;
    }
    p {
      min-height: ${i[o.primary["font-size"]]};
    }
    h1 {
      font-size: ${i[o.h1["font-size"]]};
      font-weight: ${o.h1["font-weight"]};
      min-height: ${i[o.h1["font-size"]]};
    }
    h2 {
      font-size: ${i[o.h2["font-size"]]};
      font-weight: ${o.h2["font-weight"]};
      min-height: ${i[o.h2["font-size"]]};
    }
    h3 {
      font-size: ${i[o.h3["font-size"]]};
      font-weight: ${o.h3["font-weight"]};
      min-height: ${i[o.h3["font-size"]]};
    }
    h4 {
      font-size: ${i[o.h4["font-size"]]};
      font-weight: ${o.h4["font-weight"]};
      min-height: ${i[o.h4["font-size"]]};
    }
    h5 {
      font-size: ${i[o.h5["font-size"]]};
      font-weight: ${o.h5["font-weight"]};
      min-height: ${i[o.h5["font-size"]]};
    }
    h6 {
      font-size: ${i[o.h6["font-size"]]};
      font-weight: ${o.h6["font-weight"]};
      min-height: ${i[o.h6["font-size"]]};
    }
  `},ii=L.div(({theme:t})=>y`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${dl(t)}

    ${Gn} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${Gn} li {
      margin: 0;
    }
  `);ii.defaultProps=X;if(Xt.isSupported){const t=new WeakSet;Xt.addHook("beforeSanitizeAttributes",n=>{(n instanceof HTMLElement||n instanceof SVGElement)&&(n.removeAttribute("class"),n.tagName==="A"&&n.hasAttribute("href")&&n.getAttribute("target")==="_blank"&&t.add(n))}),Xt.addHook("afterSanitizeAttributes",n=>{if(n.tagName==="A"&&n.hasAttribute("href")){const e=n.getAttribute("href");let r;try{r=new URL(e,window.location.href)}catch{return}window.location.origin!==r.origin?(n.setAttribute("target","_blank"),n.setAttribute("rel","noopener")):t.has(n)&&(n.setAttribute("target","_blank"),t.delete(n))}})}const ul=f.forwardRef(function({testId:n,content:e,customTags:r,...o},i){const[a,c]=f.useState(!1),u=f.useMemo(()=>a&&Xt.isSupported?Xt.sanitize(e,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?p=>r.includes(p):void 0},ALLOWED_URI_REGEXP:as}):"",[e,r,a]),d=_e(n,oi);return f.useEffect(()=>{c(!0)},[]),l.jsx(ii,{"data-testid":d.root,...o,dangerouslySetInnerHTML:{__html:u},ref:i})}),fl=xe(ul,oi),hl=L.div``,si=L.div``,$n=L.div(({theme:t})=>y`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${t.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${si} + & {
      padding-block-start: calc(0.5 * ${t.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${t.base.spacing});
    }
  `);$n.defaultProps=X;L.div``;const ai=L(or)(({theme:t})=>y`
    display: flex;
    flex-direction: column;
    min-width: min(${t.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${t.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${$n} {
        overflow: hidden;
      }
    }
  `);ai.defaultProps=X;const pl=f.forwardRef(function({arrow:n=!0,target:e,portal:r,strategy:o,placement:i,children:a,progress:c,focusTrap:u=!0,...d},p){const g=ye(p);return rs(u?g:null,!1),l.jsx(ai,{...d,role:"dialog",arrow:n,"aria-modal":!1,"aria-busy":!!c,ref:g,target:e,portal:r,strategy:o,placement:i,children:a})}),li=L(Ne)``,ci=L(pl)(({theme:t})=>y`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${$n} > ${li} {
      position: relative;
      z-index: calc(${t.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);ci.defaultProps=X;const ml=f.forwardRef(function({target:n,heading:e,children:r,progress:o,onDismiss:i,...a},c){const u=Ee(),d=tt(),p=ye(c),g=f.useRef(null),m=f.useRef(null),b=hs(p,g,[m],[o]),w=()=>{if(o)return;const $=tr(p),I=$.find(O=>{var T;return(T=g.current)==null?void 0:T.contains(O)})??m.current??$[0];I==null||I.focus()};bn($=>{i==null||i(),$.stopPropagation()},p,[i]),Io("mousedown",[n,p],()=>{i==null||i()}),f.useLayoutEffect(()=>{const $=xn();return()=>{$ instanceof HTMLElement&&$.isConnected&&$.focus()}},[]),f.useEffect(()=>{o||w()},[o]),f.useEffect(()=>{const $=()=>{setTimeout(()=>{i==null||i()},0)};return n.addEventListener("click",$),()=>{n.removeEventListener("click",$)}},[]);const S=e?l.jsx(qe,{id:d,variant:"h2",children:typeof e=="string"?e:e.primary}):null,_=l.jsx(rr,{visible:!!o,focusOnVisible:!0,placement:"local",message:typeof o=="string"?o:void 0}),x=l.jsx(li,{icon:!0,variant:"simple",onClick:()=>{i()},label:u("close"),ref:m,children:l.jsx(Pe,{name:"times"})});return l.jsxs(ci,{...a,...typeof e=="string"?{"aria-labelledby":d}:{"aria-label":e==null?void 0:e.primary},arrow:!0,target:n,progress:o,ref:p,children:[e&&S&&l.jsxs(re,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:si,children:[typeof e=="string"?S:l.jsx(dr,{primary:S,secondary:e.secondary?l.jsx(qe,{variant:"secondary",children:e.secondary}):void 0,visual:e.visual}),x]}),(!e||r||o)&&l.jsxs(re,{container:{direction:"column"},item:{grow:1},as:$n,ref:g,tabIndex:b,children:[!e&&x,r&&l.jsx(hl,{inert:o?"":void 0,children:r}),_]})]})}),gl="budicon",bl="information",yl=()=>l.jsx("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),wl="0 0 25 25",xl=Object.freeze(Object.defineProperty({__proto__:null,Component:yl,name:bl,set:gl,viewBox:wl},Symbol.toStringTag,{value:"Module"}));it(xl);const di=L.div``,_l=f.forwardRef(function(n,e){const r=Ee(),{heading:o=r("additional_info"),contextualLabel:i,children:a,dialogHandle:c,...u}=n,[d,p]=f.useState(null),g=f.useRef(null),m=ye(c);return f.useImperativeHandle(m,()=>({open:()=>{p(g.current)},close:()=>{p(null)}})),l.jsxs(re,{container:!0,as:di,ref:e,...u,children:[l.jsx(Ne,{variant:"simple",label:r("additional_info"),compact:!0,icon:!0,ref:g,onClick:()=>{var b;(b=m.current)==null||b.open()},"aria-label":`${r("additional_info")} - ${i??o}`,children:l.jsx(Pe,{name:"information"})}),d&&l.jsx(ml,{heading:o,target:d,onDismiss:()=>{var b;(b=m.current)==null||b.close()},children:typeof a=="string"?l.jsx(fl,{content:a}):a})]})}),Sl=L.img`
  max-width: 100%;
`,$l=f.forwardRef(function(n,e){const{alt:r,...o}=n;return l.jsx(Sl,{...o,alt:r,ref:e})}),be=L.label(({theme:t,labelHidden:n})=>{const{"foreground-color":e}=t.components.label,r=je(()=>n?Zt:Qt(_n(t.base.palette["primary-background"]),t.base.transparency["transparent-3"])),o=St(t.base["font-size"],t.base["font-scale"]);return n?Zt:y`
          max-width: max-content;
          font-size: ${o[t.components.label["font-size"]]};
          font-weight: ${t.components.label["font-weight"]};
          color: ${e==="auto"?r:e};
        `});be.defaultProps=X;const vl=f.forwardRef(function({children:n,labelHidden:e=!1,htmlFor:r,...o},i){return l.jsx(be,{ref:i,labelHidden:e,htmlFor:r===""?void 0:r,...o,children:n})}),Tl="budicon",El="warn-solid",kl=()=>l.jsx("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),Il="0 0 25 25",Al=Object.freeze(Object.defineProperty({__proto__:null,Component:kl,name:El,set:Tl,viewBox:Il},Symbol.toStringTag,{value:"Module"})),Cl="budicon",Ll="diamond-minus",Pl=()=>l.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),Ml="0 0 25 25",Rl=Object.freeze(Object.defineProperty({__proto__:null,Component:Pl,name:Ll,set:Cl,viewBox:Ml},Symbol.toStringTag,{value:"Module"})),ft=L.div(({theme:{base:{"border-radius":t,"font-size":n,"font-scale":e,animation:{speed:r,timing:o},palette:i},components:{"form-field":a,"form-control":{"foreground-color":c,"background-color":u,"border-color":d,"border-radius":p,"border-width":g,":hover":{"border-color":m},":focus":{"border-color":b,"box-shadow":w},":disabled":{"border-color":S,"background-color":_},":read-only":{"border-color":x,"background-color":$}}}},status:I,hasSuggestion:O})=>{const T=St(n,e),P=I&&a[I]?a[I]["status-color"]:d,k=O&&I?xt(.1,a[I]["status-color"],i["primary-background"]):u;return y`
      color: ${c};
      background-color: ${k};
      border-radius: calc(${t} * ${p});
      border-color: ${P};
      border-width: ${g};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${_};
        border-color: ${S};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${b};
        box-shadow: ${w};
        ${O&&y`
          background-color: ${u};
        `}
      }

      &:focus-within:not([disabled]) {
        ${O&&y`
          background-color: ${u};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!I&&y`
          border-color: ${m};
        `}
        ${O&&y`
          background-color: ${u};
          box-shadow: 0 0 0 0.125rem ${Qt(P,.2)};
        `}
      }

      ${O&&y`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${$};
        border-color: ${x};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${T.s}, 16px);
      }
    `});ft.defaultProps=X;const Un=f.forwardRef(function(n,e){return l.jsx(ft,{ref:e,...n})}),Ol=L.span`
  display: none;
`,Dl=f.forwardRef(function(n,e){const{portalTarget:r}=er();return r?Wi.createPortal(l.jsx(Ol,{...n,ref:e}),r):null}),Dt=["label","info","additional-info","suggestion-accept","suggestion-reject"],ui=Te("form-field",Dt),fi=Te("radio-check",["control",...Dt]),jt=L.div(t=>{const{theme:{base:{spacing:n},components:{"form-field":e,"radio-check":{size:r,"touch-size":o,"background-color":i,"border-color":a,"border-width":c}}},status:u}=t;let d=a;return(u==="error"||u==="warning")&&(d=e[u]["status-color"]),y`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${n});
      border: ${c} solid ${d};
      background-color: ${i};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});jt.defaultProps=X;const mr=L.input(t=>{const{disabled:n,theme:{base:{"border-radius":e},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":i}},"radio-check":{size:a,":checked":{"background-color":c,"border-color":u}},checkbox:{"border-radius":d},"radio-button":{"border-radius":p}}}}=t,g=t.readOnly?i:c,m=je(()=>_n(g)),b=`+ ${be} ${jt}`,{ltr:w}=nt();return y`
    ${Zt}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${a};
    height: ${a};

    ${!n&&y`
      &:focus ${b} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${b},
      &:checked:disabled
      ${b},
      &[type='checkbox']:indeterminate
      ${b},
      &[type='checkbox']:indeterminate:disabled
      ${b} {
      border-color: ${t.readOnly?"inherit":u};
      background-color: ${g};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${b}, &[type='radio'] ${b}::after {
      border-radius: ${p};
    }

    &[type='radio'] ${b}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${a} * 0.3);
      height: calc(${a} * 0.3);
      border-radius: ${p};
      border: calc(${a} * 0.2) solid ${m};
    }

    &[type='checkbox'] ${b} {
      border-radius: min(calc(${e} * ${d}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${b} {
      &::after {
        width: 40%;
        height: 75%;
        ${w?y`
              transform: rotate(45deg) translate(50%, -30%);
            `:y`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${m};
        border-bottom: 0.15em solid ${m};
      }
    }

    &[type='checkbox']:indeterminate ${b} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${m};
      }
    }
  `});mr.defaultProps=X;const vn=L.div(t=>{const{disabled:n,readOnly:e,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":i}},"form-control":{":hover":{"border-color":a}}}}}=t,c=St(r["font-size"],r["font-scale"]);return y`
      > ${be} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${i};
        word-break: break-word;
        font-size: ${c.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${_t} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(n||e)&&y`
        &:not(:focus-within) > ${be}:hover ${jt} {
          border-color: ${a};
        }
      `}
    `});vn.defaultProps=X;const hi=L.label(({disabled:t,readOnly:n,status:e,theme:{base:{palette:r,shadow:o,spacing:i},components:{card:a,"form-field":c,"radio-check":{label:u},"form-control":{":hover":{"border-color":d}}}}})=>{const p=e==="error"?c.error["status-color"]:r["border-line"];return y`
      min-width: min-content;
      cursor: pointer;
      background-color: ${a.background};
      border-radius: ${a["border-radius"]};
      border: 0.0625rem solid ${p};
      padding: ${i};

      ${t&&y`
        cursor: not-allowed;
      `}
      ${!(t||n)&&y`
        :hover:not(:focus-within) {
          border-color: ${d};

          ${be} ${jt} {
            border-color: ${d};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${be} {
        display: flex;
        align-items: center;
        color: ${u.color};
        font-weight: ${u["font-weight"]};
        margin: 0;
      }

      > ${_t} {
        margin: 0;
        padding-inline-start: calc(${i} / 4);
      }
    `});hi.defaultProps=X;const jl=f.forwardRef(function(n,e){const r=tt(),o=Ee(),{testId:i,type:a,id:c=r,label:u,required:d=!1,disabled:p=!1,readOnly:g=!1,indeterminate:m=!1,checked:b,defaultChecked:w,variant:S="simple",onClick:_,onKeyDown:x,onChange:$,status:I,info:O,additionalInfo:T,ariaDescribedby:P,suppressAnnouncements:k,className:B,...W}=n,A=_e(i,fi),j=a==="radio",V=S==="card",F=ye(e),N=tt();return f.useEffect(()=>{!j&&F.current&&(F.current.indeterminate=!!m)},[F,m,j]),f.useEffect(()=>{if(!F.current)return;const R=F.current.nextSibling;if((R==null?void 0:R.nodeName.toUpperCase())!=="LABEL")return;const Y=new AbortController;return R.addEventListener("mousedown",C=>{F.current===xn()&&C.preventDefault()},{signal:Y.signal}),()=>{Y.abort()}},[]),l.jsx(wt,{testId:A,as:V?hi:vn,label:l.jsxs(l.Fragment,{children:[l.jsx(jt,{status:I,isRadio:j,as:ft,required:d,disabled:p,readOnly:g}),u,g&&l.jsx(Dl,{id:N,children:o("read_only")})]}),labelAs:V?"div":void 0,id:c,required:d,disabled:p,readOnly:g,status:I,info:O,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:T,suppressAnnouncements:k,children:l.jsx(mr,{"data-testid":A.control,...W,className:ir("radio-check",B,{variant:S,type:a}),id:c,type:a,required:d,checked:b,defaultChecked:w,"aria-describedby":g?`${P} ${N}`:P,disabled:p,readOnly:g,onChange:$,onClick:R=>{g&&R.preventDefault(),_==null||_(R)},onKeyDown:R=>{a==="checkbox"&&g&&R.key===" "&&R.preventDefault(),a==="radio"&&g&&R.key.includes("Arrow")&&R.preventDefault(),x==null||x(R)},ref:F})})}),Nl=xe(jl,fi);it(Al,Rl,Do);const pi=L(Pe)(({theme:t,status:n})=>y`
    height: 1em;
    width: 1em;
    color: ${je(()=>sr(t.components["form-field"][n]["status-color"],t.base.palette["primary-background"]),()=>t.components["form-field"][n]["status-color"])};
    vertical-align: baseline;
  `);pi.defaultProps=X;const mi=L(Ne)(({theme:t})=>y`
    margin-block-start: calc(${t.base.spacing} / 2);
    align-self: start;
  `);mi.defaultProps=X;const _t=L.div(({status:t,theme:{base:{"font-size":n,"font-scale":e,spacing:r,palette:o},components:{"form-field":i}}})=>{const{xxs:a}=St(n,e);return y`
      max-width: max-content;
      font-size: ${a};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${t&&i[t]&&y`
        color: ${je(()=>sr(i[t]["status-color"],o["primary-background"]),()=>i[t]["status-color"])};
      `}
    `});_t.defaultProps=X;const Kn=L.div``,gr=L.div(t=>{const{asFieldset:n,showAdditionalInfo:e,disabled:r,required:o,theme:{base:{palette:{urgent:i},"disabled-opacity":a,spacing:c,"hit-area":{"compact-min":u}}}}=t;return y`
    ${r&&y`
      opacity: ${a};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${mr}:only-of-type) {
      ${_t} {
        min-width: 100%;
      }
    }

    ${Ct}:has(${vn}) {
      flex-shrink: 0;
    }

    > ${be}, > ${Kn}, > ${Ct}:has(> ${be}) {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${c});
        min-height: ${u};
      }
    }

    > ${be}, > ${Kn} > ${be}, > ${Ct} > ${be} {
      ${o&&y`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${i};
        }
      `}

      ${r&&y`
        cursor: not-allowed;
      `}
    }

    ${n&&e&&y`
      > ${Ct} > ${be} {
        display: block;
      }

      > ${Ct}:has(> ${be}) > ${di} {
        align-self: flex-start;
      }
    `}
  `});gr.defaultProps=X;const Jn=L(Ne)(({theme:{base:{"font-size":t,"font-scale":n,"border-radius":e,spacing:r,palette:o},components:{"form-control":{"border-radius":i,"border-width":a},"form-field":c}}})=>{const{xxs:u}=St(t,n),d=je(()=>sr(c.pending["status-color"],o["primary-background"]),()=>c.pending["status-color"]),p=os(d),g=je(()=>_n(d)),m=g&&Qt(g,.4);return y`
    background-color: ${d};
    color: ${g};
    font-size: ${u};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${a} solid ${m};
      border-end-start-radius: calc(${e} * ${i});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${e} * ${i});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${p.foreground};
      background-color: ${p.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});Jn.defaultProps=X;const zl={error:"warn-solid",warning:"diamond-minus",success:"check"},Fl=f.forwardRef(function(n,e){const r=tt(),{testId:o,children:i,id:a=r,as:c="div",label:u,labelAs:d="label",labelFor:p=a,labelId:g,labelHidden:m=!1,labelAfter:b=!1,info:w,status:S,suppressAnnouncements:_,isRadioCheck:x,charLimitDisplay:$,required:I=!1,disabled:O=!1,readOnly:T=!1,inline:P=!1,onClear:k,actions:B,container:W,additionalInfo:A,onResolveSuggestion:j,"aria-describedby":V,className:F,...N}=n,R=_e(o,ui),Y=c==="fieldset"||typeof c!="string"&&"target"in c&&c.target==="fieldset",C=Ee(),{announceAssertive:U}=nr(),G=Y||d==="legend"?"span":d,J=S==="pending"&&!!j,z=ye(e),ee=f.useRef(null),[Me,Q]=f.useState(null),te=!!A&&!O&&!m,ge=Y&&!g?`${a}-label`:g,Re=l.jsxs(l.Fragment,{children:[l.jsx(vl,{"data-testid":R.label,id:ge,as:G,htmlFor:G==="label"?p:void 0,labelHidden:m,onClick:ie=>{T&&ie.preventDefault()},inline:P,ref:ee,children:u}),te&&Me&&l.jsx(_l,{"data-testid":R.additionalInfo,heading:A.heading,contextualLabel:Me,children:A.content})]});let se;!x&&!Y&&!m?se=l.jsx(re,{as:Kn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:Re}):Y&&!m?se=l.jsx(re,{container:{alignItems:"end",justify:te&&!x?"between":void 0},children:Re}):se=Re,f.useEffect(()=>{var ie;Q(((ie=ee.current)==null?void 0:ie.textContent)??null)},[u]),f.useEffect(()=>{var q,st;if(_||S!=="error"&&S!=="warning")return;let ie=C(S);typeof w=="string"&&(ie=`${ie} ${w}`),(q=ee.current)!=null&&q.textContent&&(ie=`${(st=ee.current)==null?void 0:st.textContent} ${ie}`),U({message:ie,type:S})},[S,w]);let ze;if(Y||f.Children.count(i)>1)ze=i;else{const ie=f.Children.only(i).props["aria-describedby"];ze=f.cloneElement(i,{"aria-describedby":[ie,w&&!T?`${a}-info`:void 0].join(" ").trim()||void 0})}B&&(ze=l.jsxs(re,{container:{alignItems:"center",gap:.5},children:[ze,l.jsx(Ea,{items:B,menuAt:3})]}));let He=l.jsxs(re,{id:`${a}-info`,"data-testid":R.info,status:S,as:_t,container:{alignItems:"center",gap:.5},children:[S&&S!=="pending"&&l.jsxs(l.Fragment,{children:[l.jsx(re,{item:{alignSelf:"start"},as:pi,status:S,name:zl[S]}),l.jsx(Kt,{children:`${C(S)} `})]}),w]});if($&&(He=l.jsxs(re,{container:{justify:He?"between":"end",gap:1},children:[He,l.jsx(re,{item:{shrink:0},children:$})]})),J){const ie=tr(z);He=l.jsxs(re,{container:{alignItems:"start",justify:"between"},children:[l.jsxs(_t,{"data-testid":R.info,status:S,id:`${a}-info`,children:[C("suggestion_info"),l.jsx(Kt,{"aria-live":"polite",children:C("suggestion_assist")})]}),l.jsxs(re,{container:{wrap:"nowrap"},children:[l.jsx(Jn,{"data-testid":R.suggestionReject,onClick:()=>{var q;j(!1),(q=ie[0])==null||q.focus()},"aria-label":`${C("no")}, ${C("reject_suggestion_button_a11y")}${Me?` - ${Me}`:""}`,children:C("no")}),l.jsx(Jn,{"data-testid":R.suggestionAccept,onClick:()=>{var q;j(!0),(q=ie[0])==null||q.focus()},"aria-label":`${C("yes")}, ${C("accept_suggestion_button_a11y")}${Me?` - ${Me}`:""}`,children:C("yes")})]})]})}const Be=ie=>{ie.key==="Enter"&&(ie.target.closest("button")||(ie.preventDefault(),j==null||j(!0)))},rt=[];return V&&rt.push(V),Y&&w&&rt.push(`${a}-info`),l.jsxs(re,{"data-testid":R.root,...N,container:{direction:P?"row":"column",alignItems:P?"center":void 0,wrap:x?"wrap":void 0,...W},as:gr,asFieldset:Y,isRadioCheck:x,showAdditionalInfo:te,id:`${a}-field`,forwardedAs:c,required:I,disabled:O,readOnly:T,onKeyDown:J?Be:void 0,"aria-describedby":rt.length?rt.join(" "):void 0,"aria-labelledby":Y?ge:void 0,ref:z,className:ir("form-field",F,{status:S}),children:[(Y||!b)&&se,ze,!Y&&b&&se,!T&&He,x&&k&&l.jsx(mi,{variant:"link",onClick:()=>{k()},children:C("clear_selection")})]})}),wt=xe(Fl,ui),Ul=L.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${ft} {
    position: relative;
  }

  > :first-child {
    > ${ft}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${ft}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`;Ul.defaultProps=X;const gi=L.input(({theme:{base:t,components:n}})=>y`
    width: 100%;
    height: ${n.input.height};
    min-height: ${t["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${n.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${t["hit-area"]["finger-min"]};
    }
  `);gi.defaultProps=X;const lo=Te("input",["control",...Dt]),Hl=xe(f.forwardRef(function(n,e){const r=tt(),{testId:o,id:i=r,value:a,defaultValue:c,required:u=!1,disabled:d=!1,readOnly:p=!1,label:g,additionalInfo:m,labelHidden:b,info:w,status:S,actions:_,onResolveSuggestion:x,className:$,...I}=n,O=_e(o,lo),T={};Bn(n,"value")?T.value=a??"":Bn(n,"defaultValue")&&(T.defaultValue=c??"");const P=l.jsx(ft,{"data-testid":O.control,ref:e,id:i,required:u,disabled:d,readOnly:p,status:S,hasSuggestion:!!x&&S==="pending",...T,autoComplete:"_off",...I,as:gi,className:ir("input",$)});return g?l.jsx(wt,{testId:O,additionalInfo:m,label:g,labelHidden:b,id:i,info:w,readOnly:p,status:S,required:u,disabled:d,actions:_,onResolveSuggestion:x,children:P}):P}),lo),Bl=(t,n)=>t?n==="height"?`${t.scrollHeight}px`:`${t.scrollWidth}px`:"",co=t=>{const{status:n,dimension:e,transitionSpeed:r,transitionTimingFunction:o,min:i,max:a,nullWhenCollapsed:c,el:u}=t,d={};let p=a;return u&&!a&&(p=Bl(u,e)),(n==="expanded"||n==="collapsed")&&((a||i)&&(d[e]=n==="expanded"?p:i||0,d[`overflow${e==="width"?"X":"Y"}`]="hidden"),n==="collapsed"&&!c&&!i&&(d[e]=0,d.overflow="hidden",d.visibility="hidden")),(n==="expanding"||n==="collapsing")&&(d[e]=n==="expanding"?p:i||0,d.overflow="hidden",d.transitionProperty=e,d.transitionDuration=`max(${r}, 0.01ms)`,d.transitionTimingFunction=o),d},Wl=f.forwardRef(function(n,e){const{base:{animation:r}}=Jt(),{children:o,dimension:i="height",collapsed:a=!1,onBeforeExpand:c,onAfterExpand:u,onBeforeCollapse:d,onAfterCollapse:p,transitionSpeed:g=r.speed,min:m,max:b,nullWhenCollapsed:w=!1,as:S="div",..._}=n,[x,$]=f.useState(a?"collapsed":"expanded"),I=f.useState(),O=I[1];let T=I[0];const P=ar(x),k=ye(e),B=f.useCallback(W=>{W.target!==k.current||W.propertyName!==i||$(x==="expanding"?"expanded":"collapsed")},[k.current,x]);return f.useLayoutEffect(()=>{const W=a,A=!a,j=["expanded","expanding"].includes(x),V=["collapsed","collapsing"].includes(x);A&&V?(c==null||c(),$("expanding")):W&&j&&(d==null||d(),$("collapsing")),x==="expanded"&&P!=="expanded"?u==null||u():x==="collapsed"&&P!=="collapsed"&&(p==null||p()),O(co({dimension:i,min:m,max:b,transitionSpeed:g,nullWhenCollapsed:w,status:x,el:k.current,transitionTimingFunction:r.timing.ease}))},[a,x,m,b]),x!==P&&["expanded","collapsed"].includes(P)&&(T=co({dimension:i,min:m,max:b,transitionSpeed:g,nullWhenCollapsed:w,status:x==="expanding"?"collapsing":"expanding",el:k.current,transitionTimingFunction:r.timing.ease})),x==="collapsed"&&w&&!m?null:l.jsx(S,{ref:k,onTransitionEnd:B,..._,inert:x==="collapsed"&&!w&&!m?"":void 0,style:T,children:o})}),Gl=L(Ne)``,Vl=({children:t,lines:n})=>{const[e,r]=f.useState(!0),[o,i]=f.useState(!1),a=f.useRef(null),c=Ee(),u=f.useMemo(()=>{if(!is)return 1/0;const d=Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)*1.25;return n*d},[]);return f.useLayoutEffect(()=>{if(!a.current)return;const d=new ResizeObserver(p=>{const g=p.some(({target:m,contentRect:b})=>{if(m===a.current)return b.height>u});i(g)});return d.observe(a.current),()=>{d.disconnect()}},[a.current,u]),l.jsxs(l.Fragment,{children:[l.jsx(Wl,{collapsed:e,min:o?`${u}px`:"max-content",children:l.jsx("div",{ref:a,children:t})}),o&&l.jsx(Gl,{variant:"link",onClick:()=>r(d=>!d),children:c(e?"show_more":"show_less")})]})},ql=L.span`
  display: inline-block;
  position: relative;
`,Yl=()=>{const t=Ee();return l.jsxs(ql,{children:[l.jsx("span",{"aria-hidden":!0,children:"––"}),l.jsx(Kt,{children:t("no_value")})]})},bi=Te("field-value-list",[]),uo=Te("field-value-item",["name","value"]),Xl=L.dt`
  word-break: break-word;
`,Zl=L.dd`
  word-break: break-word;
`,Pt=L.div``,br=L.dl(({variant:t,theme:n})=>{const{components:{"field-value-list":{inline:{detached:e}}}}=n;return y`
    width: 100%;

    ${t==="value-comparison"&&y`
      dt {
        width: 100%;
      }
      && dd {
        text-align: end;
        padding-inline-start: calc(2 * ${n.base.spacing});

        /* Unset negative margin from Details to prevent field value misalignment */
        margin: unset;
      }
      ${be} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}

    ${e&&t==="inline"&&y`
      dt {
        width: 100%;
        padding-inline-end: calc(${n.base.spacing});
      }
      ${be} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${Pt}),
      dt:has(+ dd + ${Pt}),
      ${Pt}:has(+ dt + dd),
      ${Pt}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}
  `});br.defaultProps=X;const fo=xe(({testId:t,name:n,value:e,variant:r="inline",truncate:o=!0})=>{const i=_e(t,uo),a=typeof e=="string"&&o?l.jsx(Vl,{lines:3,children:e}):e,c=l.jsxs(l.Fragment,{children:[l.jsx(be,{"data-testid":i.name,as:Xl,children:n}),l.jsx(Zl,{"data-testid":i.value,children:e?a:l.jsx(Yl,{})})]});return r==="stacked"?l.jsx(Pt,{"data-testid":i.root,children:c}):l.jsx(l.Fragment,{children:c})},uo),Kl=f.forwardRef(function({testId:n,fields:e,variant:r="inline",...o},i){const a=_e(n,bi),c=ye(i),u=ss("xs",{breakpointRef:c,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:d}}}}=Jt();return l.jsx(yt,{"data-testid":a.root,...o,ref:c,container:{cols:["inline","value-comparison"].includes(r)&&u?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:!d&&r!=="value-comparison"?2:0,rowGap:!d&&r!=="value-comparison"?1:.5},as:br,role:"none",variant:u?r:"stacked",children:e.map(({id:p,name:g,value:m,truncate:b=!0,variant:w})=>{const S={name:g,variant:(w??r)==="stacked"||!u?"stacked":"inline"};return typeof m=="string"?l.jsx(fo,{...S,value:m,truncate:b},p??g):l.jsx(fo,{...S,value:m},p??g)})})});xe(Kl,bi);const Tn=L.div(({disabled:t,theme:{base:{palette:n,"disabled-opacity":e},components:{card:r,"form-control":{":focus":{"box-shadow":o,"border-color":i}}}}})=>y`
      min-width: min-content;
      max-width: max-content;
      background-color: ${r.background};
      border-radius: ${r["border-radius"]};
      border: 0.0625rem solid ${n["border-line"]};

      ${t&&y`
        cursor: not-allowed;
        opacity: ${e};
      `}

      ${!t&&y`
        :focus {
          box-shadow: ${o};
          border-color: transparent;
          outline: none;

          & ${jt} {
            box-shadow: ${o};
            border-color: ${i};
          }
        }
      `}
    `);Tn.defaultProps=X;const Jl=L(Tn)(({placement:t,size:n})=>{let e;switch(n){case"small":e="2.5rem";break;case"large":e="8.875rem";break;default:e="minmax(2.5rem, auto)";break}return y`
    /* stylelint-disable unit-allowed-list -- "Unexpected unit "fr\`" */
    grid-template-columns: ${t==="inline-end"?`1fr ${e}`:`${e} 1fr`};
    /* stylelint-enable unit-allowed-list */
    grid-template-rows: minmax(2.75rem, 1fr);
  `});L(Tn)(({size:t})=>{let n;switch(t){case"small":n="2.5rem";break;case"large":n="15.125rem";break;default:n="minmax(2.5rem, 15.125rem)"}return y`
    grid-template-rows: ${n} 1fr;
    grid-template-columns: minmax(2.75rem, 1fr);
  `});const yi=L.div(({theme:{base:{palette:t,transparency:n},components:{card:{"border-radius":e}}},placement:r="inline-start",size:o="flexible"})=>y`
      background-color: ${t["app-background"]};
      overflow: hidden;

      img {
        height: 100%;
        object-fit: contain;
      }

      > img {
        aspect-ratio: 4 / 5;

        ${r==="block-start"&&y`
          aspect-ratio: 16 / 9;
          max-height: 100%;
        `}
      }

      ${o==="flexible"&&r!=="block-start"&&y`
        max-width: 8.875rem;
        height: var(--content-height);
      `};

      ${o==="large"&&y`
        min-height: 11.0625rem;
      `}

      ${o==="small"&&y`
        aspect-ratio: unset;

        > img {
          max-width: 2rem;
          max-height: 2rem;
          aspect-ratio: 1 / 1;
        }
      `}

      /* Recalculation of the border radius by substracting border width */
      ${r==="inline-start"&&y`
        border-start-start-radius: calc(${e} - 0.0625rem);
        border-end-start-radius: calc(${e} - 0.0625rem);
      `}

      ${r==="inline-end"&&y`
        border-end-end-radius: calc(${e} - 0.0625rem);
        border-start-end-radius: calc(${e} - 0.0625rem);
      `}

      ${r==="block-start"&&y`
        border-start-start-radius: calc(${e} - 0.0625rem);
        border-start-end-radius: calc(${e} - 0.0625rem);
      `}

      ${Rt} {
        opacity: ${n["transparent-3"]};
      }
    `);yi.defaultProps=X;const Ql=L.ul`
  width: 100%;
  list-style-type: none;
`,ec=L.div(({theme:t})=>y`
    padding: ${t.base.spacing};

    ${br}, ${Ql} {
      margin-block-start: ${t.base.spacing};
    }

    ${Pt} {
      grid-column: 1 / -1;
    }
  `);ec.defaultProps=X;const wi=Te("radio-check-group",[...Dt]),tc=L.fieldset(()=>y`
    flex-wrap: nowrap;

    &[disabled] {
      > ${gr} {
        opacity: unset;
      }
    }

    ${Tn} {
      max-width: 100%;
    }

    ${Jl} ${yi} {
      /* To enlarge the image containers to the size of the biggest one */
      min-height: 100%;
    }

    ${vn} > ${_t} {
      display: none;
    }
  `),nc=f.forwardRef(function(n,e){const r=tt(),{testId:o,children:i,name:a=r,disabled:c=!1,required:u=!1,onChange:d,readOnly:p,inline:g=!1,autoStack:m=!0,variant:b="simple",onClear:w,...S}=n,_=_e(o,wi),x=Jt(),[$,I]=To(),[O,T]=f.useState(g),P=f.useRef(g),k=f.useRef(0),B=ye(e);fs(B,{selector:"[data-main-focus]",cycle:!1,dir:"left-right"}),f.useEffect(()=>{if(T(g),g&&$&&$.lastChild&&m){const A=new IntersectionObserver(V=>{V[0].intersectionRatio<1&&(V[0].rootBounds&&(k.current=V[0].rootBounds.width+1),P.current=!1,T(!1))},{root:$,threshold:1}),j=new ResizeObserver(V=>{!P.current&&V[0].contentRect.width>k.current&&(P.current=!0,T(!0))});return A.observe($.lastChild),j.observe($),()=>{A.disconnect(),j.disconnect()}}},[$,g,m]);const W=f.useMemo(()=>f.Children.map(i,A=>f.cloneElement(A,{name:a,status:S.status,disabled:c||A.props.disabled,readOnly:p||A.props.readOnly,variant:b==="card-grid"?"card":b,suppressAnnouncements:!0,onChange:d?j=>{var V,F;p||A.props.readOnly||((F=(V=A.props).onChange)==null||F.call(V,j),d(j))}:A.props.onChange})),[i,a,c,p,b,d]);return l.jsx(wt,{testId:_,as:tc,ref:B,name:a,disabled:c,required:u,...S,isRadioCheck:!0,onClear:w,onMouseDown:A=>{var j;(j=S.onMouseDown)==null||j.call(S,A),B.current&&B.current.contains(xn())&&(!(A.target instanceof Element)||!A.target.closest("label")||A.preventDefault())},children:b==="card-grid"?l.jsx(yt,{container:{gap:1,cols:O?m?`repeat(auto-fit, minmax(min(100%, ${x.base["content-width"].sm}), 1fr))`:`repeat(${f.Children.count(i)}, 1fr)`:"minmax(min-content, max-content)",autoRows:"1fr"},children:W}):l.jsx(re,{ref:I,container:{direction:O?"row":"column",colGap:O?1.5:2,rowGap:b==="card"?1:0,wrap:"wrap"},children:W})})}),ho=xe(nc,wi),xi=Te("select",["control",...Dt]),po=t=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25' fill='${encodeURIComponent(t)}'%3E%3Cpath d='M21 8v2.75l-8.5 6.5-8.5-6.5V8l8.5 6.5z'/%3E%3C/svg%3E")`,_i=L.select(t=>{const{readOnly:n,hasStatus:e}=t,{base:r,components:{"form-control":{"foreground-color":o,"background-color":i},select:a}}=t.theme,{rtl:c}=nt();return y`
    appearance: none;
    -webkit-appearance: none;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: ${a.height};
    min-height: ${r["hit-area"]["mouse-min"]};
    padding-inline-start: ${a.padding};
    padding-inline-end: calc(4 * ${r.spacing});
    background-image: ${po(o)};
    background-repeat: no-repeat;
    background-size: calc(2 * ${r.spacing}) auto;
    background-position: ${c?r.spacing:`calc(100% - ${r.spacing}) `} 60%;
    border-width: ${a["border-width"]};
    border-radius: calc(${r["border-radius"]} * ${a["border-radius"]});

    @media (forced-colors: active) {
      background-image: ${po("CanvasText")};
    }

    ${n&&y`
      background-image: none;
    `}

    ${!e&&y`
      border-color: ${a["border-color"]};
    `}

    &:has(option[value='']:checked, option:not([value]):checked) {
      color: ${xt(r.transparency["transparent-3"],o,i)};
    }

    & option {
      color: ${o};

      &[value=''],
      &:not([value]) {
        color: ${xt(r.transparency["transparent-3"],o,i)};
      }
    }

    &::-ms-expand {
      display: none;
    }

    @media (pointer: coarse) {
      min-height: ${r["hit-area"]["finger-min"]};
    }
  `});_i.defaultProps=X;const rc=f.forwardRef(function(n,e){const r=tt(),o=Ee(),{testId:i,additionalInfo:a,children:c,id:u=r,label:d,labelHidden:p,info:g,status:m,required:b=!1,disabled:w=!1,readOnly:S=!1,actions:_,onResolveSuggestion:x,...$}=n,I=_e(i,xi),O=l.jsx(ft,{"data-testid":I.control,...$,as:_i,hasSuggestion:m==="pending"&&!!x,id:u,hasStatus:!!m,status:m,required:b,disabled:w,label:d,readOnly:S,ref:e,onMouseDown:S?T=>{T.preventDefault()}:void 0,onKeyDown:S?T=>{["Escape","Tab","Space"].includes(T.key)||T.preventDefault()}:void 0,children:c});return d?l.jsx(wt,{testId:I,label:l.jsxs(l.Fragment,{children:[d,S&&l.jsx(Kt,{children:` ${o("read_only")}`})]}),labelHidden:p,id:u,info:g,status:m,required:b,disabled:w,readOnly:S,actions:_,onResolveSuggestion:x,additionalInfo:a,children:O}):O}),oc=xe(rc,xi),ic={},gn=t=>{const{children:n,...e}=t;return l.jsx("option",{...e,children:n})};gn.defaultProps=ic;const Si=Te("radio-button",["control",...Dt]),sc=f.forwardRef(function({testId:n,...e},r){const o=_e(n,Si);return l.jsx(Nl,{...e,testId:o,type:"radio",ref:r})}),Hn=xe(sc,Si);/*!
 * Signature Pad v5.1.4 | https://github.com/szimek/signature_pad
 * (c) 2026 Szymon Nowak | Released under the MIT license
 */var wn=class{constructor(t,n,e,r){Z(this,"x");Z(this,"y");Z(this,"pressure");Z(this,"time");if(isNaN(t)||isNaN(n))throw new Error(`Point is invalid: (${t}, ${n})`);this.x=+t,this.y=+n,this.pressure=e||0,this.time=r||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}},ac=class $i{constructor(n,e,r,o,i,a){Z(this,"startPoint");Z(this,"control2");Z(this,"control1");Z(this,"endPoint");Z(this,"startWidth");Z(this,"endWidth");this.startPoint=n,this.control2=e,this.control1=r,this.endPoint=o,this.startWidth=i,this.endWidth=a}static fromPoints(n,e){const r=this.calculateControlPoints(n[0],n[1],n[2]).c2,o=this.calculateControlPoints(n[1],n[2],n[3]).c1;return new $i(n[1],r,o,n[2],e.start,e.end)}static calculateControlPoints(n,e,r){const o=n.x-e.x,i=n.y-e.y,a=e.x-r.x,c=e.y-r.y,u={x:(n.x+e.x)/2,y:(n.y+e.y)/2},d={x:(e.x+r.x)/2,y:(e.y+r.y)/2},p=Math.sqrt(o*o+i*i),g=Math.sqrt(a*a+c*c),m=u.x-d.x,b=u.y-d.y,w=p+g==0?0:g/(p+g),S={x:d.x+m*w,y:d.y+b*w},_=e.x-S.x,x=e.y-S.y;return{c1:new wn(u.x+_,u.y+x),c2:new wn(d.x+_,d.y+x)}}length(){let e=0,r,o;for(let i=0;i<=10;i+=1){const a=i/10,c=this.point(a,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),u=this.point(a,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const d=c-r,p=u-o;e+=Math.sqrt(d*d+p*p)}r=c,o=u}return e}point(n,e,r,o,i){return e*(1-n)*(1-n)*(1-n)+3*r*(1-n)*(1-n)*n+3*o*(1-n)*n*n+i*n*n*n}},lc=class{constructor(){Z(this,"_et");try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,n,e){this._et.addEventListener(t,n,e)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,n,e){this._et.removeEventListener(t,n,e)}};function cc(t,n=250){let e=0,r=null,o,i,a;const c=()=>{e=Date.now(),r=null,o=t.apply(i,a),r||(i=null,a=[])};return function(...d){const p=Date.now(),g=n-(p-e);return i=this,a=d,g<=0||g>n?(r&&(clearTimeout(r),r=null),e=p,o=t.apply(i,a),r||(i=null,a=[])):r||(r=window.setTimeout(c,g)),o}}var dc=class Qn extends lc{constructor(e,r={}){super();Z(this,"canvas");Z(this,"dotSize");Z(this,"minWidth");Z(this,"maxWidth");Z(this,"penColor");Z(this,"minDistance");Z(this,"velocityFilterWeight");Z(this,"compositeOperation");Z(this,"backgroundColor");Z(this,"throttle");Z(this,"canvasContextOptions");Z(this,"_ctx");Z(this,"_drawingStroke",!1);Z(this,"_isEmpty",!0);Z(this,"_dataUrl");Z(this,"_dataUrlOptions");Z(this,"_lastPoints",[]);Z(this,"_data",[]);Z(this,"_lastVelocity",0);Z(this,"_lastWidth",0);Z(this,"_strokeMoveUpdate");Z(this,"_strokePointerId");this.canvas=e,this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle=r.throttle??16,this.minDistance=r.minDistance??5,this.dotSize=r.dotSize||0,this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=r.compositeOperation||"source-over",this.canvasContextOptions=r.canvasContextOptions??{},this._strokeMoveUpdate=this.throttle?cc(Qn.prototype._strokeUpdate,this.throttle):Qn.prototype._strokeUpdate,this._handleMouseDown=this._handleMouseDown.bind(this),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this),this._handleTouchMove=this._handleTouchMove.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handlePointerDown=this._handlePointerDown.bind(this),this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this),this._handlePointerCancel=this._handlePointerCancel.bind(this),this._handleTouchCancel=this._handleTouchCancel.bind(this),this._ctx=e.getContext("2d",this.canvasContextOptions),this.clear(),this.on()}clear(){const{_ctx:e,canvas:r}=this;e.fillStyle=this.backgroundColor,e.clearRect(0,0,r.width,r.height),e.fillRect(0,0,r.width,r.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0,this._dataUrl=void 0,this._dataUrlOptions=void 0,this._strokePointerId=void 0}redraw(){const e=this._data,r=this._dataUrl,o=this._dataUrlOptions;this.clear(),r&&this.fromDataURL(r,o),this.fromData(e,{clear:!1})}fromDataURL(e,r={}){return new Promise((o,i)=>{const a=new Image,c=r.ratio||window.devicePixelRatio||1,u=r.width||this.canvas.width/c,d=r.height||this.canvas.height/c,p=r.xOffset||0,g=r.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,p,g,u,d),o()},a.onerror=m=>{i(m)},a.crossOrigin="anonymous",a.src=e,this._isEmpty=!1,this._dataUrl=e,this._dataUrlOptions={...r}})}toDataURL(e="image/png",r){switch(e){case"image/svg+xml":return typeof r!="object"&&(r=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(r))}`;default:return typeof r!="number"&&(r=void 0),this.canvas.toDataURL(e,r)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none",this.canvas.style.webkitUserSelect="none";const e=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!e?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.style.webkitUserSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerDown),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this._removeMoveUpEventListeners()}_getListenerFunctions(){const e=window.document===this.canvas.ownerDocument?window:this.canvas.ownerDocument.defaultView??this.canvas.ownerDocument;return{addEventListener:e.addEventListener.bind(e),removeEventListener:e.removeEventListener.bind(e)}}_removeMoveUpEventListeners(){const{removeEventListener:e}=this._getListenerFunctions();e("pointermove",this._handlePointerMove),e("pointerup",this._handlePointerUp),e("pointercancel",this._handlePointerCancel),e("mousemove",this._handleMouseMove),e("mouseup",this._handleMouseUp),e("touchmove",this._handleTouchMove),e("touchend",this._handleTouchEnd),e("touchcancel",this._handleTouchCancel)}isEmpty(){return this._isEmpty}fromData(e,{clear:r=!0}={}){r&&this.clear(),this._fromData(e,this._drawCurve.bind(this),this._drawDot.bind(this),this._drawLine.bind(this)),this._data=this._data.concat(e)}toData(){return this._data}_isLeftButtonPressed(e,r){return r?e.buttons===1:(e.buttons&1)===1}_pointerEventToSignatureEvent(e){return{event:e,type:e.type,x:e.clientX,y:e.clientY,pressure:"pressure"in e?e.pressure:0}}_touchEventToSignatureEvent(e){const r=e.changedTouches[0];return{event:e,type:e.type,x:r.clientX,y:r.clientY,pressure:r.force}}_handleMouseDown(e){!this._isLeftButtonPressed(e,!0)||this._drawingStroke||this._strokeBegin(this._pointerEventToSignatureEvent(e))}_handleMouseMove(e){if(!this._isLeftButtonPressed(e,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(e),!1);return}this._strokeMoveUpdate(this._pointerEventToSignatureEvent(e))}_handleMouseUp(e){this._isLeftButtonPressed(e)||this._strokeEnd(this._pointerEventToSignatureEvent(e))}_handleTouchStart(e){e.targetTouches.length!==1||this._drawingStroke||(e.cancelable&&e.preventDefault(),this._strokeBegin(this._touchEventToSignatureEvent(e)))}_handleTouchMove(e){if(e.targetTouches.length===1){if(e.cancelable&&e.preventDefault(),!this._drawingStroke){this._strokeEnd(this._touchEventToSignatureEvent(e),!1);return}this._strokeMoveUpdate(this._touchEventToSignatureEvent(e))}}_handleTouchEnd(e){e.targetTouches.length===0&&(e.cancelable&&e.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(e)))}_handlePointerCancel(e){this._allowPointerId(e)&&(e.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(e),!1))}_handleTouchCancel(e){e.cancelable&&e.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(e),!1)}_getPointerId(e){return e.persistentDeviceId||e.pointerId}_allowPointerId(e,r=!1){return typeof this._strokePointerId>"u"?r:this._getPointerId(e)===this._strokePointerId}_handlePointerDown(e){this._drawingStroke||!this._isLeftButtonPressed(e)||!this._allowPointerId(e,!0)||(this._strokePointerId=this._getPointerId(e),e.preventDefault(),this._strokeBegin(this._pointerEventToSignatureEvent(e)))}_handlePointerMove(e){if(this._allowPointerId(e)){if(!this._isLeftButtonPressed(e,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(e),!1);return}e.preventDefault(),this._strokeMoveUpdate(this._pointerEventToSignatureEvent(e))}}_handlePointerUp(e){this._isLeftButtonPressed(e)||!this._allowPointerId(e)||(e.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(e)))}_getPointGroupOptions(e){return{penColor:e&&"penColor"in e?e.penColor:this.penColor,dotSize:e&&"dotSize"in e?e.dotSize:this.dotSize,minWidth:e&&"minWidth"in e?e.minWidth:this.minWidth,maxWidth:e&&"maxWidth"in e?e.maxWidth:this.maxWidth,velocityFilterWeight:e&&"velocityFilterWeight"in e?e.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:e&&"compositeOperation"in e?e.compositeOperation:this.compositeOperation}}_strokeBegin(e){if(!this.dispatchEvent(new CustomEvent("beginStroke",{detail:e,cancelable:!0})))return;const{addEventListener:o}=this._getListenerFunctions();switch(e.event.type){case"mousedown":o("mousemove",this._handleMouseMove,{passive:!1}),o("mouseup",this._handleMouseUp,{passive:!1});break;case"touchstart":o("touchmove",this._handleTouchMove,{passive:!1}),o("touchend",this._handleTouchEnd,{passive:!1}),o("touchcancel",this._handleTouchCancel,{passive:!1});break;case"pointerdown":o("pointermove",this._handlePointerMove,{passive:!1}),o("pointerup",this._handlePointerUp,{passive:!1}),o("pointercancel",this._handlePointerCancel,{passive:!1});break}this._drawingStroke=!0;const i=this._getPointGroupOptions(),a={...i,points:[]};this._data.push(a),this._reset(i),this._strokeUpdate(e)}_strokeUpdate(e){if(!this._drawingStroke)return;if(this._data.length===0){this._strokeBegin(e);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:e}));const r=this._createPoint(e.x,e.y,e.pressure),o=this._data[this._data.length-1],i=o.points,a=i.length>0&&i[i.length-1],c=a?r.distanceTo(a)<=this.minDistance:!1,u=this._getPointGroupOptions(o);if(!a||!(a&&c)){const d=this._addPoint(r,u);a?d&&this._drawCurve(d,u):this._drawDot(r,u),i.push({time:r.time,x:r.x,y:r.y,pressure:r.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:e}))}_strokeEnd(e,r=!0){this._removeMoveUpEventListeners(),this._drawingStroke&&(r&&this._strokeUpdate(e),this._drawingStroke=!1,this._strokePointerId=void 0,this.dispatchEvent(new CustomEvent("endStroke",{detail:e})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerDown,{passive:!1})}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown,{passive:!1})}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart,{passive:!1})}_reset(e){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(e.minWidth+e.maxWidth)/2,this._ctx.fillStyle=e.penColor,this._ctx.globalCompositeOperation=e.compositeOperation}_createPoint(e,r,o){const i=this.canvas.getBoundingClientRect();return new wn(e-i.left,r-i.top,o,new Date().getTime())}_addPoint(e,r){const{_lastPoints:o}=this;if(o.push(e),o.length>2){o.length===3&&o.unshift(o[0]);const i=this._calculateCurveWidths(o[1],o[2],r),a=ac.fromPoints(o,i);return o.shift(),a}return null}_calculateCurveWidths(e,r,o){const i=o.velocityFilterWeight*r.velocityFrom(e)+(1-o.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(i,o),c={end:a,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=a,c}_strokeWidth(e,r){return Math.max(r.maxWidth/(e+1),r.minWidth)}_drawCurveSegment(e,r,o){const i=this._ctx;i.moveTo(e,r),i.arc(e,r,o,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(e,r){const o=this._ctx,i=e.endWidth-e.startWidth,a=Math.ceil(e.length())*2;o.beginPath(),o.fillStyle=r.penColor;for(let c=0;c<a;c+=1){const u=c/a,d=u*u,p=d*u,g=1-u,m=g*g,b=m*g;let w=b*e.startPoint.x;w+=3*m*u*e.control1.x,w+=3*g*d*e.control2.x,w+=p*e.endPoint.x;let S=b*e.startPoint.y;S+=3*m*u*e.control1.y,S+=3*g*d*e.control2.y,S+=p*e.endPoint.y;const _=Math.min(e.startWidth+p*i,r.maxWidth);this._drawCurveSegment(w,S,_)}o.closePath(),o.fill()}_getDotSize(e){return e.dotSize>0?e.dotSize:(e.minWidth+e.maxWidth)/2}_drawDot(e,r){const o=this._ctx,i=this._getDotSize(r);o.beginPath(),this._drawCurveSegment(e.x,e.y,i),o.closePath(),o.fillStyle=r.penColor,o.fill()}_drawLine(e,r,o){const i=this._ctx;i.save(),i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(r.x,r.y),i.lineWidth=this._getDotSize(o)*2,i.lineCap="round",i.strokeStyle=o.penColor,i.stroke(),i.restore(),this._isEmpty=!1}_fromData(e,r,o,i){for(const a of e){const{points:c}=a,u=this._getPointGroupOptions(a);if(c.length>2)for(let d=0;d<c.length;d+=1){const p=c[d],g=new wn(p.x,p.y,p.pressure,p.time);d===0&&this._reset(u);const m=this._addPoint(g,u);m&&r(m,u)}else c.length===2?(this._reset(u),i(c[0],c[1],u)):(this._reset(u),o(c[0],u))}}toSVG({includeBackgroundColor:e=!1,includeDataUrl:r=!1}={}){var g,m,b,w,S;const o=this._data,i=Math.max(window.devicePixelRatio||1,1),a=0,c=0,u=this.canvas.width/i,d=this.canvas.height/i,p=document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.setAttribute("xmlns","http://www.w3.org/2000/svg"),p.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),p.setAttribute("viewBox",`${a} ${c} ${u} ${d}`),p.setAttribute("width",u.toString()),p.setAttribute("height",d.toString()),e&&this.backgroundColor){const _=document.createElement("rect");_.setAttribute("width","100%"),_.setAttribute("height","100%"),_.setAttribute("fill",this.backgroundColor),p.appendChild(_)}if(r&&this._dataUrl){const _=((g=this._dataUrlOptions)==null?void 0:g.ratio)||window.devicePixelRatio||1,x=((m=this._dataUrlOptions)==null?void 0:m.width)||this.canvas.width/_,$=((b=this._dataUrlOptions)==null?void 0:b.height)||this.canvas.height/_,I=((w=this._dataUrlOptions)==null?void 0:w.xOffset)||0,O=((S=this._dataUrlOptions)==null?void 0:S.yOffset)||0,T=document.createElement("image");T.setAttribute("x",I.toString()),T.setAttribute("y",O.toString()),T.setAttribute("width",x.toString()),T.setAttribute("height",$.toString()),T.setAttribute("preserveAspectRatio","none"),T.setAttribute("href",this._dataUrl),p.appendChild(T)}return this._fromData(o,(_,{penColor:x})=>{const $=document.createElement("path");if(!isNaN(_.control1.x)&&!isNaN(_.control1.y)&&!isNaN(_.control2.x)&&!isNaN(_.control2.y)){const I=`M ${_.startPoint.x.toFixed(3)},${_.startPoint.y.toFixed(3)} C ${_.control1.x.toFixed(3)},${_.control1.y.toFixed(3)} ${_.control2.x.toFixed(3)},${_.control2.y.toFixed(3)} ${_.endPoint.x.toFixed(3)},${_.endPoint.y.toFixed(3)}`;$.setAttribute("d",I),$.setAttribute("stroke-width",(_.endWidth*2.25).toFixed(3)),$.setAttribute("stroke",x),$.setAttribute("fill","none"),$.setAttribute("stroke-linecap","round"),p.appendChild($)}},(_,{penColor:x,dotSize:$,minWidth:I,maxWidth:O})=>{const T=document.createElement("circle"),P=$>0?$:(I+O)/2;T.setAttribute("r",P.toString()),T.setAttribute("cx",_.x.toString()),T.setAttribute("cy",_.y.toString()),T.setAttribute("fill",x),p.appendChild(T)},(_,x,$)=>{const I=document.createElement("line");I.setAttribute("x1",_.x.toString()),I.setAttribute("y1",_.y.toString()),I.setAttribute("x2",x.x.toString()),I.setAttribute("y2",x.y.toString()),I.setAttribute("stroke",$.penColor),I.setAttribute("stroke-width",(this._getDotSize($)*2).toString()),I.setAttribute("stroke-linecap","round"),p.appendChild(I)}),p.outerHTML}};const vi=t=>{var p;const n=f.useRef(null),e=f.useRef(),{signaturePadRef:r,canvasProps:o,onEndStroke:i,penColor:a}=t,c=Jt(),u=()=>{var g;return(g=e==null?void 0:e.current)==null?void 0:g.clear()},d=f.useCallback(()=>{var g;if(n!=null&&n.current){const m=n.current,b=Math.max(window.devicePixelRatio||1,1);m.width=m.offsetWidth*b,m.height=m.offsetHeight*b,(g=m.getContext("2d"))==null||g.scale(b,b)}},[n]);return f.useEffect(()=>{var S,_;const g=()=>{var x;return d(),(x=e==null?void 0:e.current)==null?void 0:x.on()},m=n==null?void 0:n.current;if(!m)return;const b=new dc(m,{penColor:a||((_=(S=c==null?void 0:c.base)==null?void 0:S.palette)==null?void 0:_["foreground-color"])||"#000"});e.current=b,r&&(r.current=b);const w=()=>{i==null||i()};return i&&b.addEventListener("endStroke",w),g(),window.addEventListener("resize",d),()=>{var x;i&&b.removeEventListener("endStroke",w),window.removeEventListener("resize",d),u(),(x=e==null?void 0:e.current)==null||x.off()}},[a,i,d,r,(p=c==null?void 0:c.base)==null?void 0:p.palette]),l.jsx("canvas",{ref:n,...o})};vi.__docgenInfo={description:"",methods:[],displayName:"Signature",props:{canvasProps:{required:!1,tsType:{name:"ReactCanvasHTMLAttributes",raw:"React.CanvasHTMLAttributes<HTMLCanvasElement>",elements:[{name:"HTMLCanvasElement"}]},description:""},signaturePadRef:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<SignaturePad | undefined>",elements:[{name:"union",raw:"SignaturePad | undefined",elements:[{name:"SignaturePad"},{name:"undefined"}]}]},description:""},onEndStroke:{required:!1,tsType:{name:"CallableFunction"},description:""},penColor:{required:!1,tsType:{name:"string"},description:""}},composes:["Options"]};const uc=L.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Pacifico&family=Satisfy&display=swap');

  canvas {
    border-radius: 4px;
    border: 1px solid ${({theme:t})=>{var n,e;return((e=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:e["border-line"])||"#ccc"}};
    cursor: crosshair;
    touch-action: none;
    background-color: ${({theme:t})=>{var n,e;return((e=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:e["primary-background"])||"#fff"}};
  }
`,fc=L.div`
  padding-top: 0.5rem;
`,hc=L.div`
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:t})=>{var n,e;return((e=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:e["border-line"])||"#ccc"}};
    background-color: ${({theme:t})=>{var n,e;return((e=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:e["primary-background"])||"#fff"}};
  }
`,pc=L.div`
  font-family: ${({fontFamily:t})=>t}, cursive;
  font-size: 1.5rem;
  padding: 0.5rem 0;
`,mo=[{label:"Caveat",value:"Caveat"},{label:"Dancing Script",value:"Dancing Script"},{label:"Pacifico",value:"Pacifico"},{label:"Great Vibes",value:"Great Vibes"},{label:"Satisfy",value:"Satisfy"}],Ti=t=>{const{value:n,getPConnect:e,validatemessage:r,label:o,hideLabel:i=!1,helperText:a,testId:c,displayMode:u}=t,d=f.useRef(),p=e(),g=p.getActionsApi(),m=p.getStateProps().value,[b,w]=f.useState(!1),[S,_]=f.useState(r||a);let{readOnly:x,required:$,disabled:I}=t;[x,$,I]=[x,$,I].map(z=>z===!0||typeof z=="string"&&z==="true");const[O,T]=f.useState(n),[P,k]=f.useState(void 0),[B,W]=f.useState("draw"),[A,j]=f.useState("#000000"),[V,F]=f.useState(""),[N,R]=f.useState(mo[0].value);f.useEffect(()=>T(n),[n]),f.useEffect(()=>{var z;n&&B==="draw"&&((z=d.current)==null||z.fromDataURL(n))},[]),f.useEffect(()=>{r!==""&&k("error"),P!=="success"&&k(r!==""?"error":void 0)},[P,r]);const Y=n?l.jsx(hc,{children:l.jsx($l,{alt:o,src:n})}):null;if(u==="DISPLAY_ONLY")return Y;const C=()=>{w(!0),k(void 0),_(r||a)},U=()=>{var z;B==="draw"?(z=d.current)==null||z.clear():F(""),w(!1),k(void 0),_(r||a)},G=()=>{const z=document.createElement("canvas");z.width=600,z.height=200;const ee=z.getContext("2d");return ee?(ee.fillStyle="#ffffff",ee.fillRect(0,0,z.width,z.height),ee.font=`48px "${N}", cursive`,ee.fillStyle=A,ee.textBaseline="middle",ee.textAlign="center",ee.fillText(V,z.width/2,z.height/2),z.toDataURL("image/png")):""},J=()=>{var ee;let z="";B==="draw"?z=((ee=d.current)==null?void 0:ee.toDataURL("image/svg+xml"))||"":z=G(),z&&(T(z),g.updateFieldValue(m,z),w(!1),k("success"),_(e().getLocalizedValue("Signature captured")))};return l.jsx(uc,{children:l.jsxs(re,{container:{direction:"column",gap:2},children:[u==="DISPLAY_ONLY"||x||I?null:l.jsxs(re,{container:{direction:"row",gap:2,alignItems:"center"},style:{marginBottom:"1rem"},children:[l.jsx(wt,{label:e().getLocalizedValue("Mode"),children:l.jsx(Un,{ariaLabel:"Mode",children:l.jsxs(ho,{inline:!0,children:[l.jsx(Hn,{id:"draw",label:e().getLocalizedValue("Draw"),checked:B==="draw",onChange:()=>W("draw")}),l.jsx(Hn,{id:"type",label:e().getLocalizedValue("Type"),checked:B==="type",onChange:()=>W("type")})]})})}),l.jsx(wt,{label:e().getLocalizedValue("Pen Color"),children:l.jsx(Un,{ariaLabel:"Pen Color",children:l.jsxs(oc,{value:A,onChange:z=>j(z.target.value),children:[l.jsx(gn,{value:"#000000",children:"Black"}),l.jsx(gn,{value:"#0000FF",children:"Blue"}),l.jsx(gn,{value:"#FF0000",children:"Red"})]})})})]}),l.jsx(wt,{label:o,labelHidden:i,info:S,status:P,required:$,disabled:I,readOnly:x,testId:c,children:l.jsx(Un,{ariaLabel:o,required:$,disabled:I,readOnly:x,children:x||I?l.jsx("img",{alt:"Signature",src:O}):l.jsxs(re,{container:{direction:"column",gap:2},children:[B==="draw"?l.jsx(vi,{signaturePadRef:d,penColor:A,canvasProps:{style:{width:"100%",height:200}},onEndStroke:C}):l.jsxs(re,{container:{direction:"column",gap:2},children:[l.jsx(Hl,{type:"text",placeholder:"Type your name",value:V,onChange:z=>{F(z.target.value),w(!!z.target.value)}}),V&&l.jsx(ho,{children:mo.map(z=>l.jsx(Hn,{id:z.value,checked:N===z.value,onChange:()=>R(z.value),label:l.jsx(pc,{fontFamily:z.value,style:{color:A},children:V})},z.value))})]}),l.jsxs(re,{as:fc,container:{direction:"row",justify:"between",pad:[1]},style:{marginTop:"0.5rem"},children:[l.jsx(Ne,{compact:!0,variant:"secondary",className:"clear",onClick:U,children:e().getLocalizedValue("Clear")}),l.jsx(Ne,{compact:!0,variant:"primary",className:"accept",onClick:J,disabled:B==="draw"?!b:!V,children:e().getLocalizedValue("Accept")})]})]})})})]})})},mc=ps(Ti);Ti.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsSignatureCapture",props:{getPConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => typeof PConnect",signature:{arguments:[],return:{name:"PConnect"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},validatemessage:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:"'DISPLAY_ONLY' | ''",elements:[{name:"literal",value:"'DISPLAY_ONLY'"},{name:"literal",value:"''"}]},description:""}}};const qt={value:"",label:"Signature",validatemessage:"",hideLabel:!1,helperText:"Sign here",testId:"signature-1",getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{}}),getStateProps:()=>({value:"Signature"}),getLocalizedValue:t=>t})},Sc={title:"Fields/Signature Capture",component:mc,argTypes:{getPConnect:{table:{disable:!0}}}},pn={args:{...qt}};var go,bo,yo;qt.parameters={...qt.parameters,docs:{...(go=qt.parameters)==null?void 0:go.docs,source:{originalSource:`{
  value: '',
  label: 'Signature',
  validatemessage: '',
  hideLabel: false,
  helperText: 'Sign here',
  testId: 'signature-1',
  getPConnect: () => ({
    getActionsApi: () => ({
      updateFieldValue: () => {}
    }),
    getStateProps: () => ({
      value: 'Signature'
    }),
    getLocalizedValue: (val: string) => val
  }) as any
}`,...(yo=(bo=qt.parameters)==null?void 0:bo.docs)==null?void 0:yo.source}}};var wo,xo,_o;pn.parameters={...pn.parameters,docs:{...(wo=pn.parameters)==null?void 0:wo.docs,source:{originalSource:`{
  args: {
    ...configProps
  }
}`,...(_o=(xo=pn.parameters)==null?void 0:xo.docs)==null?void 0:_o.source}}};const $c=["configProps","Default"];export{pn as Default,$c as __namedExportsOrder,qt as configProps,Sc as default};
