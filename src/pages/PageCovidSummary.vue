<template>
  <q-header elevated class="bg-dark row justify-center">
    <CountrySearchBar @inputValue="inputChange" />
  </q-header>

  <q-page class="flex flex-center" dark>
    <CovidSummaryDataComponent />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import CovidSummaryDataComponent from "../components/CovidSummaryDataComponent.vue";
import CountrySearchBar from "../components/CountrySearchBar.vue";

export default defineComponent({
  name: "PageIndex",
  components: { CovidSummaryDataComponent, CountrySearchBar },
  setup() {
    const inputChange = (val) => {
      console.log("bla bla", val);
    };

    return {
      inputChange,
    };
  },
});
</script>
