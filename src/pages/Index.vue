<template>
  <q-page class="flex flex-center" dark>
    <CovidDataSummaryComponent />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import CovidDataSummaryComponent from "../components/CovidDataSummaryComponent.vue";

export default defineComponent({
  name: "PageIndex",
  components: { CovidDataSummaryComponent },
  setup() {},
});
</script>
