<template>
    <div id="footer">
        <div class="container">
            <div id="copyright">
                <h1>
                    <span>© Designed and maintained by Arman Koketayev {{ currentYear }}</span>
                </h1>
            </div>
            <div id="social">
                <ul>
                    <li><a :href="githubUrl"  id="github" class="social" target="_blank"><icon-base width="30" height="30" icon-name="GitHub"><Github id="github-icon"/></icon-base></a></li>
                    <li><a :href="linkedinUrl" id="linkedin" class="social" target="_blank"><icon-base width="30" height="30" icon-name="Linkedin"><Linkedin id="linkedin-icon"/></icon-base></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Github from './icons/Github.vue'
    import Linkedin from './icons/Linkedin.vue'
    import IconBase from "./IconBase";

    export default {
        name: 'Footer',
        components: {
            IconBase,
            Github,
            Linkedin
        },
        data () {
            return {
                owner: 'Arman ',
                githubUrl: 'https://github.com/ArmanKoke',
                linkedinUrl: 'https://www.linkedin.com/in/arman-koketayev/',
                currentYear: (new Date().getFullYear() === 2020) ? new Date().getFullYear() : "2020 - " + new Date().getFullYear(),
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Crushed&display=swap');

    * {
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
    }

    #footer {
        position: fixed;
        float: bottom;
        height: 100px;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #1a1a1a;
        border-top-color: rgba(0,0,0,0.1);
    }

    #copyright {
        text-align: left;
        float: left;
        width: 30%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 1%;
    }
    #copyright span {
        color: whitesmoke;
        font-size: 0.5em;
        font-family: 'Crushed', cursive;
        letter-spacing: 0.1em;
    }

    #social {
        text-align: right;
        display: inline-block;
        width: 70%;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 1%;
    }

    #social li {
        display: inline-block;
        margin: 0 5px;
        padding: 10px;
    }

    #github-icon, #linkedin-icon {
        fill: whitesmoke;
        padding: 0 10px;
    }

    #social li:hover {
        -moz-border-radius: 10%;
        -webkit-border-radius: 10%;
        border-radius: 10%;
        -moz-box-shadow: 0 0 5px #888;
        -webkit-box-shadow: 0 0 5px #888;
        box-shadow: 0 0 5px #888;
        transition: all 0.3s ease 0s;
        background-color: whitesmoke;
    }

    #social li:hover #github-icon {
        transition: all 0.2s ease 0s;
        fill: #1a1a1a;
    }

    #social li:hover #linkedin-icon {
        transition: all 0.2s ease 0s;
        fill: #0072b1;
    }

    @media screen and (max-width: 800px) {
        #footer {
            position: static;
            float: none;
            bottom: 0;
            height: 100%;
        }
        #copyright {
            float: none;
            align-items: center;
            text-align: center;
            padding: 20px 0 0 0;
            height: 50%;
            width: 100%;
        }
        #social {
            float: none;
            align-items: center;
            text-align: center;
            height: 50%;
            width: 100%;
        }
    }
</style>