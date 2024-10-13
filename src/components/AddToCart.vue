<script setup>
import { ref } from 'vue';
import { SVG_CONSTANTS } from '@/shared/svgIcons';

const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 5
  }
});

const quantity = ref(0);
const incrementQuantity = () => {
  if (quantity.value >= props.max) {
    return props.max;
  }
  return quantity.value++;
};
const decrementQuantity = () => {
  if (quantity.value <= props.min) {
    return props.min;
  }
  return quantity.value--;
};

</script>
<template>
  <div class="quantity cart-quantity">
    <button class="quantity__button" name="minus" type="button" v-on:click="decrementQuantity">
      <!-- <span class="visually-hidden">
      {{- 'products.product.quantity.decrease' | t: product: variant.title | escape -}}
    </span> -->
      <div v-html="SVG_CONSTANTS.MINUS"></div>
    </button>
    <input class="quantity__input" data-quantity-variant-id="{{ variant.id }}" type="number"
      name="updates[{{ variant_id }}]" v-model="quantity"
      min="props.min"
      max="props.max"
      aria-label="{{ 'products.product.quantity.input_label' | t: product: variant.title | escape }}"
      id="Quantity-{{ variant.id }}" data-index="{{ variant.id }}"  />
    <button class="quantity__button" name="plus" type="button" v-on:click="incrementQuantity">
      <!-- <span class="visually-hidden">
      {{- 'products.product.quantity.increase' | t: product: variant.title | escape -}}
    </span> -->
      <div v-html="SVG_CONSTANTS.PLUS"></div>
    </button>
    <!-- {%- render 'progress-bar' -%} -->
  </div>
</template>

<style scoped>
.quantity {
  width: auto;
}
</style>