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
                    document.title = 'Arman Koketayev'; //todo temporary
                }
            }
        },
    }
</script>