<template>
  <div id="app">
  <transition>
  	<router-view></router-view>
  </transition>
    
    <vue-foot></vue-foot>
  </div>
</template>

<script>
import Foot from 'components/Foot'

export default {
  components: {
    'vue-foot': Foot
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
</style>
