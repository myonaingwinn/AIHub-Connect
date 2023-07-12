<template>
  <notification ref="notificationRef" />
  <v-row class="mb-16 chat-index">
    <v-col cols="3"> </v-col>
    <v-col cols="6" class="msg-col mb-8">
      <message
        v-for="item in qa"
        :key="item.id"
        :content="item.content"
        :type="item.type"
      />
    </v-col>
    <v-col cols="3">
      <go-to-bottom-btn />
    </v-col>
  </v-row>
  <input-footer @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid";
import { chatCompletionRequest } from "@/api/chatCompletionRequest";
import { scrollToBottom } from "@/utils/scroll";
import { CONTENT_TYPE } from "@/utils/types";
import { ERRORS } from "@/utils/errors";
import GoToBottomBtn from "@/components/GoToBottomBtn.vue";
import InputFooter from "./components/InputFooter";
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
      CONTENT_TYPE,
      // slowText: "",
      response: "",
    };
  },

  methods: {
    /*  async slowWriting() {
       this.slowText = "";
       let index = 0;
       const delay = 75; // Adjust the delay in milliseconds according to Str().length

       const timer = setInterval(() => {
         if (index >= this.response.length) {
           clearInterval(timer);
         } else {
           this.slowText += this.response[index];
           index++;
         }
       }, delay);
     }, */

    async submit(prompt) {
      this.$refs.footerRef.setLoadingAndDisable();

      this.qa.push({
        id: nanoid(),
        type: CONTENT_TYPE.QUESTION,
        content: prompt,
      });

      chatCompletionRequest(prompt)
        .then((res) => {
          if (res.status === 200)
            this.response = res.data.choices[0].message.content;

          // this.slowWriting()
          // console.log("result:", res);
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
  },

  watch: {
    response(newResponse) {
      this.qa.push({
        id: nanoid(),
        type: CONTENT_TYPE.ANSWER,
        content: newResponse,
      });
    },
  },
};
</script>
