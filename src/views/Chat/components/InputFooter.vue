<template>
  <v-footer class="footer rounded-t-lg">
    <v-row align="center" justify="center">
      <v-col>
        <v-textarea v-model="prompt" variant="outlined" rows="1" row-height="15" auto-grow class="textarea-with-icon"
          @keydown.enter="handleEnterKey" :loading="loading" :disabled="disabled">
          <template #append-inner>
            <v-icon @click="submit" :class="['send-icon', disable ? 'disabled' : '']"
              :color="disable ? 'grey' : 'teal'">mdi-send</v-icon>
          </template>
        </v-textarea>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => {
    const loading = false
    const disabled = false

    return { prompt: "", loading, disabled }
  },

  methods: {
    submit() {
      if (this.disable) return;

      this.$emit('submit', this.prompt.trim());
      this.prompt = ''
    },

    handleEnterKey(event) {
      if (!event.shiftKey) {
        event.preventDefault();

        this.submit();
      }
    },

    setLoadingAndDisable() {
      this.loading = !this.loading
      this.disabled = !this.disabled
    }
  },

  computed: {
    disable() {
      return !this.prompt.trim();
    },
  },
}
</script>

<style>
.footer {
  .textarea-with-icon {
    position: relative;
    margin: 0 20vw 0;
  }

  .send-icon {
    position: absolute;
    bottom: 0;
    right: 10px;
    transform: translateY(-70%);

  }

  .disabled {
    cursor: default;
  }
}
</style>
