<template>
  <div class="vos-cart-item">
    <img class="vos-cart-item__img" :src="require('../assets/images/' + cart_item_data.image)" alt="image">

    <div class="vos-cart-item__data">
      <p><b>{{ cart_item_data.name }}</b></p>
      <p>Пол: <b>{{ cart_item_data.gender }}</b></p>
      <p>Цена: <b>{{ parseInt(cart_item_data.price) }}</b></p>
    </div>
    <div class="vos-cart-item__quantity">
      <p>Количество:</p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "vos-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1);
  }
}
</script>

<style lang="scss">
.vos-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 10px;

  background: #121212;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.68);

  transition: 0.5s;

  &:last-child {
    margin-bottom: 0;
  }

  &__img {
    width: 200px;
  }
}

</style>