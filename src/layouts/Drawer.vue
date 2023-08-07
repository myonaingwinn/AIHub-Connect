<template>
  <v-navigation-drawer expand-on-hover rail permanent class="">
    <v-list>
      <v-list-item :to="{ name: 'Home' }">
        <div class="text-h6">AIHub Connect</div>
        <!-- TODO: change font -->
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav :color="COLORS.CHAT">
      <v-list-item :to="{ name: 'Chat' }" prepend-icon="mdi-chat-question" title="Chat"></v-list-item>

      <v-list-item :to="{ name: 'Completion' }" prepend-icon="mdi-creation" title="Completion"
        :color="COLORS.COMPLETION"></v-list-item>

      <v-list-item :to="{ name: 'Image' }" prepend-icon="mdi-image" title="Generate image"
        :color="COLORS.IMAGE"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { COLORS } from '@/utils/types';

export default {
  data: () => ({
    text: ['Create completion', 'Create edit'],
    COLORS
  }),
}
</script>
