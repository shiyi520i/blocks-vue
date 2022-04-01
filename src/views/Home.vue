<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  inject: ['$authing'],

  mounted: function() {
		const currentQuery = this.$router.history.current.query;
		const code = currentQuery.code || '';
		const codeChallenge = localStorage.getItem('codeChallenge');
		this.getToken(code, codeChallenge);
	},
	methods: {
		getToken: async function(code, codeChallenge) {
			let tokenSet = await this.$authing.getAccessTokenByCode(code, { codeVerifier: codeChallenge });
			const { access_token, id_token } = tokenSet;
			let userInfo = await this.$authing.getUserInfoByAccessToken(tokenSet.access_token);
			localStorage.setItem('accessToken', access_token);
			localStorage.setItem('idToken', id_token);
			localStorage.setItem('userInfo', JSON.stringify(userInfo));

      //插入用户信息
      let userinfo = JSON.parse(localStorage.getItem('userInfo'))
      let userid = userinfo['sub']
      let username = userinfo['name']

      if (userinfo != null) {
        this.axios({
              method: 'post',
              url:  'http://localhost:4000/api/user/adduser',
              data: {
                loginId:userid,
                username:username
              },
            }
        ).then(response => {
          console.log(response)

        }).catch()
      }
      this.$router.push('/');
		}
	}
}
</script>
