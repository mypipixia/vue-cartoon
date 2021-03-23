<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { MENU_TOP_NAV } from "@/config/menu";
export default defineComponent({
  setup() {
    const data = reactive({
      menuTopNav: MENU_TOP_NAV,
    });
    return {
      data,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>