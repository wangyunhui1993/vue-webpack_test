import Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/5.gif'
const root = document.createElement('div')
new Vue({
  render:(h) => h(App)  // new Vue({render:(h) => h(App)  //声明渲染App组件
}).$mount(root)    //把组件挂载到根元素上