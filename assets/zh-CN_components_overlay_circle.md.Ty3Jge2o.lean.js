import{_ as o,D as l,c,I as e,w as u,k as t,R as n,a,o as r}from"./chunks/framework.aeLSa5ZG.js";const R=JSON.parse('{"title":"BCircle 圆形","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/circle.md","filePath":"zh-CN/components/overlay/circle.md","lastUpdated":1704859597000}'),p={name:"zh-CN/components/overlay/circle.md"},i=n("",4),E=t("p",null,"overlay/circle",-1),C=n("",3),h=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),_=t("tr",null,[t("td",null,"center"),t("td",null,"圆形中心点经纬度"),t("td",null,[t("code",null,"{ lng: number, lat: number}")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),k=t("tr",null,[t("td",null,"radius"),t("td",null,"圆形的半径，单位为米"),t("td",null,[t("code",null,"number")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),D=t("tr",null,[t("td",null,"strokeColor"),t("td",null,"描边的颜色，同 CSS 颜色"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"#000")]),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"strokeOpacity"),t("td",null,"描边的透明度，范围 0-1"),t("td",null,[t("code",null,"number")]),t("td",null,[t("code",null,"0-1 ")]),t("td",null,"1"),t("td",null,"-")],-1),m=t("tr",null,[t("td",null,"fillColor"),t("td",null,"面填充颜色，同 CSS 颜色"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"#fff")]),t("td",null,"-")],-1),b=t("tr",null,[t("td",null,"fillOpacity"),t("td",null,"面填充的透明度，范围 0-1"),t("td",null,[t("code",null,"number")]),t("td",null,[t("code",null,"0-1 ")]),t("td",null,[t("code",null,"0.3 ")]),t("td",null,"-")],-1),g=t("tr",null,[t("td",null,"strokeWeight"),t("td",null,"描边的宽度，单位为像素"),t("td",null,[t("code",null,"number")]),t("td",null,"-"),t("td",null,[t("code",null,"2 ")]),t("td",null,"-")],-1),v=t("tr",null,[t("td",null,"strokeStyle"),t("td",null,"描边的样式，为实线、虚线、或者点状线"),t("td",null,[t("code",null,"string")]),t("td",null,[t("code",null,"solid / dashed / dotted")]),t("td",null,[t("code",null,"solid ")]),t("td",null,"-")],-1),A=t("tr",null,[t("td",null,"enableMassClear"),t("td",null,[a("是否在调用 "),t("code",null,"map.clearOverlays"),a(" 清除此覆盖物")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true ")]),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"enableEditing"),t("td",null,"是否启用线编辑"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"false ")]),t("td",null,"-")],-1),y=t("td",null,"visible",-1),f=t("td",null,"是否显示",-1),T=t("td",null,[t("code",null,"boolean")],-1),P=t("td",null,"-",-1),q=t("td",null,[t("code",null,"true")],-1),S=n("",2);function x(N,V,I,z,M,w){const s=l("Demo"),d=l("Badge");return r(),c("div",null,[i,e(s,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBCircle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-style%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edashed%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aradius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E300%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/circle","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3CBCircle%20stroke-style%3D%22dashed%22%20%3Acenter%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20%3Aradius%3D%22300%22%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E6%B7%BB%E5%8A%A0%E5%9C%86%E5%BD%A2%3C%2Fp%3E%0A"},{default:u(()=>[E]),_:1}),C,t("table",null,[h,t("tbody",null,[_,k,D,F,m,b,g,v,A,B,t("tr",null,[y,f,T,P,q,t("td",null,[e(d,{type:"tip",text:"^2.2.0"})])])])]),S])}const $=o(p,[["render",x]]);export{R as __pageData,$ as default};
