<template>
<div class="head">
	<p>{{headTitle}}</p>
</div>
</template>

<script>
export default {

  name: 'Head2',

  data () {
    return {

    }
  },
  props: {
  	headTitle:String
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
.head
{
	width: 100%;
	.re-height(88);
	background-color: @headerBgColor;
	text-align: center;
	.l-height(88);
	p
	{
		font-family: '华文细黑';
		.fs(34);
		color: #fff;
	}
}
</style>