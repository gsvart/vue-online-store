<template>
  <div class="vos-main-wrapper">
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'vos-main-wrapper',
  data() {
    return {
      title: 'main-wrapper'
    }
  }
}
</script>

<style lang="scss">
.vos-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 50px;
}

</style>