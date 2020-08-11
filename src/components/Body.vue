<template>
  <div id="body">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Body',
    components: {
    },
  }
</script>

<style scoped>
  #body {
    left: 0;
    right: 0;
    height: 100%;
    bottom: 100px;
    top: 100px;
    /*background-color: gainsboro;*/
  }
</style>
