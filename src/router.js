import Login from './components/login.vue'
import NavMenu from './components/nav-menu.vue'
import Dashboard from './components/dashboard.vue'
import Settings from './components/settings.vue'
import Nav_1_1 from './components/nav-1/nav-1-1.vue'
import Nav_2_1 from './components/nav-2/nav-2-1.vue'
import Nav_3_1 from './components/nav-3/nav-3-1.vue'

const routers = [
	{
		path: '/login',
		component: Login,
		title: 'Login',
		hidden: true,
	},
	{
		path: '/',
		component: NavMenu,
		title: '',
		leaf: true,
		iconType: 'pie-graph',
		children: [
			{
				path: '/dashboard',
				component: Dashboard,
				title: 'Dashboard',
			},
		],
	},
	{
		path: '/',
		component: NavMenu,
		title: 'Nav-1',
		iconType: 'xbox',
		children: [
			{
				path: '/nav-1-1',
				component: Nav_1_1,
				title: 'Nav-1-1',
				iconType: 'leaf',
			},
		],
	},
	{
		path: '/',
		component: NavMenu,
		title: 'Nav-2',
		iconType: 'playstation',
		children: [
			{
				path: '/nav-2-1',
				component: Nav_2_1,
				title: 'Nav-2-1',
				iconType: 'waterdrop',
			},
		],
	},
	{
		path: '/',
		component: NavMenu,
		title: 'Nav-3',
		iconType: 'steam',
		children: [
			{
				path: '/nav-3-1',
				component: Nav_3_1,
				title: 'Nav-3-1',
				iconType: 'flame',
			},
		],
	},
	{
		path: '/',
		component: NavMenu,
		title: '',
		leaf: true,
		iconType: 'gear-a',
		children: [
			{
				path: '/settings',
				component: Settings,
				title: 'Settings',
			},
		],
	},
]
export default routers
