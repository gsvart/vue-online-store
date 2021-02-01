<template>
  <div class="vos-cart">
    <h2>Корзина</h2>
    <vos-cart-item 
      v-for="item in cart_data" 
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import VosCartItem from './vos-cart-item.vue'

export default {
  name: 'vos-cart',
  components: {VosCartItem},
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>