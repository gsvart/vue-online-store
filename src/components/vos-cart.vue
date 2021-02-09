<template>
  <div class="vos-cart">

    <router-link :to="{name: 'catalog'}">
      <div class="vos-catalog__cart-link">Каталог</div>
    </router-link>

    <h2>Корзина</h2>
    <p v-if="!cart_data.length">В Вашей корзине ничего нет...</p>
    <vos-cart-item 
      v-for="(item, index) in cart_data" 
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import VosCartItem from './vos-cart-item.vue'
import { mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }
}
</script>