<script>
import { onBeforeMount, onMounted, ref } from 'vue';
// import compareDate from '@/scripts/customFilters/filters/compareDate';
import AddToCart from './AddToCart.vue';
export default {

  components: {
    AddToCart
  },

  setup() {

    const rootElement = ref(null);
    // const testfn = () =>console.log("button click", greeting);
    let testVar = '';// rootElement.value.dataset.productId;
    // console.log('product in vue', rootElement.value.dataset.productId);
    // let dataValue = document.querySelector('.facets-container').getAttribute("data-product-id");

    // console.log(dataValue);
    // onBeforeMount((data, target)=> {
    //  // rootElement = rootElement.value.dataset.productId;
    //   console.log('onBeforeMount product in vue',rootElement.value.dataset.productId);
    // })

    onMounted((data, target) => {
      // rootElement = rootElement.value.dataset.productId;
      if (rootElement.value) {
        console.log('product in vue', rootElement.value.dataset.productTags);
      }
    });

    return {
      // compareDate
      rootElement,
      testVar
    }
  }
}
</script>
