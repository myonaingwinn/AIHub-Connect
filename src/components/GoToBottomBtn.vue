<template>
  <v-fade-transition>
    <v-btn v-show="showButton" class="btn-scroll2bottom" color="red-accent-3" position="fixed" density="comfortable"
      elevation="10" icon="mdi-arrow-down" @click="scrollToBottom">
    </v-btn>
  </v-fade-transition>
</template>

<script>
import { scrollToBottom } from "@/utils/scroll";

export default {
  data() {
    return {
      scrollableArea: false,
      showButton: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
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
      scrollToBottom();
    },
  },
};
</script>
