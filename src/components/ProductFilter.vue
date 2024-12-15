<script>
import { onMounted, ref } from 'vue';
import { apiService } from '@/scripts/utils/api-service';
export default {

  components: {
  },

  setup() {

    const rootElement = ref(null);
    const productFilters = ref([]);

    onMounted((data, target) => {
      if (rootElement.value) {
        try {
          let filterObj = rootElement.value.dataset.productInfo.substring(0, rootElement.value.dataset.productInfo.length - 1);
          console.log("filterObj =>", filterObj);
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
              productFilters.value.push(obj)
            }
          });
          console.log("productFilters =>", productFilters);
        } catch (e) {
          console.log("productFilters e=>", e);
          throw new Error("Unable to process product tags", e);
        }
      }
    });


    const updateProductList = (value) => {
      console.log('value', value)
      const url = `${window.location.pathname}?${value.param_name}`;
      const config = {method: 'GET', url}
      const result = apiService(url);
    };

    return {
      rootElement,
      productFilters,
      updateProductList,
    }
  }
}
</script>
