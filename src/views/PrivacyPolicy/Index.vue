<template>
  <div class="privacy-policy">
    <v-row>
      <v-col cols="1" sm="3" md="3" lg="2" xl="3" xxl="3"></v-col>
      <v-col cols="10" sm="6" md="6" lg="8" xl="6" xxl="6">
        <v-sheet
          class="d-flex flex-column pa-10 ma-5"
          border
          rounded="lg"
          elevation="4"
        >
          <div class="pp-heading text-h5 font-weight-medium" align="center">
            Privacy Policy
          </div>

          <div class="text-h6 mt-5 font-weight-medium">Introduction</div>
          <li>
            Welcome to AIHub Connect! Your privacy matters to me. Read on to
            understand how I handle your information.
          </li>

          <div class="text-h6 mt-5 font-weight-medium">
            Information Collection
          </div>
          <div>
            <li>
              <u>Authentication Information:</u> When you log into the App, I
              collect login information solely for the purpose of authenticating
              your identity and providing you access to the App.
            </li>
            <li class="mt-3">
              <u>ChatGPT API Usage:</u> The App uses the ChatGPT API to provide
              chatbot functionality. I transmit user prompts as parameters to
              the ChatGPT API to generate responses. However, I do not store or
              retain these user prompts after they are sent to the API.
            </li>
          </div>

          <div class="text-h6 mt-5 font-weight-medium">Data Retention</div>
          <li>
            I retain your authentication information only for the duration of
            the contest. Once the contest is over, I will promptly delete this
            information.
          </li>

          <div class="text-h6 mt-5 font-weight-medium">
            Third-Party Services
          </div>
          <li>
            I utilize the ChatGPT API provided by a third-party service for
            chatbot functionality. While I do transmit user prompts to this API,
            I do not store or use this data for any purpose beyond generating
            responses.
          </li>

          <div class="text-h6 mt-5 font-weight-medium">Your Choices</div>
          <li>
            To use this app, you must log in by using your Google account
            through Google authentication. This means you need to have a Google
            account to access the app's features.
          </li>

          <div class="text-h6 mt-5 font-weight-medium">Security</div>
          <li>
            I take security seriously and implement measures to protect your
            information. However, no method of transmission or storage is
            completely secure, and I cannot guarantee absolute security.
          </li>

          <div class="mt-5 font-weight-medium">
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact me at
            <a class="ppl-link" :href="mailTo">[here]</a>.
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="1" sm="3" md="3" lg="2" xl="3" xxl="3"></v-col>
    </v-row>
  </div>
</template>

<script setup>
import { getContactEmail } from "@/utils/env";

const email = getContactEmail();
const mailTo = "mailto:" + email;
</script>
