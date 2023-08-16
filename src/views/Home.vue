<template>
  <div class="home">
    <name-description />
    <div class="card-container justify-center">
      <icon-card
        :icon="icons.chat"
        label="Chat"
        :description="descriptions.chat"
        :routeName="ROUTE_NAMES.CHAT"
      />
      <icon-card
        :icon="icons.completion"
        label="Completion"
        :description="descriptions.completion"
        :routeName="ROUTE_NAMES.COMPLETION"
      />
      <icon-card
        :icon="icons.image"
        label="Generate image"
        :description="descriptions.image"
        :routeName="ROUTE_NAMES.IMAGE"
      />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import IconCard from "@/components/IconCard.vue";
import NameDescription from "@/components/NameDescription.vue";
import { ROUTE_NAMES } from "@/utils/types";

export default {
  components: {
    NameDescription,
    IconCard,
  },

  data() {
    const icons = {
      chat: "mdi-chat-question",
      completion: "mdi-creation",
      image: "mdi-image",
    };

    const descriptions = {
      chat: "is a conversational AI that generates human-like text responses for chatbots and virtual assistants.",
      completion:
        "is an AI model designed for interactive text generation. It excels in content creation, conversations, and chatbots.",
      image:
        "is an AI model specialized in generating images from user prompts. It's applicable for art and visual content creation.",
    };

    return { icons, descriptions, ROUTE_NAMES };
  },
};
</script>
