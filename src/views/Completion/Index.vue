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
  <input-footer :color="COLORS.COMPLETION" @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid";
import { chatCompletionRequest } from "@/api/chatCompletionRequest";
import { scrollToBottom } from "@/utils/scroll";
import { ROLE, COLORS } from "@/utils/types";
import { ERRORS } from "@/utils/errors";
import GoToBottomBtn from "@/components/GoToBottomBtn.vue";
import InputFooter from "@/components/InputFooter";
import Message from "./components/Message";
import NotificationMixin from "@/mixin/NotificationMixin";

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

      const msg = this.getPureMsg()

      chatCompletionRequest(prompt, msg)
        .then((res) => {
          if (res.status === 200 && res.data.choices[0].message.content) {
            this.response = res.data.choices[0].message.content;
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
    },

    getPureMsg() {
      const newArray = this.qa.map((obj) => {
        // Create a new object with all properties except 'id'
        const { id, ...rest } = obj;
        return rest;
      });

      return newArray;
    }
  },

  watch: {
    response(newResponse) {
      this.stackPrompt(newResponse, ROLE.ASSISTANT)
    },
  },
};
</script>
