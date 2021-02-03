<template>
  <div></div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const icons = ref([1, 1]);
    console.log(icons.value);
    return {
      icons
    };
  }
});
</script>
