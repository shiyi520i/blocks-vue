<template>
  <div>
    <div>
      <Header/>
    </div>
    <!--展示的地方-->
    <div  class="main-container">
<!--      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>-->
    </div>
    <div>
      <AppFooter/>
    </div>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFoot"
import Header from "@/router/Header"

export default {
  name: 'Login',
  components: {
    AppFooter,
    Header
  },

  inject: ['$authing'],
  methods: {
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
    }
  }
};
</script>

<style>

.headline {
  height: 40px;
  line-height: 40px;
  width: 100%;
  background: #f5f5f5;
  border-bottom: 1px solid #eeeeee;
}

.headline-cont {
  height: 40px;
  width: 1100px;
  margin: 0 auto;
}

.headline-info2 {
  height: auto;
  margin-top: 5px;
}

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


.main-container {
  /*  35 = footer  */
  min-height: calc(100vh - 35px);
}

</style>