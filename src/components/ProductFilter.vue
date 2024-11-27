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
          console.log("product info:", filterObj)
          // filterObj.split('start=').map((e) => {
          //   let item = {};
          //   e.split(',').map((it) => {
          //     if (it) {
          //       let keyPair = it?.split(':');
          //       item[keyPair[0]] = keyPair[1];
          //     }
          //   })
          //   Object.keys(item).length > 0 ? prductFilters.value.push(item) : null;
          // })
          filterObj.split('start=').map((e) => {
            let item = {};
            let inObj = {};
            e.split(',').map((it) => {
              if (it) {
                let keyPair = it?.split(':');
                let values = [];
                if (keyPair[0].includes("op-")) {
                  let vals = keyPair[0].split("op-")
                  inObj[vals[1]] = keyPair[1];
                  values.push(inObj);
                } else {
                  item[keyPair[0]] = keyPair[1];
                }
                item["values"] = values;

              }
            })
            Object.keys(item).length > 0 ? prductFilters.value.push(item) : null;
          });
          console.log("prductFilters =>", prductFilters.value);
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
