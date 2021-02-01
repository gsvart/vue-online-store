<template>
  <div class="vos-catalog">
    <h1>Catalog: {{ activeItem }}</h1>
    <div class="vos-catalog__list">
      <vos-catalog-item
        v-for="product in PRODUCTS_LIST"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VosCatalogItem from './vos-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vos-catalog',
  components: {VosCatalogItem},
  data() {
    return {
      activeItem: 0
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS_LIST'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_LIST',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
      console.log(data.article);
      this.activeItem = data.article;
    }
  },
  mounted() {
    this.GET_PRODUCTS_LIST()
    // Вызываем какое-либо действие при успешном выполнении запроса
    .then((response) => {
      if (response.data) {
        console.log('Данные получены.');
      }
    })
  }
}
</script>

<style lang="scss">
.vos-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

</style>