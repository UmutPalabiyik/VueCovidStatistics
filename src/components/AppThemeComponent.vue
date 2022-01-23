<template>
  <q-btn
    round
    color="dark"
    :icon="themeValue ? 'eva-moon-outline' : 'eva-sun-outline'"
    class="q-ml-md fixed-bottom-right q-mb-lg q-mr-lg zIndex"
    @click="switchTheme"
  />
</template>

<script setup>
import { watch, ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const themeValue = ref(true);
const switchTheme = () => {
  $q.dark.toggle();
};

$q.dark.set(true);
watch(
  () => $q.dark.isActive,
  (val) => {
    themeValue.value = val;
  }
);
</script>

<style lang="scss" scoped>
.zIndex {
  z-index: 999;
}
</style>
