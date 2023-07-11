<template>
  <div>
    <v-btn
      v-if="showButton"
      class="btn-scroll2bottom"
      color="red-accent-3"
      position="fixed"
      density="comfortable"
      elevation="10"
      icon="mdi-arrow-down"
      @click="scrollToBottom"
    >
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollableArea: null,
      showButton: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const isScrollable =
        window.innerHeight < document.documentElement.scrollHeight;
      const isAtBottom =
        window.innerHeight + window.scrollY ===
        document.documentElement.scrollHeight;

      this.showButton = isScrollable && !isAtBottom;
    },

    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>
