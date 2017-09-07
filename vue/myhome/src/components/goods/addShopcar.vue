<template>
	<div class="addShopcar">
		<div class="bray" v-on:click="remove"></div>
		<div class="content">
			
		</div>
		<div class="btn">
			<span>确认</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'addShopcar',

  data () {
    return {

    };
  },
  methods:{
  	remove:function(){
  		this.$emit('listenbray',true)
  	}
  }
};
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.addShopcar
{
	position: fixed;
	left: 0;
	width: 100%;
	height:auto;
	z-index: 10;
	bottom: 0;
	.bray
	{
		.re-height(404);
		background-color: #000;
		opacity: .82;
	}
	.content
	{
		.re-height(593);
		background-color: #fff;
	}
	.btn
	{
		.re-height(97);
		background-color: @onfontColor;
		text-align: center;
		.l-height(97);
		span
		{
			color: #fff;
			.fs(32);
			letter-spacing: 3px;
		}
	}
}
</style>