99
<template>
  <q-btn
    round
    color="dark"
    :icon="themeValue ? 'eva-moon-outline' : 'eva-sun-outline'"
    class="q-ml-md fixed-bottom-right q-mb-lg q-mr-lg zIndex"
    @click="switchTheme"
  />
</template>

<script>
import { defineComponent, watch, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "AppThemeComponent",
  setup() {
    const $q = useQuasar();
    const themeValue = ref(true);

    $q.dark.set(true);
    watch(
      () => $q.dark.isActive,
      (val) => {
        themeValue.value = val;
      }
    );

    return {
      themeValue,
      switchTheme() {
        $q.dark.toggle();
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.zIndex {
  z-index: 999;
}
</style>
