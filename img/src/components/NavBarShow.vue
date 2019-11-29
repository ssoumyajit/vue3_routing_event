<template>
    <div>
        <nav>
            <router-link :to="{name: 'about'}">About</router-link> |
            <router-link :to="{name: 'rules'}">Rules</router-link> |
            <router-link :to="{name: 'judges'}">Judges</router-link> |
            <router-link :to="{name: 'contact'}">Contact</router-link>
        </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>