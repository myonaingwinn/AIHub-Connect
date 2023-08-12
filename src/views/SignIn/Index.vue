<template>
  <v-row>
    <v-col cols="4"></v-col>
    <v-col cols="4">
      <v-sheet class="bg-cya ma-8 pa-15" height="60vh" rounded="lg" border>
        <GoogleLogin :callback="callback" />
      </v-sheet>
    </v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { useAppStore } from "@/store/app";
import { saveUser } from "@/api/firebase";

export default {
  data() {
    return {
      appStore: useAppStore(),
      callback: (response) => {
        if (!response) return;

        const user = decodeCredential(response.credential);
        this.onSignIn(user);
      },
    };
  },

  methods: {
    async onSignIn(googleUser) {
      await saveUser(googleUser);

      if (this.appStore.isAuthenticated)
        this.$router.replace({ name: "Home" }).catch(() => {});

      this.$router.go(0);
    },
  },
};
</script>
