<template>
  <v-sheet
    :color="type === CONTENT_TYPE.QUESTION ? 'transparent' : ''"
    border
    elevation="1"
    :class="[
      'message-card rounded-lg',
      type === CONTENT_TYPE.ANSWER ? 'mb-10' : 'mb-2',
    ]"
  >
    <v-row>
      <v-col cols="1">
        <v-avatar
          :icon="getIcon(type)"
          :color="getIconColor(type)"
          class="msg-card-icons mb-3"
        >
        </v-avatar>
      </v-col>
      <v-col cols="11">
        <div
          class="card-content pr-5 pb-4"
          v-html="interpretCode(content)"
        ></div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { CONTENT_TYPE } from "@/utils/types";

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  data() {
    return { CONTENT_TYPE };
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

    getIcon(type) {
      return this.isUser(type) ? "mdi-account" : "mdi-robot";
    },

    getIconColor(type) {
      return this.isUser(type) ? "teal-darken-1" : "light-blue-darken-3";
    },

    isUser(type) {
      return type === CONTENT_TYPE.QUESTION;
    },
  },
};
</script>
