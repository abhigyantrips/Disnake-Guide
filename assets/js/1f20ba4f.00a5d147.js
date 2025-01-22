"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[901],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=s,k=p["".concat(c,".").concat(u)]||p[u]||l[u]||o;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=t(7462),s=(t(7294),t(3905));const o={description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken."},a="Context Menus",i={unversionedId:"interactions/context-menus",id:"interactions/context-menus",title:"Context Menus",description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken.",source:"@site/docs/interactions/context-menus.mdx",sourceDirName:"interactions",slug:"/interactions/context-menus",permalink:"/interactions/context-menus",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/interactions/context-menus.mdx",tags:[],version:"current",lastUpdatedBy:"vi",lastUpdatedAt:1737559004,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{description:"They are available under Apps in user/message context menus, responding with the resolved user or message on which the action was taken."},sidebar:"guideSidebar",previous:{title:"Slash Commands",permalink:"/interactions/slash-commands"},next:{title:"Buttons",permalink:"/interactions/buttons"}},c={},m=[{value:"User commands",id:"user-commands",level:2},{value:"Message commands",id:"message-commands",level:2},{value:"Context menu notes",id:"context-menu-notes",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)},l=d("DocsLink"),p=d("DiscordMessages"),u=d("DiscordMessage"),k=d("DiscordInteraction"),f={toc:m};function g(e){let{components:n,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"context-menus"},"Context Menus"),(0,s.kt)("p",null,'These application commands are situated under the "Apps" section when you right-click a user or a message. They act like interactions, except they take a ',(0,s.kt)(l,{reference:"disnake.User",mdxType:"DocsLink"})," or ",(0,s.kt)(l,{reference:"disnake.Message",mdxType:"DocsLink"})," object along with ",(0,s.kt)(l,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,s.kt)("br",null),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(2193).Z,alt:"Context Menu Introduction",width:"70%"})),(0,s.kt)("br",null),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"For more specific annotations, you can use ",(0,s.kt)(l,{reference:"disnake.UserCommandInteraction",mdxType:"DocsLink"})," or ",(0,s.kt)(l,{reference:"disnake.MessageCommandInteraction",mdxType:"DocsLink"})," instead of ",(0,s.kt)(l,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"})," for the respective commands.")),(0,s.kt)("h2",{id:"user-commands"},"User commands"),(0,s.kt)(p,{mdxType:"DiscordMessages"},(0,s.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(k,{profile:"user",command:!0,mdxType:"DiscordInteraction"},"User Info")),"Username: AbhigyanTrips#2474",(0,s.kt)("br",null),"Bot: False")),(0,s.kt)("br",null),(0,s.kt)("p",null,"The function below should have only one required argument, which is an instance of ",(0,s.kt)(l,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@bot.user_command(name="User Info")\nasync def avatar(inter: disnake.ApplicationCommandInteraction, user: disnake.User):\n    await inter.response.send_message(f"Username: {user}\\nBot: {user.bot}")\n')),(0,s.kt)("h2",{id:"message-commands"},"Message commands"),(0,s.kt)(p,{mdxType:"DiscordMessages"},(0,s.kt)(u,{profile:"bot",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(k,{profile:"user",command:!0,mdxType:"DiscordInteraction"},"Reverse")),".desrever si egassem sihT")),(0,s.kt)("br",null),(0,s.kt)("p",null,"The function below should have only one required argument, which is an instance of ",(0,s.kt)(l,{reference:"disnake.ApplicationCommandInteraction",mdxType:"DocsLink"}),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@bot.message_command(name="Reverse")\nasync def reverse(inter: disnake.ApplicationCommandInteraction, message: disnake.Message):\n    # Reversing the message and sending it back.\n    await inter.response.send_message(message.content[::-1])\n')),(0,s.kt)("h2",{id:"context-menu-notes"},"Context menu notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Context menu commands cannot have subcommands or any other options."),(0,s.kt)("li",{parentName:"ul"},"Responses to context menu commands and their permissions function the same as slash commands.")))}g.isMDXComponent=!0},2193:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/context-menus-intro-0aad4aa616f782475205a771d41b175a.png"}}]);