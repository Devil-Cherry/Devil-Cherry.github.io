<template>
	<div class="handle">
		<span class="addcar fl">加入购物车</span>
		<span class="buy fr">立即购买</span>
		<div class="layer">
			ksdnfjsdnfjs
		</div>
	</div>
</template>

<script>
export default {

  name: 'Handle',

  data () {
    return {
    	h_height:100
    };
  }
};
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.handle
{
	width: 100%;
	.re-height(100);
	span{
		width: 50%;
		height: 100%;
		display: inline-block;
		text-align: center;
		.l-height(100);
		.fs(32);
		color: #fff;
		&.addcar
		{
			background-color: rgba(0,0,0,.5);
		}
		&.buy
		{
			background-color: rgba(0,0,0,.8);
		}
	}

}
.layer
{
	position: absolute;
	top: 0;
	idth: 100%;
	.re-height(740);

}
</style>