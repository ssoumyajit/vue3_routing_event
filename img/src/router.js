import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';
import EventList from './views/EventList.vue';
import EventShow from './views/EventShow.vue';
import EventCreate from './views/EventCreate.vue';

import EventAbout from './views/EventAbout.vue';
import EventRules from './views/EventRules.vue';
import EventJudges from './views/EventJudges.vue';
import EventContact from './views/EventContact.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/eventlist", //   img.net/, img.net/history, img.net/eventlist
      name: "event-list",
      component: EventList
    },

    //this has to be made before /event/:id is used...dynamic routing
    {
      path: "/create",
      name: "event-create",
      component: EventCreate
    },

    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    },
    {
      path: "/event/:id/about",
      name: "about",
      component: EventAbout,
      props: true
    },
    {
      path: "/event/:id/rules",
      name: "rules",
      component: EventRules,
      props: true
    },
    {
      path: "/event/:id/judges",
      name: "judges",
      component: EventJudges,
      props: true
    },
    {
      path: "/event/:id/contact",
      name: "contact",
      component: EventContact,
      props: true
    }
  ]
});
