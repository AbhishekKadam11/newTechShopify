<script>
import { ref } from 'vue';
// import compareDate from '@/scripts/customFilters/filters/compareDate';
import AddToCart from './AddToCart.vue';
export default {

  components: {
    AddToCart
  },

  setup() {

    const greeting = ref("test");
    const testfn = () =>console.log("button click", greeting);
    console.log('product in vue', customElements.get('data-products'));

    return {
      greeting,
      testfn,
      // compareDate
    }
  }
}
</script>
