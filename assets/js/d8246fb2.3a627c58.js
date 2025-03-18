"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6877],{8068:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/api-pane-97a01b20a262676d4e21906df0e29f46.png"},57025:(e,t,o)=>{o.r(t),o.d(t,{CH:()=>p,assets:()=>h,chCodeConfig:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>y});const n=JSON.parse('{"id":"Concepts/concepts-api","title":"API pane","description":"The\xa0API\xa0pane presents code templates for integrating your flow into external applications.","source":"@site/docs/Concepts/concepts-api.md","sourceDirName":"Concepts","slug":"/concepts-api","permalink":"/concepts-api","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"API pane","slug":"/concepts-api"},"sidebar":"docs","previous":{"title":"Langflow objects","permalink":"/concepts-objects"},"next":{"title":"Agents","permalink":"/components-agents"}}');var s=o(74848),r=o(28453),l=o(24754),c=o(65537),i=o(79329);const a={title:"API pane",slug:"/concepts-api"},d=void 0,h={},p={annotations:l.hk,Code:l.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},y=[{value:"Chat Widget",id:"chat-widget",level:2},{value:"Embed the chat widget into HTML",id:"embed-the-chat-widget-into-html",level:3},{value:"Embed the chat widget with React",id:"embed-the-chat-widget-with-react",level:3},{value:"Embed the chat widget with Angular",id:"embed-the-chat-widget-with-angular",level:3},{value:"Chat widget configuration",id:"chat-widget-configuration",level:2},{value:"Tweaks",id:"tweaks",level:2},{value:"Send image files to your flow with the API",id:"send-image-files-to-your-flow-with-the-api",level:2},{value:"Webhook cURL",id:"webhook-curl",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return p||j("CH",!1),p.Code||j("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"API"}),"\xa0pane presents code templates for integrating your flow into external applications."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:o(8068).A+"",width:"3236",height:"1760"})}),"\n",(0,s.jsxs)(c.A,{children:[(0,s.jsx)(i.A,{value:"curl",label:"curl",default:!0,children:(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"cURL"}),"\xa0tab displays sample code for posting a query to your flow. Modify the\xa0",(0,s.jsx)(t.code,{children:"input_value"}),"\xa0to change your input message. Copy the code and run it to post a query to your flow and get the result."]})}),(0,s.jsxs)(i.A,{value:"Python API",label:"Python API",children:[(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Python API"}),"\xa0tab displays code to interact with your flow using the Python HTTP ",(0,s.jsx)(t.code,{children:"requests"})," library."]}),(0,s.jsxs)(t.p,{children:["To use the ",(0,s.jsx)(t.code,{children:"requests"})," library:"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Copy and paste the code into a Python script."}),"\n",(0,s.jsx)(t.li,{children:"Run the script and pass your message with it."}),"\n"]}),(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python3 python",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"test",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"script.py ",props:{style:{color:"#C9D1D9"}}},{content:"--",props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"message",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"tell me about something interesting"',props:{style:{color:"#A5D6FF"}}}]}],lang:"python"},annotations:[]}]})]}),(0,s.jsxs)(i.A,{value:"JS API",label:"JS API",default:!0,children:[(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"JavaScript API"}),"\xa0tab displays code to interact with your flow in JavaScript."]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Copy and paste the code into a JavaScript file."}),"\n",(0,s.jsx)(t.li,{children:"Run the script with any necessary arguments for your flow:"}),"\n"]}),(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:'node test-script.js "tell me about something interesting"',props:{}}]}],lang:"text"},annotations:[]}]}),(0,s.jsx)(t.p,{children:"The response content depends on your flow. Make sure the endpoint returns a successful response."})]}),(0,s.jsxs)(i.A,{value:"Python code",label:"Python code",default:!0,children:[(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Python Code"}),"\xa0tab displays code to interact with your flow's\xa0",(0,s.jsx)(t.code,{children:".json"}),"\xa0file using the Langflow runtime."]}),(0,s.jsx)(t.p,{children:"To use your code in a Python application using the Langflow runtime, you have to first download your flow\u2019s JSON file."}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In your ",(0,s.jsx)(t.strong,{children:"Workspace"}),", click ",(0,s.jsx)(t.strong,{children:"Settings"}),", and then select ",(0,s.jsx)(t.strong,{children:"Export"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Download the flow to your local machine. Make sure the flow path in the script matches the flow\u2019s location on your machine."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy and paste the code from the ",(0,s.jsx)(t.strong,{children:"Python Code"})," tab into a Python script file."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Run the script:"}),"\n"]}),"\n"]}),(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python python",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"test",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"script.py",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"chat-widget",children:"Chat Widget"}),"\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Chat Widget HTML"}),"\xa0tab displays code that can be inserted in the\xa0",(0,s.jsx)(t.code,{children:"<body>"}),"\xa0of your HTML to interact with your flow."]}),"\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Langflow Chat Widget"}),"\xa0is a powerful web component that enables communication with a Langflow project. This widget allows for a chat interface embedding, allowing the integration of Langflow into web applications effortlessly."]}),"\n",(0,s.jsx)(t.p,{children:"You can get the HTML code embedded with the chat by clicking the Code button at the Sidebar after building a flow."}),"\n",(0,s.jsx)(t.p,{children:"Clicking the Chat Widget HTML tab, you'll get the code to be inserted. Read below to learn how to use it with HTML, React and Angular."}),"\n",(0,s.jsx)(t.h3,{id:"embed-the-chat-widget-into-html",children:"Embed the chat widget into HTML"}),"\n",(0,s.jsxs)(t.p,{children:["To embed the chat widget into any HTML page, insert the code snippet. inside a\xa0",(0,s.jsx)(t.code,{children:"<body>"}),"\xa0tag."]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script ",props:{style:{color:"#7EE787"}}},{content:"src",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js"',props:{style:{color:"#A5D6FF"}}},{content:'"',props:{style:{color:"#FFA198",fontStyle:"italic"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  <",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}}]},{tokens:[{content:"    window_title",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"Basic Prompting"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    flow_id",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"801abb1e-19b9-4278-9632-179b6d84f126"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    host_url",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"http://localhost:7860"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  ></",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,s.jsx)(t.h3,{id:"embed-the-chat-widget-with-react",children:"Embed the chat widget with React"}),"\n",(0,s.jsxs)(t.p,{children:["To embed the Chat Widget using React, insert this\xa0",(0,s.jsx)(t.code,{children:"<script>"}),"\xa0tag into the React\xa0",(0,s.jsx)(t.em,{children:"index.html"}),"\xa0file, inside the\xa0",(0,s.jsx)(t.code,{children:"<body>"}),"tag:"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script ",props:{style:{color:"#7EE787"}}},{content:"src",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@main/dist/build/static/js/bundle.min.js"',props:{style:{color:"#A5D6FF"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,s.jsx)(t.p,{children:"Declare your Web Component and encapsulate it in a React component."}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"declare",props:{style:{color:"#FF7B72"}}},{content:" global {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  namespace ",props:{style:{color:"#FF7B72"}}},{content:"JSX",props:{style:{color:"#FFA657"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    interface ",props:{style:{color:"#FF7B72"}}},{content:"IntrinsicElements",props:{style:{color:"#FFA657"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'      "langflow-chat"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#FF7B72"}}},{content:"any",props:{style:{color:"#79C0FF"}}},{content:";",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"export default function ",props:{style:{color:"#FF7B72"}}},{content:"ChatWidget",props:{style:{color:"#D2A8FF"}}},{content:"({ className }) ",props:{style:{color:"#FFA657"}}},{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  return",props:{style:{color:"#FF7B72"}}},{content:" (",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    <",props:{style:{color:"#C9D1D9"}}},{content:"div ",props:{style:{color:"#7EE787"}}},{content:"className",props:{style:{color:"#79C0FF"}}},{content:"={",props:{style:{color:"#FF7B72"}}},{content:"className",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#FF7B72"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      <",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}}]},{tokens:[{content:"        chat_inputs",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'\'{"your_key":"value"}\'',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        chat_input_field",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_chat_key"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        flow_id",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_flow_id"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        host_url",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"langflow_url"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      ></",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    </",props:{style:{color:"#C9D1D9"}}},{content:"div",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  );",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,s.jsx)(t.p,{children:"Place the component anywhere in your code to display the Chat Widget."}),"\n",(0,s.jsx)(t.h3,{id:"embed-the-chat-widget-with-angular",children:"Embed the chat widget with Angular"}),"\n",(0,s.jsxs)(t.p,{children:["To use the chat widget in Angular, first add this\xa0",(0,s.jsx)(t.code,{children:"<script>"}),"\xa0tag into the Angular\xa0",(0,s.jsx)(t.em,{children:"index.html"}),"\xa0file, inside the\xa0",(0,s.jsx)(t.code,{children:"<body>"}),"\xa0tag."]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script ",props:{style:{color:"#7EE787"}}},{content:"src",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@main/dist/build/static/js/bundle.min.js"',props:{style:{color:"#A5D6FF"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,s.jsxs)(t.p,{children:["When you use a custom web component in an Angular template, the Angular compiler might show a warning when it doesn't recognize the custom elements by default. To suppress this warning, add\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0to the module's\xa0",(0,s.jsx)(t.code,{children:"@NgModule.schemas"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the module file (it typically ends with\xa0",(0,s.jsx)(t.em,{children:".module.ts"}),") where you'd add the\xa0",(0,s.jsx)(t.code,{children:"langflow-chat"}),"\xa0web component."]}),"\n",(0,s.jsxs)(t.li,{children:["Import\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0at the top of the file:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0to the 'schemas' array inside the '@NgModule' decorator:"]}),"\n"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@",props:{style:{color:"#C9D1D9"}}},{content:"NgModule",props:{style:{color:"#D2A8FF"}}},{content:"({",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  declarations: [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    // ... Other components and directives ...",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  imports: [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    // ... Other imported modules ...",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  schemas: [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    CUSTOM_ELEMENTS_SCHEMA  ",props:{style:{color:"#79C0FF"}}},{content:"// Add the CUSTOM_ELEMENTS_SCHEMA here",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"})",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"export class ",props:{style:{color:"#FF7B72"}}},{content:"YourModule",props:{style:{color:"#FFA657"}}},{content:" { }",props:{style:{color:"#C9D1D9"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,s.jsxs)(t.p,{children:["In your Angular project, find the component belonging to the module where\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0was added. Inside the template, add the\xa0",(0,s.jsx)(t.code,{children:"langflow-chat"}),"\xa0tag to include the Chat Widget in your component's view:"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat  ",props:{style:{color:"#7EE787"}}},{content:"chat_inputs",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'\'{"your_key":"value"}\'  ',props:{style:{color:"#A5D6FF"}}},{content:"chat_input_field",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_chat_key"  ',props:{style:{color:"#A5D6FF"}}},{content:"flow_id",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_flow_id"  ',props:{style:{color:"#A5D6FF"}}},{content:"host_url",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"langflow_url"',props:{style:{color:"#A5D6FF"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"javascript"},annotations:[]}]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0is a built-in schema that allows Angular to recognize custom elements. Adding\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"\xa0tells Angular to allow custom elements in your templates, and it will suppress the warning related to unknown elements like\xa0",(0,s.jsx)(t.code,{children:"langflow-chat"}),". Notice that you can only use the Chat Widget in components that are part of the module where you added\xa0",(0,s.jsx)(t.code,{children:"CUSTOM_ELEMENTS_SCHEMA"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"chat-widget-configuration",children:"Chat widget configuration"}),"\n",(0,s.jsx)(t.p,{children:"Use the widget API to customize your Chat Widget:"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:'Props with the type JSON need to be passed as stringified JSONs, with the format {"key":"value"}.'})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bot_message_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Applies custom formatting to bot messages."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_input_field"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Defines the type of the input field for chat messages."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_inputs"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Determines the chat input elements and their respective values."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_output_key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Specifies which output to display if multiple outputs are available."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_position"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Positions the chat window on the screen (options include: top-left, top-center, top-right, center-left, center-right, bottom-right, bottom-center, bottom-left)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_trigger_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Styles the chat trigger button."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chat_window_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Customizes the overall appearance of the chat window."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"error_message_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the format for error messages within the chat window."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"flow_id"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Identifies the flow that the component is associated with."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"height"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the height of the chat window in pixels."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"host_url"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Specifies the URL of the host for chat component communication."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_container_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Applies styling to the container where chat messages are entered."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the style for the chat input field."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"online"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Toggles the online status of the chat component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"online_message"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets a custom message to display when the chat component is online."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"placeholder"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the placeholder text for the chat input field."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"placeholder_sending"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the placeholder text to display while a message is being sent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send_button_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the style for the send button in the chat window."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"send_icon_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the style for the send icon in the chat window."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tweaks"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Applies additional custom adjustments for the associated flow."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"user_message_style"}),(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Determines the formatting for user messages in the chat window."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"width"}),(0,s.jsx)(t.td,{children:"Number"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the width of the chat window in pixels."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"window_title"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Sets the title displayed in the chat window's header or title bar."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"tweaks",children:"Tweaks"}),"\n",(0,s.jsxs)(t.p,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Tweaks"}),"\xa0tab displays the available parameters for your flow. Modifying the parameters changes the code parameters across all windows. For example, changing the\xa0",(0,s.jsx)(t.strong,{children:"Chat Input"}),"\xa0component's\xa0",(0,s.jsx)(t.code,{children:"input_value"}),"\xa0will change that value across all API calls."]}),"\n",(0,s.jsx)(t.h2,{id:"send-image-files-to-your-flow-with-the-api",children:"Send image files to your flow with the API"}),"\n",(0,s.jsxs)(t.p,{children:["For information on sending files to the Langflow API, see ",(0,s.jsx)(t.a,{href:"/api-reference-api-examples#upload-image-files",children:"API examples"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"webhook-curl",children:"Webhook cURL"}),"\n",(0,s.jsxs)(t.p,{children:["When a ",(0,s.jsx)(t.strong,{children:"Webhook"})," component is added to the workspace, a new ",(0,s.jsx)(t.strong,{children:"Webhook cURL"})," tab becomes available in the ",(0,s.jsx)(t.strong,{children:"API"})," pane that contains an HTTP POST request for triggering the webhook component. For example:"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'  "http://127.0.0.1:7860/api/v1/webhook/**YOUR_FLOW_ID**" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"any": "data"}\'',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsxs)(t.p,{children:["To test the ",(0,s.jsx)(t.strong,{children:"Webhook"})," component in your flow, see the ",(0,s.jsx)(t.a,{href:"/components-data#webhook",children:"Webhook component"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},65537:(e,t,o)=>{o.d(t,{A:()=>C});var n=o(96540),s=o(18215),r=o(65627),l=o(56347),c=o(50372),i=o(30604),a=o(11861),d=o(78749);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:s}}=e;return{value:t,label:o,attributes:n,default:s}}))}(o);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function u(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:o}=e;const s=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:o=!1,groupId:s}=e,r=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[a,h]=y({queryString:o,groupId:s}),[g,x]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(o);return[s,(0,n.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:s}),j=(()=>{const e=a??g;return u({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=o(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=o(74848);function m(e){let{className:t,block:o,selectedValue:n,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.a_)(),d=e=>{const t=e.currentTarget,o=i.indexOf(t),s=c[o].value;s!==n&&(a(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;t=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;t=i[o]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":o},t),children:c.map((e=>{let{value:t,label:o,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function b(e){let{lazy:t,children:o,selectedValue:r}=e;const l=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(m,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function C(e){const t=(0,x.A)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(t))}},79329:(e,t,o)=>{o.d(t,{A:()=>l});o(96540);var n=o(18215);const s={tabItem:"tabItem_Ymn6"};var r=o(74848);function l(e){let{children:t,hidden:o,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:o,children:t})}}}]);