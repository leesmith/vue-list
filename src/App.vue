<template>
  <div class="container">
    <div class="row pt-2">
      <div class="col-lg-6 offset-lg-3">
        <p class="text-center"><img src="./assets/logo.png"></p>
        <div class="card">
          <ol class="list-group list-group-flush">
            <list-item v-for="item in items" :todo="item" :key="item.id"></list-item>
          </ol>
          <div class="card-block">
            <form @submit.prevent="addToList()">
              <div class="form-group">
                <input v-model="newItem" class="form-control" placeholder="Add todo item..." autofocus="true" />
              </div>
              <button type="submit" :disabled="!newItem" class="btn btn-block btn-success">+ Add Item</button>
            </form>
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
        newItem: ''
      }
    },
    mounted () {
      this.getItems()
    },
    methods: {
      addToList: function() {
        this.items.push({
          text: this.newItem
        })
        this.newItem = ''
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
