import Vue from 'vue';

import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI);
Vue.use(VueAxios, axios)

import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
	appId: '6226abf77a4aa03fc8397fc1',
	appHost: 'https://shiyi.authing.cn',
	redirectUri: 'http://localhost:4000/callback',
	tokenEndPointAuthMethod: 'none'
});

Vue.config.productionTip = false;

new Vue({
	router,
	provide: {
		$authing: authing
	},
	render: h => h(App)
}).$mount('#app');
