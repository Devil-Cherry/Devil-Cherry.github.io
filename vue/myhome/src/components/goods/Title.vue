<template>
	<div class="title">
		<div class="good-title">
			<p>无火香薰精油套装藤条干花陶瓷薰衣草香熏檀
	香卧室内房间香水助眠</p>
		</div>
		<div class="good-price">
			<span class="p-price-curr priceFont"><p class="num_price">￥38.00</p></span>
			<span class="p-price-past"><p class="num_price">￥56.00</p></span>
			<span class="p-num fr">
				<p>已售：10862</p>
			</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Title',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.title
{
	box-sizing: border-box;
	width: 100%;
	.re-height(197);
	background-color: #fff;
	.pT(37);
	.pB(33);
	.good-title
	{
		.re-width(568);
		.re-height(76);
		margin: auto;
		text-align: center;	
		.fs(28);
		p
		{
			text-align: left;
		}
	}
	.good-price
	{
		.re-width(568);
		margin:auto;
		.mT(18);
		position: relative;
		span
		{
			display: inline-block;
			&.p-price-curr
			{
				.fs(32);
			}
			&.p-price-past
			{
				text-decoration: line-through;
				.fs(24);
				.mL(32);
				.pB(5);
				color: #b1b1b1;
			}
			&.p-num
			{
				text-align: right;
				.fs(24);
				color: #b1b1b1;
				.mT(5);
			}
		}

	}
}
</style>