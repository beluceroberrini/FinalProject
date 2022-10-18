<template>
    <h1>TASK APP</h1>
    <ul>
        <li> <router-link :to="{name: 'home'}">Home</router-link> </li>
        <li> <router-link :to="{name: 'login'}" >Login</router-link> </li>
    </ul>




<router-view></router-view>
</template>
<script setup>
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

console.log(process.env.NODE_ENV, import.meta.env.BASE_URL)

</script>
<style scoped>
</style>