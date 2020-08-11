<template>
    <div id="header">
        <div id="container">
            <h1><router-link to="/" v-text="owner"></router-link></h1>
        </div>

        <div id="nav">
            <ul>
                <li><router-link to="/algo">Algo</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/#">Gallery</router-link></li>
                <li><router-link to="/#">Contact</router-link></li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                owner: 'Arman Koketayev'
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    * {
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
        border-bottom-color: cornflowerblue;
    }

    #header {
        position: relative;
        width: 100%;
        height: 100px;
        left: 0;
        right: 0;
        top: 0;
    }

    #container {
        float: left;
        width: 30%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        padding: 15px 1%;
    }

    #container a {
        color: #1a1a1a;
        font-family: 'Cinzel Decorative', cursive;
        text-decoration: none;
        transition: all 0.3s ease 0s;
    }

    #container a:hover {
        color: cornflowerblue;
    }

    #nav {
        float: right;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 10%;
    }

    #nav a, li{
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-weight: 500;
        font-size: 20px;
        color: cornflowerblue;
    }

    #nav li {
        display: inline-block;
        padding: 0 20px;
    }

    #nav li a {
        transition: all 0.3s ease 0s;
    }

    #nav a:hover {
        /*background-color: cornflowerblue;*/
        color: #1a1a1a;
    }

    #nav a.router-link-exact-active {
        color: #1a1a1a;
    }

    @media screen and (max-width: 900px) {
        #header {
            height: 100%;
        }
        #container {
            float: none;
            display: block;
            width: 100%;
            align-items: center;
            text-align: center;
        }
        #nav {
            float: none;
            display: inline-block;
            width: 100%;
            text-align: center;
            align-items: center;
        }
    }
</style>