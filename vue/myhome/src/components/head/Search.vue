<template>
<div class="searchBar">
	<div class="input-text">
		<input type="text" class="search-text" placeholder="搜索你喜欢的商品">
    	<i class="btn-search"></i>
    	<i class="btn-notice"></i>
	</div>
</div>
</template>

<script>
	export default {
	  name: 'searchBar'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import '../../common/less/variable.less';
.searchBar{

 	.re-height(88);
 	.l-height(88);
 	background-color: @headerBgColor;
 	border:none;
 	position: fixed;
 	top: 0;
 	width: 100%;
 	z-index: 99;
 	.input-text
 	{
 		display: inline-block;
		.re-width(529);
		.re-height(62);
		.l-height(62);
		.re-radius(10);
		background-color: #000;
		.mT(14);
		.mL(14);
		position: relative;
		.search-text
		{
			width: 100%;
			height: 100%;
			.fs(24);
			.pL(60);
			color: @searchColor;	
		}
		.btn-search
			{
				display: block;
				.re-width(60);
				.re-height(62);
				.re-left-radius(10);
				position: absolute;
				.top(0);
				.left(0);
				background:url(../../assets/image/icon/@2x/Search@2x.png) no-repeat center center;
				background-size: 50%;
			}
		.btn-notice
			{
				display: block;
				.re-width(34);
				.re-height(62);
				.re-left-radius(10);
				position: absolute;
				.top(0);
				.right(-68);
				background:url(../../assets/image/icon/@2x/Conversation@2x.png) no-repeat center center;
				background-size:contain;
			}
 	}
 	
 }
</style>
