!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-poll",[],e):"object"==typeof exports?exports["vue-poll"]=e():t["vue-poll"]=e()}(this,function(){return function(t){function e(s){if(n[s])return n[s].exports;var o=n[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1);var s=n(6)(n(7),n(8),null,null);t.exports=s.exports},function(t,e,n){var s=n(2);"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);n(4)("23f7b8d6",s,!0)},function(t,e,n){e=t.exports=n(3)(!1),e.push([t.id,'.vue-poll{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.vue-poll .noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-poll .qst{font-weight:400}.vue-poll .ans-cnt{margin:20px 0}.vue-poll .ans-cnt .ans{position:relative;margin-top:10px}.vue-poll .ans-cnt .ans:first-child{margin-top:0}.vue-poll .ans-cnt .ans-no-vote{text-align:center;border:2px solid #77c7f7;box-sizing:border-box;border-radius:5px;cursor:pointer;padding:5px 0;transition:background .2s ease-in-out;-webkit-transition:background .2s ease-in-out;-moz-transition:background .2s ease-in-out}.vue-poll .ans-cnt .ans-no-vote .txt{color:#77c7f7;transition:color .2s ease-in-out;-webkit-transition:color .2s ease-in-out;-moz-transition:color .2s ease-in-out}.vue-poll .ans-cnt .ans-no-vote.active{background:#77c7f7}.vue-poll .ans-cnt .ans-no-vote.active .txt{color:#fff}.vue-poll .ans-cnt .ans-voted{padding:5px 0}.vue-poll .ans-cnt .ans-voted .percent,.vue-poll .ans-cnt .ans-voted .txt{position:relative;z-index:1}.vue-poll .ans-cnt .ans-voted .percent{font-weight:700;min-width:51px;display:inline-block;margin:0 10px}.vue-poll .ans-cnt .ans-voted.selected .txt:after{content:"\\2714";margin-left:10px}.vue-poll .ans-cnt .ans .bg{position:absolute;width:0;top:0;left:0;bottom:0;z-index:0;background-color:#e1e8ed;border-top-left-radius:5px;border-bottom-left-radius:5px;transition:all .3s cubic-bezier(.5,1.2,.5,1.2);-webkit-transition:all .3s cubic-bezier(.5,1.2,.5,1.2);-moz-transition:all .3s cubic-bezier(.5,1.2,.5,1.2)}.vue-poll .ans-cnt .ans .bg.selected{background-color:#77c7f7}.vue-poll .votes{font-size:14px;color:#8899a6}.vue-poll .submit{display:block;text-align:center;margin:0 auto;max-width:80px;text-decoration:none;background-color:#41b882;color:#fff;padding:10px 25px;border-radius:5px}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=s(o),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(a).concat([r]).join("\n")}return[n].join("\n")}function s(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=n(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(s[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&s[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function s(t){for(var e=0;e<t.length;e++){var n=t[e],s=u[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(r(n.parts[o]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(r(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,n,s=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(s){if(v)return h;s.parentNode.removeChild(s)}if(m){var r=f++;s=p||(p=o()),e=a.bind(null,s,r,!1),n=a.bind(null,s,r,!0)}else s=o(),e=i.bind(null,s),n=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}function a(t,e,n,s){var o=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function i(t,e){var n=e.css,s=e.media,o=e.sourceMap;if(s&&t.setAttribute("media",s),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(5),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=c(t,e);return s(o),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r],i=u[a.id];i.refs--,n.push(i)}e?(o=c(t,e),s(o)):o=[];for(var r=0;r<n.length;r++){var i=n[r];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete u[i.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],s={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],l=r[2],c=r[3],u={id:t+":"+o,css:i,media:l,sourceMap:c};s[a]?s[a].parts.push(u):n.push(s[a]={id:a,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,s){var o,r=t=t||{},a=typeof t["default"];"object"!==a&&"function"!==a||(o=t,r=t["default"]);var i="function"==typeof r?r.options:r;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),s){var l=Object.create(i.computed||null);Object.keys(s).forEach(function(t){var e=s[t];l[t]=function(){return e}}),i.computed=l}return{esModule:o,exports:r,options:i}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"Poll",props:{question:{type:String,required:!0},answers:{type:Array,required:!0},showResults:{type:Boolean,"default":!1},showTotalVotes:{type:Boolean,"default":!0},finalResults:{type:Boolean,"default":!1},multiple:{type:Boolean,"default":!1},customId:{type:Number,"default":0}},data:function(){return{visibleResults:JSON.parse(this.showResults)}},computed:{totalVotes:function n(){var n=0;return this.answers.filter(function(t){!isNaN(t.votes)&&t.votes>0&&(n+=parseInt(t.votes))}),n},totalVotesFormatted:function(){return this.totalVotes.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},mostVotes:function(){var t=0;return this.answers.filter(function(e){!isNaN(e.votes)&&e.votes>0&&e.votes>=t&&(t=e.votes)}),t},calcAnswers:function(){var t=this;return 0===this.totalVotes?this.answers.map(function(t){return t.percent="0%",t}):this.answers.filter(function(e){return!isNaN(e.votes)&&e.votes>0?e.percent=Math.round(parseInt(e.votes)/t.totalVotes*100)+"%":e.percent="0%",e})},totalSelections:function(){return this.calcAnswers.filter(function(t){return t.selected}).length}},methods:{handleMultiple:function(){var t=[];this.calcAnswers.filter(function(e){e.selected&&(e.votes++,t.push({value:e.value,votes:e.votes}))}),this.visibleResults=!0;var e={arSelected:t,totalVotes:this.totalVotes};this.customId&&(e.customId=this.customId),this.$emit("addvote",e)},handleVote:function(t){if(this.multiple)return void 0===t.selected&&console.log("Please add 'selected: false' on the answer object"),void(t.selected=!t.selected);t.votes++,t.selected=!0,this.visibleResults=!0;var e={value:t.value,votes:t.votes,totalVotes:this.totalVotes};this.customId&&(e.customId=this.customId),this.$emit("addvote",e)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-poll"},[n("h3",{staticClass:"qst",domProps:{innerHTML:t._s(t.question)}}),t._v(" "),n("div",{staticClass:"ans-cnt"},t._l(t.calcAnswers,function(e,s){return n("div",{key:s,"class":(o={ans:!0},o[e.custom_class]=e.custom_class,o)},[t.finalResults?[n("div",{staticClass:"ans-voted final"},[e.percent?n("span",{staticClass:"percent",domProps:{textContent:t._s(e.percent)}}):t._e(),t._v(" "),n("span",{staticClass:"txt",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),n("span",{"class":{bg:!0,selected:t.mostVotes==e.votes},style:{width:e.percent}})]:[t.visibleResults?n("div",{"class":{"ans-voted":!0,selected:e.selected}},[e.percent?n("span",{staticClass:"percent",domProps:{textContent:t._s(e.percent)}}):t._e(),t._v(" "),n("span",{staticClass:"txt",domProps:{innerHTML:t._s(e.text)}})]):n("div",{"class":{"ans-no-vote noselect":!0,active:e.selected},on:{click:function(n){n.preventDefault(),t.handleVote(e)}}},[n("span",{staticClass:"txt",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),n("span",{staticClass:"bg",style:{width:t.visibleResults?e.percent:"0%"}})]],2);var o})),t._v(" "),t.showTotalVotes&&(t.visibleResults||t.finalResults)?n("div",{staticClass:"votes",domProps:{textContent:t._s(t.totalVotesFormatted+" votes")}}):t._e(),t._v(" "),!t.finalResults&&!t.visibleResults&&t.multiple&&t.totalSelections>0?[n("a",{staticClass:"submit",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleMultiple(e)}}},[t._v("Submit")])]:t._e()],2)},staticRenderFns:[]}}])});