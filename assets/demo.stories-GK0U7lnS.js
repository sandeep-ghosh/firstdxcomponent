import{j as r}from"./index-SNvzCnZR.js";import{r as p}from"./index-C5e9SFkp.js";import{q as y,T as j,F as P,B as C}from"./Badges.test-ids-Dxiuwil9.js";import{w as B,F as T,a as J}from"./FormField-DloyJIQ3.js";import"./index-vofeE47f.js";import"./iframe-CrGt1tGv.js";const L=y.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 800px;
  border: 1px solid ${({theme:t})=>{var n,a;return((a=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:a["border-line"])||"#ccc"}};
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({theme:t})=>{var n,a;return((a=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:a["primary-background"])||"#fff"}};
  cursor: ${({readOnly:t})=>t?"default":"crosshair"};

  img {
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none; /* Let clicks fall through to the container */
  }
`,q=y.div`
  position: absolute;
  top: ${({y:t})=>t}%;
  left: ${({x:t})=>t}%;
  width: 24px;
  height: 24px;
  background-color: ${({theme:t})=>{var n,a;return((a=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:a["brand-primary"])||"#0076CE"}};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
`,H=y.div`
  margin-top: 0.5rem;
`,O=t=>{const{value:n,getPConnect:a,validatemessage:m,label:c,hideLabel:b=!1,helperText:k,testId:F,displayMode:h,imageUrl:d}=t,v=a(),_=v.getActionsApi(),Y=v.getStateProps().value;let{readOnly:i,required:u,disabled:s}=t;[i,u,s]=[i,u,s].map(e=>e===!0||typeof e=="string"&&e==="true");const[l,w]=p.useState([]),[D,A]=p.useState(void 0),f=p.useRef(null);p.useEffect(()=>{if(n)try{const e=JSON.parse(n);Array.isArray(e)&&w(e)}catch{console.error("Invalid annotation JSON format in value string")}},[n]),p.useEffect(()=>{A(m?"error":void 0)},[m]);const x=e=>{w(e);const o=JSON.stringify(e);_.updateFieldValue(Y,o),A("success")},E=e=>{if(!(i||s||h==="DISPLAY_ONLY"||!d)&&f.current){const o=f.current.getBoundingClientRect(),$=(e.clientX-o.left)/o.width*100,R=(e.clientY-o.top)/o.height*100,z={id:Date.now(),x:Number($.toFixed(2)),y:Number(R.toFixed(2))};x([...l,z])}},V=()=>{x([])},U=()=>{if(l.length>0){const e=[...l];e.pop(),x(e)}};return h==="DISPLAY_ONLY"?r.jsx(T,{label:c,labelHidden:b,children:r.jsxs(L,{readOnly:!0,children:[d?r.jsx("img",{src:d,alt:c}):r.jsx(j,{children:"No image available"}),l.map((e,o)=>r.jsx(q,{x:e.x,y:e.y,children:o+1},e.id))]})}):r.jsx(P,{container:{direction:"column",gap:2},children:r.jsx(T,{label:c,labelHidden:b,info:m||k,status:D,required:u,disabled:s,readOnly:i,testId:F,children:r.jsxs(J,{ariaLabel:c,required:u,disabled:s,readOnly:i,children:[r.jsxs(L,{ref:f,readOnly:i||s,onClick:E,children:[d?r.jsx("img",{src:d,alt:c}):r.jsx(j,{children:"No image available. Provide a valid Image URL."}),l.map((e,o)=>r.jsx(q,{x:e.x,y:e.y,children:o+1},e.id))]}),!i&&!s&&d&&r.jsxs(P,{as:H,container:{direction:"row",gap:1},children:[r.jsx(C,{compact:!0,variant:"secondary",onClick:U,disabled:l.length===0,children:a().getLocalizedValue("Undo")}),r.jsx(C,{compact:!0,variant:"secondary",onClick:V,disabled:l.length===0,children:a().getLocalizedValue("Clear All")})]})]})})})},M=B(O);O.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsImageAnnotator",props:{getPConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => typeof PConnect",signature:{arguments:[],return:{name:"PConnect"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},validatemessage:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:"'DISPLAY_ONLY' | ''",elements:[{name:"literal",value:"'DISPLAY_ONLY'"},{name:"literal",value:"''"}]},description:""}}};const W={value:"[]",label:"Vehicle Damage Annotator",imageUrl:"https://www.w3schools.com/html/img_car.jpg",validatemessage:"",hideLabel:!1,helperText:"Click on the car to drop a damage pin",testId:"annotator-1",getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{}}),getStateProps:()=>({value:"Annotations"}),getLocalizedValue:t=>t})},te={title:"Fields/Image Annotator",component:M,argTypes:{getPConnect:{table:{disable:!0}}}},g={args:{...W}};var I,S,N;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...configProps
  }
}`,...(N=(S=g.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const re=["Default"];export{g as Default,re as __namedExportsOrder,te as default};
