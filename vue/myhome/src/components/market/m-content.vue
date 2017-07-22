<template>
	<div class="m-content">
		<ul class="lip" v-if="show">
			<li class="p-li" v-for="good in goodList">
					<router-link :to="{ name: 'good' , params:{proId:good.id}}" tag='div' class='p-img'><img v-bind:src="good.goodImg" alt="产品图"></router-link>
					<div class="p-text">
						<p class="p-title">{{good.goodName}}</p>
						<div class="p-price">
						<span class="p-price-curr priceFont"><p class="num_price">￥{{ good.goodPrice | money }}</p></span>
						<span class="p-price-past">￥<p class="num_price">{{good.goodPrice_ex|money}}</p></span>
						<i class="p-collect on"></i>
					</div>
				</div>
			</li>				
		</ul>
		<div v-if='no_data' class="erro">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'm-content',
		data () {
			return {
				goodList:[],//商品列表
				type:1,
				msg:"当前分类下没有商品",
				show:true,
				no_data:false
			}
			
		},
		created:function(){
			this.goodView()
		},
		watch:{
			'$route':'goodView'
		},
		methods:{
			goodView:function(){
				this.type = this.$route.query.type;
				const num = this.type;
				var _this = this;
				this.$http.get('./static/data/home.json').then((res)=>{
					res = res.body;
	     			// _this.goodList = res.goods;
	     			const list = res.goods;
	     			const newlist = new Array();
	     			for (var i = 0; i < list.length; i++) {
	     				if(list[i].type==num)
	     				{
	     					newlist.push(list[i])
	     				}
	     			}
	     			_this.goodList = newlist;
	     			if(newlist.length==0){
	     				_this.show = false;
	     				_this.no_data = true;
	     			}
	     			else
	     			{
	     				_this.show = true;
	     				_this.no_data = false;
	     			}
				},function(){
					alert('erro')
				})
			}
		}
	}
</script>
<style scoped lang='less'>
@import '../../common/less/variable.less';
.m-content
{
	.pT(98);
	.pL(14);
	.erro
	{
		width: 100%;
		text-align: center;
		.mT(20);
		color:@fontpastColor;

	}
}
.m-content .p-li
{
	float: left;
	.re-width(298);
	overflow: hidden;
	.mR(15);
	.mB(25);
	.p-img
	{
		.re-height(298);
		img
		{
			width: auto;
			height: inherit;
		}
	}
	.p-text
	{
		.re-height(70);
		.box-content;
		.pT(12);
		.p-title
		{
			.fs(24);
			color: @fontColor;
			
		}
		.p-price
		{
			.pT(12);
			span
			{
				display: inline-block;
				.mR(22);
				p
				{
					display: inline-block;
				}
			}
			i
			{
				display: block;
			}
			.p-price-past
			{
				text-decoration: line-through;
				.fs(22);
				color: @fontpastColor;
				p
				{
					text-decoration: inherit;
				}
			}
			.p-collect
			{
				.re-width(30);
				.re-height(27);
				float: right;
				background: url(../../assets/image/icon/common/icon_collect.png)center center no-repeat;
				background-size: contain;
				position: relative;
				.right(8);
			}
			.p-collect.on
			{
				background-image: url(../../assets/image/icon/common/icon_collect_on.png);

			}

		}
	}
}
</style>