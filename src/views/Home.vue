<template>
    <div v-if="show" >
        <NewTask/>

    </div>
    <h1>ESTO EST UN TEXTO</h1>
   
    <!-- <router-link> -->
        <button @click="onClick()" v-if="!show" >ADD YOUR NEW TASK!</button>
        
    <!-- </router-link>         -->
   


</template>
<script setup>
import NewTask from '../components/newTask.vue';
import { ref } from 'vue';

const show = ref(false);

const onClick = () =>{
    show.value = !show.value
}




</script>
<style scoped>
</style>