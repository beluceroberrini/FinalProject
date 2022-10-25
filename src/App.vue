<template>
  <Navbar/>
    <ul>
        <!-- <li> <router-link :to="{name: 'home'}">Home</router-link> </li> -->
        <!-- <li> <router-link :to="{name: 'login'}" >Login</router-link> </li>  -->
        <!-- <li> <router-link :to="{name: 'register'}">REGISTRATE</router-link> </li>  -->
    </ul>

<!-- <router-view></router-view> -->
</template>
<script setup>
import { useAuthStore } from './store/auth';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';

const authStore = useAuthStore();
const router = useRouter();


if (authStore.isAuth === false){
    router.push({name: 'login'})
    
}

</script>
<style scoped>
</style>