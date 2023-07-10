<template>
  <v-navigation-drawer expand-on-hover rail permanent class="">
    <v-list>
      <v-list-item :to="{ name: 'Home' }" >
        <div class="text-h6">AIHub Connect</div>
        <!-- TODO: change font -->
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav color="primary">
      <v-list-item :to="{ name: 'Chat' }" prepend-icon="mdi-chat-question" title="Chat" value="chat"></v-list-item>
      <v-list-group value="Text">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-format-textbox" title="Text"></v-list-item>
        </template>

        <v-list-item v-for="(title, i) in text" :key="i" :title="title" :value="title" color="primary"></v-list-item>
      </v-list-group>
      <v-list-group value="Image">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image" title="Image"></v-list-item>
        </template>

        <v-list-item v-for="(title, i) in image" :key="i" :title="title" :value="title" color="primary"></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    text: ['Create completion', 'Create Edit'],
    image: ['Create image', 'Image variation', 'Embeddings (Ananlyzed Result Graph)'],
  }),
}
</script>
