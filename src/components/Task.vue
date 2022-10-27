<template>
    <div class="mx-auto py-20 px-6" >
        <div class="size-task gap-6">
            <div class="rounded">
                <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
                    :class="{ chequeado: props.task.isCompleted }">

                    <div v-if="!show" class="task">

                        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">{{ props.task.title }}</h4>
                        
                        <p class="text-gray-800 dark:text-gray-100 text-sm">
                            {{ props.task.message }} </p>
                        </div>
                        <form @submit.prevent="editarTitle()" v-else action="">
                            <input v-model="props.task.title" placeholder="" type="text" id="">
                            <textarea v-model="props.task.message" name="" id="" cols="30" rows="4"></textarea>
                            <button class="save" type="submit">Save</button>
                        </form>

                        <div>
                        <p class="text-sm">{{ date }}</p>

                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">

                            <button @click="onClick()" 
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="edit note" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>

                                </svg>
                            </button>

                            <button @click="checkTask()" id="check-note"
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="check note" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                </svg></button>

                            <button @click="eliminar()"
                                class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="delete note" role="button">

                                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="white"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="white"></path> </svg>
                            </button>
                            
                            <div class="botonColor bg2" @click="changeColor('rgb(34, 114, 103, 0.711)')"></div>
                            <div class="botonColor bg3" @click="changeColor('rgb(126, 197, 177, 0.552)')"></div>
                            <div class="botonColor bg1" @click="changeColor('rgb(28, 214, 177, 0.602)')"></div>
                            <div role="button"
                                class="Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe VsHK1d INgbqf-LgbsSe VIpgJd-LgbsSe JbbQac-AHmuwe-i5vt6e"
                                tabindex="0" data-tooltip-text="Opciones de fondo" aria-label="Opciones de fondo"
                                style="user-select: none;"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script setup>
import { defineProps, computed, ref } from 'vue';
import { usTaskStore } from '../store/task';
import { deleteTask, updateTask } from '../api';

const show = ref(false)
const taskStore = usTaskStore();
const props = defineProps({
    task: Object
})

const eliminar = async () => {
    const response = await deleteTask(props.task.id) //esto borra de supabase
    taskStore.deleteTask(props.task.id) //aca borra de la pagina
}

const checkTask = () => {
    props.task.isCompleted = !props.task.isCompleted
    updateTask(props.task.id, { isCompleted: props.task.isCompleted })
}

const editarTitle = () =>{
    updateTask(props.task.id, {title: props.task.title, message: props.task.message})
    show.value = !show.value
}
// //computed guarda en una variable un computo de una o mas variables reactivas
const date = computed(() => {
    const fecha = new Date(props.task.created_at)
    return fecha.toLocaleDateString();
})

const changeColor = (color) => {
    
    props.task.color = color;
    updateTask(props.task.id, { color: props.task.color })
}
const onClick = () => {
    show.value = !show.value
}

</script>
<style scoped>
.botonColor {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: solid 1px bisque
}

.bg1 {
    background-color: rgba(28, 214, 177, 0.802);
}

.bg2 {
    background-color: rgba(34, 114, 103, 0.711);
}

.bg3 {
    background-color: rgba(126, 197, 177, 0.552);
}

.chequeado {

    background-color: v-bind('props.task.color')
}

.size-task{
    width: 300px;
    margin: 8px;
    margin-bottom: 5px;
}

.save{
    border: 1px solid rgba(28, 214, 177, 0.802);
    border-radius: 15%;
    padding: 2px 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;

}

textarea, input{
    background-color: transparent;
}

</style>




