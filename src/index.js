import Vue from 'vue'
import App from './app.vue'
const root = document.createElement('div')
new Vue({
  render:(h) => h(App)  // new Vue({render:(h) => h(App)  //声明渲染App组件
}).$mount(root)    //把组件挂载到根元素上