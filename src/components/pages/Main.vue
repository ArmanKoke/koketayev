<template>
    <div id="main">

    </div>
</template>


<script>
    // import paper from "paper"

    export default {
        name: "Main",
        data() {
            return {
                //
            }
        },
    }
</script>

<style scoped>
    #main {
        left: 0;
        position: fixed;
        min-height: 100%;
        width: 100%;
        filter: grayscale(100%) contrast(100%);
        background-image: url("../../assets/almaty.jpg");
        background-repeat: no-repeat;
        background-color: cornflowerblue;
        background-size: cover;
        background-position: bottom;
        transition: all 0.5s ease-out 0.1s;
    }
    #main:hover {
        transition: all 0.3s ease-out 0.2s;
        filter: none;
    }

    @media screen and (max-width: 800px) {
        #main {
            width: 100%;
            height: 500px;
            float: none;
            position: static;
        }
    }
</style>
