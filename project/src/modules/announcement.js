export default {
   state() {
      return {
         announcement: {
            message: `OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social”`
         },
      };
   },

   getters: {
      getAnnouncement(state) {
         return state.announcement.message;
      }
   },
};