<template>
  <div class="row full-width justify-center q-gutter-sm q-mt-lg">
    <CountryComponent
      v-for="country in filteredData"
      :key="country.Country"
      :country="country"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import CountryComponent from "./CountryComponent.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("CovidStore/updateCovidSummary");
});

const filteredData = computed(() => {
  const target_copy = JSON.parse(JSON.stringify(summaryData.value));
  return target_copy?.filter((country) =>
    country.Country.toLowerCase().includes(headerInputValue.value)
  );
});

const summaryData = computed(() => store.getters["CovidStore/summaries"]);
const headerInputValue = computed(
  () => store.getters["CountrySearchBarStore/getSearchBarValue"]
);
</script>
