<template>
  <v-card
    v-if="submit"
    class="bg-transparent pa-2 mt-3 d-flex"
    width="22vw"
    rounded="lg"
    align="left"
    justify-end
    border
    @click="onSubmit"
  >
    <div class="d-flex align-center justify-space-between w-100">
      <div>{{ content }}</div>
      <v-icon :color="iconColor">mdi-send</v-icon>
    </div>
  </v-card>
  <v-card
    v-else
    class="bg-transparent pa-2 mt-3"
    width="19vw"
    rounded="lg"
    align="left"
    border
  >
    {{ content }}
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
    },
    submit: {
      type: Function,
    },
  },

  methods: {
    onSubmit() {
      if (!this.submit) return;
      this.submit(this.content);
    },
  },
};
</script>
