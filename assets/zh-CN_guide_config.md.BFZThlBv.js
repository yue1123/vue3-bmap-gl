import{_ as n,c as l,j as s,I as a,al as t,a as e,D as h,o as p}from"./chunks/framework.n6hqIsqL.js";const ls=JSON.parse('{"title":"配置","description":"","frontmatter":{"title":"配置","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/config.md","filePath":"zh-CN/guide/config.md","lastUpdated":1732724858000}'),k={name:"zh-CN/guide/config.md"},d=t('<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>本章节将为你讲述如何配置 ak、apiUrl 与插件以及更换资源链接，并实现一个自定义插件</p><h2 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h2><p>目前支持两种方式，全局配置和组件 props 传入</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你是<strong>全局注册</strong>使用方式，那么 <code>ak</code>、<code>apiUrl</code>、<code>plugins</code> 和 <code>pluginsSourceLink</code> 都支持两种来源 (全局注册配置和组件 <code>props</code> 提供)，当同时指定的时候，会优先就近原则，从组件 <code>props</code> 中获取。如果全局注册配置和组件 <code>props</code> 都提供了，则会尝试合并两个配置。</p><p>如果你是<strong>按需加载</strong>使用方式，则只支持组件 <code>props</code> 方式</p></div><h3 id="_1。通过全局注册配置-ak-与插件" tabindex="-1">1。通过全局注册配置 ak 与插件 <a class="header-anchor" href="#_1。通过全局注册配置-ak-与插件" aria-label="Permalink to &quot;1。通过全局注册配置 ak 与插件&quot;">​</a></h3><p>全局注册 Options</p>',7),r={tabindex:"0"},o=s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"可选值"),s("th",null,"默认值"),s("th",null,"版本")])],-1),c=s("tr",null,[s("td",null,"ak"),s("td",null,[e("百度地图 "),s("a",{href:"./../guide/quick-start#申请-ak-密钥"},"ak")]),s("td",null,[s("code",null,"string")]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),E=s("td",null,"apiUrl",-1),g=s("td",null,"自建地图 api 资源地址（一般用于离线地图）",-1),u=s("td",null,[s("code",null,"string")],-1),y=s("td",null,"-",-1),_=s("td",null,"-",-1),F=s("tr",null,[s("td",null,"plugins"),s("td",null,"需要注册的插件"),s("td",null,[s("a",{href:"#扩展插件-plugins"},[s("code",null,"PluginId[]")])]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),b=s("tr",null,[s("td",null,"pluginsSourceLink"),s("td",null,[s("a",{href:"#更换插件资源链接"},"自定义插件资源地址")]),s("td",null,[s("code",null,"Record<PluginId, string>")]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),m=t(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baiduMap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baiduMap, {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ak: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;百度地图ak&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;TrackAnimation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_2。组件-bmap-传入-props-配置" tabindex="-1">2。组件 <code>BMap</code> 传入 <a href="/vue3-baidu-map-gl/zh-CN/components/map#静态组件-props"><code>props</code></a> 配置 <a class="header-anchor" href="#_2。组件-bmap-传入-props-配置" aria-label="Permalink to &quot;2。组件 \`BMap\` 传入 [\`props\`](/zh-CN/components/map#%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6-props) 配置&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">BMap</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ak</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;百度地图ak&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[&#39;TrackAnimation&#39;]&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="扩展插件-plugins" tabindex="-1">扩展插件 plugins <a class="header-anchor" href="#扩展插件-plugins" aria-label="Permalink to &quot;扩展插件 plugins&quot;">​</a></h2><p>配置插件，通过 <a href="./../components/map#组件事件">BMap 组件 pluginReady</a> 可获取加载好的插件类</p>`,5),B={tabindex:"0"},A=s("thead",null,[s("tr",null,[s("th",null,"PluginId"),s("th",null,"插件名称"),s("th",null,"描述"),s("th",null,"版本")])],-1),f=s("tr",null,[s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E8%A7%86%E8%A7%92%E8%BD%A8%E8%BF%B9%E5%8A%A8%E7%94%BB",target:"_blank",rel:"noreferrer"},"TrackAnimation")]),s("td",null,"视角轨迹动画"),s("td",null,"TrackAnimation 类提供视角轨迹动画展示效果。"),s("td")],-1),C=s("tr",null,[s("td",null,"Mapvgl"),s("td"),s("td",null,"-"),s("td")],-1),v=s("tr",null,[s("td",null,"MapvglThreeLayers"),s("td"),s("td",null,"-"),s("td")],-1),D=s("tr",null,[s("td",null,"Mapv"),s("td"),s("td",null,"-"),s("td")],-1),T=s("tr",null,[s("td",null,"MapvThree"),s("td"),s("td",null,"-"),s("td")],-1),x=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file",target:"_blank",rel:"noreferrer"},"DrawingManager")],-1),M=s("td",null,"鼠标绘制工具条库",-1),P=s("td",null,"提供鼠标绘制点、线、面、多边形（矩形、圆）的编辑工具条的开源代码库。",-1),L=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E6%B5%8B%E8%B7%9D%E5%B7%A5%E5%85%B7",target:"_blank",rel:"noreferrer"},"DistanceTool")],-1),q=s("td",null,"测距工具",-1),S=s("td",null,"测距工具类",-1),N=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E5%87%A0%E4%BD%95%E8%BF%90%E7%AE%97",target:"_blank",rel:"noreferrer"},"GeoUtils")],-1),I=s("td",null,"几何运算",-1),V=s("td",null,"提供若干几何算法",-1),G=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E5%8C%BA%E5%9F%9F%E9%99%90%E5%88%B6",target:"_blank",rel:"noreferrer"},"AreaRestriction")],-1),R=s("td",null,"区域限制",-1),z=s("td",null,"浏览区域限制类",-1),U=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BF%A1%E6%81%AF%E7%AA%97%E5%8F%A3",target:"_blank",rel:"noreferrer"},"InfoBox")],-1),w=s("td",null,"自定义信息窗口",-1),$=s("td",null,"类似于 infoWindow，比 infoWindow 更有灵活性，比如可以定制 border，关闭按钮样式等。",-1),O=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E5%AF%8C%E6%A0%87%E6%B3%A8",target:"_blank",rel:"noreferrer"},"RichMarker")],-1),W=s("td",null,"富标注",-1),j=s("td",null,"富 Marker 类",-1),J=s("td",null,[s("a",{href:"https://github.com/huiyan-fe/BMapGLLib?tab=readme-ov-file#%E8%B7%AF%E4%B9%A6",target:"_blank",rel:"noreferrer"},"LuShu")],-1),H=s("td",null,"路书",-1),K=s("td",null,"路书类，实现 Marker 沿路线运动",-1),Q=t(`<h3 id="更换插件资源链接" tabindex="-1">更换插件资源链接 <a class="header-anchor" href="#更换插件资源链接" aria-label="Permalink to &quot;更换插件资源链接&quot;">​</a></h3><p>如果需要自建或其他地址的资源链接，则可以通过该方式自定义。同样，该方式也支持两种形式：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baiduMap, {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;TrackAnimation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pluginsSourceLink: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TrackAnimation: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;自建或其他地址的资源链接&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><p>或者</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">BMap</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;TrackAnimation&#39;]</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :pluginsSourceLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    TrackAnimation: &#39;自建或其他地址的资源链接&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h3 id="自定义资源加载插件" tabindex="-1">自定义资源加载插件 <a class="header-anchor" href="#自定义资源加载插件" aria-label="Permalink to &quot;自定义资源加载插件&quot;">​</a></h3><p>除了提供的插件外，你还可以通过自定义插件扩展，自定义的插件将在地图加载完毕后执行与处理。</p><p>自定义的方式也很简单，你只需定义一个返回 <code>Promise</code> 的函数即可</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> customPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;自定义插件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 加载相关资源</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 加载完成后可 resolve 一个对象, 插件名和插件所导出的类, 便于通过 pluginRead 更好的访问</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // [pluginName]: pluginClass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用的方式同样也有两种：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baiduMap, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [customPlugin]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><p>或者</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">BMap</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[customPlugin]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,13);function X(Y,Z,ss,is,as,ts){const i=h("Badge");return p(),l("div",null,[d,s("table",r,[o,s("tbody",null,[c,s("tr",null,[E,g,u,y,_,s("td",null,[a(i,{type:"tip",text:"^2.3.0"})])]),F,b])]),m,s("table",B,[A,s("tbody",null,[f,C,v,D,T,s("tr",null,[x,M,P,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[L,q,S,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[N,I,V,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[G,R,z,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[U,w,$,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[O,W,j,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])]),s("tr",null,[J,H,K,s("td",null,[a(i,{type:"tip",text:"^2.5.0"})])])])]),Q])}const es=n(k,[["render",X]]);export{ls as __pageData,es as default};
