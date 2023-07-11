<template>
  <v-snackbar v-model="showMe" :timeout="notificationTimeout">
    <div class="text-subtitle-1 pb-2">Error</div>
    <p>{{ notificationText }}</p>

    <template v-slot:actions>
      <v-btn color="info" @click="showMe = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      showMe: false,
      notificationText: "",
      notificationTimeout: 5000,
    };
  },
  methods: {
    showNotification(message) {
      this.notificationRef.notificationText = message;
      this.notificationRef.showMe = true;
    },
  },
};
</script>
