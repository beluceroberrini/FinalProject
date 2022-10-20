<template>
  
    <ul>
        <li> <router-link :to="{name: 'home'}">Home</router-link> </li>
        <li> <router-link :to="{name: 'login'}" >Login</router-link> </li>
        <li> <router-link :to="{name: 'register'}" >REGISTRATE</router-link> </li>
    </ul>




<router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { login } from './api';
import { useRouter } from 'vue-router'

// const router = useRouter();

// onMounted(async() =>{
//     router.push({name: 'login'})
// })
</script>
<style scoped>
</style>