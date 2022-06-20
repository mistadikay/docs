"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1335],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],c={sidebar_position:5},i="Deployment and Interaction",l={unversionedId:"getting-started/interact-with-contract",id:"getting-started/interact-with-contract",title:"Deployment and Interaction",description:"We have the wasm binary ready. Now it is time to deploy it to the testnet and start interacting. You can use the wasmd Go CLI or the CosmJS Node Console as you prefer.",source:"@site/docs/02-getting-started/05-interact-with-contract.md",sourceDirName:"02-getting-started",slug:"/getting-started/interact-with-contract",permalink:"/fr/docs/1.0/getting-started/interact-with-contract",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/05-interact-with-contract.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Downloading and Compiling a Contract",permalink:"/fr/docs/1.0/getting-started/compile-contract"},next:{title:"Next Steps",permalink:"/fr/docs/1.0/getting-started/next-steps"}},d={},u=[{value:"wasmd Go CLI",id:"go-cli",level:2},{value:"Instantiating the Contract",id:"instantiating-the-contract",level:3},{value:"Contract Interaction",id:"contract-interaction",level:3},{value:"CosmJS Node Console",id:"node-console",level:2},{value:"Instantiating the Contract",id:"instantiating-the-contract-1",level:3},{value:"Contract Interaction",id:"contract-interaction-1",level:3}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment-and-interaction"},"Deployment and Interaction"),(0,r.kt)("p",null,"We have the wasm binary ready. Now it is time to deploy it to the testnet and start interacting. You can use the ",(0,r.kt)("a",{parentName:"p",href:"#go-cli"},"wasmd Go CLI")," or the ",(0,r.kt)("a",{parentName:"p",href:"#node-console"},"CosmJS Node Console")," as you prefer."),(0,r.kt)("h2",{id:"go-cli"},"wasmd Go CLI"),(0,r.kt)("p",null,"We generated a wasm binary executable in the previous chapter. Let's upload the code to the blockchain. Once that is complete, you can download the bytecode to verify it."),(0,r.kt)("p",null,"See the list of codes that was uploaded to the testnet previously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasmd query wasm list-code $NODE\n# Here is an alternative if you haven't set up the environment variables to interact with the testnet previously:\nwasmd query wasm list-code --node https://rpc.malaga-420.cosmwasm.com\n")),(0,r.kt)("p",null,"Now let us store the bytecode on chain and acquire the Code Id. The Code Id will later be used to create an instance of the cw_namespace contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# If you have already set up the environment variables, you can use the following command:\nRES=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from wallet $TXFLAG -y --output json -b block)\n# Otherwise, you will have to type in the following command to upload the wasm binary to the testnet:\nRES=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from wallet --node https://rpc.malaga-420.cosmwasm.com:443 --chain-id malaga-420 --gas-prices 0.25umlg --gas auto --gas-adjustment 1.3 -y --output json -b block)\n# The response contains the Code Id of the uploaded wasm binary.\necho $RES\n# The following is an easier way to get the Code Id from the response:\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,r.kt)("p",null,"Let's see the list of contracts instantiated using the Code Id above. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,r.kt)("p",null,"The response should be an empty list as we have not instantiated any contract yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,r.kt)("p",null,"Before we instantiate a contract with the Code Id and interact with it, let us check if the code stored on the blockchain is indeed the cw_namespace.wasm binary we uploaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Download the wasm binary from the chain and compare it to the original one\nwasmd query wasm code $CODE_ID $NODE download.wasm\n# The two binaries should be identical\ndiff artifacts/cw_nameservice.wasm download.wasm\n")),(0,r.kt)("h3",{id:"instantiating-the-contract"},"Instantiating the Contract"),(0,r.kt)("p",null,"We can now create an instance of the wasm contract. Following the instantiation, we can make queries and this time receive non-empty responses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Prepare the instantiation message\nINIT=\'{"purchase_price":{"amount":"100","denom":"umlg"},"transfer_price":{"amount":"999","denom":"umlg"}}\'\n# Instantiate the contract\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet --label "name service" $TXFLAG -y --no-admin\n\n# Check the contract details and account balance\nwasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r \'.contracts[-1]\')\necho $CONTRACT\n\n# See the contract details\nwasmd query wasm contract $CONTRACT $NODE\n# Check the contract balance\nwasmd query bank balances $CONTRACT $NODE\n\n# Upon instantiation the cw_nameservice contract will store the instatiation message data in the contract\'s storage with the storage key "config".\n# Query the entire contract state\nwasmd query wasm contract-state all $CONTRACT $NODE\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'models:\n- key: 0006636F6E666967\n  value: eyJwdXJjaGFzZV9wcmljZSI6eyJkZW5vbSI6InVtbGciLCJhbW91bnQiOiIxMDAifSwidHJhbnNmZXJfcHJpY2UiOnsiZGVub20iOiJ1bWxnIiwiYW1vdW50IjoiOTk5In19\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Note that the storage key "config" is hex encoded and prefixed with two bytes indicating its length\n# echo -n config | xxd -ps\n# gives 636f6e666967\n# thus we have the following output: 0006636f6e666967\n \n# You can also query a storage key directly\nwasmd query wasm contract-state raw $CONTRACT 0006636f6e666967 $NODE --hex\n\n# The base64 encoded response is the stored value corresponding to the storage key "config" and reads as follows:\n# {"purchase_price":{"denom":"umlg","amount":"100"},"transfer_price":{"denom":"umlg","amount":"999"}}\n\n# Note that keys are hex encoded, and the values are base64 encoded.\n# To view the returned data (assuming it is ascii), try something like:\n# (Note that in many cases the binary data returned is not in ascii format, thus the encoding)\nwasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r \'.models[0].key\' | xxd -r -ps\nwasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r \'.models[0].value\' | base64 -d\n\n# The cw_namespace contract implements a QueryMsg that returns the contents of the storage\n# So, we can also try "smart querying" the contract\nCONFIG_QUERY=\'{"config": {}}\'\nwasmd query wasm contract-state smart $CONTRACT "$CONFIG_QUERY" $NODE --output json\n\n# and the contract will return the following response:\n# {"data":{"purchase_price":{"denom":"umlg","amount":"100"},"transfer_price":{"denom":"umlg","amount":"999"}}}\n')),(0,r.kt)("h3",{id:"contract-interaction"},"Contract Interaction"),(0,r.kt)("p",null,"Now that the contract is instantiated, let's register a name and transfer it to another address by paying the transfer fee."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Register a name for the wallet address\nREGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100umlg --from wallet $TXFLAG -y\n\n# Query the owner of the name record\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n# {"data":{"address":"wasm1pze5wsf0dg0fa4ysnttugn0m22ssf3t4a9yz3h"}}\n\n# Transfer the ownership of the name record to wallet2 (change the "to" address to wallet2 generated during environment setup)\nwasmd keys list\nTRANSFER=\'{"transfer":{"name":"fred","to":"wasm15522nrwtvsf7mt2vhehhwuw9qpsxw2mghqzu50"}}\'\nwasmd tx wasm execute $CONTRACT "$TRANSFER" --amount 999umlg --from wallet $TXFLAG -y\n\n# Query the record owner again to see the new owner address:\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n# {"data":{"address":"wasm15522nrwtvsf7mt2vhehhwuw9qpsxw2mghqzu50"}}\n')),(0,r.kt)("h2",{id:"node-console"},"CosmJS Node Console"),(0,r.kt)("p",null,"The binary can be uploaded to the chain, instantiated and interacted with using the CosmJS Node Console as well."),(0,r.kt)("p",null,"Open a new Terminal window and initialize a CosmJS CLI session with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.28.1 --init https://raw.githubusercontent.com/InterWasm/cw-plus-helpers/main/base.ts\n")),(0,r.kt)("p",null,"Now let us import the necessary utils, generate a wallet address and upload the wasm binary to the chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { calculateFee, StdFee} from "@cosmjs/stargate"\nimport { coin } from "@cosmjs/amino"\n\nconst [addr, client] = await useOptions(malagaOptions).setup("password");\n// Make sure you use the right path for the wasm binary\nconst wasm = fs.readFileSync("/home/username/.../cw-contracts/contracts/nameservice/artifacts/cw_nameservice.wasm")\nconst uploadFee = calculateFee(malagaOptions.fees.upload, malagaOptions.gasPrice)\nconst result = await client.upload(addr, wasm, uploadFee)\nconsole.log(result)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  originalSize: 140819,\n  originalChecksum: 'f388fff922ffbb3845311608887636346eac6246ee20578e11e3577226466e7b',\n  compressedSize: 52176,\n  compressedChecksum: 'e5a1d70aedf1c2d6b1a3cbeec2981ac84c3ae48f642e221608b1624ccc6d65ba',\n  codeId: 17,\n  logs: [ { msg_index: 0, log: '', events: [Array] } ],\n  transactionHash: '34FA5BE9991578C56961C6BA7F5B25474BAFCE44954035217A93FE91BCC673A1'\n}\n")),(0,r.kt)("p",null,"Please note the ",(0,r.kt)("inlineCode",{parentName:"p"},"codeId")," of the uploaded wasm binary. This is the codeId that will be used to instantiate the contract."),(0,r.kt)("p",null,"You may compare the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"originalChecksum")," with the contents of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/checksums.txt")," to make sure the code on the chain is identical to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cw_nameservice.wasm")," binary."),(0,r.kt)("p",null,"For future reference, you may get the checksum for a given Code Id as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//If you haven\'t created/loaded a wallet yet, you can do so with the following command:\n//const [addr, client] = await useOptions(malagaOptions).setup("password"); \n\nconst codeIdToVerify = 17\nconst codes = await client.getCodes() \nconst hash = codes.filter((x) => x.id === codeIdToVerify).map((x) => x.checksum)[0];\nconsole.log(hash)\n')),(0,r.kt)("p",null,"You may then compile the contract code yourself, optimize the resulting binary and compare the checksum to the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," to make sure the code on the chain was not tampered with."),(0,r.kt)("h3",{id:"instantiating-the-contract-1"},"Instantiating the Contract"),(0,r.kt)("p",null,"Now, the wasm binary is uploaded to the chain with a Code Id and is ready to be instantiated."),(0,r.kt)("p",null,"First define a ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultFee")," to be passed into instantiation and execution functions later on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const defaultFee: StdFee = { amount: [{amount: "200000", denom: "umlg",},], gas: "200000",};\n')),(0,r.kt)("p",null,"Create a cw_nameservice contract instance using the code id we have received upon upload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//Replace the Code Id with the one you have received earlier\nconst codeId = 17 \n//Define the instantiate message\nconst instantiateMsg = {"purchase_price":{"amount":"100","denom":"umlg"},"transfer_price":{"amount":"999","denom":"umlg"}}\n//Instantiate the contract\nconst instantiateResponse = await client.instantiate(addr, codeId, instantiateMsg, "Our Name Service", defaultFee)\n\nconsole.log(instantiateResponse)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  contractAddress: 'wasm1s66zhks8v3fm24974crzxufh7w6ktt69jq8e3zt8q7cyvr52vlqqlzl7sc',\n  logs: [ { msg_index: 0, log: '', events: [Array] } ],\n  transactionHash: '27F4B6B41C36AB6B8324C125EFAE6C535093A6229CDF3665B998CD071E1566E2'\n}\n")),(0,r.kt)("p",null,"We've successfully instantiated the contract and have a contract address for the new instance."),(0,r.kt)("p",null,"The list of contracts instantiated using a certain codeId can be queried using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const contracts = await client.getContracts(17)\nconsole.log(contracts);\n")),(0,r.kt)("h3",{id:"contract-interaction-1"},"Contract Interaction"),(0,r.kt)("p",null,"Now let us register a name on the nameservice contract instance and transfer it to another address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//Enable REPL editor mode to edit multiple lines of code\n.editor\n\nconst executeResponse = await client.execute(\n         addr, \n         instantiateResponse.contractAddress,\n         {\n           register:{name:"fred"}\n         },\n         defaultFee,\n         \'\',\n         [coin(100, "umlg")]\n       )\n//Exit the editor using `^D` to execute the code entered\n^D\n')),(0,r.kt)("p",null,"Query the name record to see the owner address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const queryResponse = await client.queryContractSmart(instantiateResponse.contractAddress, {resolve_record: {name:"fred"}})\nconsole.log(queryResponse)\n//It should match your wallet address\nconsole.log(addr)\n')),(0,r.kt)("p",null,"Now, let us create another wallet and transfer the ownership of the name to the new wallet address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const [anotherAddress, anotherClient] = await useOptions(malagaOptions).setup("password",".another_wallet.key");\n\n//Enable REPL editor mode to edit multiple lines of code\n.editor\n\nconst executeResponse = await client.execute(\n         addr, \n         instantiateResponse.contractAddress,\n         {\n          transfer:{\n            name:"fred",\n            to:anotherAddress\n          }\n         },\n         defaultFee,\n         \'\',\n         [coin(999, "umlg")]\n       )\n')),(0,r.kt)("p",null,"Query the name record one more time to see the address for the new owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const queryResponse_2 = await client.queryContractSmart(instantiateResponse.contractAddress, {resolve_record: {name:"fred"}})\nconsole.log(queryResponse_2)\n//The response should match the new wallet address after the change of ownership\nconsole.log(anotherAddress)\n')))}p.isMDXComponent=!0}}]);