(self.webpackChunkreborn=self.webpackChunkreborn||[]).push([[5944],{76791:function(n,t,e){var i=e(69751),o=e(31359),a=e(34621),c=e(88842),r=e(8604),l=e(6813),u=e(31471),d=e(64645),f=e(33337);l.ready({initialize:function(){this.initLangSel(),this.initStyle()},initLangSel:function(){var n=window.pageInfo,t=d.getParams(),e=i(u).call(u,n.allLang,(function(n){return{text:n,value:n,checked:n===t.language}}));e.unshift({text:"全部语言",value:undefined}),new f({renderTo:r(".js-lang-sel"),renderBy:"html",text:"全部语言",options:e,listeners:{change:function(){var n={language:this.val()},t=window.location.href;n.page=undefined,window.location.href=d.addParam(n,t)}}})},initStyle:function(){var n=r(".git-project-code-mod");o(u).call(u,n,(function(t,e){if(e%2==0){t=r(t);var i=r(n[e+1]),o=a(r).call(r,c(t).call(t,".git-project-code-bd .git-project-code-cont").html()),l=a(r).call(r,c(i).call(i,".git-project-code-bd .git-project-code-cont").html());o||l||(t.height("auto"),i.height("auto"))}}))}})},4892:function(){},43057:function(n){"use strict";n.exports=vendor_library}},function(n){var t=function(t){return n(n.s=t)};n.O(0,[1026],(function(){return t(40170),t(7332),t(46265),t(4892),t(76791)}));n.O()}]);