"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{67156:function(t,n,i){i.d(n,{Cj:function(){return s},Rv:function(){return l},bS:function(){return c},cn:function(){return r},dA:function(){return u},j:function(){return e},p3:function(){return a},tS:function(){return o},w4:function(){return d}});const e=24,r=6,o=48,a=.2,s=12,d=12,l=2,c=1.25,u=224},73515:function(t,n,i){i.d(n,{Ac:function(){return o},Bb:function(){return r},N:function(){return s},di:function(){return a}});var e=i(59016);const r=20,o=e.ZP.div.withConfig({displayName:"Workspacestyles__WorkspaceStyles",componentId:"sc-12ld1gx-0"})(["display:flex;flex-direction:column;height:calc(100vh - calc(100vh - 100%));cursor:default;background-color:",";"],(t=>{let{theme:n}=t;return n.colors.workspaceBackground})),a=e.ZP.div.withConfig({displayName:"Workspacestyles__WorkspaceContainer",componentId:"sc-12ld1gx-1"})(["display:flex;flex-direction:row;overflow-y:scroll;position:relative;height:100%;"]),s=e.ZP.div.withConfig({displayName:"Workspacestyles__WorkspaceContent",componentId:"sc-12ld1gx-2"})(["padding:0 ","px;flex:1;display:flex;flex-direction:column;"],r)},53098:function(t,n,i){i.d(n,{C8:function(){return z},D2:function(){return h},Dl:function(){return g},IT:function(){return l},K5:function(){return f},Mf:function(){return o},Ue:function(){return c},bf:function(){return s},dH:function(){return a},m6:function(){return u},pQ:function(){return e},sE:function(){return r},tF:function(){return d},xG:function(){return S},y$:function(){return p}});const e=2,r=5,o=100,a=100,s=200,d=500,l=550,c=560,u=600,h=700,g=800,S=850,f=851,p=900,z=1e3},60559:function(t,n,i){i.d(n,{EF:function(){return C},KT:function(){return O},OM:function(){return b},WX:function(){return f},YZ:function(){return m},Zk:function(){return u},_C:function(){return v},at:function(){return z},br:function(){return h},ht:function(){return w},nZ:function(){return p},nq:function(){return F},rh:function(){return T},sK:function(){return g},x3:function(){return P},yn:function(){return W}});var e=i(59499),r=i(24368),o=i(85518),a=i(67156),s=i(73515),d=i(71048);function l(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function c(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){(0,e.Z)(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}const u=72,h=112,g=254,S=960,f=17,p=12,z=2,b=2,P=3,w=()=>({shortSide:540,longSide:S,radius:21.6,padding:12,bodyFontSize:17.535,innerTilePadding:f,captionFontSize:14,captionPadding:20,captionRadius:8,captionInnerPaddingVertical:5,captionInnerPaddingSide:8,tableContentFontSize:14,tableContentPadding:12,tableTitleFontSize:17.535,tableContentPaddingLeft:20}),m={shortSide:540,longSide:S,radius:21.6,padding:12,bodyFontSize:21,innerTilePadding:12,captionFontSize:14,captionPadding:8,captionRadius:8,captionInnerPaddingVertical:5,captionInnerPaddingSide:8,tableTitleFontSize:23,tableContentPadding:14,tableContentFontSize:19,tableContentPaddingLeft:18},C={shortSide:36,longSide:64,radius:4,padding:1.5,tileBorderWidth:1,bodyFontSize:1.7875,innerTilePadding:2,captionFontSize:1.55,captionPadding:2,captionRadius:.7,captionInnerPaddingVertical:.5,captionInnerPaddingSide:.7,tableTitleFontSize:2.1,tableContentPadding:.65,tableContentFontSize:1.6,tableContentPaddingLeft:6};function y(t,n,i){let e=t,r=n;i&&(e=n,r=t);const o=Math.min(1*e/S,1*r/540);return function(t,n){const i=Object.entries(t).map((t=>{let[i,e]=t;return["bodyFontSize"].includes(i)?[i,e*n]:[i,Math.floor(e*n)]}));return Object.fromEntries(i)}(w(),o)}function W(t,n,i){let e,o;i?(e=0,o=0):(o=(0,r.v)(n,[490,1174],[72,250]),e=t>800?(0,r.v)(t,[1440,1632],[194,271]):(0,r.v)(t,[490,800],[116,194]));const a=Math.round(n-2*o);let s=Math.round(t-2*e),d=a-20;i||(s=t-280,d=n-156);const l=y(s,d,i),c=i?l.shortSide:l.longSide,u=i?l.longSide:l.shortSide,h=(t-c)/2,g=(n-u)/2,S=i?0:26;let f=Math.floor((0,r.v)(u,[200,450],[50,96]));return 1.18*(u+2*f)>n&&(f=Math.floor((n/1.18-u)/2)),i||(f=78),{outlineWidth:134,propertyPanelWidth:256,toolbarWidth:40,pageContainerWidth:s,pageContainerHeight:d,pageHorizontalSpacing:h,pageVerticalSpacing:g,pageVerticalMargin:f,pageMargin:S}}class v{constructor(t,n,i,r){(0,e.Z)(this,"internalSizes",void 0),(0,e.Z)(this,"isVertical",void 0),r?(this.internalSizes=r,this.isVertical=i):(this.internalSizes=y(t||0,n||0,i),this.isVertical=i)}static fromStaticSizes(t,n){return new v(null,null,n,t)}static fromPageAndWindowDimension(t,n,i){if(i){const i=new v(null,null,!0,m);return i.internalSizes.shortSide=t,i.internalSizes.longSide=n,i}return new v(t,n,!1,null)}get pageSizes(){return{radius:this.internalSizes.radius,padding:this.internalSizes.padding,height:this.isVertical?this.internalSizes.longSide:this.internalSizes.shortSide,width:this.isVertical?this.internalSizes.shortSide:this.internalSizes.longSide}}get rowSizes(){const t=(this.tileHeight+this.internalSizes.padding)/a.Cj,n=(this.pageSizes.width-2*this.pageSizes.padding)/a.Cj/(16/9);return{unitRowHeight:this.isVertical?n:t}}get sliderTriggerSizes(){return{outTriggerHeight:.3125*this.internalSizes.longSide,inTriggerHeight:.3333333333333333*this.internalSizes.longSide}}trimPanelSizes(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const{tileSizes:n}=this;return{height:108*t,width:n.width+16,filmstripHeight:40*t,filmstripWidth:n.width+16-48,trimmerHeight:44*t,trimmerWidth:n.width+16-24,buttonContainerHeight:28*t,buttonContainerWidth:.2771317829457364*n.width,buttonContainerOffset:.4321705426356589*n.width}}calculatePageHeight(t){return t*this.rowSizes.unitRowHeight+this.pageSizes.padding}get tileHeight(){return this.internalSizes.shortSide-2*this.internalSizes.padding}get tileWidth(){return(this.internalSizes.longSide-3*this.internalSizes.padding)/2}get mobileTileWidth(){return this.internalSizes.shortSide-2*this.internalSizes.padding}get tileSizes(){const t=this.tileHeight,n=this.isVertical?this.mobileTileWidth:this.tileWidth,i=this.internalSizes.longSide-2*this.internalSizes.padding,e=(i-2*n)/2,r=this.isVertical?this.mobileTileWidth:i;return{height:t,width:n,grabBarLength:n/6,margin:this.isVertical?0:e,fullHeight:this.isVertical?i:t,fullWidth:r,radius:this.internalSizes.radius-this.internalSizes.padding,border:void 0===this.internalSizes.tileBorderWidth?3:this.internalSizes.tileBorderWidth,bodyFontSize:this.internalSizes.bodyFontSize,innerTilePadding:this.internalSizes.innerTilePadding,captionFontSize:this.internalSizes.captionFontSize,captionPadding:this.internalSizes.captionPadding,captionRadius:this.internalSizes.captionRadius,captionInnerPaddingSide:this.internalSizes.captionInnerPaddingSide,captionInnerPaddingVertical:this.internalSizes.captionInnerPaddingVertical,tableContentFontSize:this.internalSizes.tableContentFontSize,tableContentPadding:this.internalSizes.tableContentPadding,tableTitleFontSize:this.internalSizes.tableTitleFontSize,tableContentPaddingLeft:this.internalSizes.tableContentPaddingLeft}}get embedPreviewIconSize(){return this.internalSizes.longSide>134?96:28}}function F(t){return v.fromPageAndWindowDimension(t,9/16*t,!1)}function O(){if(o.tq&&!o.nI&&!(0,d.sk)()){return F(window.innerWidth-2*(s.Bb+P+z+b))}return F(300-2*P)}const T=c(c({},O().internalSizes),{},{radius:10})},71048:function(t,n,i){i.d(n,{sk:function(){return e}});i(85518);function e(){return!1}}}]);
