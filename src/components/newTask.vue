<template>

    <Task :title="props.task.title" />
    <Task :message="props.task.message" />


</template>
<script setup>
import { usTaskStore } from '../store/task'
import Task from './Task.vue'
import { defineProps } from 'vue'

const store = usTaskStore();
const onClick = () => {
    store.setTask();
}

const props = defineProps({
    task: Object
})


</script>
<style scoped>

</style>