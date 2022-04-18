<template>


  <div class="nk-container    ">


    <div class="nk-main clearfix">

      <div class="nk-content">
        <div class="module-box">

          <div class="tech-introduce clearfix">
            <div class="tech-picture">
              <img src="static/picture/阿里-圆-120x120.png">
            </div>
            <div class="tech-intr-detail">
              <div class="tech-intr-title">
                <h1>阿里巴巴</h1>
                <span class="v-tag"></span>
              </div>
              <p>阿里巴巴集团的使命是让天下没有难做的生意。
                我们旨在助力企业，帮助其变革营销、销售和经营的方式，提升其效率。我们为商家、品牌、零售商及其他企业提供技术基础设施以及营销平台，帮助其借助新技术的力量与用户和客户进行互动，并更高效地经营。
                更多招聘信息请登陆：
                https://talent.alibaba.com/home/</p>
              <div class="tech-intr-box">
                <a href="/community/134" class="btn btn-primary btn-auto" target="_blank">进入公司主页</a>
                <a  class="btn btn-primary nc-req-auth js-add-stack">添加技术栈</a>
              </div>
            </div>

          </div>
        </div>
        <div class="module-box">
          <div class="module-head">
            <h1>语言&框架&数据</h1>
          </div>
          <div class="module-body">
            <div class="tech-together-list">
              <a href="/stack/23" target="_blank" class="js-stack-item" data-id="23">
                <div class="tech-item">
                  <div class="tech-pic"><img src="static/picture/eb2176833691499eac6c73b57ba81cba.gif"></div>
                  <div class="tech-item-main">
                    <div class="tech-item-name">Java</div>
                    <span class="tag-label">语言和框架</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="module-box">
          <div class="module-head">
            <h1>技术工具</h1>
          </div>
          <div class="module-body">
            <div class="tech-together-list">
              <a href="/stack/2" target="_blank" class="js-stack-item" data-id="2">
                <div class="tech-item">
                  <div class="tech-pic"><img src="static/picture/2aba5eb8269149b995c277cb7fd637e4.gif"></div>
                  <div class="tech-item-main">
                    <div class="tech-item-name">GitHub</div>
                    <span class="tag-label">搭建&测试&部署</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="module-box">
          <div class="module-head">
            <h1>商业工具</h1>
          </div>
          <div class="module-body">
            <div class="tech-together-list">
              <a href="/stack/300" target="_blank" class="js-stack-item" data-id="300">
                <div class="tech-item">
                  <div class="tech-pic"><img src="static/picture/f4141c1ff32645c0a202ff103d9426fe.gif"></div>
                  <div class="tech-item-main">
                    <div class="tech-item-name">Adobe Photoshop</div>
                    <span class="tag-label">设计</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
    console.log(this.$route.params.id)
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
@import "../../assets/common/css/techtogether.css";
</style>