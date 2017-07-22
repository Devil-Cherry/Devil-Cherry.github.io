<template>
	<div id="user">
		<head2 :headTitle="title"></head2>
	</div>
</template>

<script>
import head from 'components/head/Head2'
export default {

  name: 'user',

  data () {
	    return {
	      title: '个人中心'
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

<style lang="less" scoped>
@import '../../common/less/variable.less';
</style>