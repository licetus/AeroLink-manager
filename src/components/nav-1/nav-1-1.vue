<template>
	<div>
		<h1>nav-1-1</h1>
		<full-calendar :events="fcEvents" :local="fcLang"></full-calendar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fcLang: 'en',
			fcEvents: [
				{
					title: 'test event 1',
					start: '2017-08-16',
					end: '2017-08-20',
					YOUR_DATA: {

					},
				},
				{
					title: 'test event 2',
					start: '2017-08-23',
					end: '2017-08-29',
					YOUR_DATA: {

					},
				},
			],
		}
	},
}
</script>

<style>
</style>
