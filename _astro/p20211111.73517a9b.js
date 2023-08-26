import{c as u}from"./index.c97107e6.js";import{A as n,b as A,c as r,d as o,r as B,e as d,a as i,f as a,F as c}from"./Favorite.218f086a.js";import"./dayjs.min.63f98895.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./runtime-core.esm-bundler.45595617.js";const h="2.10.7";function g(){return C=>{if(typeof C=="string")throw new n({...A,message:A.message(JSON.stringify(C))});let e=[...Object.values(C)];if(e.length===0)throw new n({...r,message:r.message(JSON.stringify(C))});return Promise.all(e.map(D=>D()))}}function p(E){return{site:E?new URL(E):void 0,generator:`Astro v${h}`,glob:g()}}const m=p("https://louisfiy.com"),F=o(async(E,C,e)=>{const D=E.createAstro(m,C,e);D.self=F;const{type:t}=D.props;return B`${d()}<div class="flex my-4">
  <div class="w-12 h-12 sm:w-24 sm:h-24">
    ${t==="left"&&B`<img src="/image/chat_left.png" alt="Left">`}
  </div>
  <div${i(["flex-1 flex items-end",{"justify-end":t==="right"}],"class:list")}> 
    <div${i(["h-fit rounded p-2",{"bg-white border border-gray-300":t==="left"},{"bg-green-400 bg-opacity-80":t==="right"}],"class:list")}>
      ${a(E,e.default)}
    </div>
  </div>
  <div class="w-12 sm:w-24 h-12 sm:h-24">
    ${t==="right"&&B`<img src="/image/chat_right.png" alt="Right">`}
  </div>
</div>`},"D:/Shin/astro-site/src/components/Chat.astro",void 0),f={title:"写在前面——对话路易斯·费扬",date:"2021-11-11T11:11:11.000Z",categories:["随笔"],tags:["写作"]};function N(){return[]}function s(E){const C=Object.assign({p:"p",a:"a",em:"em",img:"img"},E.components);return u(c,{children:[u("div",{class:"note primary",children:u(C.p,{children:"各位小伙伴们，大家好啊！我是今天的特邀主持人小鹏是也。本期“作者有话说”节目，我们很荣幸邀请到本博客的创始人路易斯·费扬，和我们一起聊一聊这个与众不同、品味出众的博客系统，是如何一步步搭建起来？又需要什么样的日常运营手段？对个人、周遭环境乃至社会又具有怎样的指导意义？"})}),`
`,u("br",{}),`
`,u(F,{type:"left",children:"首先简单介绍一下自己吧，路先生。"}),`
`,u(F,{type:"right",children:["大家好，我是你们的老朋友路易斯·费扬，大家叫我“飞扬哥”就好了。更多详细信息请戳右上角“",u(C.a,{href:"/about",children:"关于"}),"”菜单，或前一句中的超链接。"]}),`
`,u(F,{type:"left",children:"好的，飞扬哥。"}),`
`,u(F,{type:"right",children:"不客气。"}),`
`,u(F,{type:"left",children:"言归正传。翻看这套博客我们发现一件非常有趣的事情，首先就内容而言，相比较大多数程序员的博客，您似乎更倾向于发布一些文学创作。"}),`
`,u(F,{type:"right",children:"是的。这是因为，我觉得程序员是分层次的，业界传言“三流码农写交互，二流码农写架构，一流码农写算法，顶流码农穿女装”，而像我这种不入流的码农，自然需要另辟蹊径。"}),`
`,u(F,{type:"left",children:"不明觉厉。能谈谈您创建这个网站的初衷吗？"}),`
`,u(F,{type:"right",children:"根本原因根据相关法律法规不好说；动机基本没有因为我很单纯；导火索则是一个偶然的机会接触到这个博客框架。感兴趣的朋友可以从“开发日志”中获得灵感。"}),`
`,u(F,{type:"left",children:"就是说一切无迹可循？"}),`
`,u(F,{type:"right",children:"是这样的，其实呢，“写”是我为数不多的坚持超过十年的习惯，虽然这几年拖延严重，产量不高，但是在那之前我已经写过不少（的文章）。在这个网站建立之后，在后来的测试过程中，我就陆陆续续地把以前一些零零散散的故事啊、随笔啊，一篇篇地都给它放进去，于是就有了现在这样一个结果。"}),`
`,u(F,{type:"left",children:"也就是说，内容是以前就存在的，只不过您把它们搬运过来了。"}),`
`,u(F,{type:"right",children:"没错。——某种程度上，这个博客是对往日QQ空间日志的复刻和重制。"}),`
`,u(F,{type:"left",children:"原来如此。那么，为什么您选择从零开始搭建静态网站，而不是利用现有的成熟的内容平台呢？"}),`
`,u(F,{type:"right",children:["一个肉眼可见的好处是：Markdown",u("small",{children:"（一种轻量级文本标记语言，常用于编写文档）"}),"对 HTML/CSS/JS",u("small",{children:"（Web前端语言）"}),"的支持具有得天独厚的优势，碰巧我是靠这个恰饭的，因此在博文的创作形式上更加便利、自由、多样。"]}),`
`,u(F,{type:"left",children:"懂了，您是想表达万事万物没有最好只有最适合的是吧？"}),`
`,u(F,{type:"right",children:"🙂 见仁见智。"}),`
`,u(F,{type:"left",children:"嗯嗯。但是写作也不是一件容易的事儿，每个人都有每个人的故事，如果您的故事不能带给读者足够多的共鸣，它将如何立足……"}),`
`,u(F,{type:"right",children:"我想你误会了。人类的悲欢并不相通，人生在世，为人处事并不是为了取悦别人，写作如此，其它亦然。"}),`
`,u(F,{type:"left",children:"大师，我悟了。"}),`
`,u(F,{type:"right",children:"再回到你的提问。Actually, I don’t want to set down a series of facts in a blog as most people do, but I want this blog itself to be my friend."}),`
`,u(F,{type:"left",children:["呃……您这是引用人教版高一英语必修一 Unit 1 Friendship, Reading, ",u(C.em,{children:"ANNE’S BEST FRIEND"})," 中的话吧，能不能用您自己的语言阐述一下。"]}),`
`,u(F,{type:"right",children:"用心。用心成就梦想。"}),`
`,u(F,{type:"left",children:"👌 由于时间关系，本次访谈差不多接近尾声了，最后您还有什么话要对读者说的吗？"}),`
`,u(F,{type:"right",children:"那就给大家拜个早年吧，祝大家年年有今日，岁岁有今朝！"}),`
`,u(F,{type:"left",children:"好的，非常感谢您今天百忙之中接受我们的专访！再次感谢我们的路先生！"}),`
`,u(F,{type:"right",children:"不客气。叫我“飞扬哥”就好了。"}),`
`,u(F,{type:"left",children:"好的，飞扬哥。谢谢飞扬哥。"}),`
`,u("br",{}),`
`,u(C.p,{children:u(C.img,{src:"/image/21111101.png",alt:"我们所经历的每个平凡的日常，也许就是连续发生的奇迹。"})})]})}function y(E={}){const{wrapper:C}=E.components||{};return C?u(C,{...E,children:u(s,{...E})}):s(E)}const O="src/content/doc/p20211111.mdx",$="D:/Shin/astro-site/src/content/doc/p20211111.mdx",l=(E={})=>y({...E,components:{Fragment:c,...E.components}});l[Symbol.for("astro.needsHeadRendering")]=!f.layout;l.moduleId="D:/Shin/astro-site/src/content/doc/p20211111.mdx";export{l as Content,l as default,$ as file,f as frontmatter,N as getHeadings,O as url};
