<template>
    <title v-text="title"></title>
</template>

<script>
    export default {
        name: 'Title',
        props: ['title'],
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'Arman'; //todo temporary
                }
            }
        },
    }
</script>