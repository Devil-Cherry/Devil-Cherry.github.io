<template>
<div id="market">
	<searchbar></searchbar>
	<div class="mar-content">
	   <h3>{{msg}}</h3>
	   <m-head></m-head>
	 </div>
 </div>
</template>

<script>
import Head from './m-head'
import searchBar from 'components/head/Search'
	export default {
	  name: 'market',
	  data () {
	    return {
	      msg: 'This is market!'
	    }
	  },

	  components: {
	  	'searchbar': searchBar,
	  	'm-head': Head
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../../common/less/variable.less';
.mar-content
{
	.pT(88);
}
</style>
