// Utilities
import { getFromLocalStrg, saveToLocalStrg } from "@/utils/localStrg";
import { defineStore } from "pinia";

function updateAuthState(store, user, isAuthenticated) {
  store.user = user;
  store.isAuthenticated = isAuthenticated;
  saveToLocalStrg("user", user);
  saveToLocalStrg("isAuthenticated", isAuthenticated);
}

export const useAppStore = defineStore("app", {
  state: () => ({
    user: getFromLocalStrg("user") || null,
    isAuthenticated: getFromLocalStrg("isAuthenticated") || false,
  }),

  actions: {
    setUser(user) {
      updateAuthState(this, user, true);
    },

    signOut() {
      updateAuthState(this, null, false);
    },
  },
});
