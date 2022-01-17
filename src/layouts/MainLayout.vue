<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark row justify-center">
      <CountrySearchBar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import CountrySearchBar from "../components/CountrySearchBar.vue";

export default defineComponent({
  name: "MainLayout",
  components: { CountrySearchBar },
});
</script>
