"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[101],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4421:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={},i="Error Handling",s={unversionedId:"popular-topics/errors",id:"popular-topics/errors",title:"Error Handling",description:"This content has been taken directly from the documentation, and inherited from discord.py. It will most likely be rewritten in the future.",source:"@site/docs/popular-topics/errors.mdx",sourceDirName:"popular-topics",slug:"/popular-topics/errors",permalink:"/popular-topics/errors",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/popular-topics/errors.mdx",tags:[],version:"current",lastUpdatedBy:"vi",lastUpdatedAt:1737559004,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Permissions",permalink:"/popular-topics/permissions"},next:{title:"Gateway Intents",permalink:"/popular-topics/intents"}},c={},d=[],l=(m="DocsLink",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const p={toc:d};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handling"},"Error Handling"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This content has been taken directly from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.disnake.dev/en/stable/ext/commands/commands.html#error-handling"},"documentation"),", and inherited from ",(0,o.kt)("inlineCode",{parentName:"p"},"discord.py"),". It will most likely be rewritten in the future.")),(0,o.kt)("p",null,"When our commands fail to parse we will, by default, receive a noisy error in ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," of our console that tells us\nthat an error has happened and has been silently ignored."),(0,o.kt)("p",null,"In order to handle our errors, we must use something called an error handler. There is a global error handler, called ",(0,o.kt)(l,{ext:"commands",reference:"disnake.disnake.ext.commands.on_command_error",mdxType:"DocsLink"},"on_command_error()")," which works\nlike any other event in the ",(0,o.kt)(l,{ext:"commands",reference:"event-reference",mdxType:"DocsLink"},"Event Reference"),". This global error handler is called for every error reached."),(0,o.kt)("p",null,"Most of the time however, we want to handle an error local to the command itself. Luckily, commands come with local error\nhandlers that allow us to do just that. First we decorate an error handler function with ",(0,o.kt)(l,{ext:"commands",reference:"disnake.ext.commands.Command.error",mdxType:"DocsLink"},"Command.error()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@bot.command()\nasync def info(ctx, *, member: disnake.Member):\n    """Tells you some info about the member."""\n    msg = f"{member} joined on {member.joined_at} and has {len(member.roles)} roles."\n    await ctx.send(msg)\n\n\n@info.error\nasync def info_error(ctx, error):\n    if isinstance(error, commands.BadArgument):\n        await ctx.send("I could not find that member...")\n')),(0,o.kt)("p",null,"The first parameter of the error handler is the ",(0,o.kt)(l,{ext:"commands",reference:"disnake.ext.commands.Context",mdxType:"DocsLink"},"Context")," while the second one is an exception that is derived from ",(0,o.kt)(l,{ext:"commands",reference:"disnake.ext.commands.CommandError",mdxType:"DocsLink"},"CommandError"),". A list of errors is found in the ",(0,o.kt)(l,{ext:"commands",reference:"ext-commands-api-errors",mdxType:"DocsLink"},"Exceptions")," page of the documentation."))}u.isMDXComponent=!0}}]);