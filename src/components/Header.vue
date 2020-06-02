<template>
    <div id="header">
        <div class="container">
            <h1 id="logo">
                <a href="/"><span v-text="owner"></span></a>
            </h1>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                owner: ''
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;448&display=swap'); /* todo swap */

    #header {
        position: fixed;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: #fff;
        border-bottom-color: rgba(0,0,0,0.1);
    }
    .container {
        margin: 0 15px 0;
    }
    #logo {
        text-align: center;
        position: absolute;
        left: 50%;
        top: 0;
        margin-left: -140px;
        width: 280px;
        font-family: 'Dosis', sans-serif;
        font-weight: bold;
        letter-spacing: 0.1em;
    }
    #logo a {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        color: #1a1a1a;
        font-size: 1.5em;
        padding: 0 20px;
    }
</style>