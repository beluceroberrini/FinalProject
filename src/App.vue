<template>
  
    <ul>
        <li> <router-link :to="{name: 'home'}">Home</router-link> </li>
        <li> <router-link :to="{name: 'login'}" >Login</router-link> </li>
        <li> <router-link :to="{name: 'register'}" >REGISTRATE</router-link> </li>
    </ul>




<router-view></router-view>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js'
import { onMounted } from 'vue';



// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
// console.log(supabase)

// const registro = async () =>{
//     const result = await supabase.auth.signUp({
//         email: `${email.value}`,
//         password: `${password.value}`
//     }) 
//     console.log(result)
// }
// onMounted(() =>{
//    // registro()
//  })

// //en la vista del login
//  const logIn = async () =>{
//     const response = await supabase.auth.signInWithPassword({
//         email: 'belul@hotmail.com',
//         password: '1234567'
//     })
//    // console.log(response.data.user.id)
//     // nuevoTask(response.data.user.id)
//     // getTasks();
//     updateTask();
//  }

// //crearemos las task
// const newTask = async (id) =>{
//     const response = await supabase.from('task')
//     .insert({
//         user_id: id,
//         title: 'title',
//         description: 'description del task'
//         //identificar la respuesta y retornar
//     })
//   //  console.log(response)
// }

// //obtendremos todas las task del usuario
// const getTasks = async () =>{
//     const response = await supabase
//     .from('task')
//     .select('*')
//     .order('id', { ascending: false })
//   //  console.log(response)
// }

// //Modificaremos el contenido de la tabla en el registro
// const updateTask = async () =>{
    
//     const response = await supabase
//   .from('task')
//   .update({ 
//           title: 'title modificado' ,
//           description: 'description del task'
//    })
//   .eq('id', '1')

//  // console.log(response)
// }

// const deleteTask = async ()=>{
//     const response = await supabase
//   .from('task')
//   .delete()
//   .eq('id', '1')
//  //   console.log(response)
// }

// onMounted(()=>{
//     logIn()
// })



</script>
<style scoped>
</style>