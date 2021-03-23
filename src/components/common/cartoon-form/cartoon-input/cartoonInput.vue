<template>
  <div>
    <input :type="setmy" />
  </div>
</template>

<script>
import { defineComponent, defineProps, PropType } from "vue";
export default defineComponent({
  props: {
    setmy: {
      type: String,
      default: "1111"
    }
  },
  setup() {
    return {};
  }
});
</script>
