import Login from './components/login.vue'
import NavMenu from './components/nav-menu.vue'
import Dashboard from './components/dashboard.vue'
import Settings from './components/settings.vue'
import Nav11 from './components/nav-1/nav-1-1.vue'
import Nav21 from './components/nav-2/nav-2-1.vue'
import Nav31 from './components/nav-3/nav-3-1.vue'

const routers = [
	{
		path: '/login',
		component: Login,
		name: 'Login',
		hidden: true,
	},
	{
		path: '/',
		component: NavMenu,
		name: '',
		leaf: true,
		iconType: 'pie-graph',
		children: [
			{ path: '/dashboard', component: Dashboard, name: 'Dashboard' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: 'Nav-1',
		iconType: 'xbox',
		children: [
			{ path: '/nav-1-1', component: Nav11, name: 'Nav-1-1', iconType: 'leaf' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: 'Nav-2',
		iconType: 'playstation',
		children: [
			{ path: '/nav-2-1', component: Nav21, name: 'Nav-2-1', iconType: 'waterdrop' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: 'Nav-3',
		iconType: 'steam',
		children: [
			{ path: '/nav-3-1', component: Nav31, name: 'Nav-3-1', iconType: 'flame' },
		],
	},
	{
		path: '/',
		component: NavMenu,
		name: '',
		leaf: true,
		iconType: 'gear-a',
		children: [
			{ path: '/settings', component: Settings, name: 'Settings' },
		],
	},
]
export default routers
