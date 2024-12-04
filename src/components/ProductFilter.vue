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
          filterObj.split("start=").forEach((item, index) => {
            let obj = {}; let KeyPair = []; let values = []; let innerObj = {};
            if (item) {
              item.split(",").forEach((e, i) => {
                if (e) {
                  KeyPair = e.split(":");
                  if (KeyPair[0].includes("values=")) {
                    if (KeyPair[0].split("values=")[1]) {
                      let innerKey = KeyPair[0].split("values=")[1];
                      innerObj[innerKey] = KeyPair[1];
                      //   console.log("innerKey", innerKey)
                      if (innerKey === 'param_name') {
                        values.push(innerObj);
                        innerObj = {};
                      }
                    }

                  } else {
                    obj[KeyPair[0]] = KeyPair[1];
                  }
                }
              })
            }
            if (values.length > 0 || Object.keys(obj).length > 0) {
              obj['values'] = values;
              prductFilters.value.push(obj)
            }
          });
          console.log("prductFilters =>", prductFilters);
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
