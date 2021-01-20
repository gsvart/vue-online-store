<template>
  <div class="vos-main-wrapper">
    <vos-catalog/>
    <vos-cart/>
  </div>
</template>

<script>
import VosCatalog from './vos-catalog.vue'
import VosCart from './vos-cart.vue'

export default {
  name: 'vos-main-wrapper',
  components: {VosCatalog, VosCart},
  props: {},
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
}

</style>