<template>
  <div class="icon-col d-flex flex-column align-center justify-space-around">
    <icon-text :icon="icon" :label="label" />
    <card
      v-for="(item, i) in data"
      :content="item"
      :key="i * 2"
      :iconColor="iconColor"
      :submit="submit"
    />
  </div>
</template>

<script>
import IconText from "./atoms/IconText.vue";
import Card from "./atoms/Card.vue";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
    },
    data: {
      type: Array,
      required: true,
    },
    submit: {
      type: Function,
    },
  },

  components: {
    IconText,
    Card,
  },
};
</script>
