<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-lg-6 offset-lg-3">
        <p class="text-center"><img src="./assets/logo.png"></p>
        <div class="card">
          <ol class="list-group list-group-flush">
            <list-item v-for="item in items" v-bind:todo="item"></list-item>
          </ol>
          <div class="card-block">
            <div class="alert alert-danger" v-show="flashMsg">
              {{flashMsg}}
            </div>
            <input v-model="newItem" class="form-control" autofocus="true" />
            <br/>
            <button @click="addToList()" class="btn btn-block btn-success">+ Add Item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        items: [],
        newItem: '',
        flashMsg: ''
      }
    },
    mounted () {
      this.getItems()
    },
    methods: {
      addToList: function() {
        if (this.newItem != '') {
          this.items.push({
            text: this.newItem
          })
          this.newItem = ''
          this.flashMsg = ''
        } else {
          this.flashMsg = 'Please enter a todo item!'
        }
      },
      getItems: function() {
        this.items = [
          { text: 'Buy groceries' },
          { text: 'Pick up laundry' },
          { text: 'Wash car' },
          { text: 'Pay bills' },
          { text: 'Get things working' }
        ]
      }
    }
  }
</script>

<style>
</style>
