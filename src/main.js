import Vue from 'vue'
import App from './App.vue'

export const EventBus = new Vue({});

Vue.component('list-item', {
  props: ['todo', 'index'],
  template: '<li class="list-group-item justify-content-between" :id="index">{{todo.text}}<button class="btn btn-sm btn-danger" @click="deleteItem(index)">&times;</button></li>',
  methods: {
    deleteItem: function(index) {
      EventBus.$emit('deletedindex', index)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
