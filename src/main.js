// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store';
import echarts from 'echarts'
Vue.prototype.$echarts=echarts
Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.directive('changeStyle',{
  bind(el,binding){
    el.style.color='#'+Math.random().toString(16).slice(2,8);
    el.style.fontSize=binding.value.font
  }//binding.arg 可以作为判断依据，提高指令的可复用性
});

Vue.filter('to-uppercase',function(val){
  return val.toUpperCase()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
