"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1055],{18140:(e,s,t)=>{t.r(s),t.d(s,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"type":"api","id":"read-basic-examples","title":"Read Basic Examples","description":"","slug":"/read-basic-examples","frontMatter":{},"api":{"tags":["Flows"],"description":"Retrieve a list of basic example flows.\\n\\nArgs:\\n    session (Session): The database session.\\n\\nReturns:\\n    list[FlowRead]: A list of basic example flows.","operationId":"read_basic_examples_api_v1_flows_basic_examples__get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Description"},"icon":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Icon"},"icon_bg_color":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Icon Bg Color"},"gradient":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Gradient"},"data":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Data"},"is_component":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Component","default":false},"updated_at":{"anyOf":[{"type":"string","format":"date-time"},{"type":"null"}],"title":"Updated At"},"webhook":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Webhook","description":"Can be used on the webhook endpoint","default":false},"endpoint_name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Endpoint Name"},"tags":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Tags"},"locked":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Locked","default":false},"id":{"type":"string","format":"uuid","title":"Id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"},"folder_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Folder Id"}},"type":"object","required":["name","id","user_id","folder_id"],"title":"FlowRead"},"type":"array","title":"Response Read Basic Examples Api V1 Flows Basic Examples  Get"}}}}},"method":"get","path":"/api/v1/flows/basic_examples/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.2.0"},"postman":{"name":"Read Basic Examples","description":{"content":"Retrieve a list of basic example flows.\\n\\nArgs:\\n    session (Session): The database session.\\n\\nReturns:\\n    list[FlowRead]: A list of basic example flows.","type":"text/plain"},"url":{"path":["api","v1","flows","basic_examples",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/read-basic-examples","previous":{"title":"Download Multiple File","permalink":"/api/download-multiple-file"},"next":{"title":"Add User","permalink":"/api/add-user"}}');var i=t(74848),l=t(28453);const o={},a="Read Basic Examples",r=[];function d(e){const s={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"read-basic-examples",children:"Read Basic Examples"})}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a list of basic example flows."}),"\n",(0,i.jsx)(s.p,{children:"Args:\nsession (Session): The database session."}),"\n",(0,i.jsx)(s.p,{children:"Returns:\nlist[FlowRead]: A list of basic example flows."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon_bg_color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"gradient"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"data"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"updated_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"webhook"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(s.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"endpoint_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"locked"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Locked"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"user_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"folder_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})})]})})})]})})]})})})]})]})}function c(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var n=t(96540);const i={},l=n.createContext(i);function o(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);