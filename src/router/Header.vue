<template>
  <div>
    <div>

      <header class="nc-nav-header-fake" id="nc-nav-header">
        <nav>
          <router-link to="/" class="nc-nav-header-logo" style="width: 140px;">
            <!--          <img src="../assets/common/picture/1636944252254TIDXY.png">-->
            <img src="../assets/common/picture/blocks.png">
          </router-link>
          <div class="nc-nav-header-menu" style="margin-right: 12px;">
            <el-link v-for="(menu,index) in menus" class="nc-nav-header-menu-item " :key="index"
                     :class="{header_active:index==num}" :underline="false" @click="changeNum(index)">
              <router-link :to="menu.to">{{ menu.item }}</router-link>
            </el-link>
          </div>
          <!--        <div class="nc-nav-header-search">
                    <span>帖子、文章、试题、公司、牛友</span>
                    <img class="nc-nav-header-search-icon" src="../assets/common/picture/1641376106810GCJAX.png" alt="search">
                  </div>-->
          <div style="width: 260px">

          </div>
          <div style="display: flex; align-items: center; font-size: 14px; margin-left: 20px; margin-left: 20px;">
            <a
               style="width: 92px; height: 32px; background: #EEFAF7; color: #32ca99; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
              我要招人 <img src="../assets/common/picture/1645409535023RDRAH.png" style="width: 14px; height: 14px;">
            </a>
            <a @click="divlog=true"
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
                  :width="0"
                  trigger="hover">
                <div>
                  <el-avatar :size="60"  @error="false">
                    <img src="https://1-1310671968.cos.ap-guangzhou.myqcloud.com/images/avatar.jpg"/>
                  </el-avatar>
                  <router-link to="/userexhibit">
                    <el-link><i class="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;个人信息</el-link>
                  </router-link>
                  <br/>
                  <el-link @click="handleLogout"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>&nbsp;登出
                  </el-link>
                </div>
                <el-button slot="reference" type="text" style="color: #32ca99;">{{ username }}</el-button>
              </el-popover>
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

    <el-dialog
        :visible.sync="divlog"
        width="40%">
      <Approve></Approve>
    </el-dialog>

  </div>
</template>

<script>

import Approve from "@/views/company/Approve";

export default {
  name: 'Header',
  data() {
    return {
      iflogin: false,
      disabled: false,
      divlog:false,
      username: '',
      num: 0,
      menus: [
        {item: '首页', to: '/'},
        {item: '新闻', to: '/news'},
        {item: '学习', to: '/courses'},
        {item: '求职', to: '/search'},
        {item: '在招公司', to: '/category'},
      ]
    }
  },
  inject: ['$authing'],
  components:{
    Approve
  },
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
    ifLofin() {
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      this.username = userinfo['name'] || '用户姓名'
      if (userinfo != null) {
        this.iflogin = true
      }
    },

    // 登出
    handleLogout: function () {
      localStorage.clear();
      window.location.href = this.$authing.buildLogoutUrl({redirectUri: 'http://localhost:4000'});
    },

    changeNum(i) {
      this.num = i
    }
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
@import "../assets/common/css/courseCollection.css";
@import "../assets/common/css/main.entry.css";

.header_active:after {
  background-color: #32ca99;
  bottom: -8px;
  content: "";
  height: 4px;
  left: 50%;
  margin-left: -6px;
  position: absolute;
  width: 12px
}
</style>