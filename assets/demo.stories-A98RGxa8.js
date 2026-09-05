var Ft=Object.defineProperty;var Wt=(i,n,t)=>n in i?Ft(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var k=(i,n,t)=>Wt(i,typeof n!="symbol"?n+"":n,t);import{j as h}from"./index-SNvzCnZR.js";import{r as g}from"./index-C5e9SFkp.js";import{i as B,a as Ut,d as Vt,q as T,A as P,b as R,c as U,e as V,f as it,g as q,h as qt,j as lt,u as X,k as st,l as ot,w as Nt,B as tt,V as yt,S as zt,m as Bt,F as j,n as Gt,o as dt}from"./Badges.test-ids-Dxiuwil9.js";import{S as z,e as K,F as W,u as Ht,b as et,G as wt,c as Yt,d as Xt,f as Kt,g as Jt,h as Qt,R as Zt,w as te,a as Q}from"./FormField-DloyJIQ3.js";import{u as ee}from"./useBreakpoint-mF6iz_yv.js";import"./index-vofeE47f.js";import"./iframe-CrGt1tGv.js";const ne=`
  a[href],
  button:enabled,
  input[type='checkbox']:enabled,
  input[type='radio']:enabled
`,ie=(i,{cycle:n=!0,selector:t=ne,dir:e="up-down",allowTabFocus:s=!0,updateTabIndex:o=!0,initialFocusElement:a}={},d=[])=>{const[c,r]=e==="up-down"?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"],l=g.useCallback((u,b)=>{const x=Array.from(u.querySelectorAll(t));if(x.length>0){let m=x.findIndex(p=>p===a);m===-1&&(m=0),x[m].tabIndex=s&&!b?0:-1,x.splice(m,1),x.forEach(p=>{B(p,HTMLElement)&&(p.checked||(p.tabIndex=-1),p.querySelector('input[type="radio"]:checked')&&(p.tabIndex=0))})}},[t,a,...d]);Ut([i],u=>{i.current&&o&&l(i.current,u)});const f=g.useCallback(u=>{const b=i.current;if(!b||(["Home","End",c,r].includes(u.key)&&u.preventDefault(),!Vt))return;const x=Array.from(b.querySelectorAll(t)).filter(_=>B(_,HTMLElement));if(!x.length)return;const m=b.getRootNode();if(!B(m,Document)&&!B(m,ShadowRoot))return;const p=x.indexOf(m.activeElement),v=x.length-1;let y;if(u.key==="Home"||u.key===c&&p===-1){const C=Array.from(b.querySelectorAll(t)).findIndex(w=>w===a);y=C===-1?0:C}else if(u.key==="End"||u.key===r&&p===-1){const C=Array.from(b.querySelectorAll(t)).findIndex(w=>w===a);y=C===-1?v:C}else if(u.key==="Enter"){o&&l(b,!0);return}else if(u.key===c)if(p===v){if(!n)return;y=0}else y=p+1;else if(u.key===r)if(p===0){if(!n)return;y=v}else y=p-1;else return;x[y].focus()},[i.current,n,t,a,...d]);g.useEffect(()=>{const u=i.current;if(u)return o&&setTimeout(()=>{l(u,!1)},0),u.addEventListener("keydown",f),()=>{u.removeEventListener("keydown",f)}},[i.current,t,f,a,...d])},se=T.img`
  max-width: 100%;
`,oe=g.forwardRef(function(n,t){const{alt:e,...s}=n;return h.jsx(se,{...s,alt:e,ref:t})}),ae=T.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${z} {
    position: relative;
  }

  > :first-child {
    > ${z}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${z}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`;ae.defaultProps=R;const _t=T.input(({theme:{base:i,components:n}})=>P`
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
  `);_t.defaultProps=R;const ct=U("input",["control",...K]),re=V(g.forwardRef(function(n,t){const e=it(),{testId:s,id:o=e,value:a,defaultValue:d,required:c=!1,disabled:r=!1,readOnly:l=!1,label:f,additionalInfo:u,labelHidden:b,info:x,status:m,actions:p,onResolveSuggestion:v,className:y,..._}=n,C=q(s,ct),w={};lt(n,"value")?w.value=a??"":lt(n,"defaultValue")&&(w.defaultValue=d??"");const $=h.jsx(z,{"data-testid":C.control,ref:t,id:o,required:c,disabled:r,readOnly:l,status:m,hasSuggestion:!!v&&m==="pending",...w,autoComplete:"_off",..._,as:_t,className:qt("input",y)});return f?h.jsx(W,{testId:C,additionalInfo:u,label:f,labelHidden:b,id:o,info:x,readOnly:l,status:m,required:c,disabled:r,actions:p,onResolveSuggestion:v,children:$}):$}),ct),le=(i,n)=>i?n==="height"?`${i.scrollHeight}px`:`${i.scrollWidth}px`:"",ut=i=>{const{status:n,dimension:t,transitionSpeed:e,transitionTimingFunction:s,min:o,max:a,nullWhenCollapsed:d,el:c}=i,r={};let l=a;return c&&!a&&(l=le(c,t)),(n==="expanded"||n==="collapsed")&&((a||o)&&(r[t]=n==="expanded"?l:o||0,r[`overflow${t==="width"?"X":"Y"}`]="hidden"),n==="collapsed"&&!d&&!o&&(r[t]=0,r.overflow="hidden",r.visibility="hidden")),(n==="expanding"||n==="collapsing")&&(r[t]=n==="expanding"?l:o||0,r.overflow="hidden",r.transitionProperty=t,r.transitionDuration=`max(${e}, 0.01ms)`,r.transitionTimingFunction=s),r},de=g.forwardRef(function(n,t){const{base:{animation:e}}=X(),{children:s,dimension:o="height",collapsed:a=!1,onBeforeExpand:d,onAfterExpand:c,onBeforeCollapse:r,onAfterCollapse:l,transitionSpeed:f=e.speed,min:u,max:b,nullWhenCollapsed:x=!1,as:m="div",...p}=n,[v,y]=g.useState(a?"collapsed":"expanded"),_=g.useState(),C=_[1];let w=_[0];const $=Ht(v),L=st(t),M=g.useCallback(O=>{O.target!==L.current||O.propertyName!==o||y(v==="expanding"?"expanded":"collapsed")},[L.current,v]);return g.useLayoutEffect(()=>{const O=a,E=!a,D=["expanded","expanding"].includes(v),I=["collapsed","collapsing"].includes(v);E&&I?(d==null||d(),y("expanding")):O&&D&&(r==null||r(),y("collapsing")),v==="expanded"&&$!=="expanded"?c==null||c():v==="collapsed"&&$!=="collapsed"&&(l==null||l()),C(ut({dimension:o,min:u,max:b,transitionSpeed:f,nullWhenCollapsed:x,status:v,el:L.current,transitionTimingFunction:e.timing.ease}))},[a,v,u,b]),v!==$&&["expanded","collapsed"].includes($)&&(w=ut({dimension:o,min:u,max:b,transitionSpeed:f,nullWhenCollapsed:x,status:v==="expanding"?"collapsing":"expanding",el:L.current,transitionTimingFunction:e.timing.ease})),v==="collapsed"&&x&&!u?null:h.jsx(m,{ref:L,onTransitionEnd:M,...p,inert:v==="collapsed"&&!x&&!u?"":void 0,style:w,children:s})}),ce=T(tt)``,ue=({children:i,lines:n})=>{const[t,e]=g.useState(!0),[s,o]=g.useState(!1),a=g.useRef(null),d=ot(),c=g.useMemo(()=>{if(!Nt)return 1/0;const r=Number.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"),10)*1.25;return n*r},[]);return g.useLayoutEffect(()=>{if(!a.current)return;const r=new ResizeObserver(l=>{const f=l.some(({target:u,contentRect:b})=>{if(u===a.current)return b.height>c});o(f)});return r.observe(a.current),()=>{r.disconnect()}},[a.current,c]),h.jsxs(h.Fragment,{children:[h.jsx(de,{collapsed:t,min:s?`${c}px`:"max-content",children:h.jsx("div",{ref:a,children:i})}),s&&h.jsx(ce,{variant:"link",onClick:()=>e(r=>!r),children:d(t?"show_more":"show_less")})]})},he=T.span`
  display: inline-block;
  position: relative;
`,pe=()=>{const i=ot();return h.jsxs(he,{children:[h.jsx("span",{"aria-hidden":!0,children:"––"}),h.jsx(yt,{children:i("no_value")})]})},St=U("field-value-list",[]),ht=U("field-value-item",["name","value"]),fe=T.dt`
  word-break: break-word;
`,me=T.dd`
  word-break: break-word;
`,F=T.div``,at=T.dl(({variant:i,theme:n})=>{const{components:{"field-value-list":{inline:{detached:t}}}}=n;return P`
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
      ${et} {
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
      ${et} {
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
  `});at.defaultProps=R;const pt=V(({testId:i,name:n,value:t,variant:e="inline",truncate:s=!0})=>{const o=q(i,ht),a=typeof t=="string"&&s?h.jsx(ue,{lines:3,children:t}):t,d=h.jsxs(h.Fragment,{children:[h.jsx(et,{"data-testid":o.name,as:fe,children:n}),h.jsx(me,{"data-testid":o.value,children:t?a:h.jsx(pe,{})})]});return e==="stacked"?h.jsx(F,{"data-testid":o.root,children:d}):h.jsx(h.Fragment,{children:d})},ht),ge=g.forwardRef(function({testId:n,fields:t,variant:e="inline",...s},o){const a=q(n,St),d=st(o),c=ee("xs",{breakpointRef:d,themeProp:"content-width"}),{components:{"field-value-list":{inline:{detached:r}}}}=X();return h.jsx(wt,{"data-testid":a.root,...s,ref:d,container:{cols:["inline","value-comparison"].includes(e)&&c?"16ch minmax(0, 1fr)":"minmax(0, 1fr)",colGap:!r&&e!=="value-comparison"?2:0,rowGap:!r&&e!=="value-comparison"?1:.5},as:at,role:"none",variant:c?e:"stacked",children:t.map(({id:l,name:f,value:u,truncate:b=!0,variant:x})=>{const m={name:f,variant:(x??e)==="stacked"||!c?"stacked":"inline"};return typeof u=="string"?h.jsx(pt,{...m,value:u,truncate:b},l??f):h.jsx(pt,{...m,value:u},l??f)})})});V(ge,St);const J=T.div(({disabled:i,theme:{base:{palette:n,"disabled-opacity":t},components:{card:e,"form-control":{":focus":{"box-shadow":s,"border-color":o}}}}})=>P`
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

          & ${Yt} {
            box-shadow: ${s};
            border-color: ${o};
          }
        }
      `}
    `);J.defaultProps=R;const xe=T(J)(({placement:i,size:n})=>{let t;switch(n){case"small":t="2.5rem";break;case"large":t="8.875rem";break;default:t="minmax(2.5rem, auto)";break}return P`
    /* stylelint-disable unit-allowed-list -- "Unexpected unit "fr\`" */
    grid-template-columns: ${i==="inline-end"?`1fr ${t}`:`${t} 1fr`};
    /* stylelint-enable unit-allowed-list */
    grid-template-rows: minmax(2.75rem, 1fr);
  `});T(J)(({size:i})=>{let n;switch(i){case"small":n="2.5rem";break;case"large":n="15.125rem";break;default:n="minmax(2.5rem, 15.125rem)"}return P`
    grid-template-rows: ${n} 1fr;
    grid-template-columns: minmax(2.75rem, 1fr);
  `});const kt=T.div(({theme:{base:{palette:i,transparency:n},components:{card:{"border-radius":t}}},placement:e="inline-start",size:s="flexible"})=>P`
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

      ${zt} {
        opacity: ${n["transparent-3"]};
      }
    `);kt.defaultProps=R;const ve=T.ul`
  width: 100%;
  list-style-type: none;
`,be=T.div(({theme:i})=>P`
    padding: ${i.base.spacing};

    ${at}, ${ve} {
      margin-block-start: ${i.base.spacing};
    }

    ${F} {
      grid-column: 1 / -1;
    }
  `);be.defaultProps=R;const Ct=U("radio-check-group",[...K]),ye=T.fieldset(()=>P`
    flex-wrap: nowrap;

    &[disabled] {
      > ${Xt} {
        opacity: unset;
      }
    }

    ${J} {
      max-width: 100%;
    }

    ${xe} ${kt} {
      /* To enlarge the image containers to the size of the biggest one */
      min-height: 100%;
    }

    ${Kt} > ${Jt} {
      display: none;
    }
  `),we=g.forwardRef(function(n,t){const e=it(),{testId:s,children:o,name:a=e,disabled:d=!1,required:c=!1,onChange:r,readOnly:l,inline:f=!1,autoStack:u=!0,variant:b="simple",onClear:x,...m}=n,p=q(s,Ct),v=X(),[y,_]=Bt(),[C,w]=g.useState(f),$=g.useRef(f),L=g.useRef(0),M=st(t);ie(M,{selector:"[data-main-focus]",cycle:!1,dir:"left-right"}),g.useEffect(()=>{if(w(f),f&&y&&y.lastChild&&u){const E=new IntersectionObserver(I=>{I[0].intersectionRatio<1&&(I[0].rootBounds&&(L.current=I[0].rootBounds.width+1),$.current=!1,w(!1))},{root:y,threshold:1}),D=new ResizeObserver(I=>{!$.current&&I[0].contentRect.width>L.current&&($.current=!0,w(!0))});return E.observe(y.lastChild),D.observe(y),()=>{E.disconnect(),D.disconnect()}}},[y,f,u]);const O=g.useMemo(()=>g.Children.map(o,E=>g.cloneElement(E,{name:a,status:m.status,disabled:d||E.props.disabled,readOnly:l||E.props.readOnly,variant:b==="card-grid"?"card":b,suppressAnnouncements:!0,onChange:r?D=>{var I,N;l||E.props.readOnly||((N=(I=E.props).onChange)==null||N.call(I,D),r(D))}:E.props.onChange})),[o,a,d,l,b,r]);return h.jsx(W,{testId:p,as:ye,ref:M,name:a,disabled:d,required:c,...m,isRadioCheck:!0,onClear:x,onMouseDown:E=>{var D;(D=m.onMouseDown)==null||D.call(m,E),M.current&&M.current.contains(Gt())&&(!(E.target instanceof Element)||!E.target.closest("label")||E.preventDefault())},children:b==="card-grid"?h.jsx(wt,{container:{gap:1,cols:C?u?`repeat(auto-fit, minmax(min(100%, ${v.base["content-width"].sm}), 1fr))`:`repeat(${g.Children.count(o)}, 1fr)`:"minmax(min-content, max-content)",autoRows:"1fr"},children:O}):h.jsx(j,{ref:_,container:{direction:C?"row":"column",colGap:C?1.5:2,rowGap:b==="card"?1:0,wrap:"wrap"},children:O})})}),ft=V(we,Ct),Pt=U("select",["control",...K]),mt=i=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25' fill='${encodeURIComponent(i)}'%3E%3Cpath d='M21 8v2.75l-8.5 6.5-8.5-6.5V8l8.5 6.5z'/%3E%3C/svg%3E")`,Et=T.select(i=>{const{readOnly:n,hasStatus:t}=i,{base:e,components:{"form-control":{"foreground-color":s,"background-color":o},select:a}}=i.theme,{rtl:d}=Qt();return P`
    appearance: none;
    -webkit-appearance: none;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: ${a.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-inline-start: ${a.padding};
    padding-inline-end: calc(4 * ${e.spacing});
    background-image: ${mt(s)};
    background-repeat: no-repeat;
    background-size: calc(2 * ${e.spacing}) auto;
    background-position: ${d?e.spacing:`calc(100% - ${e.spacing}) `} 60%;
    border-width: ${a["border-width"]};
    border-radius: calc(${e["border-radius"]} * ${a["border-radius"]});

    @media (forced-colors: active) {
      background-image: ${mt("CanvasText")};
    }

    ${n&&P`
      background-image: none;
    `}

    ${!t&&P`
      border-color: ${a["border-color"]};
    `}

    &:has(option[value='']:checked, option:not([value]):checked) {
      color: ${dt(e.transparency["transparent-3"],s,o)};
    }

    & option {
      color: ${s};

      &[value=''],
      &:not([value]) {
        color: ${dt(e.transparency["transparent-3"],s,o)};
      }
    }

    &::-ms-expand {
      display: none;
    }

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `});Et.defaultProps=R;const _e=g.forwardRef(function(n,t){const e=it(),s=ot(),{testId:o,additionalInfo:a,children:d,id:c=e,label:r,labelHidden:l,info:f,status:u,required:b=!1,disabled:x=!1,readOnly:m=!1,actions:p,onResolveSuggestion:v,...y}=n,_=q(o,Pt),C=h.jsx(z,{"data-testid":_.control,...y,as:Et,hasSuggestion:u==="pending"&&!!v,id:c,hasStatus:!!u,status:u,required:b,disabled:x,label:r,readOnly:m,ref:t,onMouseDown:m?w=>{w.preventDefault()}:void 0,onKeyDown:m?w=>{["Escape","Tab","Space"].includes(w.key)||w.preventDefault()}:void 0,children:d});return r?h.jsx(W,{testId:_,label:h.jsxs(h.Fragment,{children:[r,m&&h.jsx(yt,{children:` ${s("read_only")}`})]}),labelHidden:l,id:c,info:f,status:u,required:b,disabled:x,readOnly:m,actions:p,onResolveSuggestion:v,additionalInfo:a,children:C}):C}),Se=V(_e,Pt),ke={},H=i=>{const{children:n,...t}=i;return h.jsx("option",{...t,children:n})};H.defaultProps=ke;const Tt=U("radio-button",["control",...K]),Ce=g.forwardRef(function({testId:n,...t},e){const s=q(n,Tt);return h.jsx(Zt,{...t,testId:s,type:"radio",ref:e})}),Z=V(Ce,Tt);/*!
 * Signature Pad v5.1.4 | https://github.com/szimek/signature_pad
 * (c) 2026 Szymon Nowak | Released under the MIT license
 */var Y=class{constructor(i,n,t,e){k(this,"x");k(this,"y");k(this,"pressure");k(this,"time");if(isNaN(i)||isNaN(n))throw new Error(`Point is invalid: (${i}, ${n})`);this.x=+i,this.y=+n,this.pressure=t||0,this.time=e||Date.now()}distanceTo(i){return Math.sqrt(Math.pow(this.x-i.x,2)+Math.pow(this.y-i.y,2))}equals(i){return this.x===i.x&&this.y===i.y&&this.pressure===i.pressure&&this.time===i.time}velocityFrom(i){return this.time!==i.time?this.distanceTo(i)/(this.time-i.time):0}},Pe=class $t{constructor(n,t,e,s,o,a){k(this,"startPoint");k(this,"control2");k(this,"control1");k(this,"endPoint");k(this,"startWidth");k(this,"endWidth");this.startPoint=n,this.control2=t,this.control1=e,this.endPoint=s,this.startWidth=o,this.endWidth=a}static fromPoints(n,t){const e=this.calculateControlPoints(n[0],n[1],n[2]).c2,s=this.calculateControlPoints(n[1],n[2],n[3]).c1;return new $t(n[1],e,s,n[2],t.start,t.end)}static calculateControlPoints(n,t,e){const s=n.x-t.x,o=n.y-t.y,a=t.x-e.x,d=t.y-e.y,c={x:(n.x+t.x)/2,y:(n.y+t.y)/2},r={x:(t.x+e.x)/2,y:(t.y+e.y)/2},l=Math.sqrt(s*s+o*o),f=Math.sqrt(a*a+d*d),u=c.x-r.x,b=c.y-r.y,x=l+f==0?0:f/(l+f),m={x:r.x+u*x,y:r.y+b*x},p=t.x-m.x,v=t.y-m.y;return{c1:new Y(c.x+p,c.y+v),c2:new Y(r.x+p,r.y+v)}}length(){let t=0,e,s;for(let o=0;o<=10;o+=1){const a=o/10,d=this.point(a,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this.point(a,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){const r=d-e,l=c-s;t+=Math.sqrt(r*r+l*l)}e=d,s=c}return t}point(n,t,e,s,o){return t*(1-n)*(1-n)*(1-n)+3*e*(1-n)*(1-n)*n+3*s*(1-n)*n*n+o*n*n*n}},Ee=class{constructor(){k(this,"_et");try{this._et=new EventTarget}catch{this._et=document}}addEventListener(i,n,t){this._et.addEventListener(i,n,t)}dispatchEvent(i){return this._et.dispatchEvent(i)}removeEventListener(i,n,t){this._et.removeEventListener(i,n,t)}};function Te(i,n=250){let t=0,e=null,s,o,a;const d=()=>{t=Date.now(),e=null,s=i.apply(o,a),e||(o=null,a=[])};return function(...r){const l=Date.now(),f=n-(l-t);return o=this,a=r,f<=0||f>n?(e&&(clearTimeout(e),e=null),t=l,s=i.apply(o,a),e||(o=null,a=[])):e||(e=window.setTimeout(d,f)),s}}var $e=class nt extends Ee{constructor(t,e={}){super();k(this,"canvas");k(this,"dotSize");k(this,"minWidth");k(this,"maxWidth");k(this,"penColor");k(this,"minDistance");k(this,"velocityFilterWeight");k(this,"compositeOperation");k(this,"backgroundColor");k(this,"throttle");k(this,"canvasContextOptions");k(this,"_ctx");k(this,"_drawingStroke",!1);k(this,"_isEmpty",!0);k(this,"_dataUrl");k(this,"_dataUrlOptions");k(this,"_lastPoints",[]);k(this,"_data",[]);k(this,"_lastVelocity",0);k(this,"_lastWidth",0);k(this,"_strokeMoveUpdate");k(this,"_strokePointerId");this.canvas=t,this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle=e.throttle??16,this.minDistance=e.minDistance??5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=e.compositeOperation||"source-over",this.canvasContextOptions=e.canvasContextOptions??{},this._strokeMoveUpdate=this.throttle?Te(nt.prototype._strokeUpdate,this.throttle):nt.prototype._strokeUpdate,this._handleMouseDown=this._handleMouseDown.bind(this),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this),this._handleTouchMove=this._handleTouchMove.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handlePointerDown=this._handlePointerDown.bind(this),this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this),this._handlePointerCancel=this._handlePointerCancel.bind(this),this._handleTouchCancel=this._handleTouchCancel.bind(this),this._ctx=t.getContext("2d",this.canvasContextOptions),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0,this._dataUrl=void 0,this._dataUrlOptions=void 0,this._strokePointerId=void 0}redraw(){const t=this._data,e=this._dataUrl,s=this._dataUrlOptions;this.clear(),e&&this.fromDataURL(e,s),this.fromData(t,{clear:!1})}fromDataURL(t,e={}){return new Promise((s,o)=>{const a=new Image,d=e.ratio||window.devicePixelRatio||1,c=e.width||this.canvas.width/d,r=e.height||this.canvas.height/d,l=e.xOffset||0,f=e.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,l,f,c,r),s()},a.onerror=u=>{o(u)},a.crossOrigin="anonymous",a.src=t,this._isEmpty=!1,this._dataUrl=t,this._dataUrlOptions={...e}})}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return typeof e!="object"&&(e=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(e))}`;default:return typeof e!="number"&&(e=void 0),this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none",this.canvas.style.webkitUserSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.style.webkitUserSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerDown),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this._removeMoveUpEventListeners()}_getListenerFunctions(){const t=window.document===this.canvas.ownerDocument?window:this.canvas.ownerDocument.defaultView??this.canvas.ownerDocument;return{addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}_removeMoveUpEventListeners(){const{removeEventListener:t}=this._getListenerFunctions();t("pointermove",this._handlePointerMove),t("pointerup",this._handlePointerUp),t("pointercancel",this._handlePointerCancel),t("mousemove",this._handleMouseMove),t("mouseup",this._handleMouseUp),t("touchmove",this._handleTouchMove),t("touchend",this._handleTouchEnd),t("touchcancel",this._handleTouchCancel)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this),this._drawLine.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_isLeftButtonPressed(t,e){return e?t.buttons===1:(t.buttons&1)===1}_pointerEventToSignatureEvent(t){return{event:t,type:t.type,x:t.clientX,y:t.clientY,pressure:"pressure"in t?t.pressure:0}}_touchEventToSignatureEvent(t){const e=t.changedTouches[0];return{event:t,type:t.type,x:e.clientX,y:e.clientY,pressure:e.force}}_handleMouseDown(t){!this._isLeftButtonPressed(t,!0)||this._drawingStroke||this._strokeBegin(this._pointerEventToSignatureEvent(t))}_handleMouseMove(t){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}_handleMouseUp(t){this._isLeftButtonPressed(t)||this._strokeEnd(this._pointerEventToSignatureEvent(t))}_handleTouchStart(t){t.targetTouches.length!==1||this._drawingStroke||(t.cancelable&&t.preventDefault(),this._strokeBegin(this._touchEventToSignatureEvent(t)))}_handleTouchMove(t){if(t.targetTouches.length===1){if(t.cancelable&&t.preventDefault(),!this._drawingStroke){this._strokeEnd(this._touchEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._touchEventToSignatureEvent(t))}}_handleTouchEnd(t){t.targetTouches.length===0&&(t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t)))}_handlePointerCancel(t){this._allowPointerId(t)&&(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t),!1))}_handleTouchCancel(t){t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t),!1)}_getPointerId(t){return t.persistentDeviceId||t.pointerId}_allowPointerId(t,e=!1){return typeof this._strokePointerId>"u"?e:this._getPointerId(t)===this._strokePointerId}_handlePointerDown(t){this._drawingStroke||!this._isLeftButtonPressed(t)||!this._allowPointerId(t,!0)||(this._strokePointerId=this._getPointerId(t),t.preventDefault(),this._strokeBegin(this._pointerEventToSignatureEvent(t)))}_handlePointerMove(t){if(this._allowPointerId(t)){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}t.preventDefault(),this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}}_handlePointerUp(t){this._isLeftButtonPressed(t)||!this._allowPointerId(t)||(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t)))}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){if(!this.dispatchEvent(new CustomEvent("beginStroke",{detail:t,cancelable:!0})))return;const{addEventListener:s}=this._getListenerFunctions();switch(t.event.type){case"mousedown":s("mousemove",this._handleMouseMove,{passive:!1}),s("mouseup",this._handleMouseUp,{passive:!1});break;case"touchstart":s("touchmove",this._handleTouchMove,{passive:!1}),s("touchend",this._handleTouchEnd,{passive:!1}),s("touchcancel",this._handleTouchCancel,{passive:!1});break;case"pointerdown":s("pointermove",this._handlePointerMove,{passive:!1}),s("pointerup",this._handlePointerUp,{passive:!1}),s("pointercancel",this._handlePointerCancel,{passive:!1});break}this._drawingStroke=!0;const o=this._getPointGroupOptions(),a={...o,points:[]};this._data.push(a),this._reset(o),this._strokeUpdate(t)}_strokeUpdate(t){if(!this._drawingStroke)return;if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const e=this._createPoint(t.x,t.y,t.pressure),s=this._data[this._data.length-1],o=s.points,a=o.length>0&&o[o.length-1],d=a?e.distanceTo(a)<=this.minDistance:!1,c=this._getPointGroupOptions(s);if(!a||!(a&&d)){const r=this._addPoint(e,c);a?r&&this._drawCurve(r,c):this._drawDot(e,c),o.push({time:e.time,x:e.x,y:e.y,pressure:e.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t,e=!0){this._removeMoveUpEventListeners(),this._drawingStroke&&(e&&this._strokeUpdate(t),this._drawingStroke=!1,this._strokePointerId=void 0,this.dispatchEvent(new CustomEvent("endStroke",{detail:t})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerDown,{passive:!1})}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown,{passive:!1})}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart,{passive:!1})}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,e,s){const o=this.canvas.getBoundingClientRect();return new Y(t-o.left,e-o.top,s,new Date().getTime())}_addPoint(t,e){const{_lastPoints:s}=this;if(s.push(t),s.length>2){s.length===3&&s.unshift(s[0]);const o=this._calculateCurveWidths(s[1],s[2],e),a=Pe.fromPoints(s,o);return s.shift(),a}return null}_calculateCurveWidths(t,e,s){const o=s.velocityFilterWeight*e.velocityFrom(t)+(1-s.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(o,s),d={end:a,start:this._lastWidth};return this._lastVelocity=o,this._lastWidth=a,d}_strokeWidth(t,e){return Math.max(e.maxWidth/(t+1),e.minWidth)}_drawCurveSegment(t,e,s){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,s,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){const s=this._ctx,o=t.endWidth-t.startWidth,a=Math.ceil(t.length())*2;s.beginPath(),s.fillStyle=e.penColor;for(let d=0;d<a;d+=1){const c=d/a,r=c*c,l=r*c,f=1-c,u=f*f,b=u*f;let x=b*t.startPoint.x;x+=3*u*c*t.control1.x,x+=3*f*r*t.control2.x,x+=l*t.endPoint.x;let m=b*t.startPoint.y;m+=3*u*c*t.control1.y,m+=3*f*r*t.control2.y,m+=l*t.endPoint.y;const p=Math.min(t.startWidth+l*o,e.maxWidth);this._drawCurveSegment(x,m,p)}s.closePath(),s.fill()}_getDotSize(t){return t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2}_drawDot(t,e){const s=this._ctx,o=this._getDotSize(e);s.beginPath(),this._drawCurveSegment(t.x,t.y,o),s.closePath(),s.fillStyle=e.penColor,s.fill()}_drawLine(t,e,s){const o=this._ctx;o.save(),o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(e.x,e.y),o.lineWidth=this._getDotSize(s)*2,o.lineCap="round",o.strokeStyle=s.penColor,o.stroke(),o.restore(),this._isEmpty=!1}_fromData(t,e,s,o){for(const a of t){const{points:d}=a,c=this._getPointGroupOptions(a);if(d.length>2)for(let r=0;r<d.length;r+=1){const l=d[r],f=new Y(l.x,l.y,l.pressure,l.time);r===0&&this._reset(c);const u=this._addPoint(f,c);u&&e(u,c)}else d.length===2?(this._reset(c),o(d[0],d[1],c)):(this._reset(c),s(d[0],c))}}toSVG({includeBackgroundColor:t=!1,includeDataUrl:e=!1}={}){var f,u,b,x,m;const s=this._data,o=Math.max(window.devicePixelRatio||1,1),a=0,d=0,c=this.canvas.width/o,r=this.canvas.height/o,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${a} ${d} ${c} ${r}`),l.setAttribute("width",c.toString()),l.setAttribute("height",r.toString()),t&&this.backgroundColor){const p=document.createElement("rect");p.setAttribute("width","100%"),p.setAttribute("height","100%"),p.setAttribute("fill",this.backgroundColor),l.appendChild(p)}if(e&&this._dataUrl){const p=((f=this._dataUrlOptions)==null?void 0:f.ratio)||window.devicePixelRatio||1,v=((u=this._dataUrlOptions)==null?void 0:u.width)||this.canvas.width/p,y=((b=this._dataUrlOptions)==null?void 0:b.height)||this.canvas.height/p,_=((x=this._dataUrlOptions)==null?void 0:x.xOffset)||0,C=((m=this._dataUrlOptions)==null?void 0:m.yOffset)||0,w=document.createElement("image");w.setAttribute("x",_.toString()),w.setAttribute("y",C.toString()),w.setAttribute("width",v.toString()),w.setAttribute("height",y.toString()),w.setAttribute("preserveAspectRatio","none"),w.setAttribute("href",this._dataUrl),l.appendChild(w)}return this._fromData(s,(p,{penColor:v})=>{const y=document.createElement("path");if(!isNaN(p.control1.x)&&!isNaN(p.control1.y)&&!isNaN(p.control2.x)&&!isNaN(p.control2.y)){const _=`M ${p.startPoint.x.toFixed(3)},${p.startPoint.y.toFixed(3)} C ${p.control1.x.toFixed(3)},${p.control1.y.toFixed(3)} ${p.control2.x.toFixed(3)},${p.control2.y.toFixed(3)} ${p.endPoint.x.toFixed(3)},${p.endPoint.y.toFixed(3)}`;y.setAttribute("d",_),y.setAttribute("stroke-width",(p.endWidth*2.25).toFixed(3)),y.setAttribute("stroke",v),y.setAttribute("fill","none"),y.setAttribute("stroke-linecap","round"),l.appendChild(y)}},(p,{penColor:v,dotSize:y,minWidth:_,maxWidth:C})=>{const w=document.createElement("circle"),$=y>0?y:(_+C)/2;w.setAttribute("r",$.toString()),w.setAttribute("cx",p.x.toString()),w.setAttribute("cy",p.y.toString()),w.setAttribute("fill",v),l.appendChild(w)},(p,v,y)=>{const _=document.createElement("line");_.setAttribute("x1",p.x.toString()),_.setAttribute("y1",p.y.toString()),_.setAttribute("x2",v.x.toString()),_.setAttribute("y2",v.y.toString()),_.setAttribute("stroke",y.penColor),_.setAttribute("stroke-width",(this._getDotSize(y)*2).toString()),_.setAttribute("stroke-linecap","round"),l.appendChild(_)}),l.outerHTML}};const It=i=>{const n=g.useRef(null),t=g.useRef(),{signaturePadRef:e,canvasProps:s,onEndStroke:o,penColor:a}=i,d=X(),c=g.useRef(o);g.useEffect(()=>{c.current=o},[o]);const r=g.useCallback(()=>{var l;if(n!=null&&n.current&&(t!=null&&t.current)){const f=n.current,u=Math.max(window.devicePixelRatio||1,1),b=t.current.toData();f.width=f.offsetWidth*u,f.height=f.offsetHeight*u,(l=f.getContext("2d"))==null||l.scale(u,u),b&&b.length>0&&t.current.fromData(b)}},[]);return g.useEffect(()=>{var f,u,b;const l=n==null?void 0:n.current;if(l){if(!t.current){const x=Math.max(window.devicePixelRatio||1,1);l.width=l.offsetWidth*x,l.height=l.offsetHeight*x,(f=l.getContext("2d"))==null||f.scale(x,x);const m=new $e(l,{penColor:a||((b=(u=d==null?void 0:d.base)==null?void 0:u.palette)==null?void 0:b["foreground-color"])||"#000"});t.current=m,e&&(e.current=m),m.addEventListener("endStroke",()=>{var p;(p=c.current)==null||p.call(c)})}return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}}},[r]),g.useEffect(()=>{var l,f;t.current&&(t.current.penColor=a||((f=(l=d==null?void 0:d.base)==null?void 0:l.palette)==null?void 0:f["foreground-color"])||"#000")},[a,d]),h.jsx("canvas",{ref:n,...s})};It.__docgenInfo={description:"",methods:[],displayName:"Signature",props:{canvasProps:{required:!1,tsType:{name:"ReactCanvasHTMLAttributes",raw:"React.CanvasHTMLAttributes<HTMLCanvasElement>",elements:[{name:"HTMLCanvasElement"}]},description:""},signaturePadRef:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<SignaturePad | undefined>",elements:[{name:"union",raw:"SignaturePad | undefined",elements:[{name:"SignaturePad"},{name:"undefined"}]}]},description:""},onEndStroke:{required:!1,tsType:{name:"CallableFunction"},description:""},penColor:{required:!1,tsType:{name:"string"},description:""}},composes:["Options"]};const Ie=T.div`
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Pacifico&family=Satisfy&display=swap');

  canvas {
    border-radius: 4px;
    border: 1px solid ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["border-line"])||"#ccc"}};
    cursor: crosshair;
    touch-action: none;
    background-color: ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["primary-background"])||"#fff"}};
  }
`,Le=T.div`
  padding-top: 0.5rem;
`,Me=T.div`
  img {
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["border-line"])||"#ccc"}};
    background-color: ${({theme:i})=>{var n,t;return((t=(n=i==null?void 0:i.base)==null?void 0:n.palette)==null?void 0:t["primary-background"])||"#fff"}};
  }
`,De=T.div`
  font-family: ${({fontFamily:i})=>i}, cursive;
  font-size: 1.5rem;
  padding: 0.5rem 0;
`,gt=[{label:"Caveat",value:"Caveat"},{label:"Dancing Script",value:"Dancing Script"},{label:"Pacifico",value:"Pacifico"},{label:"Great Vibes",value:"Great Vibes"},{label:"Satisfy",value:"Satisfy"}],Lt=i=>{const{value:n,getPConnect:t,validatemessage:e,label:s,hideLabel:o=!1,helperText:a,testId:d,displayMode:c}=i,r=g.useRef(),l=t(),f=l.getActionsApi(),u=l.getStateProps().value,[b,x]=g.useState(!1),[m,p]=g.useState(e||a);let{readOnly:v,required:y,disabled:_}=i;[v,y,_]=[v,y,_].map(S=>S===!0||typeof S=="string"&&S==="true");const[C,w]=g.useState(n),[$,L]=g.useState(void 0),[M,O]=g.useState("draw"),[E,D]=g.useState("#000000"),[I,N]=g.useState(""),[rt,Mt]=g.useState(gt[0].value);g.useEffect(()=>w(n),[n]),g.useEffect(()=>{var S;n&&M==="draw"&&((S=r.current)==null||S.fromDataURL(n))},[]),g.useEffect(()=>{e!==""&&L("error"),$!=="success"&&L(e!==""?"error":void 0)},[$,e]);const Dt=n?h.jsx(Me,{children:h.jsx(oe,{alt:s,src:n})}):null;if(c==="DISPLAY_ONLY")return Dt;const At=()=>{x(!0),L(void 0),p(e||a)},Ot=()=>{var S;M==="draw"?(S=r.current)==null||S.clear():N(""),x(!1),L(void 0),p(e||a)},Rt=()=>{const S=document.createElement("canvas");S.width=600,S.height=200;const A=S.getContext("2d");return A?(A.fillStyle="#ffffff",A.fillRect(0,0,S.width,S.height),A.font=`48px "${rt}", cursive`,A.fillStyle=E,A.textBaseline="middle",A.textAlign="center",A.fillText(I,S.width/2,S.height/2),S.toDataURL("image/png")):""},jt=()=>{var A;let S="";M==="draw"?S=((A=r.current)==null?void 0:A.toDataURL("image/svg+xml"))||"":S=Rt(),S&&(w(S),f.updateFieldValue(u,S),x(!1),L("success"),p(t().getLocalizedValue("Signature captured")))};return h.jsx(Ie,{children:h.jsxs(j,{container:{direction:"column",gap:2},children:[c==="DISPLAY_ONLY"||v||_?null:h.jsxs(j,{container:{direction:"row",gap:2,alignItems:"center"},style:{marginBottom:"1rem"},children:[h.jsx(W,{label:t().getLocalizedValue("Mode"),children:h.jsx(Q,{ariaLabel:"Mode",children:h.jsxs(ft,{inline:!0,children:[h.jsx(Z,{id:"draw",label:t().getLocalizedValue("Draw"),checked:M==="draw",onChange:()=>O("draw")}),h.jsx(Z,{id:"type",label:t().getLocalizedValue("Type"),checked:M==="type",onChange:()=>O("type")})]})})}),h.jsx(W,{label:t().getLocalizedValue("Pen Color"),children:h.jsx(Q,{ariaLabel:"Pen Color",children:h.jsxs(Se,{value:E,onChange:S=>D(S.target.value),children:[h.jsx(H,{value:"#000000",children:"Black"}),h.jsx(H,{value:"#0000FF",children:"Blue"}),h.jsx(H,{value:"#FF0000",children:"Red"})]})})})]}),h.jsx(W,{label:s,labelHidden:o,info:m,status:$,required:y,disabled:_,readOnly:v,testId:d,children:h.jsx(Q,{ariaLabel:s,required:y,disabled:_,readOnly:v,children:v||_?h.jsx("img",{alt:"Signature",src:C}):h.jsxs(j,{container:{direction:"column",gap:2},children:[M==="draw"?h.jsx(It,{signaturePadRef:r,penColor:E,canvasProps:{style:{width:"100%",height:200}},onEndStroke:At}):h.jsxs(j,{container:{direction:"column",gap:2},children:[h.jsx(re,{type:"text",placeholder:"Type your name",value:I,onChange:S=>{N(S.target.value),x(!!S.target.value)}}),I&&h.jsx(ft,{children:gt.map(S=>h.jsx(Z,{id:S.value,checked:rt===S.value,onChange:()=>Mt(S.value),label:h.jsx(De,{fontFamily:S.value,style:{color:E},children:I})},S.value))})]}),h.jsxs(j,{as:Le,container:{direction:"row",justify:"between",pad:[1]},style:{marginTop:"0.5rem"},children:[h.jsx(tt,{compact:!0,variant:"secondary",className:"clear",onClick:Ot,children:t().getLocalizedValue("Clear")}),h.jsx(tt,{compact:!0,variant:"primary",className:"accept",onClick:jt,disabled:M==="draw"?!b:!I,children:t().getLocalizedValue("Accept")})]})]})})})]})})},Ae=te(Lt);Lt.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsSignatureCapture",props:{getPConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => typeof PConnect",signature:{arguments:[],return:{name:"PConnect"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},validatemessage:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:"'DISPLAY_ONLY' | ''",elements:[{name:"literal",value:"'DISPLAY_ONLY'"},{name:"literal",value:"''"}]},description:""}}};const Oe={value:"",label:"Signature",validatemessage:"",hideLabel:!1,helperText:"Sign here",testId:"signature-1",getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{}}),getStateProps:()=>({value:"Signature"}),getLocalizedValue:i=>i})},ze={title:"Fields/Signature Capture",component:Ae,argTypes:{getPConnect:{table:{disable:!0}}}},G={args:{...Oe}};var xt,vt,bt;G.parameters={...G.parameters,docs:{...(xt=G.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    ...configProps
  }
}`,...(bt=(vt=G.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};const Be=["Default"];export{G as Default,Be as __namedExportsOrder,ze as default};
