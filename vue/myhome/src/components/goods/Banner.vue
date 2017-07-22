<template>
	<div class="banner swiper-container">
		<ul class="imgBox swiper-wrapper">
			<li class="banner-li swiper-slide"><img src="../../assets/image/product/pro_main.jpg" alt=""></li>
			<li class="banner-li swiper-slide"><img src="../../assets/image/product/pro_main.jpg" alt=""></li>
			<li class="banner-li swiper-slide"><img src="../../assets/image/product/pro_main.jpg" alt=""></li>
			<!-- <li class="banner-li swiper-slide"><img src="../../assets/image/product/pro_main.jpg" alt=""></li> -->
		</ul>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
require('../../common/less/swiper-3.4.2.min.css')
import Swiper from '../../common/js/swiper-3.4.2.min.js'
export default {
  name: 'Banner',

  data () {
    return {

    }
  },
  mounted:function(){
  	this.banner_width(),
  	this.banner_swiper()
  },
  methods:
  {
  	banner_width:function(){
  		var imgBox = document.getElementsByClassName('imgBox')
  		var banner = document.getElementsByClassName('banner')
  		var banner_li = document.getElementsByClassName('banner-li')
  		const single = document.documentElement.clientWidth	;
  		imgBox.offsetWidth = single*banner_li.length
  	},
  	banner_swiper:function(){
  		var mySwiper = new Swiper ('.swiper-container', {
    
    // // 如果需要分页器
    pagination: '.swiper-pagination'
    
    // // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    
    // // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  })        
  	}
  }
};
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.banner
{
	width: 100%;
	.re-height(659);
	overflow-y: hidden;
	position: relative;
	.imgBox
	{
		height: 100%;
		.banner-li
		{

			float: left;
			height: 100%;
			overflow: hidden;
			background-color: #565656;
			img
			{
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>