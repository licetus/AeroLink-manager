<template>
	<div class="panel">
		<div class="panel-side">
			<Menu theme="dark" class="side-menu" active-name="/dashboard" @on-select="route">
				<template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
					<Submenu :name="index+''" v-if="!item.leaf">
						<template slot="title">
							<Icon :type="item.iconType"></Icon>
							{{ $t(item.name) }}
						</template>
						<Menu-item v-for="child in item.children" :key="item.id" :name="child.path">
							<Icon :type="child.iconType"></Icon>
							{{ $t(child.name) }}
						</Menu-item>
					</Submenu>
					<Menu-item v-if="item.leaf && item.children.length > 0" :name="item.children[0].path">
						<Icon :type="item.iconType"></Icon>
						{{ $t(item.children[0].name) }}
					</Menu-item>
				</template>
			</Menu>
		</div>
		<div class="panel-body">
			<div class="breadcrumb">
				<Breadcrumb>
					<Breadcrumb-item href="/dashboard">{{$t('Home')}}</Breadcrumb-item>
					<Breadcrumb-item v-if="currentPathNameParent!==''">{{$t(currentPathNameParent)}}</Breadcrumb-item>
					<Breadcrumb-item v-if="currentPathName!==''">{{$t(currentPathName)}}</Breadcrumb-item>
				</Breadcrumb>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPathName: '',
				currentPathNameParent: '',
			}
		},
		watch: {
			$route: 'fetchData',
		},
		methods: {
			route(name) {
				// console.log(name)
				this.$router.replace(name)
			},
			fetchData(to) {
				this.currentPathName = to.name
				this.currentPathNameParent = to.matched[0].name
			},
		},
	}
</script>

<style>
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}
	.panel-side {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 200px;
		overflow: hidden;
		background-color: #41485d;
	}
	.panel-body {
		position:absolute;
		top: 0px;
		left: 200px;
		right: 0px;
		bottom: 0px;
		padding: 20px;
		min-width: 600px;
		overflow-y: auto;
		background-color: #e9edf1;
	}
	.title {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 50px;
		width: 200px;
		color: #c0ccda;
		background-color: #292f32;
	}
	.text {
		position: absolute;
		top: 0px;
		left: 20px;
		font-size: 14px;
		vertical-align: middle;
	}
</style>
