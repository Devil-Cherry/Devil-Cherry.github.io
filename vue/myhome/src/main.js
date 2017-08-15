// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import 'common/less/variable.less'
require('common/less/reset.less')
require('common/less/main.less')
// require('common/less/swiper-3.4.2.min.css')
// require('common/less/variable.less')

Vue.use(resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('money', function(val) {	//全局方法 金额格式化
    val = val.toString().replace(/\$|\,/g,'');
    if(isNaN(val)) {
      val = "0";  
    } 
    let sign = (val == (val = Math.abs(val)));
    val = Math.floor(val*100+0.50000000001);
    let cents = val%100;
    val = Math.floor(val/100).toString();
    if(cents<10) {
       cents = "0" + cents
    }
    for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
        val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
    }

    return (((sign)?'':'-') + val + '.' + cents);
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
