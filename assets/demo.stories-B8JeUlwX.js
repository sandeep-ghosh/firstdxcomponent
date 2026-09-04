var qt=Object.defineProperty;var zt=(i,n,t)=>n in i?qt(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var k=(i,n,t)=>zt(i,typeof n!="symbol"?n+"":n,t);import{j as u}from"./index-SNvzCnZR.js";import{r as y}from"./index-C5e9SFkp.js";import{i as G,a as Nt,d as Bt,q as T,A as P,b as j,c as U,e as V,f as st,g as q,h as Gt,j as dt,u as K,k as ot,l as at,w as Ht,B as et,V as kt,S as Yt,m as Xt,F as R,n as Kt,o as ct}from"./Badges.test-ids-Bi90gUTh.js";import{S as B,e as J,F as W,u as Jt,b as nt,G as Ct,c as Qt,d as Zt,f as te,g as ee,h as ne,R as ie,w as se,a as Z}from"./FormField-DNhMItfM.js";import{u as oe}from"./useBreakpoint-Rn_k3j4U.js";import"./index-vofeE47f.js";import"./iframe-DUv_ih4K.js";const ae=`
  a[href],
  button:enabled,
  input[type='checkbox']:enabled,
  input[type='radio']:enabled
`,re=(i,{cycle:n=!0,selector:t=ae,dir:e="up-down",allowTabFocus:s=!0,updateTabIndex:o=!0,initialFocusElement:a}={},l=[])=>{const[c,r]=e==="up-down"?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"],h=y.useCallback((d,g)=>{const v=Array.from(d.querySelectorAll(t));if(v.length>0){let x=v.findIndex(p=>p===a);x===-1&&(x=0),v[x].tabIndex=s&&!g?0:-1,v.splice(x,1),v.forEach(p=>{G(p,HTMLElement)&&(p.checked||(p.tabIndex=-1),p.querySelector('input[type="radio"]:checked')&&(p.tabIndex=0))})}},[t,a,...l]);Nt([i],d=>{i.current&&o&&h(i.current,d)});const f=y.useCallback(d=>{const g=i.current;if(!g||(["Home","End",c,r].includes(d.key)&&d.preventDefault(),!Bt))return;const v=Array.from(g.querySelectorAll(t)).filter(_=>G(_,HTMLElement));if(!v.length)return;const x=g.getRootNode();if(!G(x,Document)&&!G(x,ShadowRoot))return;const p=v.indexOf(x.activeElement),m=v.length-1;let b;if(d.key==="Home"||d.key===c&&p===-1){const C=Array.from(g.querySelectorAll(t)).findIndex(w=>w===a);b=C===-1?0:C}else if(d.key==="End"||d.key===r&&p===-1){const C=Array.from(g.querySelectorAll(t)).findIndex(w=>w===a);b=C===-1?m:C}else if(d.key==="Enter"){o&&h(g,!0);return}else if(d.key===c)if(p===m){if(!n)return;b=0}else b=p+1;else if(d.key===r)if(p===0){if(!n)return;b=m}else b=p-1;else return;v[b].focus()},[i.current,n,t,a,...l]);y.useEffect(()=>{const d=i.current;if(d)return o&&setTimeout(()=>{h(d,!1)},0),d.addEventListener("keydown",f),()=>{d.removeEventListener("keydown",f)}},[i.current,t,f,a,...l])},le=T.img`
  max-width: 100%;
`,de=y.forwardRef(function(n,t){const{alt:e,...s}=n;return u.jsx(le,{...s,alt:e,ref:t})}),ce=T.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${B} {
    position: relative;
  }

  > :first-child {
    > ${B}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${B}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`;ce.defaultProps=j;const Pt=T.input(({theme:{base:i,components:n}})=>P`
    width: 100%;
    height: ${n.input.height};
    min-height: ${i["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${n.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${i["hit-area"]["finger-min"]};
    }
  `);Pt.defaultProps=j;const ut=U("input",["control",...J]),ue=V(y.forwardRef(function(n,t){const e=st(),{testId:s,id:o=e,value:a,defaultValue:l,required:c=!1,disabled:r=!1,readOnly:h=!1,label:f,additionalInfo:d,labelHidden:g,info:v,status:x,actions:p,onResolveSuggestion:m,className:b,..._}=n,C=q(s,ut),w={};dt(n,"value")?w.value=a??"":dt(n,"defaultValue")&&(w.defaultValue=l??"");const $=u.jsx(B,{"data-testid":C.control,ref:t,id:o,required:c,disabled:r,readOnly:h,status:x,hasSuggestion:!!m&&x==="pending",...w,autoComplete:"_off",..._,as:Pt,className:Gt("input",b)});return f?u.jsx(W,{testId:C,additionalInfo:d,label:f,labelHidden:g,id:o,info:v,readOnly:h,status:x,required:c,disabled:r,actions:p,onResolveSuggestion:m,children:$}):$}),ut),he=(i,n)=>i?n==="height"?`${i.scrollHeight}px`:`${i.scrollWidth}px`:"",ht=i=>{const{status:n,dimension:t,transitionSpeed:e,transitionTimingFunction:s,min:o,max:a,nullWhenCollapsed:l,el:c}=i,r={};let h=a;return c&&!a&&(h=he(c,t)),(n==="expanded"||n==="collapsed")&&((a||o)&&(r[t]=n==="expanded"?h:o||0,r[`overflow${t==="width"?"X":"Y"}`]="hidden"),n==="collapsed"&&!l&&!o&&(r[t]=0,r.overflow="hidden",r.visibility="hidden")),(n==="expanding"||n==="collapsing")&&(r[t]=n==="expanding"?h:o||0,r.overflow="hidden",r.transitionProperty=t,r.transitionDuration=`max(${e}, 0.01ms)`,r.transitionTimingFunction=s),r},pe=y.forwardRef(function(n,t){const{base:{animation:e}}=K(),{children:s,dimension:o="height",collapsed:a=!1,onBeforeExpand:l,onAfterExpand:c,onBeforeCollapse:r,onAfterCollapse:h,transitionSpeed:f=e.speed,min:d,max:g,nullWhenCollapsed:v=!1,as:x="div",...p}=n,[m,b]=y.useState(a?"collapsed":"expanded"),_=y.useState(),C=_[1];let w=_[0];const $=Jt(m),L=ot(t),M=y.useCallback(O=>{O.target!==L.current||O.propertyName!==o||b(m==="expanding"?"expanded":"collapsed")},[L.current,m]);return y.useLayoutEffect(()=>{const O=a,E=!a,D=["expanded","expanding"].includes(m),I=["collapsed","collapsing"].includes(m);E&&I?(l==null||l(),b("expanding")):O&&D&&(r==null||r(),b("collapsing")),m==="expanded"&&$!=="expanded"?c==null||c():m==="collapsed"&&$!=="collapsed"&&(h==null||h()),C(ht({dimension:o,min:d,max:g,transitionSpeed:f,nullWhenCollapsed:v,status:m,el:L.current,transitionTimingFunction:e.timing.ease}))},[a,m,d,g]),m!==$&&["expanded","collapsed"].includes($)&&(w=ht({dimension:o,min:d,max:g,transitionSpeed:f,nullWhenCollapsed:v,status:m==="expanding"?"collapsing":"expanding",el:L.current,transitionTimingFunction:e.timing.ease})),m==="collapsed"&&v&&!d?null:u.jsx(x,{ref:L,onTransitionEnd:M,...p,inert:m==="collapsed"&&!v&&!d?"":void 0,style:w,children:s})}),fe=T(et)``,me=({children:i,lines:n})=>{const[t,e]=y.useState(!0),[s,o]=y.useState(!1),a=y.useRef(null),l=at(),c=y.useMemo(()=>{if(!Ht)return 1/0;const r=Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)*1.25;return n*r},[]);return y.useLayoutEffect(()=>{if(!a.current)return;const r=new ResizeObserver(h=>{const f=h.some(({target:d,contentRect:g})=>{if(d===a.current)return g.height>c});o(f)});return r.observe(a.current),()=>{r.disconnect()}},[a.current,c]),u.jsxs(u.Fragment,{children:[u.jsx(pe,{collapsed:t,min:s?`${c}px`:"max-content",children:u.jsx("div",{ref:a,children:i})}),s&&u.jsx(fe,{variant:"link",onClick:()=>e(r=>!r),children:l(t?"show_more":"show_less")})]})},ge=T.span`
  display: inline-block;
  position: relative;
`,xe=()=>{const i=at();return u.jsxs(ge,{children:[u.jsx("span",{"aria-hidden":!0,children:"––"}),u.jsx(kt,{children:i("no_value")})]})},Et=U("field-value-list",[]),pt=U("field-value-item",["name","value"]),ve=T.dt`
  word-break: break-word;
`,be=T.dd`
  word-break: break-word;
`,F=T.div``,rt=T.dl(({variant:i,theme:n})=>{const{components:{"field-value-list":{inline:{detached:t}}}}=n;return P`
    width: 100%;

    ${i==="value-comparison"&&P`
      dt {
        width: 100%;
      }
      && dd {
        text-align: end;
        padding-inline-start: calc(2 * ${n.base.spacing});

        /* Unset negative margin from Details to prevent field value misalignment */
        margin: unset;
      }
      ${nt} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type) {
        border-bottom: 0.0625rem solid ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}

    ${t&&i==="inline"&&P`
      dt {
        width: 100%;
        padding-inline-end: calc(${n.base.spacing});
      }
      ${nt} {
        max-width: unset;
      }
      dd:not(:last-of-type),
      dt:not(:last-of-type),
      dd:has(+ ${F}),
      dt:has(+ dd + ${F}),
      ${F}:has(+ dt + dd),
      ${F}:not(:last-of-type) {
        border-bottom: 0.0625rem dashed ${n.base.palette["border-line"]};
        padding-bottom: calc(0.5 * ${n.base.spacing});
      }
    `}
  `});rt.defaultProps=j;const ft=V(({testId:i,name:n,value:t,variant:e="inline",truncate:s=!0})=>{const o=q(i,pt),a=typeof t=="string"&&s?u.jsx(me,{lines:3,children:t}):t,l=u.jsxs(u.Fragment,{children:[u.jsx(nt,{"data-testid":o.name,as:ve,children:n}),u.jsx(be,{"data-testid":o.value,children:t?a:u.jsx(xe,{})})]});return e==="stacked"?u.jsx(F,{"data-testid":o.root,children:l}):u.jsx(u.Fragment,{children:l})},pt),ye=y.forwardRef(function({testId:n,fields:t,variant:e="inline",...s},o){const a=q(n,Et),l=ot(o),c=oe("xs",{breakpointRef:l,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:r}}}}=K();return u.jsx(Ct,{"data-testid":a.root,...s,ref:l,container:{cols:["inline","value-comparison"].includes(e)&&c?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:!r&&e!=="value-comparison"?2:0,rowGap:!r&&e!=="value-comparison"?1:.5},as:rt,role:"none",variant:c?e:"stacked",children:t.map(({id:h,name:f,value:d,truncate:g=!0,variant:v})=>{const x={name:f,variant:(v??e)==="stacked"||!c?"stacked":"inline"};return typeof d=="string"?u.jsx(ft,{...x,value:d,truncate:g},h??f):u.jsx(ft,{...x,value:d},h??f)})})});V(ye,Et);const Q=T.div(({disabled:i,theme:{base:{palette:n,"disabled-opacity":t},components:{card:e,"form-control":{":focus":{"box-shadow":s,"border-color":o}}}}})=>P`
      min-width: min-content;
      max-width: max-content;
      background-color: ${e.background};
      border-radius: ${e["border-radius"]};
      border: 0.0625rem solid ${n["border-line"]};

      ${i&&P`
        cursor: not-allowed;
        opacity: ${t};
      `}

      ${!i&&P`
        :focus {
          box-shadow: ${s};
          border-color: transparent;
          outline: none;

          & ${Qt} {
            box-shadow: ${s};
            border-color: ${o};
          }
        }
      `}
    `);Q.defaultProps=j;const we=T(Q)(({placement:i,size:n})=>{let t;switch(n){case"small":t="2.5rem";break;case"large":t="8.875rem";break;default:t="minmax(2.5rem, auto)";break}return P`
    /* stylelint-disable unit-allowed-list -- "Unexpected unit "fr\`" */
    grid-template-columns: ${i==="inline-end"?`1fr ${t}`:`${t} 1fr`};
    /* stylelint-enable unit-allowed-list */
    grid-template-rows: minmax(2.75rem, 1fr);
  `});T(Q)(({size:i})=>{let n;switch(i){case"small":n="2.5rem";break;case"large":n="15.125rem";break;default:n="minmax(2.5rem, 15.125rem)"}return P`
    grid-template-rows: ${n} 1fr;
    grid-template-columns: minmax(2.75rem, 1fr);
  `});const Tt=T.div(({theme:{base:{palette:i,transparency:n},components:{card:{"border-radius":t}}},placement:e="inline-start",size:s="flexible"})=>P`
      background-color: ${i["app-background"]};
      overflow: hidden;

      img {
        height: 100%;
        object-fit: contain;
      }

      > img {
        aspect-ratio: 4 / 5;

        ${e==="block-start"&&P`
          aspect-ratio: 16 / 9;
          max-height: 100%;
        `}
      }

      ${s==="flexible"&&e!=="block-start"&&P`
        max-width: 8.875rem;
        height: var(--content-height);
      `};

      ${s==="large"&&P`
        min-height: 11.0625rem;
      `}

      ${s==="small"&&P`
        aspect-ratio: unset;

        > img {
          max-width: 2rem;
          max-height: 2rem;
          aspect-ratio: 1 / 1;
        }
      `}

      /* Recalculation of the border radius by substracting border width */
      ${e==="inline-start"&&P`
        border-start-start-radius: calc(${t} - 0.0625rem);
        border-end-start-radius: calc(${t} - 0.0625rem);
      `}

      ${e==="inline-end"&&P`
        border-end-end-radius: calc(${t} - 0.0625rem);
        border-start-end-radius: calc(${t} - 0.0625rem);
      `}

      ${e==="block-start"&&P`
        border-start-start-radius: calc(${t} - 0.0625rem);
        border-start-end-radius: calc(${t} - 0.0625rem);
      `}

      ${Yt} {
        opacity: ${n["transparent-3"]};
      }
    `);Tt.defaultProps=j;const _e=T.ul`
  width: 100%;
  list-style-type: none;
`,Se=T.div(({theme:i})=>P`
    padding: ${i.base.spacing};

    ${rt}, ${_e} {
      margin-block-start: ${i.base.spacing};
    }

    ${F} {
      grid-column: 1 / -1;
    }
  `);Se.defaultProps=j;const $t=U("radio-check-group",[...J]),ke=T.fieldset(()=>P`
    flex-wrap: nowrap;

    &[disabled] {
      > ${Zt} {
        opacity: unset;
      }
    }

    ${Q} {
      max-width: 100%;
    }

    ${we} ${Tt} {
      /* To enlarge the image containers to the size of the biggest one */
      min-height: 100%;
    }

    ${te} > ${ee} {
      display: none;
    }
  `),Ce=y.forwardRef(function(n,t){const e=st(),{testId:s,children:o,name:a=e,disabled:l=!1,required:c=!1,onChange:r,readOnly:h,inline:f=!1,autoStack:d=!0,variant:g="simple",onClear:v,...x}=n,p=q(s,$t),m=K(),[b,_]=Xt(),[C,w]=y.useState(f),$=y.useRef(f),L=y.useRef(0),M=ot(t);re(M,{selector:"[data-main-focus]",cycle:!1,dir:"left-right"}),y.useEffect(()=>{if(w(f),f&&b&&b.lastChild&&d){const E=new IntersectionObserver(I=>{I[0].intersectionRatio<1&&(I[0].rootBounds&&(L.current=I[0].rootBounds.width+1),$.current=!1,w(!1))},{root:b,threshold:1}),D=new ResizeObserver(I=>{!$.current&&I[0].contentRect.width>L.current&&($.current=!0,w(!0))});return E.observe(b.lastChild),D.observe(b),()=>{E.disconnect(),D.disconnect()}}},[b,f,d]);const O=y.useMemo(()=>y.Children.map(o,E=>y.cloneElement(E,{name:a,status:x.status,disabled:l||E.props.disabled,readOnly:h||E.props.readOnly,variant:g==="card-grid"?"card":g,suppressAnnouncements:!0,onChange:r?D=>{var I,z;h||E.props.readOnly||((z=(I=E.props).onChange)==null||z.call(I,D),r(D))}:E.props.onChange})),[o,a,l,h,g,r]);return u.jsx(W,{testId:p,as:ke,ref:M,name:a,disabled:l,required:c,...x,isRadioCheck:!0,onClear:v,onMouseDown:E=>{var D;(D=x.onMouseDown)==null||D.call(x,E),M.current&&M.current.contains(Kt())&&(!(E.target instanceof Element)||!E.target.closest("label")||E.preventDefault())},children:g==="card-grid"?u.jsx(Ct,{container:{gap:1,cols:C?d?`repeat(auto-fit, minmax(min(100%, ${m.base["content-width"].sm}), 1fr))`:`repeat(${y.Children.count(o)}, 1fr)`:"minmax(min-content, max-content)",autoRows:"1fr"},children:O}):u.jsx(R,{ref:_,container:{direction:C?"row":"column",colGap:C?1.5:2,rowGap:g==="card"?1:0,wrap:"wrap"},children:O})})}),mt=V(Ce,$t),It=U("select",["control",...J]),gt=i=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25' fill='${encodeURIComponent(i)}'%3E%3Cpath d='M21 8v2.75l-8.5 6.5-8.5-6.5V8l8.5 6.5z'/%3E%3C/svg%3E")`,Lt=T.select(i=>{const{readOnly:n,hasStatus:t}=i,{base:e,components:{"form-control":{"foreground-color":s,"background-color":o},select:a}}=i.theme,{rtl:l}=ne();return P`
    appearance: none;
    -webkit-appearance: none;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: ${a.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-inline-start: ${a.padding};
    padding-inline-end: calc(4 * ${e.spacing});
    background-image: ${gt(s)};
    background-repeat: no-repeat;
    background-size: calc(2 * ${e.spacing}) auto;
    background-position: ${l?e.spacing:`calc(100% - ${e.spacing}) `} 60%;
    border-width: ${a["border-width"]};
    border-radius: calc(${e["border-radius"]} * ${a["border-radius"]});

    @media (forced-colors: active) {
      background-image: ${gt("CanvasText")};
    }

    ${n&&P`
      background-image: none;
    `}

    ${!t&&P`
      border-color: ${a["border-color"]};
    `}

    &:has(option[value='']:checked, option:not([value]):checked) {
      color: ${ct(e.transparency["transparent-3"],s,o)};
    }

    & option {
      color: ${s};

      &[value=''],
      &:not([value]) {
        color: ${ct(e.transparency["transparent-3"],s,o)};
      }
    }

    &::-ms-expand {
      display: none;
    }

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `});Lt.defaultProps=j;const Pe=y.forwardRef(function(n,t){const e=st(),s=at(),{testId:o,additionalInfo:a,children:l,id:c=e,label:r,labelHidden:h,info:f,status:d,required:g=!1,disabled:v=!1,readOnly:x=!1,actions:p,onResolveSuggestion:m,...b}=n,_=q(o,It),C=u.jsx(B,{"data-testid":_.control,...b,as:Lt,hasSuggestion:d==="pending"&&!!m,id:c,hasStatus:!!d,status:d,required:g,disabled:v,label:r,readOnly:x,ref:t,onMouseDown:x?w=>{w.preventDefault()}:void 0,onKeyDown:x?w=>{["Escape","Tab","Space"].includes(w.key)||w.preventDefault()}:void 0,children:l});return r?u.jsx(W,{testId:_,label:u.jsxs(u.Fragment,{children:[r,x&&u.jsx(kt,{children:` ${s("read_only")}`})]}),labelHidden:h,id:c,info:f,status:d,required:g,disabled:v,readOnly:x,actions:p,onResolveSuggestion:m,additionalInfo:a,children:C}):C}),Ee=V(Pe,It),Te={},Y=i=>{const{children:n,...t}=i;return u.jsx("option",{...t,children:n})};Y.defaultProps=Te;const Mt=U("radio-button",["control",...J]),$e=y.forwardRef(function({testId:n,...t},e){const s=q(n,Mt);return u.jsx(ie,{...t,testId:s,type:"radio",ref:e})}),tt=V($e,Mt);/*!
 * Signature Pad v5.1.4 | https://github.com/szimek/signature_pad
 * (c) 2026 Szymon Nowak | Released under the MIT license
 */var X=class{constructor(i,n,t,e){k(this,"x");k(this,"y");k(this,"pressure");k(this,"time");if(isNaN(i)||isNaN(n))throw new Error(`Point is invalid: (${i}, ${n})`);this.x=+i,this.y=+n,this.pressure=t||0,this.time=e||Date.now()}distanceTo(i){return Math.sqrt(Math.pow(this.x-i.x,2)+Math.pow(this.y-i.y,2))}equals(i){return this.x===i.x&&this.y===i.y&&this.pressure===i.pressure&&this.time===i.time}velocityFrom(i){return this.time!==i.time?this.distanceTo(i)/(this.time-i.time):0}},Ie=class Dt{constructor(n,t,e,s,o,a){k(this,"startPoint");k(this,"control2");k(this,"control1");k(this,"endPoint");k(this,"startWidth");k(this,"endWidth");this.startPoint=n,this.control2=t,this.control1=e,this.endPoint=s,this.startWidth=o,this.endWidth=a}static fromPoints(n,t){const e=this.calculateControlPoints(n[0],n[1],n[2]).c2,s=this.calculateControlPoints(n[1],n[2],n[3]).c1;return new Dt(n[1],e,s,n[2],t.start,t.end)}static calculateControlPoints(n,t,e){const s=n.x-t.x,o=n.y-t.y,a=t.x-e.x,l=t.y-e.y,c={x:(n.x+t.x)/2,y:(n.y+t.y)/2},r={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h=Math.sqrt(s*s+o*o),f=Math.sqrt(a*a+l*l),d=c.x-r.x,g=c.y-r.y,v=h+f==0?0:f/(h+f),x={x:r.x+d*v,y:r.y+g*v},p=t.x-x.x,m=t.y-x.y;return{c1:new X(c.x+p,c.y+m),c2:new X(r.x+p,r.y+m)}}length(){let t=0,e,s;for(let o=0;o<=10;o+=1){const a=o/10,l=this.point(a,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this.point(a,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){const r=l-e,h=c-s;t+=Math.sqrt(r*r+h*h)}e=l,s=c}return t}point(n,t,e,s,o){return t*(1-n)*(1-n)*(1-n)+3*e*(1-n)*(1-n)*n+3*s*(1-n)*n*n+o*n*n*n}},Le=class{constructor(){k(this,"_et");try{this._et=new EventTarget}catch{this._et=document}}addEventListener(i,n,t){this._et.addEventListener(i,n,t)}dispatchEvent(i){return this._et.dispatchEvent(i)}removeEventListener(i,n,t){this._et.removeEventListener(i,n,t)}};function Me(i,n=250){let t=0,e=null,s,o,a;const l=()=>{t=Date.now(),e=null,s=i.apply(o,a),e||(o=null,a=[])};return function(...r){const h=Date.now(),f=n-(h-t);return o=this,a=r,f<=0||f>n?(e&&(clearTimeout(e),e=null),t=h,s=i.apply(o,a),e||(o=null,a=[])):e||(e=window.setTimeout(l,f)),s}}var De=class it extends Le{constructor(t,e={}){super();k(this,"canvas");k(this,"dotSize");k(this,"minWidth");k(this,"maxWidth");k(this,"penColor");k(this,"minDistance");k(this,"velocityFilterWeight");k(this,"compositeOperation");k(this,"backgroundColor");k(this,"throttle");k(this,"canvasContextOptions");k(this,"_ctx");k(this,"_drawingStroke",!1);k(this,"_isEmpty",!0);k(this,"_dataUrl");k(this,"_dataUrlOptions");k(this,"_lastPoints",[]);k(this,"_data",[]);k(this,"_lastVelocity",0);k(this,"_lastWidth",0);k(this,"_strokeMoveUpdate");k(this,"_strokePointerId");this.canvas=t,this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle=e.throttle??16,this.minDistance=e.minDistance??5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=e.compositeOperation||"source-over",this.canvasContextOptions=e.canvasContextOptions??{},this._strokeMoveUpdate=this.throttle?Me(it.prototype._strokeUpdate,this.throttle):it.prototype._strokeUpdate,this._handleMouseDown=this._handleMouseDown.bind(this),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this),this._handleTouchMove=this._handleTouchMove.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handlePointerDown=this._handlePointerDown.bind(this),this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this),this._handlePointerCancel=this._handlePointerCancel.bind(this),this._handleTouchCancel=this._handleTouchCancel.bind(this),this._ctx=t.getContext("2d",this.canvasContextOptions),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0,this._dataUrl=void 0,this._dataUrlOptions=void 0,this._strokePointerId=void 0}redraw(){const t=this._data,e=this._dataUrl,s=this._dataUrlOptions;this.clear(),e&&this.fromDataURL(e,s),this.fromData(t,{clear:!1})}fromDataURL(t,e={}){return new Promise((s,o)=>{const a=new Image,l=e.ratio||window.devicePixelRatio||1,c=e.width||this.canvas.width/l,r=e.height||this.canvas.height/l,h=e.xOffset||0,f=e.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,h,f,c,r),s()},a.onerror=d=>{o(d)},a.crossOrigin="anonymous",a.src=t,this._isEmpty=!1,this._dataUrl=t,this._dataUrlOptions={...e}})}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return typeof e!="object"&&(e=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(e))}`;default:return typeof e!="number"&&(e=void 0),this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none",this.canvas.style.webkitUserSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.style.webkitUserSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerDown),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this._removeMoveUpEventListeners()}_getListenerFunctions(){const t=window.document===this.canvas.ownerDocument?window:this.canvas.ownerDocument.defaultView??this.canvas.ownerDocument;return{addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}_removeMoveUpEventListeners(){const{removeEventListener:t}=this._getListenerFunctions();t("pointermove",this._handlePointerMove),t("pointerup",this._handlePointerUp),t("pointercancel",this._handlePointerCancel),t("mousemove",this._handleMouseMove),t("mouseup",this._handleMouseUp),t("touchmove",this._handleTouchMove),t("touchend",this._handleTouchEnd),t("touchcancel",this._handleTouchCancel)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this),this._drawLine.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_isLeftButtonPressed(t,e){return e?t.buttons===1:(t.buttons&1)===1}_pointerEventToSignatureEvent(t){return{event:t,type:t.type,x:t.clientX,y:t.clientY,pressure:"pressure"in t?t.pressure:0}}_touchEventToSignatureEvent(t){const e=t.changedTouches[0];return{event:t,type:t.type,x:e.clientX,y:e.clientY,pressure:e.force}}_handleMouseDown(t){!this._isLeftButtonPressed(t,!0)||this._drawingStroke||this._strokeBegin(this._pointerEventToSignatureEvent(t))}_handleMouseMove(t){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}_handleMouseUp(t){this._isLeftButtonPressed(t)||this._strokeEnd(this._pointerEventToSignatureEvent(t))}_handleTouchStart(t){t.targetTouches.length!==1||this._drawingStroke||(t.cancelable&&t.preventDefault(),this._strokeBegin(this._touchEventToSignatureEvent(t)))}_handleTouchMove(t){if(t.targetTouches.length===1){if(t.cancelable&&t.preventDefault(),!this._drawingStroke){this._strokeEnd(this._touchEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._touchEventToSignatureEvent(t))}}_handleTouchEnd(t){t.targetTouches.length===0&&(t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t)))}_handlePointerCancel(t){this._allowPointerId(t)&&(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t),!1))}_handleTouchCancel(t){t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t),!1)}_getPointerId(t){return t.persistentDeviceId||t.pointerId}_allowPointerId(t,e=!1){return typeof this._strokePointerId>"u"?e:this._getPointerId(t)===this._strokePointerId}_handlePointerDown(t){this._drawingStroke||!this._isLeftButtonPressed(t)||!this._allowPointerId(t,!0)||(this._strokePointerId=this._getPointerId(t),t.preventDefault(),this._strokeBegin(this._pointerEventToSignatureEvent(t)))}_handlePointerMove(t){if(this._allowPointerId(t)){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}t.preventDefault(),this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}}_handlePointerUp(t){this._isLeftButtonPressed(t)||!this._allowPointerId(t)||(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t)))}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){if(!this.dispatchEvent(new CustomEvent("beginStroke",{detail:t,cancelable:!0})))return;const{addEventListener:s}=this._getListenerFunctions();switch(t.event.type){case"mousedown":s("mousemove",this._handleMouseMove,{passive:!1}),s("mouseup",this._handleMouseUp,{passive:!1});break;case"touchstart":s("touchmove",this._handleTouchMove,{passive:!1}),s("touchend",this._handleTouchEnd,{passive:!1}),s("touchcancel",this._handleTouchCancel,{passive:!1});break;case"pointerdown":s("pointermove",this._handlePointerMove,{passive:!1}),s("pointerup",this._handlePointerUp,{passive:!1}),s("pointercancel",this._handlePointerCancel,{passive:!1});break}this._drawingStroke=!0;const o=this._getPointGroupOptions(),a={...o,points:[]};this._data.push(a),this._reset(o),this._strokeUpdate(t)}_strokeUpdate(t){if(!this._drawingStroke)return;if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const e=this._createPoint(t.x,t.y,t.pressure),s=this._data[this._data.length-1],o=s.points,a=o.length>0&&o[o.length-1],l=a?e.distanceTo(a)<=this.minDistance:!1,c=this._getPointGroupOptions(s);if(!a||!(a&&l)){const r=this._addPoint(e,c);a?r&&this._drawCurve(r,c):this._drawDot(e,c),o.push({time:e.time,x:e.x,y:e.y,pressure:e.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t,e=!0){this._removeMoveUpEventListeners(),this._drawingStroke&&(e&&this._strokeUpdate(t),this._drawingStroke=!1,this._strokePointerId=void 0,this.dispatchEvent(new CustomEvent("endStroke",{detail:t})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerDown,{passive:!1})}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown,{passive:!1})}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart,{passive:!1})}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,e,s){const o=this.canvas.getBoundingClientRect();return new X(t-o.left,e-o.top,s,new Date().getTime())}_addPoint(t,e){const{_lastPoints:s}=this;if(s.push(t),s.length>2){s.length===3&&s.unshift(s[0]);const o=this._calculateCurveWidths(s[1],s[2],e),a=Ie.fromPoints(s,o);return s.shift(),a}return null}_calculateCurveWidths(t,e,s){const o=s.velocityFilterWeight*e.velocityFrom(t)+(1-s.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(o,s),l={end:a,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=a,l}_strokeWidth(t,e){return Math.max(e.maxWidth/(t+1),e.minWidth)}_drawCurveSegment(t,e,s){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,s,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){const s=this._ctx,o=t.endWidth-t.startWidth,a=Math.ceil(t.length())*2;s.beginPath(),s.fillStyle=e.penColor;for(let l=0;l<a;l+=1){const c=l/a,r=c*c,h=r*c,f=1-c,d=f*f,g=d*f;let v=g*t.startPoint.x;v+=3*d*c*t.control1.x,v+=3*f*r*t.control2.x,v+=h*t.endPoint.x;let x=g*t.startPoint.y;x+=3*d*c*t.control1.y,x+=3*f*r*t.control2.y,x+=h*t.endPoint.y;const p=Math.min(t.startWidth+h*o,e.maxWidth);this._drawCurveSegment(v,x,p)}s.closePath(),s.fill()}_getDotSize(t){return t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2}_drawDot(t,e){const s=this._ctx,o=this._getDotSize(e);s.beginPath(),this._drawCurveSegment(t.x,t.y,o),s.closePath(),s.fillStyle=e.penColor,s.fill()}_drawLine(t,e,s){const o=this._ctx;o.save(),o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(e.x,e.y),o.lineWidth=this._getDotSize(s)*2,o.lineCap="round",o.strokeStyle=s.penColor,o.stroke(),o.restore(),this._isEmpty=!1}_fromData(t,e,s,o){for(const a of t){const{points:l}=a,c=this._getPointGroupOptions(a);if(l.length>2)for(let r=0;r<l.length;r+=1){const h=l[r],f=new X(h.x,h.y,h.pressure,h.time);r===0&&this._reset(c);const d=this._addPoint(f,c);d&&e(d,c)}else l.length===2?(this._reset(c),o(l[0],l[1],c)):(this._reset(c),s(l[0],c))}}toSVG({includeBackgroundColor:t=!1,includeDataUrl:e=!1}={}){var f,d,g,v,x;const s=this._data,o=Math.max(window.devicePixelRatio||1,1),a=0,l=0,c=this.canvas.width/o,r=this.canvas.height/o,h=document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.setAttribute("xmlns","http://www.w3.org/2000/svg"),h.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),h.setAttribute("viewBox",`${a} ${l} ${c} ${r}`),h.setAttribute("width",c.toString()),h.setAttribute("height",r.toString()),t&&this.backgroundColor){const p=document.createElement("rect");p.setAttribute("width","100%"),p.setAttribute("height","100%"),p.setAttribute("fill",this.backgroundColor),h.appendChild(p)}if(e&&this._dataUrl){const p=((f=this._dataUrlOptions)==null?void 0:f.ratio)||window.devicePixelRatio||1,m=((d=this._dataUrlOptions)==null?void 0:d.width)||this.canvas.width/p,b=((g=this._dataUrlOptions)==null?void 0:g.height)||this.canvas.height/p,_=((v=this._dataUrlOptions)==null?void 0:v.xOffset)||0,C=((x=this._dataUrlOptions)==null?void 0:x.yOffset)||0,w=document.createElement("image");w.setAttribute("x",_.toString()),w.setAttribute("y",C.toString()),w.setAttribute("width",m.toString()),w.setAttribute("height",b.toString()),w.setAttribute("preserveAspectRatio","none"),w.setAttribute("href",this._dataUrl),h.appendChild(w)}return this._fromData(s,(p,{penColor:m})=>{const b=document.createElement("path");if(!isNaN(p.control1.x)&&!isNaN(p.control1.y)&&!isNaN(p.control2.x)&&!isNaN(p.control2.y)){const _=`M ${p.startPoint.x.toFixed(3)},${p.startPoint.y.toFixed(3)} C ${p.control1.x.toFixed(3)},${p.control1.y.toFixed(3)} ${p.control2.x.toFixed(3)},${p.control2.y.toFixed(3)} ${p.endPoint.x.toFixed(3)},${p.endPoint.y.toFixed(3)}`;b.setAttribute("d",_),b.setAttribute("stroke-width",(p.endWidth*2.25).toFixed(3)),b.setAttribute("stroke",m),b.setAttribute("fill","none"),b.setAttribute("stroke-linecap","round"),h.appendChild(b)}},(p,{penColor:m,dotSize:b,minWidth:_,maxWidth:C})=>{const w=document.createElement("circle"),$=b>0?b:(_+C)/2;w.setAttribute("r",$.toString()),w.setAttribute("cx",p.x.toString()),w.setAttribute("cy",p.y.toString()),w.setAttribute("fill",m),h.appendChild(w)},(p,m,b)=>{const _=document.createElement("line");_.setAttribute("x1",p.x.toString()),_.setAttribute("y1",p.y.toString()),_.setAttribute("x2",m.x.toString()),_.setAttribute("y2",m.y.toString()),_.setAttribute("stroke",b.penColor),_.setAttribute("stroke-width",(this._getDotSize(b)*2).toString()),_.setAttribute("stroke-linecap","round"),h.appendChild(_)}),h.outerHTML}};const At=i=>{var h;const n=y.useRef(null),t=y.useRef(),{signaturePadRef:e,canvasProps:s,onEndStroke:o,penColor:a}=i,l=K(),c=()=>{var f;return(f=t==null?void 0:t.current)==null?void 0:f.clear()},r=y.useCallback(()=>{var f;if(n!=null&&n.current){const d=n.current,g=Math.max(window.devicePixelRatio||1,1);d.width=d.offsetWidth*g,d.height=d.offsetHeight*g,(f=d.getContext("2d"))==null||f.scale(g,g)}},[n]);return y.useEffect(()=>{var x,p;const f=()=>{var m;return r(),(m=t==null?void 0:t.current)==null?void 0:m.on()},d=n==null?void 0:n.current;if(!d)return;const g=new De(d,{penColor:a||((p=(x=l==null?void 0:l.base)==null?void 0:x.palette)==null?void 0:p["foreground-color"])||"#000"});t.current=g,e&&(e.current=g);const v=()=>{o==null||o()};return o&&g.addEventListener("endStroke",v),f(),window.addEventListener("resize",r),()=>{var m;o&&g.removeEventListener("endStroke",v),window.removeEventListener("resize",r),c(),(m=t==null?void 0:t.current)==null||m.off()}},[a,o,r,e,(h=l==null?void 0:l.base)==null?void 0:h.palette]),u.jsx("canvas",{ref:n,...s})};At.__docgenInfo={description:"",methods:[],displayName:"Signature",props:{canvasProps:{required:!1,tsType:{name:"ReactCanvasHTMLAttributes",raw:"React.CanvasHTMLAttributes<HTMLCanvasElement>",elements:[{name:"HTMLCanvasElement"}]},description:""},signaturePadRef:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<SignaturePad | undefined>",elements:[{name:"union",raw:"SignaturePad | undefined",elements:[{name:"SignaturePad"},{name:"undefined"}]}]},description:""},onEndStroke:{required:!1,tsType:{name:"CallableFunction"},description:""},penColor:{required:!1,tsType:{name:"string"},description:""}},composes:["Options"]};const Ae=T.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Pacifico&family=Satisfy&display=swap');

  canvas {
    border-radius: 4px;
    border: 1px solid ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["border-line"])||"#ccc"}};
    cursor: crosshair;
    touch-action: none;
    background-color: ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["primary-background"])||"#fff"}};
  }
`,Oe=T.div`
  padding-top: 0.5rem;
`,je=T.div`
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["border-line"])||"#ccc"}};
    background-color: ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["primary-background"])||"#fff"}};
  }
`,Re=T.div`
  font-family: ${({fontFamily:i})=>i}, cursive;
  font-size: 1.5rem;
  padding: 0.5rem 0;
`,xt=[{label:"Caveat",value:"Caveat"},{label:"Dancing Script",value:"Dancing Script"},{label:"Pacifico",value:"Pacifico"},{label:"Great Vibes",value:"Great Vibes"},{label:"Satisfy",value:"Satisfy"}],Ot=i=>{const{value:n,getPConnect:t,validatemessage:e,label:s,hideLabel:o=!1,helperText:a,testId:l,displayMode:c}=i,r=y.useRef(),h=t(),f=h.getActionsApi(),d=h.getStateProps().value,[g,v]=y.useState(!1),[x,p]=y.useState(e||a);let{readOnly:m,required:b,disabled:_}=i;[m,b,_]=[m,b,_].map(S=>S===!0||typeof S=="string"&&S==="true");const[C,w]=y.useState(n),[$,L]=y.useState(void 0),[M,O]=y.useState("draw"),[E,D]=y.useState("#000000"),[I,z]=y.useState(""),[lt,jt]=y.useState(xt[0].value);y.useEffect(()=>w(n),[n]),y.useEffect(()=>{var S;n&&M==="draw"&&((S=r.current)==null||S.fromDataURL(n))},[]),y.useEffect(()=>{e!==""&&L("error"),$!=="success"&&L(e!==""?"error":void 0)},[$,e]);const Rt=n?u.jsx(je,{children:u.jsx(de,{alt:s,src:n})}):null;if(c==="DISPLAY_ONLY")return Rt;const Ft=()=>{v(!0),L(void 0),p(e||a)},Wt=()=>{var S;M==="draw"?(S=r.current)==null||S.clear():z(""),v(!1),L(void 0),p(e||a)},Ut=()=>{const S=document.createElement("canvas");S.width=600,S.height=200;const A=S.getContext("2d");return A?(A.fillStyle="#ffffff",A.fillRect(0,0,S.width,S.height),A.font=`48px "${lt}", cursive`,A.fillStyle=E,A.textBaseline="middle",A.textAlign="center",A.fillText(I,S.width/2,S.height/2),S.toDataURL("image/png")):""},Vt=()=>{var A;let S="";M==="draw"?S=((A=r.current)==null?void 0:A.toDataURL("image/svg+xml"))||"":S=Ut(),S&&(w(S),f.updateFieldValue(d,S),v(!1),L("success"),p(t().getLocalizedValue("Signature captured")))};return u.jsx(Ae,{children:u.jsxs(R,{container:{direction:"column",gap:2},children:[c==="DISPLAY_ONLY"||m||_?null:u.jsxs(R,{container:{direction:"row",gap:2,alignItems:"center"},style:{marginBottom:"1rem"},children:[u.jsx(W,{label:t().getLocalizedValue("Mode"),children:u.jsx(Z,{ariaLabel:"Mode",children:u.jsxs(mt,{inline:!0,children:[u.jsx(tt,{id:"draw",label:t().getLocalizedValue("Draw"),checked:M==="draw",onChange:()=>O("draw")}),u.jsx(tt,{id:"type",label:t().getLocalizedValue("Type"),checked:M==="type",onChange:()=>O("type")})]})})}),u.jsx(W,{label:t().getLocalizedValue("Pen Color"),children:u.jsx(Z,{ariaLabel:"Pen Color",children:u.jsxs(Ee,{value:E,onChange:S=>D(S.target.value),children:[u.jsx(Y,{value:"#000000",children:"Black"}),u.jsx(Y,{value:"#0000FF",children:"Blue"}),u.jsx(Y,{value:"#FF0000",children:"Red"})]})})})]}),u.jsx(W,{label:s,labelHidden:o,info:x,status:$,required:b,disabled:_,readOnly:m,testId:l,children:u.jsx(Z,{ariaLabel:s,required:b,disabled:_,readOnly:m,children:m||_?u.jsx("img",{alt:"Signature",src:C}):u.jsxs(R,{container:{direction:"column",gap:2},children:[M==="draw"?u.jsx(At,{signaturePadRef:r,penColor:E,canvasProps:{style:{width:"100%",height:200}},onEndStroke:Ft}):u.jsxs(R,{container:{direction:"column",gap:2},children:[u.jsx(ue,{type:"text",placeholder:"Type your name",value:I,onChange:S=>{z(S.target.value),v(!!S.target.value)}}),I&&u.jsx(mt,{children:xt.map(S=>u.jsx(tt,{id:S.value,checked:lt===S.value,onChange:()=>jt(S.value),label:u.jsx(Re,{fontFamily:S.value,style:{color:E},children:I})},S.value))})]}),u.jsxs(R,{as:Oe,container:{direction:"row",justify:"between",pad:[1]},style:{marginTop:"0.5rem"},children:[u.jsx(et,{compact:!0,variant:"secondary",className:"clear",onClick:Wt,children:t().getLocalizedValue("Clear")}),u.jsx(et,{compact:!0,variant:"primary",className:"accept",onClick:Vt,disabled:M==="draw"?!g:!I,children:t().getLocalizedValue("Accept")})]})]})})})]})})},Fe=se(Ot);Ot.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsSignatureCapture",props:{getPConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => typeof PConnect",signature:{arguments:[],return:{name:"PConnect"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},validatemessage:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:"'DISPLAY_ONLY' | ''",elements:[{name:"literal",value:"'DISPLAY_ONLY'"},{name:"literal",value:"''"}]},description:""}}};const N={value:"",label:"Signature",validatemessage:"",hideLabel:!1,helperText:"Sign here",testId:"signature-1",getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{}}),getStateProps:()=>({value:"Signature"}),getLocalizedValue:i=>i})},He={title:"Fields/Signature Capture",component:Fe,argTypes:{getPConnect:{table:{disable:!0}}}},H={args:{...N}};var vt,bt,yt;N.parameters={...N.parameters,docs:{...(vt=N.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(yt=(bt=N.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var wt,_t,St;H.parameters={...H.parameters,docs:{...(wt=H.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...configProps
  }
}`,...(St=(_t=H.parameters)==null?void 0:_t.docs)==null?void 0:St.source}}};const Ye=["configProps","Default"];export{H as Default,Ye as __namedExportsOrder,N as configProps,He as default};
