<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark row justify-center">
      <q-toolbar class="col-6">
        <q-input bottom-slots label="Country" dark class="full-width">
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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent, ref, watch, computed } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",
  components: {},

  setup() {
    //configs
    const $q = useQuasar();

    $q.dark.set(true);
    const themeValue = ref(true);

    watch(
      () => $q.dark.isActive,
      (val) => {
        themeValue.value = val;
      }
    );

    return {
      themeValue,
      switchTheme() {
        $q.dark.toggle();
      },
  
    };
  },
});
</script>
