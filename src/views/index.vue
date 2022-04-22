<template>
  <div>
    <Header/>
    <div class="nk-container">
      <img src="../assets/common/picture/banner-about.png" alt="banner" class="banner">
      <div class="nk-main" style="padding-top: 10px;">
        <section class="section-box">
          <div class="section-title light">
            <h2><img src="../assets/common/picture/title-nowcoder.png" alt="">关于牛客网</h2>
            <p>牛客网（北京牛客科技有限公司）成立于 2014 年 9
              月，是以科技和创新驱动的教育科技公司。牛客网坚持以前沿技术服务于技术、以人工智能和大数据提升学习效率，专注探索在线教育创新模式，致力于为技术求职者提供能力提升解决方案，同时为企业级用户提供更高效的招聘解决方案，并为二者搭建桥梁，构建从学习到职业的良性生态圈。</p>
          </div>
          <div class="section-content">
            <ul class="card-list about">
              <li class="card-item">
                <h3 class="card-title">产业布局</h3>
                <p class="card-subtitle">产业未来布局前景广阔，产业发展稳健</p>
                <p class="card-content">牛客网在技术类求职备考、社群交流、企业招聘服务等多个垂直领域具有行业影响力。学生端产品矩阵包括：IT
                  题库、在线编程练习、线上课程、交流社区、牛客竞赛平台；企业端产品矩阵包括：笔面试服务、广告与传播、牛客职播、ATS 系统等。</p>
              </li>
              <li class="card-item">
                <h3 class="card-title">用户覆盖</h3>
                <p class="card-subtitle">构建从学习到职业的各种用户良性生态圈</p>
                <p class="card-content">牛客网用户覆盖全国 1000+ 高校百万 IT 学习者并在高速增长中，日均代码提交量 4万+,
                  同时也为京东、百度、网易、腾讯、滴滴、今日头条、华为等企业提供校园招聘、编程竞赛等线上服务，并收获良好口碑。</p>
              </li>
              <li class="card-item">
                <h3 class="card-title">融资背景</h3>
                <p class="card-subtitle">获得天使轮和知名投资公司领投完成 A 轮</p>
                <div class="card-content">
                  <p>2014 年获得 400 万元天使轮融资，资方为策源创投和景林投资。</p>
                  <p>2016 年完成 1000 万元 pre-A 轮融资；</p>
                  <p>2018 年完成千万人民币 A 轮融资，由 58 同城领投，正保远程跟投。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="section-box">
          <div class="section-title" style="margin-top: 85px;">
            <h2><img src="../assets/common/picture/title-team.png" alt="">团队介绍</h2>
          </div>
          <div class="section-content">
            <ul class="culture-list">
              <li class="culture-item">
                <h3>极致产品思维</h3>
                <p>每一个牛客人都秉承产品经理思维，做好每一个项目。让每一个 “客户” 与 “用户” 感受到最佳产品体验。</p>
              </li>
              <li class="culture-item">
                <h3>优良极客 DNA</h3>
                <p>我们拥有众多优秀背景大牛、与来自知名互联网公司的极客组成的核心团队，一群高才、高智、高能的小伙伴为了给学生和企业提供更好的帮助不断奋斗前行。</p>
              </li>
              <li class="culture-item">
                <h3>价值观</h3>
                <p>牛客自成立以来，对待各种企业和用户，都秉承着一直以来所追求的价值观念：高效、真诚、专注、务实。</p>
              </li>
            </ul>
          </div>
        </section>

      </div>


    </div>

    <el-footer>
      <Footer/>
    </el-footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer"
import Header from "@/router/Header"

export default {
  name: 'Login',
  components: {
    Footer,
    Header,
  }
};
</script>
<style>
@import "../assets/common/css/global.css";
@import "../assets/common/css/global.ui.css";
@import "../assets/common/css/base.css";
@import "../assets/common/css/default.css";
@import "../assets/common/css/common2.css";
@import "../assets/common/css/env1.css";
@import "../assets/common/css/list.css";
@import "../assets/common/css/nowcoder.css";

.headline-info2 ul li {
  float: left;
  padding: 0 5px;
  width: auto;
  height: auto;
  line-height: 30px;
}

.headline-info2 li a {
  line-height: 18px;
  font-size: 12px;
  padding: 5px 10px;
  display: block;
}

.headline-info2 a:hover {
  background: #D8544F;
  color: #ffffff
}
.card-list.about .card-item {
  background-image: url(../assets/common/image/title-card-layout.png);
}

.main-container {
  /*  35 = footer  */
  min-height: calc(100vh - 35px);
}
</style>


