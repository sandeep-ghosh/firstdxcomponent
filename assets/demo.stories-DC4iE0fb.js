import{j as a}from"./index-SNvzCnZR.js";import{r as p}from"./index-C5e9SFkp.js";import{q as y,T as j,F as C,B as L}from"./Badges.test-ids-Bi90gUTh.js";import{w as W,F as T,a as X}from"./FormField-DNhMItfM.js";import"./index-vofeE47f.js";import"./iframe-DUv_ih4K.js";const S=y.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 800px;
  border: 1px solid ${({theme:t})=>{var n,r;return((r=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:r["border-line"])||"#ccc"}};
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({theme:t})=>{var n,r;return((r=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:r["primary-background"])||"#fff"}};
  cursor: ${({readOnly:t})=>t?"default":"crosshair"};

  img {
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none; /* Let clicks fall through to the container */
  }
`,I=y.div`
  position: absolute;
  top: ${({y:t})=>t}%;
  left: ${({x:t})=>t}%;
  width: 24px;
  height: 24px;
  background-color: ${({theme:t})=>{var n,r;return((r=(n=t==null?void 0:t.base)==null?void 0:n.palette)==null?void 0:r["brand-primary"])||"#0076CE"}};
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
`,G=y.div`
  margin-top: 0.5rem;
`,V=t=>{const{value:n,getPConnect:r,validatemessage:f,label:c,hideLabel:b=!1,helperText:D,testId:Y,displayMode:v,imageUrl:d}=t,w=r(),E=w.getActionsApi(),U=w.getStateProps().value;let{readOnly:i,required:g,disabled:s}=t;[i,g,s]=[i,g,s].map(e=>e===!0||typeof e=="string"&&e==="true");const[l,A]=p.useState([]),[$,P]=p.useState(void 0),h=p.useRef(null);p.useEffect(()=>{if(n)try{const e=JSON.parse(n);Array.isArray(e)&&A(e)}catch{console.error("Invalid annotation JSON format in value string")}},[n]),p.useEffect(()=>{P(f?"error":void 0)},[f]);const x=e=>{A(e);const o=JSON.stringify(e);E.updateFieldValue(U,o),P("success")},z=e=>{if(!(i||s||v==="DISPLAY_ONLY"||!d)&&h.current){const o=h.current.getBoundingClientRect(),J=(e.clientX-o.left)/o.width*100,H=(e.clientY-o.top)/o.height*100,M={id:Date.now(),x:Number(J.toFixed(2)),y:Number(H.toFixed(2))};x([...l,M])}},R=()=>{x([])},B=()=>{if(l.length>0){const e=[...l];e.pop(),x(e)}};return v==="DISPLAY_ONLY"?a.jsx(T,{label:c,labelHidden:b,children:a.jsxs(S,{readOnly:!0,children:[d?a.jsx("img",{src:d,alt:c}):a.jsx(j,{children:"No image available"}),l.map((e,o)=>a.jsx(I,{x:e.x,y:e.y,children:o+1},e.id))]})}):a.jsx(C,{container:{direction:"column",gap:2},children:a.jsx(T,{label:c,labelHidden:b,info:f||D,status:$,required:g,disabled:s,readOnly:i,testId:Y,children:a.jsxs(X,{ariaLabel:c,required:g,disabled:s,readOnly:i,children:[a.jsxs(S,{ref:h,readOnly:i||s,onClick:z,children:[d?a.jsx("img",{src:d,alt:c}):a.jsx(j,{children:"No image available. Provide a valid Image URL."}),l.map((e,o)=>a.jsx(I,{x:e.x,y:e.y,children:o+1},e.id))]}),!i&&!s&&d&&a.jsxs(C,{as:G,container:{direction:"row",gap:1},children:[a.jsx(L,{compact:!0,variant:"secondary",onClick:B,disabled:l.length===0,children:r().getLocalizedValue("Undo")}),a.jsx(L,{compact:!0,variant:"secondary",onClick:R,disabled:l.length===0,children:r().getLocalizedValue("Clear All")})]})]})})})},K=W(V);V.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsImageAnnotator",props:{getPConnect:{required:!0,tsType:{name:"signature",type:"function",raw:"() => typeof PConnect",signature:{arguments:[],return:{name:"PConnect"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},validatemessage:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},displayMode:{required:!1,tsType:{name:"union",raw:"'DISPLAY_ONLY' | ''",elements:[{name:"literal",value:"'DISPLAY_ONLY'"},{name:"literal",value:"''"}]},description:""}}};const u={value:"[]",label:"Vehicle Damage Annotator",imageUrl:"https://www.w3schools.com/html/img_car.jpg",validatemessage:"",hideLabel:!1,helperText:"Click on the car to drop a damage pin",testId:"annotator-1",getPConnect:()=>({getActionsApi:()=>({updateFieldValue:()=>{}}),getStateProps:()=>({value:"Annotations"}),getLocalizedValue:t=>t})},re={title:"Fields/Image Annotator",component:K,argTypes:{getPConnect:{table:{disable:!0}}}},m={args:{...u}};var q,N,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  value: '[]',
  label: 'Vehicle Damage Annotator',
  imageUrl: 'https://www.w3schools.com/html/img_car.jpg',
  validatemessage: '',
  hideLabel: false,
  helperText: 'Click on the car to drop a damage pin',
  testId: 'annotator-1',
  getPConnect: () => ({
    getActionsApi: () => ({
      updateFieldValue: () => {}
    }),
    getStateProps: () => ({
      value: 'Annotations'
    }),
    getLocalizedValue: (val: string) => val
  }) as any
}`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var F,O,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...configProps
  }
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const oe=["configProps","Default"];export{m as Default,oe as __namedExportsOrder,u as configProps,re as default};
