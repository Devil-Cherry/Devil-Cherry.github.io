<template>
	<div class="navbar">
		<div id="market_title">
			<ul class="slide_title">
				<router-link :to="{ path: '/market/content', query: { type: '1' }}" exact tag='li' class='market-li'>创意家居</router-link>
				<router-link :to="{ path: '/market/content', query: { type: '2' }}" exact tag='li' class='market-li'>美容美妆</router-link></li>
				<router-link :to="{ path: '/market/content', query: { type: '3' }}" exact tag='li' class='market-li'>数码周边</router-link></li>
				<router-link :to="{ path: '/market/content', query: { type: '4' }}" exact tag='li' class='market-li'>个人日用</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'navbar',
		data () {
			return {
				
			}	
		}
	}
</script>
<style scoped lang='less'>
@import '../../common/less/variable.less';
.navbar
{
	width: 100%;
	height: auto;
	overflow: hidden;
	position: fixed;
}
#market_title
{
	width: 100%;
	height: auto;
	overflow: hidden;
	border-bottom: 1px solid #ececec;
	background-color: #fff;
}
#market_title ul{
	width: 100%;
	position: relative;
	height:100%;
	.pL(29);
	.pT(3);
	.pB(3);
}
#market_title ul .market-li
{
	float: left;
	.re-width(114);
	.re-height(75);
	.l-height(72);
	.mR(45);
	.fs(28);
	color: @fontColor;
	position: relative;
	&.active
	{
		color: @onfontColor;
		.bor-b(3);
		border-bottom: solid @onfontColor;
	}

}
#market_title ul .market-li:last-child
{
	margin-right: 0;
}

</style>