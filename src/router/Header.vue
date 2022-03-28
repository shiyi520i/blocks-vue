<template>
  <div>
  <div>

    <header class="nc-nav-header-fake" id="nc-nav-header">
      <nav>
        <a href="index.html" class="nc-nav-header-logo" style="width: 140px;">
<!--          <img src="../assets/common/picture/1636944252254TIDXY.png">-->
         <img src="../assets/common/picture/blocks.png">
        </a>
        <div class="nc-nav-header-menu" style="margin-right: 12px;">
          <div class="nc-nav-header-menu-item " data-type="home">
            <a href="index.html">首页</a>
          </div>
          <div class="nc-nav-header-menu-item " data-type="question">
            <a href="company.html">题库</a>
          </div>
          <div class="nc-nav-header-menu-item " data-type="interview">
            <router-link to="/news">新闻</router-link>
          </div>
           <div class="nc-nav-header-menu-item nc-nav-header-active" data-type="learn">
            <router-link to="/courses">学习</router-link>
          </div>
          <div class="nc-nav-header-menu-item " data-type="jobs">
            <router-link to="/search">求职</router-link>
          </div>
          <div class="nc-nav-header-menu-item " data-type="discussion">
            <router-link to="/category">在招公司</router-link>
          </div>
          <div class="nc-nav-header-menu-item " data-type="found">
            <router-link to="/userexhibit">个人中心</router-link>
          </div>
        </div>
<!--        <div class="nc-nav-header-search">
          <span>帖子、文章、试题、公司、牛友</span>
          <img class="nc-nav-header-search-icon" src="../assets/common/picture/1641376106810GCJAX.png" alt="search">
        </div>-->
        <div  style="width: 260px">

        </div>
        <div style="display: flex; align-items: center; font-size: 14px; margin-left: 20px; margin-left: 20px;">
          <a href="hrconsole.html#/job-manage"
             style="width: 92px; height: 32px; background: #EEFAF7; color: #32ca99; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
            我要招人 <img src="../assets/common/picture/1645409535023RDRAH.png" style="width: 14px; height: 14px;">
          </a>
          <a href="index2.html"
             style="width: 92px; height: 32px; background: #EEFAF7; color: #32ca99; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; margin-right: 8px;">
            企业认证 <img src="../assets/common/picture/1645409535023RDRAH.png" style="width: 14px; height: 14px;">
          </a>
        </div>

        <div class="nc-nav-header-info" style="margin-left: 0;">
          <img class="nc-nav-header-icon" style="margin-right: 20px;"
               src="../assets/common/picture/1641375989276WRAOB.png"
               alt="app">

          <div v-if="iflogin">
            <el-popover
                placement="bottom"
                :width="50"
                trigger="hover">
              <div ><router-link to="/userexhibit"><el-link><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;个人信息</el-link></router-link>
                <br/>
                <el-link @click="handleLogout"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>&nbsp;登出</el-link></div>
              <el-button slot="reference" type="text" style="color: #32ca99;">用户姓名</el-button>
            </el-popover>
<!--            <router-link to="/userexhibit" class="nc-nav-header-sign" style="background-color: #32ca99;">个人信息</router-link>-->
          </div>
          <div v-else>
            <div class="nc-nav-header-sign" style="background-color: #32ca99;" @click="handeLogin">登录 / 注册</div>
          </div>

        </div>
      </nav>
    </header>
  </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return{
      iflogin:false,
      disabled: false
    }
  },
  inject: ['$authing'],
  methods: {
    //登入
    handeLogin: async function () {
      // PKCE 场景使用示例
      // 生成一个 code_verifier
      let codeChallenge = this.$authing.generateCodeChallenge();
      localStorage.setItem('codeChallenge', codeChallenge);
      // 计算 code_verifier 的 SHA256 摘要
      let codeChallengeDigest = this.$authing.getCodeChallengeDigest({codeChallenge, method: 'S256'});
      // 构造 OIDC 授权码 + PKCE 模式登录 URL
      let url = this.$authing.buildAuthorizeUrl({codeChallenge: codeChallengeDigest, codeChallengeMethod: 'S256'});
      window.location.href = url;
    },
    //判断是否登录
    ifLofin(){
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log(userinfo)
      if(userinfo!=null){
        this.iflogin=true
      }
    },
   // 登出
    handleLogout: function() {
      localStorage.clear();
      window.location.href = this.$authing.buildLogoutUrl({ redirectUri: 'http://localhost:4000' });
    },
  },
  created() {
    this.ifLofin()
  }
};

</script>

<style>
@import "../assets/common/css/global.css";
@import "../assets/common/css/global.ui.css";
@import "../assets/common/css/base.css";
@import "../assets/common/css/default.css";
@import "../assets/common/css/common.css";
@import "../assets/common/css/env.css";
@import "../assets/common/css/element-ui.css";
@import "../assets/common/css/courseCollection.css";
@import "../assets/common/css/main.entry.css";
</style>