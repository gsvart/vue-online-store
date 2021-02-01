<template>
  <div class="vos-cart-item">
    <img class="vos-cart-item__img" :src="require('../assets/images/' + cart_item_data.image)" alt="image">

    <div class="vos-cart-item__data">
      <p><b>{{ cart_item_data.name }}</b></p>
      <p>Пол: <b>{{ cart_item_data.gender }}</b></p>
      <p>Цена: <b>{{ parseInt(cart_item_data.price) }}</b></p>
    </div>
    <div class="vos-cart-item__quantity"></div>
    <button>Удалить</button>
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
  }
}
</script>

<style>
.vos-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.07);
  padding: 10px;
  transition: .5s;
}

.vos-cart-item:last-child {
  margin-bottom: 0;
}

.vos-cart-item__img {
  width: 200px;
}

</style>