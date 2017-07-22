<template>
 <div id="home">
	<searchbar></searchbar>
	<div class="home-content">
		<ul>
		   	<li v-for='sub in subList' class="banner-li">
		   		<div class="banner-section">
					<div class="banner-img">
						<img :src="sub.subImg" alt="banner图">
					</div>
					<div class="banner-title">
						<span class="b-title">{{sub.subTitle}}</span><br>
						<span class="b-content">{{sub.subKey}}</span><br>
						<button class="btn-checkAll">查看全部</button>
					</div>
				</div>
		   	</li>
	   	</ul>
	</div>
 </div>
</template>

<script>
import searchBar from 'components/head/Search'

	export default {
	  name: 'home',
	  data() {
	  	return {

	  		subList:[]//首页多个banner
	  	}
	  },
	  created: function() {
	  	this.subView(),
	  	this.$parent.isfoot(true)
	  },
	  methods: {
	   subView: function () {
	   	var _this = this;
	   	this.$http.get('static/data/home.json').then((res)=> {
	   		res = res.body;
	     	_this.subList = res.subs;
	     },function(res){
	     	console.log('erro!')
	     })
	   }
	  },
	  components: {
	  	'searchbar': searchBar
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../../common/less/variable.less';
.home-content
{
	.pT(118);
	.pB(98);
	position: relative;
	.banner-li
	{
		width: 100%;
		.re-height(410);
		background-color: #ff0000;
		.mB(30);
		text-align: center;
		overflow: hidden;
		position: relative;
		
		.banner-section
		{
			width: 100%;
			height: 100%;
			position: relative;
			.banner-img
			{
				width: 100%;
				height:100%;
				overflow: hidden;
				img
				{
					width: 100%;
					height: auto;
				}
			}
			.banner-title
			{
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: 2;
				top: 0;
				color: #fff;
				.pT(112);
				&>span.b-title
				{
					display: inline-block;
					.re-width(210);
					.fs(36);
					padding-bottom: 14px;
					border-bottom: 1px solid #fff;
				}
				&>span.b-content
				{
					display: inline-block;
					.fs(26);
					.mT(14);
					.mB(28);
				}
				.btn-checkAll
				{
					margin: 0;
					padding: 0;
					display: inline-block;
					.re-width(148);
					.re-height(40);
					.fs(26);
					color: #fff;
					background: transparent;
					border:1px solid #fff;

				}
			}
		}
	}
}
</style>
