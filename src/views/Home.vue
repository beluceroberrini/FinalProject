<template>
    <!-- BOTON NUEVA TAREA -->
    <div class="new-task">
        <button @click="onClick()" v-if="!show">New task</button>
    </div>

    <div v-if="show" class="max-w-2xl mx-auto">
        <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto">
            <form @submit.prevent="onSubmit" class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Let's started!</h3>
                <div>
                    <label for="text" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"> Title </label>
                    <input type="text" name="textTitle" id="textTitle" v-model="title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Title" required="">
                </div>
                <div>
                    <label for="text"
                        class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                    <input type="text" name="message" id="message" v-model="message"
                        placeholder="TODO'S"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required="">
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                    </div>
                </div>
                <button type="submit"
                    class="colorBoton w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">Save</button>
                <button type="submit" @click="onClick()"
                    class="colorBoton cancell w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancell</button>
            </form>
        </div>
    </div>
    <div class="flex flex-wrap">
        <Task v-for="task in taskStore.tasks" :task="task"/>

    </div>


</template>
<script setup>
import { ref } from 'vue';
import { newTask } from '../api/index'
import Task from '../components/Task.vue';
import { usTaskStore } from "../store/task";


const show = ref(false);
const title = ref();
const message = ref();
const taskStore = usTaskStore();

const onClick = () => {
    show.value = !show.value
}
const onSubmit = async () => {
    const response = await newTask(title.value, message.value)
    console.log(title.value, message.value)
    taskStore.addTask(title.value, message.value)
    title.value = '',
    message.value = ''
    
}    

//tratar de pasarlo con onMounted()
taskStore.setTask();


</script>
<style scoped>
.new-task{
    /* font-family: 'Playfair Display', serif; */
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.new-task button{
    color: antiquewhite;
    border-radius: 4%;
    background-color: rgba(98, 189, 154, 0.704);
    padding: 10px;
}
.bg-white{
    background-color: rgba(212, 212, 212, 0.423);
    font-family: 'Roboto', sans-serif;
    justify-content: space-around;
    align-items: center;
}               
.bg-white h3{
    font-size: 30px;
    text-align: center;
    font-weight: bold;
}

.text-sm{
    font-size: 17px;
    font-weight:bold;
}

#textTitle{
    font-size: 15px;
}

.colorBoton{
    background-color: rgb(98, 189, 154);
    font-weight: 100;
}

.colorBoton:hover{
    background-color: rgb(74, 133, 110);
}

.cancell:hover{
    background-color: rgb(91, 53, 52)
}


</style>