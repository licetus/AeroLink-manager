<template>
	<div class="container">
		<div class="top-bar">
				<Row type="flex" justify="end">
					<Col>
						<Dropdown class="SelectLang" trigger="click" @on-click="onSelectLang">
							{{$t('SelectLang')}}
							<Icon type="arrow-down-b"></Icon>
							<Dropdown-menu slot="list">
								<Dropdown-item name="en-US">English</Dropdown-item>
								<Dropdown-item name="zh-CN">简体中文</Dropdown-item>
								<Dropdown-item name="zh-TW">繁體中文</Dropdown-item>
							</Dropdown-menu>
						</Dropdown>
					</Col>
				</Row>
		</div>
		<div class="side-bar">
			<div class="side-bar-header">
				<Row><img class="avatar" src="/src/assets/imgs/avatar.png"/></Row>
				<Row><span class="username">Mobiusor</span></Row>
				<Row><span class="company">T.H.E. co.ltd</span></Row>
			</div>
			<div class="side-bar-menu">
				<Menu theme="dark" active-name="/dashboard" @on-select="onRouter">
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
		</div>
		<div class="content">
				<router-view></router-view>
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
		methods: {
			onSelectLang(name) {
				localStorage.lang = name
				location.reload()
			},

			onRouter(name) {
				this.$router.replace(name)
			},
		},
	}
</script>

<style>
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}
	.top-bar {
		position: absolute;
		top: 0px;
		right: 0px;
		left: 200px;
		height: 50px;
		min-width: 500px;
		background-color: #e9edf1;
	}
	.side-bar {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 200px;
		height: 100%;
		overflow: hidden;
		background-color: #41485d;
	}
	.avatar {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		margin: 20px;
	}
	.username {
		color: #eee;
		margin: 10px 20px;
	}
	.company {
		color: #ccc;
		margin: 10px 20px 40px 20px;
	}
	.content {
		position:absolute;
		top: 50px;
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
