

<script setup>
import { ref } from 'vue';
import { SVG_CONSTANTS } from '@/shared/svgIcons';
// export default  {

  // setup() {

    const greeting = ref("test")
    const testfn = () =>console.log("button click", greeting);
    // return {
    //   greeting,
    //   testfn,
    // }
  // }
// }
</script>
<template>
 <div class="quantity cart-quantity">
  <button class="quantity__button" name="minus" type="button">
    <!-- <span class="visually-hidden">
      {{- 'products.product.quantity.decrease' | t: product: variant.title | escape -}}
    </span> -->

    <div v-html="SVG_CONSTANTS.MINUS"></div>
  </button>
  <input
    class="quantity__input"
    data-quantity-variant-id="{{ variant.id }}"
    type="number"
    name="updates[{{ variant_id }}]"

    value="{{ cart | item_count_for_variant: variant.id }}"
    data-cart-quantity="{{ cart | item_count_for_variant: variant.id }}"
    min="{{ min }}"
    data-min="{{ variant.quantity_rule.min }}"

      max="{{ variant.quantity_rule.max }}"

    step="{{ variant.quantity_rule.increment }}"
    aria-label="{{ 'products.product.quantity.input_label' | t: product: variant.title | escape }}"
    id="Quantity-{{ variant.id }}"
    data-index="{{ variant.id }}"
  >
  <button class="quantity__button" name="plus" type="button">
    <!-- <span class="visually-hidden">
      {{- 'products.product.quantity.increase' | t: product: variant.title | escape -}}
    </span> -->
    <div v-html="SVG_CONSTANTS.PLUS"></div>
  </button>
  <!-- {%- render 'progress-bar' -%} -->
</div>

</template>
