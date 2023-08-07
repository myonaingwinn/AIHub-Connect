<template>
  <notification ref="notificationRef" />
  <v-row class="mb-16 chat-index">
    <v-col cols="3"> </v-col>
    <v-col cols="6" class="msg-col mb-8">
      <message v-for="item in qa" :key="item.id" :content="item.content" :role="item.role" />
    </v-col>
    <v-col cols="3">
      <go-to-bottom-btn />
    </v-col>
  </v-row>
  <input-footer :color="COLORS.IMAGE" @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid";
import { createImageRequest } from "@/api/createImageRequest";
import { scrollToBottom } from "@/utils/scroll";
import { ROLE, COLORS, SESSION_KEYS } from "@/utils/types";
import { ERRORS } from "@/utils/errors";
import GoToBottomBtn from "@/components/GoToBottomBtn.vue";
import InputFooter from "@/components/InputFooter";
import Message from "./components/Message";
import NotificationMixin from "@/mixin/NotificationMixin";
import { getFromSession, saveToSession } from "@/utils/session";

export default {
  mixins: [NotificationMixin],

  components: {
    GoToBottomBtn,
    InputFooter,
    Message,
  },

  data() {
    return {
      qa: [],
      ROLE,
      COLORS,
      response: "",
    };
  },

  methods: {
    async submit(prompt) {
      this.$refs.footerRef.setLoadingAndDisable();

      this.stackPrompt(prompt, ROLE.USER)

      createImageRequest(prompt)
        .then((res) => {
          if (res.status === 200 && res.data.data[0].url) {
            this.response = res.data.data[0].url;
          } else {
            this.showNotification(ERRORS.UNKNOWN_ERROR);
          }
        })
        .catch((error) => {
          if (error.response) {
            this.showNotification(ERRORS.SERVER_ERROR);
          } else if (error.request) {
            this.showNotification(ERRORS.NETWORK_ERROR);
          } else {
            this.showNotification(ERRORS.UNKNOWN_ERROR);
          }
        })
        .finally(() => {
          scrollToBottom();
          this.$refs.footerRef.setLoadingAndDisable();
        });
    },

    stackPrompt(prompt, role) {
      this.qa.push({
        id: nanoid(),
        role: role,
        content: prompt,
      });

      saveToSession(SESSION_KEYS.IMAGE, this.qa)
    },
  },

  watch: {
    response(newResponse) {
      this.stackPrompt(newResponse, ROLE.ASSISTANT)
    },
  },

  created() {
    const data = getFromSession(SESSION_KEYS.IMAGE);
    this.qa = data ?? this.qa;
  }
};
</script>
