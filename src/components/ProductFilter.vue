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
      if (rootElement.value) {
        try {
          let filterObj = rootElement.value.dataset.productInfo.substring(0, rootElement.value.dataset.productInfo.length - 1);
          console.log("product info:",filterObj )
          // processorType.value = JSON.parse(rootElement.value.dataset.productTags).filter(el =>  el.split("processor_type:")[1]);
          // console.log('product in vue', processorType);
        } catch (e) {
          throw new Error("Unable to process product tags", e);
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
