<template>
  <router-link :to="{ name: 'event-show', params: { id: event.id } }" >
    <div>
        <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
    export default {
        props: {
            event: Object   // important **object vs 0bject **
        }
    }
</script>

<style scoped>
h4 {
    color:green;
}


</style>