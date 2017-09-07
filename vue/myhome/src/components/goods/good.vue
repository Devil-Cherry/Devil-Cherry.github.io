<template>
	<div id="good">
		<div class="go-head">
			<back></back>
		</div>
		<banner></banner>
		<goodtitle></goodtitle>
		<detail></detail>
		<div class="handleBox fix-b" v-if='show'>
			<handle v-on:listenclick="showmsg"></handle>
		</div>
		<add v-if="sliding" v-on:listenbray="removeadd"></add>
	</div>
</template>

<script>
import banner from 'components/goods/banner'
import Back from 'components/common/back'
import Title from 'components/goods/Title'
import Detail from 'components/goods/Detail'
import Handle from 'components/goods/Handle'
import Add   from 'components/goods/addShopcar'
export default {

  name: 'good',

  data () {
    return {
    	show:true,
    	sliding:false
    }
  },
  components:
  {
  	'back':Back,
  	'banner':banner,
  	'goodtitle':Title,
  	'detail':Detail,
  	'handle':Handle,
  	'add':Add

  },
  created:function(){
    this.$parent.isfoot(false)
  },
  methods:{
  	showmsg:function(data){
  		var _this = this;
  		if(data)
  		{
  			_this.sliding=true
  		}
  	},
  	removeadd:function(msg){
  		var _this = this;
  		if(msg)
  		{
  			_this.sliding=false;
  		}
  	}
  }

}
</script>

<style lang="less" scoped>
@import '../../common/less/variable.less';
#good
{
	width: 100%;
	height: auto;
	overflow: hidden;
	background-color: #eee;
	position: relative;
}
.go-head
{
	width: 100%;
	.re-height(88);
	background-color: rgba(0,0,0,.6);
	position: absolute;
	top: 0;
	z-index: 8;
	
}
.handleBox
{
	width: 100%;
	height: auto;
	overflow: hidden;
	z-index: 10;
}
</style>