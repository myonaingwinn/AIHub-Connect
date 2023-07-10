import Notification from '@/components/Notification.vue';

export default {
  components: {
    Notification,
  },
  methods: {
    showNotification(message) {
      this.$refs.notificationRef.notificationText = message;
      this.$refs.notificationRef.showMe = true;
    },
  },
};
