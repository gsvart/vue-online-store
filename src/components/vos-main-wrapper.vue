<template>
  <div class="vos-main-wrapper">
    <vos-catalog/>
    <vos-cart v-if="CART.length"/>
  </div>
</template>

<script>
import VosCatalog from './vos-catalog.vue'
import VosCart from './vos-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'vos-main-wrapper',
  components: {VosCatalog, VosCart},
  props: {},
  data() {
    return {
      title: 'main-wrapper'
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style lang="scss">
.vos-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

</style>