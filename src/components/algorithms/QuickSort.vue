<script>
    export default {
        // props: {
        //     array: Array,
        //     left: Number,
        //     right: Number,
        // },
        methods: {
            async use(arr, left, right) {
                if (left < right) {
                    const pivot = right;
                    const partitionIndex = await this.partition(arr, pivot, left, right);

                    await this.use(arr, left, partitionIndex - 1);
                    await this.use(arr, partitionIndex + 1, right);
                }
                return arr;
            },
            async partition(arr, pivot, left, right) {
                let pivotValue = arr[pivot],
                    partitionIndex = left;

                for (let i = left; i < right; i++) {
                    if (arr[i] < pivotValue) {
                        this.swap(arr, i, partitionIndex);
                        await this.sleep(50);
                        partitionIndex++;
                    }
                }
                this.swap(arr, right, partitionIndex);
                await this.sleep(50);
                return partitionIndex;
            },
            swap(arr, i, j) {
                let temporaryValue = arr[i];

                this.$set(arr,i,arr[j]);
                this.$set(arr,j,temporaryValue);
            },
            async sleep(ms = 0) {
                return new Promise(r => setTimeout(r, ms));
            }
        }
    }
</script>