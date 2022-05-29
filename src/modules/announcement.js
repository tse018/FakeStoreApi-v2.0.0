export default {
   state() {
      return {
         announcement: {
            message: `OUT NOW! FAKE STORE API”`
         },
      };
   },

   getters: {
      getAnnouncement(state) {
         return state.announcement.message;
      }
   },
};