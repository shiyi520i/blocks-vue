(self.webpackChunkreborn=self.webpackChunkreborn||[]).push([[5143],{76494:function(e,t,a){var n=a(21004);e.exports={url:{addFeedback:"/deliver/feedback/add",updateResumeBasic:"/resume/basic/update",updateResumeExt:"/resume/ext/update",updateResumeHead:"/resume/head/update",updateResumeTemplate:"/resume/template/update",updateResumeName:"/resume/name/update",delResume:"/resume/del",newResume:"/resume/new",updateResumeDone:"/resume/done/update",authorizeDoExclusicePaper:"/resume/authorize",openRecommand:"/recommand/open",closeRecommand:"/recommand/cancel",defaultDeliver:"/recommand/default/deliver",getResumeJson:"/resume/json/#{resumeUuid}",checkIdCard:"/resume/check-id-card",parseResumeUrl:"/resume/parse-resume",syncByComplete:"/resume/sync-by-complete",parseUpdateAttach:"/resume/parse/update",getResume:"/resume/#{uuid}/data",getResumeList:"/resume/templateList",addAttachment:"/resume/newAttachment",defaultResumeStorage:"/resume/parse-resume-save",getResumeRecommendJob:"/resume/recommend-job",getDefaultResume:"/v2/resume/chosen-resume",getResumeEvaluationData:"/resume/evaluation/score/data"}},n.add(e.exports,e.exports.url)},77179:function(e,t,a){"use strict";var n=a(88842),r=a.n(n),o=a(69751),i=a.n(o),s=a(34621),c=a.n(s),l=a(76494),p=a.n(l),u=a(8604),d=a(9854),m=a(70208),v=a(70570),f=a(31471),g=a(13993),h=a(49370),_=a(11130),b=a(33337),w=a(70304),I=a(95234),y=a(7634),k=v.create();t.Z=k,v.mix(k,d,{_template:'\n    <div class="pop-authorize clearfix">\n        <div class="pop-authorize-tip">\n            <i class="icon-exclamation-sign"></i>\n            首次练习公司真题试卷需要提交基本信息，提交后即可无限制练习该类题目；点击"确定"按钮提交信息，即表示你同意 <a class="link-green" href="https://static.nowcoder.com/protocol/privacy-policy.html" target="_blank">《用户隐私政策》</a>，系统会视你和企业适配程度，向企业主动推荐你。牛客网会对你的信息严格保密，仅练习试卷所属企业可见，请认真填写以下信息。\n        </div>\n        <div class="form-group">\n            <div class="control-group"><input type="text" placeholder="真实姓名" class="js-pop-name" value="#{name}"></div>\n            <div class="control-group"><div class="btn-group"><button class="js-pop-gender"></button></div></div>\n        </div>\n        <div class="form-group">\n            <div class="control-group"><input type="text" placeholder="邮箱" class="js-pop-email"></div>\n            <div class="control-group form-phone-fill pop-oversea-phone">\n                <div class="btn-group" id="jsCountry"><button class="btn btn-default dropdown-toggle">中国+86</button></div>\n                <input type="text" placeholder="手机" class="js-pop-phone"></div>\n        </div>\n        <div class="form-group">\n            <div class="control-group"><input type="text" placeholder="你的学校" class="js-pop-school"></div>\n            <div class="control-group"><div class="btn-group"><button class="js-pop-edu"></button></div></div>\n        </div>\n        <div class="form-group">\n            <div class="control-group"><div class="btn-group"><button class="js-pop-workTime"></button></div></div>\n            <div class="control-group"><input type="text" placeholder="专业" class="js-pop-major"></div>\n        </div>\n        <a href="javascript:void(0);" class="btn btn-primary btn-lg" id="jsSubmit">确定</a>\n    </div>',listeners:[{name:"render",type:"custom",handler:function(){var e=this;e.cpn={},e.initData(),e.cpn.zip=y.initPhoneZip({renderTo:u("#jsCountry")})}},{name:"click a.btn",handler:function(e){var t=this,a=u(e.currentTarget),n=t.rawConfig,r=c()(u).call(u,t.nameIpt.val()),o=c()(u).call(u,t.emailIpt.val()),i=c()(u).call(u,t.phoneIpt.val()),s=c()(u).call(u,t.schoolIpt.val()),l=c()(u).call(u,t.eduSelect.val()),d=c()(u).call(u,t.workTimeSelect.val()),v=c()(u).call(u,t.majorIpt.val()),f=c()(u).call(u,t.genderSelect.val());if(!r&&t.nameIpt.setErrorTips("姓名不能为空"),!g.isEmail(o)&&t.emailIpt.setErrorTips("请填写正确的邮箱地址"),("+86"===t.cpn.zip.val()?!g.isPhone(i):!/^\d{3,}$/.test(i))&&t.phoneIpt.setErrorTips("请填写正确的手机号码"),!s&&t.schoolIpt.setErrorTips("学校不能为空"),!l&&t.eduSelect.error(),!d&&t.workTimeSelect.error(),!v&&t.majorIpt.setErrorTips("专业不能为空"),!f&&t.genderSelect.error(),!(r&&o&&g.isEmail(o)&&s&&l&&d&&i&&("+86"===t.cpn.zip.val()?g.isPhone(i):/^\d{3,}$/.test(i))&&v&&f))return!0;if(m.mark(a))return;p().authorizeDoExclusicePaper({body:{name:r,gender:f,email:o,phone:t.cpn.zip.val()+i,school:s,eduLevel:l,workTime:d,major:v,resumeId:+n.updateResumeId||0},call:function(){n.callCb&&n.callCb(),t.popup.close()},error:function(e){h.alert(e.msg)},always:function(){m.clear(a)}})}}],show:function(e){var t=new k(e=e||{});return h.wrap(t,{title:"提交基本信息，开启企业授权真题权限",width:610,content:t.html(),hasNoFooter:!0,close:e.closeCb}),t}},{initialize:function(e){this.pageInfo=e.info||window.pageInfo||{}},initData:function(){var e=this,t=e.getEl();e.nameIpt=_.transform(r()(t).call(t,".js-pop-name").parent()),e.emailIpt=_.transform(r()(t).call(t,".js-pop-email").parent()),e.phoneIpt=_.transform(r()(t).call(t,".js-pop-phone").parent()),e.schoolIpt=_.transform(r()(t).call(t,".js-pop-school").parent(),{click:{handler:function(){var e=this;w.show({noUnique:!0,call:function(t,a){e.val(a)}})}}}),e.genderSelect=new b({renderTo:r()(t).call(t,".js-pop-gender"),renderBy:"replaceWith",text:"性别",options:[{text:"男",value:"男"},{text:"女",value:"女"}]});var a=i()(f).call(f,I.eduNames,(function(e){return{text:e,value:e}}));e.eduSelect=new b({renderTo:r()(t).call(t,".js-pop-edu"),renderBy:"replaceWith",text:"最高学历",options:a});var n=(new Date).getFullYear(),o=i()(f).call(f,f.range(4,-21,-1),(function(e){return{text:n+e,value:n+e}}));e.workTimeSelect=new b({renderTo:r()(t).call(t,".js-pop-workTime"),renderBy:"replaceWith",text:"毕业年份",options:o}),e.majorIpt=_.transform(r()(t).call(t,".js-pop-major").parent()),e.pageInfo.name&&e.nameIpt.val(e.pageInfo.name),e.pageInfo.email&&e.emailIpt.val(e.pageInfo.email),e.pageInfo.phone&&e.phoneIpt.val(e.pageInfo.phone),e.genderSelect.val(e.pageInfo.gender||"男"),e.pageInfo.school&&e.schoolIpt.val(e.pageInfo.school),e.pageInfo.edulevel&&e.eduSelect.val(e.pageInfo.edulevel),e.pageInfo.workTime&&e.workTimeSelect.val(+e.pageInfo.workTime),e.pageInfo.major&&e.majorIpt.val(e.pageInfo.major)},_getData:function(e){return{name:e.name}}})},4167:function(e,t,a){"use strict";var n=a(7658),r=a.n(n),o=a(91762),i=a(88842),s=a.n(i),c=a(8604),l=a(71295),p={init:function(){var e=c(".js-job-select"),t=s()(e).call(e,".class-type-list");t.outerWidth()>e.outerWidth()&&t.addClass("pos-left"),l.hoverToggle({el:e,enter:function(){return e.addClass("open")},leave:function(){return e.removeClass("open")}}),e.on("click","ul.class-type-list li",(function(t){return e.removeClass("open")}))}};var u=a(71649),d=a(31359),m=a.n(d),v=a(89913),f=a.n(v),g=a(8604),h=a(31471),_=a(64645),b=a(13993),w=a(64907),I={init:function(){var e=this;e.initData(),e.initCheckbox(),e.initTags(),e.initAction()},initData:function(){var e=b.split(window.parameter.mutiTagIds||"","_");e=h.without(e,""),this.mutiTagIds=e},initCheckbox:function(){w.transform(g("#jsDoneCheckbox"),{change:function(){var e=this.isChecked()?_.addParam({filter:2}):_.removeParam("filter");e=_.addParam({page:1},e),window.location.href=e}})},initTags:function(){var e=this.mutiTagIds;m()(h).call(h,e,(function(e){return g("a.js-tag[data-id=".concat(e,"]")).addClass("selected")}))},initAction:function(){var e=this,t=g(document.body);t.on("click","a.js-tag",(function(t){var a=g(t.currentTarget).attr("data-id"),n=h.contains(e.mutiTagIds,a);e.addTag(a,n)})),t.on("click","a.tag-label span.del-tag",(function(t){var a=g(t.currentTarget).attr("data-id");e.addTag(a,!0)}))},addTag:function(e,t){var a,n;if(!e)return;var r=h.isArray(e)?e:e?[e]:[],o=h.without.apply(h,f()(a=[this.mutiTagIds]).call(a,(0,u.Z)(r)));r.length>0&&!t&&(o=f()(n=[]).call(n,(0,u.Z)(o),(0,u.Z)(r))),this.mutiTagIds=o;var i=0===o.length?"":o.join("_"),s=i?_.addParam({mutiTagIds:i}):_.removeParam("mutiTagIds");s=_.removeParam("query",s),(s=_.removeParam("page",s))!==window.location.href&&(window.location.href=s)}};var y=a(34621),k=a.n(y),C=a(77179),T=a(8604),x=a(93292),j={init:function(){var e=window.parameter||{};function t(e){var t=T('<form method="post" action="/test/'.concat(e,'/begin" style="display:none;"><input type="submit" name="button"></form>'));T("body").append(t),s()(t).call(t,"input").click()}T(document).on("click","a.js-go-summary",(function(a){var n=T(a.currentTarget),r=k()(T).call(T,n.attr("data-id")),o=k()(T).call(T,n.attr("data-href")),i="1"===k()(T).call(T,n.attr("data-v"));return e.isInAGroup?x.isLogin()?!e.isAuthorize&&i?C.Z.show({info:e.authorizeInfo,callCb:function(){return t(r)}}):void t(r):void 0:window.location.href=o}))}};var P=a(69751),R=a.n(P),D=a(1284),E=a.n(D),S=a(8604),A=a(31471),z=a(29362),N={init:function(){var e=this;e.initEl(),e.initAction(),e.initSearch()},initEl:function(){var e,t,a=this,n=a.el=S(".js-search-input");a.form=s()(n).call(n,"form"),a.tagDv=s()(n).call(n,".search-filter-tags"),a.btn=s()(e=a.form).call(e,".button"),a.input=s()(t=a.form).call(t,".js-query")},initAction:function(){var e=this,t=e.el,a=e.input,n=e.tagDv;function r(){var e=k()(S).call(S,a.val());n[e?"hide":"show"]()}r(),a.on("input, click",(function(){t.addClass("focus"),n.hide()})),a.on("blur",(function(){t.removeClass("focus"),a.val(k()(S).call(S,a.val())),r()}))},initSearch:function(){var e=this,t=e.el,a=e.btn,n=e.input,r=e.form;z.show({input:n,defaultIndex:-1,attach:{extOffset:{left:-32}},needSame:!0,zIndex:100,reqList:function(e,t){E().searchSuggest({query:{query:e,type:"paper"},call:function(e){return t(R()(A).call(A,e.data,(function(e){return{text:e}}))||[])},error:function(){return t([])}})},ok:function(e){n.val(e.text),r.submit()}}).getEl().css("min-width",t.outerWidth()-a.outerWidth()),n.attr("autocomplete","off")}};var O=a(36594),J=a(44619),U=a(97686),G=a(64645),L=a(31471),q=G.getParam("page"),B=(0,U.generateId)();var W={data:function(){var e=window.pageInfo,t=e.isInAGroup,a=e.userJobParent,n=e.userJobParentType;return{path:window.ncDeployImageRoot||"",paperVos:[],paperList:L.json(window.pageInfo.paperVosJson||{}),page:q,categoryRankPaperDone:L.json(window.pageInfo.categoryRankPaperDoneJson),isInAGroup:t,userJobParent:a,userJobParentType:n}},directives:{gio:new O.Q},methods:{getGioData:function(e,t,a){return{name:"contentItemView",value:{contentType_var:e.contentType_var,contentID_var:"".concat(e.contentID_var),contentName_var:e.contentName_var,questionBankType_var:e.questionBankType_var,isAuthorization_var:e.isAuthorization_var?"是":"否",company_var:e.company_var,position_var:e.position_var,pit_var:"".concat(t),pageName_var:"公司真题",logid_var:"".concat(B),pageLevel1_var:"题库",pageLevel2_var:"公司真题",testPaperYear_var:a||"无"}}},actionClickItem:function(e,t,a){J.GioQuestion.contentItemClick(this.getGioData(e,t,a).value)}}},Z=(0,a(51900).Z)(W,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"content-item-box content-item-new-box clearfix"},[!e.page&&e.categoryRankPaperDone&&e.categoryRankPaperDone.length?a("li",[a("section",[a("div",{staticClass:"mock-exercise-rank"},[a("div",{staticClass:"hd"},[e._m(0),e._v(" "),a("div",{staticClass:"type"},[e._v("\n                        "+e._s(e.userJobParent)+"\n                    ")])]),e._v(" "),a("div",{staticClass:"bd"},e._l(e.categoryRankPaperDone,(function(t,n){return a("a",{key:n+t.companyName,staticClass:"mock-rank-item",attrs:{href:"/contestRoom?categories="+e.userJobParentType+"&mutiTagIds="+t.companyTag}},[a("span",{staticClass:"num"},[a("img",{attrs:{src:e.path+"/images-nk/res/interview/mock/rank/"+t.png,alt:""}})]),e._v(" "),a("span",{staticClass:"txt"},[e._v("\n                            "+e._s(t.companyName)+"\n                        ")]),e._v(" "),a("span",{staticClass:"info"},[a("i",{staticClass:"icon-nc-fire2"}),e._v("\n                            "+e._s(t.paperDoneNumber)+"\n                        ")])])})),0)])])]):e._e(),e._v(" "),e._l(e.paperList,(function(t,n){return a("li",{directives:[{name:"gio",rawName:"v-gio",value:e.getGioData(t.properties.contentItemClick,n,t.properties.paper.year),expression:"getGioData(item.properties.contentItemClick, index, item.properties.paper.year)"}],key:n,on:{"!click":function(a){return e.actionClickItem(t.properties.contentItemClick,n,t.properties.paper.year)}}},[a("a",{"class":(e.isInAGroup?"nc-req-auth":"")+" js-go-summary",attrs:{href:"javascript:void(0);","data-href":"/test/"+t.properties.paper.id+"/summary","data-id":t.properties.paper.id,"data-v":""+(t.properties.paper.companyExclusive?1:0)}},[a("div",{staticClass:"content-item-brief"},[t.properties.paper.hasTested?a("div",{staticClass:"p-tag-done",attrs:{title:"已完成"}}):e._e(),e._v(" "),a("h1",[e._v(e._s(t.properties.paper.paperName)),a("i",{staticClass:"v-tag"})]),e._v(" "),a("div",{staticClass:"web-logoimg"},[a("img",{attrs:{src:t.properties.paper.imgUrl||"//static.nowcoder.com/images/weblogo/gray_logo/0.png"}})]),e._v(" "),a("div",{staticClass:"exam-foot"},[e._v("热度指数："+e._s(t.properties.paper.personTotal))]),e._v(" "),a("dl",{staticClass:"exam-info"},[t.properties.paper.companyExclusive?a("dd",[a("i",{staticClass:"v-tag"}),a("span",{staticClass:"v-tag-text"},[e._v("企业提供")])]):e._e(),e._v(" "),a("dd",[a("span",{staticClass:"link-green"},[e._v("适合"+e._s(t.properties.paper.jobTagCount)+"个岗位")])]),e._v(" "),e._m(1,!0)]),e._v(" "),t.properties.paper.introduction?a("div",{staticClass:"item-ft"},[a("span",{staticClass:"txt"},[e._v(e._s(t.properties.paper.introduction))])]):e._e()]),e._v(" "),a("div",{staticClass:"difficulty"},[a("span",{staticClass:"item-label"},[e._v("难度系数：")]),e._v(" "),a("span",{"class":"stars star-"+t.properties.paper.diffcult,attrs:{title:"难度系数"}})])])])}))],2)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"cont"},[a("i",{staticClass:"icon-nc-clock-1-"}),e._v(" "),a("span",{staticClass:"txt"},[e._v("真题热练榜")]),e._v(" "),a("span",{staticClass:"time-tag"},[e._v("24小时")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dd",[a("span",{staticClass:"btn btn-block btn-primary"},[e._v("查看详情")])])}],!1,null,null,null).exports,$=a(8604),F=a(71295),Q=a(6813),V=a(64645),H=a(46850),Y=a(34807),K=a(93292);Q.ready({initialize:function(){var e=this;e.initShowPopup(),p.init(),I.init(),j.init(),N.init(),e.initPos(),e.initPaper()},initShowPopup:function(){var e=window.pageInfo||{};if(!K.isLogin())return;if(0!==(+e.userJobId||0))return;if(H.get("RESOURCE_NO_AUTO_POPUP"))return;var t=o.G.show({propsData:{title:"根据你的基本情况推荐实用资源",pageName_var:"专项练习"}});t.$on("after-submit",(function(){window.location.reload()})),t.$on("close",(function(){H.set("RESOURCE_NO_AUTO_POPUP",!0,2592e5)}))},initPos:function(){if("content"!==V.getParam("target"))return;window.setTimeout((function(){F.scrollToEl({el:$(".js-paper-content"),ext:-1*Y.getNavHeight(),animation:!0})}),500)},initPaper:function(){var e=$("#js-paper-list");if(e.length){new(r().extend(Z))({el:e.get(0)})}}})},36594:function(e,t,a){"use strict";a.d(t,{Q:function(){return p}});var n=a(16944),r=a.n(n),o=a(31359),i=a.n(o),s=a(2526),c=a.n(s),l=a(97686);function p(){if(l.gio&&window.IntersectionObserver){var e=new(r()),t=new IntersectionObserver((function(t,a){var n;i()(n=c()(t).call(t,(function(e){return 1===e.intersectionRatio}))).call(n,(function(t){var n=t.target,r=e.get(n),o=r.name,i=r.value;o&&i&&(0,l.gio)("track",o,i),a.unobserve(n)}))}),{threshold:[1]});return{bind:function(a,n){e.set(a,n.value),t.observe(a)},unbind:function(a){e["delete"](a),t.unobserve(a)}}}}},59123:function(){},43057:function(e){"use strict";e.exports=vendor_library}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[1026],(function(){return t(40170),t(7332),t(46265),t(59123),t(4167)}));e.O()}]);