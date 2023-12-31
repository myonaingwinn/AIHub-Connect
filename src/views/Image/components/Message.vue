<template>
  <v-sheet
    border
    elevation="1"
    :class="['message-card rounded-lg', !isUser(role) ? 'mb-10' : 'mb-2']"
  >
    <v-row>
      <v-col cols="1">
        <v-avatar
          v-if="!isUser(role)"
          :icon="getIcon(role)"
          :color="getIconColor(role)"
          class="msg-card-icons mb-3"
        >
        </v-avatar>
        <v-avatar v-else class="msg-card-icons">
          <v-img :src="picUrl" alt="User Photo" />
        </v-avatar>
      </v-col>
      <v-col cols="11">
        <div
          v-if="isUser(role)"
          class="card-content pt-2 pr-6 pb-5"
          v-html="interpretCode(content)"
        ></div>
        <dynamic-image v-else :imageUrl="content" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { ROLE, COLORS } from "@/utils/types";
import DynamicImage from "./Image.vue";
import { useAppStore } from "@/store/app";

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

  components: {
    DynamicImage,
  },

  data() {
    return { ROLE, COLORS, picUrl: useAppStore().user.picture };
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

    // TODO: refactor the functions
    getIcon(role) {
      return this.isUser(role) ? "mdi-account" : "mdi-robot";
    },

    getIconColor(role) {
      return this.isUser(role) ? COLORS.IMAGE_USER : COLORS.IMAGE;
    },

    isUser(role) {
      return role === ROLE.USER;
    },
  },
};
</script>
