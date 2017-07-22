<template>
	<div class="detail">
		<div class="de-nav">
			<ul>
				<router-link tag='li' to='/goods/deimg' exact>图文详情</router-link>
				<router-link tag='li' to='/goods/dekey'>产品参数</router-link>
				<li>物流说明</li>
			</ul>
		</div>
		<div class="de-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Detail',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.detail
{
	width: 100%;
	height: auto;
	background-color: #fff;
	margin-top: 10px;
	overflow: hidden;
	.de-nav
	{
		width: 100%;
		.re-height(76);
		ul
		{
			width: 100%;
			height: 100%;
			position: relative;
			border-bottom: 1px solid #eee;
			overflow: hidden;
			padding-bottom: 2px;
			li
			{
				float: left;
				width: calc(100%/3);
				text-align: center;
				height: 100%;
				.l-height(76);
				.fs(28);
				background: url('../../assets/image/icon/common/border.png') bottom right no-repeat;
				&:last-child
				{
					background: none;
				}
				&.active
				{
					border-bottom: 2px solid #ff4646;
				}
			}
		}
	}
	.de-content
	{
		.pT(28);
	}

}
</style>