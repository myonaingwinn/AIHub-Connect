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
        <img
          :src="type === CONTENT_TYPE.QUESTION ? userAvatar : aiAvatar"
          height="45"
          width="65"
          alt="avatar"
          class="pb-1"
        />
      </v-col>
      <v-col cols="11">
        <div
          class="v-card-text card-content pr-5 pb-5"
          v-html="interpretCode(content)"
        ></div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { getChatCompletionAvatars } from "@/utils/env";
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
    const { user, ai } = getChatCompletionAvatars();
    const userAvatar = user || "src/assets/user.svg";
    const aiAvatar = ai || "src/assets/ai.svg";

    return { CONTENT_TYPE, userAvatar, aiAvatar };
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
  },
};
</script>
