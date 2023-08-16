<template>
  <v-navigation-drawer expand-on-hover rail permanent class="drawer" @update:rail="onRailUpdated">
    <v-list>
      <v-list-item :prepend-avatar="picture"></v-list-item>
      <v-list-item v-if="isRailed" :title="name" :subtitle="email"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item :to="{ name: ROUTE_NAMES.HOME }" prepend-icon="mdi-home" title="Home" :color="COLORS.HOME">
      </v-list-item>

      <v-list-item :to="{ name: ROUTE_NAMES.CHAT }" prepend-icon="mdi-chat-question" title="Chat" :color="COLORS.CHAT">
      </v-list-item>

      <v-list-item :to="{ name: ROUTE_NAMES.COMPLETION }" prepend-icon="mdi-creation" title="Completion"
        :color="COLORS.COMPLETION">
      </v-list-item>

      <v-list-item :to="{ name: ROUTE_NAMES.IMAGE }" prepend-icon="mdi-image" title="Generate image"
        :color="COLORS.IMAGE">
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-logout" title="Sign out" class="btn-signout" @click="handleSignOut">
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>

  <confirm-dialog :show="isSignedOut" @handleSignOut="handleSignOut" @signOut="signOut" />
</template>

<script>
import { useAppStore } from '@/store/app';
import { COLORS, ROUTE_NAMES } from '@/utils/types';
import ConfirmDialog from '@/components/ConfirmDialog.vue';

export default {
  components: {
    ConfirmDialog
  },

  data() {
    const appStore = useAppStore()
    const name = appStore.user.given_name + ' ' + appStore.user.family_name
    const email = appStore.user.email
    const picture = appStore.user.picture

    return {
      text: ['Create completion', 'Create edit'],
      COLORS,
      appStore,
      name,
      email,
      picture,
      isRailed: false,
      isSignedOut: false,
      ROUTE_NAMES,
    }
  },

  methods: {
    signOut() {
      this.appStore.signOut();
      this.$router.push({ name: 'Auth' })
    },

    handleSignOut() {
      this.isSignedOut = !this.isSignedOut
    },

    onRailUpdated() {
      this.isRailed = !this.isRailed
    }
  }
}
</script>
