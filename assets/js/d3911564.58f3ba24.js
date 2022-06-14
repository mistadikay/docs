"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6487],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2081:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},c="Anatomy of a Smart Contract",l={unversionedId:"develop-smart-contract/intro",id:"develop-smart-contract/intro",title:"Anatomy of a Smart Contract",description:"A smart contract can be considered an instance of a singleton object whose internal state is persisted on the",source:"@site/dev-academy/develop-smart-contract/01-intro.md",sourceDirName:"develop-smart-contract",slug:"/develop-smart-contract/intro",permalink:"/dev-academy/develop-smart-contract/intro",editUrl:"https://github.com/InterWasm/docs/edit/main/dev-academy/develop-smart-contract/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"devAcademy",previous:{title:"Challenge",permalink:"/dev-academy/smart-contract-interaction/challenge"},next:{title:"Developing a Smart Contract",permalink:"/dev-academy/develop-smart-contract/develop"}},u={},p=[{value:"Start with a template",id:"start-with-a-template",level:2},{value:"Project Overview",id:"project-overview",level:2},{value:"Contract State",id:"contract-state",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"Message Definition",id:"message-definition",level:3},{value:"Instantiation Logic",id:"instantiation-logic",level:3},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"Message Definition",id:"message-definition-1",level:3},{value:"Increment",id:"increment",level:4},{value:"Reset",id:"reset",level:4},{value:"Execution Logic",id:"execution-logic",level:3},{value:"QueryMsg",id:"querymsg",level:2},{value:"Message Definition",id:"message-definition-2",level:3},{value:"GetCount",id:"getcount",level:4},{value:"Query Logic",id:"query-logic",level:3},{value:"Building the Contract",id:"building-the-contract",level:2},{value:"Optimizing your build",id:"optimizing-your-build",level:3},{value:"Schemas",id:"schemas",level:2},{value:"Schema Generation",id:"schema-generation",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anatomy-of-a-smart-contract"},"Anatomy of a Smart Contract"),(0,i.kt)("p",null,"A smart contract can be considered an instance of a singleton object whose internal state is persisted on the\nblockchain. Users can trigger state changes or query the contract state through sending the contract JSON formatted execute function calls or query messages."),(0,i.kt)("p",null,"Developing a smart contract mainly revolves around defining the following three functions that constitute the interface of a smart contract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instantiate()"),": serves as the constructor during contract instantiation and provides the initial state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute()"),": gets called when a user wants to invoke a method on the smart contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query()"),": gets called when a user wants to request current-state related data from the smart contract")),(0,i.kt)("p",null,"This section will cover how different instantiate, execute and query messages are defined, along with the implementation of smart contract functions that process those messages."),(0,i.kt)("h2",{id:"start-with-a-template"},"Start with a template"),(0,i.kt)("p",null,"In your workspace directory, you'll want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to quick-start a smart contract project with the recommended folder structure and build options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# install cargo-generate\ncargo install cargo-generate --features vendored-openssl\ncargo generate --git https://github.com/CosmWasm/cosmwasm-template.git --name my-first-contract\ncd my-first-contract\n")),(0,i.kt)("p",null,"The template helps you get started by providing the basic boilerplate and structure for a smart contract. At this point, you may start examining the project contents with your favorite IDE."),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/src")," directory contains the smart contract source code in separate files."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/contract.rs")," contains the main smart contract logic and is where the functions instantiate(), execute() and query() are implemented."),(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/state.rs")," defines how the smart contract state data is represented and the way it will be stored. "),(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/msg.rs")," is where different types of messages and responses the smart contract can receive and return are defined."),(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/error.rs")," defines the error types that can be returned by the smart contract."),(0,i.kt)("li",{parentName:"ul"},"The file ",(0,i.kt)("inlineCode",{parentName:"li"},"src/lib.rs")," is where all the previous modules are exposed and made accessible.")),(0,i.kt)("h2",{id:"contract-state"},"Contract State"),(0,i.kt)("p",null,"Let us start by examining the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/state.rs"),"."),(0,i.kt)("p",null,"The starting template has the following basic state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a singleton struct ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," containing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a 32-bit integer ",(0,i.kt)("inlineCode",{parentName:"li"},"count")),(0,i.kt)("li",{parentName:"ul"},"an address ",(0,i.kt)("inlineCode",{parentName:"li"},"owner"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// src/state.rs\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\nuse cosmwasm_std::Addr;\nuse cw_storage_plus::Item;\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct State {\n    pub count: i32,\n    pub owner: Addr,\n}\n")),(0,i.kt)("p",null,"Smart contracts have the ability to keep persistent state through native LevelDB, a byte-array-based key-value\nstore. As such, any data you wish to persist should be assigned a unique key with which the data can be indexed and later retrieved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/state.rs\npub const STATE: Item<State> = Item::new("state");\n')),(0,i.kt)("p",null,"In the example above, the key ",(0,i.kt)("inlineCode",{parentName:"p"},'"state"')," is used as a prefix."),(0,i.kt)("p",null,"Data can only be persisted as a raw byte array, so any notion of structure or data-type must be expressed as a pair of serializing and deserializing functions. For instance, objects must be stored as bytes, so you must supply both the function that encodes the object into bytes to save it on the blockchain, and the function that decodes the bytes back into the data-types that your contract logic can understand. The choice of byte representation is up to you, so long as it provides a clean, bi-directional mapping."),(0,i.kt)("p",null,"Fortunately, the CosmWasm team have provided utility crates such\nas ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/tree/main/packages/storage"},"cosmwasm_storage"),', which provides convenient\nhigh-level abstractions for data containers such as a "singleton" and "bucket", which automatically provide\nserialization and deserialization for commonly-used types such as structs and Rust numbers.'),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," struct holds both ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),". In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"derive")," attribute is applied to\nauto-implement some useful traits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Serialize"),": provides serialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deserialize"),": provides deserialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Clone"),": makes our struct copyable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug"),": enables our struct to be printed to string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PartialEq"),": gives us equality comparison"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JsonSchema"),": auto-generates a JSON schema for us")),(0,i.kt)("p",null,"The type ",(0,i.kt)("inlineCode",{parentName:"p"},"Addr")," represents a human-readable Bech32 address with a ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," prefix."),(0,i.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,i.kt)("p",null,"Defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/msg.rs"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantiateMsg")," is received when an address tries to instantiate a contract on the blockchain through a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgInstantiateContract")," message. This message provides the contract with initial configuration and state."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"On CosmWasm, the upload of a contract's code and the instantiation of a contract are regarded as\nseparate events, unlike on Ethereum. This is to allow a small set of vetted contract archetypes to exist as\nmultiple instances sharing the same base code but be configured with different parameters (imagine one canonical ERC20, and multiple tokens that use its code)."))),(0,i.kt)("h3",{id:"message-definition"},"Message Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// src/msg.rs\n\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct InstantiateMsg {\n  pub count: i32,\n}\n\n")),(0,i.kt)("p",null,"For our template contract, we will expect a contract creator to supply the initial state in a JSON formatted message as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 100\n}\n')),(0,i.kt)("p",null,"This message arrives embedded in the received ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgInstantiateContract")," message during instantiation. "),(0,i.kt)("h3",{id:"instantiation-logic"},"Instantiation Logic"),(0,i.kt)("p",null,"Defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/contract.rs"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"instantiate()")," function is the first entry-point, or where the contract processes a received ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgInstantiateContract")," message. The instantiation data is extracted from the message and is used to set out the initial state, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n  //An overview of function parameters:\n\n  //"deps" allows us to perform storage related actions, validate addresses and query other smart contracts\n  //"_env" is mainly used to access details about the current state of the blockchain (i.e., block height, time, chain id) \n  //"info" provides access to the message metadata (i.e., sender address, the amount and type of funds)\n  //"msg" is the MsgInstantiateContract payload, which comprises the data received from the contract creator\n  //in JSON format that conforms to the InstantiateMsg struct\n\n  //Introduce a new variable named `state` of type `State`\n  let state = State {\n    //the value for count in the received message is assigned to the variable `count` of the `State` struct\n    count: msg.count,\n    //the sender address of the MsgInstantiateContract is assigned to the variable `owner` of the `State` struct\n    owner: info.sender.clone(),\n  };\n  //Store the contract name and version\n  set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n  //Store the initial state of the contract\n  STATE.save(deps.storage, &state)?;\n  \n  //Form and return an Ok(Response)\n  //The attributes will be included in the JSON formatted response message\n  Ok(Response::new()\n    .add_attribute("method", "instantiate")\n    .add_attribute("owner", info.sender)\n    .add_attribute("count", msg.count.to_string()))\n}\n')),(0,i.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,i.kt)("p",null,"Defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/msg.rs"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," is received when an address tries to invoke one of the smart contract functions through a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract")," message. Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"InstantiateMsg"),", which was a single struct; the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," is an enumerator, which essentially holds a list of possible execute message structs with different names and attributes to account for the different types of functions that\na smart contract can expose to a user. The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," function demultiplexes these different types of messages and forwards them to the appropriate message handler logic."),(0,i.kt)("h3",{id:"message-definition-1"},"Message Definition"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," enum contains the different types of execute messages that our contract can understand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n  Increment {},\n  Reset { count: i32 },\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The line ",(0,i.kt)("inlineCode",{parentName:"p"},'#[serde(rename_all = "snake_case")]')," performs a snake_case conversion (lowercase initials with an underscore between words) on the field names before serialization and deserialization. So, we'll have ",(0,i.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset")," when serializing and deserializing across JSON formatted messages."))),(0,i.kt)("p",null,"At this point, our template contract can accept the following two types of execute messages in JSON format, embedded in a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract")," message:"),(0,i.kt)("h4",{id:"increment"},"Increment"),(0,i.kt)("p",null,"Any address can utilize the Increment function to increment the current count by 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "increment": {}\n}\n')),(0,i.kt)("h4",{id:"reset"},"Reset"),(0,i.kt)("p",null,"The owner of the contract can reset the count to an arbitrary number. The check regarding whether a user is the contract owner is a part of the execution logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reset": {\n    "count": 5\n  }\n}\n')),(0,i.kt)("h3",{id:"execution-logic"},"Execution Logic"),(0,i.kt)("p",null,"Defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/contract.rs"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," function uses Rust's pattern matching to route the received ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," to the appropriate handling logic, by either routing to the function ",(0,i.kt)("inlineCode",{parentName:"p"},"try_increment()")," or  ",(0,i.kt)("inlineCode",{parentName:"p"},"try_reset()")," depending on the type of message received."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n  deps: DepsMut,\n  _env: Env,\n  info: MessageInfo,\n  msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n  match msg {\n    ExecuteMsg::Increment {} => try_increment(deps),\n    ExecuteMsg::Reset { count } => try_reset(deps, info, count),\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {\n  STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n    state.count += 1;\n    Ok(state)\n  })?;\n\n  Ok(Response::new().add_attribute("method", "try_increment"))\n}\n')),(0,i.kt)("p",null,"It is quite straightforward to follow the logic of ",(0,i.kt)("inlineCode",{parentName:"p"},"try_increment()"),". We acquire a mutable reference to the storage to\nupdate the item located at key ",(0,i.kt)("inlineCode",{parentName:"p"},'"state"'),", made accessible through the ",(0,i.kt)("inlineCode",{parentName:"p"},"STATE")," convenience function defined in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"src/state.rs"),". We then update the present state's count by returning an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," result with the new state. Finally, we\nterminate the contract's execution with an acknowledgement of success by returning an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok")," result with the\ndefault ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,i.kt)("p",null,"In this example, the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," is used for simplicity. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," can be manually created to\nprovide the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"messages"),": A list of messages. This is how smart contracts execute other smart contract functions or use native modules."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes"),": A list of key-value pairs to define emitted SDK events that can be subscribed to and parsed by clients."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"events"),": Extra, custom events separate from the main ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm")," one. These will have ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm-")," prepended to the type. These can be used by explorers and applications to report important events or state changes that occurred during the execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": additional data that the contract returns to the client.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\npub fn try_reset(deps: DepsMut, info: MessageInfo, count: i32) -> Result<Response, ContractError> {\n  STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n    if info.sender != state.owner {\n      return Err(ContractError::Unauthorized {});\n    }\n    state.count = count;\n    Ok(state)\n  })?;\n  Ok(Response::new().add_attribute("method", "reset"))\n}\n')),(0,i.kt)("p",null,"The logic for try_reset() is very similar to increment \u2014 except this time, we first check that the message sender is permitted to invoke the reset function. Please, observe the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractError::Unauthorized {}")," to return an error if the sender is not the owner of the contract. Custom error messages can be defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/error.rs"),"."),(0,i.kt)("h2",{id:"querymsg"},"QueryMsg"),(0,i.kt)("p",null,"Defined in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/msg.rs"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," is received when an address tries to query information about the current state of the smart contract. Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteMsg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," is an enumerator and holds a list of possible query message structs with different names and attributes in order to cover the different types of query functions a user can invoke. The ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," function demultiplexes these different types of messages and forwards them to the appropriate message handler logic."),(0,i.kt)("p",null,"In addition to handling how the queries are received, the contract also needs a structured way of outputting query responses. This is accomplished by defining response structs (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"CountResponse"),") in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/msg.rs"),", so the querying party may know what to expect from the JSON response to be received."),(0,i.kt)("h3",{id:"message-definition-2"},"Message Definition"),(0,i.kt)("p",null,"The template contract only supports one type of ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg")," message, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"GetCount"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n  // GetCount returns the current count as a json-encoded number\n  GetCount {},\n}\n\n// We define a custom struct for each query response\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct CountResponse {\n  pub count: i32,\n}\n')),(0,i.kt)("h4",{id:"getcount"},"GetCount"),(0,i.kt)("p",null,"The query message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "get_count": {}\n}\n')),(0,i.kt)("p",null,"The contract should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"CountResponse")," with the current count in JSON format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 5\n}\n')),(0,i.kt)("h3",{id:"query-logic"},"Query Logic"),(0,i.kt)("p",null,"The logic for ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," is similar to that of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()"),", except the fact that the ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," function is called without the need of making a transaction by the end-user. Therefore, the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," can be omitted in the query() function signature as there is no message information present to be processed. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// src/contract.rs\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n  match msg {\n    // Match and route the query message to the appropriate handler\n    QueryMsg::GetCount {} => to_binary(&query_count(deps)?),\n    // Return the response in byte-array format\n  }\n}\n\nfn query_count(deps: Deps) -> StdResult<CountResponse> {\n  let state = STATE.load(deps.storage)?;\n  // Load the current contract state\n  Ok(CountResponse { count: state.count })\n  // Form and return a CountResponse\n}\n')),(0,i.kt)("p",null,"The query() function matches the received message with one of the QueryMsg structs defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/msg.rs")," and  routes the received QueryMsg to the appropriate handling logic before returning a specific query response in byte-array format."),(0,i.kt)("h2",{id:"building-the-contract"},"Building the Contract"),(0,i.kt)("p",null,"To build your contract, run the following command. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo wasm\n")),(0,i.kt)("p",null,"This will check for any preliminary errors and output a .wasm binary under the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/target/wasm32/release"),"."),(0,i.kt)("h3",{id:"optimizing-your-build"},"Optimizing your build"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will need ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," installed to run this command."))),(0,i.kt)("p",null,"You will need to make sure the output WASM binary is as small as possible in order to minimize fees and stay under the size limit for the blockchain. Run the following command in the root directory of your Rust smart contract's project folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,i.kt)("p",null,"This will result in an optimized .wasm binary under the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/artifacts")," in your project directory."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"optional")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You may add the optimization command above in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," for quick access."),(0,i.kt)("p",{parentName:"div"},"This allows running custom scripts in a similar way to what ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," does in the Node ecosystem."),(0,i.kt)("p",{parentName:"div"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-run-script")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install cargo-run-script\n")),(0,i.kt)("p",{parentName:"div"},"Add the script in ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[package.metadata.scripts]\noptimize = """docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n"""\n')),(0,i.kt)("p",{parentName:"div"},"Run the command:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo run-script optimize\n")))),(0,i.kt)("h2",{id:"schemas"},"Schemas"),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"/examples/schema.rs")," contains the configuration for JSON-schema auto-generation.  With the help of schema files, the different data structures that form the smart contract's interface can be represented in JSON format."),(0,i.kt)("h3",{id:"schema-generation"},"Schema Generation"),(0,i.kt)("p",null,"The configuration file should include an entry for each data structure we need a schema for."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// examples/schema.rs\n\nuse std::env::current_dir;\nuse std::fs::create_dir_all;\n\nuse cosmwasm_schema::{export_schema, remove_schemas, schema_for};\n\nuse my_first_contract::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};\nuse my_first_contract::state::State;\n\nfn main() {\n  let mut out_dir = current_dir().unwrap();\n  out_dir.push("schema");\n  create_dir_all(&out_dir).unwrap();\n  remove_schemas(&out_dir).unwrap();\n\n  export_schema(&schema_for!(InstantiateMsg), &out_dir);\n  export_schema(&schema_for!(ExecuteMsg), &out_dir);\n  export_schema(&schema_for!(QueryMsg), &out_dir);\n  export_schema(&schema_for!(State), &out_dir);\n  export_schema(&schema_for!(CountResponse), &out_dir);\n}\n')),(0,i.kt)("p",null,"You can then build the schemas with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo schema\n")),(0,i.kt)("p",null,"The newly generated schemas should be accessible in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/schema")," directory.\nThe following is an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"/schema/query_msg.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "QueryMsg",\n  "anyOf": [\n    {\n      "type": "object",\n      "required": [\n        "get_count"\n      ],\n      "properties": {\n        "get_count": {\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You can use an online tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"JSON Schema Validator")," to test ",(0,i.kt)("a",{parentName:"p",href:"/dev-academy/develop-smart-contract/intro#getcount"},"your input")," against the generated JSON schema."))}m.isMDXComponent=!0}}]);