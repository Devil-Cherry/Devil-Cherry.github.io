<template>
<div id="shopcar">
	<head2 :headTitle="title"></head2>
	<div class="content">
		<div class="empty">
			<img src="../../assets/image/icon/@2x/ahopcar_null@2x.png" alt="购物车为空">
			<h3>你的购物车没有商品</h3>
			<h4>去商城挑选好物吧</h4>
			<router-link to='/market' tag='button'>去逛逛</router-link>
		</div>
	</div>
 </div>
</template>

<script>
import head from 'components/head/Head2'
	export default {
	  name: 'shopcar',
	  data () {
	    return {
	      title: '购物车'
	    }
	  },

	  components: {
	  	'head2': head
	  },
	   created: function() {
	  	this.$parent.isfoot(true)
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../../common/less/variable.less';
#shopcar 
{
	.content
	{
		.pT(14);
		width: 100%;
		position: relative;
		.empty
		{
			.pT(100);
			text-align: center;
			img
			{
				.re-width(220);
				height: auto;
			}
			h3
			{
				.fs(34);
				.mT(46);
			}
			h4
			{
				.fs(28);
				color: #acabab;
				.mT(40);
				letter-spacing: 2px;
			}
			button
			{
				.mT(20);
				.re-width(140);
				.re-height(40);
				.l-height(40);
				text-align: center;
				color: #fff;
				background-color: @onfontColor;
			}
		}
	}
}
</style>
