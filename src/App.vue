<template>
  <div id="app">
    <Title/>
    <Header></Header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Title from './components/Title.vue';
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
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
