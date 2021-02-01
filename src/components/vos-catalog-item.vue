<template>
  <div class="vos-catalog-item">
    <img class="vos-catalog-item__img" :src="require('../assets/images/' + product_data.image)" alt="image">
    <p class="vos-catalog-item__name"><b>{{ product_data.name }}</b></p>
    <p class="vos-catalog-item__gender">Пол: <b>{{ product_data.gender }}</b></p>
    <p class="vos-catalog-item__price">Цена: <b>{{ parseInt(product_data.price) }} Р.</b></p>
    <button 
      class="vos-catalog-item__cart-btn btn"
      @click="addToCart"  
    >Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'vos-catalog-item',
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      title: 'vos-catalog-item'
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  }
}
</script>

<style lang="scss">
.vos-catalog-item {
  width: 30%;
  margin-bottom: $margin*2;
  padding: $padding*2;

  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.07);

  &__img {
    width: 100%;
  }
}

</style>