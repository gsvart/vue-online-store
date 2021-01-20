<template>
  <div id="app">
    <vos-main-wrapper/>
  </div>
</template>

<script>
import VosMainWrapper from './components/vos-main-wrapper.vue'

export default {
  name: 'App',
  components: {VosMainWrapper},
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style>
#app {
  display: flex;
  margin-top: 60px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




</style>
