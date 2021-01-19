<template>
  <div id="app">
    <p>Hello world!</p>
    <vos-main-wrapper/>
  </div>
</template>

<script>
import VosMainWrapper from './components/vos-main-wrapper.vue'

export default {
  name: 'App',
  components: {
    VosMainWrapper
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
