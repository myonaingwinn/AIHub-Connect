<template>
  <v-sheet border elevation="1" :class="[
    'message-card rounded-lg',
    !isUser(role) ? 'mb-10' : 'mb-2',
  ]">
    <v-row>
      <v-col cols="1">
        <v-avatar :icon="getIcon(role)" :color="getIconColor(role)" class="msg-card-icons mb-3">
        </v-avatar>
      </v-col>
      <v-col cols="11">
        <div class="card-content pt-2 pr-6 pb-5" v-html="interpretCode(content)"></div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { COLORS, ROLE } from "@/utils/types";

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },

  data() {
    return { ROLE, COLORS };
  },

  methods: {
    interpretCode(markdown) {
      // Match code blocks wrapped in triple backticks (```)
      const codeBlockRegex = /```(?:\w+)?([\s\S]+?)```/g;
      markdown = markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      markdown = markdown.replace(codeBlockRegex, "<pre>$1</pre>");

      // Match inline code wrapped in backticks (`)
      const inlineCodeRegex = /`([^`]+)`/g;
      markdown = markdown.replace(inlineCodeRegex, "<code>$1</code>");

      return markdown;
    },

    getIcon(role) {
      return this.isUser(role) ? "mdi-account" : "mdi-robot";
    },

    getIconColor(role) {
      return this.isUser(role) ? COLORS.COMPLETION_USER : COLORS.COMPLETION;
    },

    isUser(role) {
      return role === ROLE.USER;
    },
  },
};
</script>
