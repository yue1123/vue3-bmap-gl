import{_ as e,D as s,c as d,I as a,w as c,k as t,R as o,o as i}from"./chunks/framework.aeLSa5ZG.js";const L=JSON.parse('{"title":"BLocation 定位控件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/control/location.md","filePath":"zh-CN/components/control/location.md","lastUpdated":1720351386000}'),p={name:"zh-CN/components/control/location.md"},r=o('<h1 id="blocation-定位控件" tabindex="-1">BLocation 定位控件 <a class="header-anchor" href="#blocation-定位控件" aria-label="Permalink to &quot;BLocation 定位控件&quot;">​</a></h1><p>定位控件，默认位于地图右下角</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BLocation } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),h=t("p",null,"control/location",-1),_=o('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>控件的停靠位置</td><td><code>string</code></td><td><a href="#anchor">anchor</a></td><td><code>BMAP_ANCHOR_BOTTOM_RIGHT</code></td></tr><tr><td>offset</td><td>控件的偏移值</td><td><code>{x: number, y: number }</code></td><td>-</td><td><code>{ x: 18, y: 18 }</code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2>',3),u=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),C=t("td",null,"visible",-1),E=t("td",null,"是否显示",-1),k=t("td",null,[t("code",null,"boolean")],-1),b=t("td",null,"-",-1),m=t("td",null,[t("code",null,"true")],-1),F=o('<h2 id="anchor" tabindex="-1">anchor <a class="header-anchor" href="#anchor" aria-label="Permalink to &quot;anchor&quot;">​</a></h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>左上</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>右上</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>左下</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>右下</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2>',3),A=t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"版本")])],-1),T=t("tr",null,[t("td",null,"initd"),t("td",null,"组件初始化后，调用的方法，返回一个地图实例"),t("td",null,[t("code",null,"{ map, BmapGL, instance }")]),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"unload"),t("td",null,"组件卸载时会调用此方法"),t("td",null,"-"),t("td",null,"-")],-1),D=t("td",null,"locationSuccess",-1),g=t("td",null,"定位成功时会调用此方法",-1),P=t("td",null,[t("code",null,"{Event}")],-1),f=t("td",null,"locationError",-1),y=t("td",null,"定位失败时会调用此方法",-1),x=t("td",null,[t("code",null,"{Event}")],-1);function N(v,O,q,M,R,S){const l=s("Demo"),n=s("Badge");return i(),d("div",null,[r,a(l,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBLocation%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"control/location","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%3E%0A%20%20%20%20%3CBLocation%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:c(()=>[h]),_:1}),_,t("table",null,[u,t("tbody",null,[t("tr",null,[C,E,k,b,m,t("td",null,[a(n,{type:"tip",text:"^2.2.0"})])])])]),F,t("table",null,[A,t("tbody",null,[T,B,t("tr",null,[D,g,P,t("td",null,[a(n,{type:"tip",text:"^0.0.39"})])]),t("tr",null,[f,y,x,t("td",null,[a(n,{type:"tip",text:"^0.0.39"})])])])])])}const V=e(p,[["render",N]]);export{L as __pageData,V as default};
