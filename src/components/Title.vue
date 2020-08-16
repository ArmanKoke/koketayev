<template>
    <title v-text="timer"></title> <!--not working change to some hidden-->
</template>

<script>
    export default {
        name: "Title",
        data() {
            return {
                timer: 300, //5 min
                owner: "Arman Koketayev",
                still: "What are you doing so long?"
            }
        },
        watch: {
            timer: {
                handler(value) {
                    //todo not work
                    if (value >= 0) {
                        document.title = this.owner;
                        setTimeout(() => {
                            this.timer--;
                        }, 1000);
                    } else {
                        this.owner = this.still;
                        document.title = this.owner
                        //maybe add some more interactions
                    }

                },
                immediate: true
            }
        }
    }
</script>