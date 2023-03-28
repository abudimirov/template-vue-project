<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'v-main-wrapper',
        components: {},
        props: {},
        data() {
            return {
                title: 'Main wrapper'
            }
        },
        computed: {
        },
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style>
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>