<template>
  <v-dialog v-model="dialog" persistent width="38vw">
    <v-card title="Are you sure you want to sign out?">
      <v-card-text>Please note that if you close this tab or browser, your chat history will be lost. However, if
        you don't close this tab and sign in again, you'll be able to access your chat history.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="handleDisagree">
          No
        </v-btn>
        <v-btn color="red" variant="text" @click="handleAgree">
          YES
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    handleDisagree() {
      this.$emit("handleSignOut")
    },

    handleAgree() {
      this.$emit("signOut")
    }
  },

  watch: {
    show(val) {
      this.dialog = val;
    }
  }
}
</script>
