<template>
  <div class="vos-cart">
    <h2>Корзина</h2>
    <vos-cart-item/>
  </div>
</template>

<script>
import VosCartItem from './vos-cart-item.vue'

export default {
  name: 'vos-cart',
  components: {VosCartItem},
  props: {},
  data() {
    return {
      title: 'vos-cart'
    }
  }
}
</script>