<script>
export default {
    data() {
        return {
            counter: 0,
            stopStr: false,
            intval: undefined,
            Str: "你好",
        };
    },
    mounted() {
        // this.intval = setInterval(() => {
        //     this.counter++
        // }, 1000)

        this.isStop();
    },
    methods: {
        isStop() {
            this.intval = setInterval(() => {
                this.counter++;
            }, 1000);
        },
        stop() {
            this.stopStr = !this.stopStr;
            if (this.stopStr == false) {
                this.isStop();
            } else {
                clearInterval(this.intval);
            }
        },
    },
};
</script>

<template>
    <button @click="stop" ref="btn">
        {{ stopStr ? "start" : "pause" }}
    </button>
    <div>Counter1: {{ counter + Str }}</div>
</template>

<style scoped>
</style>


