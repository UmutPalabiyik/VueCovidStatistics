<template>
  <div class="row full-width justify-center q-gutter-sm q-mt-lg">
    <q-card
      v-for="country in filteredData"
      :key="country"
      class="my-card col-2 cursor-pointer"
    >
      <q-card-section>
        <div class="text-h6 text-center">{{ country.Country }}</div>
      </q-card-section>

    </q-card>
    <q-inner-loading
      :showing="summaryDataFetchStatus"
      label="Data is fetching ..."
      label-class="text-teal"
      label-style="font-size: 1.5em"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, computed, onMounted, watch } from "vue";

export default defineComponent({
  name: "CovidSummaryDataComponent",
  setup() {
    const store = useStore();
    const summaryData = computed(() => store.getters["CovidStore/summaries"]);
    const headerInputValue = computed(() => store.getters["CountrySearchBarStore/getSearchBarValue"]);
    const summaryDataFetchStatus = computed(() => store.getters["CovidStore/getSummaryDataFetchStatus"]);
    const filteredData = computed(() => {
      const target_copy = JSON.parse(JSON.stringify(summaryData.value));
      return target_copy?.filter(country => country.Country.toLowerCase().includes(headerInputValue.value))
    });

    onMounted(() => {
      store.dispatch("CovidStore/updateCovidSummary");
    });    

    return {
      filteredData,
      summaryData,
      headerInputValue ,
      summaryDataFetchStatus
    };
  },
});
</script>
