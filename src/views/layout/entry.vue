<template>
  <div>
    <nav-top-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navTopMenu from "./navTopMenu.vue";
export default defineComponent({
  components: { navTopMenu },
});
</script>
<style lang='scss' scoped>
</style>