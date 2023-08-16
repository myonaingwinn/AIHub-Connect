<template>
  <div class="auth">
    <v-sheet class="d-flex flex-column align-center ma-8 pa-16 bg-white" elevation="4" rounded="lg" border>
      <name-description />
      <div class="d-flex flex-column align-center pt-15">
        <GoogleLogin :callback="callback" />
        <a class="pp-link mt-16 mb-n5" href="/privacy-policy" target="_blank">Privacy policy</a>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { useAppStore } from "@/store/app";
import { saveUser } from "@/api/firebase";
import NameDescription from "@/components/NameDescription.vue";

export default {
  components: {
    NameDescription
  },

  data() {
    return {
      appStore: useAppStore(),
      callback: async (response) => {
        if (!response) return;

        const user = decodeCredential(response.credential);
        await this.onSignIn(user);
      },
    };
  },

  methods: {
    async onSignIn(googleUser) {
      await saveUser(googleUser);

      if (this.appStore.isAuthenticated)
        this.$router.push({ name: "Home" }).catch(() => {
          this.$router.go(0);
        });
    },
  },
};
</script>
