<template>
	<div class="panel-side">
		<Menu class="side-menu" active-name="/dashboard">
			<template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
				<Submenu :name="index+''" v-if="!item.leaf">
					<template slot="title">
						<Icon :type="item.iconType"></Icon>
						{{ item.title }}
					</template>
					<Menu-item v-for="child in item.children" :key="item.id" :name="child.path">
						<Icon :type="child.iconType"></Icon>
						{{ child.title }}
					</Menu-item>
				</Submenu>
				<Menu-item v-if="item.leaf && item.children.length > 0" :name="item.children[0].path">
					<Icon :type="item.iconType"></Icon>
					{{ item.children[0].title }}
				</Menu-item>
			</template>
		</Menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPathName: 'Dashboard',
			currentPathNameParent: '',
		}
	},
	watch: {
		'$route' (to, from) {
			this.currentPathName = to.name
			this.currentPathNameParent = to.matched[0].name
		},
	},
}
</script>

<style>
</style>
