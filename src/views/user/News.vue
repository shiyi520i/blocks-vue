<template>
  <div>
    <div class="nk-main clearfix" style="width: 1210px;">
      <div class="nav-left-bar">
        <ul class="bar-accordion">
          <li>
            <label>
              <i class="icon-nc-forum"></i>讨论区
            </label>
            <ul>
              <a href="">
                <li class="selected">交流讨论</li>
              </a>

            </ul>
          </li>
        </ul>
      </div>

      <!--主体内容-->
      <div class="nk-content" style="margin-left: 210px;">

        <div class="module-box discuss-index-common  post-card-list">

          <div class="module-body">

            <ul class="common-list " v-for="(newinfo,index) in news" :key="index">
              <li class="clearfix">

                <div class="discuss-detail">
                  <div class="discuss-head">
                    <a class="head-pic js-nc-avatar js-nc-card" data-card-uid="1030032973"><img alt="头像"
                                                                                                src="https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/logo.png"></a>
                    <a class="d-name level-color-5 js-nc-card" data-card-uid="1030032973">{{ newinfo.author }}</a>
                    <!--                    <a title="牛客运营" href="authentication.html" class="js-nc-title-tips" target="_blank">
                                          <img class="item.idenClass" data-identity="item.level" src="static/picture/12.png">
                                        </a>-->
                    <span>5小时前回复</span>
                    <span>{{ newinfo.time }}</span>
                  </div>

                  <div class="discuss-main clearfix">
                    <a @click="lookInfo(newinfo.id)" rel="prefetch" class="js-gio">
                      {{ newinfo.title }}
                    </a>
                    <span class="disTop">置顶</span>


                    <div class="discuss-content">
                      <img src="static/picture/305DE276897792E7EA77059332E6E300.jpg" class="discuss-content-img" alt="">
                      <a class="discuss-content-tag mr-1">春招</a>
                      <a class="discuss-content-tag mr-1">招聘进度</a>
                      <a class="discuss-content-tag mr-1">秋招</a>
                      <a class="discuss-content-tag mr-1">校招</a>
                      <a class="discuss-content-tag mr-1">职场</a>
                      <a class="discuss-content-tag mr-1">求offer</a>
                      <a class="discuss-content-text">{{ newinfo.summary }}</a>
                    </div>

                  </div>
                  <div class="feed-foot">
                    <div class="feed-origin">
                      发表在&nbsp;<a href="javascript:;">[站内公告]</a>&nbsp;&nbsp;
                    </div>
                    <div class="feed-legend">
                      <span>回复 7</span>
                      <span>赞 22</span>
                      <span>浏览 23907</span>

                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap" id="wrap">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="pageHandler"
          :page-size="pageSize"
          :current-page="pageNo"
          :hide-on-single-page="isHid"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      isHid: true,
      news: [],
      pageNo: 1,
      pageSize: 5,
      total: 1
    }
  },
  methods: {
    pageHandler() {
      this.axios.get(this.baseUrl + 'news/getsimple', {
        params: {
          pageSize: this.pageSize,
          pageNo: this.pageNo,
        }
      }).then(response => {
        this.total = response.data.total;
        this.news = response.data.records
      })
    },
    lookInfo(id){
      this.$router.push({
        path: `/newsinfo/${id}`,
      })
    }
  },
  mounted() {
    this.pageHandler()
  }
}
</script>

<style>
@import "../../assets/common/css/global.css";
@import "../../assets/common/css/global.ui.css";
@import "../../assets/common/css/base.css";
@import "../../assets/common/css/default.css";
@import "../../assets/common/css/common.css";
@import "../../assets/common/css/env.css";
@import "../../assets/common/css/list.css";
@import "../../assets/common/css/main.entry9.css";
</style>