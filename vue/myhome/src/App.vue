<template>
  <div id="app">
    <transition name="fade">
    	<router-view></router-view>
    </transition>
    
    <vue-foot v-if='isFoot'></vue-foot>
  </div>
</template>

<script>
import Foot from 'components/Foot'

export default {
  data()
  {
    return {
      isFoot:true
    }
  },
  components: {
    'vue-foot': Foot
  },
  created:function(){
    this.isfoot(true)
  },
  methods:
  {
    isfoot:function(fool)
    {
      this.isFoot = fool
    }
  }
}
document.getElementsByTagName('html')[0].style.fontSize = window.screen.width / 10 + 'px'
  
</script>

<style lang='less'>
@import 'common/less/variable.less';
#app
{
  width: 100%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
