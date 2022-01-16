<template>
  <q-page class="flex flex-center" dark>
    <div class="row full-width justify-center q-gutter-sm q-mt-sm">
      <q-card
        v-for="country in covidSummary"
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
    </div>
  </q-page>
</template>

<script>
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const loadingSkeleton = ref(true);
    const store = useStore();
    onMounted(() => {
      store.dispatch("CovidStore/updateCovidSummary");
    });
    return {
      covidSummary: computed(() => store.getters["CovidStore/summaries"]),
    };
  },
});
</script>
