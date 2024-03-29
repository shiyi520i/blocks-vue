import Vue from 'vue';

import App from './App.vue';
import mavonEditor from 'mavon-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'mavon-editor/dist/css/index.css'
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Distpicker from 'v-distpicker'
import { AuthenticationClient } from 'authing-js-sdk';
import { baseUrl } from '@/utils/config.js';
import store from '@/store'
import VueSocketIO from 'vue-socket.io'
// 全局方法挂载
Vue.prototype.baseUrl = baseUrl

Vue.component('v-distpicker', Distpicker)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(mavonEditor)

Vue.use(
	new VueSocketIO({
		debug: false, // debug调试，生产建议关闭
		connection: "http://localhost:3000",
		vuex: {
			store,
			actionPrefix: 'SOCKET_',
			mutationPrefix: 'SOCKET_'
		},
		options: {     //Optional options,
			autoConnect:false, //关闭自动连接，在用户登录后在连接。
		}
	})
);

const authing = new AuthenticationClient({
	appId: '6226abf77a4aa03fc8397fc1',
	appHost: 'https://shiyi.authing.cn',
	redirectUri: 'http://localhost:4000/callback',
	tokenEndPointAuthMethod: 'none'
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	provide: {
		$authing: authing
	},
	render: h => h(App)
}).$mount('#app');
