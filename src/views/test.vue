<template>
  <cartoon-input :ref="getCinput"
                 setmy="1111"></cartoon-input>
</template>

<script lang="ts">
import { defineComponent, onMounted, Component } from "vue";
export default defineComponent({
  setup() {
    let cartoonInput: Component;
    const getCinput = (el: Component): void => {
      cartoonInput = el;
    };
    onMounted(() => {
      console.log(this);
    });
    return {
      getCinput,
    };
  },
});
</script>