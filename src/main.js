import Vue from 'vue'
import App from './App.vue'

Vue.component('list-item', {
  props: ['todo', 'index'],
  template: '<li class="list-group-item" :id="index">{{todo.text}}</li>'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
