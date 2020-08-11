<template>
    <div id="about">
        <h2>Biography</h2>
        <p>
            I was born in <a target="_blank" :href="cityWebsite">Shymkent, Kazakhstan</a>. Studied in
            <a target="_blank" :href="schoolWebsite">gymnasium #8</a>. Then entered
            <a target="_blank" :href="universityWebsite">Suleyman Demirel University</a> to Faculty of Engineering & Natural Sciences.
        </p>
        <h2>Professional Career</h2>
        <p>
            I am Software Developer more than {{yearsOfExperience}} years. Worked in international retail and fintech companies. Worked with the following stack of technologies:
        </p>
        <div id="langs">
            <ul>
                <li><a :href="phpUrl"  id="php" target="_blank"><icon-base width="50" height="50" viewbox="0 -1 100 50" icon-name="PHP"><Php class="lang_icons" id="php-icon"/></icon-base></a></li>
                <li><a :href="golangUrl" id="golang" target="_blank"><icon-base width="50" height="50" viewbox="0 0 254.5 225" icon-name="Golang"><Golang class="lang_icons" id="golang-icon"/></icon-base></a></li>
                <li><a :href="jsUrl" id="js" target="_blank"><icon-base width="50" height="50" viewBox="0 0 256 256" icon-name="Js"><Js class="lang_icons" id="js-icon"/></icon-base></a></li>
                <li><a :href="sqlUrl" id="sql" target="_blank"><icon-base width="50" height="50" viewBox="0 0 256 252" icon-name="SQL"><Sql class="lang_icons" id="sql-icon"/></icon-base></a></li>
                <li><a :href="redisUrl" id="redis" target="_blank"><icon-base width="50" height="50" viewbox="0 0 256 220" icon-name="Redis"><Redis class="lang_icons" id="redis-icon"/></icon-base></a></li>
                <li><a :href="dockerUrl" id="docker" target="_blank"><icon-base width="50" height="50" viewbox="0 0 32 32" icon-name="Docker"><Docker class="lang_icons" id="docker-icon"/></icon-base></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import IconBase from "../IconBase";
    import Php from '../icons/Php.vue'
    import Golang from '../icons/Golang.vue'
    import Js from '../icons/Javascript.vue'
    import Sql from '../icons/Sql.vue'
    import Redis from '../icons/Redis.vue'
    import Docker from '../icons/Docker.vue'

    export default {
        name: "About",
        components: {
            IconBase,
            Php,
            Golang,
            Js,
            Sql,
            Redis,
            Docker,
        },
        data () {
            return {
                yearsOfExperience: new Date().getFullYear() - 2018,
                cityWebsite: "https://en.wikipedia.org/wiki/Shymkent",
                schoolWebsite: "http://www.gymnasia8.kz/",
                universityWebsite: "https://sdu.edu.kz/",

                phpUrl: "",
                golangUrl: "",
                jsUrl: "",
                sqlUrl: "",
                redisUrl: "",
                dockerUrl: "",
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    #about {
        text-align: left;
        margin: 0 40px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 20px;
        color: #2c3e50;
    }

    #about a {
        text-decoration: none;
        color: #0072b1;
    }

    #about ul {
        margin: 0;
        padding: 0;
    }

    #about li {
        display: inline-block;
        margin: 0 5px;
        padding: 0 10px;
        transition: all 0.3s ease 0s;
    }
    #about li:hover {

    }

    #golang-icon {
        fill: #29BEB0;
    }

    #php-icon {
        fill: #0072b1;
    }

    .lang_icons {
        fill: #1a1a1a;
    }
</style>