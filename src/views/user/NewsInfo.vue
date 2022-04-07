<template>
  <div>
    <div class="nk-container    ">

      <div class="nk-main clearfix">

        <!--主体内容-->
        <div class="nk-content">
          <div class="js-pendant"></div>
          <div class="module-box discuss-topic js-copy-mark" data-mark-info="作者：谁动了奶酪">
            <div class="discuss-topic-head">
              <h1 class="discuss-title"><span
                  class="js-post-title post-title">{{results.title}}</span>
                <a>
            <span class="tag-hot">
                <img src="static/picture/ico-hot.png" alt="">
                <span>烫</span>
            </span>
                </a>
              </h1>

              <div class="discuss-author clearfix">
                <a class="answer-head js-nc-avatar js-nc-card" data-card-uid="537973227">
                  <img src="static/picture/2a2d5994ca114b42ab6a8a8d16508669.gif" alt="头像">
                </a>

                <div class="post-detail">
            <span>
                <a class="js-nc-card level-color-5 post-name">{{results.author}}</a>
                <a class="js-nc-title-tips"><img class="identity-icon" data-identity="3" src="static/picture/3.png"></a>
            </span>

                  <div class="post-legend">
                    <span class="post-time">编辑于  {{results.time}}</span>
                    <div class="feed-legend">
                      <span style="cursor:pointer;" class="js-post-like nc-req-auth">赞 12</span>
                      <span class="feed-legend-pipe">|</span>
                      <span style="cursor:pointer;"
                            class="js-post-follow nc-req-auth">收藏 13</span>
                      <span class="feed-legend-pipe">|</span>
                      <span style="cursor:pointer;" class="nc-req-auth js-post-replay">回复<span
                          class="feed-legend-num">138</span></span>
                      <span class="feed-legend-pipe">|</span>
                      <span>浏览<span class="feed-legend-num">4374</span></span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            <div id="js-push"></div>

            <div class="js-inside"></div>

            <div class="post-topic-main">
              <div class="post-topic-des nc-post-content" >
                <div v-html="results.html"></div>
              </div>
              <div class="clearfix">
                <ul class="discuss-tags-mod">
                  <li class="js-tag-item">
                    <i class="icon-nc-check"></i>
                    <span class="discuss-tag-item">
                          <a class="nc-req-auth js-follow"><i class="icon-plus-sign"></i></a>
                          <a>C/C++</a>
                    </span>
                  </li>
                  <li class="js-tag-item">
                    <i class="icon-nc-check"></i>
                    <span class="discuss-tag-item">
                          <a class="nc-req-auth js-follow"><i class="icon-plus-sign"></i></a>
                          <a>后端开发</a>
                    </span>
                  </li>
                  <li class="js-tag-item" data-tag-id="640">
                    <i class="icon-nc-check"></i>
                    <span class="discuss-tag-item">
                          <a class="nc-req-auth js-follow"><i class="icon-plus-sign"></i></a>
                          <a>C++工程师</a>
                    </span>
                  </li>
                </ul>


                <ul class="oprt-tool-new clearfix">
                  <li>
                    <div class="oprt-div js-nc-title-tips  js-like-div" title=" 点赞 ">
                      <a class="js-post-like nc-req-auth oprt-item-new " style="width: 100%; display: inline-block;"><i
                          class="icon-nc-zan2"></i>(12)</a>
                    </div>
                  </li>
                  <li>
                    <div class="oprt-div js-follow-div js-nc-title-tips" title="收藏">
                      <a class="js-click-follow nc-req-auth oprt-item-new"
                         style="width: 100%; display: inline-block;"><i class="icon-star"></i>(13)</a>
                    </div>
                  </li>
                  <li class="oprt-item-share">
                    <div>
                      <a class="oprt-item-new js-share-oprt-item"><i class="icon-nc-share2"></i>分享</a>
                    </div>
                  </li>
                  <li>
                    <div style="width: 90px;">
                      <a class="js-post-replay oprt-item-new nc-req-auth js-nc-title-tips feed-post-replay" title="评论"><i class="icon-nc-msg2"></i>回复(138)</a>
                    </div>
                  </li>

                  <li>
                    <div>
                      <a class="js-nc-report oprt-item-new nc-req-auth js-nc-title-tips" data-id="848212" data-type="8" title="点击举报">举报</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!--主体内容结束-->
        <div class="nk-bar">
          <div class="module-box   ">
            <div class="module-head clearfix">
              <h1>技术交流近期热帖</h1>
            </div>
            <div class="module-body">
              <ul class="list-module">
                <li>
                  <div class="list-title">
                    <a rel="prefetch" class="list-name">字节后端一二三面面经</a>


                  </div>
                  <div class="list-legend">
                                <span class="comm-num">
                                    回复<a rel="prefetch">(20)</a>
                                </span>
                    发表于
                    2022-03-27 10:33:40
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--主体内容结束
      <link rel="stylesheet" href="static/css/global.css">
      <link rel="stylesheet" href="static/css/global.ui.css">
      <link rel="stylesheet" href="static/css/base.css">
      <link rel="stylesheet" href="static/css/default.css">
      <link rel="stylesheet" href="static/css/common.css">
      <link rel="stylesheet" href="static/css/env.css">
      <link rel="stylesheet" href="static/css/detail.css"/>
      <link rel="stylesheet" href="static/css/main.entry.css">
      -->

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      results:[],
    }
  },
  methods:{
    getInfo(){
      this.axios.get(this.baseUrl+'news/getone', {
        params: {
          id:this.$route.params.id
        }
      }).then(response => {
        this.results = response.data
      })
    }
  },
  mounted() {
    this.getInfo()
    console.log(this.$route.params.id)
  }
}
</script>
<style lang="css">
@import "../../assets/common/css/detail.css";
@import "../../assets/common/css/main.entry.css";

.activity-icon-img {
  width: 12px;
  height: 12px;
  margin-bottom: -2px;
}
</style>