import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name: 'Ju Ann'},
    categories: [
      'Hip Hop',
      'Locking',
      'House',
      'Breaking',
      'Popping',
      'Krump'
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      //post event to db..below line
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
  },
  //getters: {
    //getEventById: state => id => {
      //return state.events.find(event => event.id === id)
    //}
  //}
});
