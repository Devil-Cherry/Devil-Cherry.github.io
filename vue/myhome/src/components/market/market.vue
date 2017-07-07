<template>
<div id="market">
	<searchbar></searchbar>
	<div class="mar-content">
	   <m-nav></m-nav>
	   <transition name="slide">
	   		<router-view></router-view>
	   </transition>
	 </div>
 </div>
</template>

<script>
import Navbar from './Navbar'
import searchBar from 'components/head/Search'
	export default {
	  name: 'market',
	  data () {
	    return {
	     
	    }
	  },

	  components: {
	  	'searchbar': searchBar,
	  	'm-nav': Navbar
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../../common/less/variable.less';
.mar-content
{
	.pT(88);
	.pB(98);
	height: auto;
	overflow: hidden;
}
</style>
