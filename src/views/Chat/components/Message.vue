<template>
  <v-sheet :color="type === CONTENT_TYPE.QUESTION ? 'transparent' : ''" border elevation="1"
    :class="[' rounded-lg', type === CONTENT_TYPE.ANSWER ? 'mb-10' : 'mb-2']">
    <v-row>
      <v-col cols="1">
        <img v-if="type === CONTENT_TYPE.QUESTION" :src="userAvatar" height="60" width="80" alt="avatar" />
        <img v-if="type === CONTENT_TYPE.ANSWER" :src="aiAvatar" height="55" width="75" alt="avatar" class="pb-1" />
      </v-col>
      <v-col cols="11">
        <div class="v-card-text card-content pr-3 pb-3" v-html="interpretCode(content)"></div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { getChatCompletionAvatars } from '@/utils/env';
import { CONTENT_TYPE } from '@/utils/types';

export default {
  props: {
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
    }
  },

  data() {
    const { user, ai } = getChatCompletionAvatars();
    const userAvatar = user || '/src/assets/avatars/user.svg'
    const aiAvatar = ai || '/src/assets/avatars/ai.svg'

    return { CONTENT_TYPE, userAvatar, aiAvatar }
  },

  methods: {
    interpretCode(markdown) {
      // Match code blocks wrapped in triple backticks (```)
      const codeBlockRegex = /```(?:\w+)?([\s\S]+?)```/g;
      markdown = markdown.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      markdown = markdown.replace(codeBlockRegex, '<pre>$1</pre>');

      // Match inline code wrapped in backticks (`)
      const inlineCodeRegex = /`([^`]+)`/g;
      markdown = markdown.replace(inlineCodeRegex, '<code>$1</code>');

      return markdown;
    }
  },
}
</script>

<style type="scss">
.card-content {
  white-space: pre-wrap;
  font-family: Questrial, 'Söhne', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Cantarell', 'Noto Sans', sans-serif, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

pre {
  padding: 16px;
  overflow: auto;
  background: #f4f4f4e0;
  border-radius: 6px;
}

code {
  padding: .2em .4em;
  border-radius: 6px;
  background: #a3aab133;
}

pre,
code {
  font-family: ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 12px;
}
</style>
