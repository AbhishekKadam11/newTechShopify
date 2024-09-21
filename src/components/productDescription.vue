<!-- <script>
import { ref } from 'vue'
export default {
  setup() {
    console.log("vue loaded")
    const count = ref(0)
    return { count }
    return {
      name: 'Apples',
      message: 'I like apples'
    }
  }
};
</script>

<style></style> -->
<!-- <script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')

</script>


<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style> -->
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
