<template>
    <h1>TASK APP</h1>
    <ul>
        <li> <router-link :to="{name: 'home'}">Home</router-link> </li>
        <li> <router-link :to="{name: 'login'}" >Login</router-link> </li>
    </ul>




<router-view></router-view>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase)

console.log(process.env.NODE_ENV, import.meta.env.BASE_URL)

</script>
<style scoped>
</style>