"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[901],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=m(t),u=o,k=l["".concat(c,".").concat(u)]||l[u]||p[u]||a;return t?r.createElement(k,s(s({ref:n},d),{},{components:t})):r.createElement(k,s({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const a={description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken."},s="Context Menus",i={unversionedId:"interactions/context-menus",id:"interactions/context-menus",title:"Context Menus",description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken.",source:"@site/docs/interactions/context-menus.mdx",sourceDirName:"interactions",slug:"/interactions/context-menus",permalink:"/interactions/context-menus",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/interactions/context-menus.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Tripathi",lastUpdatedAt:1668607495,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken."},sidebar:"guideSidebar",previous:{title:"Modals & Text Inputs",permalink:"/interactions/modals"},next:{title:"Popular Topics",permalink:"/popular-topics"}},c={},m=[{value:"User commands",id:"user-commands",level:2},{value:"Message commands",id:"message-commands",level:2},{value:"Context menu notes",id:"context-menu-notes",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},p=d("DocsLink"),l=d("DiscordMessages"),u=d("DiscordMessage"),k=d("DiscordInteraction"),f={toc:m};function g(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"context-menus"},"Context Menus"),(0,o.kt)("p",null,'These application commands are situated under the "Apps" section when you right-click a user or a message. They act like interactions, except they take a ',(0,o.kt)(p,{reference:"disnake.User",mdxType:"DocsLink"})," or ",(0,o.kt)(p,{reference:"disnake.Message",mdxType:"DocsLink"})," object along with ",(0,o.kt)(p,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:t(2193).Z,alt:"Context Menu Introduction",width:"70%"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For more specific annotations, you can use ",(0,o.kt)(p,{reference:"disnake.UserCommandInteraction",mdxType:"DocsLink"})," or ",(0,o.kt)(p,{reference:"disnake.MessageCommandInteraction",mdxType:"DocsLink"})," instead of ",(0,o.kt)(p,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"})," for the respective commands.")),(0,o.kt)("h2",{id:"user-commands"},"User commands"),(0,o.kt)(l,{mdxType:"DiscordMessages"},(0,o.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(k,{profile:"user",command:!0,mdxType:"DiscordInteraction"},"User Info")),"Username: AbhigyanTrips#2474",(0,o.kt)("br",null),"Bot: False")),(0,o.kt)("br",null),(0,o.kt)("p",null,"The function below should have only one required argument, which is an instance of ",(0,o.kt)(p,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@bot.user_command(name="User Info")\nasync def avatar(inter: disnake.ApplicationCommandInteraction, user: disnake.User):\n    await inter.response.send_message(f"Username: {user}\\nBot: {user.bot}")\n')),(0,o.kt)("h2",{id:"message-commands"},"Message commands"),(0,o.kt)(l,{mdxType:"DiscordMessages"},(0,o.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,o.kt)("div",{slot:"interactions"},(0,o.kt)(k,{profile:"user",command:!0,mdxType:"DiscordInteraction"},"Reverse")),".desrever si egassem sihT")),(0,o.kt)("br",null),(0,o.kt)("p",null,"The function below should have only one required argument, which is an instance of ",(0,o.kt)(p,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@bot.message_command(name="Reverse")\nasync def reverse(inter: disnake.ApplicationCommandInteraction, message: disnake.Message):\n    # Reversing the message and sending it back.\n    await inter.response.send_message(message.content[::-1])\n')),(0,o.kt)("h2",{id:"context-menu-notes"},"Context menu notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Context menu commands cannot have subcommands or any other options."),(0,o.kt)("li",{parentName:"ul"},"Responses to context menu commands and their permissions function the same as slash commands.")))}g.isMDXComponent=!0},2193:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/context-menus-intro-0aad4aa616f782475205a771d41b175a.png"}}]);