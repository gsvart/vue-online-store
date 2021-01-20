<template>
  <div class="vos-catalog">
    <h1>{{ title }}:</h1>
    <div class="vos-catalog__list">
      <vos-catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import VosCatalogItem from './vos-catalog-item.vue'

export default {
  name: 'vos-catalog',
  components: {VosCatalogItem},
  props: {},
  data() {
    return {
      title: 'Catalog',
      products: [
        {
          image: "w1.jpg",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Женские"
        },
        {
          image: "w2.jpg",
          name: "T-shirt 2",
          price: 3150.12312412,
          article: "T2",
          available: true,
          category: "Женские"
        },
        {
          image: "m1.jpg",
          name: "T-shirt 3",
          price: 4200.51524,
          article: "T3",
          available: false,
          category: "Мужские"
        },
        {
          image: "m2.jpg",
          name: "T-shirt 4",
          price: 5300.1245512,
          article: "T4",
          available: true,
          category: "Мужские"
        },
        {
          image: "w3.jpg",
          name: "T-shirt 5",
          price: 6500.3522314,
          article: "T5",
          available: false,
          category: "Женские"
        },
        {
          image: "m3.jpg",
          name: "T-shirt 6",
          price: 8700.4124123,
          article: "T6",
          available: true,
          category: "Мужские"
        }
      ]
    }
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