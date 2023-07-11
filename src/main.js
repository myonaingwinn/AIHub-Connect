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

const app = createApp(App)

registerPlugins(app)

app.mixin(NotificationMixin)

app.mount('#app')
