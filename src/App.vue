<template>
  <router-view :class="currentRouteClass" />
</template>

<script>
import { COLORS } from './utils/types';

const ROUTE_CLASSES = {
  '/': COLORS.HME_BG,
  '/chat': COLORS.CHT_BG,
  '/completion': COLORS.CPL_BG,
  '/image': COLORS.IMG_BG,
};

export default {
  computed: {
    currentRouteClass() {
      // Customize the logic to determine the class based on the current route
      const currentRoute = this.$route.path;
      return ROUTE_CLASSES[currentRoute] || COLORS.DFT_BG;
    },
  },
}
</script>
