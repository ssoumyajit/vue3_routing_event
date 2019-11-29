<template>
  <div>
    <h1> {{ event.title }}</h1>
    <NavBarShow/>
    <router-view/>
    <EventAbout/>
    <!-- <router-view/>  here we dont need these, without them it works.-->
    <!-- <EventAbout/> -->
    <EventRules/>
    <EventJudges/>
    <EventContact/>
  </div>

</template>
<script>
import NavBarShow from '@/components/NavBarShow.vue'
import EventService from '@/services/EventService.js'
import EventAbout from '@/views/EventAbout.vue'
import EventRules from '@/views/EventRules.vue'
import EventJudges from '@/views/EventJudges.vue'
import EventContact from '@/views/EventContact.vue'


export default {
    components: {
        NavBarShow,
        //EventAbout,
        //EventRules,
        //EventJudges,
        //EventContact
    },

    props: ['id'],
    data() {
        return {
            event: {}   //empty object
        }
    },
    created() {
        EventService.getEvent(this.id)
          .then(response => {
              this.event = response.data
          })
          .catch(error => {
              console.log('there is some error:', error.response)
          })
    }
}
</script>