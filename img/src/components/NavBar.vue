<template>
    <div>
        <nav>
            <router-link :to="{name: 'home'}">Home</router-link> |
            <router-link :to="{name: 'event-list'}">List</router-link> |
            <router-link :to="{name: 'event-create'}">Create Event</router-link> 
        </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>