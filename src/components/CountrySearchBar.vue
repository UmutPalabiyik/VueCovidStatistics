<template>
  <q-toolbar class="col-4">
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
  </q-toolbar>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "CountrySearchBar",
  emits: ["inputValue"],
  setup(props, { emit }) {
    const inputValue = ref("");
    watch(inputValue, (val) => {
      emit("inputValue", val);
    });

    return {
      inputValue,
    };
  },
});
</script>
