<template>
    <title v-text="title"></title>
</template>

<script>
    export default {
        name: 'VueTitle',
        props: ['title'],
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = process.env.VUE_APP_TITLE;
                }
            }
        },
    }
</script>