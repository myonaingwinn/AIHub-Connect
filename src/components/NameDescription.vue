<template>
  <div class="app-name text-h2 font-weight-black">AIHub Connect</div>
  <div v-if="!description" class="app-description mt-9">
    Your gateway to AI-powered experiences
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
