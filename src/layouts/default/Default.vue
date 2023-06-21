<template>
  <v-app>
    <default-bar />
    <drawer />
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import Drawer from "../Drawer.vue";
</script>
