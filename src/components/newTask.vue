<template>
    <!-- component -->
<div class="mx-auto container py-20 px-6">
<!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div class="rounded">
                    <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                        <div>
                            <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                            <p class="text-gray-800 dark:text-gray-100 text-sm">Our interior design experts work with you to create the space that you have been dreaming about.</p>
                        </div>
                        <div>
                            <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                                <p class="text-sm">March 28, 2020</p>
                                <button class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                                    <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                      
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button>CREATE</button>
                                
                                  <button>DELETE</button>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
 
        <!-- contador desde el componente Message: {{store.count}} -->
        <!-- <button @click="onClick">Incrementar desde message</button> -->
   
</template>
<script setup>
import {usTaskStore} from '../store/task'

const store = usTaskStore();
const onClick = () => {
    store.setTask();
}

</script>
<style scoped>
</style>