"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7095],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(96540);const n={},l=i.createContext(n);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}},48686:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"type":"api","id":"delete-multiple-flows","title":"Delete Multiple Flows","description":"","slug":"/delete-multiple-flows","frontMatter":{},"api":{"tags":["Flows"],"description":"Delete multiple flows by their IDs.\\n\\nArgs:\\n    flow_ids (List[str]): The list of flow IDs to delete.\\n    user (User, optional): The user making the request. Defaults to the current active user.\\n    db (Session, optional): The database session.\\n\\nReturns:\\n    dict: A dictionary containing the number of flows deleted.","operationId":"delete_multiple_flows_api_v1_flows__delete","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","items":{"type":"string","format":"uuid"},"title":"Flow Ids"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"delete","path":"/api/v1/flows/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":["3fa85f64-5717-4562-b3fc-2c963f66afa6"],"info":{"title":"Langflow","version":"1.2.0"},"postman":{"name":"Delete Multiple Flows","description":{"content":"Delete multiple flows by their IDs.\\n\\nArgs:\\n    flow_ids (List[str]): The list of flow IDs to delete.\\n    user (User, optional): The user making the request. Defaults to the current active user.\\n    db (Session, optional): The database session.\\n\\nReturns:\\n    dict: A dictionary containing the number of flows deleted.","type":"text/plain"},"url":{"path":["api","v1","flows",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"DELETE","body":{"mode":"raw","raw":"[\\n  \\"<uuid>\\",\\n  \\"<uuid>\\"\\n]","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/delete-multiple-flows","previous":{"title":"Read Flows","permalink":"/api/read-flows"},"next":{"title":"Read Flow","permalink":"/api/read-flow"}}');var n=s(74848),l=s(28453);const r={},o="Delete Multiple Flows",a=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"delete-multiple-flows",children:"Delete Multiple Flows"})}),"\n",(0,n.jsx)(t.p,{children:"Delete multiple flows by their IDs."}),"\n",(0,n.jsx)(t.p,{children:"Args:\nflow_ids (List[str]): The list of flow IDs to delete.\nuser (User, optional): The user making the request. Defaults to the current active user.\ndb (Session, optional): The database session."}),"\n",(0,n.jsx)(t.p,{children:"Returns:\ndict: A dictionary containing the number of flows deleted."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid[]"})})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);