<template>
  <section>
    <div class="row">
      <div v-for="i in 2" :key="i">
        <i
          v-for="item in renderData.glyphs"
          :key="item.icon_id"
          :class="`iconfont icon${item.font_class}`"
        ></i>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from "vue";
import iconfontList from "./iconfont.json";
export default defineComponent({
  setup() {
    const data = {
      glyphs: iconfontList.glyphs
    };
    const renderData = reactive(data);
    return {
      renderData
    };
  }
});
</script>
<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #111;
  overflow: hidden;

  .row {
    position: relative;
    width: 100%;
    display: flex;
    padding: 10px 0;
    white-space: normal;
    i {
      color: #fff;
      font-size: 64px;
    }
  }
}
</style>
