<template>
	<div class="back" @click='back()'></div>
</template>

<script>
export default {

  name: 'Back',

  data () {
    return {

    };
  },
  methods:
  {
  	back:function(){
  		this.$router.go(-1)
  	}
  }
};
</script>

<style lang="less">
@import '../../common/less/variable.less';
.back
{
	.re-width(17);
	.re-height(32);
	background-image: url('../../assets/image/icon/common/back.png');
	background-size: contain;
	position: absolute;
	.top(30);
	.left(30);
	z-index: 9;
}
</style>