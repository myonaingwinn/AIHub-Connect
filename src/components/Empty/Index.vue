<template>
  <div class="empty d-flex flex-column" align="center">
    <name-description description />
    <div class="d-flex justify-space-between">
      <icon-col
        :icon="icons.example"
        :label="labels.example"
        :data="examples"
        :iconColor="COLORS.CHAT"
        :submit="submit"
      />
      <icon-col
        :icon="icons.capability"
        :label="labels.capability"
        :data="capabilities"
      />
      <icon-col
        :icon="icons.limitation"
        :label="labels.limitation"
        :data="limitations"
      />
    </div>
  </div>
</template>

<script>
import NameDescription from "@/components/NameDescription.vue";
import IconCol from "./components/IconCol.vue";
import { getLimitation } from "@/utils/data";
import { getChatPrompt, getChatCapabilities } from "@/utils/data/chat";
import {
  getCompletionPrompt,
  getCompletionCapabilities,
} from "@/utils/data/completion";
import { getImagePrompt, getImageCapabilities } from "@/utils/data/image";
import { COLORS, SESSION_KEYS } from "@/utils/types";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    submit: {
      type: Function,
    },
  },

  components: {
    NameDescription,
    IconCol,
  },

  data() {
    const icons = {
      example: "mdi-white-balance-sunny",
      capability: "mdi-lightning-bolt-outline",
      limitation: "mdi-alert-outline",
    };

    const labels = {
      example: "Examples",
      capability: "Capabilities",
      limitation: "Limitations",
    };

    const examples =
      this.type === SESSION_KEYS.CHAT
        ? getChatPrompt()
        : this.type === SESSION_KEYS.COMPLETION
        ? getCompletionPrompt()
        : getImagePrompt();

    const capabilities =
      this.type === SESSION_KEYS.CHAT
        ? getChatCapabilities()
        : this.type === SESSION_KEYS.COMPLETION
        ? getCompletionCapabilities()
        : getImageCapabilities();

    const limitations = getLimitation();

    return { icons, labels, examples, capabilities, limitations, COLORS };
  },
};
</script>
