<template>
  <v-footer class="footer rounded-t-lg bg-grey-lighten-4">
    <v-row align="center" justify="center">
      <v-col>
        <v-textarea
          v-model="prompt"
          variant="outlined"
          color="primary"
          rows="1"
          row-height="15"
          auto-grow
          class="textarea-with-icon mt-3"
          :loading="loading"
          :disabled="disabled"
          @keydown.enter="handleEnterKey"
        >
          <template #append-inner>
            <v-icon
              @click="submit"
              :class="['send-icon', disable ? 'disabled' : '']"
              :color="disable ? 'grey' : 'teal'"
              >mdi-send</v-icon
            >
          </template>
        </v-textarea>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => {
    return { prompt: "", loading: false, disabled: false };
  },

  methods: {
    submit() {
      if (this.disable) return;

      this.$emit("submit", this.prompt.trim());
      this.prompt = "";
    },

    handleEnterKey(event) {
      if (!event.shiftKey) {
        event.preventDefault();

        this.submit();
      }
    },

    setLoadingAndDisable() {
      this.loading = !this.loading;
      this.disabled = !this.disabled;
    },
  },

  computed: {
    disable() {
      return !this.prompt.trim();
    },
  },
};
</script>
