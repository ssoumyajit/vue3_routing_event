<template>
    <div>
        <h1> {{ event.title }}</h1>
        <NavBarShow/>
        <h4>contact</h4>

    </div>
</template>

<script>
import NavBarShow from '@/components/NavBarShow.vue'
import EventService from '@/services/EventService.js'
export default {
    components: {
        NavBarShow
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

<style lang="scss" scoped>

</style>