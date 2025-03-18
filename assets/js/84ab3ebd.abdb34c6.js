"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2536],{28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}},87343:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"type":"api","id":"upload-file-2","title":"Upload File","description":"","slug":"/upload-file-2","frontMatter":{},"api":{"tags":["Folders"],"description":"Upload flows from a file.","operationId":"upload_file_api_v1_folders_upload__post","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"type":"string","format":"binary","title":"File"}},"type":"object","required":["file"],"title":"Body_upload_file_api_v1_folders_upload__post"}}},"required":true},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"items":{"properties":{"name":{"type":"string","title":"Name"},"description":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Description"},"icon":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Icon"},"icon_bg_color":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Icon Bg Color"},"gradient":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Gradient"},"data":{"anyOf":[{"type":"object"},{"type":"null"}],"title":"Data"},"is_component":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Is Component","default":false},"updated_at":{"anyOf":[{"type":"string","format":"date-time"},{"type":"null"}],"title":"Updated At"},"webhook":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Webhook","description":"Can be used on the webhook endpoint","default":false},"endpoint_name":{"anyOf":[{"type":"string"},{"type":"null"}],"title":"Endpoint Name"},"tags":{"anyOf":[{"items":{"type":"string"},"type":"array"},{"type":"null"}],"title":"Tags"},"locked":{"anyOf":[{"type":"boolean"},{"type":"null"}],"title":"Locked","default":false},"id":{"type":"string","format":"uuid","title":"Id"},"user_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"User Id"},"folder_id":{"anyOf":[{"type":"string","format":"uuid"},{"type":"null"}],"title":"Folder Id"}},"type":"object","required":["name","id","user_id","folder_id"],"title":"FlowRead"},"type":"array","title":"Response Upload File Api V1 Folders Upload  Post"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"method":"post","path":"/api/v1/folders/upload/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.2.0"},"postman":{"name":"Upload File","description":{"content":"Upload flows from a file.","type":"text/plain"},"url":{"path":["api","v1","folders","upload",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"multipart/form-data"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"formdata","formdata":[{"description":{"content":"(Required) ","type":"text/plain"},"key":"file","type":"file"}]},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/upload-file-2","previous":{"title":"Download File","permalink":"/api/download-file-1"},"next":{"title":"Get Starter Projects","permalink":"/api/get-starter-projects"}}');var s=i(74848),l=i(28453);const r={},o="Upload File",d=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"upload-file",children:"Upload File"})}),"\n",(0,s.jsx)(t.p,{children:"Upload flows from a file."}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Request Body "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"file"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" binary"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"201"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Name"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Description"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"icon_bg_color"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Icon Bg Color"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"gradient"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Gradient"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"is_component"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"updated_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"webhook"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Webhook"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)(t.p,{children:"Can be used on the webhook endpoint"})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"endpoint_name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Endpoint Name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"tags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Tags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"locked"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Locked"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" User Id"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"folder_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Folder Id"})]})})]})})]})})})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);