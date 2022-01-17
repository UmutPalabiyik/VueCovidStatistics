<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <AppThemeComponent />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppThemeComponent from "../components/AppThemeComponent.vue";

export default defineComponent({
  name: "MainLayout",
  components: { AppThemeComponent },
});
</script>
