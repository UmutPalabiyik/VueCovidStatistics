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

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const inputValue = ref("");
watch(inputValue, (val) => {
  store.dispatch("CountrySearchBarStore/updateSearchBarValue", val);
});
</script>
