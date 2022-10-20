<template>
    <!-- BOTON NUEVA TAREA -->
    <button @click="onClick()" v-if="!show">Add task</button>

    <div v-if="show" class="max-w-2xl mx-auto">
        <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form @submit.prevent="onLogin()" class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add your task</h3>
                <div>
                    <label for="email"
                        class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Title</label>
                    <input type="email" name="email" id="email" v-model="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Write the title" required="">
                </div>
                <div>
                    <label for="password"
                        class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                    <input type="password" name="password" id="password" v-model="password"
                        placeholder="Description of the project"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required="">
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                    </div>
                    <!-- <a href="#" class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
                                Password?</a> -->
                </div>
                <button type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                <button type="submit" @click="onClick()"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancell</button>
            </form>
        </div>
    </div>











    <div v-if="show">
        <NewTask />

    </div>

    <!-- <router-link> -->
    <!-- <button @click="onClick()" v-if="!show" >ADD YOUR NEW TASK!</button> -->

    <!-- </router-link>         -->



</template>
<script setup>
import NewTask from '../components/newTask.vue';
import { ref } from 'vue';

const show = ref(false);

const onClick = () => {
    show.value = !show.value
}




</script>
<style scoped>

</style>