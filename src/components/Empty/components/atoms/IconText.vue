<template>
  <div align="center">
    <v-icon size="25" class="app-description">{{ icon }}</v-icon>
    <div class="font-weight-bold app-description">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
