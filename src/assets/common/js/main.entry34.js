(self.webpackChunkreborn=self.webpackChunkreborn||[]).push([[3358],{89983:function(e,a,i){var o=i(21004);e.exports={url:{evaluateQuestion:"/question/evaluate",getRightOptions:"/questions/right_option",getTaQuestionList:"/practice/question/list",suggestKaoyanQuestion:"/kaoyan/suggest",suggestFinalExamQuestion:"/finalexam/suggest",suggestSchoolBookQuestion:"/schoolbooks/suggest",adminDelQuestion:"/admin/edit/question/del",adminRecoverQuestion:"/admin/edit/question/recover",adminShieldQuestion:"/admin/edit/question/shield",begin:"/test/#{testId}/begin",searchTip:"/tag/search",getQuestionTags:"/question/tags",getSubmissionHistory:"/problem/coding/submission/history",getSubmissionDetail:"/problem/coding/submission/detail",getIsSubmit:"/user/userfeedback/needFeedBack-v2",setUserFeedBack:"/user/userfeedback/save-v2"}},o.add(e.exports,e.exports.url)},35904:function(e,a,i){"use strict";var o=i(31359),n=i.n(o),t=i(88842),s=i.n(t),l=i(69751),r=i.n(l),c=i(93172),u=i(89983),h=i.n(u),d=i(8604),f=i(70208),v=i(73888),g=i(13993),p=i(6813),m=i(31471),S=i(11130),b=i(71295);function k(){var e=this,a=e.searchResultDiv,i=e.searchIpt.val();if(!i)return e.errorTipsDiv.show(),void e.errorTipsDiv.html("输入错误！");function o(i){if(i&&0!==i.length)if(1===i.length){var o="/finalexam/detail/"+i[0].id;window.location.href=o}else{var t,l="";n()(m).call(m,i,(function(e,a){var i=g.execTpl(['<a href="/finalexam/detail/#{id}" class="list current">','<span class="college-name">#{name}</span>','<span class="college-info">共#{qcount}套真题</span>',"</a>"].join(""),e);l+=i})),e.searchResultDiv.show(),s()(t=e.searchResultDiv).call(t,"div.college-list").html(l),b.scrollToEl({el:a,animation:!0,ext:-1*c.Z.getNavHeight()})}else e.errorTipsDiv.show(),e.errorTipsDiv.html("没有找到查询院校")}e.oSearchCache[i]?o(e.oSearchCache[i]):f.mark(a)||h().suggestKaoyanQuestion({body:{q:i},call:function(e){o(e.data)},error:function(e){},always:function(){f.clear(a)}})}p.ready({initialize:function(){var e=this;m.copy(e,window,["pageInfo"]),e.oAreaDiv=d("#areaSection"),e.oSchoolDiv=d("#schoolSection"),e.oSchoolMap={},e.initializeSearch(),e.initRegionSchool()},events:{"click #jsSearchBtn":k,"click a.tag-label":function(e){var a,i=d(e.currentTarget);if(i.hasClass("selected"))return;var o=s()(a=i.closest("section")).call(a,"a.tag-label");r()(m).call(m,o,(function(e){d(e).hasClass("selected")&&d(e).removeClass("selected")})),i.addClass("selected"),this.oSelectReginDiv=i;var n=i.html();this.renderSchool(n)}},initializeSearch:function(){var e=this,a=d("#jsSearch");e.searchIpt=S.transform(a),e.searchResultDiv=d("#searchResult"),e.errorTipsDiv=d("div.kaoyan-tips"),e.oSearchCache={};var i,o=s()(a).call(a,"input");o.on("keydown",(function(a){"13"===a.keyCode+""&&e.clickSearch()})),o.attr("autocomplete","off");var n,t=s()(a).call(a,"div.ky-search-tips");0===t.length&&(t=d('<div class="ky-search-tips" style="display:none;"></div>'),a.append(t));function l(e){if(e&&0!==e.length){for(var a="",i=0,o=e.length;i<o;i++)a+='<a href="/finalexam/detail/'+e[i].id+'">'+e[i].name+"</a>";t.html(a).show()}else t.html("").hide()}t.hide(),b.bindChange(o,(function(){i&&i.clearCache();var a=o.val();e.errorTipsDiv.hide(),a?e.oSearchCache[a]?l(e.oSearchCache[a]):h().suggestFinalExamQuestion({body:{q:a},call:function(i){e.oSearchCache[a]=i.data,o.val()===a?l(i.data):t.hide()}}):t.hide()})),i=v.mix({el:o,canFire:function(){return"block"===t.css("display")},getItem:function(){return s()(t).call(t,"a")},up:function(e,a,i){d(i[a]).removeClass("hover"),d(i[e]).addClass("hover")},down:function(e,a,i){d(i[a]).removeClass("hover"),d(i[e]).addClass("hover")},selected:function(e,a,i){var o=d(s()(t).call(t,"a")[e]).attr("href");o&&(window.location.href=o)}}),t.on("click","a",(function(e){e.preventDefault();var a=d(e.currentTarget).attr("href");a&&(window.location.href=a)})),o.on("focus",(function(){n&&window.clearTimeout(n),a.addClass("onfocus")})).on("blur",(function(){n&&window.clearTimeout(n),n=window.setTimeout((function(){t.hide(),a.removeClass("onfocus")}),320)}))},initRegionSchool:function(){var e=this,a=m.json(e.pageInfo.schools);if(!a||0===a.length)return;var i="";n()(m).call(m,a,(function(a,o){var n=g.execTpl('<a href="javascript:void(0);" class="tag-label'+(0===o?" selected":"")+'">#{area}</a>',a);i+=n,e.oSchoolMap[a.area]=a.schools})),e.oAreaDiv.html(i),e.renderSchool(a[0].area)},renderSchool:function(e){var a=this.oSchoolMap[e];if(!a||0===a.length)return;var i="";n()(m).call(m,a,(function(e,a){var o=g.execTpl(['<a href="/finalexam/detail/#{schoolId}" class="list current">','<span class="college-name">#{schoolName}</span>','<span class="college-info">共#{qcount}道真题</span>',"</a>"].join(""),e);i+=o})),this.oSchoolDiv.html(i)},clickSearch:k})},84884:function(){},43057:function(e){"use strict";e.exports=vendor_library}},function(e){var a=function(a){return e(e.s=a)};e.O(0,[1026],(function(){return a(40170),a(7332),a(46265),a(84884),a(35904)}));e.O()}]);