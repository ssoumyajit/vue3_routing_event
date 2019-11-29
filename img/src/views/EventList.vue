<template>
  <div>
    <h4>Events Listing</h4>
    <EventCard v-for = "event in events" :key = "event.id" :event="event"/>
    <!--pass each event as a prop to EventCard component-->     
    <!-- ES6, EventCard: EventCard-->
  </div>
    
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

// first we export this component to DOM !!
// now we write some code which will help us to register EventCard component
// as a child component of Event List
export default {       
  components: {
    EventCard
  },

  //let's use the api data inside our component..so we create a reactive property
  //called events
  data() {
    return {
      events: []
    }
  },
  created() {
    //axios
    //.get('http://localhost:3000/events')
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  }
}
</script>
