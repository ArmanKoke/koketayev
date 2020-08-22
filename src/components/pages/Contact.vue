<template>
    <div id="contact">
        <form class="vue-form" @submit.prevent="submit">
            <div class="error-message">
                <p v-show="!email.valid">Oh, please enter a valid email address.</p>
            </div>

            <div>
                <label class="label" for="name">Name</label>
                <input type="text" :placeholder="name.placeholder" name="name" id="name" required="" v-model="name.value" :maxlength="name.maxlength">
            </div>
            <div>
                <label class="label" for="email">Email</label>
                <input type="email" name="email" id="email" required="" :placeholder="email.placeholder"
                       :class="{ email , error: !email.valid }" :maxlength="email.maxlength"
                       v-model="email.value">
            </div>
            <div>
                <label class="label" for="title">Title</label>
                <input type="text" name="title" id="title" required=""
                       :maxlength="title.maxlength" :placeholder="title.placeholder"
                       v-model="title.value">
            </div>
            <div>
                <label class="label" for="textarea">Message</label>
                <textarea class="message" name="textarea" id="textarea" required=""
                          v-model="message.text" :placeholder="message.placeholder"
                          :maxlength="message.maxlength"></textarea>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
            <div>
                <input type="submit" value="Send">
            </div>
        </form>
    </div>
</template>

<script>
    // eslint-disable-next-line no-useless-escape
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    export default {
        data() {
            return {
                name: {
                    value: "",
                    placeholder: "John Doe",
                    maxlength: 100
                },
                email: {
                    value: "",
                    placeholder: "john@doe.com",
                    valid: true,
                    maxlength: 100
                },
                title: {
                    value: "",
                    placeholder: "Topic of message",
                    maxlength: 100
                },
                message: {
                    text: ``,
                    placeholder: `Dear Arman,\n...`,
                    maxlength: 255
                },
                submitted: false

            }
        },
        methods: {
            // submit form handler
            submit() {
                this.submitted = true;
            },
            // validate by type and value
            validate(type, value) {
                if (type === "email") {
                    this.email.valid = !!this.isEmail(value);
                }
            },
            // check for valid email address
            isEmail(value) {
                return emailRegExp.test(value);
            },
        },
        watch: {
            // watching nested property
            "email.value": function(value) {
                this.validate("email", value);
            }
        },
    }
</script>

<style scoped>
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    .vue-form {
        font-size: 16px;
        min-height: 650px;
        width: 50%;
        padding: 15px 30px;
        margin: 20px auto;
    }
    .vue-form div {
        position: relative;
        margin: 20px 0;
    }
    .vue-form h4,
    .vue-form label {
        color: cornflowerblue;
        margin-bottom: 5px; /* not works */
    }
    /* text color inside input, text */
    .vue-form input,
    .vue-form textarea {
        color: #2b3e51;
    }
    .vue-form input[type="text"],
    .vue-form input[type="email"],
    .vue-form textarea {
        display: block;
        width: 100%;
        appearance: none;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
    }
    .vue-form input[type="text"],
    .vue-form input[type="email"],
    .vue-form textarea {
        padding: 12px;
        border: 1px solid #cfd9db;
        background-color: #ffffff;
        border-radius: 0.25em;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }
    .vue-form input[type="text"]:focus,
    .vue-form input[type="email"]:focus,
    .vue-form textarea:focus {
        outline: none;
        border-color: #cfd9db;
        box-shadow: 0 0 5px #cfd9db;
    }
    .vue-form textarea {
        min-height: 120px;
        resize: vertical;
        overflow: auto;
    }
    .vue-form input[type="submit"] {
        border: none;
        background: cornflowerblue;
        border-radius: 0.25em;
        padding: 12px 20px;
        color: #ffffff;
        font-weight: bold;
        float: right;
        cursor: pointer;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
    }
    .no-touch .vue-form input[type="submit"]:hover {
        background: #42a2e1;
    }
    .vue-form input[type="submit"]:focus {
        outline: none;
        background: cornflowerblue;
    }
    .vue-form input[type="submit"]:active {
        transform: scale(0.9);
    }
    .vue-form .error-message {
        height: 35px;
        margin: 0;
    }
    .vue-form .error-message p {
        color: #e94b35;
        font-size: 1.4rem;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border-radius: 0.25em;
        padding: 16px;
    }
    /* for input field highlight */
    .vue-form .error {
        border-color: #e94b35 !important;
    }
    .vue-form .error:focus {
        box-shadow: 0 0 5px #e94b35 !important;
    }
    .vue-form .counter {
        background-color: #ecf0f1;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 10px;
        padding: 4px;
    }

    @-webkit-keyframes cd-bounce {
        0%,
        100% {
            -webkit-transform: scale(1);
        }
        50% {
            -webkit-transform: scale(0.8);
        }
    }
    @-moz-keyframes cd-bounce {
        0%,
        100% {
            -moz-transform: scale(1);
        }
        50% {
            -moz-transform: scale(0.8);
        }
    }
    @keyframes cd-bounce {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.8);
        }
    }

    @media screen and (max-width: 900px) {
        .vue-form {
            min-height: 500px;
            width: auto;
        }
    }
</style>