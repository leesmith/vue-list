import Vue from 'vue'
import App from './App.vue'

Vue.component('list-item', {
  props: ['todo'],
  template: '<li class="list-group-item">{{todo.text}}</li>'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
