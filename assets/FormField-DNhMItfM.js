import{j as c,r as ri}from"./index-SNvzCnZR.js";import{i as ge,r as Nn,M as Gr,W as oi,n as zn,U as Pn,t as ii,X as si,Y as ai,C as li,c as tt,e as Xe,u as ci,l as De,g as Ke,F as se,I as Ee,T as Ue,q as j,G as Le,Z as Bt,S as Gt,A as p,K as nt,b as Y,_ as di,$ as wr,J as gt,j as ui,a0 as fi,o as Ht,H as cn,a1 as Tt,a2 as Wr,B as Je,N as Ut,m as mi,a3 as pi,E as hi,k as Ie,Q as Fn,L as En,a4 as Hn,D as Un,R as an,a5 as Vr,a6 as gi,a7 as bi,f as ht,V as vn,a as yi,a8 as kn,z as $i,h as Yr,a9 as wi,aa as Bn}from"./Badges.test-ids-Bi90gUTh.js";import{r as u}from"./index-C5e9SFkp.js";const xi=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,Cn=e=>e.charAt(0).toUpperCase()+e.slice(1),zt=e=>{var n;const t=(n=e.current)==null?void 0:n.getRootNode();if(!(!ge(t,Document)&&!ge(t,ShadowRoot))){for(const o of t.childNodes)if(o.contains(e.current)&&ge(o,HTMLElement))return o}},Si=(e,t,n)=>{const o=[];if(t.global||t.sticky){let i=0,s;for(;s=t.exec(e);)o.push(e.slice(i,s.index),n(s[0])),i=s.index+s[0].length;o.push(e.slice(i))}else{const i=t.exec(e);i?o.push(e.slice(0,i.index),n(i[0]),e.slice(i.index+i[0].length)):o.push(e)}return o.flatMap((i,s)=>i?c.jsx(u.Fragment,{children:i},s):[])},rt=()=>{const{direction:e}=Nn();return u.useMemo(()=>e==="ltr"?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])},xr=["button","a","input","li","legend"],_i=({focusEl:e,scope:t,scopeSelector:n,selector:o,orientation:i="vertical",focusDescendantEl:s,clearFocusDescendant:a,focusReturnEl:d,clearFocusReturn:f,currentDescendantId:m,onClick:g,preventInitialScroll:$,pauseDescendantEvaluation:y=!1,clearPreventScroll:b},x=[])=>{const[I,O]=u.useState(0),v=u.useRef(""),E=u.useRef(y),[D,B]=u.useState(null),[A,L]=u.useState(null),[_,q]=u.useState(),{rtl:W}=rt(),R=u.useCallback(()=>{_==null||_.forEach(M=>{M.setAttribute("data-current","false")})},[_]),P=u.useCallback(M=>{R(),q(M?Array.from(M).filter(k=>ge(k,HTMLElement)):null)},[_]),ee=u.useCallback(({clear:M}={clear:!1})=>{var G;const k=[];if(_&&_.length&&_.forEach(S=>{S.id=S.id||Gr(),k.push(S.id)}),M){const S=(G=e==null?void 0:e.getAttribute("aria-owns"))==null?void 0:G.split(" "),z=S==null?void 0:S.filter(H=>!k.includes(H));e==null||e.setAttribute("aria-owns",(z==null?void 0:z.join(" "))||"")}else e==null||e.setAttribute("aria-owns",k.join(" "))},[e,_]),F=u.useCallback(()=>{if(y)return;let M=t;if(M&&ge(M,HTMLElement)){if(n&&(M=M.querySelector(n)),!M){P(null);return}if(o){const k=M.querySelectorAll(o);P(k)}else{const k=M.querySelectorAll(oi);P(k)}}else P(null);A===null&&L(0)},[t,n,o,y,A]);return u.useEffect(()=>{E.current=y},[y]),u.useEffect(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",zn()===e?"true":"false");const M=()=>{t.setAttribute("data-active-scope","true")},k=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",M),e.addEventListener("blur",k),()=>{e.removeEventListener("focus",M),e.removeEventListener("blur",k)}},[t,e]),u.useEffect(()=>{y||F()},[y]),u.useEffect(()=>{const M=setTimeout(()=>{F(),E.current||L(0)},0);return()=>clearTimeout(M)},[...x]),u.useEffect(()=>{y?(R(),ee({clear:!0})):(ee(),O(Math.random()))},[y,e,_]),u.useEffect(()=>{const M=()=>{f==null||f(),b==null||b(),A!==null&&A+1<_.length?L(A+1):L(0)},k=()=>{f==null||f(),b==null||b(),A!==null&&A-1>-1?L(A-1):L(_.length-1)},G=S=>{_!=null&&_.length&&(["ArrowDown","ArrowUp"].includes(S.key)&&i==="vertical"&&S.preventDefault(),["ArrowLeft","ArrowRight"].includes(S.key)&&i==="horizontal"&&S.preventDefault(),setTimeout(()=>{var z;switch(S.key){case"ArrowDown":i==="vertical"&&M();break;case"ArrowUp":i==="vertical"&&k();break;case"ArrowRight":i==="horizontal"&&(W?k():M());break;case"ArrowLeft":i==="horizontal"&&(W?M():k());break;case"Enter":if(A!==null){if(g){g(_[A]);break}const H=_[A].nodeName.toLowerCase();xr.includes(H)?_[A].click():(z=_[A].querySelector(`${xr.join(",")}`))==null||z.click()}break}},0))};return!y&&e&&(_!=null&&_.length)&&!m&&e.addEventListener("keydown",G),()=>{e==null||e.removeEventListener("keydown",G)}},[e,A,_,y]),u.useEffect(()=>{!y&&_&&m&&_.forEach((M,k)=>{M.id===m&&L(k)})},[m,_,y]),u.useEffect(()=>{if(E.current)return;const M=D||A,k=d==null?void 0:d.id;let G;const S=s==null?void 0:s.id;let z,H=!1;if(_&&_.length){if(_.forEach((Z,le)=>{D===null&&Z.id===S&&(z=le,H=!0,B(le)),Z.id===k&&(G=le),Z.setAttribute("data-current","false")}),G&&G!==A){L(G),f==null||f();return}if(H&&z!==void 0){O(Math.random()),L(z);return}if(M!==null&&_[M]){const Z=_[M];if(Z.setAttribute("data-current","true"),e==null||e.setAttribute("aria-activedescendant",Z.id),Z.id!==v.current&&!$){const le=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;le==null||le.call(Z,!1)}D!==null&&(B(null),a==null||a()),v.current=Z.id}}return()=>{e==null||e.removeAttribute("aria-activedescendant")}},[_,A,s,e,I]),{activeDescendant:A!==null&&_?_[A]:void 0,descendants:_||null}},Ti=({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:o,focusReturnEl:i,setFocusReturnEl:s,scrollEl:a})=>{u.useEffect(()=>{if(e&&t&&t.length&&o){const f=[...t].pop(),m=(f==null?void 0:f.id)||void 0;let g;return m===o.id?(a&&(a.scrollTop=a.scrollHeight-a.offsetHeight),(i==null?void 0:i.id)!==o.id&&(g=setTimeout(()=>{s(f)},0))):(i==null?void 0:i.id)!==o.id&&(g=setTimeout(()=>{s(o)},0)),()=>clearTimeout(g)}},[e,t,n,o,a,i])},Ai=(e,t,n,o=[])=>{const[i,s]=u.useState(void 0);return u.useEffect(()=>{if(!t.current)return;const a=requestAnimationFrame(()=>{const d=t.current;if(!d){s(void 0);return}if(d.clientHeight===0&&d.clientWidth===0){s(void 0);return}const m=Pn(e).some(v=>d.contains(v)&&v!==d&&!(n!=null&&n.some(E=>E.current===v))),g=window.getComputedStyle(d),$=g.overflowY==="auto"||g.overflowY==="scroll",y=g.overflowX==="auto"||g.overflowX==="scroll",[b,x]=ii(d);s(!m&&($&&x||y&&b)?0:void 0)});return()=>{cancelAnimationFrame(a)}},o),i},qr=(e,t,n,o,i)=>{u.useEffect(()=>{var a;let s=null;if(t>0){const d=(e==null?void 0:e.current)??((a=i==null?void 0:i.current)==null?void 0:a.getRootNode())??document;if(!ge(d,HTMLElement,SVGElement,Document,ShadowRoot))return;const f=d.querySelectorAll(o);f.length>t&&(s=f[t])}if(s){const d=new IntersectionObserver(f=>{f[0].isIntersecting&&n()},{root:e.current??null});return d.observe(s),()=>{d.disconnect()}}},[n,t])},Zr=(e,t,n)=>{var a;const{portalTarget:o}=Nn(),i=((a=o==null?void 0:o.ownerDocument)==null?void 0:a.defaultView)||window,s=u.useCallback(d=>{const f=d.composedPath(),m=f[0];if(!ge(m,Node))return;let g=0,$=1;for(;!ge(f[g],Document);){const b=f[g],x=f[$];if(!b||!x)return;if(ge(x,DocumentFragment)||ge(x,Document)){if(!ge(b,Node)||!x.contains(b))return;g=$}else if(ge(b,DocumentFragment)){if(!ge(x,Element)||x.shadowRoot!==b)return;g=$}$+=1}si(t).flatMap(b=>!ge(b,Element)&&!ge(b,Document)&&!ge(b,DocumentFragment)?[b]:[b,...ai(b)]).every(b=>b!==m&&!b.contains(m))&&n(d)},[...t,n]);u.useEffect(()=>{const d=Array.isArray(e)?e:[e];return d.forEach(f=>{var m;return(m=i==null?void 0:i.document)==null?void 0:m.addEventListener(f,s)}),()=>{d.forEach(f=>{var m;return(m=i==null?void 0:i.document)==null?void 0:m.removeEventListener(f,s)})}},[e,s])},Xr=e=>{const t=u.useRef();return u.useLayoutEffect(()=>{t.current=e},[e]),t.current},Qa=e=>t=>c.jsx(li,{children:c.jsx(e,{...t})}),Ii="budicon",Ei="galaxy",vi=()=>c.jsx("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),ki="0 0 25 25",Ci=Object.freeze(Object.defineProperty({__proto__:null,Component:vi,name:Ei,set:Ii,viewBox:ki},Symbol.toStringTag,{value:"Module"})),Ri="streamline",Li="folder-empty",Mi=()=>c.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),Oi="0 0 18 18",ji=Object.freeze(Object.defineProperty({__proto__:null,Component:Mi,name:Li,set:Ri,viewBox:Oi},Symbol.toStringTag,{value:"Module"})),Kr=tt("empty-state",["message","icon"]);nt(Ci);nt(ji);const Gn=j.div(({theme:e})=>{const t=Le(()=>Bt(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return p`
    height: 100%;

    ${Gt} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});Gn.defaultProps=Y;const Di=u.forwardRef(function(t,n){const{base:{"icon-set":o}}=ci(),i=De(),{testId:s,message:a=i("no_items"),...d}=t,f=Ke(s,Kr);return c.jsxs(se,{"data-testid":f.root,...d,as:Gn,ref:n,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[c.jsx(Ee,{"data-testid":f.icon,name:o==="streamline"?"folder-empty":"galaxy"}),c.jsx(Ue,{"data-testid":f.message,variant:"secondary",children:a})]})}),Jr=Xe(Di,Kr),vt=u.createContext({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:Gr(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),Qr=tt("meta-list",[]),Ni=j.ul(({wrapItems:e})=>p`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&p`
      white-space: nowrap;
    `}
  `),Sr=j.li(({wrapItems:e})=>p`
    min-width: 0;
    display: inline-block;

    ${e?p`
          overflow-wrap: break-word;
        `:p`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),zi=u.forwardRef(function({testId:t,items:n,wrapItems:o=!0,...i},s){const a=Ke(t,Qr),d=n.length<=1?"none":void 0;return c.jsx(se,{"data-testid":a.root,...i,as:Ni,role:d,container:{colGap:.5,alignItems:"center",wrap:o?"wrap":"nowrap"},wrapItems:o,ref:s,children:n.flatMap((f,m,g)=>f?[c.jsx(Ue,{as:Sr,variant:"secondary",role:d,wrapItems:o,children:f},`${m+0}`)].concat(m!==g.length-1?[c.jsx(Ue,{as:Sr,"aria-hidden":!0,variant:"secondary",children:"•"},`${m+0}-sep`)]:[]):[])})}),Pi=Xe(zi,Qr),_r=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,Tr=e=>{if(!e)return;if(e===!0)return p`
      display: grid;
    `;const{inline:t,pad:n,cols:o,autoCols:i,rows:s,autoRows:a,autoFlow:d,areas:f,template:m,colGap:g,rowGap:$,gap:y,justifyItems:b,justifyContent:x,alignItems:I,alignContent:O}=e;return p`
    display: ${t?"inline-grid":"grid"};

    ${n!==void 0&&p`
      padding: ${({theme:{base:{spacing:v}}})=>(Array.isArray(n)?n:[n]).map(E=>`calc(${E} * ${v})`).join(" ")};
    `}

    ${o&&p`
      grid-template-columns: ${o};
    `}

    ${i&&p`
      grid-auto-columns: ${i};
    `}

    ${s&&p`
      grid-template-rows: ${s};
    `}

    ${a&&p`
      grid-auto-rows: ${a};
    `}

    ${d&&p`
      grid-auto-flow: ${d};
    `}

    ${f&&p`
      grid-template-areas: ${f};
    `}

    ${m&&p`
      grid-template: ${m};
    `}

    ${y!==void 0&&p`
      gap: calc(${y} * ${v=>v.theme.base.spacing});
    `}

    ${g!==void 0&&p`
      column-gap: calc(${g} * ${v=>v.theme.base.spacing});
    `}

    ${$!==void 0&&p`
      row-gap: calc(${$} * ${v=>v.theme.base.spacing});
    `}

    ${b&&p`
      justify-items: ${b};
    `}

    ${x&&p`
      justify-content: ${_r(x)};
    `}

    ${I&&p`
      align-items: ${I};
    `}

    ${O&&p`
      align-content: ${_r(O)};
    `}
  `},Ar=e=>{if(!e)return;const{colStart:t,colEnd:n,colStartEnd:o,rowStart:i,rowEnd:s,rowStartEnd:a,area:d,justifySelf:f,alignSelf:m}=e;return p`
    ${t&&p`
      grid-column-start: ${t};
    `}

    ${n&&p`
      grid-column-end: ${n};
    `}

    ${o&&p`
      grid-column: ${o};
    `}

    ${i&&p`
      grid-row-start: ${i};
    `}

    ${s&&p`
      grid-row-end: ${s};
    `}

    ${a&&p`
      grid-row: ${a};
    `}

    ${d&&p`
      grid-area: ${d};
    `}

    ${f&&p`
      justify-self: ${f};
    `}

    ${m&&p`
      align-self: ${m};
    `}
  `},Fi=["xs","sm","md","lg","xl"],dn=j.div(({container:e,item:t,theme:{base:{breakpoints:n}},xs:o,sm:i,md:s,lg:a,xl:d})=>{const f={xs:o,sm:i,md:s,lg:a,xl:d};return p`
      ${Tr(e)}
      ${Ar(t)}

    ${Fi.map(m=>{var g,$;return f[m]&&p`
            @media screen and (min-width: ${n[m]}) {
              ${Tr((g=f[m])==null?void 0:g.container)}
              ${Ar(($=f[m])==null?void 0:$.item)}
            }
          `})}
    `});dn.defaultProps=Y;const Pt=u.forwardRef(function(t,n){return c.jsx(dn,{...t,ref:n})}),eo=tt("summary-item",["primary","secondary","visual","actions"]),qe=j.div`
  > ${di}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;qe.defaultProps=Y;const Wn=j(Pt)(({theme:e,isString:t,overflowStrategy:n})=>p`
    ${n==="ellipsis"?p`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:p`
          word-break: break-word;
        `}

    ${t&&p`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);Wn.defaultProps=Y;const Ve=j(Pt)(({overflowStrategy:e})=>p`
    ${e==="ellipsis"?p`
          overflow: hidden;
          text-overflow: ellipsis;
        `:p`
          word-break: break-word;
        `}
  `),Ye=j.div`
  white-space: nowrap;
`,to=j.div``,Hi=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,Ui=({secondary:e,layout:t,visual:n,actions:o})=>`"${n?"visual ":""}primary${e&&t==="inline"?" secondary":""}${o?" actions":""}"${e&&t==="stacked"?`
"${n?"visual ":""}secondary${o?" actions":""}"`:""}`,Bi=u.forwardRef(function({testId:t,visual:n,primary:o,secondary:i,layout:s="stacked",actions:a,container:d,overflowStrategy:f="wrap",as:m,...g},$){const y=Ke(t,eo);return c.jsxs(Pt,{"data-testid":y.root,...g,ref:$,container:{cols:Hi({visual:n,actions:a}),colGap:2,areas:Ui({secondary:i,layout:s,visual:n,actions:a}),...d},as:to,forwardedAs:m,children:[n&&c.jsx(Pt,{"data-testid":y.visual,as:qe,item:{area:"visual",alignSelf:"center"},children:n}),c.jsx(Wn,{"data-testid":y.primary,item:{area:"primary",alignSelf:i&&s==="stacked"?"end":"center"},isString:typeof o=="string",overflowStrategy:f,children:o}),i&&c.jsx(Ve,{"data-testid":y.secondary,item:{area:"secondary",alignSelf:s==="stacked"?"start":"center"},overflowStrategy:f,children:i}),a&&c.jsx(Pt,{"data-testid":y.actions,as:Ye,item:{area:"actions",alignSelf:"center"},children:a})]})}),Vn=Xe(Bi,eo),Gi="budicon",Wi="caret-left",Vi=()=>c.jsx("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),Yi="0 0 25 25",no=Object.freeze(Object.defineProperty({__proto__:null,Component:Vi,name:Wi,set:Gi,viewBox:Yi},Symbol.toStringTag,{value:"Module"})),qi="budicon",Zi="caret-right",Xi=()=>c.jsx("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),Ki="0 0 25 25",ro=Object.freeze(Object.defineProperty({__proto__:null,Component:Xi,name:Zi,set:qi,viewBox:Ki},Symbol.toStringTag,{value:"Module"})),Ji="budicon",Qi="check",es=()=>c.jsx("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),ts="0 0 25 25",oo=Object.freeze(Object.defineProperty({__proto__:null,Component:es,name:Qi,set:Ji,viewBox:ts},Symbol.toStringTag,{value:"Module"})),io=j.span(({theme:e,variant:t,children:n})=>{const{foreground:o,background:i}=e.components.badges.count[t],s=Le(()=>Bt(o,.1)),a=gt(e.base["font-size"],e.base["font-scale"]);return p`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${o};
    background-color: ${i};
    box-shadow: inset 0 0 0 0.0625rem ${s};
    font-size: ${a.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${n.length===1?p`
          aspect-ratio: 1 / 1;
        `:p`
          padding-inline: ${e.base.spacing};
        `}
  `});io.defaultProps=Y;const wn=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",ns=e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${wn(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${wn(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${wn(e)}`}return"999T+"},rs=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${ns(t)}`},so=Xe(u.forwardRef(function({testId:t,variant:n="default",children:o,...i},s){const a=Ke(t,wr);return Number.isInteger(o)?c.jsx(io,{"data-testid":a.root,variant:n,...i,ref:s,children:rs(o)}):null}),wr),ao=j.mark(({theme:e})=>p`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);ao.defaultProps=Y;const os=e=>c.jsx(ao,{...e}),Ze={isItem(e){return ui(e,"primary")},getItem(e,t){let n;return e.some(o=>this.isItem(o)&&o.id===t?(n=o,!0):o.items?(n=this.getItem(o.items,t),!!n):!1),n},getPath(e,t){let n=[];return e.some(o=>{if(o.id===t)return n=[o],!0;if(o.items){const i=this.getPath(o.items,t);return i.length&&(n=i.concat(o)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(o=>o.id===t?{...n}:o.items?{...o,items:this.setItem(o.items,t,n)}:o)},mapItem(e,t,n){return e.map((o,i,s)=>{let a=o;return o.items&&(a={...a,items:this.mapItem(o.items,t,n)}),this.isItem(a)&&o.id===t&&(a=n(a,i,s)),a})},mapTree(e,t){return e.map((n,o,i)=>{let s=n;return n.items&&(s={...s,items:this.mapTree(n.items,t)}),this.isItem(s)?t(s,o,i):s})},flatten(e,t=[],n={parentFirst:!1}){let o=[],i=[];return e.forEach(s=>{if(this.isItem(s)&&o.push(t.length>0?{...s,ancestors:t}:s),s.items){const a=this.flatten(s.items,[...t,s],n);n.parentFirst?i=[...i,...a]:o=[...o,...a]}}),n.parentFirst?[...o,...i]:o},toggleSelected(e,t,n,o){return this.mapTree(e,i=>{if(this.isItem(i)){if(i.id===t)return{...i,selected:o!==void 0?o:!i.selected};if(n==="single-select")return{...i,selected:!1}}return i})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((t,n)=>(this.isItem(n)&&n.selected&&(t=[...t,n]),n.items&&(t=[...t,...this.getSelected(n.items)]),t),[])},prependTo(e,t,n){return n?this.mapItem(e,n,o=>({...o,items:[...t,...o.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,o=>({...o,items:[...o.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(o,i,s)=>(n=s[i+1],o)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(o,i,s)=>(n=s[i-1],o)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}},sn=p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;j(Je)`
  align-self: center;
`;const Rn=j(Ee)``,lo=j.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:o,mode:i="action","aria-selected":s=!1,selectableParent:a=!1})=>{const d=Le(()=>Ht(.85,e.palette["primary-background"],e.palette.interactive)),f=Le(()=>Ht(.95,e.palette["primary-background"],e.palette.interactive)),m=t["radio-check"][":checked"]["background-color"],g=Le(()=>cn(m));return p`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${o==="inline"&&p`
        justify-content: flex-start;

        ${to} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${qe}):has(${Ve}):has(${Ye}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${qe}):has(${Ve}):not(:has(${Ye})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${qe}):not(:has(${Ve})):has(${Ye}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${qe}):not(:has(${Ve})):not(
              :has(${Ye})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${qe})):has(${Ve}):has(${Ye}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${qe})):has(${Ve}):not(
              :has(${Ye})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${qe})):not(:has(${Ve})):has(
              ${Ye}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${qe})):not(:has(${Ve})):not(
              :has(${Ye})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${Wn} {
            ${sn};
          }

          & > ${Ve} {
            ${sn};

            ul {
              li {
                ${sn};
              }
              justify-content: end;
            }
          }

          & > ${Ye} > ${Tt} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${d};
      }

      &:hover {
        ${Rn} {
          visibility: visible;
          ${i==="single-select"&&p`
            ${s?p`
                  color: ${m};
                `:p`
                  visibility: hidden;
                `}
          `}
          ${i==="multi-select"&&p`
            ${!s&&p`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${f};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!a&&(i==="multi-select"||i==="single-select")&&p`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${dn} {
        flex-grow: 1;
      }

      ${Rn} {
        margin-inline-start: 0;
        ${i==="single-select"&&p`
          ${s?p`
                color: ${m};
              `:p`
                visibility: hidden;
              `}
        `}
        ${i==="multi-select"&&p`
          ${s?p`
                color: ${g};
                background-color: ${m};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:p`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});lo.defaultProps=Y;const is=j.div`
  ${Gt} {
    width: 1em;
    height: 1em;
  }

  & > ${Wr} {
    ${sn};
  }
`;j.p`
  ${Ut}
`;const co=j.li(({theme:e})=>p`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `);co.defaultProps=Y;const Yn=j.div(({theme:e})=>p`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);Yn.defaultProps=Y;const uo=j.legend(({theme:{base:e}})=>{const t=Le(()=>Ht(.95,e.palette["primary-background"],e.palette.interactive)),n=Le(()=>Ht(.85,e.palette["primary-background"],e.palette.interactive));return p`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${dn} {
      grid-column-gap: ${e.spacing};
    }

    ${Gt} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});uo.defaultProps=Y;const qn=j.ul(({theme:e})=>p`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${Gn} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${Yn} {
      margin-block-start: ${e.base.spacing};
    }
  `);qn.defaultProps=Y;const Zn=j.fieldset(({theme:e})=>p`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);Zn.defaultProps=Y;const ss=j(Zn)`
  min-width: 10rem;
`,fo=j.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,ln=j.div(({theme:e})=>p`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

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
  `);ln.defaultProps=Y;const mo=j.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return p`
    display: flex;
    flex-direction: column;

    &,
    ${ln} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
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
      box-shadow: ${e.base.shadow["focus-inset"]};

      @media (forced-colors: active) {
        outline: 0.125rem solid Highlight;
        outline-offset: -0.125rem;
      }
    }

    ${fi}:first-child {
      + ${ln}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});mo.defaultProps=Y;const po=tt("menu",["create-new"]),ho=tt("menu-item",[]);nt(no,ro,oo);const as=({expandHandler:e})=>{const{end:t}=rt(),n=c.jsx(Ee,{name:`caret-${t}`});return e?c.jsx(Je,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},ls=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:o}=rt();return c.jsx(se,{container:{gap:.5,alignItems:"center"},as:is,title:e.map(i=>Ze.isItem(i)?i.primary:i.label).join(" > "),children:n.map((i,s,a)=>{const d=Ze.isItem(i)?i.primary:i.label;return c.jsxs(u.Fragment,{children:[c.jsx(Ue,{variant:"secondary",children:d}),s<a.length-1&&c.jsxs(c.Fragment,{children:[c.jsx(Ue,{variant:"secondary",children:c.jsx(Ee,{name:`caret-${o}`})}),t&&c.jsxs(c.Fragment,{children:[c.jsx(Ue,{variant:"secondary",children:"…"}),c.jsx(Ue,{variant:"secondary",children:c.jsx(Ee,{name:`caret-${o}`})})]})]})]},i.id)})})},cs=({testId:e,id:t,primary:n,secondary:o,ancestors:i,visual:s,count:a,items:d,selected:f,partial:m,href:g,tooltip:$,onClick:y,onExpand:b,disabled:x,role:I="menuitem",...O})=>{const v=De(),{mode:E,onItemClick:D,itemLayout:B,accent:A,variant:L,setFocusDescendant:_,getScopedItemId:q,arrowNavigationUnsupported:W}=u.useContext(vt),R=Ke(e,ho),P=E==="single-select"||E==="multi-select",ee=d&&typeof f=="boolean",F=u.useMemo(()=>q(t),[t,q]),M=`${t}-count`,k=`${t}-secondary`,G=u.useCallback(K=>{if(K.detail>0){const ke=K.target,ne=ke.getAttribute("role")===I?ke:ke.closest(`li[role="${I}"]`);ne&&_(ne)}y==null||y(t,K),D==null||D(t,K)},[y,D,t]),S=u.useCallback(K=>{b==null||b(t,K),K.stopPropagation()},[b,t]);let z;if(A&&!d){const K=typeof A=="function"?A(n):A;z=Si(n,K,me=>c.jsx(os,{children:me}))}const H=i?c.jsx(ls,{ancestors:i}):o&&c.jsx(Pi,{items:o,id:k}),[Z,le]=mi(),pe=c.jsxs(c.Fragment,{children:[c.jsx(Vn,{ref:le,primary:z||(d?n:c.jsx(Ue,{children:n})),secondary:H,layout:B,visual:s,actions:d||a?c.jsxs(se,{container:{gap:1,alignItems:"center",justify:"center"},children:[a!==void 0&&c.jsx(so,{id:M,"aria-label":v("menu_item_count",[a]),children:a}),d&&c.jsx(as,{expandHandler:ee?S:void 0})]}):void 0,container:{colGap:1}}),$&&c.jsx(pi,{target:Z,hideDelay:"none",showDelay:"short",children:$})]}),ve=u.useMemo(()=>{const K=v("menu_collapsed",[n]);return d?W?v("menu_item_shift_space_expand_collapse",[K]):v("menu_item_expand_arrow",[K]):n},[f,n,d]),X=u.useMemo(()=>{const K=!!o;let me;return K?(me=k,a!==void 0&&a>=0&&(me=`${me} ${M}`)):a!==void 0&&a>=0?me=M:me="",me},[d,o,M,k]);return c.jsxs(se,{"data-testid":R.root,...O,container:{alignItems:"center",justify:"between",gap:1},id:F,as:lo,"aria-label":ve,"aria-describedby":X,role:I,"aria-disabled":x,"data-expand":!!d,itemLayout:B,tabIndex:-1,disabled:x,onMouseDown:K=>{K.preventDefault()},onClick:K=>{if(!x)return d&&typeof f!="boolean"?S(K):G(K)},onMouseEnter:L==="flyout"?S:void 0,href:g,mode:E,isParentItem:!!d,"aria-selected":!!f,selectableParent:ee,children:[P&&(!d||ee)&&c.jsx(Rn,{name:"check"}),g&&!P?c.jsx(hi,{href:g,tabIndex:"-1",children:pe}):pe]})},Xn=Xe(cs,ho),Ln=(e,t,n,o)=>{var f,m;const i=!!((f=e.firstElementChild)!=null&&f.matches("legend")),s=[':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'],a=e.querySelectorAll(s.join(", "))[Math.max(Math.min(o-(i?2:1),n-1),0)];let d;if(a){const g=e.getBoundingClientRect().top,$=a.getBoundingClientRect(),y=((m=e.querySelector(":scope > ul"))==null?void 0:m.scrollTop)??0;let b=$.bottom;n>o&&(b=($.top+$.bottom)/2),d=b-g+y}t.style.height=d?`${d}px`:""},go=({id:e,label:t,items:n,itemRole:o})=>{const{componentId:i}=u.useContext(vt),s=`${i}-${e}`;return c.jsxs("li",{role:"presentation",children:[c.jsx(se,{container:{alignItems:"center",pad:[.5,1]},as:Yn,id:s,children:t}),c.jsx("ul",{role:"group","aria-labelledby":s,children:n.length>0&&n.map(a=>u.createElement(Xn,{...a,key:a.id,role:o??"menuitem"}))})]})},pt=e=>Array.isArray(e.items),bo=u.forwardRef(function({items:t,parent:n,menuRole:o},i){const s=De(),a=Ie(i),d=u.useRef(null),f=u.useRef(null),m=u.useRef(null),[g,$]=u.useState(),{componentId:y,loadMore:b,loading:x,scrollAt:I,emptyText:O,onItemExpand:v,pushFlyoutId:E,flyOutActiveIdStack:D,updateActiveDescendants:B,updateParentDescendantStack:A}=u.useContext(vt),{announcePolite:L}=Fn();qr(d,t.length-1,()=>{var R;b==null||b((R=n==null?void 0:n.item)==null?void 0:R.id)},":scope > li"),En(()=>{if(g){const R=t.find(P=>P.id===g.id);R&&pt(R)?$(R):$(void 0)}},[g,t]),u.useEffect(()=>{t.some(P=>D.includes(P.id))||(m.current=null,$(void 0))},[D]),u.useEffect(()=>{t.length===0&&!x&&L({message:O??s("no_items")})},[t.length,x]);const _=u.useMemo(()=>t.length?t.map(R=>Ze.isItem(R)?u.createElement(Xn,{...R,key:R.id,"aria-haspopup":!!R.items,"aria-expanded":R.items?R.id===(g==null?void 0:g.id):void 0,role:o==="listbox"?"option":"menuitem",onExpand:(P,ee)=>{var F;R.items?(m.current=ee.currentTarget,$(pt(R)?R:void 0),(F=R==null?void 0:R.onExpand)==null||F.call(R,P,ee),v==null||v(P,ee),E(R.id||y),B(),A&&A(m.current.closest("li"))):(m.current=null,$(void 0))}}):u.createElement(go,{...R,key:R.id,itemRole:o==="listbox"?"option":"menuitem"})):x?null:c.jsx(Jr,{message:O,forwardedAs:"li"}),[t,x,O,g,D]),q=c.jsxs(qn,{ref:d,role:o,children:[_,x&&!g&&c.jsx(fo,{children:c.jsx(Hn,{placement:"local"})})]});u.useLayoutEffect(()=>{$(void 0),a.current&&(f.current=a.current.parentElement,Ln(a.current,a.current,t.length,I))},[t]);const W=u.useCallback(()=>{g&&$(void 0)},[g]);return c.jsxs(c.Fragment,{children:[c.jsx(ss,{ref:a,onScroll:W,"data-flyout-menu-parent-id":y,"data-flyout-menu-id":(n==null?void 0:n.item.id)||y,children:q}),g&&a.current&&c.jsx(Un,{target:m.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:c.jsx(bo,{items:g.items,parent:{el:a.current,item:g,siblingItems:t,setExpandedItem:$,returnFocusRef:m},menuRole:o})})]})}),ds="21.875rem",Ir="calc(100vw - 20rem)",us=.05,fs="budicon",ms="drag",ps=()=>c.jsx("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),hs="0 0 25 25",gs=Object.freeze(Object.defineProperty({__proto__:null,Component:ps,name:ms,set:fs,viewBox:hs},Symbol.toStringTag,{value:"Module"})),bs="budicon",ys="arrow-micro-up-down",$s=()=>c.jsx("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),ws="0 0 25 25",xs=Object.freeze(Object.defineProperty({__proto__:null,Component:$s,name:ys,set:bs,viewBox:ws},Symbol.toStringTag,{value:"Module"}));nt(gs);nt(xs);const Ss=j(Je)(({rotateIcon:e})=>p`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${Ut};
    }

    ${e&&p`
      ${Gt} {
        transform: rotate(90deg);
      }
    `}
  `),yo=j.div(({theme:e})=>p`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${Vr} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);yo.defaultProps=Y;const _s=u.forwardRef(function({onMouseDown:t,onKeyDown:n},o){const i=Ie(o),s=De(),[a,d]=u.useState(!1),[f,m]=u.useState(!1);an(()=>{d(!1),m(!1)});const g=b=>{b.code==="Space"&&(b.preventDefault(),m(!f)),n==null||n(b,f)},$=b=>{const x=zt(i);x&&(x.style.setProperty("user-select","none"),d(!0),t==null||t(b))},y=()=>{const b=zt(i);b&&(b.style.removeProperty("user-select"),d(!1))};return c.jsx(yo,{onMouseDown:$,onMouseUp:y,ref:i,children:c.jsx(Ss,{tabIndex:0,icon:!0,label:!a&&!f?s("resize"):void 0,"aria-label":s(!a&&!f?"drag_handle_activate_description":"drag_handle_cancel_description"),onMouseDown:$,onKeyDown:g,onBlur:()=>{m(!1)},rotateIcon:f,children:c.jsx(Ee,{name:f?"arrow-micro-up-down":"drag"})})})}),nn=bi(ds),$o=j.div(e=>{const{state:t,shadow:n,position:o,placement:i,transitionSpeed:s,size:a,resizeable:d,theme:f}=e;let m="horizontal",g="X",$="top";(i==="top"||i==="bottom")&&(m="vertical",g="Y",$="left");const y=t==="open"||t==="opening"?0:"100%",b=s||f.base.animation.speed;return p`
    z-index: ${f.base["z-index"].drawer};
    position: ${o};
    ${i}: 0;
    ${$}: 0;
    height: ${m==="vertical"?a:"100%"};
    width: ${m==="horizontal"?a:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${b}, 0.0001s);
    transition-timing-function: ${f.base.animation.timing.ease};
    transform: ${t==="open"?"none":`translate${g}(${i==="top"||i==="left"?"-":""}${y})`};

    ${n&&p`
      box-shadow: ${f.base.shadow.high};
    `}

    ${d&&p`
      width: ${m==="horizontal"?"var(--resize-drawer-width)":"100%"};
    `}
  `});$o.defaultProps=Y;const Ts=u.forwardRef(function(t,n){const{open:o=!1,shadow:i=!1,position:s="absolute",children:a,placement:d="right",transitionSpeed:f,size:m="100%",resizeable:g=!1,onAfterOpen:$,onAfterClose:y,onBeforeOpen:b,onBeforeClose:x,onOuterClick:I,nullWhenClosed:O=!1,...v}=t,E=Ie(n),{ltr:D,rtl:B}=rt(),[A,L]=u.useState(o?"open":"closed");let _=Xr(A);_||(_=A),Zr("mousedown",[E],u.useCallback(()=>{o&&(I==null||I())},[o,I])),u.useEffect(()=>{o&&(A==="closed"||A==="closing")?(b==null||b(),gi(E.current),L("opening")):!o&&(A==="open"||A==="opening")?(x==null||x(),L("closing")):o&&A==="open"&&_!=="open"?$==null||$():!o&&A==="closed"&&_!=="closed"&&(y==null||y())},[o,A,_,b,x,$,y]);const q=u.useCallback(F=>{F.target!==E.current||F.propertyName!=="transform"||L(o?"open":"closed")},[o]),W=u.useRef();u.useEffect(()=>{if(!g||!E.current)return;const F=zt(E);F&&(F.style.getPropertyValue("--resize-drawer-width")||F.style.setProperty("--resize-drawer-width",m))},[E.current]);const R=u.useCallback(F=>{var S;const M=zt(E),k=(S=E.current)==null?void 0:S.getBoundingClientRect();if(!k||!M)return;W.current=F.clientX;const G=new AbortController;M.addEventListener("mousemove",z=>{if(!W.current||!k.width)return;const H=W.current,Z=d==="right"?H-z.clientX:z.clientX-H,le=Math.max(Z+k.width,parseInt(nn,10));M.style.setProperty("--resize-drawer-width",`clamp(${nn}, ${le}px, ${Ir})`)},{passive:!0,signal:G.signal}),M.addEventListener("mouseup",()=>{G.abort()},{once:!0})},[d]),P=u.useCallback((F,M)=>{var Z;if(!M)return;const k=zt(E),G=document.documentElement.clientWidth*us,S=(Z=E.current)==null?void 0:Z.getBoundingClientRect();if(!S||!k||F.code!=="ArrowLeft"&&F.code!=="ArrowRight")return;F.preventDefault();const z=(F.code==="ArrowLeft"?1:-1)*(d==="right"?1:-1),H=Math.max(S.width+z*G,parseInt(nn,10));k.style.setProperty("--resize-drawer-width",`clamp(${nn}, ${H}px, ${Ir})`)},[d]),ee=g&&A==="open"&&(d==="left"&&B||d==="right"&&D);return A==="closed"&&!o&&O?null:c.jsxs($o,{ref:E,position:s,shadow:i&&o,transitionSpeed:f,placement:d,size:m,resizeable:g,open:o,state:A,onTransitionEnd:q,...v,children:[a,ee&&c.jsx(_s,{onMouseDown:R,onKeyDown:P})]})});nt(no,ro);const As=({text:e,onClick:t})=>{const n=De(),{arrowNavigationUnsupported:o}=u.useContext(vt),{start:i}=rt(),s=u.useCallback(a=>{(a.key==="Enter"||a.key===`Arrow${Cn(i)}`)&&t()},[t,i]);return c.jsx(se,{container:{alignItems:"center"},as:uo,onClick:t,onKeyDown:s,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(o?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:c.jsx(Vn,{visual:c.jsx(Ee,{name:`caret-${i}`}),primary:e})})},Er=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},vr=(e,t)=>e.reduce((n,o)=>!Ze.isItem(o)&&o.items?n+o.items.length+1:n+1,t?1:0),rn=e=>e.flatMap(t=>Ze.isItem(t)?t:[t,...t.items?t.items:[]]),wo=u.forwardRef(function({items:t,parent:n,id:o,menuRole:i,...s},a){const d=De(),f=u.useRef(null),m=Ie(a),g=u.useRef(null),$=u.useRef(null),[y,b]=u.useState(!n),[x,I]=u.useState(),{scrollAt:O,"aria-label":v,loadMore:E,loading:D,emptyText:B,currentItemId:A,onItemExpand:L,focusControl:_,updateActiveDescendants:q,setFocusReturnEl:W,onItemCollapse:R,expandTo:P}=u.useContext(vt),{end:ee}=rt(),{announcePolite:F}=Fn();qr(g,t.length-1,()=>{var S;D||E==null||E((S=n==null?void 0:n.item)==null?void 0:S.id)},":scope > li"),u.useLayoutEffect(()=>{!m.current||x||(f.current=m.current.parentElement,Ln(m.current,f.current,vr(t,D),O))}),u.useEffect(()=>{n&&b(!0)},[]),En(()=>{if(x){const S=rn(t).find(z=>z.id===x.id);S&&pt(S)?I(S):I(void 0)}},[x,t]),En(()=>{if(A){const S=rn(t).find(z=>{var H;return((H=z.items)==null?void 0:H.length)&&Ze.getItem(z.items,A)!==void 0});S&&(I(pt(S)?S:void 0),q({preventScroll:!0}))}},[A,t,n]),u.useEffect(()=>{if(P!=null&&P.parentItemId){const S=rn(t).find(z=>z.id===P.parentItemId);if(S)I(pt(S)?S:void 0),q({preventScroll:!0}),P.onComplete();else{const z=rn(t).find(H=>{var Z;return((Z=H.items)==null?void 0:Z.length)&&Ze.getItem(H.items,P.parentItemId)!==void 0});z?I(pt(z)?z:void 0):P.onComplete()}}},[P,t,n]);const M=u.useCallback((S,z)=>{var Z;const H=Ze.getItem(t,S);$.current=z.currentTarget,H&&pt(H)?I(H):I(void 0),(Z=H==null?void 0:H.onExpand)==null||Z.call(H,S,z),L==null||L(S,z),q({preventScroll:!0})},[t]);u.useEffect(()=>{t.length===0&&!D&&F({message:B??d("no_items")})},[t.length,D]);const k=u.useMemo(()=>t.length?t.map((S,z)=>Ze.isItem(S)?u.createElement(Xn,{...S,key:S.id,role:i==="listbox"?"option":"menuitem",onExpand:S.items?M:void 0}):c.jsxs(u.Fragment,{children:[c.jsx(go,{...S,items:S.items.map(H=>H.items?{...H,onExpand:M}:H),itemRole:i==="listbox"?"option":"menuitem"}),t[z+1]&&Ze.isItem(t[z+1])&&c.jsx(co,{role:"separator"})]},S.id)):D?null:c.jsx(Jr,{message:B,forwardedAs:"li"}),[t,D,B]),G=c.jsxs(qn,{id:x?void 0:o,ref:g,role:i,...s,children:[n&&c.jsx(As,{text:n.item.primary,onClick:()=>{b(!1)}}),k,D&&!x&&c.jsx(fo,{children:c.jsx(Hn,{placement:"local",liveConfig:{contextualLabel:v??d("menu")}})})]});return c.jsxs(c.Fragment,{children:[c.jsx(Ts,{"aria-hidden":!!x,as:Zn,ref:m,open:y,style:{opacity:x?0:1},disabled:!!x,placement:ee,onBeforeOpen:()=>{n&&(n.el.style.opacity="0"),m.current&&(m.current.style.opacity="1")},onAfterOpen:()=>{n&&Er(n.el,!0)},onBeforeClose:()=>{n&&f.current&&(Er(n.el,!1),n.el.style.opacity="1",Ln(n.el,f.current,vr(n.siblingItems),O)),m.current&&(m.current.style.opacity="0")},onAfterClose:()=>{if(n){_==null||_.focus();const S=n.returnFocusRef.current;n.setExpandedItem(void 0),S&&W(S==null?void 0:S.closest("li")),R==null||R(n.item.id),q()}},children:G}),x&&m.current&&c.jsx(wo,{id:o,items:x.items,parent:{el:m.current,item:x,siblingItems:t,setExpandedItem:I,returnFocusRef:$},menuRole:i})]})}),Is=u.forwardRef(function(t,n){var wt,et;const o=ht(),{testId:i,id:s=o,items:a=[],itemLayout:d="stacked",onCreateNew:f,mode:m="action",accent:g,scrollAt:$=7,emptyText:y,onItemClick:b,onItemActive:x,onItemExpand:I,loadMore:O,onItemCollapse:v,loading:E=!1,currentItemId:D,header:B,footer:A,variant:L="drill-down",focusControlEl:_,arrowNavigationUnsupported:q,"aria-describedby":W,"aria-label":R,role:P="menu",listId:ee,pauseDescendantEvaluation:F,menuList:M,handleRef:k,...G}=t,S=Ke(i,po),z=De(),{end:H,start:Z}=rt(),le=ht(),pe=Ie(n),ve=u.useRef(0),[X,K]=u.useState(0),[me,ke]=u.useState(null),[ne,Me]=u.useState([s]),[Ne,ze]=u.useState(),[Qe,te]=u.useState(!1),[U,ot]=u.useState([]),[J,bt]=u.useState(),be=!_,it=u.useMemo(()=>`fieldset[data-flyout-menu-id="${ne[ne.length-1]}"]`,[ne]),we=u.useMemo(()=>_||pe.current,[_,pe.current]);u.useImperativeHandle(k,()=>({expandTo:re=>{bt(re)}}),[]);const Pe=u.useCallback(re=>{Me([...ne,re])},[ne]);u.useEffect(()=>{Me([...ne,s])},[s]);const kt=u.useCallback(re=>{ot([...U,re])},[U]),dt=u.useCallback(re=>btoa(encodeURIComponent(re)),[s]),Vt=u.useCallback(re=>decodeURIComponent(atob(re)),[s]),Fe=u.useCallback(({preventScroll:re=!1}={})=>{te(re),K(Math.random())},[]),ye=u.useMemo(()=>({focusEl:we,scope:pe.current,scopeSelector:L==="drill-down"?'fieldset[aria-hidden="false"]':it,selector:`[role="${P==="menu"?"menuitem":"option"}"], legend`,focusDescendantEl:me,clearFocusDescendant:()=>{ke(null)},focusReturnEl:Ne,clearFocusReturn:()=>{ze(null)},currentDescendantId:D?dt(D):void 0,preventInitialScroll:Qe,clearPreventScroll:()=>{te(!1)},pauseDescendantEvaluation:F}),[we,pe.current,it,Ne,me,D,Qe,F]),{activeDescendant:ce,descendants:Oe}=_i(ye,[X]),Ct=Xr(ce);Ti({loading:E,descendants:Oe,previousActiveDescendant:Ct,activeDescendant:ce,focusReturnEl:Ne,setFocusReturnEl:ze,scrollEl:(et=(wt=ye.scope)==null?void 0:wt.querySelector(ye.scopeSelector))==null?void 0:et.querySelector("ul")}),u.useEffect(()=>{const re=(de=null)=>{if(ce){if(ce.dataset.expand==="true"&&de!=="collapse"){(ce.querySelector('span[aria-hidden="true"]')??ce).click();return}if(de!=="expand")if(L==="flyout"&&ne.length>1&&U.length>0){Me([...ne].slice(0,-1));const xe=U.pop();xe!==void 0&&ze(xe),Fe()}else ce.dataset.collapse==="true"&&ce.click()}},je=de=>{switch(de.key){case`Arrow${Cn(H)}`:{if(q)break;re("expand");break}case`Arrow${Cn(Z)}`:{if(q)break;re("collapse");break}case"Escape":{if(L==="flyout"&&ne.length>1&&U.length>0){de.preventDefault(),de.stopPropagation(),Me([...ne].slice(0,-1));const xe=U.pop();xe!==void 0&&ze(xe),Fe()}break}}q&&(de.key===" "||de.key==="Spacebar")&&de.shiftKey&&(de.preventDefault(),re())};return ce&&(x==null||x(Vt(ce.id))),we==null||we.addEventListener("keydown",je),()=>we==null?void 0:we.removeEventListener("keydown",je)},[we,ce,ne]),u.useEffect(()=>{const re=setTimeout(()=>{var je,de;if(a.length===ve.current){const xe=Oe==null?void 0:Oe.map(Be=>Be.id),Rt=(de=(je=ye.scope)==null?void 0:je.querySelector(ye.scopeSelector))==null?void 0:de.querySelectorAll(ye.selector);if(!Rt){Fe();return}const st=Array.from(Rt);if((st==null?void 0:st.length)!==(xe==null?void 0:xe.length)){Fe();return}st.every((Be,at)=>Be.id===xe[at])||Fe();return}ve.current=a.length,Fe()},0);return()=>clearTimeout(re)},[a]);const yt=u.useMemo(()=>({componentId:s,"aria-label":R,mode:m,arrowNavigationUnsupported:q,onItemClick:(re,je)=>{var de;be&&((de=pe.current)==null||de.focus()),b==null||b(re,je)},onItemActive:x,onItemExpand:I,onItemCollapse:v,itemLayout:d,accent:g,scrollAt:$,emptyText:y,radioName:le,loadMore:O,loading:E,variant:L,focusControl:we,updateActiveDescendants:Fe,setFocusReturnEl:ze,setFocusDescendant:ke,getScopedItemId:dt,pushFlyoutId:Pe,flyOutActiveIdStack:ne,updateParentDescendantStack:kt,expandTo:{parentItemId:J,onComplete:()=>{bt(void 0)}}}),[s,R,m,q,b,x,I,v,d,g,$,y,le,O,E,L,we,Fe,ze,ke,dt,Pe,ne,kt,J]),$t=M??(L==="drill-down"?c.jsx(wo,{items:a,id:ee,menuRole:P,"aria-multiselectable":m==="multi-select","aria-labelledby":R?`${s}-menuLabel`:void 0}):c.jsx(bo,{items:a,menuRole:P}));return c.jsxs(mo,{"data-testid":S.root,id:s,"aria-describedby":be?`${s}-menuDescription`:void 0,...G,ref:pe,tabIndex:be?0:void 0,children:[be&&c.jsx("span",{id:`${s}-menuDescription`,hidden:!0,children:`${z("menu_selection_instructions")} `&&W||""}),R&&c.jsx(vn,{id:`${s}-menuLabel`,children:R}),B&&c.jsx("header",{"data-popover-scroll-el":!0,children:B}),c.jsx(ln,{"data-popover-scroll-el":!0,children:c.jsx(vt.Provider,{value:yt,children:$t})}),(f||A)&&c.jsx("footer",{"data-popover-scroll-el":!0,children:f?c.jsxs(Je,{"data-testid":S.createNew,variant:"link",onClick:f,children:[c.jsx(Ee,{name:"plus"})," ",z("create_new")]}):A})]})}),Es=Xe(Is,po),vs="budicon",ks="arrow-micro-down",Cs=()=>c.jsx("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),Rs="0 0 25 25",Ls=Object.freeze(Object.defineProperty({__proto__:null,Component:Cs,name:ks,set:vs,viewBox:Rs},Symbol.toStringTag,{value:"Module"})),xo=tt("menu-button",[]);nt(Ls);const So=j.button(({theme:{base:{spacing:e}}})=>p`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${kn} + ${Vr} {
        margin-inline-start: ${e};
      }
    `);So.defaultProps=Y;const Ms=j.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":o}},components:{icon:{size:{s:i}}}}=e;return p`
    max-width: 100%;

    ${t&&p`
      padding-inline-start: calc((${n} - ${i}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${o} - ${i} * 2);
      }
    `}

    ${Wr} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Gt}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),Os=j(Un)`
  min-width: 20ch;
`,js=u.forwardRef(function(t,n){const o=ht(),{testId:i,id:s=o,text:a,menu:d,popover:f,onClick:m,icon:g,count:$,iconOnly:y=!1,showArrow:b=!1,...x}=t,I=Ke(i,xo),[O,v]=u.useState(!1),E=Ie(n),D=Ie(f==null?void 0:f.ref),B=Ie(d==null?void 0:d.ref);yi([D,E],u.useCallback(L=>{L||v(!1)},[])),an(L=>{O&&(v(!1),L.stopPropagation())},E),an(L=>{var _;O&&(v(!1),L.stopPropagation(),(_=E.current)==null||_.focus())},d==null?void 0:d.focusControlEl);const{rtl:A}=rt();return c.jsxs(c.Fragment,{children:[c.jsx(Je,{"data-testid":I.root,as:So,"aria-label":a,...x,id:s,ref:E,"aria-expanded":O,"aria-haspopup":"menu","aria-controls":O?`${s}-popover`:void 0,label:y&&!O?a:void 0,onClick:L=>{const _=L.detail>0;O?_&&v(!1):v(!0),(!O||_)&&(m==null||m(L))},icon:y,children:c.jsxs(se,{as:Ms,container:{alignItems:"center",gap:1},padIcon:y&&b,children:[g&&c.jsx(Ee,{name:g}),!y&&c.jsxs(c.Fragment,{children:[c.jsx(Ue,{children:a}),typeof $=="number"&&c.jsx(so,{children:$})]}),(!y||b)&&c.jsx(Ee,{name:"arrow-micro-down"})]})}),c.jsx(Os,{placement:A?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...f,id:`${s}-popover`,show:!!d&&O,target:E.current,ref:D,children:d&&c.jsx(Es,{testId:I.root,...d,ref:B,items:d.items,onItemClick:(L,_)=>{var q;d.mode!=="multi-select"&&v(!1),(q=d.onItemClick)==null||q.call(d,L,_)},focusControlEl:d.focusControlEl||E.current||void 0})})]})}),Ds=Xe(js,xo),Ns=u.forwardRef(function({"data-testid":t,items:n,menuAt:o=2,scrollAt:i,iconOnly:s=!0,menuButtonProps:a,contextualLabel:d,compact:f=!1,disabled:m=!1,tabIndex:g},$){const y=De(),b=Ie($);return!n||n.length===0?null:n.length>=o?c.jsx(Ds,{...t?{"data-testid":t}:{},ref:b,text:y("actions"),"aria-label":d&&y("actions_for",[d]),iconOnly:!0,icon:"more",variant:"simple",compact:f,onClick:a==null?void 0:a.onClick,onKeyDown:a==null?void 0:a.onKeyDown,disabled:m,tabIndex:g,menu:{scrollAt:i,items:n.map(({text:x,onClick:I,...O})=>({...O,primary:x,onClick:I?(v,E)=>{I(v,E,b.current??void 0)}:void 0}))}}):c.jsx(c.Fragment,{children:n.map(({id:x,icon:I,text:O,onClick:v,...E})=>u.createElement(Je,{...t?{"data-testid":t}:{},key:x,variant:I&&s?"simple":void 0,onClick:D=>v==null?void 0:v(x,D),label:I?O:void 0,icon:!!I&&s,compact:f,"aria-label":d?`${O} - ${d}`:O,disabled:m,...E},I&&s?c.jsx(Ee,{name:I}):O))})});/*! @license DOMPurify 3.4.14 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.14/LICENSE */function kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function zs(e){if(Array.isArray(e))return e}function Ps(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,i,s,a,d=[],f=!0,m=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(f=(o=s.call(n)).done)&&(d.push(o.value),d.length!==t);f=!0);}catch(g){m=!0,i=g}finally{try{if(!f&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(m)throw i}}return d}}function Fs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hs(e,t){return zs(e)||Ps(e,t)||Us(e,t)||Fs()}function Us(e,t){if(e){if(typeof e=="string")return kr(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kr(e,t):void 0}}const _o=Object.entries,Cr=Object.setPrototypeOf,Bs=Object.isFrozen,Gs=Object.getPrototypeOf,Ws=Object.getOwnPropertyDescriptor;let ue=Object.freeze,fe=Object.seal,At=Object.create,To=typeof Reflect<"u"&&Reflect,Mn=To.apply,On=To.construct;ue||(ue=function(t){return t});fe||(fe=function(t){return t});Mn||(Mn=function(t,n){for(var o=arguments.length,i=new Array(o>2?o-2:0),s=2;s<o;s++)i[s-2]=arguments[s];return t.apply(n,i)});On||(On=function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return new t(...o)});const mt=ae(Array.prototype.forEach),Vs=ae(Array.prototype.lastIndexOf),Rr=ae(Array.prototype.pop),Ot=ae(Array.prototype.push),Ys=ae(Array.prototype.splice),It=Array.isArray,Nt=ae(String.prototype.toLowerCase),xn=ae(String.prototype.toString),Lr=ae(String.prototype.match),jt=ae(String.prototype.replace),Mr=ae(String.prototype.indexOf),qs=ae(String.prototype.trim),Zs=ae(Number.prototype.toString),Xs=ae(Boolean.prototype.toString),Or=typeof BigInt>"u"?null:ae(BigInt.prototype.toString),jr=typeof Symbol>"u"?null:ae(Symbol.prototype.toString),Te=ae(Object.prototype.hasOwnProperty),Dt=ae(Object.prototype.toString),he=ae(RegExp.prototype.test),ft=Ks(TypeError);function ae(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return Mn(e,t,o)}}function Ks(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return On(e,n)}}function V(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nt;if(Cr&&Cr(e,null),!It(t))return e;let o=t.length;for(;o--;){let i=t[o];if(typeof i=="string"){const s=n(i);s!==i&&(Bs(t)||(t[o]=s),i=s)}e[i]=!0}return e}function Js(e){for(let t=0;t<e.length;t++)Te(e,t)||(e[t]=null);return e}function Re(e){const t=At(null);for(const o of _o(e)){var n=Hs(o,2);const i=n[0],s=n[1];Te(e,i)&&(It(s)?t[i]=Js(s):s&&typeof s=="object"&&s.constructor===Object?t[i]=Re(s):t[i]=s)}return t}function Qs(e){switch(typeof e){case"string":return e;case"number":return Zs(e);case"boolean":return Xs(e);case"bigint":return Or?Or(e):"0";case"symbol":return jr?jr(e):"Symbol()";case"undefined":return Dt(e);case"function":case"object":{if(e===null)return Dt(e);const t=e,n=He(t,"toString");if(typeof n=="function"){const o=n(t);return typeof o=="string"?o:Dt(o)}return Dt(e)}default:return Dt(e)}}function He(e,t){for(;e!==null;){const o=Ws(e,t);if(o){if(o.get)return ae(o.get);if(typeof o.value=="function")return ae(o.value)}e=Gs(e)}function n(){return null}return n}function ea(e){try{return he(e,""),!0}catch{return!1}}const Dr=ue(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Sn=ue(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_n=ue(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ta=ue(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Tn=ue(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),na=ue(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Nr=ue(["#text"]),zr=ue(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),An=ue(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Pr=ue(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),on=ue(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ra=fe(/{{[\w\W]*|^[\w\W]*}}/g),oa=fe(/<%[\w\W]*|^[\w\W]*%>/g),ia=fe(/\${[\w\W]*/g),sa=fe(/^data-[\-\w.\u00B7-\uFFFF]+$/),aa=fe(/^aria-[\-\w]+$/),Fr=fe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),la=fe(/^(?:\w+script|data):/i),ca=fe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),da=fe(/^html$/i),ua=fe(/^[a-z][.\w]*(-[.\w]+)+$/i),Hr=fe(/<[/\w!]/g),Ur=fe(/<[/\w]/g),fa=fe(/<\/no(script|embed|frames)/i),ma=fe(/\/>/i),Ce={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ao=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],pa=ue(V({},Ao)),ha=(function(){const e={};return mt(Ao,t=>{e[t]=fe(new RegExp("</"+t+"(?=[\\t\\n\\f\\r />])","i"))}),ue(e)})(),ga=function(){return typeof window>"u"?null:window},ba=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(o=n.getAttribute(i));const s="dompurify"+(o?"#"+o:"");try{return t.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Br=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ct=function(t,n,o,i){return Te(t,n)&&It(t[n])?V(i.base?Re(i.base):{},t[n],i.transform):o},In=function(t,n,o){const i=Te(t,n)?t[n]:void 0;return i&&typeof i=="object"?Re(i):o()};function Io(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ga();const t=w=>Io(w);if(t.version="3.4.14",t.removed=[],!e||!e.document||e.document.nodeType!==Ce.document||!e.Element)return t.isSupported=!1,t;let n=e.document;const o=n,i=o.currentScript;e.DocumentFragment;const s=e.HTMLTemplateElement,a=e.Node,d=e.Element,f=e.NodeFilter,m=e.NamedNodeMap;m===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;const g=e.DOMParser,$=e.trustedTypes,y=d.prototype,b=He(y,"cloneNode"),x=He(y,"remove"),I=He(y,"nextSibling"),O=He(y,"childNodes"),v=He(y,"parentNode"),E=He(y,"shadowRoot"),D=He(y,"attributes"),B=a&&a.prototype?He(a.prototype,"nodeType"):null,A=a&&a.prototype?He(a.prototype,"nodeName"):null,L=a&&a.prototype?He(a.prototype,"ownerDocument"):null,_=function(r){return B?B(r):r.nodeType},q=function(r){return A?A(r):r.nodeName};if(typeof s=="function"){const w=n.createElement("template");w.content&&w.content.ownerDocument&&(n=w.content.ownerDocument)}let W,R="",P,ee=!1,F=0;const M=function(){if(F>0)throw ft('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},k=function(r){M(),F++;try{return W.createHTML(r)}finally{F--}},G=function(r){M(),F++;try{return W.createScriptURL(r)}finally{F--}},S=function(){return ee||(P=ba($,i),ee=!0),P},z=n,H=z.implementation,Z=z.createNodeIterator,le=z.createDocumentFragment,pe=z.getElementsByTagName,ve=o.importNode;let X=Br();t.isSupported=typeof _o=="function"&&typeof v=="function"&&H&&H.createHTMLDocument!==void 0;const K=ra,me=oa,ke=ia,ne=sa,Me=aa,Ne=la,ze=ca,Qe=ua;let te=Fr,U=null;const ot=V({},[...Dr,...Sn,..._n,...Tn,...Nr]);let J=null;const bt=V({},[...zr,...An,...Pr,...on]);let be=Object.seal(At(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),it=null,we=null;const Pe=Object.seal(At(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kt=!0,dt=!0,Vt=!1,Fe=!0,ye=!1,ce=!0,Oe=!1,Ct=!1,yt=null,$t=null,wt=!1,et=!1,re=!1,je=!1,de=!0,xe=!1;const Rt="user-content-";let st=!0,Yt=!1,Be={},at=null;const er=V({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let tr=null;const nr=V({},["audio","video","img","source","image","track"]);let rr=null;const or=V({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),qt="http://www.w3.org/1998/Math/MathML",Zt="http://www.w3.org/2000/svg",Ge="http://www.w3.org/1999/xhtml";let xt=Ge,fn=!1,mn=null;const Ho=V({},[qt,Zt,Ge],xn),ir=ue(["mi","mo","mn","ms","mtext"]);let pn=V({},ir);const sr=ue(["annotation-xml"]);let hn=V({},sr);const Uo=V({},["title","style","font","a","script"]);let Lt=null;const Bo=["application/xhtml+xml","text/html"],Go="text/html";let ie=null,St=null;const Wo=n.createElement("form"),ar=function(r){return r instanceof RegExp||r instanceof Function},gn=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(St&&St===r)return;(!r||typeof r!="object")&&(r={}),r=Re(r),Lt=Bo.indexOf(r.PARSER_MEDIA_TYPE)===-1?Go:r.PARSER_MEDIA_TYPE,ie=Lt==="application/xhtml+xml"?xn:Nt,U=ct(r,"ALLOWED_TAGS",ot,{transform:ie}),J=ct(r,"ALLOWED_ATTR",bt,{transform:ie}),mn=ct(r,"ALLOWED_NAMESPACES",Ho,{transform:xn}),rr=ct(r,"ADD_URI_SAFE_ATTR",or,{transform:ie,base:or}),tr=ct(r,"ADD_DATA_URI_TAGS",nr,{transform:ie,base:nr}),at=ct(r,"FORBID_CONTENTS",er,{transform:ie}),it=ct(r,"FORBID_TAGS",Re({}),{transform:ie}),we=ct(r,"FORBID_ATTR",Re({}),{transform:ie}),Be=Te(r,"USE_PROFILES")?r.USE_PROFILES&&typeof r.USE_PROFILES=="object"?Re(r.USE_PROFILES):r.USE_PROFILES:!1,kt=r.ALLOW_ARIA_ATTR!==!1,dt=r.ALLOW_DATA_ATTR!==!1,Vt=r.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ye=r.SAFE_FOR_TEMPLATES||!1,ce=r.SAFE_FOR_XML!==!1,Oe=r.WHOLE_DOCUMENT||!1,et=r.RETURN_DOM||!1,re=r.RETURN_DOM_FRAGMENT||!1,je=r.RETURN_TRUSTED_TYPE||!1,wt=r.FORCE_BODY||!1,de=r.SANITIZE_DOM!==!1,xe=r.SANITIZE_NAMED_PROPS||!1,st=r.KEEP_CONTENT!==!1,Yt=r.IN_PLACE||!1,te=ea(r.ALLOWED_URI_REGEXP)?r.ALLOWED_URI_REGEXP:Fr,xt=typeof r.NAMESPACE=="string"?r.NAMESPACE:Ge,pn=In(r,"MATHML_TEXT_INTEGRATION_POINTS",()=>V({},ir)),hn=In(r,"HTML_INTEGRATION_POINTS",()=>V({},sr));const l=In(r,"CUSTOM_ELEMENT_HANDLING",()=>At(null));if(be=At(null),Te(l,"tagNameCheck")&&ar(l.tagNameCheck)&&(be.tagNameCheck=l.tagNameCheck),Te(l,"attributeNameCheck")&&ar(l.attributeNameCheck)&&(be.attributeNameCheck=l.attributeNameCheck),Te(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(be.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),fe(be),ye&&(dt=!1),re&&(et=!0),Be&&(U=V({},Nr),J=At(null),Be.html===!0&&(V(U,Dr),V(J,zr)),Be.svg===!0&&(V(U,Sn),V(J,An),V(J,on)),Be.svgFilters===!0&&(V(U,_n),V(J,An),V(J,on)),Be.mathMl===!0&&(V(U,Tn),V(J,Pr),V(J,on))),Pe.tagCheck=null,Pe.attributeCheck=null,Te(r,"ADD_TAGS")&&(typeof r.ADD_TAGS=="function"?Pe.tagCheck=r.ADD_TAGS:It(r.ADD_TAGS)&&(U===ot&&(U=Re(U)),V(U,r.ADD_TAGS,ie))),Te(r,"ADD_ATTR")&&(typeof r.ADD_ATTR=="function"?Pe.attributeCheck=r.ADD_ATTR:It(r.ADD_ATTR)&&(J===bt&&(J=Re(J)),V(J,r.ADD_ATTR,ie))),Te(r,"ADD_FORBID_CONTENTS")&&It(r.ADD_FORBID_CONTENTS)&&(at===er&&(at=Re(at)),V(at,r.ADD_FORBID_CONTENTS,ie)),st&&(U["#text"]=!0),Oe&&V(U,["html","head","body"]),U.table&&(V(U,["tbody"]),delete it.tbody),r.TRUSTED_TYPES_POLICY){if(typeof r.TRUSTED_TYPES_POLICY.createHTML!="function")throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof r.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ft('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const h=W;W=r.TRUSTED_TYPES_POLICY;try{R=k("")}catch(T){throw W=h,T}}else r.TRUSTED_TYPES_POLICY===null?(W=void 0,R=""):(W===void 0&&(W=S()),W&&typeof R=="string"&&(R=k("")));ue&&ue(r),St=r},lr=V({},[...Sn,..._n,...ta]),cr=V({},[...Tn,...na]),Vo=function(r,l,h){return l.namespaceURI===Ge?r==="svg":l.namespaceURI===qt?r==="svg"&&(h==="annotation-xml"||pn[h]):!!lr[r]},Yo=function(r,l,h){return l.namespaceURI===Ge?r==="math":l.namespaceURI===Zt?r==="math"&&hn[h]:!!cr[r]},qo=function(r,l,h){return l.namespaceURI===Zt&&!hn[h]||l.namespaceURI===qt&&!pn[h]?!1:!cr[r]&&(Uo[r]||!lr[r])},Zo=function(r){let l=v(r);(!l||!l.tagName)&&(l={namespaceURI:xt,tagName:"template"});const h=Nt(r.tagName),T=Nt(l.tagName);return mn[r.namespaceURI]?r.namespaceURI===Zt?Vo(h,l,T):r.namespaceURI===qt?Yo(h,l,T):r.namespaceURI===Ge?qo(h,l,T):!!(Lt==="application/xhtml+xml"&&mn[r.namespaceURI]):!1},lt=function(r){Ot(t.removed,{element:r});try{v(r).removeChild(r)}catch{if(x(r),!v(r))throw ft("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},dr=function(r,l,h){try{r.removeAttributeNode(l)}catch{try{r.removeAttribute(h)}catch{}}},Xt=function(r){Kt(r);const l=O(r);if(l){const T=[];mt(l,C=>{Ot(T,C)}),mt(T,C=>{try{x(C)}catch{}})}const h=D(r);if(h)for(let T=h.length-1;T>=0;--T){const C=h[T],N=C&&C.name;typeof N=="string"&&dr(r,C,N)}},ut=function(r,l,h){if(!h)try{h=l.getAttributeNode(r)}catch{h=null}Ot(t.removed,{attribute:h||null,from:l});try{h?l.removeAttributeNode(h):l.removeAttribute(r)}catch{try{l.removeAttribute(r)}catch{}}if(r==="is")if(et||re)try{lt(l)}catch{}else try{l.setAttribute(r,"")}catch{}},Xo=function(r){const l=D(r);if(l)for(let h=l.length-1;h>=0;--h){const T=l[h],C=T&&T.name;typeof C!="string"||J[ie(C)]||dr(r,T,C)}},Kt=function(r){const l=[r];for(;l.length>0;){const h=l.pop();_(h)===Ce.element&&Xo(h);const C=O(h);if(C)for(let N=C.length-1;N>=0;--N)l.push(C[N])}},ur=function(r,l){return ce?r==="patchsrc"?!0:r==="for"&&l!=="label"&&l!=="output":!1},Ko=function(r){if(!ce)return;const l=[r];for(;l.length>0;){const h=l.pop(),T=_(h);if(T===Ce.processingInstruction||T===Ce.comment&&he(Ur,h.data)){try{x(h)}catch{}continue}if(T===Ce.element){const N=h,Q=ie(q(h));try{N.hasAttribute&&N.hasAttribute("patchsrc")&&N.removeAttribute("patchsrc"),N.hasAttribute&&N.hasAttribute("for")&&ur("for",Q)&&N.removeAttribute("for")}catch{}}const C=O(h);if(C)for(let N=C.length-1;N>=0;--N)l.push(C[N])}},fr=function(r){let l=null,h=null;if(wt)r="<remove></remove>"+r;else{const N=Lr(r,/^[\r\n\t ]+/);h=N&&N[0]}Lt==="application/xhtml+xml"&&xt===Ge&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");const T=W?k(r):r;if(xt===Ge)try{l=new g().parseFromString(T,Lt)}catch{}if(!l||!l.documentElement){l=H.createDocument(xt,"template",null);try{l.documentElement.innerHTML=fn?R:T}catch{}}const C=l.body||l.documentElement;return r&&h&&C.insertBefore(n.createTextNode(h),C.childNodes[0]||null),xt===Ge?pe.call(l,Oe?"html":"body")[0]:Oe?l.documentElement:C},mr=function(r){const l=L?L(r):r.ownerDocument;return Z.call(l||r,r,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Jt=function(r){return r=jt(r,K," "),r=jt(r,me," "),r=jt(r,ke," "),r},bn=function(r){var l;r.normalize();const h=L?L(r):r.ownerDocument,T=Z.call(h||r,r,f.SHOW_TEXT|f.SHOW_COMMENT|f.SHOW_CDATA_SECTION|f.SHOW_PROCESSING_INSTRUCTION,null);let C=T.nextNode();for(;C;)C.data=Jt(C.data),C=T.nextNode();const N=(l=r.querySelectorAll)===null||l===void 0?void 0:l.call(r,"template");N&&mt(N,Q=>{_t(Q.content)&&bn(Q.content)})},Qt=function(r){const l=A?A(r):null;return typeof l!="string"||ie(l)!=="form"?!1:typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||r.attributes!==D(r)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function"||r.nodeType!==B(r)||r.childNodes!==O(r)},_t=function(r){if(!B||typeof r!="object"||r===null)return!1;try{return B(r)===Ce.documentFragment}catch{return!1}},Mt=function(r){if(!B||typeof r!="object"||r===null)return!1;try{return typeof B(r)=="number"}catch{return!1}};function We(w,r,l){w.length!==0&&mt(w,h=>{h.call(t,r,l,St)})}const Jo=function(r,l){return!!(ce&&r.hasChildNodes()&&!Mt(r.firstElementChild)&&he(Hr,r.textContent)&&he(Hr,r.innerHTML)||ce&&r.namespaceURI===Ge&&pa[l]&&(Mt(r.firstElementChild)||typeof r.textContent=="string"&&he(ha[l],r.textContent))||r.nodeType===Ce.processingInstruction||ce&&r.nodeType===Ce.comment&&he(Ur,r.data))},en=function(r,l){if(r instanceof RegExp)return he(r,l);if(r instanceof Function){for(var h=arguments.length,T=new Array(h>2?h-2:0),C=2;C<h;C++)T[C-2]=arguments[C];return!!r(l,...T)}return!1},Qo=function(r,l,h){if(!it[l]&&yr(l)&&en(be.tagNameCheck,l))return!1;if(st&&!at[l]){const T=v(r),C=O(r);if(C&&T){const N=C.length;for(let Q=N-1;Q>=0;--Q){const oe=r===h?b(C[Q],!0):C[Q];T.insertBefore(oe,I(r))}}}return lt(r),!0},pr=function(r,l,h,T){return r.length===0?l:l===h||l===T?Re(l):l},hr=function(r,l){return r===l||v(r)!==null?!1:(Yt&&Kt(r),!0)},gr=function(r,l){if(We(X.beforeSanitizeElements,r,null),hr(r,l))return!0;if(Qt(r))return lt(r),!0;const h=ie(q(r));if(U=pr(X.uponSanitizeElement,U,ot,yt),We(X.uponSanitizeElement,r,{tagName:h,allowedTags:U}),hr(r,l))return!0;if(Jo(r,h))return lt(r),!0;if(it[h]||!(Pe.tagCheck instanceof Function&&Pe.tagCheck(h))&&!U[h]){const C=Qo(r,h,l);return C===!1&&We(X.afterSanitizeElements,r,null),C}if(_(r)===Ce.element&&!Zo(r)||(h==="noscript"||h==="noembed"||h==="noframes")&&he(fa,r.innerHTML))return lt(r),!0;if(ye&&r.nodeType===Ce.text){const C=Jt(r.textContent);r.textContent!==C&&(Ot(t.removed,{element:r.cloneNode()}),r.textContent=C)}return We(X.afterSanitizeElements,r,null),!1},br=function(r,l,h){if(we[l]||ur(l,r)||de&&(l==="id"||l==="name")&&(h in n||h in Wo))return!1;const T=J[l]||Pe.attributeCheck instanceof Function&&Pe.attributeCheck(l,r);return dt&&he(ne,l)||kt&&he(Me,l)?!0:T?rr[l]||he(te,jt(h,ze,""))||(l==="src"||l==="xlink:href"||l==="href")&&r!=="script"&&Mr(h,"data:")===0&&tr[r]||Vt&&!he(Ne,jt(h,ze,""))?!0:!h:yr(r)&&en(be.tagNameCheck,r)&&en(be.attributeNameCheck,l,r)||l==="is"&&be.allowCustomizedBuiltInElements&&en(be.tagNameCheck,h)},ei=V({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),yr=function(r){return!ei[Nt(r)]&&he(Qe,r)},ti=function(r,l,h,T){if(W&&typeof $=="object"&&typeof $.getAttributeType=="function"&&!h)switch($.getAttributeType(r,l)){case"TrustedHTML":return k(T);case"TrustedScriptURL":return G(T)}return T},ni=function(r,l,h,T){try{h?r.setAttributeNS(h,l,T):r.setAttribute(l,T),Qt(r)?lt(r):Rr(t.removed)}catch{ut(l,r)}},$r=function(r){We(X.beforeSanitizeAttributes,r,null);const l=r.attributes;if(!l||Qt(r))return;J=pr(X.uponSanitizeAttribute,J,bt,$t);const h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:J,forceKeepAttr:void 0};let T=l.length;const C=ie(r.nodeName);for(;T--;){const N=l[T],Q=N.name,oe=N.namespaceURI,Se=N.value,_e=ie(Q),$n=Se;let $e=Q==="value"?$n:qs($n);if(h.attrName=_e,h.attrValue=$e,h.keepAttr=!0,h.forceKeepAttr=void 0,We(X.uponSanitizeAttribute,r,h),$e=h.attrValue,xe&&(_e==="id"||_e==="name")&&Mr($e,Rt)!==0&&(ut(Q,r,N),$e=Rt+$e),ce&&he(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,$e)){ut(Q,r,N);continue}if(_e==="attributename"&&Lr($e,"href")){ut(Q,r,N);continue}if(!h.forceKeepAttr){if(!h.keepAttr){ut(Q,r,N);continue}if(!Fe&&he(ma,$e)){ut(Q,r,N);continue}if(ye&&($e=Jt($e)),!br(C,_e,$e)){ut(Q,r,N);continue}$e=ti(C,_e,oe,$e),$e!==$n&&ni(r,Q,oe,$e)}}We(X.afterSanitizeAttributes,r,null)},tn=function(r){let l=null;const h=mr(r);for(We(X.beforeSanitizeShadowDOM,r,null);l=h.nextNode();)if(We(X.uponSanitizeShadowNode,l,null),gr(l,r),$r(l),_t(l.content)&&tn(l.content),_(l)===Ce.element){const T=E(l);_t(T)&&(yn(T),tn(T))}We(X.afterSanitizeShadowDOM,r,null)},yn=function(r){const l=[{node:r,shadow:null}];for(;l.length>0;){const h=l.pop();if(h.shadow){tn(h.shadow);continue}const T=h.node,N=_(T)===Ce.element,Q=O(T);if(Q)for(let oe=Q.length-1;oe>=0;--oe)l.push({node:Q[oe],shadow:null});if(N){const oe=A?A(T):null;if(typeof oe=="string"&&ie(oe)==="template"){const Se=T.content;_t(Se)&&l.push({node:Se,shadow:null})}}if(N){const oe=E(T);_t(oe)&&l.push({node:null,shadow:oe},{node:oe,shadow:null})}}};return t.sanitize=function(w){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,h=null,T=null,C=null;if(fn=!w,fn&&(w="<!-->"),typeof w!="string"&&!Mt(w)&&(w=Qs(w),typeof w!="string"))throw ft("dirty is not a string, aborting");if(!t.isSupported)return w;Ct?(U=yt,J=$t):gn(r),(X.uponSanitizeElement.length>0||X.uponSanitizeAttribute.length>0)&&(U=Re(U)),X.uponSanitizeAttribute.length>0&&(J=Re(J)),t.removed=[];const N=Yt&&typeof w!="string"&&Mt(w);if(N){Ko(w);const Se=q(w);if(typeof Se=="string"){const _e=ie(Se);if(!U[_e]||it[_e])throw Xt(w),ft("root node is forbidden and cannot be sanitized in-place")}if(Qt(w))throw Xt(w),ft("root node is clobbered and cannot be sanitized in-place");try{yn(w)}catch(_e){throw Xt(w),_e}}else if(Mt(w))l=fr("<!---->"),h=l.ownerDocument.importNode(w,!0),h.nodeType===Ce.element&&h.nodeName==="BODY"||h.nodeName==="HTML"?l=h:l.appendChild(h),yn(h);else{if(!et&&!ye&&!Oe&&w.indexOf("<")===-1)return W&&je?k(w):w;if(l=fr(w),!l)return et?null:je?R:""}l&&wt&&lt(l.firstChild);const Q=N?w:l;try{const Se=mr(Q);for(;T=Se.nextNode();)gr(T,Q),$r(T),_t(T.content)&&tn(T.content)}catch(Se){throw N&&(Xt(w),mt(t.removed,_e=>{_e.element&&Kt(_e.element)})),Se}if(N)return mt(t.removed,Se=>{Se.element&&Kt(Se.element)}),ye&&bn(w),w;if(et){if(ye&&bn(l),re)for(C=le.call(l.ownerDocument);l.firstChild;)C.appendChild(l.firstChild);else C=l;return(J.shadowroot||J.shadowrootmode)&&(C=ve.call(o,C,!0)),C}let oe=Oe?l.outerHTML:l.innerHTML;return Oe&&U["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&he(da,l.ownerDocument.doctype.name)&&(oe="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+oe),ye&&(oe=Jt(oe)),W&&je?k(oe):oe},t.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};gn(w),Ct=!0,yt=U,$t=J},t.clearConfig=function(){St=null,Ct=!1,yt=null,$t=null,W=P,R=""},t.isValidAttribute=function(w,r,l){St||gn({});const h=ie(w),T=ie(r);return br(h,T,l)},t.addHook=function(w,r){typeof r=="function"&&Te(X,w)&&Ot(X[w],r)},t.removeHook=function(w,r){if(Te(X,w)){if(r!==void 0){const l=Vs(X[w],r);return l===-1?void 0:Ys(X[w],l,1)[0]}return Rr(X[w])}},t.removeHooks=function(w){Te(X,w)&&(X[w]=[])},t.removeAllHooks=function(){X=Br()},t}var ya=Io();const Eo=tt("html",[]),Ft=ya(),$a=p`
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
`,wa=e=>p`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
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
`,xa=e=>{const{base:{"font-size":t,"font-scale":n,palette:o},components:{text:i}}=e,s=gt(t,n);return`
    ${$a}
    table {
      ${wa(e)}
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }
    a {
      color: ${o.interactive};
    }
    pre {
      white-space: break-spaces;
    }
    p {
      min-height: ${s[i.primary["font-size"]]};
    }
    h1 {
      font-size: ${s[i.h1["font-size"]]};
      font-weight: ${i.h1["font-weight"]};
      min-height: ${s[i.h1["font-size"]]};
    }
    h2 {
      font-size: ${s[i.h2["font-size"]]};
      font-weight: ${i.h2["font-weight"]};
      min-height: ${s[i.h2["font-size"]]};
    }
    h3 {
      font-size: ${s[i.h3["font-size"]]};
      font-weight: ${i.h3["font-weight"]};
      min-height: ${s[i.h3["font-size"]]};
    }
    h4 {
      font-size: ${s[i.h4["font-size"]]};
      font-weight: ${i.h4["font-weight"]};
      min-height: ${s[i.h4["font-size"]]};
    }
    h5 {
      font-size: ${s[i.h5["font-size"]]};
      font-weight: ${i.h5["font-weight"]};
      min-height: ${s[i.h5["font-size"]]};
    }
    h6 {
      font-size: ${s[i.h6["font-size"]]};
      font-weight: ${i.h6["font-weight"]};
      min-height: ${s[i.h6["font-size"]]};
    }
  `},vo=j.div(({theme:e})=>p`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${xa(e)}

    ${kn} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${kn} li {
      margin: 0;
    }
  `);vo.defaultProps=Y;if(Ft.isSupported){const e=new WeakSet;Ft.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),t.tagName==="A"&&t.hasAttribute("href")&&t.getAttribute("target")==="_blank"&&e.add(t))}),Ft.addHook("afterSanitizeAttributes",t=>{if(t.tagName==="A"&&t.hasAttribute("href")){const n=t.getAttribute("href");let o;try{o=new URL(n,window.location.href)}catch{return}window.location.origin!==o.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const Sa=u.forwardRef(function({testId:t,content:n,customTags:o,...i},s){const[a,d]=u.useState(!1),f=u.useMemo(()=>a&&Ft.isSupported?Ft.sanitize(n,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:o?g=>o.includes(g):void 0},ALLOWED_URI_REGEXP:xi}):"",[n,o,a]),m=Ke(t,Eo);return u.useEffect(()=>{d(!0)},[]),c.jsx(vo,{"data-testid":m.root,...i,dangerouslySetInnerHTML:{__html:f},ref:s})}),_a=Xe(Sa,Eo),Ta=j.div``,ko=j.div``,un=j.div(({theme:e})=>p`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${ko} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);un.defaultProps=Y;j.div``;const Co=j(Un)(({theme:e})=>p`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${un} {
        overflow: hidden;
      }
    }
  `);Co.defaultProps=Y;const Aa=u.forwardRef(function({arrow:t=!0,target:n,portal:o,strategy:i,placement:s,children:a,progress:d,focusTrap:f=!0,...m},g){const $=Ie(g);return $i(f?$:null,!1),c.jsx(Co,{...m,role:"dialog",arrow:t,"aria-modal":!1,"aria-busy":!!d,ref:$,target:n,portal:o,strategy:i,placement:s,children:a})}),Ro=j(Je)``,Lo=j(Aa)(({theme:e})=>p`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${un} > ${Ro} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);Lo.defaultProps=Y;const Ia=u.forwardRef(function({target:t,heading:n,children:o,progress:i,onDismiss:s,...a},d){const f=De(),m=ht(),g=Ie(d),$=u.useRef(null),y=u.useRef(null),b=Ai(g,$,[y],[i]),x=()=>{if(i)return;const E=Pn(g),D=E.find(B=>{var A;return(A=$.current)==null?void 0:A.contains(B)})??y.current??E[0];D==null||D.focus()};an(E=>{s==null||s(),E.stopPropagation()},g,[s]),Zr("mousedown",[t,g],()=>{s==null||s()}),u.useLayoutEffect(()=>{const E=zn();return()=>{E instanceof HTMLElement&&E.isConnected&&E.focus()}},[]),u.useEffect(()=>{i||x()},[i]),u.useEffect(()=>{const E=()=>{setTimeout(()=>{s==null||s()},0)};return t.addEventListener("click",E),()=>{t.removeEventListener("click",E)}},[]);const I=n?c.jsx(Ue,{id:m,variant:"h2",children:typeof n=="string"?n:n.primary}):null,O=c.jsx(Hn,{visible:!!i,focusOnVisible:!0,placement:"local",message:typeof i=="string"?i:void 0}),v=c.jsx(Ro,{icon:!0,variant:"simple",onClick:()=>{s()},label:f("close"),ref:y,children:c.jsx(Ee,{name:"times"})});return c.jsxs(Lo,{...a,...typeof n=="string"?{"aria-labelledby":m}:{"aria-label":n==null?void 0:n.primary},arrow:!0,target:t,progress:i,ref:g,children:[n&&I&&c.jsxs(se,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:ko,children:[typeof n=="string"?I:c.jsx(Vn,{primary:I,secondary:n.secondary?c.jsx(Ue,{variant:"secondary",children:n.secondary}):void 0,visual:n.visual}),v]}),(!n||o||i)&&c.jsxs(se,{container:{direction:"column"},item:{grow:1},as:un,ref:$,tabIndex:b,children:[!n&&v,o&&c.jsx(Ta,{inert:i?"":void 0,children:o}),O]})]})}),Ea="budicon",va="information",ka=()=>c.jsx("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),Ca="0 0 25 25",Ra=Object.freeze(Object.defineProperty({__proto__:null,Component:ka,name:va,set:Ea,viewBox:Ca},Symbol.toStringTag,{value:"Module"}));nt(Ra);const Mo=j.div``,La=u.forwardRef(function(t,n){const o=De(),{heading:i=o("additional_info"),contextualLabel:s,children:a,dialogHandle:d,...f}=t,[m,g]=u.useState(null),$=u.useRef(null),y=Ie(d);return u.useImperativeHandle(y,()=>({open:()=>{g($.current)},close:()=>{g(null)}})),c.jsxs(se,{container:!0,as:Mo,ref:n,...f,children:[c.jsx(Je,{variant:"simple",label:o("additional_info"),compact:!0,icon:!0,ref:$,onClick:()=>{var b;(b=y.current)==null||b.open()},"aria-label":`${o("additional_info")} - ${s??i}`,children:c.jsx(Ee,{name:"information"})}),m&&c.jsx(Ia,{heading:i,target:m,onDismiss:()=>{var b;(b=y.current)==null||b.close()},children:typeof a=="string"?c.jsx(_a,{content:a}):a})]})}),Ae=j.label(({theme:e,labelHidden:t})=>{const{"foreground-color":n}=e.components.label,o=Le(()=>t?Ut:Bt(cn(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),i=gt(e.base["font-size"],e.base["font-scale"]);return t?Ut:p`
          max-width: max-content;
          font-size: ${i[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${n==="auto"?o:n};
        `});Ae.defaultProps=Y;const Ma=u.forwardRef(function({children:t,labelHidden:n=!1,htmlFor:o,...i},s){return c.jsx(Ae,{ref:s,labelHidden:n,htmlFor:o===""?void 0:o,...i,children:t})}),Oa="budicon",ja="warn-solid",Da=()=>c.jsx("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),Na="0 0 25 25",za=Object.freeze(Object.defineProperty({__proto__:null,Component:Da,name:ja,set:Oa,viewBox:Na},Symbol.toStringTag,{value:"Module"})),Pa="budicon",Fa="diamond-minus",Ha=()=>c.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),Ua="0 0 25 25",Ba=Object.freeze(Object.defineProperty({__proto__:null,Component:Ha,name:Fa,set:Pa,viewBox:Ua},Symbol.toStringTag,{value:"Module"})),Kn=j.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:o,timing:i},palette:s},components:{"form-field":a,"form-control":{"foreground-color":d,"background-color":f,"border-color":m,"border-radius":g,"border-width":$,":hover":{"border-color":y},":focus":{"border-color":b,"box-shadow":x},":disabled":{"border-color":I,"background-color":O},":read-only":{"border-color":v,"background-color":E}}}},status:D,hasSuggestion:B})=>{const A=gt(t,n),L=D&&a[D]?a[D]["status-color"]:m,_=B&&D?Ht(.1,a[D]["status-color"],s["primary-background"]):f;return p`
      color: ${d};
      background-color: ${_};
      border-radius: calc(${e} * ${g});
      border-color: ${L};
      border-width: ${$};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${o};
      transition-timing-function: ${i.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${O};
        border-color: ${I};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${b};
        box-shadow: ${x};
        ${B&&p`
          background-color: ${f};
        `}
      }

      &:focus-within:not([disabled]) {
        ${B&&p`
          background-color: ${f};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!D&&p`
          border-color: ${y};
        `}
        ${B&&p`
          background-color: ${f};
          box-shadow: 0 0 0 0.125rem ${Bt(L,.2)};
        `}
      }

      ${B&&p`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${E};
        border-color: ${v};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${A.s}, 16px);
      }
    `});Kn.defaultProps=Y;const el=u.forwardRef(function(t,n){return c.jsx(Kn,{ref:n,...t})}),Ga=j.span`
  display: none;
`,Wa=u.forwardRef(function(t,n){const{portalTarget:o}=Nn();return o?ri.createPortal(c.jsx(Ga,{...t,ref:n}),o):null}),Oo=["label","info","additional-info","suggestion-accept","suggestion-reject"],jo=tt("form-field",Oo),Do=tt("radio-check",["control",...Oo]),Wt=j.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:o,"touch-size":i,"background-color":s,"border-color":a,"border-width":d}}},status:f}=e;let m=a;return(f==="error"||f==="warning")&&(m=n[f]["status-color"]),p`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${o};
      height: ${o};
      margin-inline-end: calc(0.5 * ${t});
      border: ${d} solid ${m};
      background-color: ${s};

      @media (pointer: coarse) {
        width: ${i};
        height: ${i};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Wt.defaultProps=Y;const Jn=j.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":o,"border-color":i},":read-only":{"background-color":s}},"radio-check":{size:a,":checked":{"background-color":d,"border-color":f}},checkbox:{"border-radius":m},"radio-button":{"border-radius":g}}}}=e,$=e.readOnly?s:d,y=Le(()=>cn($)),b=`+ ${Ae} ${Wt}`,{ltr:x}=rt();return p`
    ${Ut}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${a};
    height: ${a};

    ${!t&&p`
      &:focus ${b} {
        box-shadow: ${o};
        border-color: ${i};
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
      border-color: ${e.readOnly?"inherit":f};
      background-color: ${$};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${b}, &[type='radio'] ${b}::after {
      border-radius: ${g};
    }

    &[type='radio'] ${b}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${a} * 0.3);
      height: calc(${a} * 0.3);
      border-radius: ${g};
      border: calc(${a} * 0.2) solid ${y};
    }

    &[type='checkbox'] ${b} {
      border-radius: min(calc(${n} * ${m}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${b} {
      &::after {
        width: 40%;
        height: 75%;
        ${x?p`
              transform: rotate(45deg) translate(50%, -30%);
            `:p`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${y};
        border-bottom: 0.15em solid ${y};
      }
    }

    &[type='checkbox']:indeterminate ${b} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${y};
      }
    }
  `});Jn.defaultProps=Y;const Qn=j.div(e=>{const{disabled:t,readOnly:n,theme:{base:o,components:{"radio-check":{label:{color:i,"font-weight":s}},"form-control":{":hover":{"border-color":a}}}}}=e,d=gt(o["font-size"],o["font-scale"]);return p`
      > ${Ae} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${s};
        word-break: break-word;
        font-size: ${d.s};
        color: ${i};
        margin: 0;
        min-height: ${o["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${o["hit-area"]["finger-min"]};
        }
      }

      > ${Et} {
        margin: 0;
        padding-inline-start: calc(${o.spacing} / 4);
      }

      ${!(t||n)&&p`
        &:not(:focus-within) > ${Ae}:hover ${Wt} {
          border-color: ${a};
        }
      `}
    `});Qn.defaultProps=Y;const No=j.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:o,shadow:i,spacing:s},components:{card:a,"form-field":d,"radio-check":{label:f},"form-control":{":hover":{"border-color":m}}}}})=>{const g=n==="error"?d.error["status-color"]:o["border-line"];return p`
      min-width: min-content;
      cursor: pointer;
      background-color: ${a.background};
      border-radius: ${a["border-radius"]};
      border: 0.0625rem solid ${g};
      padding: ${s};

      ${e&&p`
        cursor: not-allowed;
      `}
      ${!(e||t)&&p`
        :hover:not(:focus-within) {
          border-color: ${m};

          ${Ae} ${Wt} {
            border-color: ${m};
          }
        }

        :focus-within {
          box-shadow: ${i.focus};
          border-color: transparent;
        }
      `}
        > ${Ae} {
        display: flex;
        align-items: center;
        color: ${f.color};
        font-weight: ${f["font-weight"]};
        margin: 0;
      }

      > ${Et} {
        margin: 0;
        padding-inline-start: calc(${s} / 4);
      }
    `});No.defaultProps=Y;const Va=u.forwardRef(function(t,n){const o=ht(),i=De(),{testId:s,type:a,id:d=o,label:f,required:m=!1,disabled:g=!1,readOnly:$=!1,indeterminate:y=!1,checked:b,defaultChecked:x,variant:I="simple",onClick:O,onKeyDown:v,onChange:E,status:D,info:B,additionalInfo:A,ariaDescribedby:L,suppressAnnouncements:_,className:q,...W}=t,R=Ke(s,Do),P=a==="radio",ee=I==="card",F=Ie(n),M=ht();return u.useEffect(()=>{!P&&F.current&&(F.current.indeterminate=!!y)},[F,y,P]),u.useEffect(()=>{if(!F.current)return;const k=F.current.nextSibling;if((k==null?void 0:k.nodeName.toUpperCase())!=="LABEL")return;const G=new AbortController;return k.addEventListener("mousedown",S=>{F.current===zn()&&S.preventDefault()},{signal:G.signal}),()=>{G.abort()}},[]),c.jsx(Za,{testId:R,as:ee?No:Qn,label:c.jsxs(c.Fragment,{children:[c.jsx(Wt,{status:D,isRadio:P,as:Kn,required:m,disabled:g,readOnly:$}),f,$&&c.jsx(Wa,{id:M,children:i("read_only")})]}),labelAs:ee?"div":void 0,id:d,required:m,disabled:g,readOnly:$,status:D,info:B,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:A,suppressAnnouncements:_,children:c.jsx(Jn,{"data-testid":R.control,...W,className:Yr("radio-check",q,{variant:I,type:a}),id:d,type:a,required:m,checked:b,defaultChecked:x,"aria-describedby":$?`${L} ${M}`:L,disabled:g,readOnly:$,onChange:E,onClick:k=>{$&&k.preventDefault(),O==null||O(k)},onKeyDown:k=>{a==="checkbox"&&$&&k.key===" "&&k.preventDefault(),a==="radio"&&$&&k.key.includes("Arrow")&&k.preventDefault(),v==null||v(k)},ref:F})})}),tl=Xe(Va,Do);nt(za,Ba,oo);const zo=j(Ee)(({theme:e,status:t})=>p`
    height: 1em;
    width: 1em;
    color: ${Le(()=>Bn(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);zo.defaultProps=Y;const Po=j(Je)(({theme:e})=>p`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);Po.defaultProps=Y;const Et=j.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:o,palette:i},components:{"form-field":s}}})=>{const{xxs:a}=gt(t,n);return p`
      max-width: max-content;
      font-size: ${a};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${o});
      }

      ${e&&s[e]&&p`
        color: ${Le(()=>Bn(s[e]["status-color"],i["primary-background"]),()=>s[e]["status-color"])};
      `}
    `});Et.defaultProps=Y;const jn=j.div``,Fo=j.div(e=>{const{asFieldset:t,showAdditionalInfo:n,disabled:o,required:i,theme:{base:{palette:{urgent:s},"disabled-opacity":a,spacing:d,"hit-area":{"compact-min":f}}}}=e;return p`
    ${o&&p`
      opacity: ${a};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${Jn}:only-of-type) {
      ${Et} {
        min-width: 100%;
      }
    }

    ${Tt}:has(${Qn}) {
      flex-shrink: 0;
    }

    > ${Ae}, > ${jn}, > ${Tt}:has(> ${Ae}) {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${d});
        min-height: ${f};
      }
    }

    > ${Ae}, > ${jn} > ${Ae}, > ${Tt} > ${Ae} {
      ${i&&p`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${s};
        }
      `}

      ${o&&p`
        cursor: not-allowed;
      `}
    }

    ${t&&n&&p`
      > ${Tt} > ${Ae} {
        display: block;
      }

      > ${Tt}:has(> ${Ae}) > ${Mo} {
        align-self: flex-start;
      }
    `}
  `});Fo.defaultProps=Y;const Dn=j(Je)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:o,palette:i},components:{"form-control":{"border-radius":s,"border-width":a},"form-field":d}}})=>{const{xxs:f}=gt(e,t),m=Le(()=>Bn(d.pending["status-color"],i["primary-background"]),()=>d.pending["status-color"]),g=wi(m),$=Le(()=>cn(m)),y=$&&Bt($,.4);return p`
    background-color: ${m};
    color: ${$};
    font-size: ${f};
    min-width: calc(3 * ${o});
    min-height: calc(3 * ${o});
    padding: 0 ${o};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${a} solid ${y};
      border-end-start-radius: calc(${n} * ${s});
      margin-inline-start: calc(2 * ${o});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${s});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${g.foreground};
      background-color: ${g.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});Dn.defaultProps=Y;const Ya={error:"warn-solid",warning:"diamond-minus",success:"check"},qa=u.forwardRef(function(t,n){const o=ht(),{testId:i,children:s,id:a=o,as:d="div",label:f,labelAs:m="label",labelFor:g=a,labelId:$,labelHidden:y=!1,labelAfter:b=!1,info:x,status:I,suppressAnnouncements:O,isRadioCheck:v,charLimitDisplay:E,required:D=!1,disabled:B=!1,readOnly:A=!1,inline:L=!1,onClear:_,actions:q,container:W,additionalInfo:R,onResolveSuggestion:P,"aria-describedby":ee,className:F,...M}=t,k=Ke(i,jo),G=d==="fieldset"||typeof d!="string"&&"target"in d&&d.target==="fieldset",S=De(),{announceAssertive:z}=Fn(),H=G||m==="legend"?"span":m,Z=I==="pending"&&!!P,le=Ie(n),pe=u.useRef(null),[ve,X]=u.useState(null),K=!!R&&!B&&!y,me=G&&!$?`${a}-label`:$,ke=c.jsxs(c.Fragment,{children:[c.jsx(Ma,{"data-testid":k.label,id:me,as:H,htmlFor:H==="label"?g:void 0,labelHidden:y,onClick:te=>{A&&te.preventDefault()},inline:L,ref:pe,children:f}),K&&ve&&c.jsx(La,{"data-testid":k.additionalInfo,heading:R.heading,contextualLabel:ve,children:R.content})]});let ne;!v&&!G&&!y?ne=c.jsx(se,{as:jn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:ke}):G&&!y?ne=c.jsx(se,{container:{alignItems:"end",justify:K&&!v?"between":void 0},children:ke}):ne=ke,u.useEffect(()=>{var te;X(((te=pe.current)==null?void 0:te.textContent)??null)},[f]),u.useEffect(()=>{var U,ot;if(O||I!=="error"&&I!=="warning")return;let te=S(I);typeof x=="string"&&(te=`${te} ${x}`),(U=pe.current)!=null&&U.textContent&&(te=`${(ot=pe.current)==null?void 0:ot.textContent} ${te}`),z({message:te,type:I})},[I,x]);let Me;if(G||u.Children.count(s)>1)Me=s;else{const te=u.Children.only(s).props["aria-describedby"];Me=u.cloneElement(s,{"aria-describedby":[te,x&&!A?`${a}-info`:void 0].join(" ").trim()||void 0})}q&&(Me=c.jsxs(se,{container:{alignItems:"center",gap:.5},children:[Me,c.jsx(Ns,{items:q,menuAt:3})]}));let Ne=c.jsxs(se,{id:`${a}-info`,"data-testid":k.info,status:I,as:Et,container:{alignItems:"center",gap:.5},children:[I&&I!=="pending"&&c.jsxs(c.Fragment,{children:[c.jsx(se,{item:{alignSelf:"start"},as:zo,status:I,name:Ya[I]}),c.jsx(vn,{children:`${S(I)} `})]}),x]});if(E&&(Ne=c.jsxs(se,{container:{justify:Ne?"between":"end",gap:1},children:[Ne,c.jsx(se,{item:{shrink:0},children:E})]})),Z){const te=Pn(le);Ne=c.jsxs(se,{container:{alignItems:"start",justify:"between"},children:[c.jsxs(Et,{"data-testid":k.info,status:I,id:`${a}-info`,children:[S("suggestion_info"),c.jsx(vn,{"aria-live":"polite",children:S("suggestion_assist")})]}),c.jsxs(se,{container:{wrap:"nowrap"},children:[c.jsx(Dn,{"data-testid":k.suggestionReject,onClick:()=>{var U;P(!1),(U=te[0])==null||U.focus()},"aria-label":`${S("no")}, ${S("reject_suggestion_button_a11y")}${ve?` - ${ve}`:""}`,children:S("no")}),c.jsx(Dn,{"data-testid":k.suggestionAccept,onClick:()=>{var U;P(!0),(U=te[0])==null||U.focus()},"aria-label":`${S("yes")}, ${S("accept_suggestion_button_a11y")}${ve?` - ${ve}`:""}`,children:S("yes")})]})]})}const ze=te=>{te.key==="Enter"&&(te.target.closest("button")||(te.preventDefault(),P==null||P(!0)))},Qe=[];return ee&&Qe.push(ee),G&&x&&Qe.push(`${a}-info`),c.jsxs(se,{"data-testid":k.root,...M,container:{direction:L?"row":"column",alignItems:L?"center":void 0,wrap:v?"wrap":void 0,...W},as:Fo,asFieldset:G,isRadioCheck:v,showAdditionalInfo:K,id:`${a}-field`,forwardedAs:d,required:D,disabled:B,readOnly:A,onKeyDown:Z?ze:void 0,"aria-describedby":Qe.length?Qe.join(" "):void 0,"aria-labelledby":G?me:void 0,ref:le,className:Yr("form-field",F,{status:I}),children:[(G||!b)&&ne,Me,!G&&b&&ne,!A&&Ne,v&&_&&c.jsx(Po,{variant:"link",onClick:()=>{_()},children:S("clear_selection")})]})}),Za=Xe(qa,jo);export{Za as F,Pt as G,tl as R,Kn as S,el as a,Ae as b,Wt as c,Fo as d,Oo as e,Qn as f,Et as g,rt as h,Xr as u,Qa as w};
