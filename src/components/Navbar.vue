<template>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="" class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Stuffs to do</span>
  </a>
  <div class="flex md:order-2">
    <router-link :to="{name: 'login'}" >
      <button @click="cerrarSesion" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOG OUT</button></router-link>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  </div>
</nav>

<router-view></router-view>
</template>
<script setup>
import { logOut } from '../api';
import { useAuthStore } from '../store/auth';
import router from '../router'

const authStore = useAuthStore();

const cerrarSesion = async ()=>{
  const response = await logOut()
  if (response) {
    authStore.logout()
    router.push({name:'login'})
  }

}


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Playfair+Display:ital,wght@1,400;1,500&family=Poppins:wght@300&family=Roboto:wght@400;700&display=swap'); 

nav{
  background-color: rgba(91, 164, 130, 0.618);
  height: 75px;
  display: flex;
}
.self-center{
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  font-size: 50px;
}
.text-white{
  font-size: 17px;
  background-color: rgb(98, 189, 154);
}

.cerrarSesion{
  color: white;
  font-weight: bold;
  border: 2px solid rgb(98, 189, 154);
  border-radius: 15%;
  margin-left: 8px;
  padding: 6px;
  
}

</style>