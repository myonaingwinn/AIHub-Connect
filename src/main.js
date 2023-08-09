/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Mixin
import NotificationMixin from '@/mixin/NotificationMixin'

// Google Signin
import vue3GoogleLogin from "vue3-google-login";
import { getGoogleClientId } from './utils/env';

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: getGoogleClientId(),
});

registerPlugins(app)

app.mixin(NotificationMixin)

app.mount('#app')
