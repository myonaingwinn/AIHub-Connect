<template>
  <notification ref="notificationRef" />
  <v-row class="mb-16 image-index">
    <v-col cols="1" sm="2" md="2" lg="2" xl="2" xxl="2"> </v-col>
    <v-col cols="10" sm="8" md="8" lg="8" xl="8" xxl="8" class="msg-col mb-8">
      <message
        v-if="qa.length > 0"
        v-for="item in qa"
        :key="item.id"
        :content="item.content"
        :role="item.role"
      />
      <empty v-else :type="SESSION_KEYS.IMAGE" :submit="submit" />
    </v-col>
    <v-col cols="1" sm="2" md="2" lg="2" xl="2" xxl="2">
      <go-to-bottom-btn />
    </v-col>
  </v-row>
  <input-footer :color="COLORS.IMAGE" @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid";
import { createImageRequest } from "@/api/createImageRequest";
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

      const valid = await isValidToRequest(MAX_COUNT_TYPES.IMAGE);

      if (!valid) {
        this.showNotification(ERRORS.OVER_USAGE_LIMIT);
        return;
      }

      await createImageRequest(prompt)
        .then((res) => {
          if (res.status === 200 && res.data.data[0].url) {
            this.response = res.data.data[0].url;

            updateUser(getUserEmail(), MAX_COUNT_TYPES.IMAGE);
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

      saveToSession(SESSION_KEYS.IMAGE, this.qa);
    },
  },

  watch: {
    response(newResponse) {
      this.stackPrompt(newResponse, ROLE.ASSISTANT);
    },
  },

  created() {
    const data = getFromSession(SESSION_KEYS.IMAGE);
    this.qa = data ?? this.qa;
  },
};
</script>
