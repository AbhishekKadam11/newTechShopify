<script>
import { onMounted, ref } from 'vue';
import AddToCart from './AddToCart.vue';
export default {

  components: {
    AddToCart
  },

  setup() {

    const rootElement = ref(null);
    let processorType = ref(null);
    const prductFilters = ref(null);

    onMounted((data, target) => {
      // rootElement = rootElement.value.dataset.productId;
      if (rootElement.value) {
        try {
          productInfo = "{" + rootElement.value.dataset.productInfo + "}";
          console.log("product info:", rootElement.value.dataset.productInfo)
          processorType.value = JSON.parse(rootElement.value.dataset.productTags).filter(el =>  el.split("processor_type:")[1]);
          console.log('product in vue', processorType);
        } catch (e) {
          throw new Error("Unable to process product tags");
        }
      }
    });

    return {
      // compareDate
      rootElement,
      processorType
    }
  }
}
</script>
