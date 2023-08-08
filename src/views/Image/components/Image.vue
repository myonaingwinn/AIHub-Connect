<template>
  <v-card :class="['mr-4 mt-1 mb-4 pa-3', dynamicClass]" align="center" width="550" color="blue-grey-lighten-4"
    variant="outlined">
    <v-img :src="imageUrl" cover aspect-ratio="1" height="550" width="550" @load="handleImgLoaded"
      @error="handleImgError">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="blue-grey-lighten-2"></v-progress-circular>
        </v-row>
      </template>
      <template v-slot:error>
        <v-icon>mdi-alert-circle</v-icon>
      </template>
    </v-img>
    <v-divider></v-divider>
    <v-card-actions class="justify-end" v-if="loaded">
      <v-btn color="blue-grey-lighten-2" icon="mdi-download" @click="downloadImage" variant="outlined">
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      dynamicClass: 'pb-0',
      loaded: false,
    };
  },

  methods: {
    downloadImage() {
      // Create a new tab with the image URL
      window.open(this.imageUrl, '_blank');
    },

    handleImgError() {
      this.loaded = false;
      this.dynamicClass = 'pb-3'
    },

    handleImgLoaded() {
      this.loaded = true;
      this.dynamicClass = 'pb-0'
    }
  },
};
</script>
