<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <AppThemeComponent />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppThemeComponent from "../components/AppThemeComponent.vue";
</script>
