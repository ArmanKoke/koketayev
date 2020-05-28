<template>
  <div id="app">
    <Title/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Title from './components/Title.vue';
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      Title,
      HelloWorld
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
