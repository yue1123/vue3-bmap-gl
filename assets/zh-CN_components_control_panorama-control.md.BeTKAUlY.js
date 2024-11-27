import{_ as r,c as d,j as t,a as e,I as a,w as p,al as n,D as s,o as c}from"./chunks/framework.n6hqIsqL.js";const S=JSON.parse('{"title":"BPanoramaControl 全景控件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/control/panorama-control.md","filePath":"zh-CN/components/control/panorama-control.md","lastUpdated":1732724498000}'),i={name:"zh-CN/components/control/panorama-control.md"},h={id:"bpanoramacontrol-全景控件",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#bpanoramacontrol-全景控件","aria-label":'Permalink to "BPanoramaControl 全景控件 <Badge type="tip" text="^0.0.31" />"'},"​",-1),C=n('<p>全景地图服务，360° 全景地图刻画真实世界，将街道场景带入到地图产品中，用户可以拖拽地图从不同的角度浏览真实的街景效果</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BPanoramaControl } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>全景地图服务属于百度地图高级服务，需要向<a href="https://lbs.baidu.com/apiconsole/fankui#?typeOne=%E4%BA%A7%E5%93%81%E9%9C%80%E6%B1%82&amp;typeTwo=%E9%AB%98%E7%BA%A7%E6%9C%8D%E5%8A%A1&amp;typeThree=JS%20API%E5%85%A8%E6%99%AF%E5%9B%BE" target="_blank" rel="noreferrer">百度地图申请</a>才可以使用</p></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2><p>单独使用该组件不会显示全景地图覆盖情况，还需要搭配 <code>BPanoramaCoverageLayer</code> 组件使用。</p>',5),E=t("p",null,"control/panoramaControl",-1),u=n('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>控件的停靠位置</td><td><code>string</code></td><td><a href="#anchor">anchor</a></td><td><code>BMAP_ANCHOR_BOTTOM_RIGHT</code></td></tr><tr><td>offset</td><td>控件的偏移值</td><td><code>{x: number, y: number }</code></td><td>-</td><td><code>{ x: 18, y: 18 }</code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2>',3),m={tabindex:"0"},k=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),b=t("td",null,"visible",-1),A=t("td",null,"是否显示",-1),F=t("td",null,[t("code",null,"boolean")],-1),B=t("td",null,"-",-1),D=t("td",null,[t("code",null,"true")],-1),P=n('<h2 id="anchor" tabindex="-1">anchor <a class="header-anchor" href="#anchor" aria-label="Permalink to &quot;anchor&quot;">​</a></h2><table tabindex="0"><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>左上</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>右上</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>左下</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>右下</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr></tbody></table>',4);function T(g,y,f,x,v,N){const o=s("Badge"),l=s("Demo");return c(),d("div",null,[t("h1",h,[e("BPanoramaControl 全景控件 "),a(o,{type:"tip",text:"^0.0.31"}),e(),_]),C,a(l,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPanoramaControl%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPanoramaCoverageLayer%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"control/panoramaControl","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20enableScrollWheelZoom%3E%0A%20%20%20%20%3CBPanoramaControl%20%2F%3E%0A%20%20%20%20%3CBPanoramaCoverageLayer%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:p(()=>[E]),_:1}),u,t("table",m,[k,t("tbody",null,[t("tr",null,[b,A,F,B,D,t("td",null,[a(o,{type:"tip",text:"^2.2.0"})])])])]),P])}const I=r(i,[["render",T]]);export{S as __pageData,I as default};
