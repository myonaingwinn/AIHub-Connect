<template>
  <notification ref="notificationRef" />
  <v-row class="mb-16 completion-index">
    <v-col cols="1" sm="2" md="2" lg="2" xl="2" xxl="2"> </v-col>
    <v-col cols="10" sm="8" md="8" lg="8" xl="8" xxl="8" class="msg-col mb-8">
      <message
        v-if="qa.length > 0"
        v-for="item in qa"
        :key="item.id"
        :content="item.content"
        :role="item.role"
      />
      <empty v-else :type="SESSION_KEYS.COMPLETION" :submit="submit" />
    </v-col>
    <v-col cols="1" sm="2" md="2" lg="2" xl="2" xxl="2">
      <go-to-bottom-btn />
    </v-col>
  </v-row>
  <input-footer :color="COLORS.COMPLETION" @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid";
import { chatCompletionRequest } from "@/api/chatCompletionRequest";
import { scrollToBottom } from "@/utils/scroll";
import { ROLE, COLORS, SESSION_KEYS, MAX_COUNT_TYPES } from "@/utils/types";
import { ERRORS } from "@/utils/errors";
import GoToBottomBtn from "@/components/GoToBottomBtn.vue";
import InputFooter from "@/components/InputFooter";
import Message from "./components/Message";
import Empty from "@/components/Empty/Index.vue";
import NotificationMixin from "@/mixin/NotificationMixin";
import { getFromSession, saveToSession } from "@/utils/session";
import { getUserEmail, isValidToRequest, updateUser } from "@/api/firebase";

export default {
  mixins: [NotificationMixin],

  components: {
    GoToBottomBtn,
    InputFooter,
    Message,
    Empty,
  },

  data() {
    return {
      qa: [],
      ROLE,
      COLORS,
      response: "",
      SESSION_KEYS,
    };
  },

  methods: {
    async submit(prompt) {
      this.$refs.footerRef.setLoadingAndDisable();

      this.stackPrompt(prompt, ROLE.USER);

      const msg = this.getPureMsg();

      const valid = await isValidToRequest(MAX_COUNT_TYPES.COMPLETION);

      if (!valid) {
        this.showNotification(ERRORS.OVER_USAGE_LIMIT);
        return;
      }

      await chatCompletionRequest(prompt, msg)
        .then((res) => {
          if (res.status === 200 && res.data.choices[0].message.content) {
            this.response = res.data.choices[0].message.content;

            updateUser(getUserEmail(), MAX_COUNT_TYPES.COMPLETION);
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

      saveToSession(SESSION_KEYS.COMPLETION, this.qa);
    },

    getPureMsg() {
      const newArray = this.qa.map((obj) => {
        // Create a new object with all properties except 'id'
        const { id, ...rest } = obj;
        return rest;
      });

      return newArray.slice(-10);
    },
  },

  watch: {
    response(newResponse) {
      this.stackPrompt(newResponse, ROLE.ASSISTANT);
    },
  },

  created() {
    const data = getFromSession(SESSION_KEYS.COMPLETION);
    this.qa = data ?? this.qa;
  },
};
</script>
