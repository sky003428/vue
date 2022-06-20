<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Count from "./components/count.vue";
import Vfor from "./components/v-for.vue";
import Prop from "./components/prop.vue";
import {uuid} from "vue-uuid";
import { ref } from "vue";
const title = ref("hello");
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Hello Vue 3 + Vite"></HelloWorld> -->
    <div>
        <Count></Count>

        <Vfor></Vfor>
        <!-- <Prop :title="title"></Prop> -->
        <div :title="uuid.v4()">123</div>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
