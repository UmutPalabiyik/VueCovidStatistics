<template>
  <q-toolbar class="col-6">
    <q-input
      v-model="inputValue"
      bottom-slots
      label="Country"
      dark
      class="full-width"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>

      <template v-slot:append>
        <q-icon name="close" class="cursor-pointer" />
      </template>
    </q-input>
    <q-btn
      round
      color="dark"
      :icon="themeValue ? 'eva-moon-outline' : 'eva-sun-outline'"
      class="q-ml-md"
      @click="switchTheme"
    />
  </q-toolbar>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "CountrySearchBar",
  setup() {
    const $q = useQuasar();
    const themeValue = ref(true);
    const inputValue = ref("");

    $q.dark.set(true);
    watch(
      () => $q.dark.isActive,
      (val) => {
        themeValue.value = val;
      }
    );

    return {
      themeValue,
      inputValue,
      switchTheme() {
        $q.dark.toggle();
      },
    };
  },
});
</script>
