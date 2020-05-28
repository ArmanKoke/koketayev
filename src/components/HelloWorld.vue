<template>
  <div class="hello">
    <h1 v-text="msg"></h1>
    <div class="text">
      <p v-text="text"></p>

      <h3 v-text="reactivity"></h3>
      <ul>
        <li v-for="some in list" v-bind:key="some" v-text="some"></li>
      </ul>
      <input type="text" v-model="staff">
      <button v-on:click="addToList" v-text="list_btn"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data () {
    return {
      msg: 'Here I am Arman!',
      text: 'Just took some money from sister to buy this domain :)',
      reactivity: 'Some reactivity to this boring place!',

      staff: '',
      list: [],
      list_btn: 'Add to reactivity!',
    }
  },
  methods: {
    addToList() {
      this.list.push(this.staff)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
