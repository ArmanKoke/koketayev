<template>
    <div id="canvas">
        <canvas resize id="main-canvas"></canvas>
        <br>
        <span v-text="array"></span>
    </div>
</template>

<script>
    import paper from 'paper'
    export default {
        data() {
            return {
                offset: 35,
                index: 67,
            }
        },
        props: {
            array: Array
        },
        methods: {
            updateDrawing() {
                paper.setup(document.getElementById('main-canvas'));

                let b = new paper.Path();
                for(let i = 0; i <= this.array.length; i++) {
                    b.add(new paper.Point(i*this.offset, this.array[i]));
                    b.add(new paper.Point(this.array[i], i*this.index));
                }

                b.strokeColor = '#1f1f1f';
                b.fillColor = '#3e3e4e';
            },
        },
        updated() {
            this.updateDrawing()
        },
        mounted() {
            this.updateDrawing()
        }
    }
</script>

<style>
    #canvas {
        margin: 5px;
    }

    #main-canvas {
        height: 500px;
        width: 700px;
        color: #f1f1f1;
        background-color: #0072b1;
    }
</style>