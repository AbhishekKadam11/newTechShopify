<script>
import { ref } from 'vue'
export default {

  setup() {

    const greeting = ref("test")
    const testfn = () =>console.log("button click", greeting);
    return {
      greeting,
      testfn
    }
  }
}
</script>
