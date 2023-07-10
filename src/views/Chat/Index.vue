<template>
  <notification ref="notificationRef" />
  <v-row class="mb-16">
    <v-col cols="3">
    </v-col>
    <v-col cols="6" class="msg-col mb-8">
      <message v-for="item in qa" :key="item.id" :content="item.content" :type="item.type" />
    </v-col>
    <v-col cols="3">
    </v-col>
  </v-row>
  <input-footer @submit="submit" ref="footerRef" />
</template>

<script>
import { nanoid } from "nanoid"
import { chatCompletionRequest } from "@/api/chatCompletionRequest"
import { CONTENT_TYPE } from "@/utils/types"
import InputFooter from "./components/InputFooter"
import Message from "./components/Message"
import NotificationMixin from '@/mixin/NotificationMixin';

export default {
  mixins: [NotificationMixin],

  components: {
    InputFooter,
    Message,
  },

  data() {
    return {
      qa: [],
      CONTENT_TYPE,
      prompt: "",
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
      this.$refs.footerRef.setLoadingAndDisable()

      this.prompt = prompt
      chatCompletionRequest(prompt).then((res) => {
        if (res.status === 200)
          this.response = res.data.choices[0].message.content
        else {
          this.showNotification('Server is currently overloaded with other requests. Please try again!');
        }
        // this.slowWriting()
        // console.log("result:", res);
      }).finally(() => {
        this.$refs.footerRef.setLoadingAndDisable()
      });
    },
  },

  watch: {
    prompt(newPrompt) {
      this.qa.push({ id: nanoid(), type: CONTENT_TYPE.QUESTION, content: newPrompt })
    },

    response(newResponse) {
      this.qa.push({ id: nanoid(), type: CONTENT_TYPE.ANSWER, content: newResponse })
    },
  },
};
</script>

<style type="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 0px 50px 0px;
}
</style>
