<template>
  <v-card
    class="cuz-sheet"
    :class="[routeName !== 'Image' ? 'mr-5' : '']"
    width="300"
    height="150"
    :prepend-icon="icon"
    :elevation="isHovered"
    @mouseover="isHovered = 5"
    @mouseout="isHovered = 3"
    :to="{ name: routeName }"
  >
    <template v-slot:title>
      {{ label }}
    </template>

    <v-card-text>
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script>
import { ROUTE_NAMES } from "@/utils/types";

export default {
  props: {
    icon: {
      type: String,
      default: "",
      require: true,
    },
    label: {
      type: String,
      default: "",
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    routeName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isHovered: 3,
      ROUTE_NAMES,
    };
  },
};
</script>
