<template>
  <div>
    <q-card
      class="my-card col-2 cursor-pointer row justify-center items-center"
    >
      <q-card-section>
        <div class="text-h6 text-center"></div>
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

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const summaryDataFetchStatus = computed(
  () => store.getters["CovidStore/getSummaryDataFetchStatus"]
);
console.log(country)
</script>
