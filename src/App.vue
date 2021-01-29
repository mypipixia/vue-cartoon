<template>
  <cartoon-clock>123</cartoon-clock>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import cartoonClock from "components/date/cartoonClock.vue";

export default defineComponent({
  components: {
    cartoonClock,
  },
});
</script>
