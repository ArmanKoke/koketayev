<template>
    <div id="algo">
        <Canvas :array="nums"></Canvas>

        <br>

        <i>Time elapsed: <span v-text="elapsedTime"></span> seconds</i><br>
        <i>Running: <span v-text="isRunning"></span></i><br>

        <button v-on:click="sort">Sort</button>
        <button v-on:click="randomize">Randomize</button>
    </div>
</template>

<script>
    import Canvas from '../Canvas.vue'
    import QuickSort from '../../resources/algorithms/quickSort'

    export default {
        mixins: [
            QuickSort
        ],
        components: {
            Canvas,
        },
        data () {
            return {
                //years todo later
                // nums: Array.apply(null, Array(10)).map(function() { return new Date((new Date()).getFullYear() - Math.floor(Math.random() * 100), Math.floor(Math.random() * 12), Math.floor(Math.random() * 29) )}),
                nums: [],
                elapsedTime: 0,
                isRunning: false,
            }
        },
        created () {
            this.randomize()
        },
        methods: {
            shuffle() {
                this.nums.sort(() => Math.random() - 0.5);
            },
            randomize() {
                this.nums = Array.apply(null, Array(50)).map(function() { return Math.floor(Math.random() * 350 % 100); });
            },
            async sort() {
                this.isRunning = true;
                let timeStart = performance.now();
                this.nums = await QuickSort.implement(this.nums,0,this.nums.length); //or -1
                this.elapsedTime = performance.now() - timeStart;
                this.isRunning = false;
            },
        }
    }
</script>

<style scoped>
    #algo {
        margin: 5px;
    }
</style>