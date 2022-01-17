<template>
  <div class="row full-width justify-center q-gutter-sm q-mt-lg">
    <q-card
      v-for="country in SummaryData"
      :key="country"
      class="my-card col-2 cursor-pointer"
    >
      <q-card-section>
        <div class="text-h6 text-center">{{ country.Country }}</div>
      </q-card-section>

      <!--           <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions> -->
    </q-card>
    <q-inner-loading
      :showing="SummaryDataFetchStatus"
      label="Data is fetching ..."
      label-class="text-teal"
      label-style="font-size: 1.5em"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, computed, onMounted } from "vue";

export default defineComponent({
  name: "CovidDataSummaryComponent",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("CovidStore/updateCovidSummary");
    });
    return {
      SummaryData: computed(() => store.getters["CovidStore/summaries"]),
      SummaryDataFetchStatus: computed(() => store.getters["CovidStore/getSummaryDataFetchStatus"]),
    };
  },
});
</script>
