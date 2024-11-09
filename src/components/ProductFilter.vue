<script>
import { onMounted, ref } from 'vue';
// import compareDate from '@/scripts/customFilters/filters/compareDate';
import AddToCart from './AddToCart.vue';
export default {

  components: {
    AddToCart
  },

  setup() {

    const rootElement = ref(null);
    // const testfn = () =>console.log("button click", greeting);
    let testVar ='';// rootElement.value.dataset.productId;
    console.log('product in vue', rootElement.value.dataset.productId);

    onMounted(()=> {
      testVar = rootElement.value.dataset.productId;
      console.log('product in vue',testVar);
    })

    return {
      // compareDate
      testVar
    }
  }
}
</script>
