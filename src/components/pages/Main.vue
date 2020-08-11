<template>
    <div id="main">
<!--        <cards></cards>-->
    </div>
</template>

<script>
    // import Cards from './Cards.vue'

    export default {
        name: 'Main',
        components: {
            // Cards
        },
        props: {},
        data () {
            return {
                email: 'helpkoketayev@gmail.com',

                staff: '',
                list: [],
                list_btn: 'Add to reactivity!',
            }
        },
        methods: {
            addToList() {
                this.list.push(this.staff)
            }
        }
    }
</script>

<style scoped>
    #main {

    }
</style>
