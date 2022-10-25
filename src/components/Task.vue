<template>
    <div class="mx-auto container py-20 px-6">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="rounded">
            <div
                class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">

                <div class="task">
                    <header>
                        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">{{props.task.title}}</h4>
                    </header>
                    <div>
                        <p class="text-gray-800 dark:text-gray-100 text-sm">
                            {{props.task.message}}
                        </p>
                        <p class="text-sm">{{date}}</p>

                        <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                         
                            <button class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="edit note" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>

                                </svg>
                            </button>
                            
                            <button @click="checkTask()" id="check-note" class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="check note" role="button">                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg></button>
                               <button @click="eliminar()" class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                                aria-label="delete note" role="button">
                                
                                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="currentColor" d="M0 0h24v24H0z"></path> <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z" fill=""></path> </g> </svg>
                            </button>
                                                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { usTaskStore } from '../store/task';
import { deleteTask } from '../api';


//const isCompleted = ref(false);
const taskStore = usTaskStore();
const props = defineProps({
    task: Object
})

const eliminar = async ()=>{
    const response = await deleteTask(props.task.id) //esto borra de supabase
    taskStore.deleteTask(props.task.id) //aca borra de la pagina
}

const checkTask = () =>{
     const checkBoton = document.querySelector('.w-full')
     checkBoton.classList.toggle('chequeado')
}

//isCompleted = !isCompleted

         const editar = () =>{
            //crear input que guaarden la variable nueva
            
         }

// //computed guarda en una variable un computo de una o mas variables reactivas
const date = computed(() =>{
    const fecha= new Date(props.task.created_at)
    return fecha.toLocaleDateString();
})

</script>
<style scoped>

.chequeado{
    background-color: rgb(175, 128, 219);
}

</style>




