<script>
import { onMounted, ref } from 'vue';
import AddToCart from './AddToCart.vue';
export default {

  components: {
    AddToCart
  },

  setup() {

    const rootElement = ref(null);
    const prductFilters = ref([]);

    onMounted((data, target) => {
      if (rootElement.value) {
        try {
          let filterObj = rootElement.value.dataset.productInfo.substring(0, rootElement.value.dataset.productInfo.length - 1);
          console.log("product info:",filterObj )
          filterObj.split('start=').map((e) => {
            let item = {};
            e.split(',').map((it) => {
              if (it) {
                let keyPair = it?.split(':');
                item[keyPair[0]] = keyPair[1];
              }
            })
            Object.keys(item).length > 0 ? prductFilters.value.push(item) : null;
          })
          console.log("prductFilters =>",  prductFilters.value);
        } catch (e) {
          console.log("prductFilters e=>", e);
          throw new Error("Unable to process product tags", e);
        }
      }
    });

    return {
      rootElement,
      prductFilters,
    }
  }
}
</script>
