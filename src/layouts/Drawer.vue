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
      <v-list-item :to="{ name: 'Chat' }" prepend-icon="mdi-chat-question" title="Chat" value="chat"></v-list-item>

      <v-list-group value="Text" :color="COLORS.TEXT">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-format-textbox" title="Text" :color="COLORS.TEXT"></v-list-item>
        </template>
        <v-list-item v-for="(title, i) in text" :key="i" :title="title" :value="title" :color="COLORS.TEXT"></v-list-item>
      </v-list-group>

      <v-list-group value="Image" :color="COLORS.IMAGE">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image" title="Image"></v-list-item>
        </template>
        <v-list-item :to="{ name: 'Image' }" title="Create image" value="Create image" :color="COLORS.IMAGE">
        </v-list-item>
      </v-list-group>
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
