import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import Routers from './router'
import Util from './libs/util'
import App from './app.vue'


Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(iView)
Vue.use(VueI18n)

// i18n配置
const i18n = new VueI18n({
	locale: localStorage.lang || 'en-US',   // 语言标识
	messages: {
		'en-US': require('./assets/localization/en-us.json'),    // 英文语言包
		'zh-CN': require('./assets/localization/zh-cn.json'),   // 中文简体语言包
		'zh-TW': require('./assets/localization/zh-tw.json'),   // 中文繁体语言包
	},
})

// 路由配置
const RouterConfig = {
	mode: 'history',
	routes: Routers,
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start()
	Util.title(to.name)
	next()
})

router.afterEach(() => {
	iView.LoadingBar.finish()
	window.scrollTo(0, 0)
})


const store = new Vuex.Store({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
})


new Vue({
	el: '#app',
	i18n,
	router,
	store,
	render: h => h(App),
})
