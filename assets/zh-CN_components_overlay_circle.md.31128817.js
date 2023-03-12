import{_ as d,c as a,f as s,g as n,h as t,i as o,o as c,b as l}from"./app.16bb4b9b.js";const b=JSON.parse('{"title":"BCircle 圆形","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件示例","slug":"组件示例","link":"#组件示例","children":[]},{"level":2,"title":"静态组件 Props","slug":"静态组件-props","link":"#静态组件-props","children":[]},{"level":2,"title":"动态组件 Props","slug":"动态组件-props","link":"#动态组件-props","children":[]},{"level":2,"title":"组件事件","slug":"组件事件","link":"#组件事件","children":[]}],"relativePath":"zh-CN/components/overlay/circle.md","lastUpdated":1678640805000}'),r={name:"zh-CN/components/overlay/circle.md"},p=t(`<h1 id="bcircle-圆形" tabindex="-1">BCircle 圆形 <a class="header-anchor" href="#bcircle-圆形" aria-hidden="true">#</a></h1><p>在地图上绘制简单的圆形</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BCircle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-hidden="true">#</a></h2>`,4),i=l("p",null,"overlay/circle",-1),C=t('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enableClicking</td><td>是否响应点击事件</td><td><code>boolean</code></td><td><code>true </code></td></tr><tr><td>geodesic</td><td>是否开启大地线模式，true 时，两点连线将以大地线的形式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clip</td><td>是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果</td><td><code>boolean</code></td><td><code>true </code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>center</td><td>圆形中心点经纬度</td><td><code>{ lng: number, lat: number}</code></td><td>-</td><td><code>required</code></td></tr><tr><td>radius</td><td>圆形的半径，单位为米</td><td><code>number</code></td><td>-</td><td><code>required</code></td></tr><tr><td>strokeColor</td><td>描边的颜色，同 CSS 颜色</td><td><code>string</code></td><td>-</td><td><code>#000</code></td></tr><tr><td>strokeOpacity</td><td>描边的透明度，范围 0-1</td><td><code>number</code></td><td><code>0-1 </code></td><td>1</td></tr><tr><td>fillColor</td><td>面填充颜色，同 CSS 颜色</td><td><code>string</code></td><td>-</td><td><code>#fff</code></td></tr><tr><td>fillOpacity</td><td>面填充的透明度，范围 0-1</td><td><code>number</code></td><td><code>0-1 </code></td><td><code>0.3 </code></td></tr><tr><td>strokeWeight</td><td>描边的宽度，单位为像素</td><td><code>number</code></td><td>-</td><td><code>2 </code></td></tr><tr><td>strokeStyle</td><td>描边的样式，为实线、虚线、或者点状线</td><td><code>string</code></td><td><code>solid / dashed / dotted</code></td><td><code>solid </code></td></tr><tr><td>enableMassClear</td><td>是否在调用 <code>map.clearOverlays</code> 清除此覆盖物</td><td><code>boolean</code></td><td>-</td><td><code>true </code></td></tr><tr><td>enableEditing</td><td>是否启用线编辑</td><td><code>boolean</code></td><td>-</td><td><code>false </code></td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为：<code>click -&gt; click -&gt; dblclick</code></td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>lineupdate</td><td>覆盖物被编辑后的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr></tbody></table>',6);function E(u,h,D,F,k,_){const e=o("Demo");return c(),a("div",null,[p,s(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBCircle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-style%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edashed%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aradius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E300%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/circle","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3CBCircle%20stroke-style%3D%22dashed%22%20%3Acenter%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20%3Aradius%3D%22300%22%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E6%B7%BB%E5%8A%A0%E5%9C%86%E5%BD%A2%3C%2Fp%3E%0A"},{default:n(()=>[i]),_:1}),C])}const g=d(r,[["render",E]]);export{b as __pageData,g as default};
