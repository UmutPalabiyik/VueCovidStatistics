<template>
  <q-header elevated class="bg-dark row justify-start">
    <q-toolbar-title class="col-4 row justify-center items-center text-weight-bold">Covid-19 Statistics</q-toolbar-title>
    <CountrySearchBar />
  </q-header>

  <q-page class="flex flex-center" dark>
    <CovidSummaryDataComponent />
  </q-page>
</template>

<script setup>
import CovidSummaryDataComponent from "../components/CovidSummaryDataComponent.vue";
import CountrySearchBar from "../components/CountrySearchBar.vue";


</script>
