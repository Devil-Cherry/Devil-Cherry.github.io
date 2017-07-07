<template>
	<footer class="footer fix-b">
		<div class="navbar">
			<ul>
				<router-link to='/' exact><li class="nav-home nav-li"></li></router-link>
				<router-link to='/market'><li class="nav-market nav-li"></li></router-link>
				<a href="javascript:void(0)"><li class="nav-shopcar nav-li"></li></a>
				<a href="javascript:void(0)"><li class="nav-user nav-li"></li></a>
			</ul>
		</div>
    </footer>
</template>

<script>
	export default {
	  name: 'foot'
	}
</script>

<style lang='less'>
@import '../common/less/variable.less';
.footer
 {
 	z-index: 99;
 	width: 100%;
	border:none;
	.re-height(98);
	.l-height(98);
	background-color: @headerBgColor;
	.nav-li
	{
		width: 25%;
		.re-height(98);
		float: left;
		text-align: center;
	}
	a.active
	{
		& .nav-home
		{
			background-image: url(../assets/image/icon/@2x/home@2x_s.png);
		}
		& .nav-market
		{
			background-image: url(../assets/image/icon/@2x/market@2x_s.png)
		}
	}
	.nav-home
	{
		background: url(../assets/image/icon/@2x/home@2x.png) no-repeat center center;
		background-size: 35%;
	}
	.nav-market
	{
		background: url(../assets/image/icon/@2x/market@2x.png) no-repeat center center;
		background-size: 27.5%;
	}
	.nav-shopcar
	{
		background: url(../assets/image/icon/@2x/buy@2x.png) no-repeat center center;
		background-size: 36.25%;
	}
	.nav-user
	{
		background: url(../assets/image/icon/@2x/user@2x.png) no-repeat center center;
		background-size: 28.75%;
	}
 }
</style>
