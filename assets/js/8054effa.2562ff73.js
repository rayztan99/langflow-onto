"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1394],{5841:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/tool-calling-agent-add-chat-add13631186c9475f8e74bdcb9b0446e.png"},30208:(o,t,e)=>{e.r(t),e.d(t,{CH:()=>p,assets:()=>i,chCodeConfig:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Agents/agent-tool-calling-agent-component","title":"Create a problem-solving agent","description":"Developing agents in Langchain is complex.","source":"@site/docs/Agents/agent-tool-calling-agent-component.md","sourceDirName":"Agents","slug":"/agents-tool-calling-agent-component","permalink":"/agents-tool-calling-agent-component","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Create a problem-solving agent","slug":"/agents-tool-calling-agent-component"},"sidebar":"docs","previous":{"title":"Agents overview","permalink":"/agents-overview"},"next":{"title":"API keys","permalink":"/configuration-api-keys"}}');var s=e(74848),l=e(28453),r=e(24754);const c={title:"Create a problem-solving agent",slug:"/agents-tool-calling-agent-component"},a=void 0,i={},p={annotations:r.hk,Code:r.Cy},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a problem-solving agent with AgentComponent",id:"create-a-problem-solving-agent-with-agentcomponent",level:2},{value:"Solve problems with the agent",id:"solve-problems-with-the-agent",level:2},{value:"Edit a tool&#39;s metadata",id:"edit-a-tools-metadata",level:3},{value:"Use an agent as a tool",id:"use-an-agent-as-a-tool",level:2},{value:"Add custom components as tools",id:"components-as-tools",level:2},{value:"Make any component a tool",id:"make-any-component-a-tool",level:2},{value:"Use the Run Flow component as a tool",id:"use-the-run-flow-component-as-a-tool",level:2}];function g(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...o.components};return p||y("CH",!1),p.Code||y("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,s.jsxs)(t.p,{children:["Developing ",(0,s.jsx)(t.strong,{children:"agents"})," in Langchain is complex."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AgentComponent"})," is a component for easily creating an AI agent capable of analyzing tasks using tools you provide."]}),"\n",(0,s.jsxs)(t.p,{children:["The component contains all of the elements you'll need for creating an agent. Instead of managing LLM models and providers, pick your model and enter your API key. Instead of connecting a ",(0,s.jsx)(t.strong,{children:"Prompt"})," component, enter instructions in the component's ",(0,s.jsx)(t.strong,{children:"Agent Instruction"})," fields."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tool calling agentcomponent",src:e(48284).A+"",width:"864",height:"1728"})}),"\n",(0,s.jsxs)(t.p,{children:["Learn how to build a flow starting with the ",(0,s.jsx)(t.strong,{children:"Tool calling agent"})," component, and see how it can help you solve problems."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://platform.openai.com/",children:"An OpenAI API key"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.searchapi.io/",children:"A Search API key"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-problem-solving-agent-with-agentcomponent",children:"Create a problem-solving agent with AgentComponent"}),"\n",(0,s.jsxs)(t.p,{children:["Create a problem-solving agent in Langflow, starting with the ",(0,s.jsx)(t.strong,{children:"Tool calling agent"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"New Flow"}),", and then click ",(0,s.jsx)(t.strong,{children:"Blank Flow"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click and drag an ",(0,s.jsx)(t.strong,{children:"Agent"})," component to your workspace.\nThe default settings are acceptable for now, so this guide assumes you're using ",(0,s.jsx)(t.strong,{children:"Open AI"})," for the LLM."]}),"\n",(0,s.jsxs)(t.li,{children:["Add your ",(0,s.jsx)(t.strong,{children:"Open AI API Key"})," to the ",(0,s.jsx)(t.strong,{children:"Agent"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["Add ",(0,s.jsx)(t.strong,{children:"Chat input"})," and ",(0,s.jsx)(t.strong,{children:"Chat output"})," components to your flow, and connect them to the tool calling agent."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat with agent component",src:e(5841).A+"",width:"2266",height:"1620"})}),"\n",(0,s.jsxs)(t.p,{children:["This basic flow enables you to chat with the agent with the ",(0,s.jsx)(t.strong,{children:"Playground"})," after you've connected some ",(0,s.jsx)(t.strong,{children:"Tools"}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Connect the ",(0,s.jsx)(t.strong,{children:"Search API"})," tool component to your agent."]}),"\n",(0,s.jsxs)(t.li,{children:["Add your ",(0,s.jsx)(t.strong,{children:"Search API key"})," to the component.\nYour agent can now query the Search API for information."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect a ",(0,s.jsx)(t.strong,{children:"Calculator"})," tool for solving basic math problems."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect an ",(0,s.jsx)(t.strong,{children:"API Request"})," component to the agent.\nThis component is not in the ",(0,s.jsx)(t.strong,{children:"Tools"})," category, but the agent can still use it as a tool by enabling ",(0,s.jsx)(t.strong,{children:"Tool Mode"}),".\n",(0,s.jsx)(t.strong,{children:"Tool Mode"})," makes a component into a tool by adding a ",(0,s.jsx)(t.strong,{children:"Toolset"})," port that can be connected to an agent's ",(0,s.jsx)(t.strong,{children:"Tools"})," port.\nTo enable ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," on the component, click ",(0,s.jsx)(t.strong,{children:"Tool Mode"}),".\nThe component's fields change dynamically based on the mode it's in."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat with agent component",src:e(50594).A+"",width:"1786",height:"1664"})}),"\n",(0,s.jsx)(t.h2,{id:"solve-problems-with-the-agent",children:"Solve problems with the agent"}),"\n",(0,s.jsx)(t.p,{children:"Your agent now has tools for performing a web search, doing basic math, and performing API requests. You can solve many problems with just these capabilities."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Your tabletop game group cancelled, and you're stuck at home.\nPoint ",(0,s.jsx)(t.strong,{children:"API Request"})," to an online rules document, tell your agent ",(0,s.jsx)(t.code,{children:"You are a fun game organizer who uses the tools at your disposal"}),", and play a game."]}),"\n",(0,s.jsxs)(t.li,{children:["You need to learn a new software language quickly.\nPoint ",(0,s.jsx)(t.strong,{children:"API Request"})," to some docs, tell your agent ",(0,s.jsx)(t.code,{children:"You are a knowledgeable software developer who uses the tools at your disposal"}),", and start learning."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["See what problems you can solve with this flow. As your problem becomes more specialized, add a tool. For example, the ",(0,s.jsx)(t.a,{href:"/tutorials-math-agent",children:"math agent tutorial project"})," adds a Python REPL component to solve math problems that are too challenging for the calculator."]}),"\n",(0,s.jsx)(t.h3,{id:"edit-a-tools-metadata",children:"Edit a tool's metadata"}),"\n",(0,s.jsxs)(t.p,{children:["To edit a tool's metadata, click the ",(0,s.jsx)(t.strong,{children:"Edit Tools"})," button in the tool to modify its ",(0,s.jsx)(t.code,{children:"name"})," or ",(0,s.jsx)(t.code,{children:"description"})," metadata. These fields help connected agents understand how to use the tool, without having to modify the agent's prompt instructions."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, the ",(0,s.jsx)(t.a,{href:"/components-data#url",children:"URL"})," component has three tools available when ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," is enabled."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Tool Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"URL-fetch_content"})}),(0,s.jsx)(t.td,{children:"Use this tool to fetch and retrieve raw content from a URL, including HTML and other structured data. The full response content is returned."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"URL-fetch_content_text"})}),(0,s.jsx)(t.td,{children:"Use this tool to fetch and extract clean, readable text content from a webpage. Only plain text content is returned."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"URL-as_dataframe"})}),(0,s.jsx)(t.td,{children:"Use this tool to fetch structured data from a URL and convert it into a tabular format. Data is returned in a structured DataFrame table format."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["A connected agent will have a clear idea of each tool's capabilities based on the ",(0,s.jsx)(t.code,{children:"name"})," and ",(0,s.jsx)(t.code,{children:"description"})," metadata. If you think the agent is using a tool incorrectly, edit a tool's metadata to help it understand the tool better."]}),"\n",(0,s.jsx)(t.p,{children:"Tool names and descriptions can be edited, but the default tool identifiers cannot be changed. If you want to change the tool identifier, create a custom component."}),"\n",(0,s.jsxs)(t.p,{children:["To see which tools the agent is using and how it's using them, ask the agent, ",(0,s.jsx)(t.code,{children:"What tools are you using to answer my questions?"})]}),"\n",(0,s.jsx)(t.h2,{id:"use-an-agent-as-a-tool",children:"Use an agent as a tool"}),"\n",(0,s.jsxs)(t.p,{children:["The agent component itself also supports ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," for creating multi-agent flows."]}),"\n",(0,s.jsx)(t.p,{children:"Add an agent to your problem-solving flow that uses a different OpenAI model for more specialized problem solving."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click and drag an ",(0,s.jsx)(t.strong,{children:"Agent"})," component to your workspace."]}),"\n",(0,s.jsxs)(t.li,{children:["Add your ",(0,s.jsx)(t.strong,{children:"Open AI API Key"})," to the ",(0,s.jsx)(t.strong,{children:"Agent"})," component."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Model Name"})," field, select ",(0,s.jsx)(t.code,{children:"gpt-4o"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," to use this new agent as a tool."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect the new agent's ",(0,s.jsx)(t.strong,{children:"Toolset"})," port to the previously created agent's ",(0,s.jsx)(t.strong,{children:"Tools"})," port."]}),"\n",(0,s.jsxs)(t.li,{children:["Connect ",(0,s.jsx)(t.strong,{children:"Search API"})," and ",(0,s.jsx)(t.strong,{children:"API Request"})," to the new agent.\nThe new agent will use ",(0,s.jsx)(t.code,{children:"gpt-4o"})," for the larger tasks of scraping and searching information that requires large context windows.\nThe problem-solving agent will now use this agent as a tool, with its unique LLM and toolset."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"The tool calling agent as a tool",src:e(90414).A+"",width:"2498",height:"1504"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["The new agent's metadata can be edited to help the problem-solving agent understand how to use it.\nClick ",(0,s.jsx)(t.strong,{children:"Edit Tools"})," to modify the new agent's ",(0,s.jsx)(t.code,{children:"name"})," or ",(0,s.jsx)(t.code,{children:"description"})," metadata so its usage is clear to the problem-solving agent.\nFor example, the default tool name is ",(0,s.jsx)(t.code,{children:"Agent"}),". Edit the name to ",(0,s.jsx)(t.code,{children:"Agent-gpt-4o"}),", and edit the description to ",(0,s.jsx)(t.code,{children:"Use the gpt-4o model for complex problem solving"}),". The problem-solving agent will understand that this is the ",(0,s.jsx)(t.code,{children:"gpt-4o"})," agent, and will use it for tasks requiring a larger context window."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"components-as-tools",children:"Add custom components as tools"}),"\n",(0,s.jsx)(t.p,{children:"An agent can use custom components as tools."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To add a custom component to the problem-solving agent flow, click ",(0,s.jsx)(t.strong,{children:"New Custom Component"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add custom Python code to the custom component.\nHere's an example text analyzer for sentiment analysis."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.custom ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Component",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.io ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" MessageTextInput, Output",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.schema ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Data",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" re",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"class ",props:{style:{color:"#FF7B72"}}},{content:"TextAnalyzerComponent",props:{style:{color:"#FFA657"}}},{content:"(",props:{style:{color:"#C9D1D9"}}},{content:"Component",props:{style:{color:"#79C0FF"}}},{content:"):",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    display_name ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"Text Analyzer"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    description ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"Analyzes and transforms input text."',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    documentation: ",props:{style:{color:"#C9D1D9"}}},{content:"str ",props:{style:{color:"#79C0FF"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"http://docs.langflow.org/components/custom"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    icon ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"chart-bar"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    name ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:'"TextAnalyzerComponent"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    inputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        MessageTextInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"input_text"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Input Text"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Enter text to analyze"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            value",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Hello, World!"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"            tool_mode",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"True",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    outputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        Output(",props:{style:{color:"#C9D1D9"}}},{content:"display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Analysis Result"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"output"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"method",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"analyze_text"',props:{style:{color:"#A5D6FF"}}},{content:"),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    def ",props:{style:{color:"#FF7B72"}}},{content:"analyze_text",props:{style:{color:"#D2A8FF"}}},{content:"(self) -> Data:",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        text ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"self",props:{style:{color:"#79C0FF"}}},{content:".input_text",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        # Perform text analysis",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"        word_count ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"len",props:{style:{color:"#79C0FF"}}},{content:"(text.split())",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        char_count ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"len",props:{style:{color:"#79C0FF"}}},{content:"(text)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        sentence_count ",props:{style:{color:"#C9D1D9"}}},{content:"= ",props:{style:{color:"#FF7B72"}}},{content:"len",props:{style:{color:"#79C0FF"}}},{content:"(re.findall(",props:{style:{color:"#C9D1D9"}}},{content:"r",props:{style:{color:"#FF7B72"}}},{content:"'",props:{style:{color:"#A5D6FF"}}},{content:"\\w",props:{style:{color:"#79C0FF"}}},{content:"+",props:{style:{color:"#FF7B72"}}},{content:"[.!?]",props:{style:{color:"#79C0FF"}}},{content:"'",props:{style:{color:"#A5D6FF"}}},{content:", text))",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        # Transform text",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"        reversed_text ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" text[::",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"1",props:{style:{color:"#79C0FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        uppercase_text ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" text.upper()",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        analysis_result ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "original_text"',props:{style:{color:"#A5D6FF"}}},{content:": text,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "word_count"',props:{style:{color:"#A5D6FF"}}},{content:": word_count,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "character_count"',props:{style:{color:"#A5D6FF"}}},{content:": char_count,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "sentence_count"',props:{style:{color:"#A5D6FF"}}},{content:": sentence_count,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "reversed_text"',props:{style:{color:"#A5D6FF"}}},{content:": reversed_text,",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'            "uppercase_text"',props:{style:{color:"#A5D6FF"}}},{content:": uppercase_text",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        ",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" Data(",props:{style:{color:"#C9D1D9"}}},{content:"value",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"analysis_result)",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        self",props:{style:{color:"#79C0FF"}}},{content:".status ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" data",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        return",props:{style:{color:"#FF7B72"}}},{content:" data",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["To enable the custom component as a tool, click ",(0,s.jsx)(t.strong,{children:"Tool Mode"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Connect the tool output to the agent's tools input."}),"\n",(0,s.jsxs)(t.li,{children:["Ask the agent, ",(0,s.jsx)(t.code,{children:"What tools are you using to answer my questions?"}),"\nYour response will be similar to the following, and will include your custom component."]}),"\n"]}),"\n",(0,s.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"I have access to several tools that assist me in answering your questions, including:",props:{}}]},{tokens:[{content:"Search API: This allows me to search for recent information or results on the web.",props:{}}]},{tokens:[{content:"HTTP Requests: I can make HTTP requests to various URLs to retrieve data or interact with APIs.",props:{}}]},{tokens:[{content:"Calculator: I can evaluate basic arithmetic expressions.",props:{}}]},{tokens:[{content:"Text Analyzer: I can analyze and transform input text.",props:{}}]},{tokens:[{content:"Current Date and Time: I can retrieve the current date and time in various time zones.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,s.jsx)(t.h2,{id:"make-any-component-a-tool",children:"Make any component a tool"}),"\n",(0,s.jsxs)(t.p,{children:["If the component you want to use as a tool doesn't have a ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," button, add ",(0,s.jsx)(t.code,{children:"tool_mode=True"})," to one of the component's inputs, and connect the new ",(0,s.jsx)(t.strong,{children:"Toolset"})," output to the agent's ",(0,s.jsx)(t.strong,{children:"Tools"})," input."]}),"\n",(0,s.jsxs)(t.p,{children:["Langflow supports ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," for the following data types:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"DataInput"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"DataFrameInput"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"PromptInput"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"MessageTextInput"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"MultilineInput"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"DropdownInput"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For example, the ",(0,s.jsx)(t.a,{href:"#components-as-tools",children:"components as tools"})," example above adds ",(0,s.jsx)(t.code,{children:"tool_mode=True"})," to the ",(0,s.jsx)(t.code,{children:"MessageTextInput"})," input so the custom component can be used as a tool."]}),"\n",(0,s.jsx)(p.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"inputs ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    MessageTextInput(",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"input_text"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        display_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Input Text"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        info",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Enter text to analyze"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        value",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Hello, World!"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"        tool_mode",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"True",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    ),",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"]",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,s.jsx)(t.h2,{id:"use-the-run-flow-component-as-a-tool",children:"Use the Run Flow component as a tool"}),"\n",(0,s.jsxs)(t.p,{children:["An agent can use flows that are saved in your workspace as tools with the ",(0,s.jsx)(t.a,{href:"/components-logic#run-flow",children:"Run flow"})," component."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To add a ",(0,s.jsx)(t.strong,{children:"Run flow"})," component, click and drag a ",(0,s.jsx)(t.strong,{children:"Run flow"})," component to your workspace."]}),"\n",(0,s.jsx)(t.li,{children:"Select the flow you want the agent to use as a tool."}),"\n",(0,s.jsxs)(t.li,{children:["Enable ",(0,s.jsx)(t.strong,{children:"Tool Mode"})," in the component."]}),"\n",(0,s.jsx)(t.li,{children:"Connect the tool output to the agent's tools input."}),"\n",(0,s.jsxs)(t.li,{children:["To enable tool mode, select a ",(0,s.jsx)(t.strong,{children:"Flow"})," in the ",(0,s.jsx)(t.strong,{children:"Run flow"})," component, and then click ",(0,s.jsx)(t.strong,{children:"Tool Mode"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Ask the agent, ",(0,s.jsx)(t.code,{children:"What tools are you using to answer my questions?"}),"\nYour flow should be visible in the response as a tool."]}),"\n"]})]})}function u(o={}){const{wrapper:t}={...(0,l.R)(),...o.components};return t?(0,s.jsx)(t,{...o,children:(0,s.jsx)(g,{...o})}):g(o)}function y(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},48284:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/tool-calling-agent-component-05bf4384404781510bc02454d867c342.png"},50594:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/tool-calling-agent-add-tools-c6a8fb643df51ff62d1da858d583d15b.png"},90414:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/tool-calling-agent-as-tool-c3ad685e87943112803cf97992cb17b2.png"}}]);